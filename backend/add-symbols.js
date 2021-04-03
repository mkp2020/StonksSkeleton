import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const watchlist = data.watchlist;
    const id = event.requestContext.identity.cognitoIdentityId;
    const symbols = data.symbols;

    //console.log(dynamoDb.createSet(data.symbols));
    console.log(process.env.TableName);

    const params = {
        //made dynamo db table in aws called watchlists
        TableName: "watchlists",
        Key: {
            userId: id,
            watchlistId: watchlist,
            //symbols: dynamoDb.createSet(""),
        },
        UpdateExpression: "ADD symbols :symbols",
        //UpdateExpression: "ADD symbols :symbols DELETE symbols :emptySpace",
        //doesn't work bc can't have two update expr on the same path on dynamo.db :(
        ExpressionAttributeValues: {
            ":symbols": dynamoDb.createSet(data.symbols) || null,
            //":emptySpace": dynamoDb.createSet(""),
        },
        //ReturnValues: "ALL_NEW",
    };
    await dynamoDb.update(params);
    return {symbols};
});