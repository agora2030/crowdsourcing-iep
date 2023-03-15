import { Client } from "@planetscale/database";
const {
  REACT_APP_DATABASE_HOST,
  REACT_APP_DATABASE_USERNAME,
  REACT_APP_DATABASE_PASSWORD,
} = process.env;

export const CLIENT = new Client({
  host: REACT_APP_DATABASE_HOST,
  username: REACT_APP_DATABASE_USERNAME,
  password: REACT_APP_DATABASE_PASSWORD,
});
