import { getUsersFromStorage, setUsersToStorage } from "./storage.js";

/* Catch container ui to display users and user roles */

let usersListContainer = document.querySelector(".user-list");
let userRoleContainer = document.getElementById("user-roles");

/* Display User Html  */
export const displayUsers = (usersList) => {
  usersListContainer.innerHTML = "";

  let color;

  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i]?.roleChip?.nameOfRole === "user") {
      color = "green";
    } else if (usersList[i]?.roleChip?.nameOfRole === "admin") {
      color = "red";
    } else if (usersList[i]?.roleChip?.nameOfRole === "moderator") {
      color = "yellow";
    }
    usersListContainer.innerHTML += `
      <div class="user">
          <figure>
            <img src=${usersList[i].profileImage} alt="" />
          </figure>
          <h2 class="${color} role-badge">${usersList[i].roleChip?.nameOfRole}</h2>
          <h3>${usersList[i].userName}</h3>
          <h3>${usersList[i].email}</h3>
          <h3>${usersList[i].phone}</h3>
          <h3>${usersList[i].birthday}</h3>
          <button onClick="handleDeleteUser(${i})">Delete</button>
        </div>
    
    `;
  }
};

/* Display users roles  */

export const displayUsersRoles = (usersRolesList) => {
  userRoleContainer.innerHTML = ` <option value="">Choose Role</option>
`;
  for (let i = 0; i < usersRolesList.length; i++) {
    userRoleContainer.innerHTML += `
    
    <option value="${Number(usersRolesList[i].id)}">${
      usersRolesList[i].nameOfRole
    }</option>
    `;
  }
};

/* Handle Delete User */
window.handleDeleteUser = function (index) {
  const users = getUsersFromStorage();

  // take copy form and rm
  const updatedUsers = [...users];

  updatedUsers.splice(index, 1);

  // set after rm
  setUsersToStorage(updatedUsers);

  // show after update
  displayUsers(updatedUsers);

  // console.log(" updatedUsers ", updatedUsers);
};
