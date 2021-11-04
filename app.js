// Grab DOM elements
const nameEl = document.getElementById('name1')
const nameInputEl = document.getElementById('name1Input')
const nameButtonEl = document.getElementById('name1Button')

mainPiece

const colorButtonEl = document.getElementById('colorButton1')
const backColorEl = document.getElementById('mainPiece')


// Add an event listener 

nameButtonEl.addEventListener('click', () => {

  const nameValue = nameInputEl.value;
  nameEl.textContent = nameValue;
  
  // clear values afterwards
  
  nameValue = '';
  
})


// Do stuff with event listener 





const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  backColorEl.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

colorButtonEl.addEventListener("click", setBg);
setBg();






