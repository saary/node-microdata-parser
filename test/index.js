var microdata = require('../index');

exports.testYelp = function(test) {
  microdata.parseUrl('http://www.yelp.com/biz/art-of-the-table-seattle#query:gourmet%20dinner', function(err, items) {
    test.ifError(err);
    test.ok(items.length, 'Found at list 1 item');
    if (!err) {
      test.ok(items.length && items[0].type === 'http://schema.org/LocalBusiness', 'found business');
    }

    test.done();
  });
}
