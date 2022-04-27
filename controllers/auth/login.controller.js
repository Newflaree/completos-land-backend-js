const { response, request } = require("express");

const login = ( req = request, res = response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'Login Success'
    });

  } catch ( err ) {
    console.log( `${ '[LOGIN.CONTROLLER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking Administrator.'
    });

  }
}

module.exports = login;
