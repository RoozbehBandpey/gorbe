import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>){}

  create(email: string,  password: string) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id })
  }
  find(email: string) {
    return this.repo.find({ where: { email } });
  }
  async update(id: number, attrs: Partial<User>) {
    // This is a little bit inefficient since we do two trips
    // to database but that's the only way to have nice functionality if logging
    // Efficient way is to directly call update() which we'll loose logging on it
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    Object.assign(user, attrs);
    
    return this.repo.save(user);
  }
  remove(id: number) {

  }
}
