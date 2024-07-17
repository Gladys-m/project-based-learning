const cacluator = document.querySelector('.calculator')
const keys = cacluator.querySelector('.cacuator_keys')

//listening for all keypresses on the calcuator
keys.addEventListener("click", (e) => {
    //determine the type of key that is pressed(event delegation)
    if (e.target.matches('button')) {
        //do something
    }
})