import { HelloModel } from './model'
// 测试

let file = Bun.file('./hello.json')

console.log(file.name, file.size, file.type, await file.exists())

let jsonText = await file.text()
let model = HelloModel.fromJSON(jsonText)

console.log(model)
console.log(model.toJSON())

let tojson = {
    name: 'hello',
    description: 'world',
}
