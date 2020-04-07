interface EventParams {
  detail: object;
  bubbles: boolean;
  cancelable: boolean;
}

export default (() => {
  if (typeof window.CustomEvent === "function") {
    return; // If not IE
  }

  // tslint:disable-next-line:function-name
  function CustomEvent<T>(event: string, params: EventParams): CustomEvent<T> {
    const newParams = params || { bubbles: false, cancelable: false, detail: undefined };
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, newParams.bubbles, newParams.cancelable, newParams.detail);

    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.CustomEvent = (CustomEvent as any);
})();
