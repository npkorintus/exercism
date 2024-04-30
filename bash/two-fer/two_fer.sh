#!/usr/bin/env bash

# assign first param to name variable
name=$1

# use -z flag to return true if string is null
if [[ -z $name ]]; then
  echo "One for you, one for me."
else
  echo "One for $name, one for me."
fi