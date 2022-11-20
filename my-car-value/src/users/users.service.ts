import { Injectable, NotFoundException } from '@nestjs/common';
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
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id })
  }

  find(email: string) {
    return this.repo.find({
      where: {
          email: email
      },
    });
  }

  async update(id: number, attrs: Partial<User>) {
    // This is a little bit inefficient since we do two trips
    // to database but that's the only way to have nice functionality if logging
    // Efficient way is to directly call update() which we'll loose logging on it
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    Object.assign(user, attrs);

    return this.repo.save(user);
  }

  async remove(id: number) {
    //  Same as above we cn do remove()  or delete(), 
    // delete is faster but no hooks associated with entity would work
    // Remove works with entities
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return this.repo.remove(user);
  }
}
