import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    // See if email is in use
    const users = await this.usersService.find(email);
    if(users.length) {
      throw new BadRequestException('Email already in use!')
    }
    // Hash user's password

    // Create a new user and save it

    // return the user
  }

  signin(email: string, password: string) {

  }
}