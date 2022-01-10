const { it, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('done become DONE', (done) => {
  uppercase('done', (str) => {
    try {
      expect(str).toBe('DONE');
      done();
    } catch (error) {
      done (error);
    }
  });
});