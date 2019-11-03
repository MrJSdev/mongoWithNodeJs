var names = ['Asif', 'Arshad', 'Asim', 'Shahnawaz', 'Farhan', 'Vicky']

var samA = new Array(6, 3, 4, 5)
var sam2 = new Array(6)
var show = Array(6, 4,4, 6,7)
var call2 = Array.from(Array(8), (x, index) => index + 1)
const mapN = new Map([[1, 2], [2, 4], [4, 8]])
// console.log(call2, '*************')
// console.log(show, '*************')
// console.log(Array.from(mapN), '*************')
let mapToArray = Array.from(mapN)
let flatAr = mapToArray.flat();
console.log(mapToArray)

const newFunc = function(){
  return arguments
}

names = {}
if ([]) console.dir(newFunc())
if (names instanceof Array) console.log('log it success')