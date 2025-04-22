import { $ } from 'bun';

await $`ls`;

const { stdout, stderr, exitCode } = await $`something-that-may-fail`
    .nothrow()
    .quiet();

if (exitCode !== 0) {
    console.log(`非零退出代码 ${exitCode}`);
}

console.log(stdout);
console.log(stderr);

const buffer = Buffer.alloc(100);
await $`echo "Hello World!" > ${buffer}`;

console.log(buffer.toString());
