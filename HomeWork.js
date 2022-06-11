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

        if (c >= "A" && c <= "Z")   flag1 = true;
        else if (c >= "0" && c <= "9") flag2 = true;
        else if (c == "!" || c == "@" || c == "#" || c == "$" || c == "%" || c == "^" || c == "&" || c == "*") flag3 = true;
        else flag4 = false;
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
//==========================3================================
let divStars = document.getElementById("picStars");
function generateStars() {
    for (let i = 1; i < 6; i++) {
        divStars.innerHTML += `<img id="s${i}" class="normal" src="images/wzs.gif" alt="lala" title="${i}星評價" 
        onclick="oneClick(${i})" ondblclick="twoClick()" onmouseover="mouseOver(${i})" onmouseout="mouseOut()"/>`
    }
}
generateStars();
let isClicked = false;
let RankCount = 0;
let RankTotal = 0;

function oneClick(i) {
    if (isClicked) return;
    RankCount++;
    RankTotal += i;
    changeToRanked(i);
    changeRankHistory(i);
    isClicked = true;
}

function twoClick() {
    if (!isClicked) return;
    changeToUnRanked();
    isClicked = false;
}

function mouseOver(i) {
    if (isClicked) return;
    changeToRanked(i);
}

function mouseOut() {
    if (isClicked) return;
    changeToUnRanked();
}

function changeToRanked(i) {
    for (let j = 1; j < 6; j++) {
        let item = document.getElementById("s" + j)
        if (j <= i) {
            item.src = "images/dalala.gif"
            item.className="ranked";
        } else {
            item.src = "images/bulala.gif"
            item.className = "unranked";            
        }
    }
}

function changeToUnRanked() {
    for (let j = 1; j < 6; j++) {
        let item = document.getElementById("s" + j)
        item.src = "images/wzs.gif"
        item.classList = "";
        item.classList.add("normal");
    }
}

function changeRankHistory(i) {
    let ps1 = document.getElementById("preStars1");
    let ps2 = document.getElementById("preStars2");
    let ps3 = document.getElementById("preStars3");
    ps1.textContent = `您本次評價： ${i} 星。`
    ps2.textContent = `評價次數： ${RankCount} 次。`
    var f = Math.round(RankTotal*10 / RankCount) / 10;
    ps3.textContent = `平均星數： ${f} 星。`
}
//==========================4================================
let divM = document.getElementById("divMainImg");
let divS = document.getElementById("divSubImg");
let arrayUrl = ["https://twitter.com/fromsoftware_pr","https://twitter.com/Pesoguin1?lang=ja", "https://twitter.com/Zanmyo?lang=ja", "https://twitter.com/pesoguin", "https://mobile.twitter.com/95rn16"];
let len = arrayUrl.length;
let frameIndex = 2;
let dx = 0;
let isStop = false;
let moveDirection = [false, false, true];
for (let i = 0; i < len; i++) {
    if (i == 1)
        divM.innerHTML += `<a id="url${i}" href="${arrayUrl[i + 1]}" target="_blank"><img id="imgM${i}" class="imgM" src="images/cm0${i + 1}.jpg"/></a>`;
    else if (i < 3) {
        divM.innerHTML += `<img id="imgM${i}" class="imgM" src="images/cm0${i + 1}.jpg" onclick="moveImg(${moveDirection[i]})" />`;
    }
    divS.innerHTML += `<img id="imgS${i}" class="imgS" src="images/cm0${i}.jpg" onmouseover="mouseOverImg(${i})"/>`;
}

function movingAnime(i, direction) {
    setTimeout(resetClass, 300, i);
    let pics = document.querySelectorAll(".imgM");
    if (direction) pics.forEach(x => x.classList.add("moveAnimeN"))
    else pics.forEach(x => x.classList.add("moveAnimeP"))
}

function resetClass(i) {
    let pics = document.querySelectorAll(".imgM");
    pics.forEach(x => x.className = "imgM");
    mouseOverImg(i)
}

function mouseOverImg(i) {
    isChanged = true;
    for (let j = 0; j < 3; j++) {
        let index = i + j +dx - 1;

        if (index >= len) index -= len;
        else if (index < 0) index += len;

        document.getElementById("imgM" + j).src = "images/cm0" + index + ".jpg";

        if (j == 1)     document.getElementById("url" + j).href = arrayUrl[index];
        changeFrame(i);
    }
}
mouseOverImg(frameIndex);

function changeFrame(index) {
    for (let i = 0; i < len; i++) {
        document.getElementById("imgS" + i).className = "imgS";
        if (i==index) {
            document.getElementById("imgS" + i).classList.add("imgFrame");
        }
    }
    frameIndex = index;
}

function interval() {
    imgTimer = setInterval(moveImg, 2800,true)
}
interval();

function moveImg(direction) {
    setDx(direction);
    for (let i = 0; i < len; i++) {
        let index = i + dx;
        if (index >= len) index -= len;
        document.getElementById("imgS" + i).src = "images/cm0" + index + ".jpg";
    }
    movingAnime(frameIndex,direction);
}

function setDx(direction) {
    if (direction) dx = dx == 4 ? 0 : dx + 1;
    else dx = dx == 0 ? 4 : dx - 1 ;
}

document.getElementById("nextImg").onclick = () => forBtnMove(true);
document.getElementById("preImg").onclick = () => forBtnMove(false);

function forBtnMove(RL) {
    moveImg(RL);
    if (isStop) return;
    clearInterval(imgTimer);
    interval();
}

document.getElementById("resetFrame").onclick = () => {
    frameIndex = parseInt(len / 2);
    mouseOverImg(frameIndex);
}

document.getElementById("stopMove").onclick = function(){
    if (isStop) {
        stopOrRun(isStop);
        this.textContent = "暫停輪播"
    } else {
        stopOrRun(isStop);
        this.textContent = "繼續輪播"
    }
    isStop = !isStop;
}

document.getElementById("divMainImg").onmouseout = () => {
    if (isStop) return;
    stopOrRun(true);
}

document.getElementById("divMainImg").onmouseover = () => {
    if (isStop) return;
    stopOrRun(false);
}

function stopOrRun(sOR) {
    if (sOR) {
        interval();
        document.getElementById("bookMark4").innerText = "4、廣告輪播"
    }
    else {
        clearInterval(imgTimer);
        document.getElementById("bookMark4").innerText = "4、廣告輪播(暫停中)"
    }
}
//=====================5====================================
let today = new Date();
let selY = today.getFullYear();
let selM = today.getMonth();  //0~11
let selD = today.getDate();
let lDays;
let cDays;
let nDays;
let startD;
let endD;
const startY = 2010;
const endY = 2025;
let dayCount=0;
let divWD = document.querySelector("#weekdate");


let docFrag = document.createDocumentFragment(); //Using fragment,an independent node, can improve efficiency
docFrag.innerHTML = "";
for (let i = startY; i <= endY; i++) {
    docFrag.innerHTML += i == selY ? `<option selected="true" >${i}</option>` : `<option>${i}</option>`;
}
document.querySelector("#selYear").innerHTML += docFrag.innerHTML;

docFrag.innerHTML = "";
for (let i = 1; i <= 12; i++) {
    docFrag.innerHTML += i == selM + 1 ? `<option selected="true" >${i}</option>` : `<option>${i}</option>`;
}
document.querySelector("#selMonth").innerHTML += docFrag.innerHTML;

function howManyDays() {
    selY = document.querySelector("#selYear").value;
    selM = document.querySelector("#selMonth").value - 1;
    lDays = new Date(selY, selM, 0).getDate();
    cDays = new Date(selY, selM + 1, 0).getDate();  
    nDays = new Date(selY, selM + 2, 0).getDate();
    sleOptDate(selD);
}
howManyDays();

function sleOptDate() {    
    if (selD > cDays) selD = cDays;
    document.querySelector("#selDate").innerHTML = "";
    let localFrag = document.createDocumentFragment();  //the search priority of local variable is higher then global one
    localFrag.innerHTML = "";
    for (let i = 1; i <= cDays; i++) {
        localFrag.innerHTML += i == selD ? `<option selected="true" >${i}</option>` : `<option>${i}</option>`;
    }
    document.querySelector("#selDate").innerHTML += localFrag.innerHTML;
    
}

function whichDayStar() {
    startD = new Date(selY, selM, 1).getDay();
    endD = new Date(selY, selM, cDays).getDay();
}
whichDayStar();

function generateLastDate() {
    let localFrag = document.createDocumentFragment();
    localFrag.innerHTML = "";
    for (let i = lDays - startD + 1; i <= lDays; i++) {
        localFrag.innerHTML += (dayCount % 7 == 0 || dayCount % 7 == 6) ? `<div class="lastMH" id="l${i}" onclick="changeCal(true)">${i}</div>` : `<div class="lastM" id="l${i}" onclick="changeCal(true)">${i}</div>`;
        dayCount++;
    }
    divWD.innerHTML += localFrag.innerHTML;
}
generateLastDate();

function generateCurDate() {
    let localFrag = document.createDocumentFragment();
    localFrag.innerHTML = "";
    for (let i = 1; i <= cDays; i++) {
        localFrag.innerHTML+= (dayCount % 7 == 0 || dayCount % 7 == 6) ? `<div class="curMH" id="c${i}" onclick="markDate1()" >${i}</div>` : `<div class="curM" id="c${i}" onclick="markDate1()">${i}</div>`;
        dayCount++;
    }
    divWD.innerHTML += localFrag.innerHTML;
}
generateCurDate();

function generateNextDate() {
    let localFrag = document.createDocumentFragment();
    localFrag.innerHTML = "";
    let complement = dayCount <= 35 ? 13 : 6;
    for (let i = 1; i <= complement-endD; i++) {
        localFrag.innerHTML+= (dayCount % 7 == 0 || dayCount % 7 == 6) ? `<div class="nextMH" id="n${i}" onclick="changeCal(false)" >${i}</div>` : `<div class="nextM" id="n${i}" onclick="changeCal(false)">${i}</div>`;
        dayCount++;
    }
    divWD.innerHTML += localFrag.innerHTML;
    dayCount = 0;
}
generateNextDate();

document.querySelector("#selYear").addEventListener("change", () => selectChange());
document.querySelector("#selMonth").addEventListener("change", () => selectChange());

function selectChange() {
    selY = document.querySelector("#selYear").value;
    selM = document.querySelector("#selMonth").value - 1;
    let selOptY = document.querySelector("#selYear");
    for (let op of selOptY) op.removeAttribute("selected");
    document.querySelector("#selYear").options[selY - startY].setAttribute("selected", "true");
    let selOptM = document.querySelector("#selMonth");
    for (let op of selOptM) op.removeAttribute("selected");
    document.querySelector("#selMonth").options[selM].setAttribute("selected", "true");
    divWD.innerHTML = "";
    howManyDays();
    sleOptDate(selD);
    whichDayStar();
    generateLastDate();
    generateCurDate();
    generateNextDate();
    markDate2();
}
document.querySelector("#selDate").addEventListener("change", () => markDate2());

function markDate1() {
    var selected = document.getElementsByTagName("select")[2].value;
    document.querySelector("#selDate").options[selected - 1].removeAttribute("selected");
    document.querySelector("#selDate").options[event.target.id.substr(1) - 1].setAttribute("selected", "true");
    markDate2();
}

function markDate2() {
    let temp = document.querySelector(".selectedDate");
    if (temp) temp.classList.remove("selectedDate");
    selD = document.querySelector("#selDate").value;
    sleOptDate(selD);
    document.getElementById("c"+selD).classList.add("selectedDate");
    addInfo();
};
markDate2();

docFrag.innerHTML = `<h4>今天的日期是：${selY}年 ${selM + 1}月 ${selD}日。</h4>`;  
function addInfo() {
    document.querySelector("#divMessage").innerHTML = docFrag.innerHTML+`<h4>您選擇的日期是：${selY}年 ${selM+1}月 ${selD}日。</h4>`;
}
document.querySelector("#divMessage").innerHTML = docFrag.innerHTML;

function overRange() {
    document.querySelector("#divMessage").innerHTML = docFrag.innerHTML + `<h4>您選擇的日期超出範圍(${startY}~${endY})。</h4>`;
}

function changeCal(isLastM) {
    if (isLastM) {
        if (selM == 0) {
            if (selY == startY) {
                overRange();
                return;
            }
            document.querySelector("#selYear").options[selY - startY].removeAttribute("selected");
            document.querySelector("#selYear").options[selY - startY - 1].setAttribute("selected", "true");
            document.querySelector("#selMonth").options[0].removeAttribute("selected");
            document.querySelector("#selMonth").options[11].setAttribute("selected", "true");
        } else {
            document.querySelector("#selMonth").options[selM].removeAttribute("selected");
            document.querySelector("#selMonth").options[selM - 1].setAttribute("selected", "true");
        }
    } else {
        if (selM == 11) {
            if (selY == endY) {
                overRange();
                return;
            }
            document.querySelector("#selYear").options[selY - startY].removeAttribute("selected");
            document.querySelector("#selYear").options[selY - startY + 1].setAttribute("selected", "true");
            document.querySelector("#selMonth").options[11].removeAttribute("selected");
            document.querySelector("#selMonth").options[0].setAttribute("selected", "true");
        } else {
            document.querySelector("#selMonth").options[selM].removeAttribute("selected");
            document.querySelector("#selMonth").options[selM + 1].setAttribute("selected", "true");
        }
    }
    selectChange();
    markDate1();
}













