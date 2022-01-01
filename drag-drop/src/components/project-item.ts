/// <reference path="base-component.ts"/>
/// <reference path="../decorator/autobind.ts"/>
/// <reference path="../models/project.ts"/>
/// <reference path="../models/drag-drop.ts"/>

namespace App {
  // Project Item Class
  export class ProjectItem
    extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable
  {
    get persons() {
      if (this.project.people === 1) {
        return "1명 참여";
      } else {
        return `${this.project.people}명 참여`;
      }
    }

    constructor(hostId: string, private project: Project) {
      super("single-project", hostId, false, project.id);
      this.project = project;

      this.configure();
      this.renderContent();
    }

    renderContent() {
      this.element.querySelector("h2")!.textContent = this.project.title;
      this.element.querySelector("h3")!.textContent = this.persons;
      this.element.querySelector("p")!.textContent = this.project.description;
    }

    @Autobind
    dragStartHandler(event: DragEvent) {
      // console.log(event);
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move";
    }

    @Autobind
    dragEndHandler(_event: DragEvent) {
      // console.log(event);
    }

    configure() {
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
    }
  }
}
