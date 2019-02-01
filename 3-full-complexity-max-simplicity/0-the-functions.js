function get_info(element) {
  return [ element.id, element.nodeName ];
};
console.log(get_info.toString());

function call_get_info() {
  console.log(' -> ', get_info(this));
};
console.log(call_get_info.toString());