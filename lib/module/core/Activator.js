"use strict";

/**
 * Manages commercial licenses.
 * @ignore
 */
export class Activator {
  static keys = new Map();
  static keyAddListeners = new Array();

  /**
   * Add a license key
   * @param product product identifier.
   * @param key license key sent to you after purchase.
   */
  static addKey(product, key) {
    Activator.keys.set(product, key);
    Activator.keyAddListeners.forEach(listener => {
      listener();
    });
  }

  /**
   * Add a function to be called when license key is added.
   * @param listener
   */
  static addKeyAddListener(listener) {
    Activator.keyAddListeners.push(listener);
  }

  /**
   * Remove a function called when key is added.
   * @param listener
   */
  static removeKeyAddListener(listener) {
    const li = Activator.keyAddListeners.indexOf(listener);
    if (li > -1) {
      Activator.keyAddListeners.splice(li, 1);
    }
  }

  /**
   * Returns true if the product is commercially licensed.
   * @param product product identifier.
   */
  static isLicensed(product) {
    // NOTE:
    // before removing or modifying this please consider supporting marker.js development
    // by visiting https://markerjs.com/ for details
    // thank you!
    if (Activator.keys.has(product)) {
      const keyRegex = new RegExp(`${product}-[A-Z][0-9]{3}-[A-Z][0-9]{3}-[0-9]{4}`, 'i');
      const key = Activator.keys.get(product);
      return key === undefined ? false : keyRegex.test(key);
    } else {
      return false;
    }
  }
}
//# sourceMappingURL=Activator.js.map