import { spawn } from "child_process";
import chalk from "chalk";
import { projRoot } from "./paths";

export const run = async (command: string, cwd: string = projRoot) =>
    new Promise<void>((resolve, reject) => {
        const args = command.split(" ");
        console.log(args);
        const cmd = args.shift()!;
        console.log(args.shift())
        console.log(cmd);

        chalk.green(`run: ${cmd} ${args.join(" ")}`);
        const app = spawn(cmd, args, {
            cwd,
            stdio: "inherit"
        });

        const onProcessExit = () => app.kill("SIGHUP");

        app.on("close", (code) => {
            process.removeListener("exit", onProcessExit);

            if (code === 0) resolve();
            else reject(new Error(`Command failed. \n Command: ${command} \n Code: ${code}`));
        });
        process.on("exit", onProcessExit);
    });
