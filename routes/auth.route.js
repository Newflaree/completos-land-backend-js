const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const { login, register } = require('../controllers/auth');
// Helpers
const { emailValidator } = require('../helpers/db-validators');
// Middlewares
const { validateFields } = require('../middlewares');

/*
  PATH: /api/auth/
*/
const router = Router();

router.post( '/login', [], login );

router.post( '/register',[
  check( 'name', 'The name is mandatory' ).not().isEmpty(),
  check( 'password', 'Password must be longer than 6 characters' ).isLength({ min: 6 }),
  check( 'email', 'Email is mandatory' ).isEmail(),
  check( 'email' ).custom( emailValidator ),
  validateFields
], register );

module.exports = router;
