import UserController from "../controllers/userController.js";

const UserView = {
    render() {
        document.getElementById("content").innerHTML = `
            <h2>Users</h2>
            <ul id="userList"></ul>
        `;
        UserController.loadUsers();
    },

    displayUsers(users) {
        const list = document.getElementById("userList");
        list.innerHTML = users.map(user => `<li>${user.username} - ${user.email}</li>`).join("");
    }
};

export default UserView;
