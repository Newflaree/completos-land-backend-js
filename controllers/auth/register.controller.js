const { response, request } = require("express");
const bcrypt = require( 'bcryptjs' );
// Helpers
const { generateJWT } = require("../../helpers/jsonwebtoken");
// Models
const User =require( '../../models/user.model' );

/*
  PATH: /api/auth/register
  DOC: Function that creates new users and saves them in the database. This is done with the password already encrypted.
*/
const register = async ( req = request, res = response ) => {
  const { name, password, email } = req.body;

  try {
    // Create a new user
    const user = new User({ name, password, email });

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    // Save to DB
    await user.save();

    // Generate JWT
    const token = await generateJWT( user.id );

    res.status( 201 ).json({
      ok: true,
      user,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH.REGISTER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking Administrator.'
    });
  }
}

module.exports = register;
