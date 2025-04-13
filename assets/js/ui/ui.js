import { handleDeleteUser } from "../models/users/user-controller.js";

/* Catch container ui to display users and user roles */
let usersListContainer = document.querySelector(".user-list");
let userRoleContainer = document.getElementById("user-roles");

/* Display User Html  */
export const displayUsers = (usersList) => {
  /* 

  - display user list 
  - check role to handle show color for role user
  - after display user catch btn delete for all user to handle delete user

*/

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
          <button class="btn-delete"  data-id='${i}'">Delete</button>
        </div>
    
    `;
  }
  let btnsDelete = document.querySelectorAll(".btn-delete");

  btnsDelete.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let target = e.target.getAttribute("data-id");
      console.log(target);
      handleDeleteUser(target);
    });
  });
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
