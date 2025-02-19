function moveToNext(currentInput, nextInputId) {
            if (currentInput.value.length === 1) {
                document.getElementById(nextInputId)?.focus();
            }
        }

        function moveToNext(currentInput, nextInputId) {
            if (currentInput.value.length === 1) {
                document.getElementById(nextInputId)?.focus();
            }
        }
        
        document.querySelector('.submit').addEventListener('click', function(event) {
            event.preventDefault();
        
            let firstName = document.getElementById('first-name');
            let lastName = document.getElementById('last-name');
            let email = document.getElementById('email');
            let phone = document.querySelector('[placeholder="Enter Phone Number"]');
            let qualification = document.getElementById('qualification');
            let university = document.getElementById('university');
            let username = document.getElementById('username');
            let password = document.getElementById('password');
            let linkedin = document.getElementById('linkedin');
            let github = document.getElementById('github');
            let otpEmail = [...document.querySelectorAll('.otp input')].slice(0, 4);
            let otpPhone = [...document.querySelectorAll('.otp input')].slice(4, 8);
        
            function validateField(field, regex, message) {
                if (!field.value.trim().match(regex)) {
                    alert(message);
                    field.focus();
                    return false; // Stops validation immediately
                }
                return true;
            }
        
            if (!validateField(firstName, /^[A-Za-z]+$/, 'Enter a valid first name.')) return;
            if (!validateField(lastName, /^[A-Za-z]*$/, 'Enter a valid last name.')) return;
            if (!validateField(email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid email.')) return;
            if (!validateField(phone, /^[1-9]{1}[0-9]{9}$/, 'Enter a valid 10-digit phone number.')) return;
            if (!validateField(qualification, /^[A-Za-z ]+$/, 'Enter a valid qualification.')) return;
            if (!validateField(university, /^[A-Za-z ]+$/, 'Enter a valid university name.')) return;
            if (!validateField(username, /^[A-Za-z._0-9]+$/, 'Enter a valid username.')) return;
            if (!validateField(password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/, 
                'Enter a password with at least 1 lowercase, 1 uppercase, 1 digit, 1 special character, and a minimum length of 5.')) return;
        
            if (linkedin.value && !linkedin.value.match(/^https?:\/\/www\.linkedin\.com\/.*$/)) {
                alert('Enter a valid LinkedIn URL.');
                linkedin.focus();
                return;
            }
        
            if (github.value && !github.value.match(/^https?:\/\/github\.com\/.*$/)) {
                alert('Enter a valid GitHub URL.');
                github.focus();
                return;
            }
        
            if (otpEmail.some(input => input.value.trim() === '')) {
                alert('Enter the full OTP for email verification.');
                return;
            }
        
            if (otpPhone.some(input => input.value.trim() === '')) {
                alert('Enter the full OTP for phone verification.');
                return;
            }
        
            alert('Form submitted successfully!');
            document.getElementById('signup_container').submit();
        });
        

document.getElementById('togglePassword').addEventListener('click', function () {
            const passwordField = document.getElementById('password');
            const icon = this;
            
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                passwordField.type = 'password';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
