const searchButton = document.getElementById('searchButton')
const inputText = document.getElementById('inputText')
const output = document.getElementById('output')

function addText() {
    let text = inputText.value
    console.log(text)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
    newButton.innerText = text
    output.appendChild(newButton)
}

searchButton.addEventListener('click', addText)

inputText.addEventListener('blur', addText)

/*const outputContainer = document.getElementById('output-container')
let counter = 0

function addNode() {
    newNode = document.createElement('div')
    newNode.classList.add('flex-item')
    newNode.setAttribute('id', counter)
    newNode.innerText = counter
    counter = counter +1 
    newNode.innerText = counter
    outputContainer.appendChild(newNode)
}*/

const navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
const navbarData = ['One', 'Two', 'Three', 'Four', 'Five'];
const navbarDataFilter = (value) => {
  return navbarData.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(navbarAutocomplete, {
  filter: navbarDataFilter,
});