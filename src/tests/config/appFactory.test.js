import express from 'express';
import appService from 'config/appService';

test("appService should be throw error", () => {
  expect(() => appService()).toThrowError();
});

test("appService should be instantiate", () => {
  const app = appService(express());
  expect(app()).toBeTruthy();
});

test("appService should be config", () => {
  const app = appService(express());
  const middlewares = [
    (req, res, next = () => {}) => next,
    (req, res, next = () => {}) => next,
  ];
  expect(app(middlewares)).toBeTruthy();
});
