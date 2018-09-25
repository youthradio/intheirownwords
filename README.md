# They-Them-Front

## Converting the CSV files

Convert csv files to json using `csvtojson`, install it if with `npm i -g csvtojson`

```bash
for a in `ls *.csv`; do csvtojson $a > $a.json; done;
```

Merge the JSONs using `jq`, install it with `brew install jq`

```bash
jq -s '{data:.[0]}*{people:.[1]}*{"transcript-1":.[2]}*{"transcript-2":.[3]}*{"transcript-3":.[4]}*{"transcript-4":.[5]}' Data.csv.json People.csv.json transcript-1.csv.json transcript-2.csv.json transcript-3.csv.json transcript-4.csv.json > alldata.json
```

## Iframed Version script tag

```html
<iframe id="yritow" width="100%" src="https://yri.youthradio.org/intheirownwords/c/race/iframe" frameborder="0" scrolling="no" allowfullscreen></iframe>
<script async defer src="https://yri.youthradio.org/intheirownwords/static/iframe.min.js"></script>
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
