const Users = require("./users-model");
const db = require("../database/db-config");

beforeEach(async () => {
  await db("users").truncate();
});

describe("modules work", () => {
  describe("add method works", () => {
    it("will insert a new user", async () => {
      await Users.add({ username: "William", password: "is the best" });
      await Users.add({ username: "Justin", password: "is not the best" });
      await Users.add({
        username: "Mike",
        password: "is in trouble with his misses",
      });
      const users = await db("users");
      expect(users).toHaveLength(3);
    });
  });
});
