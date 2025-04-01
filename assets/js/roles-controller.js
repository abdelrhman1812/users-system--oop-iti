/* handler add role */

import { validationInputs } from "./ validation.js";
import { displayUsersRoles } from "./ui.js";
import UserRolesModel from "./userRoles-model.js";
import usersRolesList from "./users-roles.js";

/* catch elements */
export let btnAddRole = document.getElementById("btnAddRole");

export let inputRoleName = document.getElementById("role-name");

export let inputRoleDate = document.getElementById("role-date");

/*  handle  add role */
export const handleAddRole = (e) => {
  e.preventDefault();
  let isValid = true;

  /* Check input validation */

  if (!validationInputs(inputRoleName, "roleName")) {
    isValid = false;
  }
  if (!validationInputs(inputRoleName, "expiryDate")) {
    isValid = false;
  }

  /* if input is valid, add role to list */

  if (isValid) {
    const roleAdded = new UserRolesModel(
      inputRoleName.value,
      inputRoleDate.value
    );
    inputRoleDate.value = "";
    inputRoleName.value = "";

    /* update users roles */
    usersRolesList.push(roleAdded);
    displayUsersRoles(usersRolesList);
  }
};
