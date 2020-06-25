/**
 * For methods that apply updates to the original input, this wrapper
 * will convert it to just return that input instead and also verify
 * that the function does not return anything.
 * @argument {Function} fn the function to wrap
 * @argument {number} n (optional) the nth argument to return. (default to 0)
 */
module.exports = (fn, n) => {
  n = n || 0;
  return function() {
    let args = [];
    for (let i = 0; i < arguments.length; ++i) {
      args.push(arguments[i]);
    }
    let output = fn.apply(this, args);
    if (output !== undefined) {
      throw new TypeError("Function output not expected");
    }

    return args[n];
  };
};
