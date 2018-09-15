const jwt = require('jsonwebtoken');
const { MemberOperations } = require('../../../graphql/member/memberOperations');

const JWT_EXPIRATION_TIME = '60m';
const memberOperations = new MemberOperations();

module.exports.handler = (event, context, callback) => {
  // Extract the username and password
  const { email, password } = JSON.parse(event.body);

  // Authenticate the user in the database with username and password
  memberOperations.memberGetByEmailPassword({ email, password })
  .then((user) => {
    let response;
    if (user) {
      jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME }, (error, token) => {

        if (error) {
          response = generateResponse(401, JSON.stringify({ error }));
        } else {
          response = generateResponse(200, JSON.stringify({ token }));
        }
        return callback(null, response);
      });
    } else {
      response = generateResponse(401, JSON.stringify({ error: 'No user found.'}));
      return callback(null, response);
    }
  })
  .catch((error) => {
    console.log('Error: ', error);
    return callback(401, JSON.stringify('Error logging in...'));
  });
};

const generateResponse = (errorCode, body = "") => {
  return {
    statusCode: errorCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body,
  };
};
