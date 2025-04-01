/* 

- Create User Roles Model 
- property is id , Name of Role , Time of valued
- Create list of usersRoles 
- make id dynamically

*/

let userRoleId = 1;
class UserRolesModel {
  constructor(nameOfRole, timeOfValued) {
    this.id = userRoleId++;
    this.nameOfRole = nameOfRole;
    this.timeOfValued = timeOfValued;
  }
}

export default UserRolesModel;
