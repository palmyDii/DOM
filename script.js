const okElement = document.getElementById('ok')
const cancelElement = document.getElementById('cancel')
const noElement = document.getElementById('no')
const textElement = document.getElementById('text')

let text = ''

function onOkClicked(e) {
    e.stopPropagation()
    //alert(' ok clicked')
    display(okElement.id)
}
function onCancelClicked(e) {
    e.stopPropagation()
    //alert(' cancel clicked')
    display(cancelElement.id)

}
function onNoClicked(e) {
    e.stopPropagation()
    //alert(' no clicked')
    display(noElement.id)
}

cancelElement.addEventListener('click', onCancelClicked)

noElement.onclick = onNoClicked

document.getElementById('container').onclick = function(e) {
    alert(' container clicked')
}


function onTextClicked(e) {
    text = ''
    textElement.innerText = text
}
textElement.onclick = onTextClicked

function display(name) {
    text = text + name +'\n'
    textElement.innerText = text;

    console.log(text)
}

