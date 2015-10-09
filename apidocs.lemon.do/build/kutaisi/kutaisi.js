/**

 * @api {post} kutaisi/v1/GetListOfFlights Gets the list of all flights
 * @apiVersion 0.1.0
 * @apiName GetListOfFlights
 * @apiGroup Methods
 *
 * @apiDescription desc goes here
 * @apiParam (Request Parameters) {String} [Language] Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 * @apiParam (Request Parameters) {String} [City] 
 * @apiParam (Request Parameters) {Number} [FlightType] <code>Enum</code> Arrival, Departure 
 * @apiParam (Request Parameters) {String} [FromDate] Format: <code>yyyy-MM-dd 'T' hh:mm:ss</code>
 * @apiParam (Request Parameters) {String} [ToDate] Format: <code>yyyy-MM-dd 'T' hh:mm:ss</code>
 *
 * @apiParam (Pagination Parameters) {Number} Offset <code>Default 0</code>
 * @apiParam (Pagination Parameters) {Number} Limit <code>Default 20</code>
 *
 * @apiExample Example usage:
 * curl -i http://apidoc.lemon.do/kutaisi/v1/GetListOfFlights
 *
 * @apiSuccess (Response) {Number}   Id            
 * @apiSuccess (Response) {String}   FlightNumber
 * @apiSuccess (Response) {Number}   Status <code>Enum</code>
 * @apiSuccess (Response) {String}   City    
 * @apiSuccess (Response) {String}   Airport <code>Short code</code>    
 * @apiSuccess (Response) {Number}   FlightType <code>Enum</code> Arrival, Departure
 * @apiSuccess (Response) {String}   FlightStartTime Format yyyy-MM-dd 'T' hh:mm:ss, Arrival or Departure date, depends on FlightType
 * @apiSuccess (Response) {String}   RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code> 
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function GetListOfFlights() { return; }

/**

 * @api {post} kutaisi/v1/GetTransportPrice Gets the price of transport
 * @apiVersion 0.1.0
 * @apiName GetTransportPrice
 * @apiGroup Methods
 *
 * @apiDescription desc goes here
 * @apiParam (Request Parameters) {Number} TransportType <code>Enum</code> Bus, Taxi
 * @apiParam (Request Parameters) {Number} DirectionType <code>Enum</code> From Kutaisi, To Kutaisi
 * @apiParam (Request Parameters) {String} Direction From/To City to Kutaisi and vise versa
 * @apiParam (Request Parameters) {String} [ReturnDate] Format: <code>yyyy-MM-dd 'T' hh:mm:ss</code>
 * @apiParam (Request Parameters) {Number} PersonCount Number of person in transport. By default it is 1
 * @apiParam (Request Parameters) {String} [TravelDate] Format: <code>yyyy-MM-dd 'T' hh:mm:ss</code>
 *
 * @apiExample Example usage:
 * curl -i http://apidoc.lemon.do/kutaisi/v1/GetTransportPrice
 *
 * @apiSuccess (Response) { Decimal}  OriginalPrice Format: <code>Decimal (18,2)</code>        
 * @apiSuccess (Response) { Decimal}  DiscountPrice Format: <code>Decimal (18,2)</code>
 * @apiSuccess (Response) { String }   RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code> 
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function GetTransportPrice() { return; }

/**

 * @api {post} kutaisi/v1/GetListOfRestaurantsAndShops Gets the list of restaurants and shops
 * @apiVersion 0.1.0
 * @apiName GetListOfRestaurantsAndShops
 * @apiGroup Methods
 *
 * @apiDescription desc goes here
 * @apiParam (Request Parameters) {String} [Language] Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 * @apiParam (Request Parameters) {String} [LastSyncDate] Format: <code>yyyy-MM-dd 'T' hh:mm:ss</code>. <br /> If NULL Returns all rows : else : returns all rows after updated or created date
 *
 * @apiExample Example usage:
 * curl -i http://apidoc.lemon.do/kutaisi/v1/GetListOfRestaurantsAndShops
 *
 * @apiSuccess (Response) { String}  Pictrure <code>Image url</code>        
 * @apiSuccess (Response) { String}  PhoneNumber
 * @apiSuccess (Response) { String}  WorkingHours
 * @apiSuccess (Response) { String}  Description
 * @apiSuccess (Response) { String}   RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code> 
 *
 * @apiParam (Pagination Parameters) {Number} Offset <code>Default 0</code>
 * @apiParam (Pagination Parameters) {Number} Limit <code>Default 20</code>
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function GetListOfRestaurantsAndShops() { return; }

/**

 * @api {post} kutaisi/v1/GetListOfCities Gets the list of cities
 * @apiVersion 0.1.0
 * @apiName GetListOfCities
 * @apiGroup Methods
 *
 * @apiDescription desc goes here
 * @apiParam (Request Parameters) {String} [Language] Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 *
 * @apiExample Example usage:
 * curl -i http://apidoc.lemon.do/kutaisi/v1/GetListOfCities
 *
 * @apiSuccess (Response) { Object[]}  CitiesList    
 * @apiSuccess (Response) { String}   RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code> 
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function GetListOfCities() { return; }

/**

 * @api {post} kutaisi/v1/GetListOfFlightsByIds Gets the list of flights for given ids
 * @apiVersion 0.1.0
 * @apiName GetListOfFlightsByIds
 * @apiGroup Methods
 *
 * @apiDescription desc goes here
 * @apiParam (Request Parameters) {Number[]} Ids Array of integers
 *
 * @apiParam (Pagination Parameters) {Number} Offset <code>Default 0</code>
 * @apiParam (Pagination Parameters) {Number} Limit <code>Default 20</code>
 *
 * @apiExample Example usage:
 * curl -i http://apidoc.lemon.do/kutaisi/v1/GetListOfFlightsByIds
 *
 * @apiSuccess (Response) { Object[]}  FlightsList    
 * @apiSuccess (Response) { String}   RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code> 
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function GetListOfFlightsByIds() { return; }

/**

 * @api {post} kutaisi/v1/GetListOfInfo Gets the list of Info
 * @apiVersion 0.1.0
 * @apiName GetListOfInfo
 * @apiGroup Methods
 *
 * @apiDescription desc goes here
 * @apiParam (Request Parameters) {String} Language Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 * @apiParam (Request Parameters) {String} [LastSyncDate] Format: <code>yyyy-MM-dd 'T' hh:mm:ss</code>. <br /> If NULL Returns all rows : else : returns all rows after updated or created date
 *
 * @apiParam (Pagination Parameters) {Number} Offset <code>Default 0</code>
 * @apiParam (Pagination Parameters) {Number} Limit <code>Default 20</code>
 *
 * @apiExample Example usage:
 * curl -i http://apidoc.lemon.do/kutaisi/v1/GetListOfInfo
 *
 * @apiSuccess (Response) { Object[]}  InfoList    
 * @apiSuccess (Response) { String}   RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code> 
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function GetListOfInfo() { return; }

/**

 * @api {post} kutaisi/v1/GetAbout Gets the about info
 * @apiVersion 0.1.0
 * @apiName GetAbout
 * @apiGroup Methods
 *
 * @apiDescription desc goes here
 * @apiParam (Request Parameters) {String} Language Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 * @apiParam (Request Parameters) {String} [LastSyncDate] Format: <code>yyyy-MM-dd 'T' hh:mm:ss</code>. <br /> If NULL Returns all rows : else : returns all rows after updated or created date
 * @apiExample Example usage:
 * curl -i http://apidoc.lemon.do/kutaisi/v1/GetAbout
 *
 * @apiSuccess (Response) {String}  Title Title of the about page   
 * @apiSuccess (Response) {String}  Description Description of the about page   
 * @apiSuccess (Response) {String}  FBPageUrl will be used on feedback page
 * @apiSuccess (Response) {String}  ContactEmail will be used on feedback page
 * @apiSuccess (Response) {String}  RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code>
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function GetAbout() { return; }