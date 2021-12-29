// //-------------------------------區域全域--------------------------------  
// // 全域變數
// let x = 10; // 兩邊都用var，區域會把全域覆蓋掉
// {
//     // 區域變數
//     let x = 20; // 用var就會錯
//     let y = '30'
//     // 網頁上的print的感覺，在console裡面可看到
//     console.log(x); // x = 20
// }
// console.log(x); // x = 10

// //----------------------------變數設定-----------------------------------
// const PI = 3.1415926 // const設定常數 跟final類似
// let radius = prompt("請輸入半徑:")
// console.log(radius + 10) // 字串+數字會變串接
// console.log(radius - 10) // 字串-*/%數字會變運算
// area = radius * radius * PI
// console.log(radius, typeof (radius), area) // typeof()查看型態
// document.write("<h2>" + area + "</h2>") //輸出至網頁上

// //-----------------------------string相關函數--------------------------------
// const email = "jigsaw7525@gmail.com"
// console.log(email); // 輸入email
// console.log(typeof (email)); // 型態
// console.log(email.toUpperCase()); // 變大寫
// console.log(email.toLowerCase()); // 變小寫
// console.log(email.substring(0, 6)); // 查看index0~5的字
// console.log(email.indexOf("a")); //a在index多少
// console.log(email.indexOf("1")); // 1在index多少 不在會輸出-1
// console.log(email.replace("jigsaw", "wender")); // 替換字串 後面取在前面
// // email = email.replace("jigsaw", "wender") //已設定為const所以無法更改
// console.log(email.includes("jigsaw")); // 是否包含此字串 有為true
// console.log(email.includes("wender")); // 是否包含此字串 否為false
// for (let i = 0; i < email.length; i++) { // 迴圈輸出每個字對應的index
//     console.log(i, email[i]);
// }

// //-----------------------------型態運算--------------------------------
// let x = 20;
// let y = 10;
// console.log(x, y); // 20 10
// console.log(++x, y++); // 先加後加 21 10
// console.log(x, y); // 21 11

// console.log("A" > "a"); // 布林值比對ascii碼
// let a = "25";
// let b = 25;
// console.log(a == b); // 會自動比對數值
// console.log(a === b); // 數值與型態必須一致

// //-----------------------------邏輯運算--------------------------------
// let x = 10;
// let y = 20;
// let z = 30;
// if (x < y && x < z) {
//     console.log(1);
// }
// if (x < y || x > z) {
//     console.log(2);
// }
// if (!(x > y) && x < z) {
//     console.log(3);
// }
// x = ""; //空字串為false
// if (!x) { //!false為true
//     console.log(4);
// }

// //-----------------------------Math.random--------------------------------
// console.log(Math.PI);
// console.log(Math.E);
// const x = 7.7;
// console.log(x); // 7.7
// console.log(Math.abs(x)); //7.7
// console.log(Math.ceil(x)); //8 ceil取大於等於自己的那個整數
// console.log(Math.floor(x));//7 floor取小於等於自己的那個整數
// console.log(Math.round(x)); //8 round四捨五入

// console.log(Math.random()); //0~0.99...
// console.log(Math.random() * 10); //0~9.99...
// console.log(Math.floor(Math.random() * 10)); //0~9 floor取小於等於自己的那個整數
// console.log(Math.floor(Math.random() * 10) + 1); //1~10
// // console.log(Math.floor(Math.random() * (end - start +1)) + start); //start~end
// console.log(Math.floor(Math.random() * (100 - 10 + 1)) + 10); //10~100

// //-----------------------------大樂透--------------------------------
const title = document.querySelector("h1");
console.log(title);
title.innerText = "大樂透開獎"
title.innerText = "2021/12/29" + title.innerText
const subtitle = document.querySelector("h3");
subtitle.innerHTML = `<h2>${subtitle.innerText}請按鈕開獎</h2>`

const lotto = document.querySelector(".lotto-number")
const startBtn = document.querySelector("#start")

startBtn.addEventListener("click", () => {
    console.log("ckick!")
    lotto.innerHTML = "<ul>"
    for (j = 0; j < 5; j++) {
        let lottoNumber = getLottoNumber(START, END, numbers, special);
        lottoNumber = lottoNumber.join(" ");
        lotto.innerHTML += `<li>${lottoNumber}</li>`
    }
    lotto.innerHTML += "</ul>"
})

title.align = "center"
title.style.backgroundColor = "#ff0000";
title.style.color = "white";
subtitle.align = "center"
subtitle.style.backgroundColor = "blue"
subtitle.style.color = "white"

const get_random_number = (START, END) => Math.floor(Math.random() * (END - START + 1)) + START;
function getLottoNumber(START, END, numbers, special = false) {
    let lottoNumber = [];
    let count = 0
    do {
        number = get_random_number(START, END);
        if (!lottoNumber.includes(number)) {
            lottoNumber.push(number);
            count++
        }
    }
    while (count != numbers);
    lottoNumber.sort((a, b) => {
        return a - b;
    })
    if (special) {
        lottoNumber.push(get_random_number(START, END));
    }
    return lottoNumber
}
console.log("大樂透開獎")
const START = 1;
const END = 49;
let numbers = 6
let special = true

// let lotto = "<ul>"
// for (j = 0; j < 5; j++) {
//     let lottoNumber = getLottoNumber(START, END, numbers, special);
//     lottoNumber = lottoNumber.join(" ");
    //document.write(`<h4>第${j + 1}組</h4>`)
    //for (i = 0; i < 6; i++) {
    // // number = Math.floor(Math.random() * (END - START + 1)) + START
    //lottoNumber += number + "&nbsp; &nbsp; "
    //document.write(`<h3>第${i + 1}個號碼: ${number}</h3>`);
    //}
    // lotto += `<li>${lottoNumber}</li>`
// }
// lotto += "</ul>"
// console.log(lotto)
// document.write(lotto)

// //-----------------------------Array--------------------------------
// let student = [
//     ["jerry", 78, 67, 89],
//     ["mary", 100, 99, 88, 100],
//     ["kevin", 77, 99, 88]
// ];
// for (let i = 0; i < student.length; i++) {
//     const name = student[i][0];
//     const scores = student[i].slice(1, student[i].length);
//     let total = 0;
//     for (let j = 0; j < scores.length; j++) {
//         total += scores[j];
//     }
//     let avg = total / scores.length;
//     console.log(name, total, avg.toFixed(2));
// }

// //-----------------------------BMI--------------------------------
// const get_Bmi = (height, weight, point = 2) => {
//     return (weight / (height / 100) ** 2).toFixed(point)
// }

// console.log(get_Bmi(175, 67, point = 3));
// console.log(getBmi(175, 67, point = 3));
// function getBmi(height, weight, point = 2) {
//     bmi = weight / (height / 100) ** 2
//     return bmi.toFixed(point)
// }








