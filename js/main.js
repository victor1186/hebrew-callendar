const form = document.getElementById("form");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    year.value.length === 0 ||
    month.value.length === 0 ||
    day.value.length === 0
  ) {
    return alert("Fill all inputs");
  }

  const ApiLink = `https://www.hebcal.com/converter?cfg=json&gy=${year.value}&gm=${month.value}&gd=${day.value}&g2h=1`;

  fetch(ApiLink)
    .then((response) => response.json())
    .then((data) => {
      if (data.hasOwnProperty("error")) {
        return alert(data.error);
      }
      result.innerHTML = `<div> Hebrew day: ${data.hebrew}</div><div> Hebrew month: ${data.hm}</div>`;
    })
    .catch(() => alert("Server error"));
});
