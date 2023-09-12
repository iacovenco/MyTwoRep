const btn = document.getElementById("btn");
const range = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const circle = document.getElementById("circle");

btn.addEventListener("click", function () {
  let color = document.getElementById("text").value;
  document.getElementById("square").style.backgroundColor = color;
});

document.getElementById("e_btn").style.display = "none";

range.addEventListener("input", function () {
  let value = range.value;
  rangeSpan.textContent = value + "%";
  circle.style.width = value + "%";
  circle.style.height = value + "%";
});
