import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("Your_project_ID");

export const account = new Account(client);

export default client;
