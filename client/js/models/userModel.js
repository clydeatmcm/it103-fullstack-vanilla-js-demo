const UserModel = {
    async fetchUsers() {
        const res = await fetch("http://localhost:3002/users");
        return res.json();
    }
};

export default UserModel;
