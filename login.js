const Form = document.getElementById("form");
const Email = document.getElementById("email");
const Password = document.getElementById("password");

const loginHandler = async (e) => {
  e.preventDefault();

  const loginDetails = {
    email: Email.value,
    password: Password.value,
    returnSecureToken: true,
  };

  try {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyABi4gq2w3rlwOUeQDNwrENrUpvfl36_Ro",
      {
        method: "POST",
        body: JSON.stringify(loginDetails),
        headers: {
          "content-type": "application-json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      location.href = "http://127.0.0.1:5500/users.html";
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    alert(error);
  }
};

Form.addEventListener("submit", loginHandler);
