const icon = window.document.querySelector("i");
const userValue = window.document.querySelector("input");
const confirmBtn = window.document.querySelector('.confirmBtn');

const options = [
  "vuejs",
  "react",
  "angular",
  "ember",
 
].sort();

function selectIcon() {
  let i = 0;
  for (i; i <= options.length - 1; i++) {
    if (userValue.value.toLocaleUpperCase() === options[i].toLocaleUpperCase()) {
     const chose = options[i].toLocaleUpperCase()
      icon.className = `icon fab fa-${options[i].toLocaleLowerCase()}`;
      confirmBtn.disabled = false
          userValue.oninput = ()=> verify(chose)
    }
  }
}

function verify(chose) {
 let i = 0;
 for (i; i <= options.length - 1; i++) {
   if (userValue.value != chose) {
     icon.className = ``;
    !confirmBtn.disabled
     selectIcon()
     
         
   }else {
    icon.className = `icon fab fa-${chose.toLocaleLowerCase()}`;
    confirmBtn.disabled = false
   }
 }
}