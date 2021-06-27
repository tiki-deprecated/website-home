module.exports = {
  lookup(code, val) {
    switch (code) {
      case "test-code":
        return val + 5;
      default:
        return val;
    }
  },
};
