import isRequired from '../utils/isRequired';

const fn = (arg = isRequired()) => arg

test("isRequired() should be throw error", () => {
  expect(() => isRequired()).toThrowError();
});

test("isRequired() should dispatch in function", () => {
  expect(() => fn()).toThrowError();
});

test("isRequired() will not dispatch", () => {
  expect(fn(1)).toBeTruthy();
});
