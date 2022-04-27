const { response, request } = require("express");

const register = ( req = request, res = response ) => {
  try {

    res.status( 201 ).json({
      ok: true,
      msg: 'Register Success'
    });

  } catch ( err ) {
    console.log( `${ '[REGISTER.CONTROLLER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking Administrator.'
    });

  }
}

module.exports = register;
