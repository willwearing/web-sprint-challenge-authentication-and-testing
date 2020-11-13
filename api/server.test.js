const server = require("./server");
const supertest = require("supertest");

describe("server test", () => {
  it("is the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("[GET] /", () => {
  it("get request works", () => {
    return supertest(server)
      .get("/")
      .expect("Content-Type", /json/)
      .expect({ api: "up" });
  });
});
