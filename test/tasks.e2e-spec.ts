import { Test } from '@nestjs/testing';
import * as supertest from 'supertest';
import { AppModule } from '../src/app.module';

describe('Tasks (e2e)', () => {
  const request = createServer();

  describe('GET /tasks/task1', () => {
    it('should return some value', async () => {
      const input = '';

      const result = await request()
        .post('/tasks/task1')
        .send({ input })
        .expect(200)
        .then((response) => response.body.result);

      expect(result).toBe('');
    });
  });
});

function createServer() {
  let app: import('@nestjs/common').INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  return () => supertest(app.getHttpServer());
}
