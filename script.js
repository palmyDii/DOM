const okElement = document.getElementById('ok')
const cancelElement = document.getElementById('cancel')
const noElement = document.getElementById('no')
const textElement = document.getElementById('text')
const outputContainer = document.getElementById('output-container')


let text = ''
let elems = document.getElementsByClassName('flex-item')
for (let elem of elems) {
    elem.addEventListener('click', function(e) {
        e.stopPropagation()
        //display(keyword[elem.id])
        addNode();
    })
}
function display(name) {
    text = text + name +'\n'
    textElement.innerText = text;
}

let keyword = {
    'ok' : 'Ok',
    'cancel' : 'Cancel',
    'no' : 'No'
}

/*function onTextClicked(e) {
    text = ''
    textElement.innerText = text
}
textElement.onclick = onTextClicked*/



let counter = 0

function addNode() {
    newNode = document.createElement('div')
    newNode.classList.add('flex-item')
    newNode.setAttribute('id', counter)
    newNode.innerText = counter
    counter = counter +1 
    newNode.innerText = counter
    outputContainer.appendChild(newNode)
}

