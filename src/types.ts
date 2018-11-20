import mmdb = require('maxmind');
import { MaxMindRecord } from './records';

export interface CountryResponse extends mmdb.CountryResponse {
  maxmind?: MaxMindRecord;
}

export interface CityResponse extends mmdb.CityResponse {
  maxmind?: MaxMindRecord;
}