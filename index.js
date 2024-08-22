const confirmation = window.confirm("Do you agree to fill out the following form?");
console.log('Confirmation is received.');


//////////////////// Form /////////////////////////////////////
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
firstNameInput.minLength = 2;
firstNameInput.maxLength = 15;
firstNameInput.required = true;

// lastName
const lastNameInput = document.createElement('input');
lastNameInput.type = 'text';
lastNameInput.id = 'lastNameLabel';
lastNameInput.placeholder = 'Last Name';
lastNameInput.minLength = 2;
lastNameInput.maxLength = 15;
lastNameInput.required = true;

// email
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.placeholder = 'Email';
emailInput.minLength = 2;
emailInput.maxLength = 20;
emailInput.required = true;

// make changes to form
form.appendChild(firstNameInput);
form.appendChild(lastNameInput);
form.appendChild(emailInput);
formEl.appendChild(form);


// Create a button
submitButtonEl.addEventListener('click', submitForm);


// Can see changes in console
function submitForm(event){
    console.log(firstNameInput.value);
    console.log(lastNameInput.value);
    console.log(emailInput.value);
}

////////////////// Footer ///////////////////////////////////

const footerEl = document.getElementById('footer');
footerEl.style.position = 'fixed';
footerEl.style.width = '100%'
footerEl.style.textAlign = 'center';
footerEl.setAttribute('class', 'flex-around');

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

// click footer <a>
footerEl.addEventListener('click', function(e){
    e.preventDefault();
    if(!e.target.matches('a')) {
        return;
    }
    console.log(e.target.textContent);
    
})

// Updates first link to monster.com
const updateATag = document.querySelector('a')
console.log(updateATag.hasAttribute('href'));
console.log(`href is ===` + updateATag.getAttribute('href'));

updateATag.setAttribute('href', 'monster.com')

console.log(`More information on the location ${window.location}`);


// Every time I would try to incorportate querySelector, it would try to control my whole page. 