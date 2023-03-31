const iniciar = document.getElementById('iniciar')
const contador = document.getElementById('contador')
const parar = document.getElementById('parar')

var começar;

var num = 0
contador.innerHTML = num

function contar(){
    num++
    contador.innerHTML = num
}

iniciar.addEventListener('click', ()=>{
    começar = setInterval(contar, 1000)
})

parar.addEventListener('click', ()=>{
    clearInterval(começar)
})

/*iniciar.addEventListener('click', ()=>{
    setInterval(()=>{
        num++
        contador.innerHTML = num
    }, 1000)
})*/
