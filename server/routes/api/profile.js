var express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/assets/images/avatar');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('You can upload only image files!'), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });

// ** import controllers
var profileController = require('../../controllers/profile.controller');

// ** import middleware
var passportMiddleware = require('../../middleware/passport.middleware');

var router = express.Router();

// ** Edit profile
/**
 * @swagger
 * paths:
 *  /api/profile:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      description: Profile edit endpoint
 *      tags:
 *        - Profile
 *      requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                avatar:
 *                  type: string
 *                  format: binary
 *      responses:
 *        '200':
 *          description: the value of token is a JWT created with new user information.
 *          content:
 *            application/json; charset=utf-8:
 *              schema:
 *                type: string
 *              examples:
 *                Example 1:
 *                  value:
 *                    token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzQ5Y2Y0NzBmMjQ5OTg5MjdhNWQxMTAiLCJpYXQiOjE2NjU3ODE1NzU2MTZ9.R7W338j1KmYSPtUFHUb6wsLGJjRFXc4Bhpr265JsUA4
 */
router.put('/', upload.single('avatar'), passportMiddleware.requireAuth, profileController.edit);

module.exports = router;
