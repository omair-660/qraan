let scroll = document.querySelector('.up');
let click = document.getElementById("click");
let click1 = document.getElementById("click1");
let click2 = document.getElementById("click2");
let click3 = document.getElementById("click3");
let click4 = document.getElementById("click4");
let click5 = document.getElementById("click5");
let click6 = document.getElementById("click6");
let click7 = document.getElementById("click7");
let click8 = document.getElementById("click8");
let click9 = document.getElementById("click9");
let click10 = document.getElementById("click10");
let click11 = document.getElementById("click11");
let click12 = document.getElementById("click12");
let click13 = document.getElementById("click13");
let click14 = document.getElementById("click14");
let click15 = document.getElementById("click15");
let click16 = document.getElementById("click16");
let click17 = document.getElementById("click17");
let click18 = document.getElementById("click18");
let click19 = document.getElementById("click19");
let click20 = document.getElementById("click20");
let click21 = document.getElementById("click21");
let click22 = document.getElementById("click22");
let click23 = document.getElementById("click23");
let click24 = document.getElementById("click24");
let aside = document.getElementById("aside");
let menu = document.getElementById("menu");

function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}

document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

menu.onclick = function () {
  aside.classList.toggle("opeen")
}

window.onscroll = function(){
if(scrollY >= 300){
  scroll.classList.add('open');

}
else {
  scroll.classList.remove('open');

}
}

let start = 0;
let max = 3;

 click.onclick = function() {
   if (start != 3) {
     start++;

   }else {
     max = 0
   }

  click.innerHTML = start;
}
click1.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = 0
  }

 click1.innerHTML = start;
}
let start1 = 0;
let max1 = 4;

 click2.onclick = function() {
   if (start1 != 4) {
     start1++;

   }else {
     max1 = 0
   }

  click2.innerHTML = start1;
}
click3.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = 0
  }

 click3.innerHTML = start;
}
click4.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = 0
  }

 click4.innerHTML = start;
}
let start2 = 0;
let max2 = 100;

 click5.onclick = function() {
   if (start2 != 100) {
     start2++;

   }else {
     max2 = ''
   }

  click5.innerHTML = start2;
}
let start3 = 0;
let max3 = 10;

 click6.onclick = function() {
   if (start3 != 10) {
     start3++;

   }else {
     max3 = ''
   }

  click6.innerHTML = start3;
}
click7.onclick = function() {
  if (start2 != 100) {
    start2++;

  }else {
    max2 = ''
  }

 click7.innerHTML = start2;
}
click8.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = 0
  }

 click8.innerHTML = start;
}
click9.onclick = function() {
  if (start2 != 100) {
    start2++;

  }else {
    max2 = ''
  }

 click9.innerHTML = start2;
}
click10.onclick = function() {
  if (start3 != 10) {
    start3++;

  }else {
    max3 = ''
  }

 click10.innerHTML = start3;
}
click11.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = 0
  }

 click11.innerHTML = start;
}
click12.onclick = function() {
  if (start1 != 4) {
    start1++;

  }else {
    max1 = 0
  }

 click12.innerHTML = start1;
}
click13.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = 0
  }

 click13.innerHTML = start;
}

let start4 = 0;
let max4 = 7;

click14.onclick = function() {
  if (start4 != 7) {
    start4++;

  }else {
    max4 = 0
  }

 click14.innerHTML = start4;
}
click15.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = 0
  }

 click15.innerHTML = start;
}
click16.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = 0
  }

 click16.innerHTML = start;
}
click17.onclick = function() {
  if (start2 != 100) {
    start2++;

  }else {
    max2 = ''
  }

 click17.innerHTML = start2;
}

click18.onclick = function() {
  if (start3 != 10) {
    start3++;

  }else {
    max3 = ''
  }

 click18.innerHTML = start3;
}

click19.onclick = function() {
  if (start2 != 100) {
    start2++;

  }else {
    max2 = ''
  }

 click19.innerHTML = start2;
}
click21.onclick = function() {
  if (start3 != 10) {
    start3++;

  }else {
    max3 = ''
  }

 click21.innerHTML = start3;
}
click20.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = '';
  }

 click20.innerHTML = start;
}
click22.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = ''
  }

 click22.innerHTML = start;
}
click23.onclick = function() {
  if (start != 3) {
    start++;

  }else {
    max = '';
  }

 click23.innerHTML = start;
}
let start5 = 0;
let max5 = 33;
click24.onclick = function() {
  if (start5 != 33) {
    start5++;

  }else {
    max5 = '';
  }

 click24.innerHTML = start5;
}
