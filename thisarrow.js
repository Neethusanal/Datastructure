function regularFunction() {
    console.log(this); // 'this' refers to the calling context
  }
  
  const arrowFunction = () => {
    console.log(this); // 'this' refers to the enclosing context
  };
  
  const obj = {
    name: 'John',
    regularMethod: regularFunction,
    arrowMethod: arrowFunction,
  };
  
  obj.regularMethod(); // 'this' refers to 'obj' within regularFunction
  obj.arrowMethod();   // 'this' refers to 'obj' within arrowFunction
  
  const globalArrow = arrowFunction;
  globalArrow(); // 'this' refers to the global context (e.g., 'window' in a browser)
  