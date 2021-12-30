// Project Type
type Listener = (items: Project[]) => void;

enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

// Project State Management
class ProjectState {
  #projects: Project[] = [];
  #listeners: Listener[] = [];
  private static instance: ProjectState;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const prjId = Math.random().toString();
    const newProject = new Project(
      prjId,
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.#projects.push(newProject);
    for (const listenerFn of this.#listeners) {
      listenerFn(this.#projects.slice());
    }
  }

  addListener(listenerFn: Listener) {
    this.#listeners.push(listenerFn);
  }
}

const projectState = ProjectState.getInstance();

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    // console.log(this.templateElement.content);

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    // console.log(importedNode.firstElementChild);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.#configure();
    this.#attach();
  }

  #gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = +this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: enteredPeople,
      required: true,
      min: 1,
      max: 10,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid Input, Please Try Again!");
      //   throw new Error("Invalid Input");
      return;
    }
    return [enteredTitle, enteredDescription, enteredPeople];
  }

  #clearInput(): void {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
    return;
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    // console.log(this.titleInputElement.value);
    const userInput = this.#gatherUserInput();
    // console.log(userInput);
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.#clearInput();
    }
  }

  #configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  #attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    this.templateElement = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.assignedProjects = [];
    // console.log(this.templateElement.content);

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    // console.log(importedNode.firstElementChild);
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.#renderProjects();
    });

    this.#attach();
    this.#renderContent();
  }

  #attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  #renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type === "active" ? "해야할 일" : "완료한 일";
  }

  #renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      const listItem = document.createElement("li");
      listItem.textContent = prjItem.title;
      listEl.appendChild(listItem);
    }
  }
}

const prjInput = new ProjectInput();
const newProject1 = new ProjectList("active");
const newProject2 = new ProjectList("finished");

// Method decorator for AutoBind
function Autobind(
  _target: any,
  _method: string,
  descriptor: PropertyDescriptor
) {
  //   console.log(descriptor);
  const originalMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  //   console.log(newDescriptor);
  return newDescriptor;
}

// Validation Interface
interface Validatable {
  value: string | number;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

// Validate Function
function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    if (typeof validatableInput.value === "string") {
      isValid = isValid && validatableInput.value.trim().length !== 0;
    }
  }

  if (validatableInput.minLength != null && validatableInput.minLength >= 0) {
    isValid =
      isValid &&
      validatableInput.value.toString().trim().length >=
        validatableInput.minLength;
  }

  if (validatableInput.maxLength != null && validatableInput.maxLength >= 0) {
    isValid =
      isValid &&
      validatableInput.value.toString().trim().length <=
        validatableInput.maxLength;
  }

  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }

  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}
