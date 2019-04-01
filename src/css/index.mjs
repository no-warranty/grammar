

export function css (strings, ...keys) {
  return new CSSStyleSheet().replace(strings.reduce((arr, v, i) => arr.concat(v, keys[i]), []))
}
