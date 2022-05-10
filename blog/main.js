const counter = function (index, start, end, duration) {
  const counter = document.getElementById(`count${index}`);
  let currentValue = start;

  let timer = setInterval(() => {
    currentValue++;
    counter.textContent = currentValue;
    if (currentValue == end) {
      clearInterval(timer);
    }
  }, duration);
};

const counters = function () {
  const counterElms = document.querySelectorAll(".counter-div");
  let end = 100;
  let duration = 10;
  counterElms.forEach(function (counterElm, index) {
    counter(index + 1, 0, end, duration);
    const randomNum = Math.trunc(Math.random() * 10 + 1);
    end += randomNum;
    duration += 10;
  });
};
counters();

const navElm = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navElm.classList.add("scroll-on");
  } else {
    navElm.classList.remove("scroll-on");
  }
};
