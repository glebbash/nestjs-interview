import { Test } from '@nestjs/testing';
import * as supertest from 'supertest';
import { AppModule } from '../src/app.module';

describe('Tasks (e2e)', () => {
  const request = createServer();

  describe('GET /tasks/task1', () => {
    it('should return some value', async () => {
      const input = 'Hello world!';

      const response = await request().post('/tasks/task1').send({ input });

      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
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
