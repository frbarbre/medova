//History Fullscreen Pictures

const bgCanvas = document.querySelector(".fullscreen-wrapper");
const historyClose = document.querySelector(".history-close-btn");

const smPic1 = document.querySelector(".history-sm-pic1");
const fsPic1 = document.querySelector(".history-fs-pic1");

const smPic2 = document.querySelector(".history-sm-pic2");
const fsPic2 = document.querySelector(".history-fs-pic2");

const smPic3 = document.querySelector(".history-sm-pic3");
const fsPic3 = document.querySelector(".history-fs-pic3");

const smPic4 = document.querySelector(".history-sm-pic4");
const fsPic4 = document.querySelector(".history-fs-pic4");

const smPic5 = document.querySelector(".history-sm-pic5");
const fsPic5 = document.querySelector(".history-fs-pic5");

const smPic6 = document.querySelector(".history-sm-pic6");
const fsPic6 = document.querySelector(".history-fs-pic6");

smPic1.addEventListener("click", () => {
  bgCanvas.classList.add('history-active');
  bgCanvas.classList.remove('history-not-active');
  fsPic1.classList.add('history-active');
  fsPic1.classList.remove('history-not-active');
});

smPic2.addEventListener("click", () => {
  bgCanvas.classList.add('history-active');
  bgCanvas.classList.remove('history-not-active');
  fsPic2.classList.add('history-active');
  fsPic2.classList.remove('history-not-active');
});

smPic3.addEventListener("click", () => {
  bgCanvas.classList.add('history-active');
  bgCanvas.classList.remove('history-not-active');
  fsPic3.classList.add('history-active');
  fsPic3.classList.remove('history-not-active');
});

smPic4.addEventListener("click", () => {
  bgCanvas.classList.add('history-active');
  bgCanvas.classList.remove('history-not-active');
  fsPic4.classList.add('history-active');
  fsPic4.classList.remove('history-not-active');
});

smPic5.addEventListener("click", () => {
  bgCanvas.classList.add('history-active');
  bgCanvas.classList.remove('history-not-active');
  fsPic5.classList.add('history-active');
  fsPic5.classList.remove('history-not-active');
});

smPic6.addEventListener("click", () => {
  bgCanvas.classList.add('history-active');
  bgCanvas.classList.remove('history-not-active');
  fsPic6.classList.add('history-active');
  fsPic6.classList.remove('history-not-active');
});

historyClose.addEventListener("click", () => {
  bgCanvas.classList.add('history-not-active');
  bgCanvas.classList.remove('history-active');
  fsPic1.classList.add('history-not-active');
  fsPic1.classList.remove('history-active');
  fsPic2.classList.add('history-not-active');
  fsPic2.classList.remove('history-active');
  fsPic3.classList.add('history-not-active');
  fsPic3.classList.remove('history-active');
  fsPic4.classList.add('history-not-active');
  fsPic4.classList.remove('history-active');
  fsPic5.classList.add('history-not-active');
  fsPic5.classList.remove('history-active');
  fsPic6.classList.add('history-not-active');
  fsPic6.classList.remove('history-active');
});