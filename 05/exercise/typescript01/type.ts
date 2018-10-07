let isDone: boolean = false
let decimal: number = 6;
let studName: string = "name";
let list: number[] = [1,2,3];
let list1: Array<number> = [1,2,3];
// 元组Tuple
/**元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 *  比如，你可以定义一对值分别为 string和number类型的元组。 */
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Erro
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Red;// 获取下标
let colorName: string = Color[1];
console.log(colorName);

let notSure: any = 4;
notSure = "maybe a string"

function warnuser(): void{
  alert("This is my warning message");
}

let myAdd: (x: number, y: number) => number =
function(x: number, y: number): number { return x + y; };

let myAddTwo = function (x: number, y: number): number {return x + y}