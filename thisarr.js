let person1={
    name:"bob"
  }
const person = {
    name: 'Alice',
    sayHello: function () {
      console.log(`Hello, my name is ${this.name}.`);
    },sayHelloArrow: () => {
        console.log(`Hello, my name is ${this.name}.`);
      },
   
  };
  
  person.sayHello();      // 'this' refers to 'person' within the regular function
  person.sayHelloArrow(); // 'this' refers to the enclosing context (lexical 'this')
 