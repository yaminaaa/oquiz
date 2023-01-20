const express = require('express');
const router = express.Router();

const mainRouter = require('./main');
const quizRouter = require('./quiz');
const tagRouter = require('./tag');
const loginRouter = require('./login');
const adminRouter = require('./admin');
const userConnectedMiddleware = require('../middlewares/userConnectedMiddleware');
const userIsAdminMiddleware = require('../middlewares/userIsAdminMiddleware');
const userMiddleware = require('../middlewares/userMiddleware');

router.use(userMiddleware);

router.use(mainRouter);
router.use(quizRouter);
router.use(tagRouter);
router.use(loginRouter);
router.use('/admin', userConnectedMiddleware, userIsAdminMiddleware, adminRouter);

module.exports = router;