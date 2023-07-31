import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Chance } from "chance";
import {
  Handler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";

const documentClient = new DocumentClient();
const chance = new Chance();
const { USERS_TABLE } = process.env;

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return { statusCode: 200, body: "Hello World" };
};
