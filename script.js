function moveToNext(currentInput, nextInputId) {
            if (currentInput.value.length === 1) {
                document.getElementById(nextInputId)?.focus();
            }
        }

        document.querySelector('.submit').addEventListener('click', function(event) {
            event.preventDefault();
        
            let isValid = true;
            let firstName = document.getElementById('first-name');
            let lastName = document.getElementById('last-name');
            let email = document.getElementById('email');
            let phone = document.querySelector('[placeholder="Enter Phone Number"]');
            let qualification = document.getElementById('qualification');
            let university = document.getElementById('university');
            let linkedin = document.getElementById('linkedin');
            let github = document.getElementById('github');
            let otpEmail = [...document.querySelectorAll('.otp input')].slice(0, 4);
            let otpPhone = [...document.querySelectorAll('.otp input')].slice(4, 8);
        
            function validateField(field, regex, message) {
                if (!field.value.trim().match(regex)) {
                    alert(message);
                    field.focus();
                    isValid = false;
                }
            }
        
            validateField(firstName, /^[A-Za-z]+$/, 'Enter a valid first name.');
            validateField(lastName, /^[A-Za-z]*$/, 'Enter a valid last name.');
            validateField(email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid email.');
            validateField(phone, /^[1-9]{1}[0-9]{9}/, 'Enter a valid 10-digit phone number.');
            validateField(qualification, /^[A-Za-z ]+$/, 'Enter a valid qualification.');
            validateField(university, /^[A-Za-z ]+$/, 'Enter a valid university name.');
            
            if (linkedin.value && !linkedin.value.match(/^https?:\/\/www\.linkedin\.com\/.*$/)) {
                alert('Enter a valid LinkedIn URL.');
                linkedin.focus();
                isValid = false;
            }
        
            if (github.value && !github.value.match(/^https?:\/\/github\.com\/.*$/)) {
                alert('Enter a valid GitHub URL.');
                github.focus();
                isValid = false;
            }
        
            if (otpEmail.some(input => input.value.trim() === '')) {
                alert('Enter the full OTP for email verification.');
                isValid = false;
            }
        
            if (otpPhone.some(input => input.value.trim() === '')) {
                alert('Enter the full OTP for phone verification.');
                isValid = false;
            }
        
            if (isValid) {
                alert('Form submitted successfully!');
                document.getElementById('signup_container').submit(); // Submit form
            }
        });
