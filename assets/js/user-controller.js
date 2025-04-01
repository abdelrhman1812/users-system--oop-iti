/* handler add user */

import { validationInputs } from "./ validation.js";
import { getUsersFromStorage, setUsersToStorage } from "./storage.js";
import { displayUsers } from "./ui.js";
import UserModel from "./users-model.js";

/*  Catch elements */

export let btnSubmit = document.getElementById("btnSubmit");

let elements = document.querySelectorAll("form input,select");

let inputUserProfile = document.getElementById("user-profile");

let inputUserName = document.getElementById("user-name");

let inputUserEmail = document.getElementById("user-email");

let inputUserPhone = document.getElementById("user-phone");

let inputUserBirthday = document.getElementById("user-birthday");

let optionUserRoles = document.getElementById("user-roles");

const searchInput = document.getElementById("search-input");

const searchBtn = document.getElementById("search-btn");

const resetBtn = document.getElementById("search-reset");

export const handleAddUser = (e) => {
  e.preventDefault();

  let isValid = true;

  /* Check input validation */

  if (!validationInputs(inputUserProfile, "profile")) {
    isValid = false;
  }

  if (!validationInputs(inputUserName, "name")) {
    isValid = false;
  }

  if (!validationInputs(inputUserEmail, "email")) {
    isValid = false;
  }

  if (!validationInputs(inputUserPhone, "phone")) {
    isValid = false;
  }
  if (!validationInputs(inputUserBirthday, "birthday")) {
    isValid = false;
  }
  if (!validationInputs(optionUserRoles, "role")) {
    isValid = false;
  }

  /* if input is valid, add user to list */

  if (isValid) {
    const userAdded = new UserModel(
      inputUserProfile.value,
      inputUserName.value,
      inputUserEmail.value,
      inputUserPhone.value,
      inputUserBirthday.value,
      optionUserRoles.value
    );

    /* get users form local storage to update this */

    const currentUsers = getUsersFromStorage();

    currentUsers.push(userAdded);

    setUsersToStorage(currentUsers);

    displayUsers(currentUsers);

    /* reset form */
    handleReset();
  }
};

/* Reset Values */
function handleReset() {
  elements.forEach((element) => {
    element.value = "";
  });
}
// /* handler msg error  */
elements.forEach((element) => {
  element.addEventListener("input", (e) => {
    e.target.nextElementSibling.style.display = "none";
  });
});

/* handle search */

const handleSearch = () => {
  let value = searchInput.value.trim();

  if (value.length === 0) {
    searchBtn.disabled = true;
  }

  const users = getUsersFromStorage();
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(value.toLowerCase())
  );

  console.log(filteredUsers);

  if (filteredUsers.length > 0) {
    resetBtn.style.display = "block";
    displayUsers(filteredUsers);
  } else {
    document.querySelector(
      ".user-list"
    ).innerHTML = `<span class="not-found">Not Found</span>`;
    resetBtn.style.display = "none";
  }
};

searchInput.addEventListener("input", () => {
  searchBtn.disabled = searchInput.value.trim().length === 0;
});

searchBtn.addEventListener("click", handleSearch);
searchBtn.disabled = true;

/* reset users after search */

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchBtn.disabled = true;
  resetBtn.style.display = "none";
  displayUsers(getUsersFromStorage());
});
