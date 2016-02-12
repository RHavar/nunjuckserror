
var nunjucks = require('nunjucks');

console.log(
	nunjucks.render('foo.html', { username: 'James' })
);