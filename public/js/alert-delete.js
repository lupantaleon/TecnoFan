function alertDelete(id){
  Swal.fire({
    title: '¿Desea eliminar el usuario?',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Si, borrar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`/users/${id}?_method=DELETE`,{
        method: 'POST'})
        .then(res => {
          location.reload();
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  })
}