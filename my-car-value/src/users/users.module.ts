import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { AuthService } from './auth.service';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';
import { DatabaseModule } from '../database.module';
import { userProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...userProviders, UsersService, AuthService]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
