let scroll = document.querySelector('.up');
let aside = document.getElementById("aside");
let menu = document.getElementById("menu");

function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}

document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

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
}

function three1(id) {

  if (i1 <= 3) {
    input2.value = `${i1++} مرة`;

  }
}

function three2(id) {

  if (i2 <= 3) {
    input3.value = `${i2++} مرة`;

  }
}

function three3(id) {

  if (i3 <= 3) {
    input4.value = `${i3++} مرة`;

  }
}
function three4(id) {

  if (i4 <= 3) {
    input5.value = `${i4++} مرة`;

  }
}

function three5(id) {

  if (i5 <= 3) {
    input6.value = `${i5++} مرة`;

  }
}

function three6(id) {

  if (i6 <= 3) {
    input7.value = `${i6++} مرة`;

  }
}

function three7(id) {

  if (i8 <= 3) {
    input8.value = `${i7++} مرة`;

  }
}

function three8(id) {

  if (i8 <= 3) {
    input9.value = `${i8++} مرة`;

  }
}

function three9(id) {

  if (i9 <= 3) {
    input10.value = `${i9++} مرة`;

  }
}

function three10(id) {

  if (i10 <= 3) {
    input11.value = `${i10++} مرة`;

  }
}

function three11(id) {

  if (i11 <= 3) {
    input12.value = `${i11++} مرة`;

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

function three12(id) {

  if (i12 <= 4) {
    input13.value = `${i12++} مرة`;

  }
}

function three13(id) {

  if (i13 <= 4) {
    input14.value = `${i13++} مرة`;

  }
}

function three14(id) {

  if (i14 <= 7) {
    input15.value = `${i14++} مرة`;

  }
}

function three15(id) {

  if (i15 <= 7) {
    input16.value = `${i15++} مرة`;

  }
}

function hun1(id) {

  if (i16 <= 100) {
    input17.value = `${i16++} مرة`;

  }
}

function hun2(id) {

  if (i17 <= 100) {
    input18.value = `${i17++} مرة`;

  }
}
function hun3(id) {

  if (i18 <= 100) {
    input19.value = `${i18++} مرة`;

  }
}

function hun4(id) {

  if (i19 <= 100) {
    input20.value = `${i19++} مرة`;

  }
}

function hun5(id) {

  if (i20 <= 100) {
    input21.value = `${i20++} مرة`;

  }
}

function ten1(id) {

  if (i21 <= 10) {
    input22.value = `${i21++} مرة`;

  }
}

function ten2(id) {

  if (i22 <= 10) {
    input23.value = `${i22++} مرة`;

  }
}

function ten3(id) {

  if (i23 <= 10) {
    input24.value = `${i23++} مرة`;

  }
}

function ten4(id) {

  if (i24 <= 10) {
    input25.value = `${i24++} مرة`;

  }
}
