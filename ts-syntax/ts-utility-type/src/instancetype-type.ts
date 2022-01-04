// type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

class C {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const coordinate: InstanceType<typeof C> = {
  x: 30,
  y: 30,
};

class D {
  x = 0;
  y = 0;
}

type IT0 = InstanceType<typeof D>;

const newC: IT0 = {
  x: 1,
  y: 1,
};
