window.onload = function () {
    const formulario = document.querySelector('#form');
    // name.innerHTML = 'AGREGAR PELÍCULA';
    // name.classList.add('name');
    // article.classList.add('fondoTransparente');
    // formulario.classList.add('fondoCRUD');

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const address = document.querySelector('#address');
    const Teléfono = document.querySelector('#Teléfono');
    const country = document.querySelector('#country');
    const password = document.querySelector('#password');
    const nameWarning = document.querySelector('#nameError');
    const emailWarning = document.querySelector('#emailError');
    const addressWarning = document.querySelector('#addressError');
    const TeléfonoWarning = document.querySelector('#TeléfonoError');
    const countryWarning = document.querySelector('#countryError');
    const imageWarning = document.querySelector('#imageError');
    const passwordWarning = document.querySelector('#passwordError');
    const files = image.files;


    //------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO -------//    
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {

        nameWarning.innerHTML = '';
        emailWarning.innerHTML = '';
        addressWarning.innerHTML = '';
        TeléfonoWarning.innerHTML = '';
        countryWarning.innerHTML = '';
        passwordWarning.innerHTML = '';
        imageWarning.innerHTML = '';
        const errors = [];

        if (name.value == '') {
            errors.push('errorName');
            const liName = document.createElement('li');
            liName.innerHTML = 'El campo nombre y apellido es requerido';
            nameWarning.appendChild(liName);
        }

        if (name.value != '' && name.value.length < 5) {
            errors.push('errorNameLength');
            const liNameLength = document.createElement('li');
            liNameLength.innerHTML = 'El campo nombre debe tener al menos 5 caracteres';
            nameWarning.appendChild(liNameLength);
        }

        if (email.value == '') {
            errors.push('errorEmail');
            const liEmail = document.createElement('li');
            liEmail.innerHTML = 'El campo email es requerido';
            emailWarning.appendChild(liEmail);
        }

        if (address.value == '') {
            errors.push('errorAddress');
            const liAddress = document.createElement('li');
            liAddress.innerHTML = 'El campo Domicilio es requerido';
            addressWarning.appendChild(liAddress);
        }
        if (Teléfono.value == '') {
            errors.push('errorTeléfono');
            const liTeléfono = document.createElement('li');
            liTeléfono.innerHTML = 'El campo Teléfono es requerido';
            TeléfonoWarning.appendChild(liTeléfono);
        }
        if (country.value == '') {
            errors.push('errorCountry');
            const liCountry = document.createElement('li');
            liCountry.innerHTML = 'El campo país es requerido';
            countryWarning.appendChild(liCountry);
        }
        if (image.value == '') {
            errors.push('errorImage');
            const liImage = document.createElement('li');
            liImage.innerHTML = 'El campo imagen es requerido';
            imageWarning.appendChild(liImage);
        }
        else {
            const extension = image.value.substring(image.value.lastIndexOf("."));
            const acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
            const isAllowed = acceptedExtensions.includes(extension);

            if (!isAllowed) {
                errors.push('errorImageExt');
                const liImageExt = document.createElement('li');
                liImageExt.innerHTML = `Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`;
                imageWarning.appendChild(liImageExt);
            }
        }
        if (password.value == '') {
            errors.push('errorPassword');
            const liPassword = document.createElement('li');
            liPassword.innerHTML = 'El campo contraseña es requerido';
            passwordWarning.appendChild(liPassword);
        }

        if (errors.length > 0) {
            e.preventDefault();
        }

    });


}