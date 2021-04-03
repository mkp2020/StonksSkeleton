import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const name = data.name;
    const id = event.requestContext.identity.cognitoIdentityId;
    const params = {
        //made dynamo db table in aws called watchlists
        TableName: "watchlists",
        Key: {
            userId: id,
            watchlistId: name,
        }
    };
    await dynamoDb.delete(params);
    return params.Key;
});