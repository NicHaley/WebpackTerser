import './custom-event-polyfill';

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

window.addEventListener('test-event', function (e) { 
  console.log("Received event.");
}, false);

window.dispatchEvent(myEvent);