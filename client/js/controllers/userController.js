import UserModel from "../models/userModel.js";
import UserView from "../views/userView.js";

const UserController = {
    async loadUsers() {
        const users = await UserModel.fetchUsers();
        UserView.displayUsers(users);
    }
};

export default UserController;
