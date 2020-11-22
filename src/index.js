import printMe from "./print.js";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = printMe();
  
    return element;
  }
  
  document.body.appendChild(component());

  // if(module.hot) {
  //   module.hot.accept("./print.js", function() {
  //     console.log("print.js updated");
  //     printMe();
  //   })
  // }