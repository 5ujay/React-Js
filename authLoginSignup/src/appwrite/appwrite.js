import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("667149ca002238d4b418");

export const account = new Account();

export default client;
