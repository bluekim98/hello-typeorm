import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import user from "../fixture/user";

import teams from "../fixture/teams";


describe('TeamController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    
  });

  it('/team/users/:id (GET)', (done) => {
    return request(app.getHttpServer())
      .get(`/team/users/${teams[0].id}`)
      .expect(HttpStatus.OK)
      .end(done);
  });


  afterAll(async () => {
    await app.close();
  });
});
