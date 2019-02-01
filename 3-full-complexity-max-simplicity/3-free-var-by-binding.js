console.log(get_info.toString());
console.log(call_get_info.toString());
console.log('%c\n binding "this" in events', 'font-weight:bold');

// pojos on the thread

  var bound_pojo_element = {
    nodeName: 'DIV',
    innerHTML: 'fake div',
    id: 'bound-pojo-element'
  };
    console.log('\nbound_pojo_element: ', bound_pojo_element);
  var bound_to_pojo_printer = call_get_info.bind(bound_pojo_element);
    console.log('var bound_to_pojo_printer = call_get_info.bind(bound_pojo_element);  ');
    console.log('bound_to_pojo_printer(): '), bound_to_pojo_printer();

  var host_pojo_element = {
    nodeName: 'BUTTON',
    innerHTML: 'fake button',
    id: 'host-pojo-element'
  };
    console.log('\nhost_pojo_element: ', host_pojo_element);
  host_pojo_element.onclick = bound_to_pojo_printer;
    console.log('host_pojo_element.onclick = bound_to_pojo_printer;');
    console.log('host_pojo_element.onclick():'), host_pojo_element.onclick();
  

// dom elements in the dom

  var bound_dom_element = document.createElement('div');
  bound_dom_element.innerHTML = 'bound element'
  bound_dom_element.id = 'bound-dom-element';
    console.log('\n');
    console.dir(bound_dom_element);
  var bound_to_element_printer = call_get_info.bind(bound_dom_element);
    console.log('var bound_to_element_printer = call_get_info.bind(bound_dom_element);');
    console.log('bound_to_element_printer(): '), bound_to_element_printer();


  var host_dom_element = document.createElement('button');
  host_dom_element.innerHTML = 'host dom element';
  host_dom_element.id = 'host-dom-element'
    console.log('\n');
    console.dir(host_dom_element);
  host_dom_element.addEventListener("click", bound_to_element_printer);
    console.log('host_dom_element.addEventListener("click", bound_to_element_printer);');
    console.log('host_dom_element.dispatchEvent(new Event("click")):'), host_dom_element.dispatchEvent(new Event('click'));


  var buttons_div = document.getElementById('buttons');
  var headline = document.createElement('h3');
  headline.innerHTML = 'free variable with binding';
  buttons_div.appendChild(headline);
  buttons_div.appendChild(document.createElement('br'));
  buttons_div.appendChild(bound_dom_element);
  buttons_div.appendChild(host_dom_element);
  buttons_div.appendChild(document.createElement('br'));