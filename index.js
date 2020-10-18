const icon = window.document.querySelector("i");
const userValue = window.document.querySelector("input");
const confirmBtn = window.document.querySelector('.confirmBtn');
const chose=userValue;
const options = [
  "Vuejs",
  "React",
  "Angular",
  "Backbone",
  "Ember",
  "Svelte",
].sort();

function selectIcon() {
  let i = 0;
  for (i; i <= options.length - 1; i++) {
    if (userValue.value === options[i]) {
    
      icon.className = `icon fab fa-${options[i].toLocaleLowerCase()}`;
      confirmBtn.disabled = false
          
    }
  }
}
