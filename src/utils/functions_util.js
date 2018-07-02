import PrimeNumberErrorHandle from './PrimeNumberErrorHandle';

const callParallelFunctions = fns => {
  if (!Array.isArray(fns)) {
    throw new PrimeNumberErrorHandle('only array of functions');
  }
  return Promise.all(fns)
  .catch(err => new PrimeNumberErrorHandle(err));
}

const callChainFunctions = fns => {
  if (!Array.isArray(fns)) {
    throw new PrimeNumberErrorHandle('only array of functions');
  }
  return fns.reduce((prevFn, nextFn) =>
    prevFn.then(nextFn), Promise.resolve());
}

export {
  callParallelFunctions,
  callChainFunctions
}
