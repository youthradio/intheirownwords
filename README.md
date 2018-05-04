# They-Them-Front

## Converting the CSV files

Convert csv files to json using `csvtojson`, install it if with `npm i -g csvtojson`

```bash
for a in `ls *.csv`; do csvtojson $a > $a.json; done;
```

Merge the JSONs using `jq`, install it with `brew install jq`

```bash
jq -s '{data:.[0]}*{people:.[1]}*{"transcript-1":.[2]}*{"transcript-2":.[3]}*{"transcript-3":.[4]}' Data.json People.json transcript-1.json transcript-2.json transcript-3.json > alldata.json
```
