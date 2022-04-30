const User = require("../../models/user.model");

const emailValidator = async ( email = '' ) => {
  const emailExists = await User.findOne({ email });

  if ( emailExists ) {
    throw new Error( 'Ya existe un usuario con ese correo electrónico.' );
  }

  return true;
}

module.exports = emailValidator;
