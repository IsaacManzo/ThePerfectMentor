const User = require("../models/Users");

class AdminService {
  static async deleteUsers(id) {
    try {
      User.deleteOne({ _id: id });

      const user = "El usuario se borro correctamente";

      return { error: false, data: user };
    } catch (error) {
      return { error: false, data: error.message };
    }
  }
}

module.exports = AdminService;