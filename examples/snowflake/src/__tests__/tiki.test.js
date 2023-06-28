/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

const tiki = require("../tiki");
const apiFixture = require("./__fixtures__/api-fixture");

describe("Tiki Tests", function () {
  const fetchNoMock = global.fetch;
  let mockJsonRsp = {};

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve((() => mockJsonRsp)()),
      });
  });

  afterAll(() => {
    global.fetch = fetchNoMock;
  });

  test("authorize", async () => {
    mockJsonRsp = apiFixture.token;
    const token = await tiki.authorize();
    expect(token).toBe(apiFixture.token.access_token);
  });

  test("list", async () => {
    mockJsonRsp = apiFixture.licenses;
    const res = await tiki.list("dummy", {});
    expect(res.approxResults).toBe(apiFixture.licenses.approxResults);
    expect(res.results.length).toBe(apiFixture.licenses.results.length);
    for (let i = 0; i < apiFixture.licenses.results.length; i++) {
      expect(res.results[i]).toBe(apiFixture.licenses.results[i]);
    }
  });

  test("hash", async () => {
    const sha3 = tiki.hash("31923218-2953-4b70-bfe3-9ab0137eff79");
    expect(sha3).toBe("DBrZFEPo47vW705RFmKwcyrWXjgV7Pz0GH5+k7do9Ok=");
  });
});
