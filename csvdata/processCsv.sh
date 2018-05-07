#!/bin/bash
for a in `ls *.csv`; do csvtojson $a > $a.json; done;
jq -s '{data:.[0]}*{people:.[1]}*{"transcript-1":.[2]}*{"transcript-2":.[3]}*{"transcript-3":.[4]}*{"transcript-4":.[5]}' Data.csv.json People.csv.json transcript-1.csv.json transcript-2.csv.json transcript-3.csv.json transcript-4.csv.json > alldata.json
cp alldata.json ../src/assets/data
