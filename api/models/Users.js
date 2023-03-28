const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  areaCode: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
    default: "https://www.educapeques.com/wp-content/uploads/2015/11/009DDF63-8267-484C-B115-F1AA51450099-1024x604.jpg"
  },
  salt: {
    type: String,
  }
});

UserSchema.pre("save", async function (next) {
  if (this.password) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});

UserSchema.methods.validatePassword = function(password) {
  return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password);
};

UserSchema.plugin(findOrCreate);

module.exports = model("User", UserSchema);
