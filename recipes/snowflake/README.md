# TIKI <> Snowflake Integration

Integrate TIKI with your Snowflake instance for listing zero-party data on Snowflake's Marketplace.

### Requires

- A [Snowflake](https://signup.snowflake.com) account with ACCOUNTADMIN privileges or a role with teh CREATE integration privilege
- An AWS account with permissions to create IAM roles, an API Gateway, and a Lambda function using CloudFormation.
- An S3 bucket in the same Region to upload/host the function zip.
- A [TIKI account](https://console.mytiki.com), with a project and corresponding API keys.


## How it works
Utilizing [PTR records](https://mytiki.com/docs/license-customization) in your Table, the [Snowflake External Function](https://docs.snowflake.com/en/sql-reference/external-functions-creating-aws-planning) resolves rows against TIKI's [List Licenses API](https://mytiki.com/reference/list-licenses) returning a boolean if there is or is not a corresponding valid license.

### Limits
Works for millions of rows, with pagination handled by TIKI. Only limits imposed are your Snowflake <> API Gateway/Lambda payload size limits and network timeouts.

### Example

Given a Table like:

`SELECT * FROM demo;`

| PTRs  | Field 1 | Field N |
|-------|---------|---------|
| 12345 | I'm     | a       |
| abcde | Little  | Teapot  |

Where PTR `abcde` has a valid data license and `12345` does not. Add the external function to a WHERE clause to return:

```
SELECT *
FROM demo
WHERE integrationFnName(ptr) = true;
```

| PTRs  | Field 1 | Field N |
|-------|---------|---------|
| abcde | Little  | Teapot  |

## Get Started

### Configure

1. Add your [TIKI API Key](https://console.mytiki.com) to `tiki.js`
```
const keyId = "API KEY ID";
const keySecret = "API KEY SECRET";
```

2. Add any additional static filters to include WITH your PTR filer in `index.js`. DO NOT comment out the empty ptr array initialization `ptrs: []`.
```
const filters = {
    ptrs: [],
    // tags: [],
    usecases: ["distribution"],
    // destinations: [],
  };
```

### Deployment
*Note: This part is easy, but requires focus. It's easy to screw up.*

Using CloudFormation, you first deploy the API Gateway/Lambda and then **link the function to Snowflake.**

They have an excellent step-by-step guide for you to follow, which we **STRONGLY recommend following** —we structured this integration to pair with the instructions.

[Creating an External Function for AWS Using an AWS CloudFormation Template →](https://docs.snowflake.com/en/sql-reference/external-functions-creating-aws-template)

There are only 2 minor differences:

1. Instead of using their example CloudFormation template, **use our template** in `/deploy/cloud-formation.yml`
2. Instead of inline-code in the CloudFormation template, ours requires the **code to be hosted in an S3 Bucket**.
   1. Run `npm install; npm pack` to generate the deployment asset (`/deploy/package.zip`).
   2. Upload `deploy/package.zip` to your S3 Bucket. When you run the CloudFormation template in AWS, it will prompt you for the Bucket Name and Key.

### Use
Add a WHERE clause to your query.

```
WHERE integrationFnName(ptr) = true;
```

yes it really is that easy.

---

*A special thanks to Andrew & Kyle from Snowflake for their help in getting the integration up and running.*
