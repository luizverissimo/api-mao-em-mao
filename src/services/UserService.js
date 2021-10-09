const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = {
  async create(userRequest) {
    try {
      await User.findOne({ email: userRequest.email }).then((user) => {
        if (user) {
          errors.email = "Email alredy exists!";
          return res.status(400).json({ errors: "Usuário já cadastrado" });
        } else {
          const newUser = new User({
            name: userRequest.name,
            email: userRequest.email,
            avatar: userRequest.avatar,
            password: userRequest.password,
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, async (err, hash) => {
              if (err) throw err;

              newUser.password = hash;
              await newUser
                .save()
                .then((user) => res.json(user))
                .catch((err) => console.log(err));
            });
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};
