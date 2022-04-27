const { Router } = require( 'express' );
// Controllers
const { login, register } = require('../controllers/auth');

/*
  PATH: /api/auth/
*/

const router = Router();

router.post( '/login', login );
router.post( '/register', register );

module.exports = router;
