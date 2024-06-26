import { database } from '@/models/database';

export const mockedQueries: database.service.currentqueries.Query = {
  applicationName: 'applicationName',
  backendStart: 'backendStart',
  backendType: 'backendType',
  backendXid: 3,
  backendXmin: 1,
  clientHostname: 'clientHostname',
  clientIp: 'clientIp',
  clientPort: 8080,
  databaseId: 12,
  databaseName: 'databaseName',
  leaderPid: 1,
  pid: 2,
  query: 'query',
  queryDuration: 3,
  queryStart: 'queryStart',
  state: database.service.currentqueries.StateEnum.ACTIVE,
  stateChange: 'stateChange',
  transactionStart: 'transactionStart',
  userId: 3,
  userName: 'userName',
  waitEvent: 'waitEvent',
  waitEventType: database.service.currentqueries.WaitEventTypeEnum.BUFFER_PIN,
};

export const mockedQueryStatistics: database.mysql.querystatistics.Query = {
  avgTimerWait: 3,
  countStar: 3,
  digest: 'digest',
  digestText: 'digestText',
  firstSeen: 'firstSeen',
  lastSeen: 'lastSeen',
  maxTimerWait: 3,
  minTimerWait: 3,
  quantile95: 3,
  quantile99: 3,
  quantile999: 3,
  querySampleSeen: 'querySampleSeen',
  querySampleText: 'querySampleText',
  querySampleTimerWait: 3,
  schemaName: 'schemaName',
  sumCreatedTmpDiskTables: 3,
  sumCreatedTmpTables: 3,
  sumErrors: 3,
  sumLockTime: 3,
  sumNoGoodIndexUsed: 3,
  sumNoIndexUsed: 3,
  sumRowsAffected: 3,
  sumRowsExamined: 3,
  sumRowsSent: 3,
  sumSelectFullJoin: 3,
  sumSelectFullRangeJoin: 3,
  sumSelectRange: 3,
  sumSelectRangeCheck: 3,
  sumSelectScan: 3,
  sumSortMergePasses: 3,
  sumSortRange: 3,
  sumSortRows: 3,
  sumSortScan: 3,
  sumTimerWait: 3,
  sumWarnings: 3,
};
