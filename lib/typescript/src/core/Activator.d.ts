/**
 * Manages commercial licenses.
 * @ignore
 */
export declare class Activator {
    private static keys;
    private static keyAddListeners;
    /**
     * Add a license key
     * @param product product identifier.
     * @param key license key sent to you after purchase.
     */
    static addKey(product: string, key: string): void;
    /**
     * Add a function to be called when license key is added.
     * @param listener
     */
    static addKeyAddListener(listener: () => void): void;
    /**
     * Remove a function called when key is added.
     * @param listener
     */
    static removeKeyAddListener(listener: () => void): void;
    /**
     * Returns true if the product is commercially licensed.
     * @param product product identifier.
     */
    static isLicensed(product: string): boolean;
}
//# sourceMappingURL=Activator.d.ts.map