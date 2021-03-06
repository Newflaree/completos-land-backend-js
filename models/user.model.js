const { Schema, model } = require( 'mongoose' );

const UserSchema = new Schema({
  name: {
    type: String,
    required: [ true, 'The name is mandatory' ]
  },
  email: {
    type: String,
    required: [ true, 'The email is mandatory' ],
    unique: true
  },
  password: {
    type: String,
    required: [ true, 'The password is mandatory' ]
  },
  img: {
    type: String
  },
  role: {
    type: String,
    required: true,
    default: 'USER_ROLE',
    enum: [ 'ADMIN_ROLE', 'USER_ROLE' ]
  },
  status: {
    type: Boolean,
    default: true
  }
});

UserSchema.methods.toJSON = function() {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
}

module.exports = model( 'User', UserSchema );
