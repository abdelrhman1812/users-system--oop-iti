/* handler add role */

import usersRolesList from "../../data/users-roles-list.js";
import { displayUsersRoles } from "../../ui/ui.js";
import { validationInputs } from "../../utils/ validation.js";
import { showToast } from "../../utils/toast.js";
import UserRolesModel from "./userRoles-model.js";

/* catch elements */
export let btnAddRole = document.getElementById("btnAddRole");

export let inputRoleName = document.getElementById("role-name");

export let inputRoleDate = document.getElementById("role-date");

/*  handle  add role */
export const handleAddRole = (e) => {
  /*

   - check validation for input
   - if true ! implement add role 
   - display role
  
  
  */

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
    showToast("success", "Success Add Role");
  }
};
