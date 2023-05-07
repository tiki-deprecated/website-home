# Sitemap Proxy

Readme (hosting for mytiki.com) does not provide a sitemap.xml functionality. However, mytiki.com is proxied through Cloudflare for "pretty" API routes (/api/...). 

Using a similar structure: 
1) Crawl the website to generate a sitemap (recommend using [Screaming Frog](https://www.screamingfrog.co.uk))
2) Upload the sitemap to TIKI's CDN under /assets.

This is a straight GET proxy function registered to the route `mytiki.com/sitemap.xml`.

To re-deploy, simply call `npm run deploy`. The sitemap can be updated without redeploying the function.
