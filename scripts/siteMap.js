const sm = require('sitemap'),
      fs = require('fs');

const now = new Date().toISOString()
const routes = [
  { url: '/intheirownwords/', lastmodISO: now},
  { url: '/intheirownwords/about', lastmodISO: now},
  { url: '/intheirownwords/more', lastmodISO: now},
  { url: '/intheirownwords/p/Desmond', lastmodISO: now},
  { url: '/intheirownwords/p/Jen', lastmodISO: now},
  { url: '/intheirownwords/p/Paulina', lastmodISO: now},
  { url: '/intheirownwords/p/Malia', lastmodISO: now},
  { url: '/intheirownwords/c/presentation', lastmodISO: now},
  { url: '/intheirownwords/c/love-and-dating', lastmodISO: now},
  { url: '/intheirownwords/c/race', lastmodISO: now},
  { url: '/intheirownwords/c/coming-out', lastmodISO: now}
]

const sitemap = sm.createSitemap({
    hostname: 'https://yri.youthradio.org',
    cacheTime: 600000,
    urls: routes
});

fs.writeFileSync("sitemap.xml", sitemap.toString());
