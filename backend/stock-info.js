import unirest from "unirest";

import handler from "./libs/handler-lib";

// Test with: serverless invoke local --function stock-info -p mocks/stock-info.json 

export const main = handler(async (event, context) => {
  // You would use this for something that is not a GET request
  // const data = JSON.parse(event.body);

  // This gets symbols from the path parameters (assuming they are sent as a stringified JSON list)
  const symbols = JSON.parse(event.pathParameters.symbols);
  // This combines the JSON list into a comma separated string as specified by the API docs
  const symbolString = symbols.join(',');

  // Use the API whose documentation is at this URL!
  // https://rapidapi.com/apidojo/api/yahoo-finance1?endpoint=apiendpoint_33e0cec5-0f8a-4f9f-a6dc-018e6762fbe7

  // Return the result as JSON
  // console.log(res.body);
  // return res.body;
});