const colorBtn = document.querySelector("#color");
const placeBtn = document.querySelector("#place");
const ritualBtn = document.querySelector("#ritual");

const colorAlert = () => {
  alert("Grey is my favorite color because it compliments every other color");
};

const placeAlert = () => {
  alert("I dream of sailing to Tahiti...");
};

const ritualAlert = () => {
  alert("The interval between my son's bedtime and our bedtime when my partner and I can have a glass of wine and catch up on TV");
};

colorBtn.addEventListener("click", colorAlert);
ritualBtn.addEventListener("click", ritualAlert);
placeBtn.addEventListener("click", placeAlert);
