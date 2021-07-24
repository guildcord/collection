export class Collection<Key, Value> extends Map<Key, Value> {
    public ["constructor"]: typeof Collection;

    /**
     * [Map.has](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)
     * Checks if an element exists in the collection.
     * @param {*} key The key of the element
     * @returns {boolean} If the element exists `true` else false
     */
    public has (key: Key): boolean {
        return super.has(key);
    };

    /**
     * [Map.set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)
     * Adds or updates an element with a specified key and value to collection
     * @param {*} key 
     * @param {*} value 
     * @returns {Collection}
     */
    public set (key: Key, value: Value): this {
        return super.set(key, value);
    };

    /**
     * [Map.get()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)
     * Gets an element from the collection
     * @param {*} key The key of the element 
     * @returns {Value} If element doesn't exist `undefined` else value
     */
    public get (key: Key): Value | undefined {
        return super.get(key);
    };

    /**
     * [Map.delete()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)
     * Deletes an element from the collection
     * @param {*} key The key of the element to delete
     * @returns {boolean} If the element was deleted `true`, if does not exist `false`
     */
    public delete (key: Key): boolean {
        return super.delete(key);
    };

    /**
     * [Map.remove()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)
     * Removes all elements from the collection
     * @returns {undefined}
     */
    public restore (): void {
        return super.clear();
    };
};