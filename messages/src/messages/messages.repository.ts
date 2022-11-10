import { readFile, writeFile } from 'fs/promises';



export class MessagesRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf8');
    const message = JSON.parse(content);
  }
  async findAll() {}
  async create(message: string) {}
}