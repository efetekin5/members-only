const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');

exports.newAdminGet = (req, res, next) => {
  res.render('adminForm', {
    title: 'Enter secret code to become an admin'
  });
};

exports.newAdminPost = [
  body('adminCode').notEmpty(),

  asyncHandler(async (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      res.render('adminForm', {
        title: 'Invalid Code',
      });
    } else {
      if (req.body.adminCode === 'admin') {
        const currentUser = await User.findOne({ _id: req.user.id });
        currentUser.admin = true;
        currentUser.membershipStatus = true;

        currentUser.save();
        res.redirect('/');
      } else {
        res.render('adminForm', {
          title: 'Invalid Code',
        });
      }
    }
  }),
];
