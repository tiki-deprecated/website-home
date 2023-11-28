const transactions = [
  {
    data: 'userid',
    type: 'string'
  },
  {
    data: 'transactionid',
    type: 'string'
  },
  {
    data: 'authorized_date',
    type: 'string'
  },
  {
    data: 'transaction_date',
    type: 'string'
  },
  {
    data: 'clean_merchant_name',
    type: 'string'
  },
  {
    data: 'merchant_name',
    type: 'string'
  },
  {
    data: 'transaction_name',
    type: 'string'
  },
  {
    data: 'amount',
    type: 'float'
  },
  {
    data: 'payment_channel',
    type: 'string'
  },
  {
    data: 'category_level1',
    type: 'string'
  },
  {
    data: 'category_level2',
    type: 'string'
  },
  {
    data: 'category_level3',
    type: 'string'
  },
  {
    data: 'num_levels',
    type: 'int32'
  },
  {
    data: 'primary_personal_finance_category',
    type: 'string'
  },
  {
    data: 'detailed_personal_finance_category',
    type: 'string'
  },
  {
    data: 'merchant_address',
    type: 'string'
  },
  {
    data: 'merchant_city',
    type: 'string'
  },
  {
    data: 'merchant_state',
    type: 'string'
  },
  {
    data: 'merchant_zip',
    type: 'string'
  }
]

const demographics = [
  { data: 'userid', type: 'string' },
  {
    data: 'ipaddress',
    type: 'string'
  },
  {
    data: 'maid',
    type: 'string'
  },
  {
    data: 'estimated_age',
    type: 'int32'
  },
  {
    data: 'age_range',
    type: 'string'
  },
  {
    data: 'age_generation',
    type: 'string'
  },
  {
    data: 'race_ethnicity',
    type: 'string'
  },
  {
    data: 'income_range',
    type: 'string'
  },
  {
    data: 'income_bucket',
    type: 'string'
  },
  {
    data: 'gender',
    type: 'string'
  },
  {
    data: 'user_zip',
    type: 'string'
  },
  {
    data: 'user_state',
    type: 'string'
  },
  {
    data: 'presence_of_children',
    type: 'string'
  },
  {
    data: 'quant_of_children',
    type: 'int32'
  },
  {
    data: 'education',
    type: 'string'
  },
  {
    data: 'living_situation',
    type: 'string'
  },
  {
    data: 'hh_size',
    type: 'int32'
  },
  {
    data: 'marital_status',
    type: 'string'
  },
  {
    data: 'employment_status',
    type: 'string'
  },
  {
    data: 'sexual_orientation',
    type: 'string'
  }
]

const receipts = [
  { data: 'userid', type: 'string' },
  {
    data: 'receiptID',
    type: 'string'
  },
  {
    data: 'receipt_date',
    type: 'string'
  },
  {
    data: 'merchant_name',
    type: 'string'
  },
  {
    data: 'merchant_address',
    type: 'string'
  },
  {
    data: 'merchant_city',
    type: 'string'
  },
  {
    data: 'merchant_state',
    type: 'string'
  },
  {
    data: 'merchant_zip',
    type: 'string'
  },
  {
    data: 'channel',
    type: 'string'
  },
  {
    data: 'amount',
    type: 'float'
  },
  {
    data: 'brand',
    type: 'string'
  },
  {
    data: 'product_name',
    type: 'string'
  },
  {
    data: 'product_description',
    type: 'string'
  },
  {
    data: 'quantity',
    type: 'int32'
  },
  {
    data: 'unit_price',
    type: 'float'
  },
  {
    data: 'total_price',
    type: 'float'
  },
  {
    data: 'category_level1',
    type: 'string'
  },
  {
    data: 'category_level2',
    type: 'string'
  },
  {
    data: 'category_level3',
    type: 'string'
  },
  {
    data: 'size',
    type: 'string'
  },
  {
    data: 'upc',
    type: 'string'
  },
]

export {demographics, receipts, transactions}