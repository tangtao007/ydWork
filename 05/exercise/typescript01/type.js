let isDone = false;
let decimal = 6;
let studName = "name";
let list = [1, 2, 3];
let list1 = [1, 2, 3];
// 元组Tuple
/**元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 *  比如，你可以定义一对值分别为 string和number类型的元组。 */
// Declare a tuple type
let x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Erro
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let c = Color.Red; // 获取下标
let colorName = Color[1];
console.log(colorName);
let notSure = 4;
notSure = "maybe a string";
function warnuser() {
    alert("This is my warning message");
}
let myAdd = function (x, y) { return x + y; };
let myAddTwo = function (x, y) { return x + y; };
