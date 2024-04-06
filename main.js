let scroll = document.querySelector('.up');
let aside = document.getElementById("aside");
let menu = document.getElementById("menu");
let cursor = document.querySelector(".cursor");

addEventListener("mousemove",function (e) {
  cursor.style.cssText = `
  top:${e.y -20}px;
  left:${e.x -20}px
  `
})




menu.onclick = function () {
  aside.classList.toggle("opeen");
  menu.classList.toggle("active");
}

window.onscroll = function(){
if(scrollY >= 300){
  scroll.classList.add('open');

}
else {
  scroll.classList.remove('open');

}
}
scroll.onclick = function () {
  window.scrollTo({
    top:0,

  })
}
let input = document.getElementById("input");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");
let input7 = document.getElementById("input7");
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let input10 = document.getElementById("input10");
let input11 = document.getElementById("input11");
let input12 = document.getElementById("input12");

let i = 1;
let i1 = 1;
let i2 = 1;
let i3 = 1;
let i4 = 1;
let i5 = 1;
let i6 = 1;
let i7 = 1;
let i8 = 1;
let i9 = 1;
let i10 = 1;
let i11 = 1;

function three(id) {

  if (i <= 3) {
    input.value = `${i++} مرة`;
  }
  if(input.value === "3 مرة"){
    input.style.background = "#03a9f466";
    input.style.border = "3px solid #03a9f4";
  }
}

function three1(id) {

  if (i1 <= 3) {
    input2.value = `${i1++} مرة`;
  }
  if(input2.value === "3 مرة"){
    input2.style.background = "#03a9f466";
    input2.style.border = "3px solid #03a9f4";
  }
}

function three2(id) {

  if (i2 <= 3) {
    input3.value = `${i2++} مرة`;
  }
  if(input3.value === "3 مرة"){
    input3.style.background = "#03a9f466";
    input3.style.border = "3px solid #03a9f4";
  }
}

function three3(id) {

  if (i3 <= 3) {
    input4.value = `${i3++} مرة`;
  }
  if(input4.value === "3 مرة"){
    input4.style.background = "#03a9f466";
    input4.style.border = "3px solid #03a9f4";
  }
}
function three4(id) {

  if (i4 <= 3) {
    input5.value = `${i4++} مرة`;
  }
  if(input5.value === "3 مرة"){
    input5.style.background = "#03a9f466";
    input5.style.border = "3px solid #03a9f4";
  }
}

function three5(id) {

  if (i5 <= 3) {
    input6.value = `${i5++} مرة`;
  }
  if(input6.value === "3 مرة"){
    input6.style.background = "#03a9f466";
    input6.style.border = "3px solid #03a9f4";
  }
}

function three6(id) {

  if (i6 <= 3) {
    input7.value = `${i6++} مرة`;
  }
  if(input7.value === "3 مرة"){
    input7.style.background = "#03a9f466";
    input7.style.border = "3px solid #03a9f4";
  }
}

function three7(id) {

  if (i8 <= 3) {
    input8.value = `${i7++} مرة`;
  }
  if(input8.value === "3 مرة"){
    input8.style.background = "#03a9f466";
    input8.style.border = "3px solid #03a9f4";
  }
}

function three8(id) {

  if (i8 <= 3) {
    input9.value = `${i8++} مرة`;
  }
  if(input9.value === "3 مرة"){
    input9.style.background = "#03a9f466";
    input9.style.border = "3px solid #03a9f4";
  }
}

function three9(id) {

  if (i9 <= 3) {
    input10.value = `${i9++} مرة`;
  }
  if(input10.value === "3 مرة"){
    input10.style.background = "#03a9f466";
    input10.style.border = "3px solid #03a9f4";
  }
}

function three10(id) {

  if (i10 <= 3) {
    input11.value = `${i10++} مرة`;
  }
  if(input11.value === "3 مرة"){
    input11.style.background = "#03a9f466";
    input11.style.border = "3px solid #03a9f4";
  }
}

function three11(id) {

  if (i11 <= 3) {
    input12.value = `${i11++} مرة`;
  }
  if(input12.value === "3 مرة"){
    input12.style.background = "#03a9f466";
    input12.style.border = "3px solid #03a9f4";
  }
}

let input13 = document.getElementById("input13");
let input14 = document.getElementById("input14");
let input15 = document.getElementById("input15");
let input16 = document.getElementById("input16");
let input17 = document.getElementById("input17");
let input18 = document.getElementById("input18");
let input19 = document.getElementById("input19");
let input20 = document.getElementById("input20");
let input21 = document.getElementById("input21");
let input22 = document.getElementById("input22");
let input23 = document.getElementById("input23");
let input24 = document.getElementById("input24");
let input25 = document.getElementById("input25");
let input27 = document.getElementById("input27");

let i12 = 1;
let i13 = 1;
let i14 = 1;
let i15 = 1;
let i16 = 1;
let i17 = 1;
let i18 = 1;
let i19 = 1;
let i20 = 1;
let i21 = 1;
let i22 = 1;
let i23 = 1;
let i24 = 1;
let i25 = 1;

function three12(id) {

  if (i12 <= 4) {
    input13.value = `${i12++} مرة`;
  }
  if(input13.value === "4 مرة"){
    input13.style.background = "#03a9f466";
    input13.style.border = "3px solid #03a9f4";
  }
}

function three13(id) {

  if (i13 <= 4) {
    input14.value = `${i13++} مرة`;
  }
  if(input14.value === "4 مرة"){
    input14.style.background = "#03a9f466";
    input14.style.border = "3px solid #03a9f4";
  }
}

function three14(id) {

  if (i14 <= 7) {
    input15.value = `${i14++} مرة`;
  }
  if(input15.value === "7 مرة"){
    input15.style.border = "3px solid #03a9f4";
    input15.style.background = "#03a9f466";
  }
}

function three15(id) {

  if (i15 <= 7) {
    input16.value = `${i15++} مرة`;
  }
  if(input16.value === "7 مرة"){
    input16.style.background = "#03a9f466";
    input16.style.border = "3px solid #03a9f4";
  }
}

function hun1(id) {

  if (i16 <= 100) {
    input17.value = `${i16++} مرة`;
  }
  if(input17.value === "100 مرة"){
    input17.style.border = "3px solid #03a9f4";
    input17.style.background = "#03a9f466";

  }
}

function hun2(id) {

  if (i17 <= 100) {
    input18.value = `${i17++} مرة`;
  }
  if(input18.value === "100 مرة"){
    input18.style.background = "#03a9f466";
    input18.style.border = "3px solid #03a9f4";
  }
}
function hun3(id) {

  if (i18 <= 100) {
    input19.value = `${i18++} مرة`;
  }
  if(input19.value === "100 مرة"){
    input19.style.background = "#03a9f466";
    input19.style.border = "3px solid #03a9f4";
  }
}

function hun4(id) {

  if (i19 <= 100) {
    input20.value = `${i19++} مرة`;
  }
  if(input20.value === "100 مرة"){
    input20.style.border = "3px solid #03a9f4";
    input20.style.background = "#03a9f466";
  }
}

function hun5(id) {

  if (i20 <= 100) {
    input21.value = `${i20++} مرة`;
  }
  if(input21.value === "100 مرة"){
    input21.style.border = "3px solid #03a9f4";
    input21.style.background = "#03a9f466";
  }
}

function ten1(id) {

  if (i21 <= 10) {
    input22.value = `${i21++} مرة`;

  }
  if(input22.value === "10 مرة"){
    input22.style.border = "3px solid #03a9f4";
    input22.style.background = "#03a9f466";
  }
}

function ten2(id) {

  if (i22 <= 10) {
    input23.value = `${i22++} مرة`;

  }
  if(input23.value === "10 مرة"){
    input23.style.background = "#03a9f466";
    input23.style.border = "3px solid #03a9f4";
  }
}

function ten3(id) {

  if (i23 <= 10) {
    input24.value = `${i23++} مرة`;

  }
  if(input24.value === "10 مرة"){
    input24.style.background = "#03a9f466";
    input24.style.border = "3px solid #03a9f4";
  }
}

function ten4(id) {

  if (i24 <= 10) {
    input25.value = `${i24++} مرة`;
  }
  if(input25.value === "10 مرة"){
    input25.style.background = "#03a9f466";
    input25.style.border = "3px solid #03a9f4";
  }
}

function ten5(id) {

  if (i25 <= 33) {
    input27.value = `${i25++} مرة`;
    if(input27.value === "33 مرة"){
      input27.style.border = "3px solid #03a9f4";
      input27.style.background = "#03a9f466";
    }
  }
}

let nomL = document.getElementById("nomL");
let noom = document.getElementById("noom");

nomL.onclick = function () {
  noom.style.overflow = "unset";
  noom.style.width = "auto";
  noom.style.height = "auto";
}

let wakeL = document.getElementById("wakeL");
let wake = document.getElementById("wake");

wakeL.onclick = function () {
  wake.style.overflow = "unset";
  wake.style.width = "auto";
  wake.style.height = "auto";
}

let nightL = document.getElementById("nightL");
let night = document.getElementById("night");

nightL.onclick = function () {
  night.style.overflow = "unset";
  night.style.width = "auto";
  night.style.height = "auto";
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}


if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

let setting = document.getElementById("setting");
let color = document.getElementById("color");

let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

let normal = document.getElementById("normal");
let big = document.getElementById("big");
let small = document.getElementById("small");

let body = document.getElementById("body");

setting.onclick = function () {
  color.classList.toggle("open");
  setting.classList.toggle("turn");
}

red.onclick = function () {
  body.classList.add("red-mode");
  body.classList.remove("blue-mode");
  body.classList.remove("green-mode");
  
  localStorage.setItem("backgroundColor", "red");
}

blue.onclick = function () {
  body.classList.add("blue-mode");
  body.classList.remove("red-mode");
  body.classList.remove("green-mode");
  localStorage.setItem("backgroundColor", "blue");
}

green.onclick = function () {
  body.classList.add("green-mode");
  body.classList.remove("red-mode");
  body.classList.remove("blue-mode");
  localStorage.setItem("backgroundColor", "green");
}

normal.onclick = function () {
  body.classList.add("normal");
  body.classList.remove("big");
  body.classList.remove("small");
  localStorage.setItem("fontSize", "normal");
}

big.onclick = function () {
  body.classList.add("big");
  body.classList.remove("normal");
  body.classList.remove("small");
  localStorage.setItem("fontSize", "big");
}

small.onclick = function () {
  body.classList.add("small");
  body.classList.remove("big");
  body.classList.remove("normal");
  localStorage.setItem("fontSize", "small");
}


const backgroundColor = localStorage.getItem("backgroundColor");
if (backgroundColor) {
  body.classList.add(`${backgroundColor}-mode`);
}

const fontSize = localStorage.getItem("fontSize");
if (fontSize) {
  body.classList.add(fontSize);
}
