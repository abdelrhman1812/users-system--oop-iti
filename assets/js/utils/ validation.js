/* Validations Normal Inputs */

/* Make Dynamic Function Take Input , Text ==> Error Message */
export const validationInputs = (field, text) => {
  /* Get element to display msg error */

  let error = document.getElementById(`${text}-error`);
  let value = field.value.trim();

  /* Check if field is empty or not */

  if (value.length > 0 && value !== "") {
    error.style.display = "none";
    return true;
  } else {
    error.style.display = "block";
    error.innerText = `${text} is required`;
    return false;
  }
};
