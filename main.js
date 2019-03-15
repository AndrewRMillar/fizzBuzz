const fizzBuss = function(nr) {
  var count = 1;
  while(count < nr){
    let p = createEl("p");
    var out = '';
    if(!(count % 3)) {
      out = "Fizz";
    }
    if(!(count % 5)) {
      out += "Buzz";
    }
    if(!!out) {
      document.body.appendChild(fillEl(out));
    } else {
      document.body.appendChild(fillEl(count));
    }
    count++;
  }
}

const createEl = (el) => document.createElement(el);

const fillEl = (content) => {
  const p = createEl("p");
  p.innerText = content;
  return p;
}