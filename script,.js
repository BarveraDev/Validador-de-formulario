let barvera_validator = {
    handle_submit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll("input");

        for (let index = 0; index < inputs.length; index++) {
            let input = inputs[index];
            let check = barvera_validator.checkInput(input);
            if (check !== false) {
                send = false;
                console.log(check)
                // exibir o erro
            }
        }

        if (send) {
            form.submit();
        }

    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let r_details = rules[k].split("=");
                switch(r_details[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'Campo não pode ser vazio.'
                        }
                    break;
                    case 'min':

                    break;

                }
            }
        }
        return true;
    }
};

let form = document.querySelector('.barvera_validator')
form.addEventListener('submit', barvera_validator.handle_submit)