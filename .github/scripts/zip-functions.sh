#!/bin/bash
#
# Copyright (c) My Tiki, Inc.
# MIT license. See LICENSE file in root directory.
#
# Used during continuous integration github workflow to generate
# zip functions/* (backend).

cd backend/functions
zip functions.zip -r *
cd ../..
