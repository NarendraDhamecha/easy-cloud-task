let DUMMY = [
  {
    UserId: 1,
    FN: "Arjun",
    LN: "Gopal",
    Phone: "9874563210",
    Email: "arjun@gmail.com",
    Gender: "Male",
    City: "Surat",
  },
  {
    UserId: 2,
    FN: "Rahul",
    LN: "Kumar",
    Phone: "9898287066",
    Email: "rahul@gmail.com",
    Gender: "Male",
    City: "Surat",
  },
  {
    UserId: 3,
    FN: "Aakash",
    LN: "Tanwani",
    Phone: "9898287089",
    Email: "vinpahilincometax1@gmail.com",
    Gender: "Male",
    City: "Rajkot",
  },
  {
    UserId: 4,
    FN: "Abhijeet",
    LN: "Chopra",
    Phone: "9558709695",
    Email: "abhijeet@gmail.com",
    Gender: "Male",
    City: "Bhuj",
  },
  {
    UserId: 5,
    FN: "Aditi",
    LN: "Thapar",
    Phone: "9558796095",
    Email: "thapar@gmail.com",
    Gender: "Female",
    City: "Bhuj",
  },
  {
    UserId: 6,
    FN: "DECOR",
    LN: "AAIJI ",
    Phone: "7425896095",
    Email: "aaiji@gmail.com",
    Gender: "Male",
    City: "Surat",
  },
  {
    UserId: 7,
    FN: "Hardik",
    LN: "Patel",
    Phone: "6353695363",
    Email: "hardik@gmail.com",
    Gender: "Male",
    City: "Surat",
  },
  {
    UserId: 8,
    FN: "Harsh",
    LN: "Fammeo",
    Phone: "7359938113",
    Email: "fammoe@gmail.com",
    Gender: "Male",
    City: "Surat",
  },
  {
    UserId: 9,
    FN: "Anjali",
    LN: "Patel",
    Phone: "951236470",
    Email: "anjali@gmail.com",
    Gender: "Male",
    City: "navsari",
  },
  {
    UserId: 10,
    FN: "Avinash",
    LN: "Koshti",
    Phone: "7558796095",
    Email: "koshti@gmail.com",
    Gender: "Male",
    City: "Surat",
  },
];

const tBody = document.getElementById("tbody");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const users = JSON.parse(localStorage.getItem("users"));
const pagination = document.getElementById("pagination");

if (users) {
  DUMMY = [...users];
} else {
  localStorage.setItem("users", JSON.stringify(DUMMY));
}

prevBtn.addEventListener("click", () => {
  const start = (prevBtn.innerText - 1) * 5;
  const end = prevBtn.innerText * 5;
  showUsers(start, end);
  nextBtn.className = "btn btn-primary btn-sm";
  prevBtn.className = "btn btn-primary";
});

nextBtn.addEventListener("click", () => {
  const start = (nextBtn.innerText - 1) * 5;
  const end = nextBtn.innerText * 5;
  showUsers(start, end);
  prevBtn.className = "btn btn-primary btn-sm";
  nextBtn.className = "btn btn-primary";
});

const deleteUser = (id) => {
  const filteredArray = JSON.parse(localStorage.getItem("users")).filter(
    (user) => id != user.UserId
  );
  localStorage.setItem("users", JSON.stringify(filteredArray));
  DUMMY = [...filteredArray];
  let childNode = document.getElementById(id);

  if (childNode) {
    tBody.removeChild(childNode);
  }
};

const editUser = (id) => {
  location.href = `http://127.0.0.1:5500/editUser.html?id=${id}`;
};

function showUsers(start, end) {
  const users = DUMMY.slice(start, end);

  tBody.innerHTML = "";

  const totalPages = Math.round(DUMMY.length / 5);
  if (totalPages < 2) {
    pagination.removeChild(nextBtn);
  }
  if(totalPages < 1){
    pagination.innerHTML = '<h2 class="m-5">No users</h2>'
  }

  for (let i = 0; i < users.length; i++) {
    const child = `<tr id='${users[i].UserId}'>
    <td>${users[i].FN}</td>
    <td>${users[i].Email}</td>
    <td>${users[i].Phone}</td>
    <td>${users[i].Gender}</td>
    <td>${users[i].City}</td>
    <td>
    <button class='btn btn-warning btn-sm' onclick=editUser(${users[i].UserId})>Edit</button>
    </td>
    <td>
    <button class='btn btn-danger btn-sm' onclick=deleteUser(${users[i].UserId})>Delete</button>
    </td>
    </tr>`;

    tBody.innerHTML = tBody.innerHTML + child;
  }
}

showUsers(0, 5);
