const { response, request } = require("express");

/*
  PATH: /api/auth/login
  DOC: 
*/
const login = ( req = request, res = response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'Login Success'
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
