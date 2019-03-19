console.log(get_info.toString());
console.log('%c\n passing elements as arguments\n', 'font-weight:bold');

// pojos on the thread

  var pojo_div = {nodeName: 'DIV', id:'pojo-div', innerHTML: 'pojo!'};

    console.log('pojo_div: ', pojo_div);
    console.log('get_info(pojo_div):');
    console.log(' -> ', get_info(pojo_div));
    console.log('\n');


// dom elements in the event loop

  var real_div = document.createElement('div');
  real_div.id = 'real-div'
  real_div.innerHTML = 'im a real div';
    
    console.dir(real_div);
    console.log('get_info(real_div):');
    console.log(' -> ', get_info(real_div));


  /* https://stackoverflow.com/questions/3919291/when-to-use-setattribute-vs-attribute-in-javascript
    there are different ways to access dom element properties
    but this is not the purpose of this example series
    attribute access will work for this example
    and it is most similar to objects so the point is made most clearly
  */

// render the page

  var buttons_div = document.getElementById('buttons');
  var headline = document.createElement('h3');
  headline.innerHTML = 'passing as args';
   
    buttons_div.appendChild(headline);
    buttons_div.appendChild(real_div);
    buttons_div.appendChild(document.createElement('br'));