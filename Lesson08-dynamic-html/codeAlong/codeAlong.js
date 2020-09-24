//CODE-ALONG
//array with form fields
const fields = [
  {
    label: 'Full Name',
    name: 'full-name'

  },
  {
    name: 'email',
    label: 'Email Address'
  }
];

//create a form, assign it variable 'form', and append it to the html
const form = document.createElement('form');
document.body.appendChild(form);

//create an element for each field in the array above, and append it to the html
for (let i = 0; i < fields.length; i += 1) {
  const field = fields[i]; //gets text content from the specified field (i) of the array 'fields'

  const label = document.createElement('label');
  label.textContent = field.label; //assign text content to the label field of the array

  label.setAttribute('for', field.name); //tells browser which element this label is for. field.name must match for label and input.

  //creat input fields
  const input = document.createElement('input')

  //give input field an id. This is what 'for' refers to.
  input.setAttribute('id', field.name); //'for' field.name (label) must match id field.name (input)

//append label and input to html
  form.appendChild(label);
  form.appendChild(input);
}

//submit button
const submitButton = document.createElement('button'); //create element and set it to a variable
submitButton.setAttribute('type', 'submit'); //set type
submitButton.textContent = 'Submit'; //set text

form.appendChild(submitButton); //append variable to html

//event handler (define what happens on submit)
form.addEventListener('submit', function(event) { // event listener and callback function
  event.preventDefault(); //prevents default submit page reload
  alert('Form submitted');
});
//END CODE-ALONG
