import { S3Client } from 'bun'

// AWS S3
let s3 = new S3Client({
    accessKeyId: 'minioadmin',
    secretAccessKey: 'minioadmin',
    bucket: 'data',
    endpoint: 'http://127.0.0.1:9000',
})

let path = 'data/path.txt'
let data = 'Your data to write'

try {
    await s3.write(path, data)
    console.log('文件成功上传到 S3')
} catch (error) {
    console.error('S3 操作失败:', error)
}

try {
    let fileData = s3.file(path)
    let textData = await fileData.text()
    console.log('文件内容:', textData)
}
catch (error) {
    console.error('读取文件失败:', error)
}
