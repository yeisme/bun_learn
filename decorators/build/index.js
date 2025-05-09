var __legacyDecorateClassTS = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// index.ts
function log(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args) {
    console.log(`调用 ${propertyKey}，参数:`, args);
    return originalMethod.apply(this, args);
  };
}

class Example {
  greet(name) {
    return `Hello ${name}!`;
  }
}
__legacyDecorateClassTS([
  log
], Example.prototype, "greet", null);
var example = new Example;
example.greet("world");
