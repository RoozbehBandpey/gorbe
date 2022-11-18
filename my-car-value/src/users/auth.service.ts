import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    // See if email is in use
    const users = await this.usersService.find(email);
    if(users.length) {
      throw new BadRequestException('Email already in use!')
    }
    // Hash user's password
    // Generate a salt
    const salt = randomBytes(8).toString('hex'); // 16 characters, each byte is two characters
    // Hash the salt and the password together
    const hash = (await scrypt(password, salt, 32)) as Buffer; // 32 bytes as the output
    // Join the hash result and salt together
    const result = salt + '.' + hash.toString('hex');
    // Create a new user and save it

    // return the user
  }

  signin(email: string, password: string) {

  }
}