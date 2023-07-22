const colors = ['green', 'blue', 'orange', 'black', 'pink', 'red', 'rgba(133,122,200)', '#15025'];

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

console.log(btn, color)

btn.addEventListener('click', function(){
    console.log('clicou no botao')
    const randomNumber = getRandomNumbers()
        // backgraund-color
    const mainColor =   document.querySelector('#main-color') 
    mainColor.style.backgroundColor = colors[randomNumber] 
    color.textContent = colors[getRandomNumbers]
    
})


function getRandomNumbers() {
    return Math.floor(Math.random() * colors.length) 
}