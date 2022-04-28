const mongoose = require( 'mongoose' );

// Connect to MongoDB
const dbConnection = async () => {
  try {
    await mongoose.connect( process.env.MONGO_CNN || '' );

  } catch ( err ) {
    console.log( `${ '[CONFIG.DATABASE]'.red }: Error details -  ${ err }` );
    throw new Error( 'Could not connect to database' );
  }
}

module.exports = dbConnection;
