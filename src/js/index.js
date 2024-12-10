const btn = document.querySelector('.bg')
const container = document.querySelector('.container')




btn.addEventListener('click', (e)=>{
    toogleBg(e)
    
})


const toogleBg = (e) =>{
    el = e.target.parentNode.classList.value

    if(el === 'container dark'){
        container.classList.remove('dark')
        container.classList.add('white')
        btn.innerHTML = 'Tema : White'
        btn.classList.add('bg-button')
    }else{
        container.classList.remove('white')
        container.classList.add('dark')
        btn.innerHTML = 'Tema: Dark'
        btn.classList.remove('bg-button')
    }
}