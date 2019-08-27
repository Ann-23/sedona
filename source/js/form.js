var popupNotDone = document.querySelector(".pop-up--not-done");
var popupDone = document.querySelector(".pop-up--done");
var linkOk = document.querySelector(".button--ok");
var link = document.querySelector(".button--close");
var form = document.querySelector("form");
var surname = document.querySelector("[name=surname]");
var firstname = document.querySelector("[name=firstname]");
var tel = document.querySelector("[name=tel]");
var email = document.querySelector("[name=email]");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!surname.value || !firstname.value || !email.value || !tel.value) {
    evt.preventDefault();
    popupNotDone.classList.add("pop-up--show");
    linkOk.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupNotDone.remove("pop-up--show");
    });
  } else {
    evt.preventDefault();
    popupDone.classList.add("pop-up--show");
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupDone.remove("pop-up--show");
    });
  }
});