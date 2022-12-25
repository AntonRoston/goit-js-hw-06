const counterValue = {
  value: 0,
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
};

const valueEl = document.getElementById("value");
const btn = document.getElementById("counter");
const decrementBtn = btn.firstElementChild;
const incrementBtn = btn.lastElementChild;
console.log("🚀 ~ incrementBtn", incrementBtn);
console.log(decrementBtn);

decrementBtn.addEventListener("click", () => {
  console.log("SSS");
  counterValue.decrement();
  console.log(counterValue);

  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", () => {
  console.log("SSS");
  counterValue.increment();
  console.log(counterValue);
  valueEl.textContent = counterValue.value;
});
