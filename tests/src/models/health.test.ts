import {
  getHealthCheck, toDDHHMMSS
} from '../../../src/models/health';

import * as pkjson from "../../../package.json";
     
describe('/models', () => {
  describe('/health.ts', () => {
    describe('getHealthCheck', () => {
      let healthCheck = getHealthCheck();
      beforeEach(() => {
        let healthCheck = getHealthCheck();
      });
      it('should return a health check with a date', () => {
        expect(healthCheck.date).toBeDefined();
        expect(healthCheck.date).toEqual(expect.stringContaining("T"));
      });
      it('should return a health check with an uptime', () => {
        expect(healthCheck.uptime).toBeDefined();
        expect(healthCheck.uptime.substring(0,10)).toEqual("00:00:00:0");
      });
      it('should return a health check with a version', () => {
        const version = pkjson.version;
        expect(healthCheck.version).toEqual(version);
      });
    });
    describe('toDDHHMMSS', () => {
      it('should return the correct time for Test 00:00:00:01', () => {
          const expected = "00:00:00:01";
    const resp = toDDHHMMSS(1);
          expect(resp).toEqual(expected);
      });
      it('should return the correct time for Test 00:00:01:01', () => {
          const expected = "00:00:01:01";
          const resp = toDDHHMMSS(61);
          expect(resp).toEqual(expected);
      });
      it('should return the correct time for Test 00:01:01:01', () => {
          const expected = "00:01:01:01";
          const resp = toDDHHMMSS(3661);
          expect(resp).toEqual(expected);
      });
      it('should return the correct time for Test 01:01:01:01', () => {
          const expected = "01:00:00:00";
          const resp = toDDHHMMSS(86400);
          expect(resp).toEqual(expected);
      });
      it('should return the correct time for Test 01:01:01:01', () => {
          const expected = "01:01:01:06";
          const resp = toDDHHMMSS(90066);
          expect(resp).toEqual(expected);
      });
      it('should return the correct time for Test 00:00:00:00', () => {
    const expected = "00:00:00:00";
    const resp = toDDHHMMSS(0);
          expect(resp).toEqual(expected);
      });
  });
  });
});