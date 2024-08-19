$(document).ready(function () {
    // Login form validation
    $("#loginForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            email: {
                required: "*email Required",
                email: "Please enter a valid email address"
            },
            password: {
                required: "*password required",
                minlength: "Your password must be at least 6 characters long"
            }
        }
    });

    // Signup form validation
    $("#signupForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            name: {
                required: "*Name Required",
                minlength: "Your name must be at least 2 characters long"
            },
            email: {
                required: "*email required",
                email: "Please enter a valid email address"
            },
            password: {
                required: "*password  required",
                minlength: "Your password must be at least 6 characters long"
            },
            confirmpassword: {
               required: "Please enter confirm password.",
               equalTo: "Password and confirm password does not match"
            }
        }
    });
});
