import { ConnectorConfig, DataConnect } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;



export interface Dog_Key {
  id: UUIDString;
  __typename?: 'Dog_Key';
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}

export interface WalkSchedule_Key {
  id: UUIDString;
  __typename?: 'WalkSchedule_Key';
}



