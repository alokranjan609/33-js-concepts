function outer() {
  let outerVar = 'I am outer!';

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const closureFunc = outer();
closureFunc(); // Outputs: I am outer!
