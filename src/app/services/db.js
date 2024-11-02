import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
const docClient = DynamoDBDocumentClient.from(client);

export const insertInDynamoDb = async (id, fileHash, email) => {
  const command = new PutCommand({
    TableName: process.env.AWS_DYNAMO_TABLE,
    Item: {
      id,
      email,
      fileHash,
    },
  });

  const response = await docClient.send(command);
  return response;
};