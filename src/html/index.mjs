
export function html(strings, ...keys) {
  let _ = document.createElement('template');
  _.innerHTML = strings.reduce((arr, v, i) => arr.concat(v, keys[i]), [])
  return _.content.cloneNode(true);
}
