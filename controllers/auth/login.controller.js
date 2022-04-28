const bcrypt = require("bcryptjs");
const { response, request } = require("express");
const User = require( '../../models/user.model' );

/*
  PATH: /api/auth/login
  DOC: 
*/
const login = async ( req = request, res = response ) => {
  const { email, password } = req.body;

  try {
    // Check if email exists
    const user = await User.findOne({ email });
    if ( !user ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    // Check Password
    const validPassword = bcrypt.compareSync( password, user.password );
    if ( !validPassword ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    //TODO: Generate JWT

    res.status( 200 ).json({
      ok: true,
      user,
      //token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH.LOGIN]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking Administrator.'
    });
  }
}

module.exports = login;
