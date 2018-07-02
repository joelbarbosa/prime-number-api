import express from 'express';
import appFactory from '../../config/appFactory';

test("appFactory should be throw error", () => {
  expect(() => appFactory()).toThrowError();
});

test("appFactory should be instantiate", () => {
  const app = appFactory(express());
  expect(app()).toBeTruthy();
});

test("appFactory should be config", () => {
  const app = appFactory(express());
  const middlewares = [
    (req, res, next = () => {}) => next,
    (req, res, next = () => {}) => next,
  ];
  app(middlewares);
});
