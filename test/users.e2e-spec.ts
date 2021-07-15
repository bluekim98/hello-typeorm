import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateUserDto } from '../src/users/dto/createUser.dto';
import { UsersService } from '../src/users/users.service';

import user from "../fixture/user";

describe('UsersController (e2e)', () => {
  let app: INestApplication;
  let usersService: UsersService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    usersService = moduleFixture.get(UsersService);
    usersService.clear();
  });


  it('/users (POST)', (done) => {
    const createUserDto: CreateUserDto = new CreateUserDto();
    createUserDto.email = user.email,
    createUserDto.name = user.name,
    createUserDto.nickname = user.nickname,
    createUserDto.teamId = user.teamId

    return request(app.getHttpServer())
      .post(`/users/`)
      .send(createUserDto)
      .expect(HttpStatus.CREATED)
      .end(done)
  });

  it('/users (GET)', (done) => {
    return request(app.getHttpServer())
      .get(`/users/${user.email}`)
      .expect(HttpStatus.OK)
      .end(done);
  });

  it('/users (PUT)', (done) => {
    return request(app.getHttpServer())
      .put(`/users/`)
      .query({
        email: user.email,
        name: '이지은',
        nickname: '아이유'
      })
      .expect(HttpStatus.OK)
      .end(done);
  })

  afterAll(async () => {
    await app.close();
  });
});
