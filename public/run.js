let body = document.querySelector("body");
const light = document.querySelector('.bulb');
let buttonValueIs;
let buttonValueText;

light.addEventListener("click", (e) => {
  e.target.classList.toggle('bulb-on');
  if (buttonValueIs === false) {
    isOnObj = { isOn: "true" };
    buttonValueIs = true;
    clickOnSound();
  } else {
    isOnObj = { isOn: "false" };
    buttonValueIs = false;
    clickOffSound();
  }

  fetch("/api", {
    method: "PUT",
    body: JSON.stringify(isOnObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data);
    });
});


setInterval(() => {
  fetch("/api")
    .then((result) => result.json())
    .then((json) => (buttonValueText = json[0].isOn));
  console.log(buttonValueText);

  if (buttonValueText.isOn === "false") {
    body.style.background = "black";
    body.style.color = "white";
  } else {
    body.style.background = "white";
    body.style.color = "black";
  }
}, 10);

function clickOnSound(){
  var audio = new Audio("Click.mp3");
  audio.play();
}

function clickOffSound(){
  var audio = new Audio("ClickFast.mp3");
  audio.play();
}
