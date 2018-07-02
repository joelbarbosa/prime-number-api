import PrimeErrorHandle from 'utils/PrimeErrorHandle';

const callParallelFunctions = fns => {
  if (!Array.isArray(fns)) {
    throw new PrimeErrorHandle('only array of functions');
  }
  return Promise.all(fns)
  .catch(err => new PrimeErrorHandle(err));
}

const callChainFunctions = fns => {
  if (!Array.isArray(fns)) {
    throw new PrimeErrorHandle('only array of functions');
  }
  return fns.reduce((prevFn, nextFn) =>
    prevFn.then(nextFn), Promise.resolve());
}

export {
  callParallelFunctions,
  callChainFunctions
}
