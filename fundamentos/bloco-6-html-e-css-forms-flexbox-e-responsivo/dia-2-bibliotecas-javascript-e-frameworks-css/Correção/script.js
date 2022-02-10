  
  window.onload = function( ){
    let picker = new Pikaday({ field: document.getElementById('datepicker') });
    return picker;
  }

  // Validate


let submit = document.getElementById('submit');

submit.addEventListener('click', validation())



  const validate = new window.JustValidate('#form');




  validate
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);
}