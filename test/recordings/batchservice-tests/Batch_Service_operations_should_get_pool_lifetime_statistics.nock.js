// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/lifetimepoolstats?api-version=2016-02-01.3.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#poolstats/@Element\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/lifetimepoolstats\",\"usageStats\":{\r\n    \"startTime\":\"2016-03-31T21:49:36.4926196Z\",\"lastUpdateTime\":\"2016-04-01T05:00:00Z\",\"dedicatedCoreTime\":\"PT50M47.197S\"\r\n  },\"resourceStats\":{\r\n    \"startTime\":\"2016-03-31T21:49:36.4926196Z\",\"diskReadIOps\":\"0\",\"diskWriteIOps\":\"0\",\"lastUpdateTime\":\"2016-03-31T21:49:36.4926196Z\",\"avgCPUPercentage\":0.0,\"avgMemoryGiB\":0.0,\"peakMemoryGiB\":0.0,\"avgDiskGiB\":0.0,\"peakDiskGiB\":0.0,\"diskReadGiB\":0.0,\"diskWriteGiB\":0.0,\"networkReadGiB\":0.0,\"networkWriteGiB\":0.0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '07d75347-adaa-4184-8f53-2344c56a924e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 05:52:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/lifetimepoolstats?api-version=2016-02-01.3.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#poolstats/@Element\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/lifetimepoolstats\",\"usageStats\":{\r\n    \"startTime\":\"2016-03-31T21:49:36.4926196Z\",\"lastUpdateTime\":\"2016-04-01T05:00:00Z\",\"dedicatedCoreTime\":\"PT50M47.197S\"\r\n  },\"resourceStats\":{\r\n    \"startTime\":\"2016-03-31T21:49:36.4926196Z\",\"diskReadIOps\":\"0\",\"diskWriteIOps\":\"0\",\"lastUpdateTime\":\"2016-03-31T21:49:36.4926196Z\",\"avgCPUPercentage\":0.0,\"avgMemoryGiB\":0.0,\"peakMemoryGiB\":0.0,\"avgDiskGiB\":0.0,\"peakDiskGiB\":0.0,\"diskReadGiB\":0.0,\"diskWriteGiB\":0.0,\"networkReadGiB\":0.0,\"networkWriteGiB\":0.0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '07d75347-adaa-4184-8f53-2344c56a924e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 05:52:22 GMT',
  connection: 'close' });
 return result; }]];