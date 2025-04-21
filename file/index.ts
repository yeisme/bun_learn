import { type HelloData } from './types'

// 读取 JSON 文件
let file = Bun.file('./hello.json')
let jsonData: HelloData = await file.json()

console.log(jsonData)
console.log(await file.text())

// 使用结构体的字段
console.log(`Name: ${jsonData.name}`)
console.log(`Description: ${jsonData.description}`)
