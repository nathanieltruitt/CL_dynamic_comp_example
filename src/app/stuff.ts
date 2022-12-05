class Parent {
  isOpen = false;
  flip() {
    this.isOpen = !this.isOpen;
  }
}

class Child {
  name = 'billy';
}

const parent1 = new Parent();
parent1.flip();

if (parent1.isOpen) {
  let child = new Child();
}
