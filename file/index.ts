import { HelloModel } from './model'
// 测试
let file = Bun.file('./hello.json')
let jsonText = await file.text()
let model = HelloModel.fromJSON(jsonText)

console.log(model)
console.log(model.toJSON())
