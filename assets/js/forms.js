const submit1 = document.getElementById('submit1');
const submit2 = document.getElementById('submit2');

let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');

const target = 2;
const target2 = "riddle" ;

function log(value, mode) {
  console.clear();
  
  if(mode)
    console.log(`Information: ${value}`);
  else
    console.log(`Input: ${value}`);
}

answer1.addEventListener('input', function(event) {
  log(this.value, true);
  
  if(parseInt(this.value) == target) {
    submit1.disabled = false;
  }
  else {
    submit1.disabled = true; 
  }
});

submit1.addEventListener('click', function(event) {
  log("Button fired.", false);
});


answer2.addEventListener('input', function(event) {
  log(this.value, true);
  
  if(this.value == target2) {
    submit2.disabled = false;
  }
  else {
    submit2.disabled = true; 
  }
});

submit2.addEventListener('click', function(event) {
  log("Button fired.", false);
});
