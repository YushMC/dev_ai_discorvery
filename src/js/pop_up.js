const preferedColorScheme =  'light';

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
}

setTheme(localStorage.getItem('theme'));

const btnOscuro = document.querySelector('#color_oscuro');
const btnAI = document.querySelector('#color_naranja');

btnOscuro.addEventListener('click', ()  => {
    setTheme("dark");
});

btnAI.addEventListener('click', ()  => {
    setTheme("light");
});
function indicadores(){
    if(localStorage.getItem('theme')=="dark"){
        btnOscuro.style.border = "solid 2px white";
        btnAI.style.borderRadius = "solid 2px transparent";
    }else  if(localStorage.getItem('theme')=="light"){
        btnAI.style.border = "solid 2px white";
        btnOscuro.style.borderRadius = "solid 2px transparent";
    }
}
