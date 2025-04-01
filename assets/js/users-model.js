import usersRolesList from "./users-roles.js";
/* 

- Create User Model 
- property is profile image , userName , email , phone ,birthday ,role chip 
- roleChip when i create users i select id the roles and get roles based on id


*/

class UserModel {
  constructor(profileImage, userName, email, phone, birthday, roleChip) {
    this.profileImage = profileImage;
    this.userName = userName;
    this.email = email;
    this.phone = phone;
    this.birthday = birthday;
    this.roleChip = usersRolesList.find(
      (userRole) => userRole.id === Number(roleChip)
    );
  }
}

export default UserModel;
