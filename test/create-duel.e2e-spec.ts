import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('DuelsController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/duels (POST)', () => {
        return request(app.getHttpServer())
            .post('/duels')
            .send({ playerOneId: 'p1', playerTwoId: 'p2' })
            .expect(201)
            .expect((res) => {
                expect(res.body).toHaveProperty('duelId');
                expect(typeof res.body.duelId).toBe('string');
            });
    });
});
