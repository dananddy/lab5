function checkNumber(number) {
            if (/\d{10}/.test(number)) {
                alert('Valid')
            } else {
                alert('Not valid')
            }
        }

        function checkName(number) {
            if (/^[(@)+(a-zA-Z0-9) ]+$/.test(number)) {
                alert('Valid')
            } else {
                alert('Not valid')
            }
        }

        function checkEmail(number) {
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(number)) {
                alert('Valid')
            } else {
                alert('Not valid')
            }
        }