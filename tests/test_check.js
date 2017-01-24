
/*
export TRAIL_NAME=Default
*/

const Credentials = {
  "AccessKeyId": "",
  "SecretAccessKey": "",
  "SessionToken": ""
};
const querystr = {
  "region": ""
};

event = {
  "path": "/cloudtrail",
  "httpMethod": "GET",
  "headers": {
    "Credentials": JSON.stringify(Credentials),
  },
  "requestContext": {
    "authorizer": {
      "refresh_token": "1234",
      "principalId": "abcd"
    }
  },
  "queryStringParameters": querystr
}

var i = require('../src/index.js');
var context = {succeed: res => console.log(res)};
i.handler(event, context, function(err, data) {
  if (err)  console.log("failed : " + err);
  else console.log("completed: " + JSON.stringify(data));
});
