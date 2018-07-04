import express from 'express';
import appService from 'config/appService';

test("appFactory should be throw error", () => {
  expect(() => appService()).toThrowError();
});

test("appFactory should be instantiate", () => {
  const app = appService(express());
  expect(app()).toBeTruthy();
});

test("appFactory should be config", () => {
  const app = appService(express());
  const middlewares = [
    (req, res, next = () => ({})) => next,
    (req, res, next = () => ({})) => next,
  ];
  app(middlewares);
});
