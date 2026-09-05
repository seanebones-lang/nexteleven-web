import { spawn } from "node:child_process";

const forwarded = process.argv.slice(2);
const nextArgs = ["dev"];

for (let index = 0; index < forwarded.length; index += 1) {
  const arg = forwarded[index];
  if (arg === "--strictPort") continue;
  if (arg === "--host") {
    nextArgs.push("--hostname", forwarded[index + 1]);
    index += 1;
    continue;
  }
  nextArgs.push(arg);
}

const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", ...nextArgs], {
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});
