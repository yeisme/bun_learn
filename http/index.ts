

Bun.serve({
    port: 3000,
    fetch(request) {
        console.log(request.method);
        return new Response('Hello, World!');
    },
});
