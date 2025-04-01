import usersList from "./users-list.js";

/* Get Users From Local Storage */

export const getUsersFromStorage = () => {
  const users = localStorage.getItem("users");

  /* Check If User Exist or no */

  if (!users) return usersList;
  return JSON.parse(users);
};

/* Set Users To Local Storage */
/* Make Dynamic Function Take key and vale */

export const setUsersToStorage = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};
