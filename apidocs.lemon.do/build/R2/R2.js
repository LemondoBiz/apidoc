/*
/!**

 * @api {Get} v1/GetListOfNews Gets the list of all news
 * @apiVersion 0.1.0
 * @apiName GetListOfNews
 * @apiGroup Methods
 *
 * @apiDescription desc goes here
 * @apiParam (Request Parameters) {string} Language Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 *
 * @apiParam (Pagination Parameters) {int} Offset <code>Default 0</code>
 * @apiParam (Pagination Parameters) {int} Limit <code>Default 20</code>
 *
 * @apiExample Example usage:
 * curl -i http://rustavi2.com/api/v1/GetListOfNews
 *
 * @apiSuccess (Response) {int}      Id ჩანაწერის იდენტიფიკატორი
 * @apiSuccess (Response) {string}   YoutubeId youtube-ის კლიპის ID
 * @apiSuccess (Response) {string}   VideoId ვიდეოს კოდი რუსთავი 2-ის VOD სერვერიდან
 * @apiSuccess (Response) {string}   Title სიახლის დასახელება
 * @apiSuccess (Response) {int[]}    ArrayOfCategoryIds ID კატეგორიების ჩამონათვალი, რომლებსაც მიეკუთვნება მიმდინარე სიახლე
 * @apiSuccess (Response) {int[]}    ArrayOfRelationNewsIds იმ სიახლეების ID-ების ჩამონათვალი, რომლებიც დაკავშირებულია მიმდინარე სიახლესთან
 * @apiSuccess (Response) {int[]}    ArrayOfThemeIds იმ თემების ID-ების ჩამონათვალი, რომლებიც დაკავშირებულია მიმდინარე სიახლესთან
 * @apiSuccess (Response) {int[]}    ArrayOfPhotoIds სურათების ID-ების (ფაილების სახელები გაფართოების გარეშე <code>int</code>) ჩამონათვალი, რომლებიცდაკავშირებულია მიმდინარე სიახლესთან
 * @apiSuccess (Response) {string}   NewsDate Format yyyy-MM-dd 'T' hh:mm:ss, ახალი ამბავის (სიახლის) თარიღი
 * @apiSuccess (Response) {bool}     IsTopNews არის თუ არა მთავარი სიახლე
 * @apiSuccess (Response) {bool}     IsBreakingNews არის თუ არა მნიშვნელოვანი სიახლე
 * @apiSuccess (Response) {bool}     IsFBCommentsEnabled არის თუ არა კომენტარები ჩართული მოცემული სიახლისთვის
 * @apiSuccess (Response) {bool}     IsNewsInMainSlider არის თუ არა სიახლე მთავარ ბანერში/სლაიდერში
 * @apiSuccess (Response) {string}   Brief სიახლის მოკლე ტექსტი <code>HTML</code>
 * @apiSuccess (Response) {string}   DetailText სიახლის დეტალური ტექსტი <code>HTML</code>
 * @apiSuccess (Response) {int}      SliderOrderBy სლაიდერში სიახლეების სორტირების თანმიმდევრობა <code>int</code>
 * @apiSuccess (Response) {int}      NumberOfFacebookVisitors ფეისბუკში ნახვების რაოდენობა
 * @apiSuccess (Response) {int}      NumberOfTwitterVisitors ტვიტერში ნახვების რაოდენობა
 * @apiSuccess (Response) {int}      NumberOfGooglePlusVisitors გუგლ პლუსში ნახვების რაოდენობა
 * @apiSuccess (Response) {int}      NumberOfTotalVisitors ნახვების საერთო რაოდენობა
 * @apiSuccess (Response) {int}      NumberOfCommentsFromFB ფეისბუკში კომენტარების რაოდენობა
 * @apiSuccess (Response) {int}      NumberOfDirectVisitors ჩვენს გვერდზე ნახვების რაოდენობა
 *
 * @apiSuccess (Response) {string}   RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code>
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 *!/
function GetListOfNews() {
    return;
}

/!**

 * @api {Get} v1/GetListOfShows Gets the list of all shows
 * @apiVersion 0.1.0
 * @apiName GetListOfShows
 * @apiGroup Methods
 *
 * @apiDescription desc goes here
 * @apiParam (Request Parameters) {string} Language Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 *
 * @apiParam (Pagination Parameters) {int} Offset <code>Default 0</code>
 * @apiParam (Pagination Parameters) {int} Limit <code>Default 20</code>
 *
 * @apiExample Example usage:
 * curl -i http://rustavi2.com/api/v1/GetListOfShows
 *
 * @apiSuccess (Response) {int}      Id ჩანაწერის იდენტიფიკატორი
 * @apiSuccess (Response) {string}   Title გადაცემის დასახელება
 * @apiSuccess (Response) {string}   Brief გადაცემის მოკლე ტექსტი <code>HTML</code>
 * @apiSuccess (Response) {string}   DetailText გადაცემის დეტალური ტექსტი <code>HTML</code>
 * @apiSuccess (Response) {string}   MainShowTitle გადაცემის მთავარი შოუს სათაური
 * @apiSuccess (Response) {string}   MainShowDate გადაცემის მთავარი შოუს დრო
 * @apiSuccess (Response) {string}   VideoFirstBlockTitle გადაცემის ვიდეოს პირველი ბლოკის სათაური
 * @apiSuccess (Response) {string}   VideoSecondBlockTitle გადაცემის ვიდეოს მეორე ბლოკის სათაური
 *
 * @apiSuccess (Response) {string}   RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code>
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 *!/
function GetListOfShows() {
    return;
}

/!**

 * @api {Get} v1/GetListOfShowsVideos Gets the list of all shows
 * @apiVersion 0.1.0
 * @apiName GetListOfShowsVideos
 * @apiGroup Methods
 *
 * @apiDescription desc goes here
 * @apiParam (Request Parameters) {string} Language Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 *
 * @apiParam (Pagination Parameters) {int} Offset <code>Default 0</code>
 * @apiParam (Pagination Parameters) {int} Limit <code>Default 20</code>
 *
 * @apiExample Example usage:
 * curl -i http://rustavi2.com/api/v1/GetListOfShowsVideos
 *
 * @apiSuccess (Response) {int}      Id ჩანაწერის იდენტიფიკატორი
 * @apiSuccess (Response) {string}   Title ვიდეოს სათაური
 * @apiSuccess (Response) {string}   Video ვიდეოს კოდი რუსთავი 2-ის VOD სერვერიდან
 * @apiSuccess (Response) {string}   TopVideo ტოპ-ვიდეო * რა ტიპის რესპონსია გასარკვევია *
 * @apiSuccess (Response) {string}   InfoType ვიდეოს ტიპი, კუთვნილება გადაცემის ერთერთ ბლოკთან
 * @apiSuccess (Response) {string}   YoutubeId youtube-ის კლიპის ID
 * @apiSuccess (Response) {string}   DetailText ვიდეოს ტექსტი
 * @apiSuccess (Response) {int}      NumberOfFacebookVisitors ფეისბუკში ნახვების რაოდენობა
 * @apiSuccess (Response) {int}      NumberOfTwitterVisitors ტვიტერში ნახვების რაოდენობა
 * @apiSuccess (Response) {int}      NumberOfGooglePlusVisitors გუგლ პლუსში ნახვების რაოდენობა
 * @apiSuccess (Response) {int}      NumberOfTotalVisitors ნახვების საერთო რაოდენობა
 * @apiSuccess (Response) {int}      NumberOfCommentsFromFB ფეისბუკში კომენტარების რაოდენობა
 * @apiSuccess (Response) {int}      NumberOfDirectVisitors ჩვენს გვერდზე ნახვების რაოდენობა
 * @apiSuccess (Response) {string}   RESPONSE_CODE <code>200</code> <code>400</code> <code>404</code> <code>500</code>
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 *!/
function GetListOfShowsVideos() {
    return;
}

*/



/**

 * @api {get} v1/GetNewsByType GetNewsByType
 * @apiVersion 0.1.0
 * @apiName GetNewsByType
 * @apiGroup Methods
 *
 * @apiDescription Gets the news by type
 * @apiParam (Request Parameters) {string} Language Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 * @apiParam (Request Parameters) {int} type if 1 return Breaking news elseif 2 return top news
 *
 * @apiExample Example usage:
 * curl -i http://rustavi2.com/api/v1/GetNewsByType
 *
 * @apiSuccess (Response) {int}      Id ჩანაწერის იდენტიფიკატორი
 * @apiSuccess (Response) {string}   Title სიახლის დასახელება
 * @apiSuccess (Response) {string}   NewsDate Format 18:45 - 25 July, ახალი ამბავის (სიახლის) თარიღი
 * @apiSuccess (Response) {string}   Brief სიახლის მოკლე ტექსტი
 * @apiSuccess (Response) {string}   ImageURL null თუ type = 1
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "data": "Data will be here"
 *     }
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
function GetNewsByType() {
    return;
}



/**

 * @api {Get} v1/GetListOfPDNews GetListOfPDNews
 * @apiVersion 0.1.0
 * @apiName GetListOfPDNews
 * @apiGroup Methods
 *
 * @apiDescription Gets the list of 12 popular and 12 discussed news for next 3 days.
 * @apiParam (Request Parameters) {string} Language Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 *
 * @apiExample Example usage:
 * curl -i http://rustavi2.com/api/v1/GetListOfPDNews
 *
 * @apiSuccess (Response) {int}      Id ჩანაწერის იდენტიფიკატორი
 * @apiSuccess (Response) {string}   Title სიახლის დასახელება
 * @apiSuccess (Response) {string}   NewsDate Format 18:45 - 25 July, ახალი ამბავის (სიახლის) თარიღი
 * @apiSuccess (Response) {string}   ImageURL
 * @apiSuccess (Response) {string}   Type case 1 then Popular, case 2 then Discussed
 *
 * @apiSuccessExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "data": "Data will be here"
 *     }
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
function GetListOfPDNews() {
    return;
}


/**

 * @api {get} v1/GetListOfActiveCategories GetListOfActiveCategories
 * @apiVersion 0.1.0
 * @apiName GetListOfActiveCategories
 * @apiGroup Methods
 *
 * @apiDescription Gets the list of active categories between the Start and End Date interval
 * @apiParam (Request Parameters) {string} Language Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 * @apiParam (Request Parameters) {string} StartDate Format: <code>yyyy-MM-dd</code>
 * @apiParam (Request Parameters) {string} EndDate Format: <code>yyyy-MM-dd</code>
 *
 * @apiExample Example usage:
 * curl -i http://rustavi2.com/api/v1/GetListOfActiveCategories
 *
 * @apiSuccess (Response) {int}      Id ჩანაწერის იდენტიფიკატორი
 * @apiSuccess (Response) {string}   Title კატეგორიის დასახელება
 * @apiSuccess (Response) {string}   ImageURL
 * @apiSuccess (Response) {int}      Number of news per category
 *
 * @apiSuccessExample Response (example):
 *     HTTP 200 SUCCESS
 *
 *     {
 *         "data": [
 *           {
 *             "Id": "1",
 *             "Title": "პოლიტიკა",
 *             "ImageURL": "http://rustavi2.com/news_photos/28147_video.jpg",
 *             "Number": "13225"
 *           },
 *           {
 *             "Id": "2",
 *             "Title": "ეკონომიკა",
 *             "ImageURL": "http://rustavi2.com/news_photos/28148_video.jpg",
 *             "Number": "1492"
 *           },
 *           {
 *             "Id": "5",
 *             "Title": "საზოგადოება",
 *             "ImageURL": "http://rustavi2.com/news_photos/28149_video.jpg",
 *             "Number": "7721"
 *           },
 *           {
 *             "Id": "4",
 *             "Title": "კრიმინალი",
 *             "ImageURL": "http://rustavi2.com/news_photos/28150_video.jpg",
 *             "Number": "1585"
 *           },
 *           {
 *             "Id": "16",
 *             "Title": "რეგიონები",
 *             "ImageURL": "http://rustavi2.com/news_photos/28151_video.jpg",
 *             "Number": "936"
 *           },
 *           {
 *             "Id": "6",
 *             "Title": "უცხოეთი",
 *             "ImageURL": "http://rustavi2.com/news_photos/28152_video.jpg",
 *             "Number": "2666"
 *           }
 *         ],
 *        "RESPONSE_CODE" : "200"
 *   }
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
function GetListOfActiveCategories() {
    return;
}


/**

 * @api {get} v1/GetListOfNewsByCategoryId GetListOfNewsByCategoryId
 * @apiVersion 0.1.0
 * @apiName GetListOfNewsByCategoryId
 * @apiGroup Methods
 *
 * @apiDescription Gets the list of active news based on categoryId parameter and between the Start and End Date interval
 * @apiParam (Request Parameters) {string} Language Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code>
 * @apiParam (Request Parameters) {String} StartDate Format: <code>yyyy-MM-dd</code>
 * @apiParam (Request Parameters) {String} EndDate Format: <code>yyyy-MM-dd</code>
 * @apiParam (Request Parameters) {int}    CategoryId The Id of chosen category
 *
 * @apiParam (Pagination Parameters) {int} Offset <code>Default 0</code>
 * @apiParam (Pagination Parameters) {int} Limit <code>Default 20</code>
 *
 * @apiExample Example usage:
 * curl -i http://rustavi2.com/api/v1/GetListOfNewsByCategoryId
 *
 * @apiSuccess (Response) {int}      Id ჩანაწერის იდენტიფიკატორი
 * @apiSuccess (Response) {string}   Title სიახლის დასახელება
 * @apiSuccess (Response) {string}   ImageURL
 * @apiSuccess (Response) {string}   NewsDate Format 18:45 - 25 July, ახალი ამბავის (სიახლის) თარიღი
 *
 * @apiSuccessExample Response (example):
 *     HTTP 200 SUCCESS
 *     {
 *        "data": [
 *          {
 *            "Id": "28451",
 *            "Title": "საგარეო საქმეთა მინისტრი ბელგიელ კოლეგას შეხვდა",
 *            "ImageURL": "http://rustavi2.com/news_photos/28451_video.jpg",
 *            "NewsDate": "2015-10-09 09:09:00"
 *          },
 *          {
 *            "Id": "28438",
 *            "Title": "პოლიტიკური მოტივით გამოყენებული აღკვეთის ღონისძიება - \"საერთაშორისო გამჭვირვალობა\" ყოფილი მაღალჩინოსნების საქმეებზე",
 *            "ImageURL": "http://rustavi2.com/news_photos/28438_video.jpg",
 *            "NewsDate": "2015-10-09 09:03:00"
 *          },
 *          {
 *            "Id": "28448",
 *            "Title": "\"განაჩენი პროკურატურას არ გამოაქვს, გამოაქვს სასამართლოს\" - ეკა ბესელია \"გამჭვირვალობის\" ანგარიშს პასუხობს",
 *            "ImageURL": "http://rustavi2.com/news_photos/28448_video.jpg",
 *            "NewsDate": "2015-10-09 08:49:00"
 *          },
 *          {
 *            "Id": "28447",
 *            "Title": "აგვისტოს ომზე ჰააგას სასამართლოს გადაწყვეტილებას მიხეილ სააკაშვილი ეხმაურება",
 *            "ImageURL": "http://rustavi2.com/news_photos/28447_video.jpg",
 *            "NewsDate": "2015-10-09 08:36:00"
 *          },
 *          {
 *            "Id": "28444",
 *            "Title": "იტალიის პარლამენტი სამხრეთ ოსეთის დამოუკიდებლობის აღიარების საკითხს განიხილავს - ბიბილოვი",
 *            "ImageURL": "http://rustavi2.com/news_photos/28444_video.jpg",
 *            "NewsDate": "2015-10-09 08:19:00"
 *          },
 *          {
 *            "Id": "28443",
 *            "Title": "2008 წლის მოვლენებით ჰააგის სასამართლოს დაინტერესებას დეპუტატები ეხმაურებიან",
 *            "ImageURL": "http://rustavi2.com/news_photos/28443_video.jpg",
 *            "NewsDate": "2015-10-09 08:12:00"
 *          },
 *          {
 *            "Id": "28440",
 *            "Title": "პროგრესი, რომელსაც საქართველო აჩვენებს ნატოს, სამიტის გადაწყვეტილებებშიც უნდა აისახოს - თინა ხიდაშელი",
 *            "ImageURL": "http://rustavi2.com/news_photos/28440_video.jpg",
 *            "NewsDate": "2015-10-09 08:02:00"
 *          },
 *          {
 *            "Id": "28441",
 *            "Title": "\"კრიზისს ბატონი დავითი ნარმანია არ დაუშვებს\" - ავთანდილ სუდაძე გადადგომის მიზეზებს განმარატვს",
 *            "ImageURL": "http://rustavi2.com/news_photos/28441_video.jpg",
 *            "NewsDate": "2015-10-09 08:01:00"
 *          },
 *          {
 *            "Id": "28439",
 *            "Title": "მთავრობის საქმიანობის 6 თვის ანგარიშის განხილვა კომიტეტებში დღეს გაგრძელდება",
 *            "ImageURL": "http://rustavi2.com/news_photos/28439_video.jpg",
 *            "NewsDate": "2015-10-09 07:54:00"
 *          },
 *          {
 *            "Id": "28436",
 *            "Title": "\"რუსთავი 2-ის თანამშრომლები მინდა მშვიდად იყოთ, რუსთავი 2-ის დახურვაზე საქმე არ მიდის და არც წავა\" - ნუკრი ქანთარია",
 *            "ImageURL": "http://rustavi2.com/news_photos/28436_cover_b.jpg",
 *            "NewsDate": "2015-10-09 07:43:00"
 *          }
 *        ],
 *        "RESPONSE_CODE": "200",
 *        "CACHE_DATE": "2015-10-09 10:51:51"
 *   }
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
function GetListOfNewsByCategoryId() {
    return;
}
