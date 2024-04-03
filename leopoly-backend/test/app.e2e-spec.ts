import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { isEqual } from 'lodash';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/anagram (POST) tárol', (done) => {
    const expected = ['rotál', 'oltár', 'tárol', 'ráolt', 'rátol'].sort();
    request(app.getHttpServer())
      .post('/anagram')
      .send({ word: 'tárol' })
      .expect(201)
      .end(function (err, res) {
        if (err) throw err;
        const sorted = res.body.findings.sort();
        if (!isEqual(sorted, expected)) {
          throw 'No match';
        }
        done();
      });
  });

  it('/anagram (POST) rrzáá', (done) => {
    const expected = ['rázár'].sort();
    request(app.getHttpServer())
      .post('/anagram')
      .send({ word: 'rrzáá' })
      .expect(201)
      .end(function (err, res) {
        if (err) throw err;
        const sorted = res.body.findings.sort();
        if (!isEqual(sorted, expected)) {
          throw 'No match';
        }
        done();
      });
  });

  it('/anagram (POST) xxxxx', (done) => {
    const expected = [].sort();
    request(app.getHttpServer())
      .post('/anagram')
      .send({ word: 'xxxxx' })
      .expect(201)
      .end(function (err, res) {
        if (err) throw err;
        const sorted = res.body.findings.sort();
        if (!isEqual(sorted, expected)) {
          throw 'No match';
        }
        done();
      });
  });
});
