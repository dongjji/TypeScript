namespace App {
  // Method decorator for AutoBind
  export function Autobind(
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
}
