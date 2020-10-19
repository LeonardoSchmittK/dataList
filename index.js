const icon = window.document.querySelector("i");
const userValue = window.document.querySelector("input");
const confirmBtn = window.document.querySelector('.confirmBtn');

const options = [
  "Vuejs",
  "React",
  "Angular",
  "Ember",
 
].sort();

function selectIcon() {
  let i = 0;
  for (i; i <= options.length - 1; i++) {
    if (userValue.value === options[i]) {
     const chose = options[i]
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
      // const chose = options[i]
     icon.className = ``;
     confirmBtn.disabled = true
         
   }else {
    icon.className = `icon fab fa-${options[i].toLocaleLowerCase()}`;
    confirmBtn.disabled = false
   }
 }
}