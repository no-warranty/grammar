export default class {
  /**
   * @param {Iterable.<string>} callSite
   * @param {Iterable.<string>} substitutions
   * @return {CSSStyleSheet}
   */
  static template(callSite, ...substitutions) {
    return new CSSStyleSheet().replace(callSite.reduce((arr, v, i) => arr.concat(v, substitutions[i]), []))
  }
}
