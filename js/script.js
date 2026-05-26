const popup = document.querySelector(".popup");
const popupCloseBtn = popup.querySelector(".close-button");
const agree = document.querySelector("#agree");

if (document.cookie.includes("popup=안볼래")) {
  popup.close();
} else {
  popup.showModal();
}

popupCloseBtn.addEventListener("click", () => {
  popup.close();
  if (agree.checked) {
    //체크 여부 확인
    createCookie("popup", "안볼래", 1);
  } else {
    createCookie("popup", "안볼래", -1);
  }
});

function createCookie(name, value, expire) {
  let today = new Date();
  today.setDate(today.getDate() + expire);
  document.cookie = `${name}=${value}; Expires=${today.toString()}`;
}
