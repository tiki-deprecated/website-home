/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

exports.token = {
  access_token:
    "eyJraWQiOiIwZDJkYmFkMC04MWY1LTQ2MjUtOTRhOC05MWU4Mzk1ODFhYzgiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJjb20ubXl0aWtpLmwwX2F1dGgiLCJzdWIiOiIyYWIzZWZkYi04ZTkxLTQxNDgtYTQzYi1hN2MxOThiNGQzZDciLCJhdWQiOiJpbmRleC5sMC5teXRpa2kuY29tIiwiZXhwIjoxNjgzMTc4NzAzLCJpYXQiOjE2ODMxNzgxMDN9.NxHvi-cwdKTvyMx3cHwLmPrJzUH5zatswutzSNaBNNo9ejXOOfMxWhPJSzx1OARhFabv4GGEH3-6YHjajVz0SQ",
  refresh_token:
    "eyJraWQiOiIwZDJkYmFkMC04MWY1LTQ2MjUtOTRhOC05MWU4Mzk1ODFhYzgiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJjb20ubXl0aWtpLmwwX2F1dGgiLCJzdWIiOiIyYWIzZWZkYi04ZTkxLTQxNDgtYTQzYi1hN2MxOThiNGQzZDciLCJhdWQiOiJpbmRleC5sMC5teXRpa2kuY29tIiwiZXhwIjoxNjg1NzcwMTAzLCJpYXQiOjE2ODMxNzgxMDMsImp0aSI6ImM0YTI2ZjQxLTg2OGEtNGNjYy05OGQ5LWFhZTcwNzZjZDMxMyJ9.Qmf038aAMCgjl0S9Q6UwQujjTTOiqEqCoGSdImy_h0mjP_RMeUlZDP_QRYqBKsC1e8Pmebg_levNxVotdF5xTg",
  scope: "index",
  token_type: "Bearer",
  expires_in: 599,
};

exports.licenses = {
  approxResults: 3,
  results: [
    {
      id: "8S2LbfokTb5FQj4kxOsgQ7cGusv8EKBds4TtKfW8w24",
      ptr: "MZE7j4HGUz5+M8gfzydllDpElLhaf8281Hxn4adlTGc=",
      tags: ["device_id"],
      uses: [],
    },
    {
      id: "QgaATN2IhhAG5P32x5m2op5waCdVY02gdHD1ckU-RhM",
      ptr: "aKueM9DwHQTC+NF5N/t40qO/d99IBz7kUERvP9NO/GM=",
      tags: ["device_id"],
      uses: [
        {
          usecase: "custom:test",
        },
      ],
    },
    {
      id: "pUNERNVToqkXPcvIz7NdegSm-y2AxCADTeTSsIxfOsg",
      ptr: "27GutscXDyUKl6BF0LTeKhBQNzgokXl/B8nFgNPhkQY=",
      tags: ["device_id"],
      uses: [
        {
          usecase: "attribution",
        },
      ],
    },
  ],
};

exports.event = {
  statusCode: 200,
  body: JSON.stringify({
    data: [
      [0, "596c63d7-8312-4a2e-b794-ca6d91ca79ae"],
      [1, "21dba9d3-0d81-4a0b-8490-113873d3beec"],
      [2, "15b83020-82b6-4532-9522-0e1a414bb2cc"],
      [3, "4b4ce04f-af3a-41cc-a5ee-38505956569a"],
      [4, "ab02b96e-8961-4bf4-9a6c-54f80390e27b"],
      [5, "1f035257-1050-43fd-871a-5128dfa4c792"],
    ],
  }),
};
