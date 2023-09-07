function morning(name) {
  console.log("Good Morning, " + name);
}

function sayHi(name) {
  console.log("Hi~ " + name);
}

// console.log(module); //一個大型物件
// Module {
//   id: '.',
//   path: 'C:\\Users\\IT016\\Desktop\\NodeJS',
//   exports: {},
//   filename: 'C:\\Users\\IT016\\Desktop\\NodeJS\\try1.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'C:\\Users\\IT016\\Desktop\\NodeJS\\node_modules',
//     'C:\\Users\\IT016\\Desktop\\node_modules',
//     'C:\\Users\\IT016\\node_modules',
//     'C:\\Users\\node_modules',
//     'C:\\node_modules'
//   ]
// }

// 未設定exports屬性前，印出結果為：
// console.log(module.exports); //{}

// Step2. 將try1.js裡的 function morning 丟給app.js
module.exports.morning = morning; // module.exports.exports的屬性名稱 = 丟出去的function 名稱
// 因為 module.exports.XXX 常被使用，所以可省略成 exports.XXX

// 在設定exports屬性後(module.exports.morning = morning;)，印出結果為：
// console.log(module.exports); //{ morning: [Function: morning], sayHi: [Function: sayHi] }

exports.sayHi = sayHi;
