const numbers = ['1', '2' ,'3' , '4' ,'5', '6' ,'7' , '8' , '9'] 
numbers.unshift( '0')

for (let number of numbers) {
    console.log(numbers)
}

let buttons =
console.log(buttons)

for (let button of buttons) {

}

let display = document.getElementById('display')

let button1 = document.getElementById('button-1')
let button2 = document.getElementById('button-2')
let button3 = document.getElementById('button-3')
let button4 = document.getElementById('button-4')
let button5 = document.getElementById('button-5')
let button6 = document.getElementById('button-6')
let button7 = document.getElementById('button-7')
let button8 = document.getElementById('button-8')
let button9 = document.getElementById('button-9')

console.log(button1.innerText)
console.log(button2.innerText)
console.log(button3.innerText)
console.log(button4.innerText)
console.log(button5.innerText)
console.log(button6.innerText)
console.log(button7.innerText)
console.log(button8.innerText)
console.log(button9.innerText)

button1.addEventListener('click', (event) => {
    display.innerText += button1.innerText
})
