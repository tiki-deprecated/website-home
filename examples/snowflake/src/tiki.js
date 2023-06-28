/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

const { SHA3 } = require("sha3");

const baseUrl = "https://mytiki.com/api";
const keyId = "API KEY ID";
const keySecret = "API KEY SECRET";

exports.authorize = async () => {
  const url = new URL(`${baseUrl}/authorize`);
  url.searchParams.append("grant_type", "client_credentials");
  url.searchParams.append("scope", "index");
  url.searchParams.append("client_id", keyId);
  url.searchParams.append("client_secret", keySecret);

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return fetch(url, options)
    .then((rsp) => rsp.json())
    .then((json) => {
      if ("access_token" in json) return json.access_token;
      else throw json;
    });
};

exports.list = async (
  token,
  filters,
  pageToken = undefined,
  maxResults = 1000
) => {
  const url = new URL(`${baseUrl}/license/list`);
  url.searchParams.append("max-results", String(maxResults));
  if (pageToken != null) url.searchParams.append("page-token", pageToken);

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(filters),
  };

  return fetch(url, options)
    .then((rsp) => rsp.json())
    .then((json) => {
      if ("results" in json) {
        return json;
      } else throw json;
    });
};

exports.hash = (message) => {
  const sha3 = new SHA3(256);
  sha3.update(message);
  return sha3.digest("base64");
};
