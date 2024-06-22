// document
//         .getElementById("loginForm")
//         .addEventListener("submit", function (event) {
//           event.preventDefault();

//           // Get form values
//           var username = document.getElementById("username_lgn").value;
//           var password = document.getElementById("password_lgn").value;

//           // Check if the user is registered
//           var users = JSON.parse(localStorage.getItem("users")) || [];
//           var user = users.find(function (u) {
//             return u.username === username && u.password === password;
//           });

//           if (user) {
//             // Store the user in localStorage
//             localStorage.setItem("currentUser", JSON.stringify(user));

//             // Redirect to the appropriate page based on user type
//             if (user.type === "admin") {
//               window.location.href = "./Admin.html";
//             } else {
//               window.location.href = "./UserPage.html";
//             }
//           } else {
//             document.getElementById("loginMessage").textContent =
//               "Invalid username or password.";
//           }
//         });
     


//       ///signup
//       document
//         .getElementById("register-form")
//         .addEventListener("submit", function (event) {
//           event.preventDefault();

//           // Get form values
//           var username = document.getElementById("username").value;
//           var email = document.getElementById("email").value;
//           var number = document.getElementById("phone").value;
//           var password = document.getElementById("password").value;
//           var type = document.getElementById("user-type").value;

//           // Validate username, email, number, and password
//           if (!validateUsername(username)) {
//             document.getElementById("registerMessage").textContent =
//               "Username must be at least 4 characters long and contain only letters and numbers.";
//             return;
//           }

//           if (!validateEmail(email)) {
//             document.getElementById("registerMessage").textContent =
//               "Invalid email address.";
//             return;
//           }

//           if (!validateNumber(number)) {
//             document.getElementById("registerMessage").textContent =
//               "Invalid phone number.";
//             return;
//           }

//           if (!validatePassword(password)) {
//             document.getElementById("registerMessage").textContent =
//               "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
//             return;
//           }

//           // Check if the username is already taken
//           var users = JSON.parse(localStorage.getItem("users")) || [];
//           var existingUser = users.find(function (u) {
//             return u.username === username;
//           });

//           if (existingUser) {
//             document.getElementById("registerMessage").textContent =
//               "Username is already taken.";
//             return;
//           }

//           // Create a new user object
//           var newUser = {
//             username: username,
//             email: email,
//             number: number,
//             password: password,
//             type: type,
//           };

//           // Add the new user to the users array and store it in localStorage
//           users.push(newUser);
//           localStorage.setItem("users", JSON.stringify(users)); // عشان اخزنهم في البراوسر من تاني وارجعهم لاصلهم

//           document.getElementById("registerMessage").textContent =
//             "Registration successful. You can now login.";
//         });
//       function validateUsername(username) {
//         // Regular expression to validate username (at least 4 characters, letters and numbers only)
//         var usernameRegex = /^[a-zA-Z0-9]{4,}$/;
//         return usernameRegex.test(username);
//       }
//       function validateEmail(email) {
//         // Regular expression to validate email format
//         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//       }

//       function validateNumber(number) {
//         // Regular expression to validate phone number format (11 digits)
//         var numberRegex = /^01[0-2,5]\d{8}$/;
//         return numberRegex.test(number);
//       }
//       function validatePassword(password) {
//         // Regular expression to validate password requirements
//         //At least 8 characters long.
//         //Contains at least one uppercase letter.
//         //Contains at least one lowercase letter.
//         //Contains at least one digit.
//         var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//         return passwordRegex.test(password);
//       }