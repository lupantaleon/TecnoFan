window.onload = function () {
    const formulario = document.querySelector('#form');
    // name.innerHTML = 'AGREGAR PELÍCULA';
    // name.classList.add('name');
    // article.classList.add('fondoTransparente');
    // formulario.classList.add('fondoCRUD');

    const name = document.querySelector('#name');
    const stock = document.querySelector('#stock');
    const brand = document.querySelector('#brand');
    const price = document.querySelector('#price');
    const discount = document.querySelector('#discount');
    const categoryId = document.querySelector('#category');
    const image = document.querySelector('#image')
    const nameWarning = document.querySelector('#nameError');
    const stockWarning = document.querySelector('#stockError');
    const categoryWarning = document.querySelector('#categoryError'); 
    const priceWarning = document.querySelector('#priceError'); 
    const discountWarning = document.querySelector('#discountError');
    const brandWarning = document.querySelector('#brandError');
    const imageWarning = document.querySelector('#imageError');
    const files = image.files;
    const descriptionWarning = document.querySelector('#descriptionError');       

    //------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO -------//    
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {

        nameWarning.innerHTML = '';
        stockWarning.innerHTML = '';
        categoryWarning.innerHTML = '';
        priceWarning.innerHTML = '';
        discountWarning.innerHTML = '';
        brandWarning.innerHTML = '';
        imageWarning.innerHTML = '';
        descriptionWarning.innerHTML = '';
        const errors = [];

        if (name.value == '') {
            errors.push('errorName');
            const liName = document.createElement('li');
            liName.innerHTML = 'El campo nombre es requerido';
            nameWarning.appendChild(liName);
        }

        if (name.value != '' && name.value.length < 5) {
            errors.push('errorNameLength');
            const liNameLength = document.createElement('li');
            liNameLength.innerHTML = 'El campo nombre debe tener al menos 5 caracteres';
            nameWarning.appendChild(liNameLength);
        }

        if (stock.value == '') {
            errors.push('errorStock');
            const liStock = document.createElement('li');
            liStock.innerHTML = 'El campo stock es requerido';
            stockWarning.appendChild(liStock);
        }

        if (categoryId.value == '') {
            errors.push('errorCategory');
            const liCategory = document.createElement('li');
            liCategory.innerHTML = 'El campo categoría es requerido';
            categoryWarning.appendChild(liCategory);
        }

        if (price.value == '') {
            errors.push('errorPrice');
            const liPrice = document.createElement('li');
            liPrice.innerHTML = 'El campo precio es requerido';
            priceWarning.appendChild(liPrice);
        }

        if (discount.value == '') {
            errors.push('errorDiscount');
            const liDiscount = document.createElement('li');
            liDiscount.innerHTML = 'El campo descuento es requerido';
            discountWarning.appendChild(liDiscount);
        }

        if (brand.value == '') {
            errors.push('errorBrand');
            const liBrand = document.createElement('li');
            liBrand.innerHTML = 'El campo marca es requerido';
            brandWarning.appendChild(liBrand);
        }

        if (image.value == '') {
            errors.push('errorImage');
            const liImage = document.createElement('li');
            liImage.innerHTML = 'El campo imagen es requerido';
            imageWarning.appendChild(liImage);
        } 
        else{
            const extension = image.value.substring(image.value.lastIndexOf("."));
            const acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
            const isAllowed = acceptedExtensions.includes(extension);
 
            if(!isAllowed){
                errors.push('errorImageExt');
                const liImageExt = document.createElement('li');
                liImageExt.innerHTML = `Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`;
                imageWarning.appendChild(liImageExt);
            }}

        if (description.value == '') {
            errors.push('errorDescription');
            const liDescription = document.createElement('li');
            liDescription.innerHTML = 'El campo descripción es requerido';
            descriptionWarning.appendChild(liDescription);
        }

        if (description.value != '' && description.value.length < 20) {
            errors.push('errorDescriptionLength');
            const liDescriptionLength = document.createElement('li');
            liDescriptionLength.innerHTML = 'El campo descripción debe tener al menos 20 caracteres';
            descriptionWarning.appendChild(liDescriptionLength);
        }
    
        if (errors.length > 0) {
            e.preventDefault();
        }
});


}