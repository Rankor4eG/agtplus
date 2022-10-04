// //////////////////////////SLIDERS DOORS TOP//////////////////////////

// /* Индекс слайда по умолчанию */
// let slideIndexDoorsTop = 1;
// showSlidesDoorsTop(slideIndexDoorsTop);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function nextSlideDoorsTop() {
//     showSlidesDoorsTop(slideIndexDoorsTop += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function prevSlideDoorsTop() {
//     showSlidesDoorsTop(slideIndexDoorsTop -= 1);  
// }

// /* Устанавливает текущий слайд */
// function currentSlideDoorsTop(n) {
//     showSlidesDoorsTop(slideIndexDoorsTop = n);
// }

// /* Основная функция слайдера */
// function showSlidesDoorsTop(n) {
//     let i ;
//     let slidesDoorsTop = document.querySelectorAll(".item__doors-top");
//     if (n > slidesDoorsTop.length) {
//       slideIndexDoorsTop = 1
//     }
//     if (n < 1) {
//         slideIndexDoorsTop = slidesDoorsTop.length
//     }
//     for (i = 0; i < slidesDoorsTop.length; i++) {
//         slidesDoorsTop[i].style.display = "none";
//     }
//     slidesDoorsTop[slideIndexDoorsTop - 1].style.display = "block";
// }


// //////////////////////////SLIDERS DOORS BOTTOM//////////////////////////

// /* Индекс слайда по умолчанию */
// let slideIndexDoorsBottom = 1;
// showSlidesDoorsBottom(slideIndexDoorsBottom);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function nextSlideDoorsBottom() {
//     showSlidesDoorsBottom(slideIndexDoorsBottom += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function prevSlideDoorsBottom() {
//     showSlidesDoorsBottom(slideIndexDoorsBottom -= 1);  
// }

// /* Устанавливает текущий слайд */
// function currentSlideDoorsBottom(n) {
//     showSlidesDoorsBottom(slideIndexDoorsBottom = n);
// }

// /* Основная функция слайдера */
// function showSlidesDoorsBottom(n) {
//     let i ;
//     let slidesDoorsBottom = document.querySelectorAll(".item__doors-bottom");
//     if (n > slidesDoorsBottom.length) {
//       slideIndexDoorsBottom = 1
//     }
//     if (n < 1) {
//         slideIndexDoorsBottom = slidesDoorsBottom.length
//     }
//     for (i = 0; i < slidesDoorsBottom.length; i++) {
//         slidesDoorsBottom[i].style.display = "none";
//     }
//     slidesDoorsBottom[slideIndexDoorsBottom - 1].style.display = "flex";
// }


// //SUBMIT////////////



// // var form = document.querySelector("form");
// // var log = document.querySelector("#log");

// // form.addEventListener("submit", function(event) {
// //   var data = new FormData(form);
// //   var output = "";
// //   for (const entry of data) {
// //     output = entry[0] + "=" + entry[1] + "\r";
// //   };
// //   log.innerText = output;
// //   event.preventDefault();
// // }, false);



// function myFunction() {
//     var x = document.getElementById('menu__mobile-items');
//     if (x.style.visibility === 'hidden') {
//       x.style.visibility = 'visible';
//     } else {
//       x.style.visibility = 'hidden';
//     }
//   }


// ------------------------------------- DOOR -------------------------------------

let slideIndexDoorsTop = 1;
let slideIndexDoorsBottom = 1;
showSlidesDoorsTop(slideIndexDoorsTop);
showSlidesDoorsBottom(slideIndexDoorsBottom);

function nextSlideDoorsTop() {
  showSlidesDoorsTop((slideIndexDoorsTop += 1));
}
function nextSlideDoorsBottom() {
  showSlidesDoorsBottom((slideIndexDoorsBottom+= 1));
}

function prevSlideDoorsTop() {
  showSlidesDoorsTop((slideIndexDoorsTop -= 1));
}
function prevSlideDoorsBottom() {
  showSlidesDoorsBottom((slideIndexDoorsBottom -= 1));
}

function currentSlideDoorsTop(n) {
  showSlidesDoorsTop((slideIndexDoorsTop = n));
}
function currentSlideDoorsBottom(n) {
  showSlidesDoorsBottom((slideIndexDoorsBottom = n));
}

function showSlidesDoorsTop(n) {
  let i;
  let slidesDoorsTop = document.querySelectorAll(".item__doors-top");
  if (n > slidesDoorsTop.length) {
    slideIndexDoorsTop = 1;
  }
  if (n < 1) {
    slideIndexDoorsTop = slidesDoorsTop.length;
  }
  for (i = 0; i < slidesDoorsTop.length; i++) {
    slidesDoorsTop[i].style.display = "none";
  }
  slidesDoorsTop[slideIndexDoorsTop - 1].style.display = "block";
}

function showSlidesDoorsBottom(n) {
  let i;
  let slidesDoorsBottom = document.querySelectorAll(".item__doors-bottom");
  if (n > slidesDoorsBottom.length) {
    slideIndexDoorsBottom = 1;
  }
  if (n < 1) {
    slideIndexDoorsBottom = slidesDoorsBottom.length;
  }
  for (i = 0; i < slidesDoorsBottom.length; i++) {
    slidesDoorsBottom[i].style.display = "none";
  }
  slidesDoorsBottom[slideIndexDoorsBottom - 1].style.display = "block";
}
// ------------------------------------- PROFILED -------------------------------------


let slideIndexProfiled = 1;
showSlidesProfiled(slideIndexProfiled);

function nextSlideProfiled() {
  showSlidesProfiled((slideIndexProfiled += 1));
}

function prevSlideProfiled() {
  showSlidesProfiled((slideIndexProfiled -= 1));
}

function currentSlideProfiled(n) {
  showSlidesProfiled((slideIndexProfiled = n));
}

function showSlidesProfiled(n) {
  let i;
  let slidesProfiled = document.querySelectorAll(".item__profiled");
  if (n > slidesProfiled.length) {
    slideIndexProfiled = 1;
  }
  if (n < 1) {
    slideIndexProfiled = slidesProfiled.length;
  }
  for (i = 0; i < slidesProfiled.length; i++) {
    slidesProfiled[i].style.display = "none";
  }
  slidesProfiled[slideIndexProfiled - 1].style.display = "block";
}

// ------------------------------------- WALL -------------------------------------

let slideIndexWallTop = 1;
let slideIndexWallBottom = 1;
showSlidesWallTop(slideIndexWallTop);
showSlidesWallBottom(slideIndexWallBottom);

function nextSlideWallTop() {
  showSlidesWallTop((slideIndexWallTop += 1));
}
function nextSlideWallBottom() {
  showSlidesWallBottom((slideIndexWallBottom+= 1));
}

function prevSlideWallTop() {
  showSlidesWallTop((slideIndexWallTop -= 1));
}
function prevSlideWallBottom() {
  showSlidesWallBottom((slideIndexWallBottom -= 1));
}

function currentSlideWallTop(n) {
  showSlidesWallTop((slideIndexWallTop = n));
}
function currentSlideWallBottom(n) {
  showSlidesWallBottom((slideIndexWallBottom = n));
}


function showSlidesWallTop(n) {
  let i;
  let slidesWallTop = document.querySelectorAll(".item__wall-top");
  if (n > slidesWallTop.length) {
    slideIndexWallTop = 1;
  }
  if (n < 1) {
    slideIndexWallTop = slidesWallTop.length;
  }
  for (i = 0; i < slidesWallTop.length; i++) {
    slidesWallTop[i].style.display = "none";
  }
  slidesWallTop[slideIndexWallTop - 1].style.display = "block";
}

function showSlidesWallBottom(n) {
  let i;
  let slidesWallBottom = document.querySelectorAll(".item__wall-bottom");
  if (n > slidesWallBottom.length) {
    slideIndexWallBottom = 1;
  }
  if (n < 1) {
    slideIndexWallBottom = slidesWallBottom.length;
  }
  for (i = 0; i < slidesWallBottom.length; i++) {
    slidesWallBottom[i].style.display = "none";
  }
  slidesWallBottom[slideIndexWallBottom - 1].style.display = "block";
}


function detectswipe(el, func) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  var min_x = 20; //min x swipe for horizontal swipe
  var max_x = 40; //max x difference for vertical swipe
  var min_y = 40; //min y swipe for vertical swipe
  var max_y = 50; //max y difference for horizontal swipe
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener(
    "touchstart",
    function (e) {
      var t = e.touches[0];
      swipe_det.sX = t.screenX;
      swipe_det.sY = t.screenY;
    },
    false
  );
  ele.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
      var t = e.touches[0];
      swipe_det.eX = t.screenX;
      swipe_det.eY = t.screenY;
    },
    false
  );
  ele.addEventListener(
    "touchend",
    function (e) {
      //horizontal detection
      if (
        (swipe_det.eX - min_x > swipe_det.sX ||
          swipe_det.eX + min_x < swipe_det.sX) &&
        swipe_det.eY < swipe_det.sY + max_y &&
        swipe_det.sY > swipe_det.eY - max_y
      ) {
        if (swipe_det.eX > swipe_det.sX) direc = "r";
        else direc = "l";
      }
      //vertical detection
      if (
        (swipe_det.eY - min_y > swipe_det.sY ||
          swipe_det.eY + min_y < swipe_det.sY) &&
        swipe_det.eX < swipe_det.sX + max_x &&
        swipe_det.sX > swipe_det.eX - max_x
      ) {
        if (swipe_det.eY > swipe_det.sY) direc = "d";
        else direc = "u";
      }

      if (direc != "") {
        if (typeof func == "function") func(el, direc);
      }
      direc = "";
    },
    false
  );
}

function doorTop(el, d) {
  if (d === "l") {
    nextSlideDoorsTop();
  } else if (d === "r") {
    prevSlideDoorsTop();
  }
  //alert("you swiped on element with id '" + el + "' to " + d + " direction");
}

function doorBottom(el, d) {
  if (d === "l") {
    nextSlideDoorsBottom();
  } else if (d === "r") {
    prevSlideDoorsBottom();
  }
  //alert("you swiped on element with id '" + el + "' to " + d + " direction");
}

function wallTop(el, d) {
  if (d === "l") {
    nextSlideWallTop();
  } else if (d === "r") {
    prevSlideWallTop();
  }
  //alert("you swiped on element with id '" + el + "' to " + d + " direction");
}
function wallBottom(el, d) {
  if (d === "l") {
    nextSlideWallBottom();
  } else if (d === "r") {
    prevSlideWallBottom();
  }
  //alert("you swiped on element with id '" + el + "' to " + d + " direction");
}
detectswipe("swipeDoorsTop", doorTop);
detectswipe("swipeDoorsBottom", doorBottom);
detectswipe("swipeWallTop", wallTop);
detectswipe("swipeWallBottom", wallBottom);


let textarea = document.getElementsByTagName('textarea')[0];
let labelTextarea = document.getElementById('labelTextarea');

textarea.addEventListener('keydown', resize);

function resize() {
  let el = this;
  setTimeout(function() {
    el.style.cssText = 'height: auto; padding: 0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';    
  }, 1);
}


