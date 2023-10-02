const { mongoose } = require("../config/db");


let userschema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['donar', 'organisation', 'hospital', 'admin'],
    default: 'admin'
  },

  name: {
    type: String,
    require: function () {
      if (this.role !== 'admin' || this.role !== 'doner') {
        return true;
      }
      return false;
    }
  },
  hospitalName: {
    type: String,
    require: function () {
      if (this.role === "hospital") {
        return true;
      }
      return false;
    }
  },
  organisationName: {
    type: String,
    require: function () {
      if (this.role ==="organisation") {
        return true;
      }
      return false;
    }
  },
  website: {
    type: String,
    require: function () {
      if (this.role == "organisation"||this.usertype=="hospital") {
        return true;
      }
      return false;
    }
  },
  address: {
    type: String,
    require: function () {
      if (this.usertype == "organisation"||this.usertype=="hospital") {
        return true;
      }
      return false;
    }
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },


}, {
  timestamps: true
});


const user = mongoose.model('User', userschema)


exports.user = user;
