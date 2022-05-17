let inputs = document.querySelectorAll('input');
let errors = {
    "ime_prezime": [],
    "korisnicko_ime": [],
    "email": [],
    "lozinka": [],
    "ponovi_lozinku": []
};

inputs.forEach((element) => {
    element.addEventListener('change', e => {
        let currentInput = e.target;
        let inputValue = currentInput.value;
        let inputName = currentInput.getAttribute('name')
        console.log(inputName);

        if (inputValue.length > 4) {

            errors[inputName] = []

            switch (inputName) {
                case 'ime_prezime':
                    let validation = inputValue.trim();
                    validation = validation.split(" ");
                    if (validation.length < 2) {
                        errors[inputName].push('Enter first and last name');
                    }
                    break;

                case 'email':
                    if (!validateEmail(inputValue)) {
                        errors[inputName].push('Invalid Email')
                    }
                    break;

                case 'ponovi_lozinku':
                    let lozinka = document.querySelector('input[name="lozinka"]').value;
                    if (inputValue !== lozinka) {
                        errors[inputName].push('Passwords do not match');
                    }
                    break;
            }
        } else {
            errors[inputName] = ['Fields must be more than 4 characters']
        }

        populateErrors()

    });
});

const populateErrors = () => {



    for (let elem of document.querySelectorAll('ul')) {
        elem.remove();
    }

    for (let key of Object.keys(errors)) {
        let input = document.querySelector(`input[name= "${key}"]`);
        let parentElement = input.parentElement;
        let errorsElement = document.createElement('ul');
        parentElement.appendChild(errorsElement)

        errors[key].forEach(error => {
            let li = document.createElement('li');
            li.innerHTML = error;

            errorsElement.appendChild(li);
        })
    }

}


const validateEmail = email => {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
        return true;
    }
    return false;
}

