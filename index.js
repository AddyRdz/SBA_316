////////////////////// Form /////////////////////////////////////
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


// Can see changes in console
function submitForm(event){
    console.log(firstNameInput.value);
    console.log(lastNameInput.value);
    console.log(emailInput.value);
}

////////////////// Footer ///////////////////////////////////

const footerEl = document.getElementById('footer')

footerEl.setAttribute('class', 'flex-around')

var footerLinks = [
    {text: 'About us', href: "/about"},
    {text: 'Careers', href: "/careers"},
    {text: 'Sign Up', href: "/signup"},
];

footerLinks.forEach(link => {
    const a = document.createElement('a')
    a.setAttribute('href', link.href)
    a.textContent = link.text
    footerEl.appendChild(a)
})