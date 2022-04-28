const jwt = require( 'jsonwebtoken' );

const generateJWT = ( uid = '' ) => {
  return new Promise( ( resolve, reject ) => {
    const payload = { uid };

    jwt.sign( payload, process.env.SECRET_KEY, {
      expiresIn: '24h'
    }, ( err, token ) => {
      if ( err ) {
        console.log( `${ '[HELPER.GENERATE-JWT]'.red }: Error details - ${ err }` );
        reject( 'Token not be generated' );
      } else {
        resolve( token );
      }
    })
  });
}

module.exports = generateJWT;
