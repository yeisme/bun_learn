// index.ts
Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Hello, World!");
  }
});
