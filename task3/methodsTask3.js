export function makeItem(name, price, quantity, description) {
    return new Item(name, price, quantity, description);

}

class Item {
    constructor(name, price, quantity, description) {
        // вызывает сеттер
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

export function arrCondition(condition) {
    let setKeys = new Set(["name", "price", "quantity", "description"]);
    let setStr = new Set(["contains", "starts", "ends"]);
    let setSign = new Set(["<=", ">=", "<", "=", ">"]);
    let str = condition;
    let arrCondition = str.split("&");
    let setCondition = new Set();
    for (let str of arrCondition) {
        if (str.includes("name") || str.includes("description")) {
            let arr = str.split("-");
            if (setStr.has(arr[1]) && arr.length === 3) {
                setCondition.add(arr)
            }
        }
        if (str.includes("price") || str.includes("quantity")) {
            let arr = str.split("-");
            if (arr.length === 2) {
                for (let str of setSign) {
                    if (arr[1].indexOf(str) >= 0) {
                        arr.push(arr[1].slice(arr[1].indexOf(str) + 1));
                        arr[1] = arr[1].slice(0, str.length);
                        setCondition.add(arr);
                    }
                }
            }
        }
    }

    return setCondition;
}

export function filterItem(arr, key, method, value) {
    let methods = {
        "contains": (arr, a, b) => (arr.filter(item => item[a].includes(b))),
        "starts": (arr, a, b) => (arr.filter(item => item[a].startsWith(b))),
        "ends": (arr, a, b) => (arr.filter(item => item[a].endsWith(b))),
        "<=": (arr, a, b) => (arr.filter(item => item[a] <= b)),
        ">=": (arr, a, b) => (arr.filter(item => item[a] >= b)),
        "=": (arr, a, b) => (arr.filter(item => item[a] == b)),
        "<": (arr, a, b) => (arr.filter(item => item[a] < b)),
        ">": (arr, a, b) => (arr.filter(item => item[a] > b))
    };
    // alert(method + " " + JSON.stringify(arr) + " " + key + " " + value + " " );
    return methods[method] (arr, key, value);
}