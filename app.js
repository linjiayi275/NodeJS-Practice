// Module Wrapper：
// (function(exports, require, module, __filename, __dirname) {
//   // Module code actually lives in here
// }); 


// ----------------------------------------------------------------


// 以下使用node.js執行才會出現，因為屬於Module Wrapper：
// console.log(__filename); //印出目前檔案路徑位置 - C:\Users\IT016\Desktop\NodeJS\app.js
// console.log(__dirname); //印出目前所在的資料夾路徑位置 - C:\Users\IT016\Desktop\NodeJS


// ---------------------------------------------------------------- //
// ----------------------------分割線------------------------------ //
// ---------------------------------------------------------------- //


// 製作自己的 Module - Self Made Modules
// 會使用到 此檔案app.js 與 greeting資料夾裡的 index.js & try1.js & try2.js
/**
 * Step1. 先做一個try1.js與try2.js
 * Step2. 在try1.js裡將要傳入的內容exports出來
 * Step3. 在此(app.js)接收try1.js所exports出來的東西
 */

// Step3.
// let try1 = require("./try1");

// // console.log(try1); // 會將try1內module物件的exports打印出來
// // { morning: [Function: morning], sayHi: [Function: sayHi] }

// // 因為有require try1的 function morning，所以可以在此使用
// let myName = "Cara";
// try1.morning(myName); //Good Morning, Cara
// try1.sayHi(myName); //Hi~ Cara

// // 自己練習try2
// let try2 = require("./try2");
// try2.night(myName); //Good night, Cara


// ----------------------------------------------------------------


// 正常工作會遇到的狀況
// 通常會需要exports多個JS檔，所以會將同種類型的JS檔放進同個資料夾裡
// 例如：
/**
 * StepA. 建立一個 greeting資料夾
 * StepB. 再建立一個index.js引入有放function的JS(try1.js與try2.js)
 * StepC. 在此處引入greeting資料夾
 */

// StepC.
// let greeting = require("./greeting");
// console.log(greeting);
// // {
// //   morning: [Function: morning],
// //   sayHi: [Function: sayHi],
// //   night: [Function: night]
// // }

// // 在此處就可以使用 try1.js與try2.js內的function
// let hisName = "Mike";
// greeting.morning(hisName); //Good Morning, Mike


// ---------------------------------------------------------------- //
// ----------------------------分割線------------------------------ //
// ---------------------------------------------------------------- //


// 內建的 Modules - Node Built-in Modules

// Path - 
// ** path.join([...paths])
// let path = require("path"); //require path就可以取用到內建的 Modules

// console.log(path.join(__dirname, "try.js")); // .join() 可以將前後輸入的東西串在一起，此處就是將 __dirname(目前所在的資料夾路徑位置) 與 "try.js" 串在一起
// C:\Users\IT016\Desktop\NodeJS\try.js

// 可以將path.join() 用一個變數接住，如下：
// let newPath = path.join(__dirname, "try.js");
// console.log(newPath);
// C:\Users\IT016\Desktop\NodeJS\try.js

// ** path.extname(path)
// console.log(path.extname(__filename)); // .extname(A) 會得到 A 的 extname(擴展名)，此處取得目前這個檔案的 extname
// .js

// ** path.basename(path[, suffix])
// console.log(path.basename(__filename)); //.basename(A) 會得到 A 的檔案名，此處取得目前這個檔案的名稱


// ----------------------------------------------------------------


// URL - 
// const url = require("url");

// const myTestURL = "http://127.0.0.1:5501/form.html?name=%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97&species=test%40gmail.com&comments=%E4%BD%A0%E7%9A%84%E7%95%99%E8%A8%80123&interest=html";
// // 以上存於 NodeJS-Built-in-Modules-URL測試用 資料夾內

// const parsedURL = url.parse(myTestURL, true); //這裡第二個參數預設為 false；這裡使用true，表示直接將查詢字符串轉為一個對象，通過query屬性來訪問。
// // url.parse() 的替換方法new URL()，URl.parse()的使用。 - https://blog.51cto.com/u_15808854/5716211

// console.log(parsedURL.host); 
// // 127.0.0.1:5500 (含port)
// console.log(parsedURL.hostname); 
// // 127.0.0.1
// console.log(parsedURL.pathname); 
// // /form.html
// console.log(parsedURL.path); 
// // /form.html?name=%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97&species=test%40gmail.com&comments=%E4%BD%A0%E7%9A%84%E7%95%99%E8%A8%80123&interest=html
// console.log(parsedURL.query); 
// // [Object: null prototype] {
// //   name: '你的名字',
// //   species: 'test@gmail.com',
// //   comments: '你的留言123',
// //   interest: 'html'
// // }
// console.log(parsedURL.query.species); 
// // test@gmail.com
// console.log(typeof parsedURL.query); 
// // object


// ----------------------------------------------------------------


// fs - file system
// 通常用來記錄網站什麼麼時候發生哪些事 - 例如：2023-08-04 15:00:02 首頁505
// const fs = require("fs");

// fs.writeFile("try.txt", "Today is a good day.",(e) => { // fs.writeFile("文件名稱", "寫入的內容", 函式-可以是匿名函式、箭頭函式或標準的函式) - 函式記得寫參數，此處寫的參數 e 代表 error
//   if (e) throw e;

//   console.log("Finish has been written.");
// }); 
// // 執行後，會自動 try.txt，若無error 內容會是 Today is a good day.，並且印出 Finish has been written.

// fs.readFile("./try.txt", "utf-8", (e, data) => { // fs.readFile("文件名稱", "Unicode編碼", 函式-可以是匿名函式、箭頭函式或標準的函式) - 函式記得寫兩個參數，此處寫的參數 e 代表 error，data 代表 try.txt 的內容
//   if(e) throw e;

//   console.log(data);
// })
// 執行後，會讀取 try.txt，若無error，會印出 Today is a good day.

// fs.readFile("./test.txt", "utf-8", (e, data) => {
//   if(e) throw e;
//   console.log(data);
// })
// 因為沒有 test.txt 這個檔，所以會跳出錯誤：
// C:\Users\IT016\Desktop\NodeJS\app.js:151
//   if(e) throw e;
//         ^
// [Error: ENOENT: no such file or directory, open 'C:\Users\IT016\Desktop\NodeJS\test.txt'] {
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'C:\\Users\\IT016\\Desktop\\NodeJS\\test.txt'
// }
// Node.js v18.17.0


// ----------------------------------------------------------------


// Node Server
// const http = require("http");
// const url = require("url");
// const fs = require("fs");
// const path = require("path");

// // 做出一個 server，要放入一個 callback function，
// // callback function 裡要放 arrow function，
// // arrow function 參數要放入，
// // 一個 request - req：客戶端的請求
// // 及一個 response - res：伺服器的回覆
// const server = http.createServer((req, res) => {
//   // console.log(req); //在CMD執行後，打開網頁 http://localhost:3501/，CMD會印出大量資訊，其資訊就是客戶端給伺服器得請求
//   // 常用到的有 url - 這邊使用 chrome 會印出 /favicon.ico，老師用的 firefox 不會，所以我先用 if 取消掉
//   // favicon-interceptor.js - https://gist.github.com/kentbrew/763822
//   // Express js prevent GET /favicon.ico - https://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico
//   // if (req.url !== "/favicon.ico") {
//   //   console.log(req.url); // 印出 /
//   // }

//   // res.writeHead(200, {'Content-Type': 'text/html'});
//   // res.write("<h1>You are on the homepage.</h1>");
//   // res.write(
//   //   "<p>You can type something at the end of the url to visit other content.<p>"
//   // );
//   // res.end();

//   if (req.url == "/") {
//     fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data); //這裡的 data，就是從 index.html 拿來的
//       res.end();
//     });
//   } else {
//     let parsedURL = url.parse(req.url);
//     res.write("Hello, " + parsedURL.pathname); //你在網址列的 / 後加上啥，就會印出啥
//     res.end();
//   }
// }); 


// server.listen(3501 ,() => { //聆聽 localhost:3501 (127.0.0.1:3501)，不使用 port：0~1023(因為是保留端口)
//   console.log("Server is running on port 3501.");
// }); 


// ---------------------------------------------------------------- //
// ----------------------------分割線------------------------------ //
// ---------------------------------------------------------------- //


// npm - 使用別人的 modules
/** 使用 npm 步驟 - 以 cowsay 這個 module 為例：
 * Step 1. 需先在專案資料夾位置 (CMD)：npm init
 * Step 2. 在CMD輸入資訊
 * Step 3. 到專案資料夾確認是否有 package.json 這個檔案，裡面內容就是剛剛輸入的資訊
 * Step 4. 開啟 https://www.npmjs.com/，尋找要套用的modules - cowsay
 * Step 5. 在 CMD 輸入 npm i cowsay  or  npm install -g cowsay
 * Step 6. 到專案資料夾會看到 node_modules 這個資料夾，裡面會有很多東西 - 包含 cowsay 這個資料夾
 * Step 7. 到專案資料夾打開 package.json 這個檔案，會發現多出
            "dependencies": {
              "cowsay": "^1.5.0"
            }
            ，所以你所安裝的 modules 都會出現在 dependencies 裡。
 * Step 8. 到 https://www.npmjs.com/ 裡的 cowsay 這個 module 的網站，找到 Usage as a module，複製其例子，貼進 app.js
 * Step 9. 將 var 改為 const
 * Step 10.在 CMD 輸入 node app.js，查看執行結果 
 * Step 11.修改內容，變成如下
            text : "I'm a Taiwanese cow.",
            e : "□□",
            T : "U "
 * Step 12.再次於 CMD 輸入 node app.js，查看執行結果
 */


// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a Taiwanese cow.",
//     e : "□□",
//     T : "U "
// }));
// ______________________
// < I'm a Taiwanese cow. >
//  ----------------------
//         \   ^__^
//          \  (□□)\_______
//             (__)\       )\/\
//              U  ||----w |
//                 ||     ||


// ----------------------------------------------------------------

