/**

 * @api {get} v1/auth Authorization
 * @apiVersion 0.1.0
 * @apiName auth
 * @apiGroup Methods
 * @apiDescription Description goes here
 * @apiParam (Request Parameters) {string} username
 * @apiParam (Request Parameters) {string} password
 *
 * @apiExample Example usage:
 * curl -i http://92.241.68.5:8080/api/v1/auth
 *
 * @apiSuccess (Response) {int}      id
 * @apiSuccess (Response) {string}   firstName
 * @apiSuccess (Response) {string}   lastName
 * @apiSuccess (Response) {string}   email
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "data": {
 *             "id": "24",
 *             "firstName": "George",
 *             "lastName": "Dzotsenidze",
 *             "email": "george@lemondo.com"
 *           },
 *        "RESPONSE_CODE" : "200"
 *    }
 *
 * @apiError (Response code) {string} RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code>
 *
 * @apiErrorExample Response (example):
 *     HTTP ERROR 400, 404, 500
 *     {
 *       "error": "Bad request",
 *       "RESPONSE_CODE" : "400"
 *     }
 *
 */
function auth() {
    return;
}

/**

 * @api {get} v1/getBalanceByUserId getBalanceByUserId
 * @apiVersion 0.1.0
 * @apiName getBalanceByUserId
 * @apiGroup Methods
 * @apiDescription Description goes here
 * @apiParam (Request Parameters) {int} id
 *
 * @apiExample Example usage:
 * curl -i http://92.241.68.5:8080/api/v1/getBalanceByUserId
 *
 * @apiSuccess (Response) {decimal(18.2)}   GEL
 * @apiSuccess (Response) {decimal(18.2)}   USD
 * @apiSuccess (Response) {decimal(18.2)}   EUR
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "data": {
 *             "GEO": "0.00",
 *             "USD": "0.00",
 *             "EUR": "0.00"
 *           },
 *        "RESPONSE_CODE" : "200"
 *    }
 *
 * @apiError (Response code) {string} RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code>
 *
 * @apiErrorExample Response (example):
 *     HTTP ERROR 400, 404, 500
 *     {
 *       "error": "Bad request",
 *       "RESPONSE_CODE" : "400"
 *     }
 *
 */
function getBalanceByUserId() {
    return;
}


/**

 * @api {get} v1/getRates getRates
 * @apiVersion 0.1.0
 * @apiName getRates
 * @apiGroup Methods
 * @apiDescription Gets the list of countries
 *
 * @apiExample Example usage:
 * curl -i http://92.241.68.5:8080/api/v1/getRates
 *
 * @apiSuccess (Response) {string}   name
 * @apiSuccess (Response) {mobile}   mobile
 * @apiSuccess (Response) {phone}   phone
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "data": {
 *             "Countries": [
 *                {
 *                 "name": "USA",
 *                 "mobile": "0.00",
 *                 "phone": "0.00"
 *               },
 *               {
 *                 "name": "United Kingdom",
 *                 "mobile": "0.00",
 *                 "phone": "0.00"
 *               }
 *             ]
 *           },
 *        "RESPONSE_CODE" : "200"
 *    }
 *
 * @apiError (Response code) {string} RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code>
 *
 * @apiErrorExample Response (example):
 *     HTTP ERROR 400, 404, 500
 *     {
 *       "error": "Bad request",
 *       "RESPONSE_CODE" : "400"
 *     }
 *
 */
function getRates() {
    return;
}
