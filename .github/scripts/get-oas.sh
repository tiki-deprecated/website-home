#!/bin/bash
#
# Copyright (c) My Tiki, Inc.
# MIT license. See LICENSE file in root directory.
#
# Used during continuous integration github workflow to get the rendered
# aws OAS3 documentation from API Gateway.

aws apigateway get-export \
    --rest-api-id $1 \
    --stage-name $2 \
    --export-type oas30 \
    --region us-east-1 \
    ./infrastructure/files/oas-rendered.json
