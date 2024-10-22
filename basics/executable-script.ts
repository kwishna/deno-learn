#!/usr/bin/env -S deno run --allow-env
const path = Deno.env.get("DENO_INSTALL");

console.log("Deno Install Path:", path);

/*
This script tells the system to use the deno runtime to run the script.
The -S flag splits the command into arguments and indicates that the following argument (deno run --allow-env) should be passed to the env command.

The script then retrieves the value associated with the environment variable named DENO_INSTALL with Deno.env.get() and assigns it to a variable called path.
Finally, it prints the path to the console using console.log().

For brevity, you may wish to omit the extension for your script's filename.
In this case, supply one using the --ext flag in the script itself, then you can run the script with just the file name:

$ cat my_script
#!/usr/bin/env -S deno run --allow-env --ext=js
console.log("Hello!");
$ ./my_script
Hello!
*/