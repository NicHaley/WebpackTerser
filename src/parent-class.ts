export default abstract class Parent {
  abstract createCustomMessage(): void;

  doSomething() {
    this.createCustomMessage();
  }
}