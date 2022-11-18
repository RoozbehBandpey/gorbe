import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

export class AuthService {
  constructor(private usersService: UsersService) {}
}