

// 简单的日志装饰器
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`调用 ${propertyKey}，参数:`, args);
        return originalMethod.apply(this, args);
    };
}

class Example {
    @log
    greet(name: string) {
        return `Hello ${name}!`;
    }
}

// 使用示例
const example = new Example();
example.greet("world"); // 日志输出: "调用 greet，参数: ['world']"

// bun build ./index.tsx --outdir ./build
