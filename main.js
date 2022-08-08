const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event){
    if(event.type ==='touchstart') event.prevent.Default();
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


const titulo = document.querySelectorAll('#formacao h1');
Array.from(titulo).forEach(typeWriter);


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i)=> {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 100*i)
    });
}

