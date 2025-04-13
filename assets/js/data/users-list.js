import UserModel from "../models/users/users-model.js";

let usersList = [
  new UserModel(
    "assets/images/user1.jpg",
    "Abdelrhman",
    "abdo@gmail.com",
    "01008034761",
    "18-12-1999",
    1
  ),

  new UserModel(
    "assets/images/user2.png",
    "Ahmed",
    "ahmed@gmail.com",
    "01008034761",
    "05-3-1997",
    2
  ),

  new UserModel(
    "assets/images/user2.png",
    "Mai",
    "mai@gmail.com",
    "01008034761",
    "21-8-2000",
    3
  ),
];

export default usersList;
