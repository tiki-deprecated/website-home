#!/bin/bash
#
# Copyright (c) My Tiki, Inc.
# MIT license. See LICENSE file in root directory.
#
# Used during continuous integration github workflow to move/copy
# generated/config files into infrastructure package (infrastructure/files).

cp ./backend/oas.json ./infrastructure/files/oas.json
cp ./backend/api.version ./infrastructure/files/api.version
cp ./backend/functions/functions.version ./infrastructure/files/functions.version
mv ./backend/functions/functions.zip ./infrastructure/files/functions.zip
mv ./frontend/dist ./infrastructure/files/dist

