import {
    Database,
    DataTypes,
    Model,
    PostgresConnector,
  } from "https://deno.land/x/denodb/mod.ts";
  
  const connection = new PostgresConnector({
    host: "...",
    username: "user",
    password: "password",
    database: "airlines",
  });
  
  const db = new Database(connection);
  