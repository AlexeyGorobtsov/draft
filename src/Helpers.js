class Helpers {
    constructor() {
        this.helpers = {}
    }

    /**
     *
     * @param value
     * @returns {Array}
     */

    check(value) {
       return value ? value : [];
    }

    /**
     *
     * @param selector
     * @returns {NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>}
     */
    queryAll(selector) {
            return document.querySelectorAll(selector);
    };

    /**
     *
     * @param selector
     * @returns {*}
     */

    query(selector) {
        return this.check(document.querySelectorAll(selector)["0"]);
    }

    /**
     *
     */

    static getAllClasses(){
        document.addEventListener('DOMContentLoaded', () => {
            const obj = {};
            const arr = [];
            document.querySelectorAll('*').forEach(item => {
                arr.push(item.classList);
            });
            arr.forEach(it => {
                obj[it] = `.${it}`;
            });
            document.write(JSON.stringify(obj));
            return obj

        });

    }

    /**
     *
     */

    static getAllId() {
        document.addEventListener('DOMContentLoaded', () => {
            const obj ={};
            const arr = [];
            document.querySelectorAll('*').forEach(item => {
                arr.push(item.id);
            });
            arr.forEach(it => {
                obj[it] = `#${it}`;
            });
            document.write(JSON.stringify(obj));
            return obj;
        })
    }
}

export default Helpers;