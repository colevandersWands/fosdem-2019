console.log(get_info.toString());
console.log(call_get_info.toString());
console.log('%c\n contexting "this" in events', 'font-weight:bold');

// pojos on the thread

  var context_pojo_element = {
    nodeName: 'BUTTON',
    innerHTML: 'fake button',
    id: 'context-pojo-element'
  };
  context_pojo_element.onclick = call_get_info;
    
    console.log('\ncontext_pojo_element: ', context_pojo_element);
    console.log('context_pojo_element.onclick = call_get_info;');
    console.log('context_pojo_element.onclick(): '), context_pojo_element.onclick();
    console.log('\n');


// dom elements in the event loop


  var attribute_dom_element = document.createElement('button');
  attribute_dom_element.innerHTML = 'onclick attribute';
  attribute_dom_element.id = 'attribute-dom-element';
  attribute_dom_element.onclick = call_get_info;    

    console.dir(attribute_dom_element);
    console.log('attribute_dom_element.onclick = call_get_info;');
    console.log('attribute_dom_element.onclick();'), attribute_dom_element.onclick();
    console.log('\n');


  var listener_dom_element = document.createElement('button');
  listener_dom_element.innerHTML = 'onclick listener';
  listener_dom_element.id = 'listener-dom-element';
  listener_dom_element.addEventListener("click", call_get_info);

    console.dir(listener_dom_element);
    console.log('listener_dom_element.addEventListener("click", call_get_info);');
    try {
      console.log('listener_dom_element.onclick():'), listener_dom_element.onclick();
    } catch(err) {
      console.error(err);
      console.log('listener_dom_element.dispatchEvent(new Event("click"):'), listener_dom_element.dispatchEvent(new Event('click'));
    };


// render the page

  var buttons_div = document.getElementById('buttons');
  var headline = document.createElement('h3');
  headline.innerHTML = 'free variable with context';
  buttons_div.appendChild(headline);
  buttons_div.appendChild(attribute_dom_element);
  buttons_div.appendChild(document.createElement('br'));
  buttons_div.appendChild(listener_dom_element);
  buttons_div.appendChild(document.createElement('br'));