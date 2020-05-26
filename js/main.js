'use strict'

/*
Creacion de un formulario
*/

window.addEventListener('load', function () {
    console.log("DOM Cargado!");



    var formId = document.querySelector("#form");
    var boxDashed = document.querySelector(".dashed");
    boxDashed.style.display = "none";

    formId.addEventListener('submit', function () {
        console.log("Evento submit capturado");

        var nameId = document.querySelector("#name").value;
        var lastNameId = document.querySelector("#lastName").value;
        var ageId = parseInt(document.querySelector("#age").value);
        var messageId = document.querySelector("#message").value;
        // console.log(messageId);

        var errorNameId = document.querySelector("#errorName");
        var errorLastNameId = document.querySelector("#errorLastName");
        var errorAgeId = document.querySelector("#errorAge");

        if (nameId.trim() == null || nameId.trim().length == 0) {
            // alert("El nombre no es válido");

            errorNameId.innerHTML = "*El nombre es inválido";
            errorNameId.style.color = "red";
            return false;
        } else {
            errorNameId.style.display = "none";
        }


        if (lastNameId.trim() == null || lastNameId.trim().length == 0) {
            // alert("El nombre no es válido");
            errorLastNameId.innerHTML = "*El apellido es inválido";
            errorLastNameId.style.color = "red";
            return false;
        } else {
            errorLastNameId.style.display = "none";
        }

        if (ageId == null || ageId <= 0 || isNaN(ageId)) {
            // alert("La edad no es válida");
            errorAgeId.innerHTML = "*La edad no es válida";
            errorAgeId.style.color = "red";
            return false;
        } else {
            errorAgeId.style.display = "none";
        }

        boxDashed.style.display = "block";

        var p_nameId = document.querySelector("#p_name span");
        var p_lastNameId = document.querySelector("#p_lastName span");
        var p_ageId = document.querySelector("#p_age span");


        var p_messageId = document.querySelector("#p_message span");


        p_nameId.innerHTML = nameId;
        p_lastNameId.innerHTML = lastNameId;
        p_ageId.innerHTML = ageId;
        p_messageId.innerHTML = messageId;

    });


});

