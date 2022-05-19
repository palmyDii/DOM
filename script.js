document.getElementById('ok').addEventListener('click', function (e) {
    let noElement = document.getElementById('no')
    if(noElement.classList.contains('toggleOn')) {
        noElement.classList.replace('toggleOn', 'toggleOff')
    } else if(noElement.classList.contains('toggleOff')) {
        noElement.classList.replace('toggleOff', 'toggleOn')
    } else {
        noElement.classList.add('toggleOn')
    }

    console.log(document.getElementById('no'))
})

/*let borderThick = 2
document.getElementById('cancel').style.border = `${borderThick}px solid white`

let cancelElement = document.getElementById('cancel')
cancelElement.addEventListener('mousemove', function(e) {
    cancelElement.innerHTML = `
        cancle
    `
})*/


const okElement = document.getElementById('ok')
const cancelElement = document.getElementById('cancel')
const noElement = document.getElementById('no')

let margin = 20
okElement.addEventListener('click', function(e) {
    let marginSize = `20px ${margin}px`
    cancelElement.style.margin = marginSize
    noElement.style.margin = marginSize
    margin+=5
})

//let words = ['ok', 'วิชานี้', 'ง่าย', 'จริงๆนะ']
//showIndex = 0;
noElement.addEventListener('dblclick', function() {
    //showIndex++
    if(okElement.textContent.includes('ok')) {
        okElement.textContent = okElement.textContent.replace('ok', 'วิชานี้')
    } else if(okElement.textContent.includes('วิชานี้')) {
        okElement.textContent = okElement.textContent.replace('วิชานี้', 'ง่าย')
    } else if(okElement.textContent.includes('ง่าย')) {
        okElement.textContent = okElement.textContent.replace('ง่าย', 'จริงๆนะ')
    } else {
        okElement.textContent = 'ok'
    }

    console.log(okElement)
})
