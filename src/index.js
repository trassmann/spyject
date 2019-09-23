export const makeObjectSpy = (targetObj = {}, spyName = "defaultObjectSpy") => {
  console.log(
    `Creating object spy "${spyName}" for object: ${JSON.stringify(targetObj)}`
  );
  const spyHandlers = {
    get: (obj, propName) => {
      console.log(
        `Reading property "${propName.toString()}" on spy "${spyName}" in ${JSON.stringify(
          obj
        )}.`
      );
      return obj[propName];
    },
    set: (obj, propName, value) => {
      console.log(
        `Writing value ${JSON.stringify(
          value
        )} to property "${propName.toString()}" on spy "${spyName}" in ${JSON.stringify(
          obj
        )}.`
      );
      obj[propName] = value;
      return true;
    }
  };
  return new Proxy(targetObj, spyHandlers);
};

export const makeFunctionSpy = (
  targetFunc = () => {},
  spyName = "defaultFunctionSpy"
) => {
  console.log(
    `Creating function spy ${spyName} for function: ${JSON.stringify(
      targetFunc
    )}`
  );
  const spyHandlers = {
    apply: function(target, thisArg, argumentsList) {
      console.log(
        `Called function spy "${spyName}" with arguments ${argumentsList} and context: ${JSON.stringify(
          thisArg
        )}.`
      );

      return target(...argumentsList);
    }
  };
  return new Proxy(targetFunc, spyHandlers);
};
