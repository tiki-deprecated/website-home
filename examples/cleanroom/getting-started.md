# Cleanroom Sample | Getting Started

TIKI's cleanrooms are hosted [Iceberg](https://iceberg.apache.org) data lakes containing data legally licensed from users (zero-party), for your specific use case.

This sample cleanroom contains actual user demographic, transaction, and receipt data for the time period of 8/29 to 9/6. 

**THIS DATASET IS FOR EVALUATION PURPOSES ONLY AND MAY NOT BE SHARED OR USED IN ANY OTHER FROM WITHOUT WRITTEN CONSENT FROM TIKI INC.**

## Access

Access to the cleanroom requires an [AWS account](https://aws.amazon.com). To request access, provide your TIKI representative with the **ARN for the IAM user or role.** 

To find an IAM user's ARN open the [aws console](http://console.aws.amazon.com) and head to IAM > Access Management > Users > {selected user}

<img width="1054" alt="Screenshot 2023-09-11 at 10 31 18 PM" src="https://github.com/tiki/ocean/assets/3769672/1d968af7-3323-41e5-8fcf-44005f9b730c">

Your TIKI rep. will let you know once access is granted.

## Querying

The quickest path to querying and poking around the dataset is through the use of [AWS Athena](https://aws.amazon.com/athena/). Run standard SQL queries against the lake. 

### Add the data source

1. Open [Athena](https://us-east-2.console.aws.amazon.com/athena/home?region=us-east-2#/landing-page) in the us-east-2 region and open the hamburger menu. 
<img width="1438" alt="Screenshot 2023-09-11 at 10 41 25 PM" src="https://github.com/tiki/ocean/assets/3769672/6d5f8551-8cc2-4c0a-840e-2851880e72da">

2. Select **Data sources** then click **Create data source**.
<img width="1440" alt="Screenshot 2023-09-11 at 10 47 09 PM" src="https://github.com/tiki/ocean/assets/3769672/fe261833-ffbc-4148-bef2-72f749312252">

3. Select **S3 - AWS Glue Data Catalog** scroll down and click **Next**.
<img width="1440" alt="Screenshot 2023-09-11 at 10 45 03 PM" src="https://github.com/tiki/ocean/assets/3769672/692a7f6a-8a9e-423b-bcd9-f50442c0bd9c">

4. Select **AWS Glue Data Catalog in another account**. Then scroll down and enter:

- **Data source name**: TIKI
- **Catalog ID**: 254962200554
<img width="1440" alt="Screenshot 2023-09-11 at 10 45 22 PM" src="https://github.com/tiki/ocean/assets/3769672/12bcec0b-c062-46ec-8a5c-08f4c5e7ce37">

5. Click **Next**, scroll down and click **Create data source**.
<img width="1440" alt="Screenshot 2023-09-11 at 10 46 24 PM" src="https://github.com/tiki/ocean/assets/3769672/364c5638-facd-44c3-8f9f-c90468164edf">

### Run a SQL query

1. Open the **Query Editor**. Select **TIKI** from the Data Source dropdown and **cleanroom_sample** from the Database dropdown.
<img width="1440" alt="Screenshot 2023-09-11 at 10 55 21 PM" src="https://github.com/tiki/ocean/assets/3769672/60dee800-1a0b-4e1b-b420-ac6f5880b042">

2. Run a simple query to test the connection.

```sql
select count(*) from demographic;
```
**result:** 1200000

## Connecting directly

*This section assumes a familiarity with [Apache Iceberg](https://iceberg.apache.org).*

All files (data and metadata) for the lake can be found in the S3 bucket **[s3://mytiki-cleanroom-sample](https://s3.console.aws.amazon.com/s3/buckets/mytiki-cleanroom-sample?region=us-east-2)** with [AWS Glue](https://aws.amazon.com/glue/) as the metadata catalog. 

Just set your Iceberg Catalog properties to:
- **catalog-name**: iceberg
- **catalog-impl**: org.apache.iceberg.aws.glue.GlueCatalog
- **warehouse**: s3://mytiki-cleanroom-sample
- **io-impl**: org.apache.iceberg.aws.s3.S3FileIO

For example, here's how we do it in Java:

```
GlueCatalog catalog = new GlueCatalog();
catalog.initialize("glue_catalog", new HashMap<>(){{
    put("catalog-name", properties.getProperty("iceberg"));
    put("catalog-impl", properties.getProperty("org.apache.iceberg.aws.glue.GlueCatalog"));
    put("warehouse", properties.getProperty("s3://mytiki-cleanroom-sample"));
    put("io-impl", properties.getProperty("org.apache.iceberg.aws.s3.S3FileIO"));
}});
```

Detailed instructions on configuring an Iceberg client using AWS Glue + S3 can be found in [Apache's docs](https://iceberg.apache.org/docs/latest/aws/#glue-catalog).

With your Iceberg client configured, use your favorite data tools to interact with the dataset. 

- [Spark/PySpark](https://iceberg.apache.org/spark-quickstart/)
- [Hive](https://iceberg.apache.org/hive-quickstart/)
- [Snowflake](https://www.snowflake.com/blog/iceberg-tables-powering-open-standards-with-snowflake-innovations/)
- [AWS EMR](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-iceberg-use-cluster.html)
- [Databricks](https://docs.databricks.com/en/delta/clone-parquet.html)
- and a ton more...

**Do not hesitate to reach out if you have any questions or need helping getting set up**.

## Taxonomy
**denotes a required field*

### demographic

| column | type | description | example |
|:--|:--|:--|:--|
| userid	| *string | Unique User ID	| 9F8134BC4A372DDEE0A9E41D20FBC061B6084468
| ipaddress	| string | IP Address	| 192.158. 1.38
| maid	| string | Mobile advertising ID	| AE7E364D-6561-471C-830D-94523BFBC94Z
| estimated_age	| int32 | User age calculated from birthday	| 25
| age_range	| string | User age range	| 25-34
| age_generation	| string | User's generation as determined by age	| Millennials
| race_ethnicity	| string | User's declared race/ethnicity	| African American or Black
| income_range	| string | User's declared household income range before taxes	| $30,000-$34,999
| income_bucket	| string | User's income bucket	| Low Income
| gender	| string | User's declared gender	| Female
| user_zip	| string | User home zip code	| 35452
| user_state	| string | User's declared home state	| IL
| presence_of_children	| string | Presence of children under 18 in user's household	| yes
| quant_of_children	| int32 | User's declared number of children in household under 18	| 1
| education	| string | User's declared highest level of education	| Associates degree
| living_situation	| string | User's declared living situation	| Owned
| hh_size	| int32 | User's declared household size	| 3
| marital_status	| string | User's declared marital status	| Married
| employment_status	| string | User's declared employment status	| Employed Full-time
| sexual_orientation	| string | User's declared sexual orientation	| Heterosexual

### transaction

| column | type | description | example |
|:--|:--|:--|:--|
| userid	| *string | XXXX Unique User ID	| 9F8134BC4A372DDEE0A9E41D20FBC061B6084468 |
| transactionid	| string | Unique Transaction ID	| MBOY9BJX55S5EBWPD1QATQ9BJVQKYNHMM7DWE |
| authorized_date	| string | Authorized Date, date user authorizes purchase	| 2022-05-07 |
| transaction_date	| string | Transaction Date, date bank authorizes purchase; can be several days after authorized date; otherwise known as the posted date	| 2022-05-09 |
| clean_merchant_name	| string | Merchant name field that has been through Attain's data hygiene IP	| Walmart |
| merchant_name	| string | Merchant Name	| WALMART |
| transaction_name	| string | Transaction Name	| WALMART |
| amount	| float | Transaction Total Amount	| 96.21 |
| payment_channel	| string | Online, offline, or other | IN STORE |
| category_level1	| string | Transaction Category Level 1	| SHOPS |
| category_level2	| string | Transaction Category Level 2	| SUPERMARKETS AND GROCERIES |
| category_level3	| string | Transaction Category Level 3	|  |
| num_levels	| int32 | Number of Category Levels (how many categories exist for this transaction)	| 2 |
| primary_personal_finance_category	| string | Primary Transaction Category, will soon replace Transaction Category Level 1	| GENERAL MERCHANDISE |
| detailed_personal_finance_category	| string | Detailed Transaction Category, will soon replace Transaction Category Level 2	| SUPERSTORES |
| merchant_address	| string | Merchant Street Address	| 5710 MCFARLAND BLVD
merchant_city	| string | Merchant City	| NORTHPORT |
merchant_state	| string | Merchant State	| AL |
merchant_zip	| string | Merchant Zip	| 35476 |

### receipt

| column | type | description | example |
|:--|:--|:--|:--|
| userid	| *string | XXXX Unique User ID	| 9F8134BC4A372DDEE0A9E41D20FBC061B6084468 |
| receiptID	| string | Unique Receipt Identifier; ties products together at the receipt-level	| AC668FE7-8B76-4DE8-BF3A-4F88820A3465 |
| receipt_date	| string | Receipt Date	| 12/22/2022 |
| merchant_name	| string | Merchant Name	| WALGREENS |
| merchant_address	| string | Merchant Street Address	| 5036 S COTTAGE GROVE AVE |
| merchant_city	| string | Merchant City	| CHICAGO |
| merchant_state	| string | Merchant State	| IL |
| merchant_zip	| string | Merchant Zip	| 60615 |
| channel	| string | Merchant Channel	| MASS |
| amount	| float | Receipt Total Amount	| 4.86 |
| brand	| string | Brand Name	| SKINNY POP |
| product_name	| string | Standard Product Name	| SKINNY POP ORIGINAL POPCORN, 6.7 OZ |
| product_description	| string | Product Details (Size, Count, etc.)	| 6.7OZ ORIGI |
| quantity	| int32 | Receipt Quantity	| 1 |
| unit_price	| float | Item Price	| 4.2 |
| total_price	| float | Item Price x Quantity	| 4.2 |
| category_level1	| string | Product Category Level 1	| GROCERY |
| category_level2	| string | Product Category Level 2	| SNACKS |
| category_level3	| string | Product Category Level 3	| POPCORN |
| size	| string | Product Size	| 6.7 OZ |
| upc	| string | Product UPC Code	| 816925000000 |
