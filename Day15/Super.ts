class Parent {
  num: number = 10;
  constructor() {
    console.log("Parent Constructor");
  }
  display(): void {
    console.log("Parent Display Method");
  }
}

class Child extends Parent {
  num: number = 20;
  constructor() {
    super();
    console.log("Child Constructor");
  }
  show(): void {
    console.log(this.num);
    console.log("Child Show Method");
  }

  display(): void {
    super.display();
    console.log("Child Display Method");
  }
}

let c = new Child();
c.show();
c.display();
