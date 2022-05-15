import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { HttpModule } from "@nestjs/axios";

describe('UsersController', () => {
  let controller: UsersController;
  let spyService: UsersService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: UsersService,
      useFactory: () => ({
        findAll: jest.fn(),
        findOne: jest.fn(),
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, ApiServiceProvider],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    spyService = module.get<UsersService>(UsersService);
  });

  describe('findAll', () => {
    it('should call findAll method', async () => {
      controller.findAll();
      expect(200);
    });
  });

  describe('find User', () => {
    it('should find a user', async () => {
     await controller.findOne('62812e9ae7190555003c07b0');
      expect(200);
    });
  });

  // describe('create User', () => {
  //   it('should create a new user', async () => {
  //     const user = {
  //       "email": "test-case@email.com.br",
  //       "name": "Test Case",
  //       "password": "Test Password"
  //     }

  //     await controller.create(user);
  //     expect(200);
  //   });
  // });

});
