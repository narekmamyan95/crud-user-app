const config = {
  baseURI: "http://localhost:5000",
  endpoints: {
    auth: {
      signIn: "login",
      signOut: "logout",
    },
    users: {
      getUsers: "getUsers",
      getUser: "getUser",
      deleteUser: "deleteUser",
      updateUser: "updateUser",
      createUser: "createUser",
    },
  },
};

export default config;
