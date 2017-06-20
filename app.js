// sign with default (HMAC SHA256) 

var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

// sign asynchronously 

let token;

jwt.sign({ foo: 'bar' }, 'shhhhh', (err, payload) => {
	token = payload;
	console.log('Encrypted token --- ', token);

	// verify a token symmetric

	jwt.verify(token, 'shhhhh', (err, decoded) => {
		console.log('Decoded token --- ', decoded.foo) // bar
	});

});
