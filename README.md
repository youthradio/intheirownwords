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


## Vue.js Front End Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
