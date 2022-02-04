const express = require('express');

const router = express.Router();

router.get('/', async (req, resp) => {
  return resp.status(200).json({ message: 'Funciona !!!' });
});

module.exports = router;
