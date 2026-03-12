const request = require("supertest");
const app = require("../server");

describe("Calculator API", () => {
  test("adds 2 + 3", async () => {
    const res = await request(app).get("/api/add/2/3");

    expect(res.statusCode).toBe(200);
    expect(res.body.operation).toBe("add");
    expect(res.body.result).toBe(5);
  });

  test("subtracts 5 - 2", async () => {
    const res = await request(app).get("/api/sub/5/2");

    expect(res.statusCode).toBe(200);
    expect(res.body.operation).toBe("sub");
    expect(res.body.result).toBe(3);
  });

  test("multiplies 4 * 3", async () => {
    const res = await request(app).get("/api/mul/4/3");

    expect(res.statusCode).toBe(200);
    expect(res.body.operation).toBe("mul");
    expect(res.body.result).toBe(12);
  });

  test("divides 8 / 2", async () => {
    const res = await request(app).get("/api/div/8/2");

    expect(res.statusCode).toBe(200);
    expect(res.body.operation).toBe("div");
    expect(res.body.result).toBe(4);
  });

  test("returns error when dividing by zero", async () => {
    const res = await request(app).get("/api/div/4/0");

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Division by zero");
  });

  test("calculates with POST /api/calculate", async () => {
    const res = await request(app)
      .post("/api/calculate")
      .send({ a: 10, b: 5, op: "+" });

    expect(res.statusCode).toBe(200);
    expect(res.body.operation).toBe("add");
    expect(res.body.result).toBe(15);
  });

  test("returns error for invalid operation", async () => {
    const res = await request(app)
      .post("/api/calculate")
      .send({ a: 10, b: 5, op: "%" });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Invalid operation");
  });
});