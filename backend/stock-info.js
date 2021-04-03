import unirest from "unirest";

import handler from "./libs/handler-lib";

// Test with: serverless invoke local --function stock-info -p mocks/stock-info.json

export const main = handler(async (event, context) => {
  // You would use this for something that is not a GET request
  // const data = JSON.parse(event.body);

  // This gets symbols from the path parameters (assuming they are sent as a stringified JSON list)
  // const symbols = JSON.parse(event.queryParameters.symbols);

  const symbols = event.queryStringParameters.symbols;
  // This combines the JSON list into a comma separated string as specified by the API docs

  // Use the API whose documentation is at this URL!
  // https://rapidapi.com/apidojo/api/yahoo-finance1?endpoint=apiendpoint_33e0cec5-0f8a-4f9f-a6dc-018e6762fbe7

  var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes");

  req.query({
    "region": "US",
    "symbols": symbols
  });

  req.headers({
    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    "useQueryString": true
  });


  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log(JSON.stringify(res.body));
    // Return the result as JSON
    return res.body;
  });
});




/*
stuff that belonged in old version stock-info.json but did not let me comment

/**

{
  "body": "{\"symbols\": [\"AMD\",\"IBM\",\"AAPL\"]}",
  "queryStringParameters": "{\"symbols\": [\"AMD\",\"IBM\",\"AAPL\"]}",
  "requestContext": {
    "identity": {
      "cognitoIdentityId": "TestUser1234"
    }
  }
}
*/