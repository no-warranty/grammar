export const css = class {
  /**
   * @param {Iterable.<string>} callSite
   * @param {Iterable.<string>} substitutions
   * @return {CSSStyleSheet}
   */
   
  constructor () {
    return 'static method has been called.';
  }
  static template(callSite, ...substitutions) {
    return (new CSSStyleSheet()).replace(callSite.reduce((arr, v, i) => arr.concat(v, substitutions[i]), []))
  }
}

export default function() {
  return (new.target) 
  ? CSS 
  : CSS.template;
}
