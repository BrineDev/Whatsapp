const $btn =document.querySelector('.btn')
const $modalContainer = document.querySelector('.container')
const $close = document.querySelector('.close')
const $accept = document.querySelector('.accept')

function closeModal() {
    $modalContainer.classList.remove('show')
}

function openModal() {
    $modalContainer.classList.add('show')
}

$btn.addEventListener('click', () => {
    openModal()
})

$close.addEventListener('click', () => {
    closeModal()
})

$accept.addEventListener('click', () => {
    
    const askPhoneNumber = prompt('Введите номер телеофна')
    const askText = prompt('Ваш текст...')
    window.open(`http://api.whatsapp.com/send&phone=+${askPhoneNumber}&text${askText}`, '_blank')
})

$modalContainer.addEventListener('click', (e) =>{
    if(e.target.classList.container('container')) {
        closeModal()
    }
})

window.addEventListener('keyup', e => {
    if(e.key === 'Escape') {
        closeModal()
    }
})