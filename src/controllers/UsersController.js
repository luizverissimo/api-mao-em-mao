const UserService = require("../services/UserService");

module.exports = {
  async create(req, res) {
    const { name, email, password, avatar } = req.body;
    if (req.email)
      return res.status(400).json({ error: "Email não declarado" });
    if (req.password)
      return res.status(400).json({ error: "Senha não declarada" });

    console.log(name, email, password, avatar);
    const user = {
      name,
      email,
      password,
      avatar,
    };

    await UserService.create(user);

    res.json({ message: "usuario cadastrado" });
  },
};
