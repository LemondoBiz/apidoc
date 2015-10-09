define({ "api": [  {    "type": "get",    "url": "v1/GetListOfActiveCategories",    "title": "GetListOfActiveCategories",    "version": "0.1.0",    "name": "GetListOfActiveCategories",    "group": "Methods",    "description": "<p>Gets the list of active categories between the Start and End Date interval</p> ",    "parameter": {      "fields": {        "Request Parameters": [          {            "group": "Request Parameters",            "type": "<p>string</p> ",            "optional": false,            "field": "Language",            "description": "<p>Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code></p> "          },          {            "group": "Request Parameters",            "type": "<p>string</p> ",            "optional": false,            "field": "StartDate",            "description": "<p>Format: <code>yyyy-MM-dd</code></p> "          },          {            "group": "Request Parameters",            "type": "<p>string</p> ",            "optional": false,            "field": "EndDate",            "description": "<p>Format: <code>yyyy-MM-dd</code></p> "          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://rustavi2.com/api/v1/GetListOfActiveCategories",        "type": "json"      }    ],    "success": {      "fields": {        "Response": [          {            "group": "Response",            "type": "<p>int</p> ",            "optional": false,            "field": "Id",            "description": "<p>ჩანაწერის იდენტიფიკატორი</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "Title",            "description": "<p>კატეგორიის დასახელება</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "ImageURL",            "description": ""          },          {            "group": "Response",            "type": "<p>int</p> ",            "optional": false,            "field": "Number",            "description": "<p>of news per category</p> "          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "  HTTP 200 SUCCESS\n\n  {\n      \"data\": [\n        {\n          \"Id\": \"1\",\n          \"Title\": \"პოლიტიკა\",\n          \"ImageURL\": \"http://rustavi2.com/news_photos/28147_video.jpg\",\n          \"Number\": \"13225\"\n        },\n        {\n          \"Id\": \"2\",\n          \"Title\": \"ეკონომიკა\",\n          \"ImageURL\": \"http://rustavi2.com/news_photos/28148_video.jpg\",\n          \"Number\": \"1492\"\n        },\n        {\n          \"Id\": \"5\",\n          \"Title\": \"საზოგადოება\",\n          \"ImageURL\": \"http://rustavi2.com/news_photos/28149_video.jpg\",\n          \"Number\": \"7721\"\n        },\n        {\n          \"Id\": \"4\",\n          \"Title\": \"კრიმინალი\",\n          \"ImageURL\": \"http://rustavi2.com/news_photos/28150_video.jpg\",\n          \"Number\": \"1585\"\n        },\n        {\n          \"Id\": \"16\",\n          \"Title\": \"რეგიონები\",\n          \"ImageURL\": \"http://rustavi2.com/news_photos/28151_video.jpg\",\n          \"Number\": \"936\"\n        },\n        {\n          \"Id\": \"6\",\n          \"Title\": \"უცხოეთი\",\n          \"ImageURL\": \"http://rustavi2.com/news_photos/28152_video.jpg\",\n          \"Number\": \"2666\"\n        }\n      ],\n     \"RESPONSE_CODE\" : \"200\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Response code": [          {            "group": "Response code",            "type": "<p>string</p> ",            "optional": false,            "field": "RESPONSE_CODE",            "description": "<p><code>200</code> <code>400</code> <code>404</code> <code>500</code></p> "          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP ERROR 400, 404, 500\n{\n  \"error\": \"Bad request\",\n  \"RESPONSE_CODE\" : \"400\"\n}",          "type": "json"        }      ]    },    "filename": "apidocs.lemon.do/build/R2/R2.js",    "groupTitle": "Methods",    "sampleRequest": [      {        "url": "http://rustavi2.com/api/v1/GetListOfActiveCategories"      }    ]  },  {    "type": "get",    "url": "v1/GetListOfNewsByCategoryId",    "title": "GetListOfNewsByCategoryId",    "version": "0.1.0",    "name": "GetListOfNewsByCategoryId",    "group": "Methods",    "description": "<p>Gets the list of active news based on categoryId parameter and between the Start and End Date interval</p> ",    "parameter": {      "fields": {        "Request Parameters": [          {            "group": "Request Parameters",            "type": "<p>string</p> ",            "optional": false,            "field": "Language",            "description": "<p>Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code></p> "          },          {            "group": "Request Parameters",            "type": "<p>String</p> ",            "optional": false,            "field": "StartDate",            "description": "<p>Format: <code>yyyy-MM-dd</code></p> "          },          {            "group": "Request Parameters",            "type": "<p>String</p> ",            "optional": false,            "field": "EndDate",            "description": "<p>Format: <code>yyyy-MM-dd</code></p> "          },          {            "group": "Request Parameters",            "type": "<p>int</p> ",            "optional": false,            "field": "CategoryId",            "description": "<p>The Id of chosen category</p> "          }        ],        "Pagination Parameters": [          {            "group": "Pagination Parameters",            "type": "<p>int</p> ",            "optional": false,            "field": "Offset",            "description": "<p><code>Default 0</code></p> "          },          {            "group": "Pagination Parameters",            "type": "<p>int</p> ",            "optional": false,            "field": "Limit",            "description": "<p><code>Default 20</code></p> "          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://rustavi2.com/api/v1/GetListOfNewsByCategoryId",        "type": "json"      }    ],    "success": {      "fields": {        "Response": [          {            "group": "Response",            "type": "<p>int</p> ",            "optional": false,            "field": "Id",            "description": "<p>ჩანაწერის იდენტიფიკატორი</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "Title",            "description": "<p>სიახლის დასახელება</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "ImageURL",            "description": ""          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "NewsDate",            "description": "<p>Format 18:45 - 25 July, ახალი ამბავის (სიახლის) თარიღი</p> "          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "  HTTP 200 SUCCESS\n  {\n     \"data\": [\n       {\n         \"Id\": \"28451\",\n         \"Title\": \"საგარეო საქმეთა მინისტრი ბელგიელ კოლეგას შეხვდა\",\n         \"ImageURL\": \"http://rustavi2.com/news_photos/28451_video.jpg\",\n         \"NewsDate\": \"2015-10-09 09:09:00\"\n       },\n       {\n         \"Id\": \"28438\",\n         \"Title\": \"პოლიტიკური მოტივით გამოყენებული აღკვეთის ღონისძიება - \\\"საერთაშორისო გამჭვირვალობა\\\" ყოფილი მაღალჩინოსნების საქმეებზე\",\n         \"ImageURL\": \"http://rustavi2.com/news_photos/28438_video.jpg\",\n         \"NewsDate\": \"2015-10-09 09:03:00\"\n       },\n       {\n         \"Id\": \"28448\",\n         \"Title\": \"\\\"განაჩენი პროკურატურას არ გამოაქვს, გამოაქვს სასამართლოს\\\" - ეკა ბესელია \\\"გამჭვირვალობის\\\" ანგარიშს პასუხობს\",\n         \"ImageURL\": \"http://rustavi2.com/news_photos/28448_video.jpg\",\n         \"NewsDate\": \"2015-10-09 08:49:00\"\n       },\n       {\n         \"Id\": \"28447\",\n         \"Title\": \"აგვისტოს ომზე ჰააგას სასამართლოს გადაწყვეტილებას მიხეილ სააკაშვილი ეხმაურება\",\n         \"ImageURL\": \"http://rustavi2.com/news_photos/28447_video.jpg\",\n         \"NewsDate\": \"2015-10-09 08:36:00\"\n       },\n       {\n         \"Id\": \"28444\",\n         \"Title\": \"იტალიის პარლამენტი სამხრეთ ოსეთის დამოუკიდებლობის აღიარების საკითხს განიხილავს - ბიბილოვი\",\n         \"ImageURL\": \"http://rustavi2.com/news_photos/28444_video.jpg\",\n         \"NewsDate\": \"2015-10-09 08:19:00\"\n       },\n       {\n         \"Id\": \"28443\",\n         \"Title\": \"2008 წლის მოვლენებით ჰააგის სასამართლოს დაინტერესებას დეპუტატები ეხმაურებიან\",\n         \"ImageURL\": \"http://rustavi2.com/news_photos/28443_video.jpg\",\n         \"NewsDate\": \"2015-10-09 08:12:00\"\n       },\n       {\n         \"Id\": \"28440\",\n         \"Title\": \"პროგრესი, რომელსაც საქართველო აჩვენებს ნატოს, სამიტის გადაწყვეტილებებშიც უნდა აისახოს - თინა ხიდაშელი\",\n         \"ImageURL\": \"http://rustavi2.com/news_photos/28440_video.jpg\",\n         \"NewsDate\": \"2015-10-09 08:02:00\"\n       },\n       {\n         \"Id\": \"28441\",\n         \"Title\": \"\\\"კრიზისს ბატონი დავითი ნარმანია არ დაუშვებს\\\" - ავთანდილ სუდაძე გადადგომის მიზეზებს განმარატვს\",\n         \"ImageURL\": \"http://rustavi2.com/news_photos/28441_video.jpg\",\n         \"NewsDate\": \"2015-10-09 08:01:00\"\n       },\n       {\n         \"Id\": \"28439\",\n         \"Title\": \"მთავრობის საქმიანობის 6 თვის ანგარიშის განხილვა კომიტეტებში დღეს გაგრძელდება\",\n         \"ImageURL\": \"http://rustavi2.com/news_photos/28439_video.jpg\",\n         \"NewsDate\": \"2015-10-09 07:54:00\"\n       },\n       {\n         \"Id\": \"28436\",\n         \"Title\": \"\\\"რუსთავი 2-ის თანამშრომლები მინდა მშვიდად იყოთ, რუსთავი 2-ის დახურვაზე საქმე არ მიდის და არც წავა\\\" - ნუკრი ქანთარია\",\n         \"ImageURL\": \"http://rustavi2.com/news_photos/28436_cover_b.jpg\",\n         \"NewsDate\": \"2015-10-09 07:43:00\"\n       }\n     ],\n     \"RESPONSE_CODE\": \"200\",\n     \"CACHE_DATE\": \"2015-10-09 10:51:51\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Response code": [          {            "group": "Response code",            "type": "<p>string</p> ",            "optional": false,            "field": "RESPONSE_CODE",            "description": "<p><code>200</code> <code>400</code> <code>404</code> <code>500</code></p> "          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP ERROR 400, 404, 500\n{\n  \"error\": \"Bad request\",\n  \"RESPONSE_CODE\" : \"400\"\n}",          "type": "json"        }      ]    },    "filename": "apidocs.lemon.do/build/R2/R2.js",    "groupTitle": "Methods",    "sampleRequest": [      {        "url": "http://rustavi2.com/api/v1/GetListOfNewsByCategoryId"      }    ]  },  {    "type": "Get",    "url": "v1/GetListOfPDNews",    "title": "GetListOfPDNews",    "version": "0.1.0",    "name": "GetListOfPDNews",    "group": "Methods",    "description": "<p>Gets the list of 12 popular and 12 discussed news for next 3 days.</p> ",    "parameter": {      "fields": {        "Request Parameters": [          {            "group": "Request Parameters",            "type": "<p>string</p> ",            "optional": false,            "field": "Language",            "description": "<p>Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code></p> "          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://rustavi2.com/api/v1/GetListOfPDNews",        "type": "json"      }    ],    "success": {      "fields": {        "Response": [          {            "group": "Response",            "type": "<p>int</p> ",            "optional": false,            "field": "Id",            "description": "<p>ჩანაწერის იდენტიფიკატორი</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "Title",            "description": "<p>სიახლის დასახელება</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "NewsDate",            "description": "<p>Format 18:45 - 25 July, ახალი ამბავის (სიახლის) თარიღი</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "ImageURL",            "description": ""          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "Type",            "description": "<p>case 1 then Popular, case 2 then Discussed</p> "          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"data\": \"Data will be here\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Response code": [          {            "group": "Response code",            "type": "<p>string</p> ",            "optional": false,            "field": "RESPONSE_CODE",            "description": "<p><code>200</code> <code>400</code> <code>404</code> <code>500</code></p> "          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP ERROR 400, 404, 500\n{\n  \"error\": \"Bad request\",\n  \"RESPONSE_CODE\" : \"400\"\n}",          "type": "json"        }      ]    },    "filename": "apidocs.lemon.do/build/R2/R2.js",    "groupTitle": "Methods",    "sampleRequest": [      {        "url": "http://rustavi2.com/api/v1/GetListOfPDNews"      }    ]  },  {    "type": "get",    "url": "v1/GetNewsByType",    "title": "GetNewsByType",    "version": "0.1.0",    "name": "GetNewsByType",    "group": "Methods",    "description": "<p>Gets the news by type</p> ",    "parameter": {      "fields": {        "Request Parameters": [          {            "group": "Request Parameters",            "type": "<p>string</p> ",            "optional": false,            "field": "Language",            "description": "<p>Format: <code>XX</code>, <code>[ka/en]</code>, Default <code>en</code></p> "          },          {            "group": "Request Parameters",            "type": "<p>int</p> ",            "optional": false,            "field": "type",            "description": "<p>if 1 return Breaking news elseif 2 return top news</p> "          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://rustavi2.com/api/v1/GetNewsByType",        "type": "json"      }    ],    "success": {      "fields": {        "Response": [          {            "group": "Response",            "type": "<p>int</p> ",            "optional": false,            "field": "Id",            "description": "<p>ჩანაწერის იდენტიფიკატორი</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "Title",            "description": "<p>სიახლის დასახელება</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "NewsDate",            "description": "<p>Format 18:45 - 25 July, ახალი ამბავის (სიახლის) თარიღი</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "Brief",            "description": "<p>სიახლის მოკლე ტექსტი</p> "          },          {            "group": "Response",            "type": "<p>string</p> ",            "optional": false,            "field": "ImageURL",            "description": "<p>null თუ type = 1</p> "          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"data\": \"Data will be here\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Response code": [          {            "group": "Response code",            "type": "<p>string</p> ",            "optional": false,            "field": "RESPONSE_CODE",            "description": "<p><code>200</code> <code>400</code> <code>404</code> <code>500</code></p> "          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP ERROR 400, 404, 500\n{\n  \"error\": \"Bad request\",\n  \"RESPONSE_CODE\" : \"400\"\n}",          "type": "json"        }      ]    },    "filename": "apidocs.lemon.do/build/R2/R2.js",    "groupTitle": "Methods",    "sampleRequest": [      {        "url": "http://rustavi2.com/api/v1/GetNewsByType"      }    ]  }] });