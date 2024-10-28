// Receiving a file
const fileResponse = await fetch("https://deno.land/logo.svg");

if (fileResponse.body) {
  const file = await Deno.open("./logo.svg", { write: true, create: true });

  await fileResponse.body.pipeTo(file.writable);
}

// Sending a file
const file = await Deno.open("./logo.svg", { read: true });

await fetch("https://example.com/", {
  method: "POST",
  body: file.readable,
});

/*
You can run this code with the deno run command.
Because it is fetching data across the network and writing to a file, you need to grant the --allow-net, --allow-write and --allow-read permissions:

deno run --allow-read --allow-write --allow-net stream.ts
*/