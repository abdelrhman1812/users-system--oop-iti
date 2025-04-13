export const showToast = (type, msg) => {
  /*
  
   - This fn shows a success or error message.

   - It accepts a type ("error" or "success") and a message ("user", "roles").

   - After 3 seconds, the message is rm.
  
  */

  const toast = document.getElementById("toast");
  let msgContainer = document.querySelector(".toast-message");
  let classLists = ["show"];
  msgContainer.innerHTML = msg;
  classLists.push(type);
  toast.classList.add(...classLists);

  // Auto hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // Manual close
  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.classList.remove("show");
  });
};
