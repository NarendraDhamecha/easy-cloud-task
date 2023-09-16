const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");

const signupHandler = async (e) => {
  e.preventDefault();

  if (password.value !== confirmPassword.value) {
    alert("confirm password is different");
    return;
  }
  const signupDetails = {
    email: email.value,
    password: password.value,
    returnSecureToken: true,
  };

  try {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyABi4gq2w3rlwOUeQDNwrENrUpvfl36_Ro",
      {
        method: "POST",
        body: JSON.stringify(signupDetails),
        headers: {
          "content-type": "application-json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("successfully signed up");
      location.href = "http://127.0.0.1:5500/login.html";
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    alert(error);
  }
};

form.addEventListener("submit", signupHandler);
