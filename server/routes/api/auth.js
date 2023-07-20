var express = require('express');

// ** import controllers
var authController = require('../../controllers/auth.controller');

// ** import middleware
var passportMiddleware = require('../../middleware/passport.middleware');

var router = express.Router();

// ** Login User
/**
 * @swagger
 * paths:
 *  /api/auth/login:
 *    post:
 *      description: Login endpoint
 *      tags:
 *        - Auth
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                password:
 *                  type: string
 *                walletAddress:
 *                  type: string
 *            examples:
 *              'example 1':
 *                value: |-
 *                  {
 *                      "walletAddress": "0x69CF065930a686da0F32D14f84DeAf72ba3EeB52",
 *                      "password": "12345"
 *                  }
 *      responses:
 *        '200':
 *          description: The value of token is a JWT.
 *          content:
 *            application/json; charset=utf-8:
 *              schema:
 *                type: string
 *              examples:
 *                Example 1:
 *                  value:
 *                    token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzQ5OTViNzk2MjBiNWQyMjc1NzgwZmQiLCJpYXQiOjE2NjU3NzgwMjU1Mzh9.LJCifpmhsQxy0SdRMTZWHmR5bY5lXX9fLv_zlxy4qf4
 *        '401':
 *          description: Authorization information is missing.
 *        '400':
 *          description: Bad request. walletAddress & password field must be exist.
 */
router.post('/login', passportMiddleware.requireSignIn, authController.signin);

// ** Register User
/**
 * @swagger
 * paths:
 *  /api/auth/register:
 *    post:
 *      description: register endpoint
 *      tags:
 *        - Auth
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                password:
 *                  type: string
 *                walletAddress:
 *                  type: string
 *            examples:
 *              'example 1':
 *                value: |-
 *                  {
 *                      "walletAddress": "0x36D7C80FCD3dcDCfBd0Ef5934E036830d9152a39"
 *                  }
 *      responses:
 *        '200':
 *          description: the value of token is a JWT.
 *          content:
 *            application/json; charset=utf-8:
 *              schema:
 *                type: string
 *              examples:
 *                Example 1:
 *                  value:
 *                    token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzQ5Y2Y0NzBmMjQ5OTg5MjdhNWQxMTAiLCJpYXQiOjE2NjU3ODE1NzU2MTZ9.R7W338j1KmYSPtUFHUb6wsLGJjRFXc4Bhpr265JsUA4
 *        '422':
 *          description: Authorization information is missing or invalid.
 *          content:
 *            application/json; charset=utf-8:
 *              schema:
 *                type: string
 *              examples:
 *                Example 1:
 *                  value:
 *                    error: The wallet address is already in use...
 *                Example 2:
 *                  value:
 *                    error: walletAddress must be provided
 *        '400':
 *          description: Bad request. walletAddress & password field must be exist.
 */
router.post('/register', authController.signup);

module.exports = router;
