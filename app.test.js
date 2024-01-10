const request = require('supertest');
const app = require('./app');

describe("POST /addup", () => {
  it("should calculate the sum of two numbers", async () => {
    const res = await request(app)
      .post('/addup')
      .type('form')
      .send({ num1: '10', num2: '20' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ finalSum: 30 });
  });
});
