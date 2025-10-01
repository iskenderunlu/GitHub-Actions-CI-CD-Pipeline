const request = require("supertest");
const app = require("../src/app"); // ✅ only import app, not server

describe("GET /", () => {
  it("should return Hello, CI/CD Pipeline!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello, CI/CD Pipeline!");
  });
});
