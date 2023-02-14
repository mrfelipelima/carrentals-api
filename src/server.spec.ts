/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect } from "@jest/globals";
import supertest from "supertest";

import { app } from "./server";

describe("Start Server", () => {
  it("Should be able to start the server", async () => {
    const res = await supertest(app).get("/");
    expect(res.status).toEqual(200);
    expect(res.status).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("welcome");
  });
});
