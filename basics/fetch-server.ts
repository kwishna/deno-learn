// Output: JSON Data
const jsonResponse = await fetch("https://api.github.com/users/denoland");
const jsonData = await jsonResponse.json();

console.log(jsonData, "\n");

// Output: HTML Data
const textResponse = await fetch("https://deno.land/");
const textData = await textResponse.text();

console.log(textData, "\n");

// Output: Error Message
try {
  await fetch("https://does.not.exist/");
} catch (error) {
  console.log(error);
}

/*
You can run this code with the deno run command.
Because it is fetching data across the network, you need to grant the --allow-net permission:

deno run --allow-net fetch.ts
*/