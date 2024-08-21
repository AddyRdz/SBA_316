// Call Item
const formEl = document.getElementById('form');
const submitButtonEl = document.getElementById('submitButton');

// Creating a form
const form = document.createElement('form');

// firstName
const firstNameInput = document.createElement('input');
firstNameInput.type = 'text';
firstNameInput.id = 'firstNameLabel';
firstNameInput.placeholder = 'First Name';
// lastName
const lastNameInput = document.createElement('input');
lastNameInput.type = 'text';
lastNameInput.id = 'lastNameLabel';
lastNameInput.placeholder = 'Last Name';
// email
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.placeholder = 'Email';

// make changes to form
form.appendChild(firstNameInput);
form.appendChild(lastNameInput);
form.appendChild(emailInput);
formEl.appendChild(form);


// Create a button
submitButtonEl.addEventListener('click', submitForm)

function submitForm(event){
    console.log(firstNameInput.value);
    
}
