import Child from "./child-class";

const child = new Child();

window.addEventListener('test-event', function (e) { 
  console.log("Received event.");
}, false);

child.doSomething();