import process from "node:process";

console.log(process.env);
// To access env, we must provide permission
//deno run  --allow-env .\basics\deno-env-permission.ts

console.log(Deno.env)