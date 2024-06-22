// /////////////////////////////////////////Login////////////////////////////////////////
// //////another way - dynamic user 
// document.getElementById("loginForm").addEventListener("submit", function (event) {
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


// //////////////////////////////////////////////////Signup////////////////////////////////////////////
// //declare an empty object

// document.getElementById("register-form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Get form values
//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var number = document.getElementById("phone").value;
//   var password = document.getElementById("password").value;
//   var type = document.getElementById("user-type").value;

//   // Validate username, email, number, and password
//   if (!validateUsername(username)) {
//     document.getElementById("registerMessage").textContent =
//       "Username must be at least 4 characters long and contain only letters and numbers.";
//     return;
//   }

//   if (!validateEmail(email)) {
//     document.getElementById("registerMessage").textContent =
//       "Invalid email address.";
//     return;
//   }

//   if (!validateNumber(number)) {
//     document.getElementById("registerMessage").textContent =
//       "Invalid phone number.";
//     return;
//   }

//   if (!validatePassword(password)) {
//     document.getElementById("registerMessage").textContent =
//       "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
//     return;
//   }

//   // Check if the username is already taken
//   var users = JSON.parse(localStorage.getItem("users")) || [];
//   var existingUser = users.find(function (u) {
//     return u.username === username;
//   });

//   if (existingUser) {
//     document.getElementById("registerMessage").textContent =
//       "Username is already taken.";
//     return;
//   }

//   // Create a new user object
//   var newUser = {
//     username: username,
//     email: email,
//     number: number,
//     password: password,
//     type: type,
//   };

//   // Add the new user to the users array and store it in localStorage
//   users.push(newUser);
//   localStorage.setItem("users", JSON.stringify(users)); // عشان اخزنهم في البراوسر من تاني وارجعهم لاصلهم

//   document.getElementById("registerMessage").textContent =
//     "Registration successful. You can now login.";
// });
// function validateUsername(username) {
// // Regular expression to validate username (at least 4 characters, letters and numbers only)
// var usernameRegex = /^[a-zA-Z0-9]{4,}$/;
// return usernameRegex.test(username);
// }
// function validateEmail(email) {
// // Regular expression to validate email format
// var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// return emailRegex.test(email);
// }

// function validateNumber(number) {
// // Regular expression to validate phone number format (11 digits)
// var numberRegex = /^01[0-2,5]\d{8}$/;
// return numberRegex.test(number);
// }
// function validatePassword(password) {
// // Regular expression to validate password requirements
// //At least 8 characters long.
// //Contains at least one uppercase letter.
// //Contains at least one lowercase letter.
// //Contains at least one digit.
// var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// return passwordRegex.test(password);
// }

// function logoutUser() {
//   localStorage.removeItem('loggedInUser');
//   window.location.href = 'LoginPage.html';
// }




























































// ///static data
// // console.log(user_data);
// // console.log(user_data.Email);
// // console.log(user_data.user_name);
// // console.log(user_data.Password);

// // if (user_data.Email =="mamoud@gmail.com" && user_data.Password == "P@ssw0rd" ) {
// //     console.log("login Success");
// // }




// //another function
// // function log_in(event) {
// //     event.preventDefault();  // Prevent the form from submitting the traditional way

// //     var username = document.getElementById('username').value;
// //     var password = document.getElementById('password').value;

// //     // Now you can use the username and password values
// //     console.log('Username:', username);
// //     console.log('Password:', password);

// //     // You can add further logic here to handle the login
// // }


// // declare an object
// // const UserObj = {
// //     user_name: "M@hm0ud",
// //     Email: "mamoud@gmail.com",
// //     Password: "P@ssw0rd",
// //     type: "Admin"
// // }

// // add the obj to localStorage with key [user] and parsing it to string from json
// // localStorage.setItem('user', JSON.stringify(UserObj));

// //getting the obj from localstorage
// // const my_user = localStorage.getItem('user');

// // receiving the obj in another var and converting it to json format
// // const user_data = JSON.parse(my_user);



// ///////////////////////////////////////////////////////login/////////////////////////////////////////
// //login a static user from my entry
// //function to login
// // function LogIn_func(event) {
// //     event.preventDefault();
// //     let UN = document.getElementById('username_lgn').value;
// //     let Pass = document.getElementById('password_lgn').value;
// //     let Type = document.getElementById('user-type').value;
// //     alert(`un: ${UN}, pass: ${Pass}, T: ${Type}`)
// //     if (user_data.user_name == UN && user_data.Password == Pass && user_data.type == Type) {
// //         alert("login Success");
// //         window.location.href = './HomePage.html';
// //     }
// //     else {
// //         alert('error!!');
// //         LogIn_func();
// //     }
// // }