const icon = window.document.querySelector("i");
const userValue = window.document.querySelector("input");
const confirmBtn = window.document.querySelector(".confirmBtn");
const container = window.document.querySelector(".container");
const options = ["vuejs", "react", "angular", "ember"].sort();

function selectIcon() {
  let i = 0;
  for (i; i <= options.length - 1; i++) {
    if (
      userValue.value.toLocaleUpperCase() === options[i].toLocaleUpperCase()
    ) {
      const chose = options[i];
      icon.className = `icon fab fa-${options[i]}`;
      confirmBtn.disabled = false;
      randomColorIcon();

      userValue.oninput = () => verify(chose);
    }
  }
}

function verify(chose) {
  let i = 0;
  for (i; i <= options.length - 1; i++) {
    if (userValue.value != chose) {
      icon.className = ``;
      confirmBtn.disabled = true;
      selectIcon();
    } else {
      icon.className = `icon fab fa-${chose.toLocaleLowerCase()}`;
      confirmBtn.disabled = false;
      randomColorIcon();
    }
  }
}

function randomColorIcon() {
  const colors = [
    "red",
    "yellow",
    "blue",
    "orange",
    "purple",
    "black",
    "gray",
    "green",
    "pink",
  ];

  const res = Math.floor(Math.random() * colors.length);
  icon.style.color = colors[res];
}
