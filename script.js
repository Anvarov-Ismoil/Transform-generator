// Variables
const block = document.querySelector('.block')
const text = document.querySelector('textarea')

const sc = document.querySelector('.sc')
const rt = document.querySelector('.rt')
const tx = document.querySelector('.tx')
const ty = document.querySelector('.ty')
const sk = document.querySelector('.sk')
const bsh = document.querySelector('.bsh')
const bw = document.querySelector('.bw') 
const bc = document.querySelector('.bc')
const bgc = document.querySelector('.bgc')


// Functions
const textBlock = () => {
    text.innerHTML = `scale(${sc.value})` + `rotate(${rt.value}deg)` + `translateX(${tx.value}%)` + `translateY(${ty.value}%)` + `skew(${sk.value}deg)`
}

const transform = () => {
    block.style.transform = `scale(${sc.value})` + `rotate(${rt.value}deg)` + `translateX(${tx.value}%)` + `translateY(${ty.value}%)` + `skew(${sk.value}deg)`
    textBlock()
}

const bWidth = () => {
    block.style.borderWidth = bw.value + 'px'
}

const bColor = () => {
    block.style.borderColor = bc.value
}

const bgColor = () => {
    block.style.backgroundColor = bgc.value
}

// Events
sc.addEventListener('input', transform)
rt.addEventListener('input', transform)
tx.addEventListener('input', transform)
ty.addEventListener('input', transform)
sk.addEventListener('input', transform)
bc.addEventListener('input', bColor)
bgc.addEventListener('input', bgColor)
bw.addEventListener('input', bWidth)