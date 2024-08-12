"use strict";

/*Para fazer com que o botão realize alguma tarefa ao ser pressionado, você precisará de um manipulador de eventos no arquivo JavaScript.

Para um botão, você precisa de um manipulador do evento click. A função do manipulador de eventos é executada quando o evento click ocorre.

Antes de adicionar o manipulador de eventos, você precisa de uma referência para o botão.*/

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var nomeDaClasse = document.body.className;
    if(nomeDaClasse == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + nomeDaClasse); 
});

