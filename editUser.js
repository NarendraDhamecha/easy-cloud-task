const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const city = document.getElementById("city");
const gender = document.getElementById("gender");
const form = document.getElementById("form");

const users = JSON.parse(localStorage.getItem("users"));

const index = users.findIndex((user) => {
  return user.UserId == id;
});

fname.value = users[index].FN;
email.value = users[index].Email;
phone.value = users[index].Phone;
city.value = users[index].City;
gender.value = users[index].Gender;
lname.value = users[index].LN;

const editHandler = (e) => {
  e.preventDefault();

  const userDetails = {
    UserId: Number(id),
    FN: fname.value,
    LN: lname.value,
    Phone: phone.value,
    Email: email.value,
    Gender: gender.value,
    City: city.value,
  };

  users[index] = userDetails;

  localStorage.setItem("users", JSON.stringify(users));

  location.href = "http://127.0.0.1:5500/users.html";
};

form.addEventListener("submit", editHandler);
