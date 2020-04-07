import './custom-event-polyfill';
import Parent from "./parent-class";

export default class Child extends Parent {
  createCustomMessage() {
    const myEvent = new CustomEvent(
      'test-event',
      {
        detail: {
          type: "test"
        },
        bubbles: true,
        cancelable: true
      }
    );
  
    window.dispatchEvent(myEvent);
  }
}
