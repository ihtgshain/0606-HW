let campus1 = document.getElementById("campus1");
let campus2 = document.getElementById("campus2");
let campus3 = document.getElementById("campus3");
let campus4 = document.getElementById("campus4");
let campus5 = document.getElementById("campus5");

//=========================1===============================================
for (let i = 2; i < 10; i++) {
    campus1.innerHTML += `<div class=nineGrid id=grid${i}></div>`
    let currentGrid = document.getElementById("grid" + i);
    for (let j = 1; j < 10;j++) {
        currentGrid.innerHTML += `<p>${i} * ${j} = ${i * j}</p><br>`
    };    
};
//=========================2===============================================
let inputName = document.getElementById("input-name");
inputName.addEventListener("blur", () => {
    let sp = document.getElementById("span-name");
    let s = inputName.value;
    if (s.length == 0) {
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red"> 姓名欄請勿空白！</span>`;
        return;
    }
    else if (s.length < 2) {
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red"> 姓名至少為兩個字中文！</span>`;
        return;
    }
    else if (s.length > 10) {
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red"> 請勿輸入10個字以上！</span>`;
        return;
    }

    for (var i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) < 0x4E00 || s.charCodeAt(i) > 0x9fff) {
            sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red"> 姓名必須全部為中文！</span>`;
            break;
        }
        else {
            sp.innerHTML = `<i class="bi bi-check-circle"></i><span style="color:green"> 姓名正確！</span>`;
        }
    }
})

let inputPW = document.getElementById("input-pw");
inputPW.addEventListener("blur", () => {
    let pw = inputPW.value.toUpperCase();
    let sp = document.getElementById("span-pw");
    if (pw.length == 0) {
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red"> 密碼欄不可空白！</span>`;
        return;
    }
    else if(pw.length<6){
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red"> 密碼至少須6個字！</span>`;
        return;
    }
    
    let flag1 = false; let flag2 = false; let flag3 = false; let flag4 = true;
    for (let i = 0; i < pw.length; i++) {
        let c = pw.charAt(i);
        if (c >= "A" && c <= "Z") {
            flag1 = true;
        }
        else if (c >= "0" && c <= "9") {
            flag2 = true;
        }
        else if (c == "!" || c == "@" || c == "#" || c == "$" || c == "%" || c == "^" || c == "&" || c == "*") {
            flag3 = true;
        }
        else {
            flag4 = false;
        }
    }

    if (flag1 && flag2 && flag3 && flag4) {
        sp.innerHTML = `<i class="bi bi-check-circle"></i><span style="color:green"> 密碼輸入成功！</span>`;
        return;
    }

    let errExp = "密碼格式錯誤(";
    let temp = "";
    if (!flag3)     temp += "、無特殊字元";
    if (!flag1)     temp += "、無英文字母";
    if (!flag2)     temp += "、無數字";
    if (!flag4)     temp += "、含有非密碼字元";

    errExp += temp.substr(1) + ")！";
    sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">${errExp}</span>`;

})


let inputDate = document.getElementById("input-date");
inputDate.addEventListener("blur", () => {
    let strDate = inputDate.value;
    let sp = document.getElementById("span-date");

    if (!strDate.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/)) {
        //  RegExp starts by / and ends by / 
        // ^:start from \d:number  $:end  \:escape => \/ means /, the separator of date
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red"> 日期格式有誤！</span>`;
        return ;
    }
    let separatedDate = strDate.split("/");
    let y = separatedDate[0];
    let m = separatedDate[1] - 1;
    let d = separatedDate[2];
    let date = new Date(y, m, d);
    if (date.getFullYear() != y || date.getMonth() != m || date.getDate() != d) {
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red"> 輸入的日期無效！</span>`;
    }
    else {
        sp.innerHTML = `<i class="bi bi-check-circle"></i><span style="color:green"> 日期有效！</span>`;
    }
})








