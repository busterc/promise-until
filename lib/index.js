export default (condition, action) => {
  function wrap(fn) {
    return new Promise((resolve) => {
      resolve(fn());
    });
  }

  return wrap(function loop() {
    if (!condition()) {
      return wrap(action)
        .then(loop);
    }
  });
};
