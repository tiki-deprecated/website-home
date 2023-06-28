/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

const tiki = require("../tiki");
const index = require("../index");
const apiFixture = require("./__fixtures__/api-fixture");

describe("Index Tests", function () {
  beforeAll(() => {
    const authorizeMock = jest.spyOn(tiki, "authorize");
    const listMock = jest.spyOn(tiki, "list");
    authorizeMock.mockImplementation(() =>
      Promise.resolve(apiFixture.token.access_token)
    );
    listMock.mockImplementation(() => Promise.resolve(apiFixture.licenses));
  });

  test("handler", async () => {
    const input = JSON.parse(apiFixture.event.body).data;
    const res = await index.handler(apiFixture.event, undefined);
    expect(res.statusCode).toBe(200);

    const output = JSON.parse(res.body).data;
    expect(output.length).toBe(input.length);
    for (let i = 0; i < input.length; i++) {
      expect(output[i][0]).toBe(input[i][0]);
    }
    for (let i = 0; i < 3; i++) {
      expect(output[i][1]).toBe(true);
    }
    for (let i = 3; i < 6; i++) {
      expect(output[i][1]).toBe(false);
    }
  });
});
