// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .delete('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2?api-version=2016-02-01.3.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3443e5be-0e07-49b3-8214-3399d19937f1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 05:55:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .delete('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2?api-version=2016-02-01.3.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3443e5be-0e07-49b3-8214-3399d19937f1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 05:55:55 GMT',
  connection: 'close' });
 return result; }]];