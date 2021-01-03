Backend
===========
Simple serverless system to securely store signups in TIKI's cloud.
This is to ensure users receive no spam, never any data leaks, or
unauthorized use of contact info, it never leaves our of our cloud.
All data always encrypted in transit and at rest.

## Functions
- form_382.js - receives either a user or buyer signup from the frontend
applies some very basic cleaning/sanitization and sticks it in a
dynamodb table. 

## API
- oas.json - OpenAPI 3 specification document defines the routes,
requests, and responses. Hosted & pretty @ [readme.io](https://mytiki.readme.io)

## DB
NOSQL Table defined as part of infrastructure. See 
[infrastructure/resource_dynamodb.tf](../infrastructure/resource_dynamodb.tf)

Data Structure (JSON)
```
{
 "contact_info": String,
 "timestamp_utc": String,
 "contact_type": String,
 "isUser": Boolean
}
```
where contact_type is an enum of \[email, phone, unknown] and
timestamp_utc is milliseconds since epoch.

##Versions
\<xyz>.version files define contain the specific version levels for
the system. Lambda functions maintain a separate version from the API
to support modification without redundant API version changes. 
