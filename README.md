node-microdata-parser
=====================

node.js html5 microdata parser

##Usage

Simple as it can get

### Example - parsing a yelp page
```javascript
microdata.parseUrl('http://www.yelp.com/biz/art-of-the-table-seattle#query:gourmet%20dinner', function(err, items) {
  console.log('found', items);
});
```
