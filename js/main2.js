window.addEventListener('load', () => {

    /*Evento para cambiar la pagina de color*/
    const btnSwitchId = document.querySelector('#btn-switch');

    btnSwitchId.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btnSwitchId.classList.toggle('active');
    })
    /*Fin del Evento para cambiar la pagina de color*/
})
