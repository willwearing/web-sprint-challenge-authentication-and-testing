const server = require("../api/server");
const supertest = require("supertest");
const db = require("../database/db-config");

beforeEach(async () => {
  await db("users").truncate();
});

describe("testing for json", () => {
  it("does the json work?", () => {
    supertest(server)
      .post("/api/auth/register")
      .send({ username: "Zac", password: "password" })
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
