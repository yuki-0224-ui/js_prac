console.log("Hello, World!");
let nickname = "taro";
console.log(nickname);

nickname = "sample";
console.log(nickname);

const firstName = "jiro";
console.log(firstName);

const product = {
        name: "りんご",
        price: 100,
};

console.log(product);

product.price = 200;
console.log(product);

product.stock = 50;
console.log(product);

product["name"] = "バナナ";
console.log(product);

let fruits = ["りんご", "バナナ"];
console.log(fruits);

fruits[0] = "ぶどう";
console.log(fruits);

console.log(fruits.length);

const output = (name) => {
        console.log(name);
};

output("test");

const add = (a, b) => {
        return a + b;
};

console.log(add(1, 2));

// const spritStr = (str) => {
//         return str.split(" ");
// };
//
// try {
//         console.log(spritStr(1));
// } catch (e) {
//         alert(e);
// }
