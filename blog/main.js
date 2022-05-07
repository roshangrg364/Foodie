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
    end++;
    duration += 10;
  });
};
counters();
