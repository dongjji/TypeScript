namespace App {
  // Validation Interface
  export interface Validatable {
    value: string | number;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  // Validate Function
  export function validate(validatableInput: Validatable) {
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
}
