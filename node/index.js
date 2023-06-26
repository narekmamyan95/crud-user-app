import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import sql from "mssql";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const configSql = {
  user: "narek",
  password: "7777777",
  server: "DESKTOP-LK0L9P3",
  database: "Aplication",
  trustServerCertificate: true,
};

sql.connect(configSql, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("SQL -- connected");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});


// Endpoints
app.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 5);
  return res.send({
    login: true,
    user: {
      id: Date.now(),
      userName,
      token: hashedPass,
    },
  });
});

app.post("/logout", (req, res) => {
  return res.send({ logout: true });
});

// Create User
app.post("/createUser", (req, res) => {
  const request = new sql.Request();
  const { Name, Surname, Number, Email } = req.body;
  const query =
    "INSERT INTO UserTable(Name, Surname, Number, Email) VALUES (@Name,@Surname, @Number, @Email)";

  request.input("Name", sql.VarChar, Name);
  request.input("Surname", sql.VarChar, Surname);
  request.input("Number", sql.Int, Number);
  request.input("Email", sql.VarChar, Email);
  request.query(query, (error, record) => {
    if (error) {
      console.log(error);
    }
    res.send(record);
  });
});

// Get User List
app.get("/getUsers", (req, res) => {
  const request = new sql.Request();
  const query = "SELECT * FROM UserTable";

  request.query(query, (error, record) => {
    if (error) {
      console.log(error);
    }
    return res.send(record.recordset);
  });
});

// Get One User
app.post("/getUser", (req, res) => {
  const request = new sql.Request();
  const { id } = req.body;
  const query = "SELECT * FROM UserTable WHERE id = @id";

  request.input("id", sql.Int, id);
  request.query(query, (error, record) => {
    if (error) {
      console.log(error);
    }
    return res.send(record.recordset[0]);
  });
});

// Update User
app.post("/updateUser", (req, res) => {
  const request = new sql.Request();
  const { Id, Name, Surname, Number, Email } = req.body;
  const query =
    "UPDATE UserTable SET Name = @Name, Surname = @Surname, Number = @Number, Email = @Email WHERE Id = @Id";

  request.input("Id", sql.Int, Id);
  request.input("Name", sql.VarChar, Name);
  request.input("Surname", sql.VarChar, Surname);
  request.input("Number", sql.Int, Number);
  request.input("Email", sql.VarChar, Email);
  request.query(query, (error, record) => {
    if (error) {
      console.log(error);
    }
    res.send(record);
  });
});

// Delete User
app.delete("/deleteUser/:id", (req, res) => {
  const request = new sql.Request();
  const {id} = req.params;
  const query = "DELETE FROM UserTable WHERE Id = @Id";

  request.input("Id", sql.Int, id);
  request.query(query, (error, record) => {
    if (error) {
      console.log(error);
    }
    return res.send(record.recordset);
  });
});
