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
inputName.addEventListener("blur", () =>{
    var s = inputName.value;
    for (var i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) < 0x4E00 || s.charCodeAt(i) > 0x9FA5) {
            alert("姓名必須全部為中文");
            //ShowMarker();
            break;
        }
    }
})

let inputDate = document.getElementById("input-date");
inputDate.addEventListener("blur", () => {
    let strDate = inputDate.value;
    if (!strDate.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/)) {
        //  RegExp starts by / and ends by / 
        // ^:start from \d:number  $:end  \:escape => \/ means /, the separator of date
        alert("日期格式不正確");
        return false;
    }
    var y = strDate.split("/")[0];
    var m = strDate.split("/")[1] - 1;
    var d = strDate.split("/")[2];
    var date = new Date(y, m, d);
    if (date.getFullYear() != y || date.getMonth() != m || date.getDate() != d) {
        alert("輸入日期無效");
        return false;
    }
    alert("OK");
    return true;
})



//let inputDate = document.getElementById("input-date");
//inputDate.addEventListener("blur", () => {
//    var t = Date.parse(inputDate.value);
//    if (isNaN(t)) {
//        alert('你輸入的不是日期');
//        return;
//    }
//})



//<i class="bi bi-x-circle"></i>
//<i class="bi bi-check-circle"></i>







