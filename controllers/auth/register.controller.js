const { response, request } = require("express");

const register = ( req = request, res = response ) => {
  const { name, password, email } = req.body;
  const data = {
    name,
    email,
    password
  };

  try {

    res.status( 201 ).json({
      ok: true,
      msg: 'Register Success',
      data
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
