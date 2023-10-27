function outerFunction() {
    const name = 'John';
  
    const innerArrowFunction = () => {
      console.log(`Hello, my name is ${this.name}.`);
    };
  
    return innerArrowFunction;
  }
  
  const obj = {
    name: 'Alice',
    sayHello: outerFunction(),
  };
  
  obj.sayHello(); // Outputs: "Hello, my name is Alice."
  