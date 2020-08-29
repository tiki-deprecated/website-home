#!/bin/bash
#
# Copyright (c) My Tiki, Inc.
# MIT license. See LICENSE file in root directory.
#
# Used during continuous integration github workflow to generate
# static site (frontend/dist).

cd frontend
npm install
npm run generate
cd ..
