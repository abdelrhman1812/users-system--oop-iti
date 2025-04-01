// index.js

console.log("بسم الله الرحمن الرحيم");

import { btnAddRole, handleAddRole } from "./roles-controller.js";
import { getUsersFromStorage, setUsersToStorage } from "./storage.js";
import { displayUsers, displayUsersRoles } from "./ui.js";
import { btnSubmit, handleAddUser } from "./user-controller.js";
import usersList from "./users-list.js";
import usersRolesList from "./users-roles.js";

// set users if not exist in local storage so when you open see some users

if (getUsersFromStorage().length === 0) {
  setUsersToStorage(usersList);
}
let users = getUsersFromStorage();

/* display users and user roles */

displayUsers(users);

displayUsersRoles(usersRolesList);

/* handle add use and roles */

btnSubmit.addEventListener("click", handleAddUser);

btnAddRole.addEventListener("click", handleAddRole);
