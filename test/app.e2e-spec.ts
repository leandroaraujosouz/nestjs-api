import { Test, TestingModule } from '@nestjs/testing';
import { HttpService, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    httpService = moduleFixture.get<HttpService>(HttpService);
    await app.init();
  });

  it('/ (GET)', async () => {
    jest.spyOn(httpService, 'get').mockImplementationOnce(() => {});
    // const expectedGpaString = '3.8';
    const response = await request(app.getHttpServer())
      .get('/users/')
      .expect(200);
  });
});
