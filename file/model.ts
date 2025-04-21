import type { HelloData } from './types';

export class HelloModel implements HelloData {
    name: string;
    description: string;

    constructor (data: any) {
        // 进行数据校验和转换
        if (typeof data.name !== 'string') {
            throw new Error('name 必须是字符串');
        }
        if (typeof data.description !== 'string') {
            throw new Error('description 必须是字符串');
        }

        this.name = data.name;
        this.description = data.description;
    }

    toJSON(): HelloData {
        return {
            name: this.name,
            description: this.description
        };
    }

    static fromJSON(json: string): HelloModel {
        return new HelloModel(JSON.parse(json));
    }
}
