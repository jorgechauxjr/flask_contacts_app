const btnDelete = document.querySelectorAll('.btn-delete')

if(btnDelete) {
  const btnArray = Array.from(btnDelete);
  btnArray.forEach((btn) => {
    btn.addEventListener('click', (clickEvent) => {
      // si no confirma, entonces quen lo elimine
      if(!confirm('Are you sure you want to delete it?')){
        clickEvent.preventDefault()
      }
    });
  });
}
