
// Exercise 6
//variable form  it will hold a html id 
const form = document.getElementById("form");//access to form
//we can call the variable inputs to select all inputs of id form. 
const inputs = document.querySelectorAll("#form input");// access to all inputs of form id.

//object exp holds all regex expretions that will validate fields later. 
const exp = {
  names: /^[a-zA-ZÀ-ÿ\s]{3,16}$/, // Letras y espacios, pueden llevar acentos.
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,8}$/, // 6 a 15 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{9}$/, // 9 a 14 numeros.
};

//variables of each fields input. 
var fName = document.getElementById("fName");
var fEmail = document.getElementById("fEmail");
var fAddress = document.getElementById("fAddress");
var fLastN = document.getElementById("fLastN");
var fPassword = document.getElementById("fPassword");
var fPhone = document.getElementById("fPhone");


//Function to validate fields
function validate() {
	//inizializes variable error to 0. It will track number of errors during validation.
	var error = 0;	
	// Validate fields entered by the user: name, phone, password, and email

	////Validate name

	//checks if regular expression of names not mathes  field input fNames.
	if(!exp.names.test(fName.value)){
		//if not increments error variable by 1.
		error++;
		//remove/adds the html class from input fname field.
		fName.classList.remove('is-valid');
		fName.classList.add('is-invalid');
	//if does match execute inside block else.
	}else{
		fName.classList.remove('is-invalid');
		fName.classList.add('is-valid');
	}

	//Validate email
			
	if( !exp.email.test(fEmail.value)){
		error++;
		fEmail.classList.remove('is-valid');
		fEmail.classList.add('is-invalid');
	}else{
		fEmail.classList.remove('is-invalid');
		fEmail.classList.add('is-valid');
	}

	//Validate address
	if(!exp.names.test(fAddress.value)){
		error++;
		fAddress.classList.remove('is-valid');
		fAddress.classList.add('is-invalid');
	}else{
		fAddress.classList.remove('is-invalid');
		fAddress.classList.add('is-valid');
	}

	//Validate Last Name
	if(!exp.names.test(fLastN.value)){
		error++;
		fLastN.classList.remove('is-valid');
		fLastN.classList.add('is-invalid');
	}else{
		fLastN.classList.remove('is-invalid');
		fLastN.classList.add('is-valid');
	}

	//Validate password

	if( !exp.password.test(fPassword.value)){
		error++;
		fPassword.classList.remove('is-valid');
		fPassword.classList.add('is-invalid');
	}else{
		fPassword.classList.remove('is-invalid');
		fPassword.classList.add('is-valid');
	}

	//Validate phone

	if(!exp.phone.test(fPhone.value)){
		error++;
		fPhone.classList.remove('is-valid');
		fPhone.classList.add('is-invalid');
	}else{
		fPhone.classList.remove('is-invalid');
		fPhone.classList.add('is-valid');
	}

	//Checkout inform is all is valid
	//Checks if the error variable is equal to 0. If it is display alert message.
	if(error==0){
		alert("Successful Checkout");
	}

}


//create an alert if fields are not correct
//Add an event listener to the submit event of the form element. 
//parameter e represents the event object.
form.addEventListener('sumbmit', (e) => {
	//Prevents to submit the form to the server and reload the page if is not correct. 
	e.preventDefault();
	//calls fuction to validate input fields.
	validate();
});











