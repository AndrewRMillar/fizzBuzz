(function(){
  const fizzBuzz = function(nr) {
    const main = document.querySelector('main');
    console.log('fizzBuzz', nr);
    var count = 1;
    while(count < nr){
      var out = '';
      if(!(count % 3)) {
        out = "Fizz";
      }
      if(!(count % 5)) {
        out += "Buzz";
      }
      if(!!out) {
        main.appendChild(fillEl(out));
      } else {
        main.appendChild(fillEl(count));
      }
      count++;
    }
  }

  const createEl = (el) => document.createElement(el);

  const fillEl = (content) => {
    if(Number.isInteger(content)) {
      var el = `
        <div class="item">
          <p>${content}</p>
        </div>`;
    } else if (content.length === 4) {
      var el = `
        <div class="item f-or-b">
          <p>${content}</p>
        </div>`;   
    } else {
      var el = `
        <div class="item fizzbuzz">
          <p>${content}</p>
        </div>`;
    }
    const dom = new DOMParser().parseFromString(el, 'text/html');
    return dom.body.querySelector('.item');
  }

  // document.querySelector('.fizzBuzz').addEventListener('click', () => console.log('poep'))
  document.querySelector('.fizzBuzz').addEventListener('click', () => {
    const nr = document.querySelector(".nr").value;
    fizzBuzz(nr);
  });
})()