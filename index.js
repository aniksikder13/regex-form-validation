const form= document.querySelector('form')

function validationCheck(item, num, regex){
    if(item.match(regex)){
        form.children[num].style.borderColor= 'green'
    } else {
        form.children[num].style.borderColor= 'red'
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const email= e.target[0].value
    const phoneNumber= e.target[1].value
    const postCode= e.target[2].value

    if(!email || !postCode || !phoneNumber){
        const warning= document.createElement('p')
        warning.classList.add('warning')
        warning.innerText= 'Please fillup all inputs'
        form.appendChild(warning)
        return
    }

    validationCheck(email, 0, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    validationCheck(phoneNumber, 1, /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/)
    validationCheck(postCode, 2, /^[0-9]{4}$/)
})