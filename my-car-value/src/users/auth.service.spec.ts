import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;
  
  beforeEach(async () => {
    // Create a fake copy of user service
    fakeUsersService = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) => Promise.resolve({ id: 1, email, password } as User)
    }
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService
        }
      ]
    }).compile();
    
    service = module.get(AuthService);
  
  });
  
  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with salted and hashed password', async () => {
    const  password = '123';
    const user = await service.signup('test@test.com', password);

    expect(user.password).not.toEqual(password);
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if the user with email that is in use', async () => {
    fakeUsersService.find = () => Promise.resolve([{ id: 1, email: '', password: ''} as User])
    const  password = '123';

    await expect(service.signup('test@test.com', password)).rejects.toThrow(
      BadRequestException,
    );
  });

  it('throws when signin is called with an unused email', async () => {
    const  password = '123';

    await expect(service.signin('unused-enail-test@test.com', '123')).rejects.toThrow(
      NotFoundException,
    );
  });
})


// Refactor 'Email in Use' Test to Address Jest Breaking Changes
// Due to breaking changes in the Jest library, we will need to modify our tests to avoid the following errors:

// Test functions cannot both take a 'done' callback and return something. Either use a 'done' callback, or return a promise.

// This was first raised in the QA here.

// Find the src/users/auth.service.spec.ts file and make the following changes:

// 1) Add Import:

// import { BadRequestException } from '@nestjs/common';


// 2) Refactor 'throws an error if user signs up' test to remove try/catch and done callback:

//   it('throws an error if user signs up with email that is in use', async () => {
//     fakeUsersService.find = () =>
 
//       Promise.resolve([{ id: 1, email: 'a', password: '1' } as User]);
//     await expect(service.signup('asdf@asdf.com', 'asdf')).rejects.toThrow(
//       BadRequestException,
//     );
//   });

// Find the src/users/auth.service.spec.ts file and make the following changes:

// 1) Update Import:

// import { BadRequestException, NotFoundException } from '@nestjs/common';


// 2) Refactor 'throws if signin is called with an unused email' test to remove try/catch and done callback:

//  it('throws if signin is called with an unused email', async () => {
//     await expect(
//       service.signin('asdflkj@asdlfkj.com', 'passdflkj'),
//     ).rejects.toThrow(NotFoundException);
//   });
// }