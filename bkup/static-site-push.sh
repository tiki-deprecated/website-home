#!/bin/bash
#
# Copyright (c) My Tiki, Inc.
# MIT license. See LICENSE file in root directory.
#
# Used during continuous integration github workflow to generate
# static site (frontend/dist).

cd frontend/dist
aws s3 sync . s3://tiki-website-frontend-development --delete --cache-control max-age=3600
aws s3 sync ./_nuxt s3://tiki-website-frontend-development/_nuxt --delete --cache-control max-age=31536000, immutable
cd ../..
