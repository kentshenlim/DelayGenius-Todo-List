const pubSub = (() => {
  const map = {}; // Event name => listener

  function subscribe(eventName, callback) {
    if (map[eventName] === undefined) map[eventName] = [];
    map[eventName].push(callback);
  }

  function publish(eventName, data) {
    if (map[eventName] === undefined) return;
    const callbacks = map[eventName];
    callbacks.forEach((callback) => {
      callback(data);
    });
  }

  function unsubscribe(eventName, callback) {
    if (map[eventName] === undefined) return;
    const callbacks = map[eventName];
    for (let i = 0; i < callbacks.length; i += 1) {
      if (callbacks[i] === callback) { // By reference
        callbacks.splice(i, 0);
        return;
      }
    }
  }

  return { subscribe, publish, unsubscribe };
})();

export default pubSub;
