// index.js

import usersList from "./data/users-list.js";
import usersRolesList from "./data/users-roles-list.js";
import { handleAddRole } from "./models/roles/roles-controller.js";
import { handleAddUser } from "./models/users/user-controller.js";
import { getUsersFromStorage, setUsersToStorage } from "./storage/storage.js";
import { displayUsers, displayUsersRoles } from "./ui/ui.js";

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
