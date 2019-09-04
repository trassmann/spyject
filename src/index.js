const makeSpyject = (spyName = "defaultSpy") => {
  const spyHandlers = {
    get: (obj, propName) => {
      console.log(`Reading property ${propName} on spy ${spyName} in ${obj}.`);
      return obj[propName];
    },
    set: (obj, propName, value) => {
      console.log(
        `Writing value ${value} to property ${propName} on spy ${spyName} in ${obj}.`
      );
      obj[propName] = value;
      return true;
    }
  };
  return new Proxy({}, spyHandlers);
};

export default makeSpyject;
