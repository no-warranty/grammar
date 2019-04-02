
export default class {
  /**
   * @param {Iterable.<string>} callSite
   * @param {Iterable.<string>} substitutions
   * @return {DocumentFragment}
   */
   static template(callSite, ...substitutions) {
     let _ = document.createElement('template');
     _.innerHTML = callSite.reduce((arr, v, i) => arr.concat(v, substitutions[i]), [])
     return _.content.cloneNode(true);
   }
}
