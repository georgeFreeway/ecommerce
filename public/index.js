//darkmode toggler
let toggle = document.getElementById('toggle');
let html = document.querySelector('html');

function darkMode(){
    if(toggle.checked){
        html.classList.add('dark');
    }else{
        html.classList.remove('dark');
    }
}

darkMode();
toggle.addEventListener('click', darkMode);