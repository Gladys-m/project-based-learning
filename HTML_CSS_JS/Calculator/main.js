const cacluator = document.querySelector('.calculator')
const keys = cacluator.querySelector('.calculator_keys')
const display = cacluator.querySelector('.calculator_display')
 

//listening for all keypresses on the calcuator
keys.addEventListener("click", (e) => {
    //determine the type of key that is pressed(event delegation)
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            }
        }

        if (action === 'clear') {
            display.textContent = '0'
        }

        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            console.log("Key-operator")
        }


        if (action === 'calculate') {
            console.log("Equals key")
        }
    }
})