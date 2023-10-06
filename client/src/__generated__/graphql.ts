import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Channel = {
  __typename?: 'Channel';
  BaseLine?: Maybe<Scalars['Float']>;
  BaseMax?: Maybe<Scalars['Float']>;
  BaseMin?: Maybe<Scalars['Float']>;
  Description?: Maybe<Scalars['String']>;
  DisplayOnGraph?: Maybe<Scalars['Boolean']>;
  ForwardFlow?: Maybe<Scalars['Boolean']>;
  GroupChannel?: Maybe<Scalars['String']>;
  IndexTimeStamp?: Maybe<Scalars['Date']>;
  LastIndex?: Maybe<Scalars['Float']>;
  LastTimeStamp?: Maybe<Scalars['Date']>;
  LastValue?: Maybe<Scalars['Float']>;
  LoggerId?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Pressure1?: Maybe<Scalars['Boolean']>;
  Pressure2?: Maybe<Scalars['Boolean']>;
  ReverseFlow?: Maybe<Scalars['Boolean']>;
  StatusViewAlarm?: Maybe<Scalars['Boolean']>;
  Unit?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
};

export type ChannelInput = {
  BaseLine?: InputMaybe<Scalars['Float']>;
  BaseMax?: InputMaybe<Scalars['Float']>;
  BaseMin?: InputMaybe<Scalars['Float']>;
  Description?: InputMaybe<Scalars['String']>;
  DisplayOnGraph?: InputMaybe<Scalars['Boolean']>;
  ForwardFlow?: InputMaybe<Scalars['Boolean']>;
  GroupChannel?: InputMaybe<Scalars['String']>;
  IndexTimeStamp?: InputMaybe<Scalars['Date']>;
  LastIndex?: InputMaybe<Scalars['Float']>;
  LastTimeStamp?: InputMaybe<Scalars['Date']>;
  LastValue?: InputMaybe<Scalars['Float']>;
  LoggerId?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Pressure1?: InputMaybe<Scalars['Boolean']>;
  Pressure2?: InputMaybe<Scalars['Boolean']>;
  ReverseFlow?: InputMaybe<Scalars['Boolean']>;
  StatusViewAlarm?: InputMaybe<Scalars['Boolean']>;
  Unit?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  Company?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Production?: Maybe<Scalars['Int']>;
};

export type CompanyInStatisticMarkSize = {
  __typename?: 'CompanyInStatisticMarkSize';
  Amount?: Maybe<Scalars['Int']>;
  Company?: Maybe<Scalars['String']>;
};

export type DataLogger = {
  __typename?: 'DataLogger';
  TimeStamp?: Maybe<Scalars['Date']>;
  Value?: Maybe<Scalars['Float']>;
};

export type DataManual = {
  __typename?: 'DataManual';
  Description?: Maybe<Scalars['String']>;
  Index?: Maybe<Scalars['Float']>;
  Output?: Maybe<Scalars['Float']>;
  SiteId?: Maybe<Scalars['String']>;
  Stt?: Maybe<Scalars['Int']>;
  TimeStamp?: Maybe<Scalars['Date']>;
  _id: Scalars['ID'];
};

export type DataManualInsertInput = {
  Description?: InputMaybe<Scalars['String']>;
  Index?: InputMaybe<Scalars['Float']>;
  Output?: InputMaybe<Scalars['Float']>;
  SiteId?: InputMaybe<Scalars['String']>;
  Stt?: InputMaybe<Scalars['Int']>;
  TimeStamp?: InputMaybe<Scalars['Date']>;
};

export type DataManualUpdateInput = {
  Description?: InputMaybe<Scalars['String']>;
  Index?: InputMaybe<Scalars['Float']>;
  Output?: InputMaybe<Scalars['Float']>;
  SiteId?: InputMaybe<Scalars['String']>;
  Stt?: InputMaybe<Scalars['Int']>;
  TimeStamp?: InputMaybe<Scalars['Date']>;
  _id: Scalars['ID'];
};

export type DateCalclogger = {
  __typename?: 'DateCalclogger';
  DateRange?: Maybe<Array<Maybe<Scalars['String']>>>;
  From?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Float']>;
  To?: Maybe<Scalars['String']>;
};

export type DateCalcloggerInput = {
  DateRange?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  From?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Float']>;
  To?: InputMaybe<Scalars['String']>;
};

export type DeviceLogger = {
  __typename?: 'DeviceLogger';
  Description?: Maybe<Scalars['String']>;
  Installed?: Maybe<Scalars['Boolean']>;
  Marks?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['String']>;
  ReceiptDate?: Maybe<Scalars['Date']>;
  Serial?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type DeviceLoggerInsertInput = {
  Description?: InputMaybe<Scalars['String']>;
  Installed?: InputMaybe<Scalars['Boolean']>;
  Marks?: InputMaybe<Scalars['String']>;
  Model?: InputMaybe<Scalars['String']>;
  Provider?: InputMaybe<Scalars['String']>;
  ReceiptDate?: InputMaybe<Scalars['Date']>;
  Serial?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
};

export type DeviceLoggerInstallUpdateInput = {
  Installed?: InputMaybe<Scalars['Boolean']>;
  Serial?: InputMaybe<Scalars['String']>;
};

export type DeviceLoggerUpdateInput = {
  Description?: InputMaybe<Scalars['String']>;
  Installed?: InputMaybe<Scalars['Boolean']>;
  Marks?: InputMaybe<Scalars['String']>;
  Model?: InputMaybe<Scalars['String']>;
  Provider?: InputMaybe<Scalars['String']>;
  ReceiptDate?: InputMaybe<Scalars['Date']>;
  Serial?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type DeviceMeter = {
  __typename?: 'DeviceMeter';
  AccreditatedDate?: Maybe<Scalars['Date']>;
  AccreditationDocument?: Maybe<Scalars['String']>;
  AccreditationType?: Maybe<Scalars['String']>;
  AppovalDate?: Maybe<Scalars['Date']>;
  AppovalDecision?: Maybe<Scalars['String']>;
  Approvaled?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  InstallIndex?: Maybe<Scalars['Float']>;
  Installed?: Maybe<Scalars['Boolean']>;
  Marks?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  Nationality?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['String']>;
  ReceiptDate?: Maybe<Scalars['Date']>;
  Serial?: Maybe<Scalars['String']>;
  SerialTransmitter?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type DeviceMeterAccreditationType = {
  __typename?: 'DeviceMeterAccreditationType';
  AccreditationType?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type DeviceMeterInsertInput = {
  AccreditatedDate?: InputMaybe<Scalars['Date']>;
  AccreditationDocument?: InputMaybe<Scalars['String']>;
  AccreditationType?: InputMaybe<Scalars['String']>;
  AppovalDate?: InputMaybe<Scalars['Date']>;
  AppovalDecision?: InputMaybe<Scalars['String']>;
  Approvaled?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  ExpiryDate?: InputMaybe<Scalars['Date']>;
  InstallIndex?: InputMaybe<Scalars['Float']>;
  Installed?: InputMaybe<Scalars['Boolean']>;
  Marks?: InputMaybe<Scalars['String']>;
  Model?: InputMaybe<Scalars['String']>;
  Nationality?: InputMaybe<Scalars['String']>;
  Provider?: InputMaybe<Scalars['String']>;
  ReceiptDate?: InputMaybe<Scalars['Date']>;
  Serial?: InputMaybe<Scalars['String']>;
  SerialTransmitter?: InputMaybe<Scalars['String']>;
  Size?: InputMaybe<Scalars['Int']>;
  Status?: InputMaybe<Scalars['String']>;
};

export type DeviceMeterInstallUpdateInput = {
  Installed?: InputMaybe<Scalars['Boolean']>;
  Serial?: InputMaybe<Scalars['String']>;
};

export type DeviceMeterUpdateInput = {
  AccreditatedDate?: InputMaybe<Scalars['Date']>;
  AccreditationDocument?: InputMaybe<Scalars['String']>;
  AccreditationType?: InputMaybe<Scalars['String']>;
  AppovalDate?: InputMaybe<Scalars['Date']>;
  AppovalDecision?: InputMaybe<Scalars['String']>;
  Approvaled?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  ExpiryDate?: InputMaybe<Scalars['Date']>;
  InstallIndex?: InputMaybe<Scalars['Float']>;
  Installed?: InputMaybe<Scalars['Boolean']>;
  Marks?: InputMaybe<Scalars['String']>;
  Model?: InputMaybe<Scalars['String']>;
  Nationality?: InputMaybe<Scalars['String']>;
  Provider?: InputMaybe<Scalars['String']>;
  ReceiptDate?: InputMaybe<Scalars['Date']>;
  Serial?: InputMaybe<Scalars['String']>;
  SerialTransmitter?: InputMaybe<Scalars['String']>;
  Size?: InputMaybe<Scalars['Int']>;
  Status?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type DeviceSiteConfig = {
  __typename?: 'DeviceSiteConfig';
  BeginTime?: Maybe<Scalars['Date']>;
  Forward?: Maybe<Scalars['Int']>;
  Interval?: Maybe<Scalars['Int']>;
  LoggerId?: Maybe<Scalars['String']>;
  Pressure?: Maybe<Scalars['Int']>;
  Pressure1?: Maybe<Scalars['Int']>;
  Reverse?: Maybe<Scalars['Int']>;
  SiteId?: Maybe<Scalars['String']>;
  Tel?: Maybe<Scalars['String']>;
  ZoomInit?: Maybe<Scalars['Int']>;
  ZoomOn?: Maybe<Scalars['Int']>;
  _id: Scalars['ID'];
};

export type DeviceSiteConfigInsertInput = {
  BeginTime?: InputMaybe<Scalars['Date']>;
  Forward?: InputMaybe<Scalars['Int']>;
  Interval?: InputMaybe<Scalars['Int']>;
  LoggerId?: InputMaybe<Scalars['String']>;
  Pressure?: InputMaybe<Scalars['Int']>;
  Pressure1?: InputMaybe<Scalars['Int']>;
  Reverse?: InputMaybe<Scalars['Int']>;
  SiteId?: InputMaybe<Scalars['String']>;
  Tel?: InputMaybe<Scalars['String']>;
  ZoomInit?: InputMaybe<Scalars['Int']>;
  ZoomOn?: InputMaybe<Scalars['Int']>;
};

export type DeviceSiteConfigUpdateInput = {
  BeginTime?: InputMaybe<Scalars['Date']>;
  Forward?: InputMaybe<Scalars['Int']>;
  Interval?: InputMaybe<Scalars['Int']>;
  LoggerId?: InputMaybe<Scalars['String']>;
  Pressure?: InputMaybe<Scalars['Int']>;
  Pressure1?: InputMaybe<Scalars['Int']>;
  Reverse?: InputMaybe<Scalars['Int']>;
  SiteId?: InputMaybe<Scalars['String']>;
  Tel?: InputMaybe<Scalars['String']>;
  ZoomInit?: InputMaybe<Scalars['Int']>;
  ZoomOn?: InputMaybe<Scalars['Int']>;
  _id: Scalars['ID'];
};

export type DeviceStatus = {
  __typename?: 'DeviceStatus';
  Description?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
};

export type DeviceTransmitter = {
  __typename?: 'DeviceTransmitter';
  AccreditatedDate?: Maybe<Scalars['Date']>;
  AccreditationDocument?: Maybe<Scalars['String']>;
  AccreditationType?: Maybe<Scalars['String']>;
  AppovalDate?: Maybe<Scalars['Date']>;
  AppovalDecision?: Maybe<Scalars['String']>;
  Approvaled?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  InstallIndex?: Maybe<Scalars['Float']>;
  Installed?: Maybe<Scalars['Boolean']>;
  Marks?: Maybe<Scalars['String']>;
  MeterSerial?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['String']>;
  ReceiptDate?: Maybe<Scalars['Date']>;
  Serial?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type DeviceTransmitterInsertInput = {
  AccreditatedDate?: InputMaybe<Scalars['Date']>;
  AccreditationDocument?: InputMaybe<Scalars['String']>;
  AccreditationType?: InputMaybe<Scalars['String']>;
  AppovalDate?: InputMaybe<Scalars['Date']>;
  AppovalDecision?: InputMaybe<Scalars['String']>;
  Approvaled?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  ExpiryDate?: InputMaybe<Scalars['Date']>;
  InstallIndex?: InputMaybe<Scalars['Float']>;
  Installed?: InputMaybe<Scalars['Boolean']>;
  Marks?: InputMaybe<Scalars['String']>;
  MeterSerial?: InputMaybe<Scalars['String']>;
  Model?: InputMaybe<Scalars['String']>;
  Provider?: InputMaybe<Scalars['String']>;
  ReceiptDate?: InputMaybe<Scalars['Date']>;
  Serial?: InputMaybe<Scalars['String']>;
  Size?: InputMaybe<Scalars['Int']>;
  Status?: InputMaybe<Scalars['String']>;
};

export type DeviceTransmitterInstallUpdateInput = {
  Installed?: InputMaybe<Scalars['Boolean']>;
  Serial?: InputMaybe<Scalars['String']>;
};

export type DeviceTransmitterUpdateInput = {
  AccreditatedDate?: InputMaybe<Scalars['Date']>;
  AccreditationDocument?: InputMaybe<Scalars['String']>;
  AccreditationType?: InputMaybe<Scalars['String']>;
  AppovalDate?: InputMaybe<Scalars['Date']>;
  AppovalDecision?: InputMaybe<Scalars['String']>;
  Approvaled?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  ExpiryDate?: InputMaybe<Scalars['Date']>;
  InstallIndex?: InputMaybe<Scalars['Float']>;
  Installed?: InputMaybe<Scalars['Boolean']>;
  Marks?: InputMaybe<Scalars['String']>;
  MeterSerial?: InputMaybe<Scalars['String']>;
  Model?: InputMaybe<Scalars['String']>;
  Provider?: InputMaybe<Scalars['String']>;
  ReceiptDate?: InputMaybe<Scalars['Date']>;
  Serial?: InputMaybe<Scalars['String']>;
  Size?: InputMaybe<Scalars['Int']>;
  Status?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type HistorySiteLogger = {
  __typename?: 'HistorySiteLogger';
  DateChanged?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  NewMeterIndex?: Maybe<Scalars['Float']>;
  NewMeterSerial?: Maybe<Scalars['String']>;
  OldMeterIndex?: Maybe<Scalars['Float']>;
  OldMeterSerial?: Maybe<Scalars['String']>;
  SiteId?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type HistorySiteLoggerInsertInput = {
  DateChanged?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  NewMeterIndex?: InputMaybe<Scalars['Float']>;
  NewMeterSerial?: InputMaybe<Scalars['String']>;
  OldMeterIndex?: InputMaybe<Scalars['Float']>;
  OldMeterSerial?: InputMaybe<Scalars['String']>;
  SiteId?: InputMaybe<Scalars['String']>;
};

export type HistorySiteLoggerUpdateInput = {
  DateChanged?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  NewMeterIndex?: InputMaybe<Scalars['Float']>;
  NewMeterSerial?: InputMaybe<Scalars['String']>;
  OldMeterIndex?: InputMaybe<Scalars['Float']>;
  OldMeterSerial?: InputMaybe<Scalars['String']>;
  SiteId?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type HistorySiteMeter = {
  __typename?: 'HistorySiteMeter';
  DateChanged?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  NewMeterIndex?: Maybe<Scalars['Float']>;
  NewMeterSerial?: Maybe<Scalars['String']>;
  OldMeterIndex?: Maybe<Scalars['Float']>;
  OldMeterSerial?: Maybe<Scalars['String']>;
  SiteId?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type HistorySiteMeterInsertInput = {
  DateChanged?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  NewMeterIndex?: InputMaybe<Scalars['Float']>;
  NewMeterSerial?: InputMaybe<Scalars['String']>;
  OldMeterIndex?: InputMaybe<Scalars['Float']>;
  OldMeterSerial?: InputMaybe<Scalars['String']>;
  SiteId?: InputMaybe<Scalars['String']>;
};

export type HistorySiteMeterUpdateInput = {
  DateChanged?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  NewMeterIndex?: InputMaybe<Scalars['Float']>;
  NewMeterSerial?: InputMaybe<Scalars['String']>;
  OldMeterIndex?: InputMaybe<Scalars['Float']>;
  OldMeterSerial?: InputMaybe<Scalars['String']>;
  SiteId?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type HistorySiteTransmitter = {
  __typename?: 'HistorySiteTransmitter';
  DateChanged?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  NewMeterIndex?: Maybe<Scalars['Float']>;
  NewMeterSerial?: Maybe<Scalars['String']>;
  OldMeterIndex?: Maybe<Scalars['Float']>;
  OldMeterSerial?: Maybe<Scalars['String']>;
  SiteId?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type HistorySiteTransmitterInsertInput = {
  DateChanged?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  NewMeterIndex?: InputMaybe<Scalars['Float']>;
  NewMeterSerial?: InputMaybe<Scalars['String']>;
  OldMeterIndex?: InputMaybe<Scalars['Float']>;
  OldMeterSerial?: InputMaybe<Scalars['String']>;
  SiteId?: InputMaybe<Scalars['String']>;
};

export type HistorySiteTransmitterUpdateInput = {
  DateChanged?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  NewMeterIndex?: InputMaybe<Scalars['Float']>;
  NewMeterSerial?: InputMaybe<Scalars['String']>;
  OldMeterIndex?: InputMaybe<Scalars['Float']>;
  OldMeterSerial?: InputMaybe<Scalars['String']>;
  SiteId?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type IdOutput = {
  __typename?: 'IdOutput';
  idReturn?: Maybe<Scalars['String']>;
};

export type Index = {
  __typename?: 'Index';
  Location?: Maybe<Scalars['String']>;
  NextPeriodIndex?: Maybe<Scalars['Float']>;
  PreviousPeriodIndex?: Maybe<Scalars['Float']>;
  SiteId?: Maybe<Scalars['String']>;
};

export type IndexInput = {
  Location?: InputMaybe<Scalars['String']>;
  NextPeriodIndex?: InputMaybe<Scalars['Float']>;
  PreviousPeriodIndex?: InputMaybe<Scalars['Float']>;
  SiteId?: InputMaybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  AverageDate?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  AveragePrevTetHoliday?: Maybe<Scalars['Float']>;
  AverageTenDayPrevTetHoliday?: Maybe<Scalars['Float']>;
  DateCalclogger?: Maybe<Array<Maybe<DateCalclogger>>>;
  KFactory?: Maybe<Scalars['Float']>;
  Location?: Maybe<Scalars['String']>;
  NextTetHoliday?: Maybe<Array<Maybe<Scalars['String']>>>;
  NumberLockPeriod?: Maybe<Scalars['Float']>;
  Periods?: Maybe<Array<Maybe<Periods>>>;
  PrevTetHoliday?: Maybe<Array<Maybe<Scalars['String']>>>;
  QuantityLogger?: Maybe<Scalars['Float']>;
  Reason?: Maybe<Scalars['String']>;
  SiteId?: Maybe<Scalars['String']>;
  TenDayPrevTetHoliday?: Maybe<Array<Maybe<Scalars['String']>>>;
  TotalQuantity?: Maybe<Scalars['Float']>;
};

export type LocationInput = {
  AverageDate?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
  AveragePrevTetHoliday?: InputMaybe<Scalars['Float']>;
  AverageTenDayPrevTetHoliday?: InputMaybe<Scalars['Float']>;
  DateCalclogger?: InputMaybe<Array<InputMaybe<DateCalcloggerInput>>>;
  KFactory?: InputMaybe<Scalars['Float']>;
  Location?: InputMaybe<Scalars['String']>;
  NextTetHoliday?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  NumberLockPeriod?: InputMaybe<Scalars['Float']>;
  Periods?: InputMaybe<Array<InputMaybe<PeriodsInput>>>;
  PrevTetHoliday?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  QuantityLogger?: InputMaybe<Scalars['Float']>;
  Reason?: InputMaybe<Scalars['String']>;
  SiteId?: InputMaybe<Scalars['String']>;
  TenDayPrevTetHoliday?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  TotalQuantity?: InputMaybe<Scalars['Float']>;
};

export type LockValve = {
  __typename?: 'LockValve';
  Location?: Maybe<Scalars['String']>;
  SiteId?: Maybe<Scalars['String']>;
};

export type LockValveInput = {
  Location?: InputMaybe<Scalars['String']>;
  SiteId?: InputMaybe<Scalars['String']>;
};

export type Login = {
  __typename?: 'Login';
  Company?: Maybe<Scalars['String']>;
  Role?: Maybe<Scalars['String']>;
  Uid?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type MarkInStatisticMarkSize = {
  __typename?: 'MarkInStatisticMarkSize';
  Mark?: Maybe<Scalars['String']>;
  Models?: Maybe<Array<Maybe<ModelInStatisticMarkSize>>>;
};

export type ModelInStatisticMarkSize = {
  __typename?: 'ModelInStatisticMarkSize';
  Model?: Maybe<Scalars['String']>;
  Sizes?: Maybe<Array<Maybe<SizeInStatisticMarkSize>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  DeleteCover?: Maybe<Scalars['Int']>;
  DeleteDataManual?: Maybe<Scalars['Int']>;
  DeleteDeviceChannelConifg?: Maybe<Scalars['Int']>;
  DeleteDeviceSiteConfig?: Maybe<Scalars['Int']>;
  DeleteHistorySiteLogger?: Maybe<Scalars['Int']>;
  DeleteHistorySiteMeter?: Maybe<Scalars['Int']>;
  DeleteHistorySiteTransmitter?: Maybe<Scalars['Int']>;
  DeleteLogger?: Maybe<Scalars['Int']>;
  DeleteMeter?: Maybe<Scalars['Int']>;
  DeletePrecious?: Maybe<RowModified>;
  DeleteSite?: Maybe<Scalars['Int']>;
  DeleteTransmitter?: Maybe<Scalars['Int']>;
  DeleteUser?: Maybe<Scalars['Int']>;
  InsertCover?: Maybe<Scalars['String']>;
  InsertDataManual?: Maybe<Scalars['String']>;
  InsertDeviceSiteConfig?: Maybe<Scalars['String']>;
  InsertHistorySiteLogger?: Maybe<Scalars['String']>;
  InsertHistorySiteMeter?: Maybe<Scalars['String']>;
  InsertHistorySiteTransmitter?: Maybe<Scalars['String']>;
  InsertLogger?: Maybe<Scalars['String']>;
  InsertMeter?: Maybe<Scalars['String']>;
  InsertPrecious?: Maybe<IdOutput>;
  InsertSite?: Maybe<Scalars['String']>;
  InsertTransmitter?: Maybe<Scalars['String']>;
  InsertUser?: Maybe<Scalars['String']>;
  UpdateActiveUser?: Maybe<Scalars['Int']>;
  UpdateCover?: Maybe<Scalars['Int']>;
  UpdateDataManual?: Maybe<Scalars['Int']>;
  UpdateDeviceChannelConfig?: Maybe<Scalars['String']>;
  UpdateDeviceSiteConfig?: Maybe<Scalars['String']>;
  UpdateHistorySiteLogger?: Maybe<Scalars['Int']>;
  UpdateHistorySiteMeter?: Maybe<Scalars['Int']>;
  UpdateHistorySiteTransmitter?: Maybe<Scalars['Int']>;
  UpdateLogger?: Maybe<Scalars['Int']>;
  UpdateLoggerInstall?: Maybe<Scalars['Int']>;
  UpdateMeter?: Maybe<Scalars['Int']>;
  UpdateMeterInstall?: Maybe<Scalars['Int']>;
  UpdatePassword?: Maybe<Scalars['Int']>;
  UpdatePrecious?: Maybe<IdOutput>;
  UpdateSite?: Maybe<Scalars['String']>;
  UpdateSiteLoggerDateChange?: Maybe<Scalars['Int']>;
  UpdateSiteMeterDateChange?: Maybe<Scalars['Int']>;
  UpdateSiteTransmitterDateChange?: Maybe<Scalars['Int']>;
  UpdateTransmitter?: Maybe<Scalars['Int']>;
  UpdateTransmitterInstall?: Maybe<Scalars['Int']>;
  UpdateUser?: Maybe<Scalars['Int']>;
};


export type MutationDeleteCoverArgs = {
  cover?: InputMaybe<SiteCoverUpdateInput>;
};


export type MutationDeleteDataManualArgs = {
  dataManual?: InputMaybe<DataManualUpdateInput>;
};


export type MutationDeleteDeviceChannelConifgArgs = {
  channel?: InputMaybe<ChannelInput>;
};


export type MutationDeleteDeviceSiteConfigArgs = {
  siteConfig?: InputMaybe<DeviceSiteConfigUpdateInput>;
};


export type MutationDeleteHistorySiteLoggerArgs = {
  history?: InputMaybe<HistorySiteLoggerUpdateInput>;
};


export type MutationDeleteHistorySiteMeterArgs = {
  history?: InputMaybe<HistorySiteMeterUpdateInput>;
};


export type MutationDeleteHistorySiteTransmitterArgs = {
  history?: InputMaybe<HistorySiteTransmitterUpdateInput>;
};


export type MutationDeleteLoggerArgs = {
  logger?: InputMaybe<DeviceLoggerUpdateInput>;
};


export type MutationDeleteMeterArgs = {
  meter?: InputMaybe<DeviceMeterUpdateInput>;
};


export type MutationDeletePreciousArgs = {
  precious?: InputMaybe<PreciousUpdateInput>;
};


export type MutationDeleteSiteArgs = {
  site?: InputMaybe<SiteInput>;
};


export type MutationDeleteTransmitterArgs = {
  transmitter?: InputMaybe<DeviceTransmitterUpdateInput>;
};


export type MutationDeleteUserArgs = {
  user?: InputMaybe<UserUpdateInput>;
};


export type MutationInsertCoverArgs = {
  cover?: InputMaybe<SiteCoverInsertInput>;
};


export type MutationInsertDataManualArgs = {
  dataManual?: InputMaybe<DataManualInsertInput>;
};


export type MutationInsertDeviceSiteConfigArgs = {
  siteConfig?: InputMaybe<DeviceSiteConfigInsertInput>;
};


export type MutationInsertHistorySiteLoggerArgs = {
  history?: InputMaybe<HistorySiteLoggerInsertInput>;
};


export type MutationInsertHistorySiteMeterArgs = {
  history?: InputMaybe<HistorySiteMeterInsertInput>;
};


export type MutationInsertHistorySiteTransmitterArgs = {
  history?: InputMaybe<HistorySiteTransmitterInsertInput>;
};


export type MutationInsertLoggerArgs = {
  logger?: InputMaybe<DeviceLoggerInsertInput>;
};


export type MutationInsertMeterArgs = {
  meter?: InputMaybe<DeviceMeterInsertInput>;
};


export type MutationInsertPreciousArgs = {
  precious?: InputMaybe<PreciousInput>;
};


export type MutationInsertSiteArgs = {
  site?: InputMaybe<SiteInput>;
};


export type MutationInsertTransmitterArgs = {
  transmitter?: InputMaybe<DeviceTransmitterInsertInput>;
};


export type MutationInsertUserArgs = {
  user?: InputMaybe<UserInsertInput>;
};


export type MutationUpdateActiveUserArgs = {
  user?: InputMaybe<UpdateActiveUserInput>;
};


export type MutationUpdateCoverArgs = {
  cover?: InputMaybe<SiteCoverUpdateInput>;
};


export type MutationUpdateDataManualArgs = {
  dataManual?: InputMaybe<DataManualUpdateInput>;
};


export type MutationUpdateDeviceChannelConfigArgs = {
  channel?: InputMaybe<ChannelInput>;
};


export type MutationUpdateDeviceSiteConfigArgs = {
  siteConfig?: InputMaybe<DeviceSiteConfigUpdateInput>;
};


export type MutationUpdateHistorySiteLoggerArgs = {
  history?: InputMaybe<HistorySiteLoggerUpdateInput>;
};


export type MutationUpdateHistorySiteMeterArgs = {
  history?: InputMaybe<HistorySiteMeterUpdateInput>;
};


export type MutationUpdateHistorySiteTransmitterArgs = {
  history?: InputMaybe<HistorySiteTransmitterUpdateInput>;
};


export type MutationUpdateLoggerArgs = {
  logger?: InputMaybe<DeviceLoggerUpdateInput>;
};


export type MutationUpdateLoggerInstallArgs = {
  logger?: InputMaybe<DeviceLoggerInstallUpdateInput>;
};


export type MutationUpdateMeterArgs = {
  meter?: InputMaybe<DeviceMeterUpdateInput>;
};


export type MutationUpdateMeterInstallArgs = {
  meter?: InputMaybe<DeviceMeterInstallUpdateInput>;
};


export type MutationUpdatePasswordArgs = {
  user?: InputMaybe<UserUpdatePasswordInput>;
};


export type MutationUpdatePreciousArgs = {
  precious?: InputMaybe<PreciousUpdateInput>;
};


export type MutationUpdateSiteArgs = {
  site?: InputMaybe<SiteInput>;
};


export type MutationUpdateSiteLoggerDateChangeArgs = {
  site?: InputMaybe<SiteLoggerDateChangeUpdateInput>;
};


export type MutationUpdateSiteMeterDateChangeArgs = {
  site?: InputMaybe<SiteMeterDateChangeUpdateInput>;
};


export type MutationUpdateSiteTransmitterDateChangeArgs = {
  site?: InputMaybe<SiteTransmitterDateChangeUpdateInput>;
};


export type MutationUpdateTransmitterArgs = {
  transmitter?: InputMaybe<DeviceTransmitterUpdateInput>;
};


export type MutationUpdateTransmitterInstallArgs = {
  transmitter?: InputMaybe<DeviceTransmitterInstallUpdateInput>;
};


export type MutationUpdateUserArgs = {
  user?: InputMaybe<UserUpdateInput>;
};

export type Periods = {
  __typename?: 'Periods';
  Period?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Float']>;
};

export type PeriodsInput = {
  Period?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Float']>;
};

export type Precious = {
  __typename?: 'Precious';
  Company: Scalars['String'];
  CompanyName?: Maybe<Scalars['String']>;
  CreateAt?: Maybe<Scalars['String']>;
  End?: Maybe<Scalars['String']>;
  Index?: Maybe<Array<Maybe<Index>>>;
  Location?: Maybe<Array<Maybe<Location>>>;
  LockValve?: Maybe<Array<Maybe<LockValve>>>;
  Period?: Maybe<Scalars['String']>;
  Start?: Maybe<Scalars['String']>;
  SubtractWaterB1?: Maybe<Array<Maybe<SubtractWaterB1>>>;
  SubtractWaterB2?: Maybe<Array<Maybe<SubtractWaterB2>>>;
  UsernameCreated?: Maybe<Scalars['String']>;
  WaterCustomer?: Maybe<Array<Maybe<WaterCustomer>>>;
  _id: Scalars['ID'];
};

export type PreciousInput = {
  Company?: InputMaybe<Scalars['String']>;
  CompanyName?: InputMaybe<Scalars['String']>;
  CreateAt?: InputMaybe<Scalars['String']>;
  End?: InputMaybe<Scalars['String']>;
  Index?: InputMaybe<Array<InputMaybe<IndexInput>>>;
  Location?: InputMaybe<Array<InputMaybe<LocationInput>>>;
  LockValve?: InputMaybe<Array<InputMaybe<LockValveInput>>>;
  Period?: InputMaybe<Scalars['String']>;
  Start?: InputMaybe<Scalars['String']>;
  SubtractWaterB1?: InputMaybe<Array<InputMaybe<SubtractWaterB1Input>>>;
  SubtractWaterB2?: InputMaybe<Array<InputMaybe<SubtractWaterB2Input>>>;
  UsernameCreated?: InputMaybe<Scalars['String']>;
  WaterCustomer?: InputMaybe<Array<InputMaybe<WaterCustomerInput>>>;
};

export type PreciousUpdateInput = {
  Company?: InputMaybe<Scalars['String']>;
  CompanyName?: InputMaybe<Scalars['String']>;
  CreateAt?: InputMaybe<Scalars['String']>;
  End?: InputMaybe<Scalars['String']>;
  Index?: InputMaybe<Array<InputMaybe<IndexInput>>>;
  Location?: InputMaybe<Array<InputMaybe<LocationInput>>>;
  LockValve?: InputMaybe<Array<InputMaybe<LockValveInput>>>;
  Period?: InputMaybe<Scalars['String']>;
  Start?: InputMaybe<Scalars['String']>;
  SubtractWaterB1?: InputMaybe<Array<InputMaybe<SubtractWaterB1Input>>>;
  SubtractWaterB2?: InputMaybe<Array<InputMaybe<SubtractWaterB2Input>>>;
  UsernameCreated?: InputMaybe<Scalars['String']>;
  WaterCustomer?: InputMaybe<Array<InputMaybe<WaterCustomerInput>>>;
  _id?: InputMaybe<Scalars['ID']>;
};

export type Quantity = {
  __typename?: 'Quantity';
  IsEnoughData?: Maybe<Scalars['Boolean']>;
  TimeStamp?: Maybe<Scalars['Date']>;
  Value?: Maybe<Scalars['Float']>;
};

export type QuantityDayCompany = {
  __typename?: 'QuantityDayCompany';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityDayGroup = {
  __typename?: 'QuantityDayGroup';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  IstDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  QndDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityDayGroup2 = {
  __typename?: 'QuantityDayGroup2';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  IstDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  QndDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityDayGroup3 = {
  __typename?: 'QuantityDayGroup3';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  IstDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  QndDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityDayGroup4 = {
  __typename?: 'QuantityDayGroup4';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  IstDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  QndDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityDayGroup5 = {
  __typename?: 'QuantityDayGroup5';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  IstDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  QndDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityDayLevel = {
  __typename?: 'QuantityDayLevel';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityDayTotal = {
  __typename?: 'QuantityDayTotal';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityDayWaterSupply = {
  __typename?: 'QuantityDayWaterSupply';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  IstDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  QndDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityLoggerByTimeStamp = {
  __typename?: 'QuantityLoggerByTimeStamp';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  IstDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  QndDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityLoggerDay = {
  __typename?: 'QuantityLoggerDay';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  IstDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  QndDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type QuantityLoggerDayWaterSupply = {
  __typename?: 'QuantityLoggerDayWaterSupply';
  Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  IstDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  ListQuantity?: Maybe<Array<Maybe<Quantity>>>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  QndDoNotCalculateReverse?: Maybe<Scalars['Int']>;
  SiteId: Scalars['String'];
  Size?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  GetAllCorverMeterial?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllCoverH?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GetAllCoverID?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllCoverL?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GetAllCoverNL?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GetAllCoverW?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GetAllDataManual?: Maybe<Array<Maybe<DataManual>>>;
  GetAllDeviceChannelConifg?: Maybe<Array<Maybe<Channel>>>;
  GetAllDeviceSiteConfig?: Maybe<Array<Maybe<DeviceSiteConfig>>>;
  GetAllDeviceStatus?: Maybe<Array<Maybe<DeviceStatus>>>;
  GetAllDistrict?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllGroup?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllGroup2?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllGroup3?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllGroup4?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllGroup5?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllHistorySiteLogger?: Maybe<Array<Maybe<HistorySiteLogger>>>;
  GetAllHistorySiteMeter?: Maybe<Array<Maybe<HistorySiteMeter>>>;
  GetAllHistorySiteTransmitter?: Maybe<Array<Maybe<HistorySiteTransmitter>>>;
  GetAllLevel?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllLogger?: Maybe<Array<Maybe<DeviceLogger>>>;
  GetAllLoggerNotInstall?: Maybe<Array<Maybe<DeviceLogger>>>;
  GetAllMeter?: Maybe<Array<Maybe<DeviceMeter>>>;
  GetAllMeterAccreditationType?: Maybe<Array<Maybe<DeviceMeterAccreditationType>>>;
  GetAllMeterNotInstall?: Maybe<Array<Maybe<DeviceMeter>>>;
  GetAllOldSiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllPrecious?: Maybe<Array<Maybe<Precious>>>;
  GetAllRole?: Maybe<Array<Maybe<Role>>>;
  GetAllSiteAndChannel?: Maybe<Array<SiteAndChannel>>;
  GetAllSiteAvailabilities?: Maybe<Array<Maybe<SiteAvailabilities>>>;
  GetAllSiteCompanies?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllSiteCover?: Maybe<Array<Maybe<SiteCover>>>;
  GetAllSiteGroup?: Maybe<Array<Maybe<SiteGroup>>>;
  GetAllSiteGroup2S?: Maybe<Array<Maybe<SiteGroup2S>>>;
  GetAllSiteGroup3S?: Maybe<Array<Maybe<SiteGroup3S>>>;
  GetAllSiteGroup4S?: Maybe<Array<Maybe<SiteGroup4S>>>;
  GetAllSiteGroup5S?: Maybe<Array<Maybe<SiteGroup5S>>>;
  GetAllSiteLevel?: Maybe<Array<Maybe<SiteLevel>>>;
  GetAllSiteMeterDirection?: Maybe<Array<Maybe<SiteMeterDirection>>>;
  GetAllSiteStatus?: Maybe<Array<Maybe<SiteStatus>>>;
  GetAllSites: Array<Maybe<Site>>;
  GetAllStaffs?: Maybe<Array<Maybe<UserStaff>>>;
  GetAllTransmitter?: Maybe<Array<Maybe<DeviceTransmitter>>>;
  GetAllTransmitterNotInstall?: Maybe<Array<Maybe<DeviceTransmitter>>>;
  GetAllUnit?: Maybe<Array<Maybe<Unit>>>;
  GetAllUser?: Maybe<Array<Maybe<User>>>;
  GetAllUserAndStaff?: Maybe<Array<Maybe<UserAndStaff>>>;
  GetAllViewGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetChannelByLoggerId?: Maybe<Array<Maybe<Channel>>>;
  GetCompanies?: Maybe<Array<Company>>;
  GetDataLoggerByLastRecord?: Maybe<Array<DataLogger>>;
  GetDataLoggerByTimeStamp?: Maybe<Array<DataLogger>>;
  GetDataManualBySiteId?: Maybe<Array<Maybe<DataManual>>>;
  GetDataManualBySiteIdAndTimeStamp?: Maybe<Array<Maybe<DataManual>>>;
  GetHistoryLoggerBySiteId?: Maybe<Array<Maybe<HistorySiteLogger>>>;
  GetHistoryMeterBySiteId?: Maybe<Array<Maybe<HistorySiteMeter>>>;
  GetHistoryTransmitterBySiteId?: Maybe<Array<Maybe<HistorySiteTransmitter>>>;
  GetLoggerMarks?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetLoggerModel?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetLoggerProvider?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetMeterMarks?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetMeterModel?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetMeterNationalities?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetMeterProvider?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetMeterSize?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GetPreciousByCompany?: Maybe<Array<Maybe<Precious>>>;
  GetSiteById?: Maybe<Site>;
  GetSiteByWaterSubtractB2ForTA?: Maybe<Array<Maybe<Site>>>;
  GetSiteByWaterSupply: Array<Site>;
  GetStatisticAccreditationAndExpiryDate?: Maybe<Array<Maybe<StatisticAccreditationAndExpiryDate>>>;
  GetStatisticAccredited?: Maybe<Array<Maybe<StatisticAccredited>>>;
  GetStatisticBatteryChange?: Maybe<Array<Maybe<StatisticBatteryChange>>>;
  GetStatisticBatteryChangeByYearUsing?: Maybe<Array<Maybe<StatisticBatteryChangeByYearUsing>>>;
  GetStatisticCustomChoiceLogger?: Maybe<Array<Maybe<StatisticCustomChoiceLogger>>>;
  GetStatisticCustomChoiceMarkSize?: Maybe<Array<Maybe<StatisticCustomChoiceMarkSize>>>;
  GetStatisticCustomChoiceMeter?: Maybe<Array<Maybe<StatisticCustomChoiceMeter>>>;
  GetStatisticCustomChoiceSite?: Maybe<Array<Maybe<StatisticCustomChoiceSite>>>;
  GetStatisticCustomChoiceTransmitter?: Maybe<Array<Maybe<StatisticCustomChoiceTransmitter>>>;
  GetStatisticHistoryLoggerAndLoggerBySiteId?: Maybe<Array<Maybe<StatisticHistoryLoggerAndLoggerBySiteId>>>;
  GetStatisticHistoryMeterAndMeterBySiteId?: Maybe<Array<Maybe<StatisticHistoryMeterAndMeterBySiteId>>>;
  GetStatisticHistoryTransmitterAndTransmitterBySiteId?: Maybe<Array<Maybe<StatisticHistoryTransmitterAndTransmitterBySiteId>>>;
  GetStatisticLoggerBatteryChange?: Maybe<Array<Maybe<StatisticLoggerBatteryChange>>>;
  GetStatisticLoggerBatteryChangeByYearUsing?: Maybe<Array<Maybe<StatisticLoggerBatteryChangeByYearUsing>>>;
  GetStatisticLoggerChange?: Maybe<Array<Maybe<StatisticLoggerChange>>>;
  GetStatisticLoggerChangeByYearUsing?: Maybe<Array<Maybe<StatisticLoggerDateChangeByYearUsing>>>;
  GetStatisticMarkSizeXNManager?: Maybe<Array<Maybe<StatisticMarkSizeXnManager>>>;
  GetStatisticMeterChange?: Maybe<Array<Maybe<StatisticMeterChange>>>;
  GetStatisticMeterChangeByYearUsing?: Maybe<Array<Maybe<StatisticMeterDateChangeByYearUsing>>>;
  GetStatisticSiteXNManager?: Maybe<Array<Maybe<StatisticSiteXnManager>>>;
  GetStatisticTransmitterBatteryChange?: Maybe<Array<Maybe<StatisticTransmitterBatteryChange>>>;
  GetStatisticTransmitterBatteryChangeByYearUsing?: Maybe<Array<Maybe<StatisticTransmitterBatteryChangeByYearUsing>>>;
  GetStatisticTransmitterChange?: Maybe<Array<Maybe<StatisticTransmitterChange>>>;
  GetStatisticTransmitterChangeByYearUsing?: Maybe<Array<Maybe<StatisticTransmitterDateChangeByYearUsing>>>;
  GetTransmitterMarks?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetTransmitterModel?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetTransmitterProvider?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetTransmitterSize?: Maybe<Array<Maybe<Scalars['Int']>>>;
  LoginAction?: Maybe<Login>;
  QuantityDayCompany: Array<QuantityDayCompany>;
  QuantityDayGroup: Array<QuantityDayGroup>;
  QuantityDayGroup2: Array<QuantityDayGroup2>;
  QuantityDayGroup3: Array<QuantityDayGroup3>;
  QuantityDayGroup4: Array<QuantityDayGroup4>;
  QuantityDayGroup5: Array<QuantityDayGroup5>;
  QuantityDayLevel: Array<QuantityDayLevel>;
  QuantityDayTotal: Array<QuantityDayTotal>;
  QuantityDayWaterSupply: Array<QuantityDayWaterSupply>;
  QuantityLoggerByTimeStamp: Array<QuantityLoggerByTimeStamp>;
  QuantityLoggerDay: Scalars['Float'];
  QuantityLoggerDayWaterSupply: Array<QuantityLoggerDayWaterSupply>;
  VerifyPassword?: Maybe<Scalars['Int']>;
};


export type QueryGetChannelByLoggerIdArgs = {
  loggerid: Scalars['String'];
};


export type QueryGetDataLoggerByLastRecordArgs = {
  channelid: Scalars['String'];
};


export type QueryGetDataLoggerByTimeStampArgs = {
  channelid: Scalars['String'];
  end: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetDataManualBySiteIdArgs = {
  siteid?: InputMaybe<Scalars['String']>;
};


export type QueryGetDataManualBySiteIdAndTimeStampArgs = {
  end?: InputMaybe<Scalars['String']>;
  siteid?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
};


export type QueryGetHistoryLoggerBySiteIdArgs = {
  siteid?: InputMaybe<Scalars['String']>;
};


export type QueryGetHistoryMeterBySiteIdArgs = {
  siteid?: InputMaybe<Scalars['String']>;
};


export type QueryGetHistoryTransmitterBySiteIdArgs = {
  siteid?: InputMaybe<Scalars['String']>;
};


export type QueryGetPreciousByCompanyArgs = {
  company?: InputMaybe<Scalars['String']>;
};


export type QueryGetSiteByIdArgs = {
  siteid?: InputMaybe<Scalars['String']>;
};


export type QueryGetSiteByWaterSupplyArgs = {
  company: Scalars['String'];
};


export type QueryGetStatisticAccreditationAndExpiryDateArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type QueryGetStatisticAccreditedArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type QueryGetStatisticBatteryChangeArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type QueryGetStatisticBatteryChangeByYearUsingArgs = {
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
};


export type QueryGetStatisticHistoryLoggerAndLoggerBySiteIdArgs = {
  siteid?: InputMaybe<Scalars['String']>;
};


export type QueryGetStatisticHistoryMeterAndMeterBySiteIdArgs = {
  siteid?: InputMaybe<Scalars['String']>;
};


export type QueryGetStatisticHistoryTransmitterAndTransmitterBySiteIdArgs = {
  siteid?: InputMaybe<Scalars['String']>;
};


export type QueryGetStatisticLoggerBatteryChangeArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type QueryGetStatisticLoggerBatteryChangeByYearUsingArgs = {
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
};


export type QueryGetStatisticLoggerChangeArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type QueryGetStatisticLoggerChangeByYearUsingArgs = {
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
};


export type QueryGetStatisticMeterChangeArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type QueryGetStatisticMeterChangeByYearUsingArgs = {
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
};


export type QueryGetStatisticTransmitterBatteryChangeArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type QueryGetStatisticTransmitterBatteryChangeByYearUsingArgs = {
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
};


export type QueryGetStatisticTransmitterChangeArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type QueryGetStatisticTransmitterChangeByYearUsingArgs = {
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
};


export type QueryLoginActionArgs = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryQuantityDayCompanyArgs = {
  company: Scalars['String'];
  end: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityDayGroupArgs = {
  end: Scalars['String'];
  group: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityDayGroup2Args = {
  end: Scalars['String'];
  group: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityDayGroup3Args = {
  end: Scalars['String'];
  group: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityDayGroup4Args = {
  end: Scalars['String'];
  group: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityDayGroup5Args = {
  end: Scalars['String'];
  group: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityDayLevelArgs = {
  end: Scalars['String'];
  level: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityDayTotalArgs = {
  end: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityDayWaterSupplyArgs = {
  company: Scalars['String'];
  end: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityLoggerByTimeStampArgs = {
  company: Scalars['String'];
  end: Scalars['String'];
  siteid: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityLoggerDayArgs = {
  company: Scalars['String'];
  end: Scalars['String'];
  siteid: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityLoggerDayWaterSupplyArgs = {
  company: Scalars['String'];
  end: Scalars['String'];
  start: Scalars['String'];
};


export type QueryVerifyPasswordArgs = {
  Pwd?: InputMaybe<Scalars['String']>;
  Uid?: InputMaybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  Description?: Maybe<Scalars['String']>;
  Role?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type RowModified = {
  __typename?: 'RowModified';
  nRow?: Maybe<Scalars['Int']>;
};

export type Site = {
  __typename?: 'Site';
  Address?: Maybe<Scalars['String']>;
  Availability?: Maybe<Scalars['String']>;
  ChangeIndex?: Maybe<Scalars['Float']>;
  ChangeIndex1?: Maybe<Scalars['Float']>;
  Company?: Maybe<Scalars['String']>;
  CoverID?: Maybe<Scalars['String']>;
  DateOfBatteryChange?: Maybe<Scalars['Date']>;
  DateOfLoggerBatteryChange?: Maybe<Scalars['Date']>;
  DateOfLoggerChange?: Maybe<Scalars['Date']>;
  DateOfMeterChange?: Maybe<Scalars['Date']>;
  DateOfTransmitterBatteryChange?: Maybe<Scalars['Date']>;
  DateOfTransmitterChange?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  Display?: Maybe<Scalars['Boolean']>;
  District?: Maybe<Scalars['String']>;
  Group?: Maybe<Scalars['String']>;
  Group2?: Maybe<Scalars['String']>;
  Group3?: Maybe<Scalars['String']>;
  Group4?: Maybe<Scalars['String']>;
  Group5?: Maybe<Scalars['String']>;
  IsErrorBattery?: Maybe<Scalars['Boolean']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  IstDoNotCalculateReverse?: Maybe<Scalars['Boolean']>;
  Latitude?: Maybe<Scalars['Float']>;
  Level?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Logger?: Maybe<Scalars['String']>;
  Longitude?: Maybe<Scalars['Float']>;
  Meter?: Maybe<Scalars['String']>;
  MeterDirection?: Maybe<Scalars['String']>;
  OldId?: Maybe<Scalars['String']>;
  ProductionCompany?: Maybe<Scalars['String']>;
  Property?: Maybe<Scalars['Boolean']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  QndDoNotCalculateReverse?: Maybe<Scalars['Boolean']>;
  StaffId?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  TakeoverDate?: Maybe<Scalars['Date']>;
  Takeovered?: Maybe<Scalars['Boolean']>;
  Transmitter?: Maybe<Scalars['String']>;
  UsingLogger?: Maybe<Scalars['Boolean']>;
  ViewGroup?: Maybe<Scalars['String']>;
  _id: Scalars['String'];
};

export type SiteAndChannel = {
  __typename?: 'SiteAndChannel';
  Address?: Maybe<Scalars['String']>;
  Channels?: Maybe<Array<Channel>>;
  Company?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  District?: Maybe<Scalars['String']>;
  Group?: Maybe<Scalars['String']>;
  Group2?: Maybe<Scalars['String']>;
  Group3?: Maybe<Scalars['String']>;
  Group4?: Maybe<Scalars['String']>;
  Group5?: Maybe<Scalars['String']>;
  IsErrorBattery?: Maybe<Scalars['Boolean']>;
  Latitude?: Maybe<Scalars['Float']>;
  Level?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  LoggerId?: Maybe<Scalars['String']>;
  Longitude?: Maybe<Scalars['Float']>;
  OldId?: Maybe<Scalars['String']>;
  _id: Scalars['String'];
};

export type SiteAvailabilities = {
  __typename?: 'SiteAvailabilities';
  Availability?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type SiteCover = {
  __typename?: 'SiteCover';
  CoverH?: Maybe<Scalars['Int']>;
  CoverID?: Maybe<Scalars['String']>;
  CoverL?: Maybe<Scalars['Int']>;
  CoverMeterial?: Maybe<Scalars['String']>;
  CoverNL?: Maybe<Scalars['Int']>;
  CoverW?: Maybe<Scalars['Int']>;
  _id: Scalars['ID'];
};

export type SiteCoverInsertInput = {
  CoverH?: InputMaybe<Scalars['Int']>;
  CoverID?: InputMaybe<Scalars['String']>;
  CoverL?: InputMaybe<Scalars['Int']>;
  CoverMeterial?: InputMaybe<Scalars['String']>;
  CoverNL?: InputMaybe<Scalars['Int']>;
  CoverW?: InputMaybe<Scalars['Int']>;
};

export type SiteCoverUpdateInput = {
  CoverH?: InputMaybe<Scalars['Int']>;
  CoverID?: InputMaybe<Scalars['String']>;
  CoverL?: InputMaybe<Scalars['Int']>;
  CoverMeterial?: InputMaybe<Scalars['String']>;
  CoverNL?: InputMaybe<Scalars['Int']>;
  CoverW?: InputMaybe<Scalars['Int']>;
  _id: Scalars['ID'];
};

export type SiteGroup = {
  __typename?: 'SiteGroup';
  Description?: Maybe<Scalars['String']>;
  Group?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type SiteGroup2S = {
  __typename?: 'SiteGroup2S';
  Description?: Maybe<Scalars['String']>;
  Group?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type SiteGroup3S = {
  __typename?: 'SiteGroup3S';
  Description?: Maybe<Scalars['String']>;
  Group?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type SiteGroup4S = {
  __typename?: 'SiteGroup4S';
  Description?: Maybe<Scalars['String']>;
  Group?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type SiteGroup5S = {
  __typename?: 'SiteGroup5S';
  Description?: Maybe<Scalars['String']>;
  Group?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type SiteInput = {
  Address?: InputMaybe<Scalars['String']>;
  Availability?: InputMaybe<Scalars['String']>;
  ChangeIndex?: InputMaybe<Scalars['Float']>;
  ChangeIndex1?: InputMaybe<Scalars['Float']>;
  Company?: InputMaybe<Scalars['String']>;
  CoverID?: InputMaybe<Scalars['String']>;
  DateOfBatteryChange?: InputMaybe<Scalars['Date']>;
  DateOfLoggerBatteryChange?: InputMaybe<Scalars['Date']>;
  DateOfLoggerChange?: InputMaybe<Scalars['Date']>;
  DateOfMeterChange?: InputMaybe<Scalars['Date']>;
  DateOfTransmitterBatteryChange?: InputMaybe<Scalars['Date']>;
  DateOfTransmitterChange?: InputMaybe<Scalars['Date']>;
  Description?: InputMaybe<Scalars['String']>;
  DescriptionOfChange?: InputMaybe<Scalars['String']>;
  Display?: InputMaybe<Scalars['Boolean']>;
  District?: InputMaybe<Scalars['String']>;
  Group?: InputMaybe<Scalars['String']>;
  Group2?: InputMaybe<Scalars['String']>;
  Group3?: InputMaybe<Scalars['String']>;
  Group4?: InputMaybe<Scalars['String']>;
  Group5?: InputMaybe<Scalars['String']>;
  IstDistributionCompany?: InputMaybe<Scalars['String']>;
  IstDoNotCalculateReverse?: InputMaybe<Scalars['Boolean']>;
  Latitude?: InputMaybe<Scalars['Float']>;
  Level?: InputMaybe<Scalars['String']>;
  Location?: InputMaybe<Scalars['String']>;
  Logger?: InputMaybe<Scalars['String']>;
  Longitude?: InputMaybe<Scalars['Float']>;
  Meter?: InputMaybe<Scalars['String']>;
  MeterDirection?: InputMaybe<Scalars['String']>;
  OldId?: InputMaybe<Scalars['String']>;
  ProductionCompany?: InputMaybe<Scalars['String']>;
  Property?: InputMaybe<Scalars['Boolean']>;
  QndDistributionCompany?: InputMaybe<Scalars['String']>;
  QndDoNotCalculateReverse?: InputMaybe<Scalars['Boolean']>;
  StaffId?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
  TakeoverDate?: InputMaybe<Scalars['Date']>;
  Takeovered?: InputMaybe<Scalars['Boolean']>;
  Transmitter?: InputMaybe<Scalars['String']>;
  UsingLogger?: InputMaybe<Scalars['Boolean']>;
  ViewGroup?: InputMaybe<Scalars['String']>;
  _id: Scalars['String'];
};

export type SiteLevel = {
  __typename?: 'SiteLevel';
  Description?: Maybe<Scalars['String']>;
  Level?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type SiteLoggerDateChangeUpdateInput = {
  DateOfLoggerChange?: InputMaybe<Scalars['Date']>;
  Logger?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['String']>;
};

export type SiteMeterDateChangeUpdateInput = {
  DateOfMeterChange?: InputMaybe<Scalars['Date']>;
  Meter?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['String']>;
};

export type SiteMeterDirection = {
  __typename?: 'SiteMeterDirection';
  Description?: Maybe<Scalars['String']>;
  Direction?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type SiteStatus = {
  __typename?: 'SiteStatus';
  Description?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type SiteTransmitterDateChangeUpdateInput = {
  DateOfTransmitterChange?: InputMaybe<Scalars['Date']>;
  Transmitter?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['String']>;
};

export type SizeInStatisticMarkSize = {
  __typename?: 'SizeInStatisticMarkSize';
  Companies?: Maybe<Array<Maybe<CompanyInStatisticMarkSize>>>;
  Size?: Maybe<Scalars['String']>;
};

export type StatisticAccreditationAndExpiryDate = {
  __typename?: 'StatisticAccreditationAndExpiryDate';
  AccreditationDocument?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticAccredited = {
  __typename?: 'StatisticAccredited';
  AccreditationDocument?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticBatteryChange = {
  __typename?: 'StatisticBatteryChange';
  AccreditationDocument?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  Id?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Meter?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Transmitter?: Maybe<Scalars['String']>;
};

export type StatisticBatteryChangeByYearUsing = {
  __typename?: 'StatisticBatteryChangeByYearUsing';
  Company?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticCustomChoiceLogger = {
  __typename?: 'StatisticCustomChoiceLogger';
  Description?: Maybe<Scalars['String']>;
  Installed?: Maybe<Scalars['Boolean']>;
  Location?: Maybe<Scalars['String']>;
  LoggerId?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['String']>;
  ReceiptDate?: Maybe<Scalars['Date']>;
  Serial?: Maybe<Scalars['String']>;
  SiteCompany?: Maybe<Scalars['String']>;
  SiteId?: Maybe<Scalars['String']>;
  SiteStatus?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
};

export type StatisticCustomChoiceMarkSize = {
  __typename?: 'StatisticCustomChoiceMarkSize';
  AccreditationDocument?: Maybe<Scalars['String']>;
  AccreditationType?: Maybe<Scalars['String']>;
  AccreditedDate?: Maybe<Scalars['Date']>;
  ApprovalDecision?: Maybe<Scalars['String']>;
  Approved?: Maybe<Scalars['Boolean']>;
  Availability?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  DateOfMeterChange?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  Group?: Maybe<Scalars['String']>;
  Group2?: Maybe<Scalars['String']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  Level?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Logger?: Maybe<Scalars['String']>;
  LoggerModel?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Meter?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  ProductionCompany?: Maybe<Scalars['String']>;
  Property?: Maybe<Scalars['Boolean']>;
  Provider?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  Takeovered?: Maybe<Scalars['Boolean']>;
  Transmitter?: Maybe<Scalars['String']>;
  UsingLogger?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticCustomChoiceMeter = {
  __typename?: 'StatisticCustomChoiceMeter';
  AccreditationDocument?: Maybe<Scalars['String']>;
  AccreditationType?: Maybe<Scalars['String']>;
  AccreditedDate?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  InitialIndex?: Maybe<Scalars['Float']>;
  Installed?: Maybe<Scalars['Boolean']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  Nationality?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['String']>;
  ReceiptDate?: Maybe<Scalars['Date']>;
  Serial?: Maybe<Scalars['String']>;
  SiteCompany?: Maybe<Scalars['String']>;
  SiteId?: Maybe<Scalars['String']>;
  SiteStatus?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  TransmitterSerial?: Maybe<Scalars['String']>;
};

export type StatisticCustomChoiceSite = {
  __typename?: 'StatisticCustomChoiceSite';
  AccreditationDocument?: Maybe<Scalars['String']>;
  AccreditationType?: Maybe<Scalars['String']>;
  AccreditedDate?: Maybe<Scalars['Date']>;
  ApprovalDecision?: Maybe<Scalars['String']>;
  Approved?: Maybe<Scalars['Boolean']>;
  Availability?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  DateOfMeterChange?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  Group?: Maybe<Scalars['String']>;
  Group2?: Maybe<Scalars['String']>;
  IstDistributionCompany?: Maybe<Scalars['String']>;
  Level?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Logger?: Maybe<Scalars['String']>;
  LoggerModel?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Meter?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  ProductionCompany?: Maybe<Scalars['String']>;
  Property?: Maybe<Scalars['Boolean']>;
  Provider?: Maybe<Scalars['String']>;
  QndDistributionCompany?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  Takeovered?: Maybe<Scalars['Boolean']>;
  Transmitter?: Maybe<Scalars['String']>;
  UsingLogger?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticCustomChoiceTransmitter = {
  __typename?: 'StatisticCustomChoiceTransmitter';
  Description?: Maybe<Scalars['String']>;
  InitialIndex?: Maybe<Scalars['Float']>;
  Installed?: Maybe<Scalars['Boolean']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['String']>;
  ReceiptDate?: Maybe<Scalars['Date']>;
  Serial?: Maybe<Scalars['String']>;
  SiteCompany?: Maybe<Scalars['String']>;
  SiteId?: Maybe<Scalars['String']>;
  SiteStatus?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
};

export type StatisticHistoryLoggerAndLoggerBySiteId = {
  __typename?: 'StatisticHistoryLoggerAndLoggerBySiteId';
  DateChanged?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  NewIndex?: Maybe<Scalars['Float']>;
  NewMarks?: Maybe<Scalars['String']>;
  NewModel?: Maybe<Scalars['String']>;
  NewProvider?: Maybe<Scalars['String']>;
  NewSerial?: Maybe<Scalars['String']>;
  OldIndex?: Maybe<Scalars['Float']>;
  OldMarks?: Maybe<Scalars['String']>;
  OldModel?: Maybe<Scalars['String']>;
  OldProvider?: Maybe<Scalars['String']>;
  OldSerial?: Maybe<Scalars['String']>;
  STT?: Maybe<Scalars['Int']>;
};

export type StatisticHistoryMeterAndMeterBySiteId = {
  __typename?: 'StatisticHistoryMeterAndMeterBySiteId';
  AccreditationDocument?: Maybe<Scalars['String']>;
  DateChanged?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  NewIndex?: Maybe<Scalars['Float']>;
  NewMarks?: Maybe<Scalars['String']>;
  NewModel?: Maybe<Scalars['String']>;
  NewProvider?: Maybe<Scalars['String']>;
  NewSerial?: Maybe<Scalars['String']>;
  NewSize?: Maybe<Scalars['Int']>;
  OldIndex?: Maybe<Scalars['Float']>;
  OldMarks?: Maybe<Scalars['String']>;
  OldModel?: Maybe<Scalars['String']>;
  OldProvider?: Maybe<Scalars['String']>;
  OldSerial?: Maybe<Scalars['String']>;
  OldSize?: Maybe<Scalars['Int']>;
  STT?: Maybe<Scalars['Int']>;
};

export type StatisticHistoryTransmitterAndTransmitterBySiteId = {
  __typename?: 'StatisticHistoryTransmitterAndTransmitterBySiteId';
  DateChanged?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  NewIndex?: Maybe<Scalars['Float']>;
  NewMarks?: Maybe<Scalars['String']>;
  NewModel?: Maybe<Scalars['String']>;
  NewProvider?: Maybe<Scalars['String']>;
  NewSerial?: Maybe<Scalars['String']>;
  NewSize?: Maybe<Scalars['Int']>;
  OldIndex?: Maybe<Scalars['Float']>;
  OldMarks?: Maybe<Scalars['String']>;
  OldModel?: Maybe<Scalars['String']>;
  OldProvider?: Maybe<Scalars['String']>;
  OldSerial?: Maybe<Scalars['String']>;
  OldSize?: Maybe<Scalars['Int']>;
  STT?: Maybe<Scalars['Int']>;
};

export type StatisticLoggerBatteryChange = {
  __typename?: 'StatisticLoggerBatteryChange';
  AccreditationDocument?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  Id?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Meter?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Transmitter?: Maybe<Scalars['String']>;
};

export type StatisticLoggerBatteryChangeByYearUsing = {
  __typename?: 'StatisticLoggerBatteryChangeByYearUsing';
  Company?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticLoggerChange = {
  __typename?: 'StatisticLoggerChange';
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  NewLogger?: Maybe<Scalars['String']>;
  OldLogger?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticLoggerDateChangeByYearUsing = {
  __typename?: 'StatisticLoggerDateChangeByYearUsing';
  Company?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticMarkSizeXnManager = {
  __typename?: 'StatisticMarkSizeXNManager';
  Marks?: Maybe<Array<Maybe<MarkInStatisticMarkSize>>>;
  Provider?: Maybe<Scalars['String']>;
};

export type StatisticMeterChange = {
  __typename?: 'StatisticMeterChange';
  AccreditationDocument?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  Level?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Meter?: Maybe<Scalars['String']>;
  OldMeter?: Maybe<Scalars['String']>;
  OldTran?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Transmitter?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticMeterDateChangeByYearUsing = {
  __typename?: 'StatisticMeterDateChangeByYearUsing';
  Company?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  TakeoverDate?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticSiteXnManager = {
  __typename?: 'StatisticSiteXNManager';
  Availability?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Level?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  STT?: Maybe<Scalars['Int']>;
  SiteId?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  UsingLogger?: Maybe<Scalars['Boolean']>;
};

export type StatisticTransmitterBatteryChange = {
  __typename?: 'StatisticTransmitterBatteryChange';
  AccreditationDocument?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  Id?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Meter?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Transmitter?: Maybe<Scalars['String']>;
};

export type StatisticTransmitterBatteryChangeByYearUsing = {
  __typename?: 'StatisticTransmitterBatteryChangeByYearUsing';
  Company?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticTransmitterChange = {
  __typename?: 'StatisticTransmitterChange';
  AccreditationDocument?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  ExpiryDate?: Maybe<Scalars['Date']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Meter?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  OldMeter?: Maybe<Scalars['String']>;
  OldTran?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Transmitter?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
};

export type StatisticTransmitterDateChangeByYearUsing = {
  __typename?: 'StatisticTransmitterDateChangeByYearUsing';
  Company?: Maybe<Scalars['String']>;
  DateOfChange?: Maybe<Scalars['Date']>;
  DescriptionOfChange?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Marks?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
};

export type SubtractWaterB1 = {
  __typename?: 'SubtractWaterB1';
  AmountWater?: Maybe<Scalars['Float']>;
  Content?: Maybe<Scalars['String']>;
  Note?: Maybe<Scalars['String']>;
  NumberPrecious?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['String']>;
};

export type SubtractWaterB1Input = {
  AmountWater?: InputMaybe<Scalars['Float']>;
  Content?: InputMaybe<Scalars['String']>;
  Note?: InputMaybe<Scalars['String']>;
  NumberPrecious?: InputMaybe<Scalars['String']>;
  Provider?: InputMaybe<Scalars['String']>;
};

export type SubtractWaterB2 = {
  __typename?: 'SubtractWaterB2';
  AmountWater?: Maybe<Scalars['Float']>;
  Content?: Maybe<Scalars['String']>;
  Note?: Maybe<Scalars['String']>;
  NumberPrecious?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['String']>;
};

export type SubtractWaterB2Input = {
  AmountWater?: InputMaybe<Scalars['Float']>;
  Content?: InputMaybe<Scalars['String']>;
  Note?: InputMaybe<Scalars['String']>;
  NumberPrecious?: InputMaybe<Scalars['String']>;
  Provider?: InputMaybe<Scalars['String']>;
};

export type Unit = {
  __typename?: 'Unit';
  Description?: Maybe<Scalars['String']>;
  Unit?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type UpdateActiveUserInput = {
  Active?: InputMaybe<Scalars['Boolean']>;
  Uid?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Active?: Maybe<Scalars['Boolean']>;
  Company?: Maybe<Scalars['String']>;
  Ip?: Maybe<Scalars['String']>;
  Language?: Maybe<Scalars['String']>;
  LogCount?: Maybe<Scalars['Int']>;
  Pwd?: Maybe<Scalars['String']>;
  Role?: Maybe<Scalars['String']>;
  Salt?: Maybe<Scalars['String']>;
  StaffId?: Maybe<Scalars['String']>;
  TimeStamp?: Maybe<Scalars['Date']>;
  Uid?: Maybe<Scalars['String']>;
  Zoom?: Maybe<Scalars['Int']>;
  _id: Scalars['ID'];
};

export type UserAndStaff = {
  __typename?: 'UserAndStaff';
  Active?: Maybe<Scalars['Boolean']>;
  Company?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  Ip?: Maybe<Scalars['String']>;
  Language?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  LogCount?: Maybe<Scalars['Int']>;
  Pwd?: Maybe<Scalars['String']>;
  Role?: Maybe<Scalars['String']>;
  Salt?: Maybe<Scalars['String']>;
  StaffId?: Maybe<Scalars['String']>;
  TimeStamp?: Maybe<Scalars['Date']>;
  Uid?: Maybe<Scalars['String']>;
  Zoom?: Maybe<Scalars['Int']>;
  _id: Scalars['ID'];
};

export type UserInsertInput = {
  Active?: InputMaybe<Scalars['Boolean']>;
  Company?: InputMaybe<Scalars['String']>;
  Ip?: InputMaybe<Scalars['String']>;
  Language?: InputMaybe<Scalars['String']>;
  LogCount?: InputMaybe<Scalars['Int']>;
  Pwd?: InputMaybe<Scalars['String']>;
  Role?: InputMaybe<Scalars['String']>;
  Salt?: InputMaybe<Scalars['String']>;
  StaffId?: InputMaybe<Scalars['String']>;
  TimeStamp?: InputMaybe<Scalars['Date']>;
  Uid?: InputMaybe<Scalars['String']>;
  Zoom?: InputMaybe<Scalars['Int']>;
};

export type UserStaff = {
  __typename?: 'UserStaff';
  FirstName?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  Active?: InputMaybe<Scalars['Boolean']>;
  Company?: InputMaybe<Scalars['String']>;
  Ip?: InputMaybe<Scalars['String']>;
  Language?: InputMaybe<Scalars['String']>;
  LogCount?: InputMaybe<Scalars['Int']>;
  Pwd?: InputMaybe<Scalars['String']>;
  Role?: InputMaybe<Scalars['String']>;
  Salt?: InputMaybe<Scalars['String']>;
  StaffId?: InputMaybe<Scalars['String']>;
  TimeStamp?: InputMaybe<Scalars['Date']>;
  Uid?: InputMaybe<Scalars['String']>;
  Zoom?: InputMaybe<Scalars['Int']>;
  _id: Scalars['ID'];
};

export type UserUpdatePasswordInput = {
  NewPwd?: InputMaybe<Scalars['String']>;
  Pwd?: InputMaybe<Scalars['String']>;
  RepeatNewPwd?: InputMaybe<Scalars['String']>;
  Uid?: InputMaybe<Scalars['String']>;
};

export type WaterCustomer = {
  __typename?: 'WaterCustomer';
  AmountMeter?: Maybe<Scalars['Float']>;
  AmountWater?: Maybe<Scalars['Float']>;
  DatePublished?: Maybe<Scalars['String']>;
  Note?: Maybe<Scalars['String']>;
  NumberPrecious?: Maybe<Scalars['String']>;
};

export type WaterCustomerInput = {
  AmountMeter?: InputMaybe<Scalars['Float']>;
  AmountWater?: InputMaybe<Scalars['Float']>;
  DatePublished?: InputMaybe<Scalars['String']>;
  Note?: InputMaybe<Scalars['String']>;
  NumberPrecious?: InputMaybe<Scalars['String']>;
};

export type LoginActionQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type LoginActionQuery = { __typename?: 'Query', LoginAction?: { __typename?: 'Login', Role?: string | null, Uid?: string | null, token?: string | null, Company?: string | null } | null };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', GetCompanies?: Array<{ __typename?: 'Company', Company?: string | null, Description?: string | null, Production?: number | null }> | null };

export type DeleteCoverMutationVariables = Exact<{
  cover?: InputMaybe<SiteCoverUpdateInput>;
}>;


export type DeleteCoverMutation = { __typename?: 'Mutation', DeleteCover?: number | null };

export type DeleteDataManualMutationVariables = Exact<{
  dataManual?: InputMaybe<DataManualUpdateInput>;
}>;


export type DeleteDataManualMutation = { __typename?: 'Mutation', DeleteDataManual?: number | null };

export type DeleteDeviceChannelConifgMutationVariables = Exact<{
  channel?: InputMaybe<ChannelInput>;
}>;


export type DeleteDeviceChannelConifgMutation = { __typename?: 'Mutation', DeleteDeviceChannelConifg?: number | null };

export type DeleteLoggerMutationVariables = Exact<{
  logger?: InputMaybe<DeviceLoggerUpdateInput>;
}>;


export type DeleteLoggerMutation = { __typename?: 'Mutation', DeleteLogger?: number | null };

export type DeleteMeterMutationVariables = Exact<{
  meter?: InputMaybe<DeviceMeterUpdateInput>;
}>;


export type DeleteMeterMutation = { __typename?: 'Mutation', DeleteMeter?: number | null };

export type DeleteDeviceSiteConfigMutationVariables = Exact<{
  siteConfig?: InputMaybe<DeviceSiteConfigUpdateInput>;
}>;


export type DeleteDeviceSiteConfigMutation = { __typename?: 'Mutation', DeleteDeviceSiteConfig?: number | null };

export type DeleteTransmitterMutationVariables = Exact<{
  transmitter?: InputMaybe<DeviceTransmitterUpdateInput>;
}>;


export type DeleteTransmitterMutation = { __typename?: 'Mutation', DeleteTransmitter?: number | null };

export type DeleteHistorySiteLoggerMutationVariables = Exact<{
  history?: InputMaybe<HistorySiteLoggerUpdateInput>;
}>;


export type DeleteHistorySiteLoggerMutation = { __typename?: 'Mutation', DeleteHistorySiteLogger?: number | null };

export type DeleteHistorySiteMeterMutationVariables = Exact<{
  history?: InputMaybe<HistorySiteMeterUpdateInput>;
}>;


export type DeleteHistorySiteMeterMutation = { __typename?: 'Mutation', DeleteHistorySiteMeter?: number | null };

export type DeleteHistorySiteTransmitterMutationVariables = Exact<{
  history?: InputMaybe<HistorySiteTransmitterUpdateInput>;
}>;


export type DeleteHistorySiteTransmitterMutation = { __typename?: 'Mutation', DeleteHistorySiteTransmitter?: number | null };

export type DeletePreciousMutationVariables = Exact<{
  precious?: InputMaybe<PreciousUpdateInput>;
}>;


export type DeletePreciousMutation = { __typename?: 'Mutation', DeletePrecious?: { __typename?: 'RowModified', nRow?: number | null } | null };

export type DeleteSiteMutationVariables = Exact<{
  site?: InputMaybe<SiteInput>;
}>;


export type DeleteSiteMutation = { __typename?: 'Mutation', DeleteSite?: number | null };

export type DeleteUserMutationVariables = Exact<{
  user?: InputMaybe<UserUpdateInput>;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', DeleteUser?: number | null };

export type GetAllCoverHQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCoverHQuery = { __typename?: 'Query', GetAllCoverH?: Array<number | null> | null };

export type GetAllCoverLQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCoverLQuery = { __typename?: 'Query', GetAllCoverL?: Array<number | null> | null };

export type GetAllCorverMeterialQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCorverMeterialQuery = { __typename?: 'Query', GetAllCorverMeterial?: Array<string | null> | null };

export type GetAllCoverNlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCoverNlQuery = { __typename?: 'Query', GetAllCoverNL?: Array<number | null> | null };

export type GetAllCoverWQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCoverWQuery = { __typename?: 'Query', GetAllCoverW?: Array<number | null> | null };

export type GetAllDeviceChannelConifgQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDeviceChannelConifgQuery = { __typename?: 'Query', GetAllDeviceChannelConifg?: Array<{ __typename?: 'Channel', BaseLine?: number | null, BaseMax?: number | null, BaseMin?: number | null, Description?: string | null, DisplayOnGraph?: boolean | null, ForwardFlow?: boolean | null, GroupChannel?: string | null, IndexTimeStamp?: any | null, LastIndex?: number | null, LastTimeStamp?: any | null, LastValue?: number | null, LoggerId?: string | null, Name?: string | null, Pressure1?: boolean | null, Pressure2?: boolean | null, ReverseFlow?: boolean | null, StatusViewAlarm?: boolean | null, Unit?: string | null, _id?: string | null } | null> | null };

export type GetAllDeviceSiteConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDeviceSiteConfigQuery = { __typename?: 'Query', GetAllDeviceSiteConfig?: Array<{ __typename?: 'DeviceSiteConfig', BeginTime?: any | null, Forward?: number | null, LoggerId?: string | null, Pressure?: number | null, Pressure1?: number | null, Reverse?: number | null, Interval?: number | null, SiteId?: string | null, Tel?: string | null, ZoomInit?: number | null, ZoomOn?: number | null, _id: string } | null> | null };

export type GetAllDeviceStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDeviceStatusQuery = { __typename?: 'Query', GetAllDeviceStatus?: Array<{ __typename?: 'DeviceStatus', Description?: string | null, Status?: string | null } | null> | null };

export type GetAllDistrictQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDistrictQuery = { __typename?: 'Query', GetAllDistrict?: Array<string | null> | null };

export type GetAllHistorySiteLoggerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHistorySiteLoggerQuery = { __typename?: 'Query', GetAllHistorySiteLogger?: Array<{ __typename?: 'HistorySiteLogger', DateChanged?: any | null, Description?: string | null, NewMeterSerial?: string | null, NewMeterIndex?: number | null, OldMeterIndex?: number | null, OldMeterSerial?: string | null, SiteId?: string | null, _id: string } | null> | null };

export type GetAllHistorySiteMeterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHistorySiteMeterQuery = { __typename?: 'Query', GetAllHistorySiteMeter?: Array<{ __typename?: 'HistorySiteMeter', DateChanged?: any | null, Description?: string | null, NewMeterIndex?: number | null, NewMeterSerial?: string | null, OldMeterIndex?: number | null, OldMeterSerial?: string | null, SiteId?: string | null, _id: string } | null> | null };

export type GetAllHistorySiteTransmitterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHistorySiteTransmitterQuery = { __typename?: 'Query', GetAllHistorySiteTransmitter?: Array<{ __typename?: 'HistorySiteTransmitter', DateChanged?: any | null, NewMeterIndex?: number | null, Description?: string | null, NewMeterSerial?: string | null, OldMeterIndex?: number | null, OldMeterSerial?: string | null, SiteId?: string | null, _id: string } | null> | null };

export type GetAllLoggerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLoggerQuery = { __typename?: 'Query', GetAllLogger?: Array<{ __typename?: 'DeviceLogger', Description?: string | null, Installed?: boolean | null, Marks?: string | null, Model?: string | null, Provider?: string | null, ReceiptDate?: any | null, Serial?: string | null, Status?: string | null, _id: string } | null> | null };

export type GetLoggerMarksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoggerMarksQuery = { __typename?: 'Query', GetLoggerMarks?: Array<string | null> | null };

export type GetLoggerModelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoggerModelQuery = { __typename?: 'Query', GetLoggerModel?: Array<string | null> | null };

export type GetAllLoggerNotInstallQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLoggerNotInstallQuery = { __typename?: 'Query', GetAllLoggerNotInstall?: Array<{ __typename?: 'DeviceLogger', Description?: string | null, Installed?: boolean | null, Marks?: string | null, Model?: string | null, Provider?: string | null, ReceiptDate?: any | null, Serial?: string | null, Status?: string | null, _id: string } | null> | null };

export type GetLoggerProviderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoggerProviderQuery = { __typename?: 'Query', GetLoggerProvider?: Array<string | null> | null };

export type GetAllMeterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMeterQuery = { __typename?: 'Query', GetAllMeter?: Array<{ __typename?: 'DeviceMeter', AccreditatedDate?: any | null, AccreditationDocument?: string | null, AccreditationType?: string | null, AppovalDate?: any | null, AppovalDecision?: string | null, Approvaled?: any | null, Description?: string | null, ExpiryDate?: any | null, InstallIndex?: number | null, Installed?: boolean | null, Marks?: string | null, Model?: string | null, Status?: string | null, Nationality?: string | null, Provider?: string | null, ReceiptDate?: any | null, Serial?: string | null, SerialTransmitter?: string | null, Size?: number | null, _id: string } | null> | null };

export type GetMeterMarksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeterMarksQuery = { __typename?: 'Query', GetMeterMarks?: Array<string | null> | null };

export type GetMeterModelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeterModelQuery = { __typename?: 'Query', GetMeterModel?: Array<string | null> | null };

export type GetMeterNationalitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeterNationalitiesQuery = { __typename?: 'Query', GetMeterNationalities?: Array<string | null> | null };

export type GetAllMeterNotInstallQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMeterNotInstallQuery = { __typename?: 'Query', GetAllMeterNotInstall?: Array<{ __typename?: 'DeviceMeter', AccreditatedDate?: any | null, AccreditationDocument?: string | null, AccreditationType?: string | null, AppovalDate?: any | null, AppovalDecision?: string | null, Approvaled?: any | null, Description?: string | null, ExpiryDate?: any | null, InstallIndex?: number | null, Installed?: boolean | null, Marks?: string | null, Model?: string | null, Status?: string | null, Nationality?: string | null, Provider?: string | null, ReceiptDate?: any | null, Serial?: string | null, SerialTransmitter?: string | null, Size?: number | null, _id: string } | null> | null };

export type GetMeterProviderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeterProviderQuery = { __typename?: 'Query', GetMeterProvider?: Array<string | null> | null };

export type GetMeterSizeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeterSizeQuery = { __typename?: 'Query', GetMeterSize?: Array<number | null> | null };

export type GetAllOldSiteIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOldSiteIdQuery = { __typename?: 'Query', GetAllOldSiteId?: Array<string | null> | null };

export type GetAllRoleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRoleQuery = { __typename?: 'Query', GetAllRole?: Array<{ __typename?: 'Role', Description?: string | null, Role?: string | null, _id: string } | null> | null };

export type GetAllSitesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSitesQuery = { __typename?: 'Query', GetAllSites: Array<{ __typename?: 'Site', Address?: string | null, Availability?: string | null, Status?: string | null, ChangeIndex1?: number | null, ChangeIndex?: number | null, Company?: string | null, CoverID?: string | null, DateOfBatteryChange?: any | null, DateOfLoggerChange?: any | null, DateOfLoggerBatteryChange?: any | null, DateOfMeterChange?: any | null, DateOfTransmitterChange?: any | null, DateOfTransmitterBatteryChange?: any | null, Description?: string | null, DescriptionOfChange?: string | null, Display?: boolean | null, District?: string | null, Group?: string | null, Group2?: string | null, Group3?: string | null, Group4?: string | null, IstDistributionCompany?: string | null, Group5?: string | null, IsErrorBattery?: boolean | null, Latitude?: number | null, Level?: string | null, IstDoNotCalculateReverse?: boolean | null, Location?: string | null, Logger?: string | null, Longitude?: number | null, Meter?: string | null, MeterDirection?: string | null, OldId?: string | null, ProductionCompany?: string | null, Property?: boolean | null, QndDistributionCompany?: string | null, QndDoNotCalculateReverse?: boolean | null, StaffId?: string | null, Takeovered?: boolean | null, TakeoverDate?: any | null, Transmitter?: string | null, UsingLogger?: boolean | null, ViewGroup?: string | null, _id: string } | null> };

export type GetAllSiteAndChannelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteAndChannelQuery = { __typename?: 'Query', GetAllSiteAndChannel?: Array<{ __typename?: 'SiteAndChannel', Address?: string | null, Company?: string | null, Description?: string | null, District?: string | null, Group?: string | null, Group2?: string | null, Group3?: string | null, Group4?: string | null, Group5?: string | null, IsErrorBattery?: boolean | null, Latitude?: number | null, Level?: string | null, Location?: string | null, LoggerId?: string | null, Longitude?: number | null, OldId?: string | null, _id: string, Channels?: Array<{ __typename?: 'Channel', BaseMin?: number | null, BaseLine?: number | null, BaseMax?: number | null, Description?: string | null, DisplayOnGraph?: boolean | null, ForwardFlow?: boolean | null, GroupChannel?: string | null, IndexTimeStamp?: any | null, LastIndex?: number | null, LastTimeStamp?: any | null, LastValue?: number | null, LoggerId?: string | null, Name?: string | null, Pressure1?: boolean | null, Pressure2?: boolean | null, ReverseFlow?: boolean | null, StatusViewAlarm?: boolean | null, Unit?: string | null, _id?: string | null }> | null }> | null };

export type GetAllSiteAvailabilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteAvailabilitiesQuery = { __typename?: 'Query', GetAllSiteAvailabilities?: Array<{ __typename?: 'SiteAvailabilities', Availability?: string | null, Description?: string | null, _id: string } | null> | null };

export type GetAllSiteCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteCompaniesQuery = { __typename?: 'Query', GetAllSiteCompanies?: Array<string | null> | null };

export type GetAllSiteCoverQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteCoverQuery = { __typename?: 'Query', GetAllSiteCover?: Array<{ __typename?: 'SiteCover', CoverH?: number | null, CoverID?: string | null, CoverL?: number | null, CoverMeterial?: string | null, CoverNL?: number | null, CoverW?: number | null, _id: string } | null> | null };

export type GetAllSiteGroupQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteGroupQuery = { __typename?: 'Query', GetAllSiteGroup?: Array<{ __typename?: 'SiteGroup', Description?: string | null, Group?: string | null, _id: string } | null> | null };

export type GetAllSiteGroup2SQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteGroup2SQuery = { __typename?: 'Query', GetAllSiteGroup2S?: Array<{ __typename?: 'SiteGroup2S', Description?: string | null, Group?: string | null, _id: string } | null> | null };

export type GetAllSiteGroup3SQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteGroup3SQuery = { __typename?: 'Query', GetAllSiteGroup3S?: Array<{ __typename?: 'SiteGroup3S', Description?: string | null, Group?: string | null, _id: string } | null> | null };

export type GetAllSiteGroup4SQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteGroup4SQuery = { __typename?: 'Query', GetAllSiteGroup4S?: Array<{ __typename?: 'SiteGroup4S', Description?: string | null, Group?: string | null, _id: string } | null> | null };

export type GetAllSiteGroup5SQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteGroup5SQuery = { __typename?: 'Query', GetAllSiteGroup5S?: Array<{ __typename?: 'SiteGroup5S', Description?: string | null, Group?: string | null, _id: string } | null> | null };

export type GetAllSiteLevelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteLevelQuery = { __typename?: 'Query', GetAllSiteLevel?: Array<{ __typename?: 'SiteLevel', Description?: string | null, Level?: string | null, _id: string } | null> | null };

export type GetAllSiteMeterDirectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteMeterDirectionQuery = { __typename?: 'Query', GetAllSiteMeterDirection?: Array<{ __typename?: 'SiteMeterDirection', Description?: string | null, Direction?: string | null, _id: string } | null> | null };

export type GetAllSiteStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteStatusQuery = { __typename?: 'Query', GetAllSiteStatus?: Array<{ __typename?: 'SiteStatus', Description?: string | null, Status?: string | null, _id: string } | null> | null };

export type GetAllStaffsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStaffsQuery = { __typename?: 'Query', GetAllStaffs?: Array<{ __typename?: 'UserStaff', FirstName?: string | null, LastName?: string | null, _id?: string | null } | null> | null };

export type GetAllTransmitterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTransmitterQuery = { __typename?: 'Query', GetAllTransmitter?: Array<{ __typename?: 'DeviceTransmitter', AccreditatedDate?: any | null, AccreditationType?: string | null, AccreditationDocument?: string | null, AppovalDate?: any | null, AppovalDecision?: string | null, Approvaled?: any | null, Description?: string | null, InstallIndex?: number | null, ExpiryDate?: any | null, Installed?: boolean | null, Marks?: string | null, MeterSerial?: string | null, ReceiptDate?: any | null, Serial?: string | null, Size?: number | null, Status?: string | null, _id: string, Provider?: string | null, Model?: string | null } | null> | null };

export type GetTransmitterMarksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransmitterMarksQuery = { __typename?: 'Query', GetTransmitterMarks?: Array<string | null> | null };

export type GetTransmitterModelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransmitterModelQuery = { __typename?: 'Query', GetTransmitterModel?: Array<string | null> | null };

export type GetAllTransmitterNotInstallQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTransmitterNotInstallQuery = { __typename?: 'Query', GetAllTransmitterNotInstall?: Array<{ __typename?: 'DeviceTransmitter', AccreditatedDate?: any | null, AccreditationType?: string | null, AccreditationDocument?: string | null, AppovalDate?: any | null, AppovalDecision?: string | null, Approvaled?: any | null, Description?: string | null, InstallIndex?: number | null, ExpiryDate?: any | null, Installed?: boolean | null, Marks?: string | null, MeterSerial?: string | null, ReceiptDate?: any | null, Serial?: string | null, Size?: number | null, Status?: string | null, _id: string, Provider?: string | null, Model?: string | null } | null> | null };

export type GetTransmitterProviderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransmitterProviderQuery = { __typename?: 'Query', GetTransmitterProvider?: Array<string | null> | null };

export type GetTransmitterSizeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransmitterSizeQuery = { __typename?: 'Query', GetTransmitterSize?: Array<number | null> | null };

export type GetAllUnitQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUnitQuery = { __typename?: 'Query', GetAllUnit?: Array<{ __typename?: 'Unit', Description?: string | null, Unit?: string | null, _id: string } | null> | null };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', GetAllUser?: Array<{ __typename?: 'User', Active?: boolean | null, Company?: string | null, Ip?: string | null, Language?: string | null, LogCount?: number | null, Pwd?: string | null, Role?: string | null, Salt?: string | null, StaffId?: string | null, TimeStamp?: any | null, Uid?: string | null, Zoom?: number | null, _id: string } | null> | null };

export type GetAllUserAndStaffQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserAndStaffQuery = { __typename?: 'Query', GetAllUserAndStaff?: Array<{ __typename?: 'UserAndStaff', Active?: boolean | null, Company?: string | null, FirstName?: string | null, Ip?: string | null, Language?: string | null, LogCount?: number | null, LastName?: string | null, Pwd?: string | null, Role?: string | null, Salt?: string | null, StaffId?: string | null, TimeStamp?: any | null, Uid?: string | null, Zoom?: number | null, _id: string } | null> | null };

export type GetAllViewGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllViewGroupsQuery = { __typename?: 'Query', GetAllViewGroups?: Array<string | null> | null };

export type QueryQueryVariables = Exact<{
  loggerid: Scalars['String'];
}>;


export type QueryQuery = { __typename?: 'Query', GetChannelByLoggerId?: Array<{ __typename?: 'Channel', BaseLine?: number | null, BaseMax?: number | null, BaseMin?: number | null, Description?: string | null, DisplayOnGraph?: boolean | null, ForwardFlow?: boolean | null, IndexTimeStamp?: any | null, GroupChannel?: string | null, LastIndex?: number | null, LastTimeStamp?: any | null, LastValue?: number | null, LoggerId?: string | null, Name?: string | null, Pressure1?: boolean | null, Pressure2?: boolean | null, ReverseFlow?: boolean | null, StatusViewAlarm?: boolean | null, _id?: string | null, Unit?: string | null } | null> | null };

export type GetDataLoggerByLastRecordQueryVariables = Exact<{
  channelid: Scalars['String'];
}>;


export type GetDataLoggerByLastRecordQuery = { __typename?: 'Query', GetDataLoggerByLastRecord?: Array<{ __typename?: 'DataLogger', TimeStamp?: any | null, Value?: number | null }> | null };

export type GetDataLoggerByTimeStampQueryVariables = Exact<{
  channelid: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type GetDataLoggerByTimeStampQuery = { __typename?: 'Query', GetDataLoggerByTimeStamp?: Array<{ __typename?: 'DataLogger', TimeStamp?: any | null, Value?: number | null }> | null };

export type GetDataManualBySiteIdQueryVariables = Exact<{
  siteid?: InputMaybe<Scalars['String']>;
}>;


export type GetDataManualBySiteIdQuery = { __typename?: 'Query', GetDataManualBySiteId?: Array<{ __typename?: 'DataManual', Description?: string | null, Index?: number | null, Output?: number | null, Stt?: number | null, TimeStamp?: any | null, SiteId?: string | null, _id: string } | null> | null };

export type GetDataManualBySiteIdAndTimeStampQueryVariables = Exact<{
  siteid?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['String']>;
}>;


export type GetDataManualBySiteIdAndTimeStampQuery = { __typename?: 'Query', GetDataManualBySiteIdAndTimeStamp?: Array<{ __typename?: 'DataManual', Description?: string | null, Index?: number | null, Output?: number | null, SiteId?: string | null, Stt?: number | null, TimeStamp?: any | null, _id: string } | null> | null };

export type GetHistoryLoggerBySiteIdQueryVariables = Exact<{
  siteid?: InputMaybe<Scalars['String']>;
}>;


export type GetHistoryLoggerBySiteIdQuery = { __typename?: 'Query', GetHistoryLoggerBySiteId?: Array<{ __typename?: 'HistorySiteLogger', DateChanged?: any | null, Description?: string | null, NewMeterIndex?: number | null, NewMeterSerial?: string | null, OldMeterIndex?: number | null, OldMeterSerial?: string | null, SiteId?: string | null, _id: string } | null> | null };

export type GetHistoryMeterBySiteIdQueryVariables = Exact<{
  siteid?: InputMaybe<Scalars['String']>;
}>;


export type GetHistoryMeterBySiteIdQuery = { __typename?: 'Query', GetHistoryMeterBySiteId?: Array<{ __typename?: 'HistorySiteMeter', DateChanged?: any | null, Description?: string | null, NewMeterIndex?: number | null, NewMeterSerial?: string | null, OldMeterIndex?: number | null, OldMeterSerial?: string | null, SiteId?: string | null, _id: string } | null> | null };

export type GetHistoryTransmitterBySiteIdQueryVariables = Exact<{
  siteid?: InputMaybe<Scalars['String']>;
}>;


export type GetHistoryTransmitterBySiteIdQuery = { __typename?: 'Query', GetHistoryTransmitterBySiteId?: Array<{ __typename?: 'HistorySiteTransmitter', DateChanged?: any | null, Description?: string | null, NewMeterIndex?: number | null, NewMeterSerial?: string | null, OldMeterIndex?: number | null, OldMeterSerial?: string | null, SiteId?: string | null, _id: string } | null> | null };

export type GetAllMeterAccreditationTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMeterAccreditationTypeQuery = { __typename?: 'Query', GetAllMeterAccreditationType?: Array<{ __typename?: 'DeviceMeterAccreditationType', AccreditationType?: string | null, Description?: string | null, _id: string } | null> | null };

export type GetPreciousByCompanyQueryVariables = Exact<{
  company?: InputMaybe<Scalars['String']>;
}>;


export type GetPreciousByCompanyQuery = { __typename?: 'Query', GetPreciousByCompany?: Array<{ __typename?: 'Precious', _id: string, Company: string, Start?: string | null, CompanyName?: string | null, End?: string | null, Period?: string | null, CreateAt?: string | null, UsernameCreated?: string | null, Location?: Array<{ __typename?: 'Location', Location?: string | null, Reason?: string | null, SiteId?: string | null, AverageDate?: Array<Array<string | null> | null> | null, QuantityLogger?: number | null, TotalQuantity?: number | null, PrevTetHoliday?: Array<string | null> | null, NextTetHoliday?: Array<string | null> | null, TenDayPrevTetHoliday?: Array<string | null> | null, KFactory?: number | null, AveragePrevTetHoliday?: number | null, AverageTenDayPrevTetHoliday?: number | null, Periods?: Array<{ __typename?: 'Periods', Period?: string | null, Quantity?: number | null } | null> | null, DateCalclogger?: Array<{ __typename?: 'DateCalclogger', Quantity?: number | null, From?: string | null, To?: string | null, DateRange?: Array<string | null> | null } | null> | null } | null> | null, Index?: Array<{ __typename?: 'Index', SiteId?: string | null, Location?: string | null, PreviousPeriodIndex?: number | null, NextPeriodIndex?: number | null } | null> | null, LockValve?: Array<{ __typename?: 'LockValve', SiteId?: string | null, Location?: string | null } | null> | null, SubtractWaterB1?: Array<{ __typename?: 'SubtractWaterB1', NumberPrecious?: string | null, Content?: string | null, Provider?: string | null, AmountWater?: number | null, Note?: string | null } | null> | null, SubtractWaterB2?: Array<{ __typename?: 'SubtractWaterB2', NumberPrecious?: string | null, Content?: string | null, AmountWater?: number | null, Provider?: string | null, Note?: string | null } | null> | null, WaterCustomer?: Array<{ __typename?: 'WaterCustomer', NumberPrecious?: string | null, DatePublished?: string | null, AmountMeter?: number | null, AmountWater?: number | null, Note?: string | null } | null> | null } | null> | null };

export type QuantityDayGroupQueryVariables = Exact<{
  group: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityDayGroupQuery = { __typename?: 'Query', QuantityDayGroup: Array<{ __typename?: 'QuantityDayGroup', Address?: string | null, Company?: string | null, Display?: boolean | null, IstDistributionCompany?: string | null, IstDoNotCalculateReverse?: number | null, Location?: string | null, Marks?: string | null, MeterDirection?: string | null, OldId?: string | null, QndDistributionCompany?: string | null, QndDoNotCalculateReverse?: number | null, SiteId: string, Size?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', IsEnoughData?: boolean | null, TimeStamp?: any | null, Value?: number | null } | null> | null }> };

export type QuantityDayGroup2QueryVariables = Exact<{
  group: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityDayGroup2Query = { __typename?: 'Query', QuantityDayGroup2: Array<{ __typename?: 'QuantityDayGroup2', Address?: string | null, Company?: string | null, Display?: boolean | null, IstDistributionCompany?: string | null, IstDoNotCalculateReverse?: number | null, Location?: string | null, Marks?: string | null, MeterDirection?: string | null, OldId?: string | null, QndDistributionCompany?: string | null, QndDoNotCalculateReverse?: number | null, SiteId: string, Size?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', IsEnoughData?: boolean | null, TimeStamp?: any | null, Value?: number | null } | null> | null }> };

export type QuantityDayGroup5QueryVariables = Exact<{
  group: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityDayGroup5Query = { __typename?: 'Query', QuantityDayGroup5: Array<{ __typename?: 'QuantityDayGroup5', Address?: string | null, Company?: string | null, Display?: boolean | null, IstDistributionCompany?: string | null, IstDoNotCalculateReverse?: number | null, Location?: string | null, Marks?: string | null, MeterDirection?: string | null, OldId?: string | null, QndDistributionCompany?: string | null, QndDoNotCalculateReverse?: number | null, SiteId: string, Size?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', IsEnoughData?: boolean | null, TimeStamp?: any | null, Value?: number | null } | null> | null }> };

export type QuantityDayGroup4QueryVariables = Exact<{
  group: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityDayGroup4Query = { __typename?: 'Query', QuantityDayGroup4: Array<{ __typename?: 'QuantityDayGroup4', Address?: string | null, Company?: string | null, Display?: boolean | null, IstDistributionCompany?: string | null, IstDoNotCalculateReverse?: number | null, Location?: string | null, Marks?: string | null, MeterDirection?: string | null, OldId?: string | null, QndDistributionCompany?: string | null, QndDoNotCalculateReverse?: number | null, SiteId: string, Size?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', IsEnoughData?: boolean | null, TimeStamp?: any | null, Value?: number | null } | null> | null }> };

export type QuantityDayGroup3QueryVariables = Exact<{
  group: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityDayGroup3Query = { __typename?: 'Query', QuantityDayGroup3: Array<{ __typename?: 'QuantityDayGroup3', Address?: string | null, Company?: string | null, Display?: boolean | null, IstDistributionCompany?: string | null, IstDoNotCalculateReverse?: number | null, Location?: string | null, Marks?: string | null, MeterDirection?: string | null, OldId?: string | null, QndDistributionCompany?: string | null, QndDoNotCalculateReverse?: number | null, SiteId: string, Size?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', IsEnoughData?: boolean | null, TimeStamp?: any | null, Value?: number | null } | null> | null }> };

export type QuantityDayLevelQueryVariables = Exact<{
  level: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityDayLevelQuery = { __typename?: 'Query', QuantityDayLevel: Array<{ __typename?: 'QuantityDayLevel', Address?: string | null, Company?: string | null, Display?: boolean | null, IstDistributionCompany?: string | null, Location?: string | null, Marks?: string | null, MeterDirection?: string | null, OldId?: string | null, QndDistributionCompany?: string | null, SiteId: string, Size?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', IsEnoughData?: boolean | null, TimeStamp?: any | null, Value?: number | null } | null> | null }> };

export type QuantityDayTotalQueryVariables = Exact<{
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityDayTotalQuery = { __typename?: 'Query', QuantityDayTotal: Array<{ __typename?: 'QuantityDayTotal', Address?: string | null, Company?: string | null, Display?: boolean | null, IstDistributionCompany?: string | null, Location?: string | null, Marks?: string | null, MeterDirection?: string | null, OldId?: string | null, QndDistributionCompany?: string | null, SiteId: string, Size?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', IsEnoughData?: boolean | null, TimeStamp?: any | null, Value?: number | null } | null> | null }> };

export type GetSiteByIdQueryVariables = Exact<{
  siteid?: InputMaybe<Scalars['String']>;
}>;


export type GetSiteByIdQuery = { __typename?: 'Query', GetSiteById?: { __typename?: 'Site', Address?: string | null, Availability?: string | null, ChangeIndex?: number | null, ChangeIndex1?: number | null, CoverID?: string | null, Company?: string | null, DateOfBatteryChange?: any | null, DateOfLoggerBatteryChange?: any | null, DateOfLoggerChange?: any | null, DateOfTransmitterBatteryChange?: any | null, DateOfMeterChange?: any | null, DateOfTransmitterChange?: any | null, Description?: string | null, Display?: boolean | null, DescriptionOfChange?: string | null, District?: string | null, Group?: string | null, Group2?: string | null, Group4?: string | null, Group3?: string | null, Group5?: string | null, IsErrorBattery?: boolean | null, IstDoNotCalculateReverse?: boolean | null, IstDistributionCompany?: string | null, Latitude?: number | null, Level?: string | null, Location?: string | null, Logger?: string | null, Longitude?: number | null, Meter?: string | null, MeterDirection?: string | null, OldId?: string | null, ProductionCompany?: string | null, Property?: boolean | null, QndDistributionCompany?: string | null, QndDoNotCalculateReverse?: boolean | null, StaffId?: string | null, Status?: string | null, TakeoverDate?: any | null, Takeovered?: boolean | null, Transmitter?: string | null, UsingLogger?: boolean | null, ViewGroup?: string | null, _id: string } | null };

export type GetSiteByWaterSubtractB2ForTaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSiteByWaterSubtractB2ForTaQuery = { __typename?: 'Query', GetSiteByWaterSubtractB2ForTA?: Array<{ __typename?: 'Site', _id: string, Location?: string | null, OldId?: string | null, Latitude?: number | null, Longitude?: number | null, ViewGroup?: string | null, StaffId?: string | null, Meter?: string | null, Transmitter?: string | null, Logger?: string | null, DateOfMeterChange?: any | null, DateOfLoggerChange?: any | null, DateOfTransmitterChange?: any | null, DateOfBatteryChange?: any | null, DateOfTransmitterBatteryChange?: any | null, DateOfLoggerBatteryChange?: any | null, DescriptionOfChange?: string | null, ChangeIndex?: number | null, Level?: string | null, Group?: string | null, Company?: string | null, Takeovered?: boolean | null, TakeoverDate?: any | null, Availability?: string | null, Status?: string | null, Display?: boolean | null, Property?: boolean | null, UsingLogger?: boolean | null, MeterDirection?: string | null, ProductionCompany?: string | null, IstDistributionCompany?: string | null, QndDistributionCompany?: string | null, IstDoNotCalculateReverse?: boolean | null, QndDoNotCalculateReverse?: boolean | null, ChangeIndex1?: number | null, Description?: string | null, Group2?: string | null, Address?: string | null, CoverID?: string | null, Group3?: string | null, Group4?: string | null, Group5?: string | null, District?: string | null, IsErrorBattery?: boolean | null } | null> | null };

export type GetSiteByWaterSupplyQueryVariables = Exact<{
  company: Scalars['String'];
}>;


export type GetSiteByWaterSupplyQuery = { __typename?: 'Query', GetSiteByWaterSupply: Array<{ __typename?: 'Site', _id: string, OldId?: string | null, Location?: string | null, Logger?: string | null, Company?: string | null, Description?: string | null, MeterDirection?: string | null, ProductionCompany?: string | null, IstDistributionCompany?: string | null, QndDistributionCompany?: string | null, IstDoNotCalculateReverse?: boolean | null, QndDoNotCalculateReverse?: boolean | null, Address?: string | null }> };

export type GetStatisticAccreditedQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
}>;


export type GetStatisticAccreditedQuery = { __typename?: 'Query', GetStatisticAccredited?: Array<{ __typename?: 'StatisticAccredited', AccreditationDocument?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, ExpiryDate?: any | null, Location?: string | null, Marks?: string | null, Size?: number | null, _id?: string | null } | null> | null };

export type GetStatisticAccreditationAndExpiryDateQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
}>;


export type GetStatisticAccreditationAndExpiryDateQuery = { __typename?: 'Query', GetStatisticAccreditationAndExpiryDate?: Array<{ __typename?: 'StatisticAccreditationAndExpiryDate', AccreditationDocument?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, ExpiryDate?: any | null, Location?: string | null, Marks?: string | null, Size?: number | null, _id?: string | null } | null> | null };

export type GetStatisticBatteryChangeQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
}>;


export type GetStatisticBatteryChangeQuery = { __typename?: 'Query', GetStatisticBatteryChange?: Array<{ __typename?: 'StatisticBatteryChange', AccreditationDocument?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, ExpiryDate?: any | null, Id?: string | null, Location?: string | null, Marks?: string | null, Meter?: string | null, Size?: number | null, Transmitter?: string | null } | null> | null };

export type GetStatisticBatteryChangeByYearUsingQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
}>;


export type GetStatisticBatteryChangeByYearUsingQuery = { __typename?: 'Query', GetStatisticBatteryChangeByYearUsing?: Array<{ __typename?: 'StatisticBatteryChangeByYearUsing', Company?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, Location?: string | null, Marks?: string | null, Size?: number | null, Status?: string | null, _id?: string | null } | null> | null };

export type GetStatisticCustomChoiceLoggerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatisticCustomChoiceLoggerQuery = { __typename?: 'Query', GetStatisticCustomChoiceLogger?: Array<{ __typename?: 'StatisticCustomChoiceLogger', Description?: string | null, Installed?: boolean | null, Location?: string | null, LoggerId?: string | null, Marks?: string | null, Model?: string | null, Provider?: string | null, ReceiptDate?: any | null, Serial?: string | null, SiteCompany?: string | null, SiteId?: string | null, SiteStatus?: string | null, Status?: string | null } | null> | null };

export type GetStatisticCustomChoiceMarkSizeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatisticCustomChoiceMarkSizeQuery = { __typename?: 'Query', GetStatisticCustomChoiceMarkSize?: Array<{ __typename?: 'StatisticCustomChoiceMarkSize', AccreditationDocument?: string | null, AccreditationType?: string | null, AccreditedDate?: any | null, ApprovalDecision?: string | null, Approved?: boolean | null, Availability?: string | null, Company?: string | null, DateOfMeterChange?: any | null, Description?: string | null, Group?: string | null, ExpiryDate?: any | null, Group2?: string | null, IstDistributionCompany?: string | null, Level?: string | null, Location?: string | null, Logger?: string | null, LoggerModel?: string | null, Marks?: string | null, Meter?: string | null, Model?: string | null, ProductionCompany?: string | null, Property?: boolean | null, Provider?: string | null, QndDistributionCompany?: string | null, Size?: number | null, Status?: string | null, Takeovered?: boolean | null, Transmitter?: string | null, UsingLogger?: boolean | null, _id?: string | null } | null> | null };

export type GetStatisticCustomChoiceMeterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatisticCustomChoiceMeterQuery = { __typename?: 'Query', GetStatisticCustomChoiceMeter?: Array<{ __typename?: 'StatisticCustomChoiceMeter', AccreditationDocument?: string | null, AccreditationType?: string | null, AccreditedDate?: any | null, Description?: string | null, ExpiryDate?: any | null, InitialIndex?: number | null, Installed?: boolean | null, Location?: string | null, Marks?: string | null, Model?: string | null, Nationality?: string | null, Provider?: string | null, ReceiptDate?: any | null, Serial?: string | null, SiteCompany?: string | null, SiteId?: string | null, SiteStatus?: string | null, Size?: number | null, Status?: string | null, TransmitterSerial?: string | null } | null> | null };

export type GetStatisticCustomChoiceSiteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatisticCustomChoiceSiteQuery = { __typename?: 'Query', GetStatisticCustomChoiceSite?: Array<{ __typename?: 'StatisticCustomChoiceSite', AccreditationDocument?: string | null, AccreditedDate?: any | null, ApprovalDecision?: string | null, Company?: string | null, Availability?: string | null, DateOfMeterChange?: any | null, Description?: string | null, ExpiryDate?: any | null, Group?: string | null, Group2?: string | null, IstDistributionCompany?: string | null, Level?: string | null, Location?: string | null, Logger?: string | null, LoggerModel?: string | null, Marks?: string | null, Meter?: string | null, Model?: string | null, ProductionCompany?: string | null, Property?: boolean | null, Provider?: string | null, QndDistributionCompany?: string | null, Size?: number | null, Status?: string | null, Takeovered?: boolean | null, Transmitter?: string | null, UsingLogger?: boolean | null, _id?: string | null, AccreditationType?: string | null, Approved?: boolean | null } | null> | null };

export type GetStatisticCustomChoiceTransmitterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatisticCustomChoiceTransmitterQuery = { __typename?: 'Query', GetStatisticCustomChoiceTransmitter?: Array<{ __typename?: 'StatisticCustomChoiceTransmitter', Description?: string | null, InitialIndex?: number | null, Installed?: boolean | null, Location?: string | null, Marks?: string | null, Model?: string | null, Provider?: string | null, ReceiptDate?: any | null, Serial?: string | null, SiteCompany?: string | null, SiteId?: string | null, SiteStatus?: string | null, Size?: number | null, Status?: string | null } | null> | null };

export type GetStatisticHistoryLoggerAndLoggerBySiteIdQueryVariables = Exact<{
  siteid?: InputMaybe<Scalars['String']>;
}>;


export type GetStatisticHistoryLoggerAndLoggerBySiteIdQuery = { __typename?: 'Query', GetStatisticHistoryLoggerAndLoggerBySiteId?: Array<{ __typename?: 'StatisticHistoryLoggerAndLoggerBySiteId', DateChanged?: any | null, Description?: string | null, NewMarks?: string | null, NewIndex?: number | null, NewModel?: string | null, NewProvider?: string | null, NewSerial?: string | null, OldMarks?: string | null, OldIndex?: number | null, OldProvider?: string | null, OldModel?: string | null, OldSerial?: string | null, STT?: number | null } | null> | null };

export type GetStatisticHistoryMeterAndMeterBySiteIdQueryVariables = Exact<{
  siteid?: InputMaybe<Scalars['String']>;
}>;


export type GetStatisticHistoryMeterAndMeterBySiteIdQuery = { __typename?: 'Query', GetStatisticHistoryMeterAndMeterBySiteId?: Array<{ __typename?: 'StatisticHistoryMeterAndMeterBySiteId', AccreditationDocument?: string | null, DateChanged?: any | null, Description?: string | null, NewIndex?: number | null, NewMarks?: string | null, NewModel?: string | null, NewProvider?: string | null, NewSerial?: string | null, NewSize?: number | null, OldIndex?: number | null, OldMarks?: string | null, OldModel?: string | null, OldProvider?: string | null, OldSerial?: string | null, OldSize?: number | null, STT?: number | null } | null> | null };

export type GetStatisticHistoryTransmitterAndTransmitterBySiteIdQueryVariables = Exact<{
  siteid?: InputMaybe<Scalars['String']>;
}>;


export type GetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery = { __typename?: 'Query', GetStatisticHistoryTransmitterAndTransmitterBySiteId?: Array<{ __typename?: 'StatisticHistoryTransmitterAndTransmitterBySiteId', DateChanged?: any | null, Description?: string | null, NewIndex?: number | null, NewMarks?: string | null, NewModel?: string | null, NewProvider?: string | null, NewSerial?: string | null, NewSize?: number | null, OldIndex?: number | null, OldMarks?: string | null, OldModel?: string | null, OldProvider?: string | null, OldSerial?: string | null, OldSize?: number | null, STT?: number | null } | null> | null };

export type GetStatisticLoggerBatteryChangeQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
}>;


export type GetStatisticLoggerBatteryChangeQuery = { __typename?: 'Query', GetStatisticLoggerBatteryChange?: Array<{ __typename?: 'StatisticLoggerBatteryChange', AccreditationDocument?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, ExpiryDate?: any | null, Id?: string | null, Location?: string | null, Marks?: string | null, Meter?: string | null, Size?: number | null, Transmitter?: string | null } | null> | null };

export type GetStatisticTransmitterChangeByYearUsingQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
}>;


export type GetStatisticTransmitterChangeByYearUsingQuery = { __typename?: 'Query', GetStatisticTransmitterChangeByYearUsing?: Array<{ __typename?: 'StatisticTransmitterDateChangeByYearUsing', Company?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, Location?: string | null, Marks?: string | null, Size?: number | null, Status?: string | null, _id?: string | null } | null> | null };

export type GetStatisticLoggerChangeQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
}>;


export type GetStatisticLoggerChangeQuery = { __typename?: 'Query', GetStatisticLoggerChange?: Array<{ __typename?: 'StatisticLoggerChange', Location?: string | null, NewLogger?: string | null, OldLogger?: string | null, _id?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null } | null> | null };

export type GetStatisticLoggerBatteryChangeByYearUsingQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
}>;


export type GetStatisticLoggerBatteryChangeByYearUsingQuery = { __typename?: 'Query', GetStatisticLoggerBatteryChangeByYearUsing?: Array<{ __typename?: 'StatisticLoggerBatteryChangeByYearUsing', Company?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, Location?: string | null, Marks?: string | null, Status?: string | null, _id?: string | null } | null> | null };

export type GetStatisticMarkSizeXnManagerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatisticMarkSizeXnManagerQuery = { __typename?: 'Query', GetStatisticMarkSizeXNManager?: Array<{ __typename?: 'StatisticMarkSizeXNManager', Provider?: string | null, Marks?: Array<{ __typename?: 'MarkInStatisticMarkSize', Mark?: string | null, Models?: Array<{ __typename?: 'ModelInStatisticMarkSize', Model?: string | null, Sizes?: Array<{ __typename?: 'SizeInStatisticMarkSize', Size?: string | null, Companies?: Array<{ __typename?: 'CompanyInStatisticMarkSize', Amount?: number | null, Company?: string | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null };

export type GetStatisticMeterChangeQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
}>;


export type GetStatisticMeterChangeQuery = { __typename?: 'Query', GetStatisticMeterChange?: Array<{ __typename?: 'StatisticMeterChange', AccreditationDocument?: string | null, DateOfChange?: any | null, ExpiryDate?: any | null, DescriptionOfChange?: string | null, _id?: string | null, Level?: string | null, Location?: string | null, Marks?: string | null, Meter?: string | null, OldMeter?: string | null, OldTran?: string | null, Size?: number | null, Transmitter?: string | null } | null> | null };

export type GetStatisticMeterChangeByYearUsingQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
}>;


export type GetStatisticMeterChangeByYearUsingQuery = { __typename?: 'Query', GetStatisticMeterChangeByYearUsing?: Array<{ __typename?: 'StatisticMeterDateChangeByYearUsing', Company?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, Location?: string | null, Marks?: string | null, Size?: number | null, Status?: string | null, _id?: string | null, TakeoverDate?: any | null } | null> | null };

export type GetStatisticSiteXnManagerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatisticSiteXnManagerQuery = { __typename?: 'Query', GetStatisticSiteXNManager?: Array<{ __typename?: 'StatisticSiteXNManager', Availability?: string | null, Company?: string | null, Description?: string | null, Level?: string | null, Location?: string | null, Marks?: string | null, STT?: number | null, SiteId?: string | null, Size?: number | null, Status?: string | null, UsingLogger?: boolean | null } | null> | null };

export type GetStatisticTransmitterChangeQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
}>;


export type GetStatisticTransmitterChangeQuery = { __typename?: 'Query', GetStatisticTransmitterChange?: Array<{ __typename?: 'StatisticTransmitterChange', AccreditationDocument?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, ExpiryDate?: any | null, Location?: string | null, Marks?: string | null, Meter?: string | null, Model?: string | null, OldMeter?: string | null, OldTran?: string | null, Size?: number | null, Transmitter?: string | null, _id?: string | null } | null> | null };

export type GetStatisticTransmitterBatteryChangeQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
}>;


export type GetStatisticTransmitterBatteryChangeQuery = { __typename?: 'Query', GetStatisticTransmitterBatteryChange?: Array<{ __typename?: 'StatisticTransmitterBatteryChange', AccreditationDocument?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, ExpiryDate?: any | null, Id?: string | null, Location?: string | null, Marks?: string | null, Meter?: string | null, Size?: number | null, Transmitter?: string | null } | null> | null };

export type GetStatisticLoggerChangeByYearUsingQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
}>;


export type GetStatisticLoggerChangeByYearUsingQuery = { __typename?: 'Query', GetStatisticLoggerChangeByYearUsing?: Array<{ __typename?: 'StatisticLoggerDateChangeByYearUsing', Company?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, Location?: string | null, Marks?: string | null, Status?: string | null, _id?: string | null } | null> | null };

export type GetStatisticTransmitterBatteryChangeByYearUsingQueryVariables = Exact<{
  date?: InputMaybe<Scalars['Date']>;
  year?: InputMaybe<Scalars['Int']>;
}>;


export type GetStatisticTransmitterBatteryChangeByYearUsingQuery = { __typename?: 'Query', GetStatisticTransmitterBatteryChangeByYearUsing?: Array<{ __typename?: 'StatisticTransmitterBatteryChangeByYearUsing', Company?: string | null, DateOfChange?: any | null, DescriptionOfChange?: string | null, Location?: string | null, Marks?: string | null, Size?: number | null, _id?: string | null, Status?: string | null } | null> | null };

export type InsertCoverMutationVariables = Exact<{
  cover?: InputMaybe<SiteCoverInsertInput>;
}>;


export type InsertCoverMutation = { __typename?: 'Mutation', InsertCover?: string | null };

export type InsertDataManualMutationVariables = Exact<{
  dataManual?: InputMaybe<DataManualInsertInput>;
}>;


export type InsertDataManualMutation = { __typename?: 'Mutation', InsertDataManual?: string | null };

export type InsertLoggerMutationVariables = Exact<{
  logger?: InputMaybe<DeviceLoggerInsertInput>;
}>;


export type InsertLoggerMutation = { __typename?: 'Mutation', InsertLogger?: string | null };

export type InsertMeterMutationVariables = Exact<{
  meter?: InputMaybe<DeviceMeterInsertInput>;
}>;


export type InsertMeterMutation = { __typename?: 'Mutation', InsertMeter?: string | null };

export type InsertDeviceSiteConfigMutationVariables = Exact<{
  siteConfig?: InputMaybe<DeviceSiteConfigInsertInput>;
}>;


export type InsertDeviceSiteConfigMutation = { __typename?: 'Mutation', InsertDeviceSiteConfig?: string | null };

export type InsertTransmitterMutationVariables = Exact<{
  transmitter?: InputMaybe<DeviceTransmitterInsertInput>;
}>;


export type InsertTransmitterMutation = { __typename?: 'Mutation', InsertTransmitter?: string | null };

export type InsertHistorySiteLoggerMutationVariables = Exact<{
  history?: InputMaybe<HistorySiteLoggerInsertInput>;
}>;


export type InsertHistorySiteLoggerMutation = { __typename?: 'Mutation', InsertHistorySiteLogger?: string | null };

export type InsertHistorySiteMeterMutationVariables = Exact<{
  history?: InputMaybe<HistorySiteMeterInsertInput>;
}>;


export type InsertHistorySiteMeterMutation = { __typename?: 'Mutation', InsertHistorySiteMeter?: string | null };

export type InsertHistorySiteTransmitterMutationVariables = Exact<{
  history?: InputMaybe<HistorySiteTransmitterInsertInput>;
}>;


export type InsertHistorySiteTransmitterMutation = { __typename?: 'Mutation', InsertHistorySiteTransmitter?: string | null };

export type InsertPreciousMutationVariables = Exact<{
  precious?: InputMaybe<PreciousInput>;
}>;


export type InsertPreciousMutation = { __typename?: 'Mutation', InsertPrecious?: { __typename?: 'IdOutput', idReturn?: string | null } | null };

export type InsertSiteMutationVariables = Exact<{
  site?: InputMaybe<SiteInput>;
}>;


export type InsertSiteMutation = { __typename?: 'Mutation', InsertSite?: string | null };

export type InsertUserMutationVariables = Exact<{
  user?: InputMaybe<UserInsertInput>;
}>;


export type InsertUserMutation = { __typename?: 'Mutation', InsertUser?: string | null };

export type QuantityDayCompanyQueryVariables = Exact<{
  company: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityDayCompanyQuery = { __typename?: 'Query', QuantityDayCompany: Array<{ __typename?: 'QuantityDayCompany', Address?: string | null, Company?: string | null, Display?: boolean | null, IstDistributionCompany?: string | null, Location?: string | null, Marks?: string | null, MeterDirection?: string | null, OldId?: string | null, QndDistributionCompany?: string | null, SiteId: string, Size?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', IsEnoughData?: boolean | null, TimeStamp?: any | null, Value?: number | null } | null> | null }> };

export type QuantityDayWaterSupplyQueryVariables = Exact<{
  company: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityDayWaterSupplyQuery = { __typename?: 'Query', QuantityDayWaterSupply: Array<{ __typename?: 'QuantityDayWaterSupply', Address?: string | null, Company?: string | null, IstDistributionCompany?: string | null, Display?: boolean | null, Location?: string | null, Marks?: string | null, OldId?: string | null, MeterDirection?: string | null, QndDistributionCompany?: string | null, SiteId: string, Size?: number | null, IstDoNotCalculateReverse?: number | null, QndDoNotCalculateReverse?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', IsEnoughData?: boolean | null, TimeStamp?: any | null, Value?: number | null } | null> | null }> };

export type QuantityLoggerByTimeStampQueryVariables = Exact<{
  siteid: Scalars['String'];
  company: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityLoggerByTimeStampQuery = { __typename?: 'Query', QuantityLoggerByTimeStamp: Array<{ __typename?: 'QuantityLoggerByTimeStamp', SiteId: string, Location?: string | null, Marks?: string | null, Size?: number | null, MeterDirection?: string | null, IstDistributionCompany?: string | null, QndDistributionCompany?: string | null, OldId?: string | null, Company?: string | null, Address?: string | null, Display?: boolean | null, IstDoNotCalculateReverse?: number | null, QndDoNotCalculateReverse?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', TimeStamp?: any | null, Value?: number | null, IsEnoughData?: boolean | null } | null> | null }> };

export type QuantityLoggerDayQueryVariables = Exact<{
  siteid: Scalars['String'];
  company: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityLoggerDayQuery = { __typename?: 'Query', QuantityLoggerDay: number };

export type QuantityLoggerDayWaterSupplyQueryVariables = Exact<{
  company: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityLoggerDayWaterSupplyQuery = { __typename?: 'Query', QuantityLoggerDayWaterSupply: Array<{ __typename?: 'QuantityLoggerDayWaterSupply', Address?: string | null, Company?: string | null, Display?: boolean | null, IstDistributionCompany?: string | null, IstDoNotCalculateReverse?: number | null, Location?: string | null, Marks?: string | null, MeterDirection?: string | null, QndDistributionCompany?: string | null, QndDoNotCalculateReverse?: number | null, Size?: number | null, SiteId: string, OldId?: string | null, ListQuantity?: Array<{ __typename?: 'Quantity', IsEnoughData?: boolean | null, TimeStamp?: any | null, Value?: number | null } | null> | null }> };

export type UpdateActiveUserMutationVariables = Exact<{
  user?: InputMaybe<UpdateActiveUserInput>;
}>;


export type UpdateActiveUserMutation = { __typename?: 'Mutation', UpdateActiveUser?: number | null };

export type UpdateCoverMutationVariables = Exact<{
  cover?: InputMaybe<SiteCoverUpdateInput>;
}>;


export type UpdateCoverMutation = { __typename?: 'Mutation', UpdateCover?: number | null };

export type UpdateDataManualMutationVariables = Exact<{
  dataManual?: InputMaybe<DataManualUpdateInput>;
}>;


export type UpdateDataManualMutation = { __typename?: 'Mutation', UpdateDataManual?: number | null };

export type UpdateDeviceChannelConfigMutationVariables = Exact<{
  channel?: InputMaybe<ChannelInput>;
}>;


export type UpdateDeviceChannelConfigMutation = { __typename?: 'Mutation', UpdateDeviceChannelConfig?: string | null };

export type UpdateLoggerMutationVariables = Exact<{
  logger?: InputMaybe<DeviceLoggerUpdateInput>;
}>;


export type UpdateLoggerMutation = { __typename?: 'Mutation', UpdateLogger?: number | null };

export type UpdateLoggerInstallMutationVariables = Exact<{
  logger?: InputMaybe<DeviceLoggerInstallUpdateInput>;
}>;


export type UpdateLoggerInstallMutation = { __typename?: 'Mutation', UpdateLoggerInstall?: number | null };

export type UpdateMeterMutationVariables = Exact<{
  meter?: InputMaybe<DeviceMeterUpdateInput>;
}>;


export type UpdateMeterMutation = { __typename?: 'Mutation', UpdateMeter?: number | null };

export type UpdateDeviceSiteConfigMutationVariables = Exact<{
  siteConfig?: InputMaybe<DeviceSiteConfigUpdateInput>;
}>;


export type UpdateDeviceSiteConfigMutation = { __typename?: 'Mutation', UpdateDeviceSiteConfig?: string | null };

export type UpdateTransmitterMutationVariables = Exact<{
  transmitter?: InputMaybe<DeviceTransmitterUpdateInput>;
}>;


export type UpdateTransmitterMutation = { __typename?: 'Mutation', UpdateTransmitter?: number | null };

export type UpdateHistorySiteLoggerMutationVariables = Exact<{
  history?: InputMaybe<HistorySiteLoggerUpdateInput>;
}>;


export type UpdateHistorySiteLoggerMutation = { __typename?: 'Mutation', UpdateHistorySiteLogger?: number | null };

export type UpdateHistorySiteMeterMutationVariables = Exact<{
  history?: InputMaybe<HistorySiteMeterUpdateInput>;
}>;


export type UpdateHistorySiteMeterMutation = { __typename?: 'Mutation', UpdateHistorySiteMeter?: number | null };

export type UpdateHistorySiteTransmitterMutationVariables = Exact<{
  history?: InputMaybe<HistorySiteTransmitterUpdateInput>;
}>;


export type UpdateHistorySiteTransmitterMutation = { __typename?: 'Mutation', UpdateHistorySiteTransmitter?: number | null };

export type UpdateMeterInstallMutationVariables = Exact<{
  meter?: InputMaybe<DeviceMeterInstallUpdateInput>;
}>;


export type UpdateMeterInstallMutation = { __typename?: 'Mutation', UpdateMeterInstall?: number | null };

export type UpdatePasswordMutationVariables = Exact<{
  user?: InputMaybe<UserUpdatePasswordInput>;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', UpdatePassword?: number | null };

export type UpdatePreciousMutationVariables = Exact<{
  precious?: InputMaybe<PreciousUpdateInput>;
}>;


export type UpdatePreciousMutation = { __typename?: 'Mutation', UpdatePrecious?: { __typename?: 'IdOutput', idReturn?: string | null } | null };

export type UpdateSiteMutationVariables = Exact<{
  site?: InputMaybe<SiteInput>;
}>;


export type UpdateSiteMutation = { __typename?: 'Mutation', UpdateSite?: string | null };

export type UpdateSiteLoggerDateChangeMutationVariables = Exact<{
  site?: InputMaybe<SiteLoggerDateChangeUpdateInput>;
}>;


export type UpdateSiteLoggerDateChangeMutation = { __typename?: 'Mutation', UpdateSiteLoggerDateChange?: number | null };

export type UpdateSiteMeterDateChangeMutationVariables = Exact<{
  site?: InputMaybe<SiteMeterDateChangeUpdateInput>;
}>;


export type UpdateSiteMeterDateChangeMutation = { __typename?: 'Mutation', UpdateSiteMeterDateChange?: number | null };

export type UpdateSiteTransmitterDateChangeMutationVariables = Exact<{
  site?: InputMaybe<SiteTransmitterDateChangeUpdateInput>;
}>;


export type UpdateSiteTransmitterDateChangeMutation = { __typename?: 'Mutation', UpdateSiteTransmitterDateChange?: number | null };

export type UpdateTransmitterInstallMutationVariables = Exact<{
  transmitter?: InputMaybe<DeviceTransmitterInstallUpdateInput>;
}>;


export type UpdateTransmitterInstallMutation = { __typename?: 'Mutation', UpdateTransmitterInstall?: number | null };

export type UpdateUserMutationVariables = Exact<{
  user?: InputMaybe<UserUpdateInput>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', UpdateUser?: number | null };

export type VerifyPasswordQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['String']>;
  pwd?: InputMaybe<Scalars['String']>;
}>;


export type VerifyPasswordQuery = { __typename?: 'Query', VerifyPassword?: number | null };


export const LoginActionDocument = gql`
    query LoginAction($username: String, $password: String) {
  LoginAction(username: $username, password: $password) {
    Role
    Uid
    token
    Company
  }
}
    `;

/**
 * __useLoginActionQuery__
 *
 * To run a query within a React component, call `useLoginActionQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginActionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginActionQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginActionQuery(baseOptions?: Apollo.QueryHookOptions<LoginActionQuery, LoginActionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginActionQuery, LoginActionQueryVariables>(LoginActionDocument, options);
      }
export function useLoginActionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginActionQuery, LoginActionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginActionQuery, LoginActionQueryVariables>(LoginActionDocument, options);
        }
export type LoginActionQueryHookResult = ReturnType<typeof useLoginActionQuery>;
export type LoginActionLazyQueryHookResult = ReturnType<typeof useLoginActionLazyQuery>;
export type LoginActionQueryResult = Apollo.QueryResult<LoginActionQuery, LoginActionQueryVariables>;
export function refetchLoginActionQuery(variables?: LoginActionQueryVariables) {
      return { query: LoginActionDocument, variables: variables }
    }
export const GetCompaniesDocument = gql`
    query GetCompanies {
  GetCompanies {
    Company
    Description
    Production
  }
}
    `;

/**
 * __useGetCompaniesQuery__
 *
 * To run a query within a React component, call `useGetCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
      }
export function useGetCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
        }
export type GetCompaniesQueryHookResult = ReturnType<typeof useGetCompaniesQuery>;
export type GetCompaniesLazyQueryHookResult = ReturnType<typeof useGetCompaniesLazyQuery>;
export type GetCompaniesQueryResult = Apollo.QueryResult<GetCompaniesQuery, GetCompaniesQueryVariables>;
export function refetchGetCompaniesQuery(variables?: GetCompaniesQueryVariables) {
      return { query: GetCompaniesDocument, variables: variables }
    }
export const DeleteCoverDocument = gql`
    mutation DeleteCover($cover: SiteCoverUpdateInput) {
  DeleteCover(cover: $cover)
}
    `;
export type DeleteCoverMutationFn = Apollo.MutationFunction<DeleteCoverMutation, DeleteCoverMutationVariables>;

/**
 * __useDeleteCoverMutation__
 *
 * To run a mutation, you first call `useDeleteCoverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCoverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCoverMutation, { data, loading, error }] = useDeleteCoverMutation({
 *   variables: {
 *      cover: // value for 'cover'
 *   },
 * });
 */
export function useDeleteCoverMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCoverMutation, DeleteCoverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCoverMutation, DeleteCoverMutationVariables>(DeleteCoverDocument, options);
      }
export type DeleteCoverMutationHookResult = ReturnType<typeof useDeleteCoverMutation>;
export type DeleteCoverMutationResult = Apollo.MutationResult<DeleteCoverMutation>;
export type DeleteCoverMutationOptions = Apollo.BaseMutationOptions<DeleteCoverMutation, DeleteCoverMutationVariables>;
export const DeleteDataManualDocument = gql`
    mutation DeleteDataManual($dataManual: DataManualUpdateInput) {
  DeleteDataManual(dataManual: $dataManual)
}
    `;
export type DeleteDataManualMutationFn = Apollo.MutationFunction<DeleteDataManualMutation, DeleteDataManualMutationVariables>;

/**
 * __useDeleteDataManualMutation__
 *
 * To run a mutation, you first call `useDeleteDataManualMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDataManualMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDataManualMutation, { data, loading, error }] = useDeleteDataManualMutation({
 *   variables: {
 *      dataManual: // value for 'dataManual'
 *   },
 * });
 */
export function useDeleteDataManualMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDataManualMutation, DeleteDataManualMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDataManualMutation, DeleteDataManualMutationVariables>(DeleteDataManualDocument, options);
      }
export type DeleteDataManualMutationHookResult = ReturnType<typeof useDeleteDataManualMutation>;
export type DeleteDataManualMutationResult = Apollo.MutationResult<DeleteDataManualMutation>;
export type DeleteDataManualMutationOptions = Apollo.BaseMutationOptions<DeleteDataManualMutation, DeleteDataManualMutationVariables>;
export const DeleteDeviceChannelConifgDocument = gql`
    mutation DeleteDeviceChannelConifg($channel: ChannelInput) {
  DeleteDeviceChannelConifg(channel: $channel)
}
    `;
export type DeleteDeviceChannelConifgMutationFn = Apollo.MutationFunction<DeleteDeviceChannelConifgMutation, DeleteDeviceChannelConifgMutationVariables>;

/**
 * __useDeleteDeviceChannelConifgMutation__
 *
 * To run a mutation, you first call `useDeleteDeviceChannelConifgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDeviceChannelConifgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDeviceChannelConifgMutation, { data, loading, error }] = useDeleteDeviceChannelConifgMutation({
 *   variables: {
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useDeleteDeviceChannelConifgMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDeviceChannelConifgMutation, DeleteDeviceChannelConifgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDeviceChannelConifgMutation, DeleteDeviceChannelConifgMutationVariables>(DeleteDeviceChannelConifgDocument, options);
      }
export type DeleteDeviceChannelConifgMutationHookResult = ReturnType<typeof useDeleteDeviceChannelConifgMutation>;
export type DeleteDeviceChannelConifgMutationResult = Apollo.MutationResult<DeleteDeviceChannelConifgMutation>;
export type DeleteDeviceChannelConifgMutationOptions = Apollo.BaseMutationOptions<DeleteDeviceChannelConifgMutation, DeleteDeviceChannelConifgMutationVariables>;
export const DeleteLoggerDocument = gql`
    mutation DeleteLogger($logger: DeviceLoggerUpdateInput) {
  DeleteLogger(logger: $logger)
}
    `;
export type DeleteLoggerMutationFn = Apollo.MutationFunction<DeleteLoggerMutation, DeleteLoggerMutationVariables>;

/**
 * __useDeleteLoggerMutation__
 *
 * To run a mutation, you first call `useDeleteLoggerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLoggerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLoggerMutation, { data, loading, error }] = useDeleteLoggerMutation({
 *   variables: {
 *      logger: // value for 'logger'
 *   },
 * });
 */
export function useDeleteLoggerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLoggerMutation, DeleteLoggerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLoggerMutation, DeleteLoggerMutationVariables>(DeleteLoggerDocument, options);
      }
export type DeleteLoggerMutationHookResult = ReturnType<typeof useDeleteLoggerMutation>;
export type DeleteLoggerMutationResult = Apollo.MutationResult<DeleteLoggerMutation>;
export type DeleteLoggerMutationOptions = Apollo.BaseMutationOptions<DeleteLoggerMutation, DeleteLoggerMutationVariables>;
export const DeleteMeterDocument = gql`
    mutation DeleteMeter($meter: DeviceMeterUpdateInput) {
  DeleteMeter(meter: $meter)
}
    `;
export type DeleteMeterMutationFn = Apollo.MutationFunction<DeleteMeterMutation, DeleteMeterMutationVariables>;

/**
 * __useDeleteMeterMutation__
 *
 * To run a mutation, you first call `useDeleteMeterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMeterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMeterMutation, { data, loading, error }] = useDeleteMeterMutation({
 *   variables: {
 *      meter: // value for 'meter'
 *   },
 * });
 */
export function useDeleteMeterMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMeterMutation, DeleteMeterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMeterMutation, DeleteMeterMutationVariables>(DeleteMeterDocument, options);
      }
export type DeleteMeterMutationHookResult = ReturnType<typeof useDeleteMeterMutation>;
export type DeleteMeterMutationResult = Apollo.MutationResult<DeleteMeterMutation>;
export type DeleteMeterMutationOptions = Apollo.BaseMutationOptions<DeleteMeterMutation, DeleteMeterMutationVariables>;
export const DeleteDeviceSiteConfigDocument = gql`
    mutation DeleteDeviceSiteConfig($siteConfig: DeviceSiteConfigUpdateInput) {
  DeleteDeviceSiteConfig(siteConfig: $siteConfig)
}
    `;
export type DeleteDeviceSiteConfigMutationFn = Apollo.MutationFunction<DeleteDeviceSiteConfigMutation, DeleteDeviceSiteConfigMutationVariables>;

/**
 * __useDeleteDeviceSiteConfigMutation__
 *
 * To run a mutation, you first call `useDeleteDeviceSiteConfigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDeviceSiteConfigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDeviceSiteConfigMutation, { data, loading, error }] = useDeleteDeviceSiteConfigMutation({
 *   variables: {
 *      siteConfig: // value for 'siteConfig'
 *   },
 * });
 */
export function useDeleteDeviceSiteConfigMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDeviceSiteConfigMutation, DeleteDeviceSiteConfigMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDeviceSiteConfigMutation, DeleteDeviceSiteConfigMutationVariables>(DeleteDeviceSiteConfigDocument, options);
      }
export type DeleteDeviceSiteConfigMutationHookResult = ReturnType<typeof useDeleteDeviceSiteConfigMutation>;
export type DeleteDeviceSiteConfigMutationResult = Apollo.MutationResult<DeleteDeviceSiteConfigMutation>;
export type DeleteDeviceSiteConfigMutationOptions = Apollo.BaseMutationOptions<DeleteDeviceSiteConfigMutation, DeleteDeviceSiteConfigMutationVariables>;
export const DeleteTransmitterDocument = gql`
    mutation DeleteTransmitter($transmitter: DeviceTransmitterUpdateInput) {
  DeleteTransmitter(transmitter: $transmitter)
}
    `;
export type DeleteTransmitterMutationFn = Apollo.MutationFunction<DeleteTransmitterMutation, DeleteTransmitterMutationVariables>;

/**
 * __useDeleteTransmitterMutation__
 *
 * To run a mutation, you first call `useDeleteTransmitterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransmitterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransmitterMutation, { data, loading, error }] = useDeleteTransmitterMutation({
 *   variables: {
 *      transmitter: // value for 'transmitter'
 *   },
 * });
 */
export function useDeleteTransmitterMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTransmitterMutation, DeleteTransmitterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTransmitterMutation, DeleteTransmitterMutationVariables>(DeleteTransmitterDocument, options);
      }
export type DeleteTransmitterMutationHookResult = ReturnType<typeof useDeleteTransmitterMutation>;
export type DeleteTransmitterMutationResult = Apollo.MutationResult<DeleteTransmitterMutation>;
export type DeleteTransmitterMutationOptions = Apollo.BaseMutationOptions<DeleteTransmitterMutation, DeleteTransmitterMutationVariables>;
export const DeleteHistorySiteLoggerDocument = gql`
    mutation DeleteHistorySiteLogger($history: HistorySiteLoggerUpdateInput) {
  DeleteHistorySiteLogger(history: $history)
}
    `;
export type DeleteHistorySiteLoggerMutationFn = Apollo.MutationFunction<DeleteHistorySiteLoggerMutation, DeleteHistorySiteLoggerMutationVariables>;

/**
 * __useDeleteHistorySiteLoggerMutation__
 *
 * To run a mutation, you first call `useDeleteHistorySiteLoggerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHistorySiteLoggerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHistorySiteLoggerMutation, { data, loading, error }] = useDeleteHistorySiteLoggerMutation({
 *   variables: {
 *      history: // value for 'history'
 *   },
 * });
 */
export function useDeleteHistorySiteLoggerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHistorySiteLoggerMutation, DeleteHistorySiteLoggerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHistorySiteLoggerMutation, DeleteHistorySiteLoggerMutationVariables>(DeleteHistorySiteLoggerDocument, options);
      }
export type DeleteHistorySiteLoggerMutationHookResult = ReturnType<typeof useDeleteHistorySiteLoggerMutation>;
export type DeleteHistorySiteLoggerMutationResult = Apollo.MutationResult<DeleteHistorySiteLoggerMutation>;
export type DeleteHistorySiteLoggerMutationOptions = Apollo.BaseMutationOptions<DeleteHistorySiteLoggerMutation, DeleteHistorySiteLoggerMutationVariables>;
export const DeleteHistorySiteMeterDocument = gql`
    mutation DeleteHistorySiteMeter($history: HistorySiteMeterUpdateInput) {
  DeleteHistorySiteMeter(history: $history)
}
    `;
export type DeleteHistorySiteMeterMutationFn = Apollo.MutationFunction<DeleteHistorySiteMeterMutation, DeleteHistorySiteMeterMutationVariables>;

/**
 * __useDeleteHistorySiteMeterMutation__
 *
 * To run a mutation, you first call `useDeleteHistorySiteMeterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHistorySiteMeterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHistorySiteMeterMutation, { data, loading, error }] = useDeleteHistorySiteMeterMutation({
 *   variables: {
 *      history: // value for 'history'
 *   },
 * });
 */
export function useDeleteHistorySiteMeterMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHistorySiteMeterMutation, DeleteHistorySiteMeterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHistorySiteMeterMutation, DeleteHistorySiteMeterMutationVariables>(DeleteHistorySiteMeterDocument, options);
      }
export type DeleteHistorySiteMeterMutationHookResult = ReturnType<typeof useDeleteHistorySiteMeterMutation>;
export type DeleteHistorySiteMeterMutationResult = Apollo.MutationResult<DeleteHistorySiteMeterMutation>;
export type DeleteHistorySiteMeterMutationOptions = Apollo.BaseMutationOptions<DeleteHistorySiteMeterMutation, DeleteHistorySiteMeterMutationVariables>;
export const DeleteHistorySiteTransmitterDocument = gql`
    mutation DeleteHistorySiteTransmitter($history: HistorySiteTransmitterUpdateInput) {
  DeleteHistorySiteTransmitter(history: $history)
}
    `;
export type DeleteHistorySiteTransmitterMutationFn = Apollo.MutationFunction<DeleteHistorySiteTransmitterMutation, DeleteHistorySiteTransmitterMutationVariables>;

/**
 * __useDeleteHistorySiteTransmitterMutation__
 *
 * To run a mutation, you first call `useDeleteHistorySiteTransmitterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHistorySiteTransmitterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHistorySiteTransmitterMutation, { data, loading, error }] = useDeleteHistorySiteTransmitterMutation({
 *   variables: {
 *      history: // value for 'history'
 *   },
 * });
 */
export function useDeleteHistorySiteTransmitterMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHistorySiteTransmitterMutation, DeleteHistorySiteTransmitterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHistorySiteTransmitterMutation, DeleteHistorySiteTransmitterMutationVariables>(DeleteHistorySiteTransmitterDocument, options);
      }
export type DeleteHistorySiteTransmitterMutationHookResult = ReturnType<typeof useDeleteHistorySiteTransmitterMutation>;
export type DeleteHistorySiteTransmitterMutationResult = Apollo.MutationResult<DeleteHistorySiteTransmitterMutation>;
export type DeleteHistorySiteTransmitterMutationOptions = Apollo.BaseMutationOptions<DeleteHistorySiteTransmitterMutation, DeleteHistorySiteTransmitterMutationVariables>;
export const DeletePreciousDocument = gql`
    mutation DeletePrecious($precious: PreciousUpdateInput) {
  DeletePrecious(precious: $precious) {
    nRow
  }
}
    `;
export type DeletePreciousMutationFn = Apollo.MutationFunction<DeletePreciousMutation, DeletePreciousMutationVariables>;

/**
 * __useDeletePreciousMutation__
 *
 * To run a mutation, you first call `useDeletePreciousMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePreciousMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePreciousMutation, { data, loading, error }] = useDeletePreciousMutation({
 *   variables: {
 *      precious: // value for 'precious'
 *   },
 * });
 */
export function useDeletePreciousMutation(baseOptions?: Apollo.MutationHookOptions<DeletePreciousMutation, DeletePreciousMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePreciousMutation, DeletePreciousMutationVariables>(DeletePreciousDocument, options);
      }
export type DeletePreciousMutationHookResult = ReturnType<typeof useDeletePreciousMutation>;
export type DeletePreciousMutationResult = Apollo.MutationResult<DeletePreciousMutation>;
export type DeletePreciousMutationOptions = Apollo.BaseMutationOptions<DeletePreciousMutation, DeletePreciousMutationVariables>;
export const DeleteSiteDocument = gql`
    mutation DeleteSite($site: SiteInput) {
  DeleteSite(site: $site)
}
    `;
export type DeleteSiteMutationFn = Apollo.MutationFunction<DeleteSiteMutation, DeleteSiteMutationVariables>;

/**
 * __useDeleteSiteMutation__
 *
 * To run a mutation, you first call `useDeleteSiteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSiteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSiteMutation, { data, loading, error }] = useDeleteSiteMutation({
 *   variables: {
 *      site: // value for 'site'
 *   },
 * });
 */
export function useDeleteSiteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSiteMutation, DeleteSiteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSiteMutation, DeleteSiteMutationVariables>(DeleteSiteDocument, options);
      }
export type DeleteSiteMutationHookResult = ReturnType<typeof useDeleteSiteMutation>;
export type DeleteSiteMutationResult = Apollo.MutationResult<DeleteSiteMutation>;
export type DeleteSiteMutationOptions = Apollo.BaseMutationOptions<DeleteSiteMutation, DeleteSiteMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($user: UserUpdateInput) {
  DeleteUser(user: $user)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetAllCoverHDocument = gql`
    query GetAllCoverH {
  GetAllCoverH
}
    `;

/**
 * __useGetAllCoverHQuery__
 *
 * To run a query within a React component, call `useGetAllCoverHQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoverHQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoverHQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCoverHQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCoverHQuery, GetAllCoverHQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCoverHQuery, GetAllCoverHQueryVariables>(GetAllCoverHDocument, options);
      }
export function useGetAllCoverHLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCoverHQuery, GetAllCoverHQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCoverHQuery, GetAllCoverHQueryVariables>(GetAllCoverHDocument, options);
        }
export type GetAllCoverHQueryHookResult = ReturnType<typeof useGetAllCoverHQuery>;
export type GetAllCoverHLazyQueryHookResult = ReturnType<typeof useGetAllCoverHLazyQuery>;
export type GetAllCoverHQueryResult = Apollo.QueryResult<GetAllCoverHQuery, GetAllCoverHQueryVariables>;
export function refetchGetAllCoverHQuery(variables?: GetAllCoverHQueryVariables) {
      return { query: GetAllCoverHDocument, variables: variables }
    }
export const GetAllCoverLDocument = gql`
    query GetAllCoverL {
  GetAllCoverL
}
    `;

/**
 * __useGetAllCoverLQuery__
 *
 * To run a query within a React component, call `useGetAllCoverLQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoverLQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoverLQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCoverLQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCoverLQuery, GetAllCoverLQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCoverLQuery, GetAllCoverLQueryVariables>(GetAllCoverLDocument, options);
      }
export function useGetAllCoverLLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCoverLQuery, GetAllCoverLQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCoverLQuery, GetAllCoverLQueryVariables>(GetAllCoverLDocument, options);
        }
export type GetAllCoverLQueryHookResult = ReturnType<typeof useGetAllCoverLQuery>;
export type GetAllCoverLLazyQueryHookResult = ReturnType<typeof useGetAllCoverLLazyQuery>;
export type GetAllCoverLQueryResult = Apollo.QueryResult<GetAllCoverLQuery, GetAllCoverLQueryVariables>;
export function refetchGetAllCoverLQuery(variables?: GetAllCoverLQueryVariables) {
      return { query: GetAllCoverLDocument, variables: variables }
    }
export const GetAllCorverMeterialDocument = gql`
    query GetAllCorverMeterial {
  GetAllCorverMeterial
}
    `;

/**
 * __useGetAllCorverMeterialQuery__
 *
 * To run a query within a React component, call `useGetAllCorverMeterialQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCorverMeterialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCorverMeterialQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCorverMeterialQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCorverMeterialQuery, GetAllCorverMeterialQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCorverMeterialQuery, GetAllCorverMeterialQueryVariables>(GetAllCorverMeterialDocument, options);
      }
export function useGetAllCorverMeterialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCorverMeterialQuery, GetAllCorverMeterialQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCorverMeterialQuery, GetAllCorverMeterialQueryVariables>(GetAllCorverMeterialDocument, options);
        }
export type GetAllCorverMeterialQueryHookResult = ReturnType<typeof useGetAllCorverMeterialQuery>;
export type GetAllCorverMeterialLazyQueryHookResult = ReturnType<typeof useGetAllCorverMeterialLazyQuery>;
export type GetAllCorverMeterialQueryResult = Apollo.QueryResult<GetAllCorverMeterialQuery, GetAllCorverMeterialQueryVariables>;
export function refetchGetAllCorverMeterialQuery(variables?: GetAllCorverMeterialQueryVariables) {
      return { query: GetAllCorverMeterialDocument, variables: variables }
    }
export const GetAllCoverNlDocument = gql`
    query GetAllCoverNL {
  GetAllCoverNL
}
    `;

/**
 * __useGetAllCoverNlQuery__
 *
 * To run a query within a React component, call `useGetAllCoverNlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoverNlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoverNlQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCoverNlQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCoverNlQuery, GetAllCoverNlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCoverNlQuery, GetAllCoverNlQueryVariables>(GetAllCoverNlDocument, options);
      }
export function useGetAllCoverNlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCoverNlQuery, GetAllCoverNlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCoverNlQuery, GetAllCoverNlQueryVariables>(GetAllCoverNlDocument, options);
        }
export type GetAllCoverNlQueryHookResult = ReturnType<typeof useGetAllCoverNlQuery>;
export type GetAllCoverNlLazyQueryHookResult = ReturnType<typeof useGetAllCoverNlLazyQuery>;
export type GetAllCoverNlQueryResult = Apollo.QueryResult<GetAllCoverNlQuery, GetAllCoverNlQueryVariables>;
export function refetchGetAllCoverNlQuery(variables?: GetAllCoverNlQueryVariables) {
      return { query: GetAllCoverNlDocument, variables: variables }
    }
export const GetAllCoverWDocument = gql`
    query GetAllCoverW {
  GetAllCoverW
}
    `;

/**
 * __useGetAllCoverWQuery__
 *
 * To run a query within a React component, call `useGetAllCoverWQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoverWQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoverWQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCoverWQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCoverWQuery, GetAllCoverWQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCoverWQuery, GetAllCoverWQueryVariables>(GetAllCoverWDocument, options);
      }
export function useGetAllCoverWLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCoverWQuery, GetAllCoverWQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCoverWQuery, GetAllCoverWQueryVariables>(GetAllCoverWDocument, options);
        }
export type GetAllCoverWQueryHookResult = ReturnType<typeof useGetAllCoverWQuery>;
export type GetAllCoverWLazyQueryHookResult = ReturnType<typeof useGetAllCoverWLazyQuery>;
export type GetAllCoverWQueryResult = Apollo.QueryResult<GetAllCoverWQuery, GetAllCoverWQueryVariables>;
export function refetchGetAllCoverWQuery(variables?: GetAllCoverWQueryVariables) {
      return { query: GetAllCoverWDocument, variables: variables }
    }
export const GetAllDeviceChannelConifgDocument = gql`
    query GetAllDeviceChannelConifg {
  GetAllDeviceChannelConifg {
    BaseLine
    BaseMax
    BaseMin
    Description
    DisplayOnGraph
    ForwardFlow
    GroupChannel
    IndexTimeStamp
    LastIndex
    LastTimeStamp
    LastValue
    LoggerId
    Name
    Pressure1
    Pressure2
    ReverseFlow
    StatusViewAlarm
    Unit
    _id
  }
}
    `;

/**
 * __useGetAllDeviceChannelConifgQuery__
 *
 * To run a query within a React component, call `useGetAllDeviceChannelConifgQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDeviceChannelConifgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDeviceChannelConifgQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDeviceChannelConifgQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDeviceChannelConifgQuery, GetAllDeviceChannelConifgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDeviceChannelConifgQuery, GetAllDeviceChannelConifgQueryVariables>(GetAllDeviceChannelConifgDocument, options);
      }
export function useGetAllDeviceChannelConifgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDeviceChannelConifgQuery, GetAllDeviceChannelConifgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDeviceChannelConifgQuery, GetAllDeviceChannelConifgQueryVariables>(GetAllDeviceChannelConifgDocument, options);
        }
export type GetAllDeviceChannelConifgQueryHookResult = ReturnType<typeof useGetAllDeviceChannelConifgQuery>;
export type GetAllDeviceChannelConifgLazyQueryHookResult = ReturnType<typeof useGetAllDeviceChannelConifgLazyQuery>;
export type GetAllDeviceChannelConifgQueryResult = Apollo.QueryResult<GetAllDeviceChannelConifgQuery, GetAllDeviceChannelConifgQueryVariables>;
export function refetchGetAllDeviceChannelConifgQuery(variables?: GetAllDeviceChannelConifgQueryVariables) {
      return { query: GetAllDeviceChannelConifgDocument, variables: variables }
    }
export const GetAllDeviceSiteConfigDocument = gql`
    query GetAllDeviceSiteConfig {
  GetAllDeviceSiteConfig {
    BeginTime
    Forward
    LoggerId
    Pressure
    Pressure1
    Reverse
    Interval
    SiteId
    Tel
    ZoomInit
    ZoomOn
    _id
  }
}
    `;

/**
 * __useGetAllDeviceSiteConfigQuery__
 *
 * To run a query within a React component, call `useGetAllDeviceSiteConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDeviceSiteConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDeviceSiteConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDeviceSiteConfigQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDeviceSiteConfigQuery, GetAllDeviceSiteConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDeviceSiteConfigQuery, GetAllDeviceSiteConfigQueryVariables>(GetAllDeviceSiteConfigDocument, options);
      }
export function useGetAllDeviceSiteConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDeviceSiteConfigQuery, GetAllDeviceSiteConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDeviceSiteConfigQuery, GetAllDeviceSiteConfigQueryVariables>(GetAllDeviceSiteConfigDocument, options);
        }
export type GetAllDeviceSiteConfigQueryHookResult = ReturnType<typeof useGetAllDeviceSiteConfigQuery>;
export type GetAllDeviceSiteConfigLazyQueryHookResult = ReturnType<typeof useGetAllDeviceSiteConfigLazyQuery>;
export type GetAllDeviceSiteConfigQueryResult = Apollo.QueryResult<GetAllDeviceSiteConfigQuery, GetAllDeviceSiteConfigQueryVariables>;
export function refetchGetAllDeviceSiteConfigQuery(variables?: GetAllDeviceSiteConfigQueryVariables) {
      return { query: GetAllDeviceSiteConfigDocument, variables: variables }
    }
export const GetAllDeviceStatusDocument = gql`
    query GetAllDeviceStatus {
  GetAllDeviceStatus {
    Description
    Status
  }
}
    `;

/**
 * __useGetAllDeviceStatusQuery__
 *
 * To run a query within a React component, call `useGetAllDeviceStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDeviceStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDeviceStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDeviceStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDeviceStatusQuery, GetAllDeviceStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDeviceStatusQuery, GetAllDeviceStatusQueryVariables>(GetAllDeviceStatusDocument, options);
      }
export function useGetAllDeviceStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDeviceStatusQuery, GetAllDeviceStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDeviceStatusQuery, GetAllDeviceStatusQueryVariables>(GetAllDeviceStatusDocument, options);
        }
export type GetAllDeviceStatusQueryHookResult = ReturnType<typeof useGetAllDeviceStatusQuery>;
export type GetAllDeviceStatusLazyQueryHookResult = ReturnType<typeof useGetAllDeviceStatusLazyQuery>;
export type GetAllDeviceStatusQueryResult = Apollo.QueryResult<GetAllDeviceStatusQuery, GetAllDeviceStatusQueryVariables>;
export function refetchGetAllDeviceStatusQuery(variables?: GetAllDeviceStatusQueryVariables) {
      return { query: GetAllDeviceStatusDocument, variables: variables }
    }
export const GetAllDistrictDocument = gql`
    query GetAllDistrict {
  GetAllDistrict
}
    `;

/**
 * __useGetAllDistrictQuery__
 *
 * To run a query within a React component, call `useGetAllDistrictQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDistrictQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDistrictQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDistrictQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDistrictQuery, GetAllDistrictQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDistrictQuery, GetAllDistrictQueryVariables>(GetAllDistrictDocument, options);
      }
export function useGetAllDistrictLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDistrictQuery, GetAllDistrictQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDistrictQuery, GetAllDistrictQueryVariables>(GetAllDistrictDocument, options);
        }
export type GetAllDistrictQueryHookResult = ReturnType<typeof useGetAllDistrictQuery>;
export type GetAllDistrictLazyQueryHookResult = ReturnType<typeof useGetAllDistrictLazyQuery>;
export type GetAllDistrictQueryResult = Apollo.QueryResult<GetAllDistrictQuery, GetAllDistrictQueryVariables>;
export function refetchGetAllDistrictQuery(variables?: GetAllDistrictQueryVariables) {
      return { query: GetAllDistrictDocument, variables: variables }
    }
export const GetAllHistorySiteLoggerDocument = gql`
    query GetAllHistorySiteLogger {
  GetAllHistorySiteLogger {
    DateChanged
    Description
    NewMeterSerial
    NewMeterIndex
    OldMeterIndex
    OldMeterSerial
    SiteId
    _id
  }
}
    `;

/**
 * __useGetAllHistorySiteLoggerQuery__
 *
 * To run a query within a React component, call `useGetAllHistorySiteLoggerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHistorySiteLoggerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHistorySiteLoggerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllHistorySiteLoggerQuery(baseOptions?: Apollo.QueryHookOptions<GetAllHistorySiteLoggerQuery, GetAllHistorySiteLoggerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHistorySiteLoggerQuery, GetAllHistorySiteLoggerQueryVariables>(GetAllHistorySiteLoggerDocument, options);
      }
export function useGetAllHistorySiteLoggerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHistorySiteLoggerQuery, GetAllHistorySiteLoggerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHistorySiteLoggerQuery, GetAllHistorySiteLoggerQueryVariables>(GetAllHistorySiteLoggerDocument, options);
        }
export type GetAllHistorySiteLoggerQueryHookResult = ReturnType<typeof useGetAllHistorySiteLoggerQuery>;
export type GetAllHistorySiteLoggerLazyQueryHookResult = ReturnType<typeof useGetAllHistorySiteLoggerLazyQuery>;
export type GetAllHistorySiteLoggerQueryResult = Apollo.QueryResult<GetAllHistorySiteLoggerQuery, GetAllHistorySiteLoggerQueryVariables>;
export function refetchGetAllHistorySiteLoggerQuery(variables?: GetAllHistorySiteLoggerQueryVariables) {
      return { query: GetAllHistorySiteLoggerDocument, variables: variables }
    }
export const GetAllHistorySiteMeterDocument = gql`
    query GetAllHistorySiteMeter {
  GetAllHistorySiteMeter {
    DateChanged
    Description
    NewMeterIndex
    NewMeterSerial
    OldMeterIndex
    OldMeterSerial
    SiteId
    _id
  }
}
    `;

/**
 * __useGetAllHistorySiteMeterQuery__
 *
 * To run a query within a React component, call `useGetAllHistorySiteMeterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHistorySiteMeterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHistorySiteMeterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllHistorySiteMeterQuery(baseOptions?: Apollo.QueryHookOptions<GetAllHistorySiteMeterQuery, GetAllHistorySiteMeterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHistorySiteMeterQuery, GetAllHistorySiteMeterQueryVariables>(GetAllHistorySiteMeterDocument, options);
      }
export function useGetAllHistorySiteMeterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHistorySiteMeterQuery, GetAllHistorySiteMeterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHistorySiteMeterQuery, GetAllHistorySiteMeterQueryVariables>(GetAllHistorySiteMeterDocument, options);
        }
export type GetAllHistorySiteMeterQueryHookResult = ReturnType<typeof useGetAllHistorySiteMeterQuery>;
export type GetAllHistorySiteMeterLazyQueryHookResult = ReturnType<typeof useGetAllHistorySiteMeterLazyQuery>;
export type GetAllHistorySiteMeterQueryResult = Apollo.QueryResult<GetAllHistorySiteMeterQuery, GetAllHistorySiteMeterQueryVariables>;
export function refetchGetAllHistorySiteMeterQuery(variables?: GetAllHistorySiteMeterQueryVariables) {
      return { query: GetAllHistorySiteMeterDocument, variables: variables }
    }
export const GetAllHistorySiteTransmitterDocument = gql`
    query GetAllHistorySiteTransmitter {
  GetAllHistorySiteTransmitter {
    DateChanged
    NewMeterIndex
    Description
    NewMeterSerial
    OldMeterIndex
    OldMeterSerial
    SiteId
    _id
  }
}
    `;

/**
 * __useGetAllHistorySiteTransmitterQuery__
 *
 * To run a query within a React component, call `useGetAllHistorySiteTransmitterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHistorySiteTransmitterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHistorySiteTransmitterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllHistorySiteTransmitterQuery(baseOptions?: Apollo.QueryHookOptions<GetAllHistorySiteTransmitterQuery, GetAllHistorySiteTransmitterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHistorySiteTransmitterQuery, GetAllHistorySiteTransmitterQueryVariables>(GetAllHistorySiteTransmitterDocument, options);
      }
export function useGetAllHistorySiteTransmitterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHistorySiteTransmitterQuery, GetAllHistorySiteTransmitterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHistorySiteTransmitterQuery, GetAllHistorySiteTransmitterQueryVariables>(GetAllHistorySiteTransmitterDocument, options);
        }
export type GetAllHistorySiteTransmitterQueryHookResult = ReturnType<typeof useGetAllHistorySiteTransmitterQuery>;
export type GetAllHistorySiteTransmitterLazyQueryHookResult = ReturnType<typeof useGetAllHistorySiteTransmitterLazyQuery>;
export type GetAllHistorySiteTransmitterQueryResult = Apollo.QueryResult<GetAllHistorySiteTransmitterQuery, GetAllHistorySiteTransmitterQueryVariables>;
export function refetchGetAllHistorySiteTransmitterQuery(variables?: GetAllHistorySiteTransmitterQueryVariables) {
      return { query: GetAllHistorySiteTransmitterDocument, variables: variables }
    }
export const GetAllLoggerDocument = gql`
    query GetAllLogger {
  GetAllLogger {
    Description
    Installed
    Marks
    Model
    Provider
    ReceiptDate
    Serial
    Status
    _id
  }
}
    `;

/**
 * __useGetAllLoggerQuery__
 *
 * To run a query within a React component, call `useGetAllLoggerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLoggerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLoggerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLoggerQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLoggerQuery, GetAllLoggerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLoggerQuery, GetAllLoggerQueryVariables>(GetAllLoggerDocument, options);
      }
export function useGetAllLoggerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLoggerQuery, GetAllLoggerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLoggerQuery, GetAllLoggerQueryVariables>(GetAllLoggerDocument, options);
        }
export type GetAllLoggerQueryHookResult = ReturnType<typeof useGetAllLoggerQuery>;
export type GetAllLoggerLazyQueryHookResult = ReturnType<typeof useGetAllLoggerLazyQuery>;
export type GetAllLoggerQueryResult = Apollo.QueryResult<GetAllLoggerQuery, GetAllLoggerQueryVariables>;
export function refetchGetAllLoggerQuery(variables?: GetAllLoggerQueryVariables) {
      return { query: GetAllLoggerDocument, variables: variables }
    }
export const GetLoggerMarksDocument = gql`
    query GetLoggerMarks {
  GetLoggerMarks
}
    `;

/**
 * __useGetLoggerMarksQuery__
 *
 * To run a query within a React component, call `useGetLoggerMarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoggerMarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoggerMarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoggerMarksQuery(baseOptions?: Apollo.QueryHookOptions<GetLoggerMarksQuery, GetLoggerMarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoggerMarksQuery, GetLoggerMarksQueryVariables>(GetLoggerMarksDocument, options);
      }
export function useGetLoggerMarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoggerMarksQuery, GetLoggerMarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoggerMarksQuery, GetLoggerMarksQueryVariables>(GetLoggerMarksDocument, options);
        }
export type GetLoggerMarksQueryHookResult = ReturnType<typeof useGetLoggerMarksQuery>;
export type GetLoggerMarksLazyQueryHookResult = ReturnType<typeof useGetLoggerMarksLazyQuery>;
export type GetLoggerMarksQueryResult = Apollo.QueryResult<GetLoggerMarksQuery, GetLoggerMarksQueryVariables>;
export function refetchGetLoggerMarksQuery(variables?: GetLoggerMarksQueryVariables) {
      return { query: GetLoggerMarksDocument, variables: variables }
    }
export const GetLoggerModelDocument = gql`
    query GetLoggerModel {
  GetLoggerModel
}
    `;

/**
 * __useGetLoggerModelQuery__
 *
 * To run a query within a React component, call `useGetLoggerModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoggerModelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoggerModelQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoggerModelQuery(baseOptions?: Apollo.QueryHookOptions<GetLoggerModelQuery, GetLoggerModelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoggerModelQuery, GetLoggerModelQueryVariables>(GetLoggerModelDocument, options);
      }
export function useGetLoggerModelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoggerModelQuery, GetLoggerModelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoggerModelQuery, GetLoggerModelQueryVariables>(GetLoggerModelDocument, options);
        }
export type GetLoggerModelQueryHookResult = ReturnType<typeof useGetLoggerModelQuery>;
export type GetLoggerModelLazyQueryHookResult = ReturnType<typeof useGetLoggerModelLazyQuery>;
export type GetLoggerModelQueryResult = Apollo.QueryResult<GetLoggerModelQuery, GetLoggerModelQueryVariables>;
export function refetchGetLoggerModelQuery(variables?: GetLoggerModelQueryVariables) {
      return { query: GetLoggerModelDocument, variables: variables }
    }
export const GetAllLoggerNotInstallDocument = gql`
    query GetAllLoggerNotInstall {
  GetAllLoggerNotInstall {
    Description
    Installed
    Marks
    Model
    Provider
    ReceiptDate
    Serial
    Status
    _id
  }
}
    `;

/**
 * __useGetAllLoggerNotInstallQuery__
 *
 * To run a query within a React component, call `useGetAllLoggerNotInstallQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLoggerNotInstallQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLoggerNotInstallQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLoggerNotInstallQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLoggerNotInstallQuery, GetAllLoggerNotInstallQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLoggerNotInstallQuery, GetAllLoggerNotInstallQueryVariables>(GetAllLoggerNotInstallDocument, options);
      }
export function useGetAllLoggerNotInstallLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLoggerNotInstallQuery, GetAllLoggerNotInstallQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLoggerNotInstallQuery, GetAllLoggerNotInstallQueryVariables>(GetAllLoggerNotInstallDocument, options);
        }
export type GetAllLoggerNotInstallQueryHookResult = ReturnType<typeof useGetAllLoggerNotInstallQuery>;
export type GetAllLoggerNotInstallLazyQueryHookResult = ReturnType<typeof useGetAllLoggerNotInstallLazyQuery>;
export type GetAllLoggerNotInstallQueryResult = Apollo.QueryResult<GetAllLoggerNotInstallQuery, GetAllLoggerNotInstallQueryVariables>;
export function refetchGetAllLoggerNotInstallQuery(variables?: GetAllLoggerNotInstallQueryVariables) {
      return { query: GetAllLoggerNotInstallDocument, variables: variables }
    }
export const GetLoggerProviderDocument = gql`
    query GetLoggerProvider {
  GetLoggerProvider
}
    `;

/**
 * __useGetLoggerProviderQuery__
 *
 * To run a query within a React component, call `useGetLoggerProviderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoggerProviderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoggerProviderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoggerProviderQuery(baseOptions?: Apollo.QueryHookOptions<GetLoggerProviderQuery, GetLoggerProviderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoggerProviderQuery, GetLoggerProviderQueryVariables>(GetLoggerProviderDocument, options);
      }
export function useGetLoggerProviderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoggerProviderQuery, GetLoggerProviderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoggerProviderQuery, GetLoggerProviderQueryVariables>(GetLoggerProviderDocument, options);
        }
export type GetLoggerProviderQueryHookResult = ReturnType<typeof useGetLoggerProviderQuery>;
export type GetLoggerProviderLazyQueryHookResult = ReturnType<typeof useGetLoggerProviderLazyQuery>;
export type GetLoggerProviderQueryResult = Apollo.QueryResult<GetLoggerProviderQuery, GetLoggerProviderQueryVariables>;
export function refetchGetLoggerProviderQuery(variables?: GetLoggerProviderQueryVariables) {
      return { query: GetLoggerProviderDocument, variables: variables }
    }
export const GetAllMeterDocument = gql`
    query GetAllMeter {
  GetAllMeter {
    AccreditatedDate
    AccreditationDocument
    AccreditationType
    AppovalDate
    AppovalDecision
    Approvaled
    Description
    ExpiryDate
    InstallIndex
    Installed
    Marks
    Model
    Status
    Nationality
    Provider
    ReceiptDate
    Serial
    SerialTransmitter
    Size
    _id
  }
}
    `;

/**
 * __useGetAllMeterQuery__
 *
 * To run a query within a React component, call `useGetAllMeterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMeterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMeterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMeterQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMeterQuery, GetAllMeterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMeterQuery, GetAllMeterQueryVariables>(GetAllMeterDocument, options);
      }
export function useGetAllMeterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMeterQuery, GetAllMeterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMeterQuery, GetAllMeterQueryVariables>(GetAllMeterDocument, options);
        }
export type GetAllMeterQueryHookResult = ReturnType<typeof useGetAllMeterQuery>;
export type GetAllMeterLazyQueryHookResult = ReturnType<typeof useGetAllMeterLazyQuery>;
export type GetAllMeterQueryResult = Apollo.QueryResult<GetAllMeterQuery, GetAllMeterQueryVariables>;
export function refetchGetAllMeterQuery(variables?: GetAllMeterQueryVariables) {
      return { query: GetAllMeterDocument, variables: variables }
    }
export const GetMeterMarksDocument = gql`
    query GetMeterMarks {
  GetMeterMarks
}
    `;

/**
 * __useGetMeterMarksQuery__
 *
 * To run a query within a React component, call `useGetMeterMarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeterMarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeterMarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeterMarksQuery(baseOptions?: Apollo.QueryHookOptions<GetMeterMarksQuery, GetMeterMarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeterMarksQuery, GetMeterMarksQueryVariables>(GetMeterMarksDocument, options);
      }
export function useGetMeterMarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeterMarksQuery, GetMeterMarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeterMarksQuery, GetMeterMarksQueryVariables>(GetMeterMarksDocument, options);
        }
export type GetMeterMarksQueryHookResult = ReturnType<typeof useGetMeterMarksQuery>;
export type GetMeterMarksLazyQueryHookResult = ReturnType<typeof useGetMeterMarksLazyQuery>;
export type GetMeterMarksQueryResult = Apollo.QueryResult<GetMeterMarksQuery, GetMeterMarksQueryVariables>;
export function refetchGetMeterMarksQuery(variables?: GetMeterMarksQueryVariables) {
      return { query: GetMeterMarksDocument, variables: variables }
    }
export const GetMeterModelDocument = gql`
    query GetMeterModel {
  GetMeterModel
}
    `;

/**
 * __useGetMeterModelQuery__
 *
 * To run a query within a React component, call `useGetMeterModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeterModelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeterModelQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeterModelQuery(baseOptions?: Apollo.QueryHookOptions<GetMeterModelQuery, GetMeterModelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeterModelQuery, GetMeterModelQueryVariables>(GetMeterModelDocument, options);
      }
export function useGetMeterModelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeterModelQuery, GetMeterModelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeterModelQuery, GetMeterModelQueryVariables>(GetMeterModelDocument, options);
        }
export type GetMeterModelQueryHookResult = ReturnType<typeof useGetMeterModelQuery>;
export type GetMeterModelLazyQueryHookResult = ReturnType<typeof useGetMeterModelLazyQuery>;
export type GetMeterModelQueryResult = Apollo.QueryResult<GetMeterModelQuery, GetMeterModelQueryVariables>;
export function refetchGetMeterModelQuery(variables?: GetMeterModelQueryVariables) {
      return { query: GetMeterModelDocument, variables: variables }
    }
export const GetMeterNationalitiesDocument = gql`
    query GetMeterNationalities {
  GetMeterNationalities
}
    `;

/**
 * __useGetMeterNationalitiesQuery__
 *
 * To run a query within a React component, call `useGetMeterNationalitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeterNationalitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeterNationalitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeterNationalitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetMeterNationalitiesQuery, GetMeterNationalitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeterNationalitiesQuery, GetMeterNationalitiesQueryVariables>(GetMeterNationalitiesDocument, options);
      }
export function useGetMeterNationalitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeterNationalitiesQuery, GetMeterNationalitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeterNationalitiesQuery, GetMeterNationalitiesQueryVariables>(GetMeterNationalitiesDocument, options);
        }
export type GetMeterNationalitiesQueryHookResult = ReturnType<typeof useGetMeterNationalitiesQuery>;
export type GetMeterNationalitiesLazyQueryHookResult = ReturnType<typeof useGetMeterNationalitiesLazyQuery>;
export type GetMeterNationalitiesQueryResult = Apollo.QueryResult<GetMeterNationalitiesQuery, GetMeterNationalitiesQueryVariables>;
export function refetchGetMeterNationalitiesQuery(variables?: GetMeterNationalitiesQueryVariables) {
      return { query: GetMeterNationalitiesDocument, variables: variables }
    }
export const GetAllMeterNotInstallDocument = gql`
    query GetAllMeterNotInstall {
  GetAllMeterNotInstall {
    AccreditatedDate
    AccreditationDocument
    AccreditationType
    AppovalDate
    AppovalDecision
    Approvaled
    Description
    ExpiryDate
    InstallIndex
    Installed
    Marks
    Model
    Status
    Nationality
    Provider
    ReceiptDate
    Serial
    SerialTransmitter
    Size
    _id
  }
}
    `;

/**
 * __useGetAllMeterNotInstallQuery__
 *
 * To run a query within a React component, call `useGetAllMeterNotInstallQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMeterNotInstallQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMeterNotInstallQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMeterNotInstallQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMeterNotInstallQuery, GetAllMeterNotInstallQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMeterNotInstallQuery, GetAllMeterNotInstallQueryVariables>(GetAllMeterNotInstallDocument, options);
      }
export function useGetAllMeterNotInstallLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMeterNotInstallQuery, GetAllMeterNotInstallQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMeterNotInstallQuery, GetAllMeterNotInstallQueryVariables>(GetAllMeterNotInstallDocument, options);
        }
export type GetAllMeterNotInstallQueryHookResult = ReturnType<typeof useGetAllMeterNotInstallQuery>;
export type GetAllMeterNotInstallLazyQueryHookResult = ReturnType<typeof useGetAllMeterNotInstallLazyQuery>;
export type GetAllMeterNotInstallQueryResult = Apollo.QueryResult<GetAllMeterNotInstallQuery, GetAllMeterNotInstallQueryVariables>;
export function refetchGetAllMeterNotInstallQuery(variables?: GetAllMeterNotInstallQueryVariables) {
      return { query: GetAllMeterNotInstallDocument, variables: variables }
    }
export const GetMeterProviderDocument = gql`
    query GetMeterProvider {
  GetMeterProvider
}
    `;

/**
 * __useGetMeterProviderQuery__
 *
 * To run a query within a React component, call `useGetMeterProviderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeterProviderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeterProviderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeterProviderQuery(baseOptions?: Apollo.QueryHookOptions<GetMeterProviderQuery, GetMeterProviderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeterProviderQuery, GetMeterProviderQueryVariables>(GetMeterProviderDocument, options);
      }
export function useGetMeterProviderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeterProviderQuery, GetMeterProviderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeterProviderQuery, GetMeterProviderQueryVariables>(GetMeterProviderDocument, options);
        }
export type GetMeterProviderQueryHookResult = ReturnType<typeof useGetMeterProviderQuery>;
export type GetMeterProviderLazyQueryHookResult = ReturnType<typeof useGetMeterProviderLazyQuery>;
export type GetMeterProviderQueryResult = Apollo.QueryResult<GetMeterProviderQuery, GetMeterProviderQueryVariables>;
export function refetchGetMeterProviderQuery(variables?: GetMeterProviderQueryVariables) {
      return { query: GetMeterProviderDocument, variables: variables }
    }
export const GetMeterSizeDocument = gql`
    query GetMeterSize {
  GetMeterSize
}
    `;

/**
 * __useGetMeterSizeQuery__
 *
 * To run a query within a React component, call `useGetMeterSizeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeterSizeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeterSizeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeterSizeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeterSizeQuery, GetMeterSizeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeterSizeQuery, GetMeterSizeQueryVariables>(GetMeterSizeDocument, options);
      }
export function useGetMeterSizeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeterSizeQuery, GetMeterSizeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeterSizeQuery, GetMeterSizeQueryVariables>(GetMeterSizeDocument, options);
        }
export type GetMeterSizeQueryHookResult = ReturnType<typeof useGetMeterSizeQuery>;
export type GetMeterSizeLazyQueryHookResult = ReturnType<typeof useGetMeterSizeLazyQuery>;
export type GetMeterSizeQueryResult = Apollo.QueryResult<GetMeterSizeQuery, GetMeterSizeQueryVariables>;
export function refetchGetMeterSizeQuery(variables?: GetMeterSizeQueryVariables) {
      return { query: GetMeterSizeDocument, variables: variables }
    }
export const GetAllOldSiteIdDocument = gql`
    query GetAllOldSiteId {
  GetAllOldSiteId
}
    `;

/**
 * __useGetAllOldSiteIdQuery__
 *
 * To run a query within a React component, call `useGetAllOldSiteIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllOldSiteIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllOldSiteIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllOldSiteIdQuery(baseOptions?: Apollo.QueryHookOptions<GetAllOldSiteIdQuery, GetAllOldSiteIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllOldSiteIdQuery, GetAllOldSiteIdQueryVariables>(GetAllOldSiteIdDocument, options);
      }
export function useGetAllOldSiteIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllOldSiteIdQuery, GetAllOldSiteIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllOldSiteIdQuery, GetAllOldSiteIdQueryVariables>(GetAllOldSiteIdDocument, options);
        }
export type GetAllOldSiteIdQueryHookResult = ReturnType<typeof useGetAllOldSiteIdQuery>;
export type GetAllOldSiteIdLazyQueryHookResult = ReturnType<typeof useGetAllOldSiteIdLazyQuery>;
export type GetAllOldSiteIdQueryResult = Apollo.QueryResult<GetAllOldSiteIdQuery, GetAllOldSiteIdQueryVariables>;
export function refetchGetAllOldSiteIdQuery(variables?: GetAllOldSiteIdQueryVariables) {
      return { query: GetAllOldSiteIdDocument, variables: variables }
    }
export const GetAllRoleDocument = gql`
    query GetAllRole {
  GetAllRole {
    Description
    Role
    _id
  }
}
    `;

/**
 * __useGetAllRoleQuery__
 *
 * To run a query within a React component, call `useGetAllRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRoleQuery(baseOptions?: Apollo.QueryHookOptions<GetAllRoleQuery, GetAllRoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRoleQuery, GetAllRoleQueryVariables>(GetAllRoleDocument, options);
      }
export function useGetAllRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRoleQuery, GetAllRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRoleQuery, GetAllRoleQueryVariables>(GetAllRoleDocument, options);
        }
export type GetAllRoleQueryHookResult = ReturnType<typeof useGetAllRoleQuery>;
export type GetAllRoleLazyQueryHookResult = ReturnType<typeof useGetAllRoleLazyQuery>;
export type GetAllRoleQueryResult = Apollo.QueryResult<GetAllRoleQuery, GetAllRoleQueryVariables>;
export function refetchGetAllRoleQuery(variables?: GetAllRoleQueryVariables) {
      return { query: GetAllRoleDocument, variables: variables }
    }
export const GetAllSitesDocument = gql`
    query GetAllSites {
  GetAllSites {
    Address
    Availability
    Status
    ChangeIndex1
    ChangeIndex
    Company
    CoverID
    DateOfBatteryChange
    DateOfLoggerChange
    DateOfLoggerBatteryChange
    DateOfMeterChange
    DateOfTransmitterChange
    DateOfTransmitterBatteryChange
    Description
    DescriptionOfChange
    Display
    District
    Group
    Group2
    Group3
    Group4
    IstDistributionCompany
    Group5
    IsErrorBattery
    Latitude
    Level
    IstDoNotCalculateReverse
    Location
    Logger
    Longitude
    Meter
    MeterDirection
    OldId
    ProductionCompany
    Property
    QndDistributionCompany
    QndDoNotCalculateReverse
    StaffId
    Takeovered
    TakeoverDate
    Transmitter
    UsingLogger
    ViewGroup
    _id
  }
}
    `;

/**
 * __useGetAllSitesQuery__
 *
 * To run a query within a React component, call `useGetAllSitesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSitesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSitesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSitesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSitesQuery, GetAllSitesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSitesQuery, GetAllSitesQueryVariables>(GetAllSitesDocument, options);
      }
export function useGetAllSitesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSitesQuery, GetAllSitesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSitesQuery, GetAllSitesQueryVariables>(GetAllSitesDocument, options);
        }
export type GetAllSitesQueryHookResult = ReturnType<typeof useGetAllSitesQuery>;
export type GetAllSitesLazyQueryHookResult = ReturnType<typeof useGetAllSitesLazyQuery>;
export type GetAllSitesQueryResult = Apollo.QueryResult<GetAllSitesQuery, GetAllSitesQueryVariables>;
export function refetchGetAllSitesQuery(variables?: GetAllSitesQueryVariables) {
      return { query: GetAllSitesDocument, variables: variables }
    }
export const GetAllSiteAndChannelDocument = gql`
    query GetAllSiteAndChannel {
  GetAllSiteAndChannel {
    Address
    Channels {
      BaseMin
      BaseLine
      BaseMax
      Description
      DisplayOnGraph
      ForwardFlow
      GroupChannel
      IndexTimeStamp
      LastIndex
      LastTimeStamp
      LastValue
      LoggerId
      Name
      Pressure1
      Pressure2
      ReverseFlow
      StatusViewAlarm
      Unit
      _id
    }
    Company
    Description
    District
    Group
    Group2
    Group3
    Group4
    Group5
    IsErrorBattery
    Latitude
    Level
    Location
    LoggerId
    Longitude
    OldId
    _id
  }
}
    `;

/**
 * __useGetAllSiteAndChannelQuery__
 *
 * To run a query within a React component, call `useGetAllSiteAndChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteAndChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteAndChannelQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteAndChannelQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteAndChannelQuery, GetAllSiteAndChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteAndChannelQuery, GetAllSiteAndChannelQueryVariables>(GetAllSiteAndChannelDocument, options);
      }
export function useGetAllSiteAndChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteAndChannelQuery, GetAllSiteAndChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteAndChannelQuery, GetAllSiteAndChannelQueryVariables>(GetAllSiteAndChannelDocument, options);
        }
export type GetAllSiteAndChannelQueryHookResult = ReturnType<typeof useGetAllSiteAndChannelQuery>;
export type GetAllSiteAndChannelLazyQueryHookResult = ReturnType<typeof useGetAllSiteAndChannelLazyQuery>;
export type GetAllSiteAndChannelQueryResult = Apollo.QueryResult<GetAllSiteAndChannelQuery, GetAllSiteAndChannelQueryVariables>;
export function refetchGetAllSiteAndChannelQuery(variables?: GetAllSiteAndChannelQueryVariables) {
      return { query: GetAllSiteAndChannelDocument, variables: variables }
    }
export const GetAllSiteAvailabilitiesDocument = gql`
    query GetAllSiteAvailabilities {
  GetAllSiteAvailabilities {
    Availability
    Description
    _id
  }
}
    `;

/**
 * __useGetAllSiteAvailabilitiesQuery__
 *
 * To run a query within a React component, call `useGetAllSiteAvailabilitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteAvailabilitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteAvailabilitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteAvailabilitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteAvailabilitiesQuery, GetAllSiteAvailabilitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteAvailabilitiesQuery, GetAllSiteAvailabilitiesQueryVariables>(GetAllSiteAvailabilitiesDocument, options);
      }
export function useGetAllSiteAvailabilitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteAvailabilitiesQuery, GetAllSiteAvailabilitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteAvailabilitiesQuery, GetAllSiteAvailabilitiesQueryVariables>(GetAllSiteAvailabilitiesDocument, options);
        }
export type GetAllSiteAvailabilitiesQueryHookResult = ReturnType<typeof useGetAllSiteAvailabilitiesQuery>;
export type GetAllSiteAvailabilitiesLazyQueryHookResult = ReturnType<typeof useGetAllSiteAvailabilitiesLazyQuery>;
export type GetAllSiteAvailabilitiesQueryResult = Apollo.QueryResult<GetAllSiteAvailabilitiesQuery, GetAllSiteAvailabilitiesQueryVariables>;
export function refetchGetAllSiteAvailabilitiesQuery(variables?: GetAllSiteAvailabilitiesQueryVariables) {
      return { query: GetAllSiteAvailabilitiesDocument, variables: variables }
    }
export const GetAllSiteCompaniesDocument = gql`
    query GetAllSiteCompanies {
  GetAllSiteCompanies
}
    `;

/**
 * __useGetAllSiteCompaniesQuery__
 *
 * To run a query within a React component, call `useGetAllSiteCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteCompaniesQuery, GetAllSiteCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteCompaniesQuery, GetAllSiteCompaniesQueryVariables>(GetAllSiteCompaniesDocument, options);
      }
export function useGetAllSiteCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteCompaniesQuery, GetAllSiteCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteCompaniesQuery, GetAllSiteCompaniesQueryVariables>(GetAllSiteCompaniesDocument, options);
        }
export type GetAllSiteCompaniesQueryHookResult = ReturnType<typeof useGetAllSiteCompaniesQuery>;
export type GetAllSiteCompaniesLazyQueryHookResult = ReturnType<typeof useGetAllSiteCompaniesLazyQuery>;
export type GetAllSiteCompaniesQueryResult = Apollo.QueryResult<GetAllSiteCompaniesQuery, GetAllSiteCompaniesQueryVariables>;
export function refetchGetAllSiteCompaniesQuery(variables?: GetAllSiteCompaniesQueryVariables) {
      return { query: GetAllSiteCompaniesDocument, variables: variables }
    }
export const GetAllSiteCoverDocument = gql`
    query GetAllSiteCover {
  GetAllSiteCover {
    CoverH
    CoverID
    CoverL
    CoverMeterial
    CoverNL
    CoverW
    _id
  }
}
    `;

/**
 * __useGetAllSiteCoverQuery__
 *
 * To run a query within a React component, call `useGetAllSiteCoverQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteCoverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteCoverQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteCoverQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteCoverQuery, GetAllSiteCoverQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteCoverQuery, GetAllSiteCoverQueryVariables>(GetAllSiteCoverDocument, options);
      }
export function useGetAllSiteCoverLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteCoverQuery, GetAllSiteCoverQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteCoverQuery, GetAllSiteCoverQueryVariables>(GetAllSiteCoverDocument, options);
        }
export type GetAllSiteCoverQueryHookResult = ReturnType<typeof useGetAllSiteCoverQuery>;
export type GetAllSiteCoverLazyQueryHookResult = ReturnType<typeof useGetAllSiteCoverLazyQuery>;
export type GetAllSiteCoverQueryResult = Apollo.QueryResult<GetAllSiteCoverQuery, GetAllSiteCoverQueryVariables>;
export function refetchGetAllSiteCoverQuery(variables?: GetAllSiteCoverQueryVariables) {
      return { query: GetAllSiteCoverDocument, variables: variables }
    }
export const GetAllSiteGroupDocument = gql`
    query GetAllSiteGroup {
  GetAllSiteGroup {
    Description
    Group
    _id
  }
}
    `;

/**
 * __useGetAllSiteGroupQuery__
 *
 * To run a query within a React component, call `useGetAllSiteGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteGroupQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteGroupQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteGroupQuery, GetAllSiteGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteGroupQuery, GetAllSiteGroupQueryVariables>(GetAllSiteGroupDocument, options);
      }
export function useGetAllSiteGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteGroupQuery, GetAllSiteGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteGroupQuery, GetAllSiteGroupQueryVariables>(GetAllSiteGroupDocument, options);
        }
export type GetAllSiteGroupQueryHookResult = ReturnType<typeof useGetAllSiteGroupQuery>;
export type GetAllSiteGroupLazyQueryHookResult = ReturnType<typeof useGetAllSiteGroupLazyQuery>;
export type GetAllSiteGroupQueryResult = Apollo.QueryResult<GetAllSiteGroupQuery, GetAllSiteGroupQueryVariables>;
export function refetchGetAllSiteGroupQuery(variables?: GetAllSiteGroupQueryVariables) {
      return { query: GetAllSiteGroupDocument, variables: variables }
    }
export const GetAllSiteGroup2SDocument = gql`
    query GetAllSiteGroup2S {
  GetAllSiteGroup2S {
    Description
    Group
    _id
  }
}
    `;

/**
 * __useGetAllSiteGroup2SQuery__
 *
 * To run a query within a React component, call `useGetAllSiteGroup2SQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteGroup2SQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteGroup2SQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteGroup2SQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteGroup2SQuery, GetAllSiteGroup2SQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteGroup2SQuery, GetAllSiteGroup2SQueryVariables>(GetAllSiteGroup2SDocument, options);
      }
export function useGetAllSiteGroup2SLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteGroup2SQuery, GetAllSiteGroup2SQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteGroup2SQuery, GetAllSiteGroup2SQueryVariables>(GetAllSiteGroup2SDocument, options);
        }
export type GetAllSiteGroup2SQueryHookResult = ReturnType<typeof useGetAllSiteGroup2SQuery>;
export type GetAllSiteGroup2SLazyQueryHookResult = ReturnType<typeof useGetAllSiteGroup2SLazyQuery>;
export type GetAllSiteGroup2SQueryResult = Apollo.QueryResult<GetAllSiteGroup2SQuery, GetAllSiteGroup2SQueryVariables>;
export function refetchGetAllSiteGroup2SQuery(variables?: GetAllSiteGroup2SQueryVariables) {
      return { query: GetAllSiteGroup2SDocument, variables: variables }
    }
export const GetAllSiteGroup3SDocument = gql`
    query GetAllSiteGroup3S {
  GetAllSiteGroup3S {
    Description
    Group
    _id
  }
}
    `;

/**
 * __useGetAllSiteGroup3SQuery__
 *
 * To run a query within a React component, call `useGetAllSiteGroup3SQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteGroup3SQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteGroup3SQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteGroup3SQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteGroup3SQuery, GetAllSiteGroup3SQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteGroup3SQuery, GetAllSiteGroup3SQueryVariables>(GetAllSiteGroup3SDocument, options);
      }
export function useGetAllSiteGroup3SLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteGroup3SQuery, GetAllSiteGroup3SQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteGroup3SQuery, GetAllSiteGroup3SQueryVariables>(GetAllSiteGroup3SDocument, options);
        }
export type GetAllSiteGroup3SQueryHookResult = ReturnType<typeof useGetAllSiteGroup3SQuery>;
export type GetAllSiteGroup3SLazyQueryHookResult = ReturnType<typeof useGetAllSiteGroup3SLazyQuery>;
export type GetAllSiteGroup3SQueryResult = Apollo.QueryResult<GetAllSiteGroup3SQuery, GetAllSiteGroup3SQueryVariables>;
export function refetchGetAllSiteGroup3SQuery(variables?: GetAllSiteGroup3SQueryVariables) {
      return { query: GetAllSiteGroup3SDocument, variables: variables }
    }
export const GetAllSiteGroup4SDocument = gql`
    query GetAllSiteGroup4S {
  GetAllSiteGroup4S {
    Description
    Group
    _id
  }
}
    `;

/**
 * __useGetAllSiteGroup4SQuery__
 *
 * To run a query within a React component, call `useGetAllSiteGroup4SQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteGroup4SQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteGroup4SQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteGroup4SQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteGroup4SQuery, GetAllSiteGroup4SQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteGroup4SQuery, GetAllSiteGroup4SQueryVariables>(GetAllSiteGroup4SDocument, options);
      }
export function useGetAllSiteGroup4SLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteGroup4SQuery, GetAllSiteGroup4SQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteGroup4SQuery, GetAllSiteGroup4SQueryVariables>(GetAllSiteGroup4SDocument, options);
        }
export type GetAllSiteGroup4SQueryHookResult = ReturnType<typeof useGetAllSiteGroup4SQuery>;
export type GetAllSiteGroup4SLazyQueryHookResult = ReturnType<typeof useGetAllSiteGroup4SLazyQuery>;
export type GetAllSiteGroup4SQueryResult = Apollo.QueryResult<GetAllSiteGroup4SQuery, GetAllSiteGroup4SQueryVariables>;
export function refetchGetAllSiteGroup4SQuery(variables?: GetAllSiteGroup4SQueryVariables) {
      return { query: GetAllSiteGroup4SDocument, variables: variables }
    }
export const GetAllSiteGroup5SDocument = gql`
    query GetAllSiteGroup5S {
  GetAllSiteGroup5S {
    Description
    Group
    _id
  }
}
    `;

/**
 * __useGetAllSiteGroup5SQuery__
 *
 * To run a query within a React component, call `useGetAllSiteGroup5SQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteGroup5SQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteGroup5SQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteGroup5SQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteGroup5SQuery, GetAllSiteGroup5SQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteGroup5SQuery, GetAllSiteGroup5SQueryVariables>(GetAllSiteGroup5SDocument, options);
      }
export function useGetAllSiteGroup5SLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteGroup5SQuery, GetAllSiteGroup5SQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteGroup5SQuery, GetAllSiteGroup5SQueryVariables>(GetAllSiteGroup5SDocument, options);
        }
export type GetAllSiteGroup5SQueryHookResult = ReturnType<typeof useGetAllSiteGroup5SQuery>;
export type GetAllSiteGroup5SLazyQueryHookResult = ReturnType<typeof useGetAllSiteGroup5SLazyQuery>;
export type GetAllSiteGroup5SQueryResult = Apollo.QueryResult<GetAllSiteGroup5SQuery, GetAllSiteGroup5SQueryVariables>;
export function refetchGetAllSiteGroup5SQuery(variables?: GetAllSiteGroup5SQueryVariables) {
      return { query: GetAllSiteGroup5SDocument, variables: variables }
    }
export const GetAllSiteLevelDocument = gql`
    query GetAllSiteLevel {
  GetAllSiteLevel {
    Description
    Level
    _id
  }
}
    `;

/**
 * __useGetAllSiteLevelQuery__
 *
 * To run a query within a React component, call `useGetAllSiteLevelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteLevelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteLevelQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteLevelQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteLevelQuery, GetAllSiteLevelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteLevelQuery, GetAllSiteLevelQueryVariables>(GetAllSiteLevelDocument, options);
      }
export function useGetAllSiteLevelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteLevelQuery, GetAllSiteLevelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteLevelQuery, GetAllSiteLevelQueryVariables>(GetAllSiteLevelDocument, options);
        }
export type GetAllSiteLevelQueryHookResult = ReturnType<typeof useGetAllSiteLevelQuery>;
export type GetAllSiteLevelLazyQueryHookResult = ReturnType<typeof useGetAllSiteLevelLazyQuery>;
export type GetAllSiteLevelQueryResult = Apollo.QueryResult<GetAllSiteLevelQuery, GetAllSiteLevelQueryVariables>;
export function refetchGetAllSiteLevelQuery(variables?: GetAllSiteLevelQueryVariables) {
      return { query: GetAllSiteLevelDocument, variables: variables }
    }
export const GetAllSiteMeterDirectionDocument = gql`
    query GetAllSiteMeterDirection {
  GetAllSiteMeterDirection {
    Description
    Direction
    _id
  }
}
    `;

/**
 * __useGetAllSiteMeterDirectionQuery__
 *
 * To run a query within a React component, call `useGetAllSiteMeterDirectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteMeterDirectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteMeterDirectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteMeterDirectionQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteMeterDirectionQuery, GetAllSiteMeterDirectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteMeterDirectionQuery, GetAllSiteMeterDirectionQueryVariables>(GetAllSiteMeterDirectionDocument, options);
      }
export function useGetAllSiteMeterDirectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteMeterDirectionQuery, GetAllSiteMeterDirectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteMeterDirectionQuery, GetAllSiteMeterDirectionQueryVariables>(GetAllSiteMeterDirectionDocument, options);
        }
export type GetAllSiteMeterDirectionQueryHookResult = ReturnType<typeof useGetAllSiteMeterDirectionQuery>;
export type GetAllSiteMeterDirectionLazyQueryHookResult = ReturnType<typeof useGetAllSiteMeterDirectionLazyQuery>;
export type GetAllSiteMeterDirectionQueryResult = Apollo.QueryResult<GetAllSiteMeterDirectionQuery, GetAllSiteMeterDirectionQueryVariables>;
export function refetchGetAllSiteMeterDirectionQuery(variables?: GetAllSiteMeterDirectionQueryVariables) {
      return { query: GetAllSiteMeterDirectionDocument, variables: variables }
    }
export const GetAllSiteStatusDocument = gql`
    query GetAllSiteStatus {
  GetAllSiteStatus {
    Description
    Status
    _id
  }
}
    `;

/**
 * __useGetAllSiteStatusQuery__
 *
 * To run a query within a React component, call `useGetAllSiteStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSiteStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSiteStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSiteStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSiteStatusQuery, GetAllSiteStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSiteStatusQuery, GetAllSiteStatusQueryVariables>(GetAllSiteStatusDocument, options);
      }
export function useGetAllSiteStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSiteStatusQuery, GetAllSiteStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSiteStatusQuery, GetAllSiteStatusQueryVariables>(GetAllSiteStatusDocument, options);
        }
export type GetAllSiteStatusQueryHookResult = ReturnType<typeof useGetAllSiteStatusQuery>;
export type GetAllSiteStatusLazyQueryHookResult = ReturnType<typeof useGetAllSiteStatusLazyQuery>;
export type GetAllSiteStatusQueryResult = Apollo.QueryResult<GetAllSiteStatusQuery, GetAllSiteStatusQueryVariables>;
export function refetchGetAllSiteStatusQuery(variables?: GetAllSiteStatusQueryVariables) {
      return { query: GetAllSiteStatusDocument, variables: variables }
    }
export const GetAllStaffsDocument = gql`
    query GetAllStaffs {
  GetAllStaffs {
    FirstName
    LastName
    _id
  }
}
    `;

/**
 * __useGetAllStaffsQuery__
 *
 * To run a query within a React component, call `useGetAllStaffsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStaffsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStaffsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllStaffsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllStaffsQuery, GetAllStaffsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllStaffsQuery, GetAllStaffsQueryVariables>(GetAllStaffsDocument, options);
      }
export function useGetAllStaffsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllStaffsQuery, GetAllStaffsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllStaffsQuery, GetAllStaffsQueryVariables>(GetAllStaffsDocument, options);
        }
export type GetAllStaffsQueryHookResult = ReturnType<typeof useGetAllStaffsQuery>;
export type GetAllStaffsLazyQueryHookResult = ReturnType<typeof useGetAllStaffsLazyQuery>;
export type GetAllStaffsQueryResult = Apollo.QueryResult<GetAllStaffsQuery, GetAllStaffsQueryVariables>;
export function refetchGetAllStaffsQuery(variables?: GetAllStaffsQueryVariables) {
      return { query: GetAllStaffsDocument, variables: variables }
    }
export const GetAllTransmitterDocument = gql`
    query GetAllTransmitter {
  GetAllTransmitter {
    AccreditatedDate
    AccreditationType
    AccreditationDocument
    AppovalDate
    AppovalDecision
    Approvaled
    Description
    InstallIndex
    ExpiryDate
    Installed
    Marks
    MeterSerial
    ReceiptDate
    Serial
    Size
    Status
    _id
    Provider
    Model
  }
}
    `;

/**
 * __useGetAllTransmitterQuery__
 *
 * To run a query within a React component, call `useGetAllTransmitterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTransmitterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTransmitterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTransmitterQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTransmitterQuery, GetAllTransmitterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTransmitterQuery, GetAllTransmitterQueryVariables>(GetAllTransmitterDocument, options);
      }
export function useGetAllTransmitterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTransmitterQuery, GetAllTransmitterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTransmitterQuery, GetAllTransmitterQueryVariables>(GetAllTransmitterDocument, options);
        }
export type GetAllTransmitterQueryHookResult = ReturnType<typeof useGetAllTransmitterQuery>;
export type GetAllTransmitterLazyQueryHookResult = ReturnType<typeof useGetAllTransmitterLazyQuery>;
export type GetAllTransmitterQueryResult = Apollo.QueryResult<GetAllTransmitterQuery, GetAllTransmitterQueryVariables>;
export function refetchGetAllTransmitterQuery(variables?: GetAllTransmitterQueryVariables) {
      return { query: GetAllTransmitterDocument, variables: variables }
    }
export const GetTransmitterMarksDocument = gql`
    query GetTransmitterMarks {
  GetTransmitterMarks
}
    `;

/**
 * __useGetTransmitterMarksQuery__
 *
 * To run a query within a React component, call `useGetTransmitterMarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransmitterMarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransmitterMarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTransmitterMarksQuery(baseOptions?: Apollo.QueryHookOptions<GetTransmitterMarksQuery, GetTransmitterMarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransmitterMarksQuery, GetTransmitterMarksQueryVariables>(GetTransmitterMarksDocument, options);
      }
export function useGetTransmitterMarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransmitterMarksQuery, GetTransmitterMarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransmitterMarksQuery, GetTransmitterMarksQueryVariables>(GetTransmitterMarksDocument, options);
        }
export type GetTransmitterMarksQueryHookResult = ReturnType<typeof useGetTransmitterMarksQuery>;
export type GetTransmitterMarksLazyQueryHookResult = ReturnType<typeof useGetTransmitterMarksLazyQuery>;
export type GetTransmitterMarksQueryResult = Apollo.QueryResult<GetTransmitterMarksQuery, GetTransmitterMarksQueryVariables>;
export function refetchGetTransmitterMarksQuery(variables?: GetTransmitterMarksQueryVariables) {
      return { query: GetTransmitterMarksDocument, variables: variables }
    }
export const GetTransmitterModelDocument = gql`
    query GetTransmitterModel {
  GetTransmitterModel
}
    `;

/**
 * __useGetTransmitterModelQuery__
 *
 * To run a query within a React component, call `useGetTransmitterModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransmitterModelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransmitterModelQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTransmitterModelQuery(baseOptions?: Apollo.QueryHookOptions<GetTransmitterModelQuery, GetTransmitterModelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransmitterModelQuery, GetTransmitterModelQueryVariables>(GetTransmitterModelDocument, options);
      }
export function useGetTransmitterModelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransmitterModelQuery, GetTransmitterModelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransmitterModelQuery, GetTransmitterModelQueryVariables>(GetTransmitterModelDocument, options);
        }
export type GetTransmitterModelQueryHookResult = ReturnType<typeof useGetTransmitterModelQuery>;
export type GetTransmitterModelLazyQueryHookResult = ReturnType<typeof useGetTransmitterModelLazyQuery>;
export type GetTransmitterModelQueryResult = Apollo.QueryResult<GetTransmitterModelQuery, GetTransmitterModelQueryVariables>;
export function refetchGetTransmitterModelQuery(variables?: GetTransmitterModelQueryVariables) {
      return { query: GetTransmitterModelDocument, variables: variables }
    }
export const GetAllTransmitterNotInstallDocument = gql`
    query GetAllTransmitterNotInstall {
  GetAllTransmitterNotInstall {
    AccreditatedDate
    AccreditationType
    AccreditationDocument
    AppovalDate
    AppovalDecision
    Approvaled
    Description
    InstallIndex
    ExpiryDate
    Installed
    Marks
    MeterSerial
    ReceiptDate
    Serial
    Size
    Status
    _id
    Provider
    Model
  }
}
    `;

/**
 * __useGetAllTransmitterNotInstallQuery__
 *
 * To run a query within a React component, call `useGetAllTransmitterNotInstallQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTransmitterNotInstallQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTransmitterNotInstallQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTransmitterNotInstallQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTransmitterNotInstallQuery, GetAllTransmitterNotInstallQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTransmitterNotInstallQuery, GetAllTransmitterNotInstallQueryVariables>(GetAllTransmitterNotInstallDocument, options);
      }
export function useGetAllTransmitterNotInstallLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTransmitterNotInstallQuery, GetAllTransmitterNotInstallQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTransmitterNotInstallQuery, GetAllTransmitterNotInstallQueryVariables>(GetAllTransmitterNotInstallDocument, options);
        }
export type GetAllTransmitterNotInstallQueryHookResult = ReturnType<typeof useGetAllTransmitterNotInstallQuery>;
export type GetAllTransmitterNotInstallLazyQueryHookResult = ReturnType<typeof useGetAllTransmitterNotInstallLazyQuery>;
export type GetAllTransmitterNotInstallQueryResult = Apollo.QueryResult<GetAllTransmitterNotInstallQuery, GetAllTransmitterNotInstallQueryVariables>;
export function refetchGetAllTransmitterNotInstallQuery(variables?: GetAllTransmitterNotInstallQueryVariables) {
      return { query: GetAllTransmitterNotInstallDocument, variables: variables }
    }
export const GetTransmitterProviderDocument = gql`
    query GetTransmitterProvider {
  GetTransmitterProvider
}
    `;

/**
 * __useGetTransmitterProviderQuery__
 *
 * To run a query within a React component, call `useGetTransmitterProviderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransmitterProviderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransmitterProviderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTransmitterProviderQuery(baseOptions?: Apollo.QueryHookOptions<GetTransmitterProviderQuery, GetTransmitterProviderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransmitterProviderQuery, GetTransmitterProviderQueryVariables>(GetTransmitterProviderDocument, options);
      }
export function useGetTransmitterProviderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransmitterProviderQuery, GetTransmitterProviderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransmitterProviderQuery, GetTransmitterProviderQueryVariables>(GetTransmitterProviderDocument, options);
        }
export type GetTransmitterProviderQueryHookResult = ReturnType<typeof useGetTransmitterProviderQuery>;
export type GetTransmitterProviderLazyQueryHookResult = ReturnType<typeof useGetTransmitterProviderLazyQuery>;
export type GetTransmitterProviderQueryResult = Apollo.QueryResult<GetTransmitterProviderQuery, GetTransmitterProviderQueryVariables>;
export function refetchGetTransmitterProviderQuery(variables?: GetTransmitterProviderQueryVariables) {
      return { query: GetTransmitterProviderDocument, variables: variables }
    }
export const GetTransmitterSizeDocument = gql`
    query GetTransmitterSize {
  GetTransmitterSize
}
    `;

/**
 * __useGetTransmitterSizeQuery__
 *
 * To run a query within a React component, call `useGetTransmitterSizeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransmitterSizeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransmitterSizeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTransmitterSizeQuery(baseOptions?: Apollo.QueryHookOptions<GetTransmitterSizeQuery, GetTransmitterSizeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransmitterSizeQuery, GetTransmitterSizeQueryVariables>(GetTransmitterSizeDocument, options);
      }
export function useGetTransmitterSizeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransmitterSizeQuery, GetTransmitterSizeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransmitterSizeQuery, GetTransmitterSizeQueryVariables>(GetTransmitterSizeDocument, options);
        }
export type GetTransmitterSizeQueryHookResult = ReturnType<typeof useGetTransmitterSizeQuery>;
export type GetTransmitterSizeLazyQueryHookResult = ReturnType<typeof useGetTransmitterSizeLazyQuery>;
export type GetTransmitterSizeQueryResult = Apollo.QueryResult<GetTransmitterSizeQuery, GetTransmitterSizeQueryVariables>;
export function refetchGetTransmitterSizeQuery(variables?: GetTransmitterSizeQueryVariables) {
      return { query: GetTransmitterSizeDocument, variables: variables }
    }
export const GetAllUnitDocument = gql`
    query GetAllUnit {
  GetAllUnit {
    Description
    Unit
    _id
  }
}
    `;

/**
 * __useGetAllUnitQuery__
 *
 * To run a query within a React component, call `useGetAllUnitQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUnitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUnitQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUnitQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUnitQuery, GetAllUnitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUnitQuery, GetAllUnitQueryVariables>(GetAllUnitDocument, options);
      }
export function useGetAllUnitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUnitQuery, GetAllUnitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUnitQuery, GetAllUnitQueryVariables>(GetAllUnitDocument, options);
        }
export type GetAllUnitQueryHookResult = ReturnType<typeof useGetAllUnitQuery>;
export type GetAllUnitLazyQueryHookResult = ReturnType<typeof useGetAllUnitLazyQuery>;
export type GetAllUnitQueryResult = Apollo.QueryResult<GetAllUnitQuery, GetAllUnitQueryVariables>;
export function refetchGetAllUnitQuery(variables?: GetAllUnitQueryVariables) {
      return { query: GetAllUnitDocument, variables: variables }
    }
export const GetAllUserDocument = gql`
    query GetAllUser {
  GetAllUser {
    Active
    Company
    Ip
    Language
    LogCount
    Pwd
    Role
    Salt
    StaffId
    TimeStamp
    Uid
    Zoom
    _id
  }
}
    `;

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
      }
export function useGetAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserQueryResult = Apollo.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;
export function refetchGetAllUserQuery(variables?: GetAllUserQueryVariables) {
      return { query: GetAllUserDocument, variables: variables }
    }
export const GetAllUserAndStaffDocument = gql`
    query GetAllUserAndStaff {
  GetAllUserAndStaff {
    Active
    Company
    FirstName
    Ip
    Language
    LogCount
    LastName
    Pwd
    Role
    Salt
    StaffId
    TimeStamp
    Uid
    Zoom
    _id
  }
}
    `;

/**
 * __useGetAllUserAndStaffQuery__
 *
 * To run a query within a React component, call `useGetAllUserAndStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserAndStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserAndStaffQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserAndStaffQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserAndStaffQuery, GetAllUserAndStaffQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserAndStaffQuery, GetAllUserAndStaffQueryVariables>(GetAllUserAndStaffDocument, options);
      }
export function useGetAllUserAndStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserAndStaffQuery, GetAllUserAndStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserAndStaffQuery, GetAllUserAndStaffQueryVariables>(GetAllUserAndStaffDocument, options);
        }
export type GetAllUserAndStaffQueryHookResult = ReturnType<typeof useGetAllUserAndStaffQuery>;
export type GetAllUserAndStaffLazyQueryHookResult = ReturnType<typeof useGetAllUserAndStaffLazyQuery>;
export type GetAllUserAndStaffQueryResult = Apollo.QueryResult<GetAllUserAndStaffQuery, GetAllUserAndStaffQueryVariables>;
export function refetchGetAllUserAndStaffQuery(variables?: GetAllUserAndStaffQueryVariables) {
      return { query: GetAllUserAndStaffDocument, variables: variables }
    }
export const GetAllViewGroupsDocument = gql`
    query GetAllViewGroups {
  GetAllViewGroups
}
    `;

/**
 * __useGetAllViewGroupsQuery__
 *
 * To run a query within a React component, call `useGetAllViewGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllViewGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllViewGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllViewGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllViewGroupsQuery, GetAllViewGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllViewGroupsQuery, GetAllViewGroupsQueryVariables>(GetAllViewGroupsDocument, options);
      }
export function useGetAllViewGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllViewGroupsQuery, GetAllViewGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllViewGroupsQuery, GetAllViewGroupsQueryVariables>(GetAllViewGroupsDocument, options);
        }
export type GetAllViewGroupsQueryHookResult = ReturnType<typeof useGetAllViewGroupsQuery>;
export type GetAllViewGroupsLazyQueryHookResult = ReturnType<typeof useGetAllViewGroupsLazyQuery>;
export type GetAllViewGroupsQueryResult = Apollo.QueryResult<GetAllViewGroupsQuery, GetAllViewGroupsQueryVariables>;
export function refetchGetAllViewGroupsQuery(variables?: GetAllViewGroupsQueryVariables) {
      return { query: GetAllViewGroupsDocument, variables: variables }
    }
export const QueryDocument = gql`
    query Query($loggerid: String!) {
  GetChannelByLoggerId(loggerid: $loggerid) {
    BaseLine
    BaseMax
    BaseMin
    Description
    DisplayOnGraph
    ForwardFlow
    IndexTimeStamp
    GroupChannel
    LastIndex
    LastTimeStamp
    LastValue
    LoggerId
    Name
    Pressure1
    Pressure2
    ReverseFlow
    StatusViewAlarm
    _id
    Unit
  }
}
    `;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *      loggerid: // value for 'loggerid'
 *   },
 * });
 */
export function useQueryQuery(baseOptions: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;
export function refetchQueryQuery(variables: QueryQueryVariables) {
      return { query: QueryDocument, variables: variables }
    }
export const GetDataLoggerByLastRecordDocument = gql`
    query GetDataLoggerByLastRecord($channelid: String!) {
  GetDataLoggerByLastRecord(channelid: $channelid) {
    TimeStamp
    Value
  }
}
    `;

/**
 * __useGetDataLoggerByLastRecordQuery__
 *
 * To run a query within a React component, call `useGetDataLoggerByLastRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataLoggerByLastRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataLoggerByLastRecordQuery({
 *   variables: {
 *      channelid: // value for 'channelid'
 *   },
 * });
 */
export function useGetDataLoggerByLastRecordQuery(baseOptions: Apollo.QueryHookOptions<GetDataLoggerByLastRecordQuery, GetDataLoggerByLastRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDataLoggerByLastRecordQuery, GetDataLoggerByLastRecordQueryVariables>(GetDataLoggerByLastRecordDocument, options);
      }
export function useGetDataLoggerByLastRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDataLoggerByLastRecordQuery, GetDataLoggerByLastRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDataLoggerByLastRecordQuery, GetDataLoggerByLastRecordQueryVariables>(GetDataLoggerByLastRecordDocument, options);
        }
export type GetDataLoggerByLastRecordQueryHookResult = ReturnType<typeof useGetDataLoggerByLastRecordQuery>;
export type GetDataLoggerByLastRecordLazyQueryHookResult = ReturnType<typeof useGetDataLoggerByLastRecordLazyQuery>;
export type GetDataLoggerByLastRecordQueryResult = Apollo.QueryResult<GetDataLoggerByLastRecordQuery, GetDataLoggerByLastRecordQueryVariables>;
export function refetchGetDataLoggerByLastRecordQuery(variables: GetDataLoggerByLastRecordQueryVariables) {
      return { query: GetDataLoggerByLastRecordDocument, variables: variables }
    }
export const GetDataLoggerByTimeStampDocument = gql`
    query GetDataLoggerByTimeStamp($channelid: String!, $start: String!, $end: String!) {
  GetDataLoggerByTimeStamp(channelid: $channelid, start: $start, end: $end) {
    TimeStamp
    Value
  }
}
    `;

/**
 * __useGetDataLoggerByTimeStampQuery__
 *
 * To run a query within a React component, call `useGetDataLoggerByTimeStampQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataLoggerByTimeStampQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataLoggerByTimeStampQuery({
 *   variables: {
 *      channelid: // value for 'channelid'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetDataLoggerByTimeStampQuery(baseOptions: Apollo.QueryHookOptions<GetDataLoggerByTimeStampQuery, GetDataLoggerByTimeStampQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDataLoggerByTimeStampQuery, GetDataLoggerByTimeStampQueryVariables>(GetDataLoggerByTimeStampDocument, options);
      }
export function useGetDataLoggerByTimeStampLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDataLoggerByTimeStampQuery, GetDataLoggerByTimeStampQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDataLoggerByTimeStampQuery, GetDataLoggerByTimeStampQueryVariables>(GetDataLoggerByTimeStampDocument, options);
        }
export type GetDataLoggerByTimeStampQueryHookResult = ReturnType<typeof useGetDataLoggerByTimeStampQuery>;
export type GetDataLoggerByTimeStampLazyQueryHookResult = ReturnType<typeof useGetDataLoggerByTimeStampLazyQuery>;
export type GetDataLoggerByTimeStampQueryResult = Apollo.QueryResult<GetDataLoggerByTimeStampQuery, GetDataLoggerByTimeStampQueryVariables>;
export function refetchGetDataLoggerByTimeStampQuery(variables: GetDataLoggerByTimeStampQueryVariables) {
      return { query: GetDataLoggerByTimeStampDocument, variables: variables }
    }
export const GetDataManualBySiteIdDocument = gql`
    query GetDataManualBySiteId($siteid: String) {
  GetDataManualBySiteId(siteid: $siteid) {
    Description
    Index
    Output
    Stt
    TimeStamp
    SiteId
    _id
  }
}
    `;

/**
 * __useGetDataManualBySiteIdQuery__
 *
 * To run a query within a React component, call `useGetDataManualBySiteIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataManualBySiteIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataManualBySiteIdQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *   },
 * });
 */
export function useGetDataManualBySiteIdQuery(baseOptions?: Apollo.QueryHookOptions<GetDataManualBySiteIdQuery, GetDataManualBySiteIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDataManualBySiteIdQuery, GetDataManualBySiteIdQueryVariables>(GetDataManualBySiteIdDocument, options);
      }
export function useGetDataManualBySiteIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDataManualBySiteIdQuery, GetDataManualBySiteIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDataManualBySiteIdQuery, GetDataManualBySiteIdQueryVariables>(GetDataManualBySiteIdDocument, options);
        }
export type GetDataManualBySiteIdQueryHookResult = ReturnType<typeof useGetDataManualBySiteIdQuery>;
export type GetDataManualBySiteIdLazyQueryHookResult = ReturnType<typeof useGetDataManualBySiteIdLazyQuery>;
export type GetDataManualBySiteIdQueryResult = Apollo.QueryResult<GetDataManualBySiteIdQuery, GetDataManualBySiteIdQueryVariables>;
export function refetchGetDataManualBySiteIdQuery(variables?: GetDataManualBySiteIdQueryVariables) {
      return { query: GetDataManualBySiteIdDocument, variables: variables }
    }
export const GetDataManualBySiteIdAndTimeStampDocument = gql`
    query GetDataManualBySiteIdAndTimeStamp($siteid: String, $start: String, $end: String) {
  GetDataManualBySiteIdAndTimeStamp(siteid: $siteid, start: $start, end: $end) {
    Description
    Index
    Output
    SiteId
    Stt
    TimeStamp
    _id
  }
}
    `;

/**
 * __useGetDataManualBySiteIdAndTimeStampQuery__
 *
 * To run a query within a React component, call `useGetDataManualBySiteIdAndTimeStampQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataManualBySiteIdAndTimeStampQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataManualBySiteIdAndTimeStampQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetDataManualBySiteIdAndTimeStampQuery(baseOptions?: Apollo.QueryHookOptions<GetDataManualBySiteIdAndTimeStampQuery, GetDataManualBySiteIdAndTimeStampQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDataManualBySiteIdAndTimeStampQuery, GetDataManualBySiteIdAndTimeStampQueryVariables>(GetDataManualBySiteIdAndTimeStampDocument, options);
      }
export function useGetDataManualBySiteIdAndTimeStampLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDataManualBySiteIdAndTimeStampQuery, GetDataManualBySiteIdAndTimeStampQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDataManualBySiteIdAndTimeStampQuery, GetDataManualBySiteIdAndTimeStampQueryVariables>(GetDataManualBySiteIdAndTimeStampDocument, options);
        }
export type GetDataManualBySiteIdAndTimeStampQueryHookResult = ReturnType<typeof useGetDataManualBySiteIdAndTimeStampQuery>;
export type GetDataManualBySiteIdAndTimeStampLazyQueryHookResult = ReturnType<typeof useGetDataManualBySiteIdAndTimeStampLazyQuery>;
export type GetDataManualBySiteIdAndTimeStampQueryResult = Apollo.QueryResult<GetDataManualBySiteIdAndTimeStampQuery, GetDataManualBySiteIdAndTimeStampQueryVariables>;
export function refetchGetDataManualBySiteIdAndTimeStampQuery(variables?: GetDataManualBySiteIdAndTimeStampQueryVariables) {
      return { query: GetDataManualBySiteIdAndTimeStampDocument, variables: variables }
    }
export const GetHistoryLoggerBySiteIdDocument = gql`
    query GetHistoryLoggerBySiteId($siteid: String) {
  GetHistoryLoggerBySiteId(siteid: $siteid) {
    DateChanged
    Description
    NewMeterIndex
    NewMeterSerial
    OldMeterIndex
    OldMeterSerial
    SiteId
    _id
  }
}
    `;

/**
 * __useGetHistoryLoggerBySiteIdQuery__
 *
 * To run a query within a React component, call `useGetHistoryLoggerBySiteIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHistoryLoggerBySiteIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHistoryLoggerBySiteIdQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *   },
 * });
 */
export function useGetHistoryLoggerBySiteIdQuery(baseOptions?: Apollo.QueryHookOptions<GetHistoryLoggerBySiteIdQuery, GetHistoryLoggerBySiteIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHistoryLoggerBySiteIdQuery, GetHistoryLoggerBySiteIdQueryVariables>(GetHistoryLoggerBySiteIdDocument, options);
      }
export function useGetHistoryLoggerBySiteIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHistoryLoggerBySiteIdQuery, GetHistoryLoggerBySiteIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHistoryLoggerBySiteIdQuery, GetHistoryLoggerBySiteIdQueryVariables>(GetHistoryLoggerBySiteIdDocument, options);
        }
export type GetHistoryLoggerBySiteIdQueryHookResult = ReturnType<typeof useGetHistoryLoggerBySiteIdQuery>;
export type GetHistoryLoggerBySiteIdLazyQueryHookResult = ReturnType<typeof useGetHistoryLoggerBySiteIdLazyQuery>;
export type GetHistoryLoggerBySiteIdQueryResult = Apollo.QueryResult<GetHistoryLoggerBySiteIdQuery, GetHistoryLoggerBySiteIdQueryVariables>;
export function refetchGetHistoryLoggerBySiteIdQuery(variables?: GetHistoryLoggerBySiteIdQueryVariables) {
      return { query: GetHistoryLoggerBySiteIdDocument, variables: variables }
    }
export const GetHistoryMeterBySiteIdDocument = gql`
    query GetHistoryMeterBySiteId($siteid: String) {
  GetHistoryMeterBySiteId(siteid: $siteid) {
    DateChanged
    Description
    NewMeterIndex
    NewMeterSerial
    OldMeterIndex
    OldMeterSerial
    SiteId
    _id
  }
}
    `;

/**
 * __useGetHistoryMeterBySiteIdQuery__
 *
 * To run a query within a React component, call `useGetHistoryMeterBySiteIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHistoryMeterBySiteIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHistoryMeterBySiteIdQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *   },
 * });
 */
export function useGetHistoryMeterBySiteIdQuery(baseOptions?: Apollo.QueryHookOptions<GetHistoryMeterBySiteIdQuery, GetHistoryMeterBySiteIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHistoryMeterBySiteIdQuery, GetHistoryMeterBySiteIdQueryVariables>(GetHistoryMeterBySiteIdDocument, options);
      }
export function useGetHistoryMeterBySiteIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHistoryMeterBySiteIdQuery, GetHistoryMeterBySiteIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHistoryMeterBySiteIdQuery, GetHistoryMeterBySiteIdQueryVariables>(GetHistoryMeterBySiteIdDocument, options);
        }
export type GetHistoryMeterBySiteIdQueryHookResult = ReturnType<typeof useGetHistoryMeterBySiteIdQuery>;
export type GetHistoryMeterBySiteIdLazyQueryHookResult = ReturnType<typeof useGetHistoryMeterBySiteIdLazyQuery>;
export type GetHistoryMeterBySiteIdQueryResult = Apollo.QueryResult<GetHistoryMeterBySiteIdQuery, GetHistoryMeterBySiteIdQueryVariables>;
export function refetchGetHistoryMeterBySiteIdQuery(variables?: GetHistoryMeterBySiteIdQueryVariables) {
      return { query: GetHistoryMeterBySiteIdDocument, variables: variables }
    }
export const GetHistoryTransmitterBySiteIdDocument = gql`
    query GetHistoryTransmitterBySiteId($siteid: String) {
  GetHistoryTransmitterBySiteId(siteid: $siteid) {
    DateChanged
    Description
    NewMeterIndex
    NewMeterSerial
    OldMeterIndex
    OldMeterSerial
    SiteId
    _id
  }
}
    `;

/**
 * __useGetHistoryTransmitterBySiteIdQuery__
 *
 * To run a query within a React component, call `useGetHistoryTransmitterBySiteIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHistoryTransmitterBySiteIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHistoryTransmitterBySiteIdQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *   },
 * });
 */
export function useGetHistoryTransmitterBySiteIdQuery(baseOptions?: Apollo.QueryHookOptions<GetHistoryTransmitterBySiteIdQuery, GetHistoryTransmitterBySiteIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHistoryTransmitterBySiteIdQuery, GetHistoryTransmitterBySiteIdQueryVariables>(GetHistoryTransmitterBySiteIdDocument, options);
      }
export function useGetHistoryTransmitterBySiteIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHistoryTransmitterBySiteIdQuery, GetHistoryTransmitterBySiteIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHistoryTransmitterBySiteIdQuery, GetHistoryTransmitterBySiteIdQueryVariables>(GetHistoryTransmitterBySiteIdDocument, options);
        }
export type GetHistoryTransmitterBySiteIdQueryHookResult = ReturnType<typeof useGetHistoryTransmitterBySiteIdQuery>;
export type GetHistoryTransmitterBySiteIdLazyQueryHookResult = ReturnType<typeof useGetHistoryTransmitterBySiteIdLazyQuery>;
export type GetHistoryTransmitterBySiteIdQueryResult = Apollo.QueryResult<GetHistoryTransmitterBySiteIdQuery, GetHistoryTransmitterBySiteIdQueryVariables>;
export function refetchGetHistoryTransmitterBySiteIdQuery(variables?: GetHistoryTransmitterBySiteIdQueryVariables) {
      return { query: GetHistoryTransmitterBySiteIdDocument, variables: variables }
    }
export const GetAllMeterAccreditationTypeDocument = gql`
    query GetAllMeterAccreditationType {
  GetAllMeterAccreditationType {
    AccreditationType
    Description
    _id
  }
}
    `;

/**
 * __useGetAllMeterAccreditationTypeQuery__
 *
 * To run a query within a React component, call `useGetAllMeterAccreditationTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMeterAccreditationTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMeterAccreditationTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMeterAccreditationTypeQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMeterAccreditationTypeQuery, GetAllMeterAccreditationTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMeterAccreditationTypeQuery, GetAllMeterAccreditationTypeQueryVariables>(GetAllMeterAccreditationTypeDocument, options);
      }
export function useGetAllMeterAccreditationTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMeterAccreditationTypeQuery, GetAllMeterAccreditationTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMeterAccreditationTypeQuery, GetAllMeterAccreditationTypeQueryVariables>(GetAllMeterAccreditationTypeDocument, options);
        }
export type GetAllMeterAccreditationTypeQueryHookResult = ReturnType<typeof useGetAllMeterAccreditationTypeQuery>;
export type GetAllMeterAccreditationTypeLazyQueryHookResult = ReturnType<typeof useGetAllMeterAccreditationTypeLazyQuery>;
export type GetAllMeterAccreditationTypeQueryResult = Apollo.QueryResult<GetAllMeterAccreditationTypeQuery, GetAllMeterAccreditationTypeQueryVariables>;
export function refetchGetAllMeterAccreditationTypeQuery(variables?: GetAllMeterAccreditationTypeQueryVariables) {
      return { query: GetAllMeterAccreditationTypeDocument, variables: variables }
    }
export const GetPreciousByCompanyDocument = gql`
    query GetPreciousByCompany($company: String) {
  GetPreciousByCompany(company: $company) {
    _id
    Company
    Start
    CompanyName
    End
    Period
    CreateAt
    UsernameCreated
    Location {
      Location
      Reason
      Periods {
        Period
        Quantity
      }
      SiteId
      AverageDate
      DateCalclogger {
        Quantity
        From
        To
        DateRange
      }
      QuantityLogger
      TotalQuantity
      PrevTetHoliday
      NextTetHoliday
      TenDayPrevTetHoliday
      KFactory
      AveragePrevTetHoliday
      AverageTenDayPrevTetHoliday
    }
    Index {
      SiteId
      Location
      PreviousPeriodIndex
      NextPeriodIndex
    }
    LockValve {
      SiteId
      Location
    }
    SubtractWaterB1 {
      NumberPrecious
      Content
      Provider
      AmountWater
      Note
    }
    SubtractWaterB2 {
      NumberPrecious
      Content
      AmountWater
      Provider
      Note
    }
    WaterCustomer {
      NumberPrecious
      DatePublished
      AmountMeter
      AmountWater
      Note
    }
  }
}
    `;

/**
 * __useGetPreciousByCompanyQuery__
 *
 * To run a query within a React component, call `useGetPreciousByCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreciousByCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreciousByCompanyQuery({
 *   variables: {
 *      company: // value for 'company'
 *   },
 * });
 */
export function useGetPreciousByCompanyQuery(baseOptions?: Apollo.QueryHookOptions<GetPreciousByCompanyQuery, GetPreciousByCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPreciousByCompanyQuery, GetPreciousByCompanyQueryVariables>(GetPreciousByCompanyDocument, options);
      }
export function useGetPreciousByCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPreciousByCompanyQuery, GetPreciousByCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPreciousByCompanyQuery, GetPreciousByCompanyQueryVariables>(GetPreciousByCompanyDocument, options);
        }
export type GetPreciousByCompanyQueryHookResult = ReturnType<typeof useGetPreciousByCompanyQuery>;
export type GetPreciousByCompanyLazyQueryHookResult = ReturnType<typeof useGetPreciousByCompanyLazyQuery>;
export type GetPreciousByCompanyQueryResult = Apollo.QueryResult<GetPreciousByCompanyQuery, GetPreciousByCompanyQueryVariables>;
export function refetchGetPreciousByCompanyQuery(variables?: GetPreciousByCompanyQueryVariables) {
      return { query: GetPreciousByCompanyDocument, variables: variables }
    }
export const QuantityDayGroupDocument = gql`
    query QuantityDayGroup($group: String!, $start: String!, $end: String!) {
  QuantityDayGroup(group: $group, start: $start, end: $end) {
    Address
    Company
    Display
    IstDistributionCompany
    IstDoNotCalculateReverse
    ListQuantity {
      IsEnoughData
      TimeStamp
      Value
    }
    Location
    Marks
    MeterDirection
    OldId
    QndDistributionCompany
    QndDoNotCalculateReverse
    SiteId
    Size
  }
}
    `;

/**
 * __useQuantityDayGroupQuery__
 *
 * To run a query within a React component, call `useQuantityDayGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuantityDayGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityDayGroupQuery({
 *   variables: {
 *      group: // value for 'group'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityDayGroupQuery(baseOptions: Apollo.QueryHookOptions<QuantityDayGroupQuery, QuantityDayGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityDayGroupQuery, QuantityDayGroupQueryVariables>(QuantityDayGroupDocument, options);
      }
export function useQuantityDayGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityDayGroupQuery, QuantityDayGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityDayGroupQuery, QuantityDayGroupQueryVariables>(QuantityDayGroupDocument, options);
        }
export type QuantityDayGroupQueryHookResult = ReturnType<typeof useQuantityDayGroupQuery>;
export type QuantityDayGroupLazyQueryHookResult = ReturnType<typeof useQuantityDayGroupLazyQuery>;
export type QuantityDayGroupQueryResult = Apollo.QueryResult<QuantityDayGroupQuery, QuantityDayGroupQueryVariables>;
export function refetchQuantityDayGroupQuery(variables: QuantityDayGroupQueryVariables) {
      return { query: QuantityDayGroupDocument, variables: variables }
    }
export const QuantityDayGroup2Document = gql`
    query QuantityDayGroup2($group: String!, $start: String!, $end: String!) {
  QuantityDayGroup2(group: $group, start: $start, end: $end) {
    Address
    Company
    Display
    IstDistributionCompany
    IstDoNotCalculateReverse
    ListQuantity {
      IsEnoughData
      TimeStamp
      Value
    }
    Location
    Marks
    MeterDirection
    OldId
    QndDistributionCompany
    QndDoNotCalculateReverse
    SiteId
    Size
  }
}
    `;

/**
 * __useQuantityDayGroup2Query__
 *
 * To run a query within a React component, call `useQuantityDayGroup2Query` and pass it any options that fit your needs.
 * When your component renders, `useQuantityDayGroup2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityDayGroup2Query({
 *   variables: {
 *      group: // value for 'group'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityDayGroup2Query(baseOptions: Apollo.QueryHookOptions<QuantityDayGroup2Query, QuantityDayGroup2QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityDayGroup2Query, QuantityDayGroup2QueryVariables>(QuantityDayGroup2Document, options);
      }
export function useQuantityDayGroup2LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityDayGroup2Query, QuantityDayGroup2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityDayGroup2Query, QuantityDayGroup2QueryVariables>(QuantityDayGroup2Document, options);
        }
export type QuantityDayGroup2QueryHookResult = ReturnType<typeof useQuantityDayGroup2Query>;
export type QuantityDayGroup2LazyQueryHookResult = ReturnType<typeof useQuantityDayGroup2LazyQuery>;
export type QuantityDayGroup2QueryResult = Apollo.QueryResult<QuantityDayGroup2Query, QuantityDayGroup2QueryVariables>;
export function refetchQuantityDayGroup2Query(variables: QuantityDayGroup2QueryVariables) {
      return { query: QuantityDayGroup2Document, variables: variables }
    }
export const QuantityDayGroup5Document = gql`
    query QuantityDayGroup5($group: String!, $start: String!, $end: String!) {
  QuantityDayGroup5(group: $group, start: $start, end: $end) {
    Address
    Company
    Display
    IstDistributionCompany
    IstDoNotCalculateReverse
    ListQuantity {
      IsEnoughData
      TimeStamp
      Value
    }
    Location
    Marks
    MeterDirection
    OldId
    QndDistributionCompany
    QndDoNotCalculateReverse
    SiteId
    Size
  }
}
    `;

/**
 * __useQuantityDayGroup5Query__
 *
 * To run a query within a React component, call `useQuantityDayGroup5Query` and pass it any options that fit your needs.
 * When your component renders, `useQuantityDayGroup5Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityDayGroup5Query({
 *   variables: {
 *      group: // value for 'group'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityDayGroup5Query(baseOptions: Apollo.QueryHookOptions<QuantityDayGroup5Query, QuantityDayGroup5QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityDayGroup5Query, QuantityDayGroup5QueryVariables>(QuantityDayGroup5Document, options);
      }
export function useQuantityDayGroup5LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityDayGroup5Query, QuantityDayGroup5QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityDayGroup5Query, QuantityDayGroup5QueryVariables>(QuantityDayGroup5Document, options);
        }
export type QuantityDayGroup5QueryHookResult = ReturnType<typeof useQuantityDayGroup5Query>;
export type QuantityDayGroup5LazyQueryHookResult = ReturnType<typeof useQuantityDayGroup5LazyQuery>;
export type QuantityDayGroup5QueryResult = Apollo.QueryResult<QuantityDayGroup5Query, QuantityDayGroup5QueryVariables>;
export function refetchQuantityDayGroup5Query(variables: QuantityDayGroup5QueryVariables) {
      return { query: QuantityDayGroup5Document, variables: variables }
    }
export const QuantityDayGroup4Document = gql`
    query QuantityDayGroup4($group: String!, $start: String!, $end: String!) {
  QuantityDayGroup4(group: $group, start: $start, end: $end) {
    Address
    Company
    Display
    IstDistributionCompany
    IstDoNotCalculateReverse
    ListQuantity {
      IsEnoughData
      TimeStamp
      Value
    }
    Location
    Marks
    MeterDirection
    OldId
    QndDistributionCompany
    QndDoNotCalculateReverse
    SiteId
    Size
  }
}
    `;

/**
 * __useQuantityDayGroup4Query__
 *
 * To run a query within a React component, call `useQuantityDayGroup4Query` and pass it any options that fit your needs.
 * When your component renders, `useQuantityDayGroup4Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityDayGroup4Query({
 *   variables: {
 *      group: // value for 'group'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityDayGroup4Query(baseOptions: Apollo.QueryHookOptions<QuantityDayGroup4Query, QuantityDayGroup4QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityDayGroup4Query, QuantityDayGroup4QueryVariables>(QuantityDayGroup4Document, options);
      }
export function useQuantityDayGroup4LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityDayGroup4Query, QuantityDayGroup4QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityDayGroup4Query, QuantityDayGroup4QueryVariables>(QuantityDayGroup4Document, options);
        }
export type QuantityDayGroup4QueryHookResult = ReturnType<typeof useQuantityDayGroup4Query>;
export type QuantityDayGroup4LazyQueryHookResult = ReturnType<typeof useQuantityDayGroup4LazyQuery>;
export type QuantityDayGroup4QueryResult = Apollo.QueryResult<QuantityDayGroup4Query, QuantityDayGroup4QueryVariables>;
export function refetchQuantityDayGroup4Query(variables: QuantityDayGroup4QueryVariables) {
      return { query: QuantityDayGroup4Document, variables: variables }
    }
export const QuantityDayGroup3Document = gql`
    query QuantityDayGroup3($group: String!, $start: String!, $end: String!) {
  QuantityDayGroup3(group: $group, start: $start, end: $end) {
    Address
    Company
    Display
    IstDistributionCompany
    IstDoNotCalculateReverse
    ListQuantity {
      IsEnoughData
      TimeStamp
      Value
    }
    Location
    Marks
    MeterDirection
    OldId
    QndDistributionCompany
    QndDoNotCalculateReverse
    SiteId
    Size
  }
}
    `;

/**
 * __useQuantityDayGroup3Query__
 *
 * To run a query within a React component, call `useQuantityDayGroup3Query` and pass it any options that fit your needs.
 * When your component renders, `useQuantityDayGroup3Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityDayGroup3Query({
 *   variables: {
 *      group: // value for 'group'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityDayGroup3Query(baseOptions: Apollo.QueryHookOptions<QuantityDayGroup3Query, QuantityDayGroup3QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityDayGroup3Query, QuantityDayGroup3QueryVariables>(QuantityDayGroup3Document, options);
      }
export function useQuantityDayGroup3LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityDayGroup3Query, QuantityDayGroup3QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityDayGroup3Query, QuantityDayGroup3QueryVariables>(QuantityDayGroup3Document, options);
        }
export type QuantityDayGroup3QueryHookResult = ReturnType<typeof useQuantityDayGroup3Query>;
export type QuantityDayGroup3LazyQueryHookResult = ReturnType<typeof useQuantityDayGroup3LazyQuery>;
export type QuantityDayGroup3QueryResult = Apollo.QueryResult<QuantityDayGroup3Query, QuantityDayGroup3QueryVariables>;
export function refetchQuantityDayGroup3Query(variables: QuantityDayGroup3QueryVariables) {
      return { query: QuantityDayGroup3Document, variables: variables }
    }
export const QuantityDayLevelDocument = gql`
    query QuantityDayLevel($level: String!, $start: String!, $end: String!) {
  QuantityDayLevel(level: $level, start: $start, end: $end) {
    Address
    Company
    Display
    IstDistributionCompany
    ListQuantity {
      IsEnoughData
      TimeStamp
      Value
    }
    Location
    Marks
    MeterDirection
    OldId
    QndDistributionCompany
    SiteId
    Size
  }
}
    `;

/**
 * __useQuantityDayLevelQuery__
 *
 * To run a query within a React component, call `useQuantityDayLevelQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuantityDayLevelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityDayLevelQuery({
 *   variables: {
 *      level: // value for 'level'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityDayLevelQuery(baseOptions: Apollo.QueryHookOptions<QuantityDayLevelQuery, QuantityDayLevelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityDayLevelQuery, QuantityDayLevelQueryVariables>(QuantityDayLevelDocument, options);
      }
export function useQuantityDayLevelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityDayLevelQuery, QuantityDayLevelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityDayLevelQuery, QuantityDayLevelQueryVariables>(QuantityDayLevelDocument, options);
        }
export type QuantityDayLevelQueryHookResult = ReturnType<typeof useQuantityDayLevelQuery>;
export type QuantityDayLevelLazyQueryHookResult = ReturnType<typeof useQuantityDayLevelLazyQuery>;
export type QuantityDayLevelQueryResult = Apollo.QueryResult<QuantityDayLevelQuery, QuantityDayLevelQueryVariables>;
export function refetchQuantityDayLevelQuery(variables: QuantityDayLevelQueryVariables) {
      return { query: QuantityDayLevelDocument, variables: variables }
    }
export const QuantityDayTotalDocument = gql`
    query QuantityDayTotal($start: String!, $end: String!) {
  QuantityDayTotal(start: $start, end: $end) {
    Address
    Company
    Display
    IstDistributionCompany
    ListQuantity {
      IsEnoughData
      TimeStamp
      Value
    }
    Location
    Marks
    MeterDirection
    OldId
    QndDistributionCompany
    SiteId
    Size
  }
}
    `;

/**
 * __useQuantityDayTotalQuery__
 *
 * To run a query within a React component, call `useQuantityDayTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuantityDayTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityDayTotalQuery({
 *   variables: {
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityDayTotalQuery(baseOptions: Apollo.QueryHookOptions<QuantityDayTotalQuery, QuantityDayTotalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityDayTotalQuery, QuantityDayTotalQueryVariables>(QuantityDayTotalDocument, options);
      }
export function useQuantityDayTotalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityDayTotalQuery, QuantityDayTotalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityDayTotalQuery, QuantityDayTotalQueryVariables>(QuantityDayTotalDocument, options);
        }
export type QuantityDayTotalQueryHookResult = ReturnType<typeof useQuantityDayTotalQuery>;
export type QuantityDayTotalLazyQueryHookResult = ReturnType<typeof useQuantityDayTotalLazyQuery>;
export type QuantityDayTotalQueryResult = Apollo.QueryResult<QuantityDayTotalQuery, QuantityDayTotalQueryVariables>;
export function refetchQuantityDayTotalQuery(variables: QuantityDayTotalQueryVariables) {
      return { query: QuantityDayTotalDocument, variables: variables }
    }
export const GetSiteByIdDocument = gql`
    query GetSiteById($siteid: String) {
  GetSiteById(siteid: $siteid) {
    Address
    Availability
    ChangeIndex
    ChangeIndex1
    CoverID
    Company
    DateOfBatteryChange
    DateOfLoggerBatteryChange
    DateOfLoggerChange
    DateOfTransmitterBatteryChange
    DateOfMeterChange
    DateOfTransmitterChange
    Description
    Display
    DescriptionOfChange
    District
    Group
    Group2
    Group4
    Group3
    Group5
    IsErrorBattery
    IstDoNotCalculateReverse
    IstDistributionCompany
    Latitude
    Level
    Location
    Logger
    Longitude
    Meter
    MeterDirection
    OldId
    ProductionCompany
    Property
    QndDistributionCompany
    QndDoNotCalculateReverse
    StaffId
    Status
    TakeoverDate
    Takeovered
    Transmitter
    UsingLogger
    ViewGroup
    _id
  }
}
    `;

/**
 * __useGetSiteByIdQuery__
 *
 * To run a query within a React component, call `useGetSiteByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSiteByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSiteByIdQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *   },
 * });
 */
export function useGetSiteByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetSiteByIdQuery, GetSiteByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSiteByIdQuery, GetSiteByIdQueryVariables>(GetSiteByIdDocument, options);
      }
export function useGetSiteByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSiteByIdQuery, GetSiteByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSiteByIdQuery, GetSiteByIdQueryVariables>(GetSiteByIdDocument, options);
        }
export type GetSiteByIdQueryHookResult = ReturnType<typeof useGetSiteByIdQuery>;
export type GetSiteByIdLazyQueryHookResult = ReturnType<typeof useGetSiteByIdLazyQuery>;
export type GetSiteByIdQueryResult = Apollo.QueryResult<GetSiteByIdQuery, GetSiteByIdQueryVariables>;
export function refetchGetSiteByIdQuery(variables?: GetSiteByIdQueryVariables) {
      return { query: GetSiteByIdDocument, variables: variables }
    }
export const GetSiteByWaterSubtractB2ForTaDocument = gql`
    query GetSiteByWaterSubtractB2ForTA {
  GetSiteByWaterSubtractB2ForTA {
    _id
    Location
    OldId
    Latitude
    Longitude
    ViewGroup
    StaffId
    Meter
    Transmitter
    Logger
    DateOfMeterChange
    DateOfLoggerChange
    DateOfTransmitterChange
    DateOfBatteryChange
    DateOfTransmitterBatteryChange
    DateOfLoggerBatteryChange
    DescriptionOfChange
    ChangeIndex
    Level
    Group
    Company
    Takeovered
    TakeoverDate
    Availability
    Status
    Display
    Property
    UsingLogger
    MeterDirection
    ProductionCompany
    IstDistributionCompany
    QndDistributionCompany
    IstDoNotCalculateReverse
    QndDoNotCalculateReverse
    ChangeIndex1
    Description
    Group2
    Address
    CoverID
    Group3
    Group4
    Group5
    District
    IsErrorBattery
  }
}
    `;

/**
 * __useGetSiteByWaterSubtractB2ForTaQuery__
 *
 * To run a query within a React component, call `useGetSiteByWaterSubtractB2ForTaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSiteByWaterSubtractB2ForTaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSiteByWaterSubtractB2ForTaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSiteByWaterSubtractB2ForTaQuery(baseOptions?: Apollo.QueryHookOptions<GetSiteByWaterSubtractB2ForTaQuery, GetSiteByWaterSubtractB2ForTaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSiteByWaterSubtractB2ForTaQuery, GetSiteByWaterSubtractB2ForTaQueryVariables>(GetSiteByWaterSubtractB2ForTaDocument, options);
      }
export function useGetSiteByWaterSubtractB2ForTaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSiteByWaterSubtractB2ForTaQuery, GetSiteByWaterSubtractB2ForTaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSiteByWaterSubtractB2ForTaQuery, GetSiteByWaterSubtractB2ForTaQueryVariables>(GetSiteByWaterSubtractB2ForTaDocument, options);
        }
export type GetSiteByWaterSubtractB2ForTaQueryHookResult = ReturnType<typeof useGetSiteByWaterSubtractB2ForTaQuery>;
export type GetSiteByWaterSubtractB2ForTaLazyQueryHookResult = ReturnType<typeof useGetSiteByWaterSubtractB2ForTaLazyQuery>;
export type GetSiteByWaterSubtractB2ForTaQueryResult = Apollo.QueryResult<GetSiteByWaterSubtractB2ForTaQuery, GetSiteByWaterSubtractB2ForTaQueryVariables>;
export function refetchGetSiteByWaterSubtractB2ForTaQuery(variables?: GetSiteByWaterSubtractB2ForTaQueryVariables) {
      return { query: GetSiteByWaterSubtractB2ForTaDocument, variables: variables }
    }
export const GetSiteByWaterSupplyDocument = gql`
    query GetSiteByWaterSupply($company: String!) {
  GetSiteByWaterSupply(company: $company) {
    _id
    OldId
    Location
    Logger
    Company
    Description
    MeterDirection
    ProductionCompany
    IstDistributionCompany
    QndDistributionCompany
    IstDoNotCalculateReverse
    QndDoNotCalculateReverse
    Address
  }
}
    `;

/**
 * __useGetSiteByWaterSupplyQuery__
 *
 * To run a query within a React component, call `useGetSiteByWaterSupplyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSiteByWaterSupplyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSiteByWaterSupplyQuery({
 *   variables: {
 *      company: // value for 'company'
 *   },
 * });
 */
export function useGetSiteByWaterSupplyQuery(baseOptions: Apollo.QueryHookOptions<GetSiteByWaterSupplyQuery, GetSiteByWaterSupplyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSiteByWaterSupplyQuery, GetSiteByWaterSupplyQueryVariables>(GetSiteByWaterSupplyDocument, options);
      }
export function useGetSiteByWaterSupplyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSiteByWaterSupplyQuery, GetSiteByWaterSupplyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSiteByWaterSupplyQuery, GetSiteByWaterSupplyQueryVariables>(GetSiteByWaterSupplyDocument, options);
        }
export type GetSiteByWaterSupplyQueryHookResult = ReturnType<typeof useGetSiteByWaterSupplyQuery>;
export type GetSiteByWaterSupplyLazyQueryHookResult = ReturnType<typeof useGetSiteByWaterSupplyLazyQuery>;
export type GetSiteByWaterSupplyQueryResult = Apollo.QueryResult<GetSiteByWaterSupplyQuery, GetSiteByWaterSupplyQueryVariables>;
export function refetchGetSiteByWaterSupplyQuery(variables: GetSiteByWaterSupplyQueryVariables) {
      return { query: GetSiteByWaterSupplyDocument, variables: variables }
    }
export const GetStatisticAccreditedDocument = gql`
    query GetStatisticAccredited($date: Date) {
  GetStatisticAccredited(date: $date) {
    AccreditationDocument
    DateOfChange
    DescriptionOfChange
    ExpiryDate
    Location
    Marks
    Size
    _id
  }
}
    `;

/**
 * __useGetStatisticAccreditedQuery__
 *
 * To run a query within a React component, call `useGetStatisticAccreditedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticAccreditedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticAccreditedQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetStatisticAccreditedQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticAccreditedQuery, GetStatisticAccreditedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticAccreditedQuery, GetStatisticAccreditedQueryVariables>(GetStatisticAccreditedDocument, options);
      }
export function useGetStatisticAccreditedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticAccreditedQuery, GetStatisticAccreditedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticAccreditedQuery, GetStatisticAccreditedQueryVariables>(GetStatisticAccreditedDocument, options);
        }
export type GetStatisticAccreditedQueryHookResult = ReturnType<typeof useGetStatisticAccreditedQuery>;
export type GetStatisticAccreditedLazyQueryHookResult = ReturnType<typeof useGetStatisticAccreditedLazyQuery>;
export type GetStatisticAccreditedQueryResult = Apollo.QueryResult<GetStatisticAccreditedQuery, GetStatisticAccreditedQueryVariables>;
export function refetchGetStatisticAccreditedQuery(variables?: GetStatisticAccreditedQueryVariables) {
      return { query: GetStatisticAccreditedDocument, variables: variables }
    }
export const GetStatisticAccreditationAndExpiryDateDocument = gql`
    query GetStatisticAccreditationAndExpiryDate($date: Date) {
  GetStatisticAccreditationAndExpiryDate(date: $date) {
    AccreditationDocument
    DateOfChange
    DescriptionOfChange
    ExpiryDate
    Location
    Marks
    Size
    _id
  }
}
    `;

/**
 * __useGetStatisticAccreditationAndExpiryDateQuery__
 *
 * To run a query within a React component, call `useGetStatisticAccreditationAndExpiryDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticAccreditationAndExpiryDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticAccreditationAndExpiryDateQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetStatisticAccreditationAndExpiryDateQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticAccreditationAndExpiryDateQuery, GetStatisticAccreditationAndExpiryDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticAccreditationAndExpiryDateQuery, GetStatisticAccreditationAndExpiryDateQueryVariables>(GetStatisticAccreditationAndExpiryDateDocument, options);
      }
export function useGetStatisticAccreditationAndExpiryDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticAccreditationAndExpiryDateQuery, GetStatisticAccreditationAndExpiryDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticAccreditationAndExpiryDateQuery, GetStatisticAccreditationAndExpiryDateQueryVariables>(GetStatisticAccreditationAndExpiryDateDocument, options);
        }
export type GetStatisticAccreditationAndExpiryDateQueryHookResult = ReturnType<typeof useGetStatisticAccreditationAndExpiryDateQuery>;
export type GetStatisticAccreditationAndExpiryDateLazyQueryHookResult = ReturnType<typeof useGetStatisticAccreditationAndExpiryDateLazyQuery>;
export type GetStatisticAccreditationAndExpiryDateQueryResult = Apollo.QueryResult<GetStatisticAccreditationAndExpiryDateQuery, GetStatisticAccreditationAndExpiryDateQueryVariables>;
export function refetchGetStatisticAccreditationAndExpiryDateQuery(variables?: GetStatisticAccreditationAndExpiryDateQueryVariables) {
      return { query: GetStatisticAccreditationAndExpiryDateDocument, variables: variables }
    }
export const GetStatisticBatteryChangeDocument = gql`
    query GetStatisticBatteryChange($date: Date) {
  GetStatisticBatteryChange(date: $date) {
    AccreditationDocument
    DateOfChange
    DescriptionOfChange
    ExpiryDate
    Id
    Location
    Marks
    Meter
    Size
    Transmitter
  }
}
    `;

/**
 * __useGetStatisticBatteryChangeQuery__
 *
 * To run a query within a React component, call `useGetStatisticBatteryChangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticBatteryChangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticBatteryChangeQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetStatisticBatteryChangeQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticBatteryChangeQuery, GetStatisticBatteryChangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticBatteryChangeQuery, GetStatisticBatteryChangeQueryVariables>(GetStatisticBatteryChangeDocument, options);
      }
export function useGetStatisticBatteryChangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticBatteryChangeQuery, GetStatisticBatteryChangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticBatteryChangeQuery, GetStatisticBatteryChangeQueryVariables>(GetStatisticBatteryChangeDocument, options);
        }
export type GetStatisticBatteryChangeQueryHookResult = ReturnType<typeof useGetStatisticBatteryChangeQuery>;
export type GetStatisticBatteryChangeLazyQueryHookResult = ReturnType<typeof useGetStatisticBatteryChangeLazyQuery>;
export type GetStatisticBatteryChangeQueryResult = Apollo.QueryResult<GetStatisticBatteryChangeQuery, GetStatisticBatteryChangeQueryVariables>;
export function refetchGetStatisticBatteryChangeQuery(variables?: GetStatisticBatteryChangeQueryVariables) {
      return { query: GetStatisticBatteryChangeDocument, variables: variables }
    }
export const GetStatisticBatteryChangeByYearUsingDocument = gql`
    query GetStatisticBatteryChangeByYearUsing($date: Date, $year: Int) {
  GetStatisticBatteryChangeByYearUsing(date: $date, year: $year) {
    Company
    DateOfChange
    DescriptionOfChange
    Location
    Marks
    Size
    Status
    _id
  }
}
    `;

/**
 * __useGetStatisticBatteryChangeByYearUsingQuery__
 *
 * To run a query within a React component, call `useGetStatisticBatteryChangeByYearUsingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticBatteryChangeByYearUsingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticBatteryChangeByYearUsingQuery({
 *   variables: {
 *      date: // value for 'date'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetStatisticBatteryChangeByYearUsingQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticBatteryChangeByYearUsingQuery, GetStatisticBatteryChangeByYearUsingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticBatteryChangeByYearUsingQuery, GetStatisticBatteryChangeByYearUsingQueryVariables>(GetStatisticBatteryChangeByYearUsingDocument, options);
      }
export function useGetStatisticBatteryChangeByYearUsingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticBatteryChangeByYearUsingQuery, GetStatisticBatteryChangeByYearUsingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticBatteryChangeByYearUsingQuery, GetStatisticBatteryChangeByYearUsingQueryVariables>(GetStatisticBatteryChangeByYearUsingDocument, options);
        }
export type GetStatisticBatteryChangeByYearUsingQueryHookResult = ReturnType<typeof useGetStatisticBatteryChangeByYearUsingQuery>;
export type GetStatisticBatteryChangeByYearUsingLazyQueryHookResult = ReturnType<typeof useGetStatisticBatteryChangeByYearUsingLazyQuery>;
export type GetStatisticBatteryChangeByYearUsingQueryResult = Apollo.QueryResult<GetStatisticBatteryChangeByYearUsingQuery, GetStatisticBatteryChangeByYearUsingQueryVariables>;
export function refetchGetStatisticBatteryChangeByYearUsingQuery(variables?: GetStatisticBatteryChangeByYearUsingQueryVariables) {
      return { query: GetStatisticBatteryChangeByYearUsingDocument, variables: variables }
    }
export const GetStatisticCustomChoiceLoggerDocument = gql`
    query GetStatisticCustomChoiceLogger {
  GetStatisticCustomChoiceLogger {
    Description
    Installed
    Location
    LoggerId
    Marks
    Model
    Provider
    ReceiptDate
    Serial
    SiteCompany
    SiteId
    SiteStatus
    Status
  }
}
    `;

/**
 * __useGetStatisticCustomChoiceLoggerQuery__
 *
 * To run a query within a React component, call `useGetStatisticCustomChoiceLoggerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticCustomChoiceLoggerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticCustomChoiceLoggerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatisticCustomChoiceLoggerQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticCustomChoiceLoggerQuery, GetStatisticCustomChoiceLoggerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticCustomChoiceLoggerQuery, GetStatisticCustomChoiceLoggerQueryVariables>(GetStatisticCustomChoiceLoggerDocument, options);
      }
export function useGetStatisticCustomChoiceLoggerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticCustomChoiceLoggerQuery, GetStatisticCustomChoiceLoggerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticCustomChoiceLoggerQuery, GetStatisticCustomChoiceLoggerQueryVariables>(GetStatisticCustomChoiceLoggerDocument, options);
        }
export type GetStatisticCustomChoiceLoggerQueryHookResult = ReturnType<typeof useGetStatisticCustomChoiceLoggerQuery>;
export type GetStatisticCustomChoiceLoggerLazyQueryHookResult = ReturnType<typeof useGetStatisticCustomChoiceLoggerLazyQuery>;
export type GetStatisticCustomChoiceLoggerQueryResult = Apollo.QueryResult<GetStatisticCustomChoiceLoggerQuery, GetStatisticCustomChoiceLoggerQueryVariables>;
export function refetchGetStatisticCustomChoiceLoggerQuery(variables?: GetStatisticCustomChoiceLoggerQueryVariables) {
      return { query: GetStatisticCustomChoiceLoggerDocument, variables: variables }
    }
export const GetStatisticCustomChoiceMarkSizeDocument = gql`
    query GetStatisticCustomChoiceMarkSize {
  GetStatisticCustomChoiceMarkSize {
    AccreditationDocument
    AccreditationType
    AccreditedDate
    ApprovalDecision
    Approved
    Availability
    Company
    DateOfMeterChange
    Description
    Group
    ExpiryDate
    Group2
    IstDistributionCompany
    Level
    Location
    Logger
    LoggerModel
    Marks
    Meter
    Model
    ProductionCompany
    Property
    Provider
    QndDistributionCompany
    Size
    Status
    Takeovered
    Transmitter
    UsingLogger
    _id
  }
}
    `;

/**
 * __useGetStatisticCustomChoiceMarkSizeQuery__
 *
 * To run a query within a React component, call `useGetStatisticCustomChoiceMarkSizeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticCustomChoiceMarkSizeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticCustomChoiceMarkSizeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatisticCustomChoiceMarkSizeQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticCustomChoiceMarkSizeQuery, GetStatisticCustomChoiceMarkSizeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticCustomChoiceMarkSizeQuery, GetStatisticCustomChoiceMarkSizeQueryVariables>(GetStatisticCustomChoiceMarkSizeDocument, options);
      }
export function useGetStatisticCustomChoiceMarkSizeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticCustomChoiceMarkSizeQuery, GetStatisticCustomChoiceMarkSizeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticCustomChoiceMarkSizeQuery, GetStatisticCustomChoiceMarkSizeQueryVariables>(GetStatisticCustomChoiceMarkSizeDocument, options);
        }
export type GetStatisticCustomChoiceMarkSizeQueryHookResult = ReturnType<typeof useGetStatisticCustomChoiceMarkSizeQuery>;
export type GetStatisticCustomChoiceMarkSizeLazyQueryHookResult = ReturnType<typeof useGetStatisticCustomChoiceMarkSizeLazyQuery>;
export type GetStatisticCustomChoiceMarkSizeQueryResult = Apollo.QueryResult<GetStatisticCustomChoiceMarkSizeQuery, GetStatisticCustomChoiceMarkSizeQueryVariables>;
export function refetchGetStatisticCustomChoiceMarkSizeQuery(variables?: GetStatisticCustomChoiceMarkSizeQueryVariables) {
      return { query: GetStatisticCustomChoiceMarkSizeDocument, variables: variables }
    }
export const GetStatisticCustomChoiceMeterDocument = gql`
    query GetStatisticCustomChoiceMeter {
  GetStatisticCustomChoiceMeter {
    AccreditationDocument
    AccreditationType
    AccreditedDate
    Description
    ExpiryDate
    InitialIndex
    Installed
    Location
    Marks
    Model
    Nationality
    Provider
    ReceiptDate
    Serial
    SiteCompany
    SiteId
    SiteStatus
    Size
    Status
    TransmitterSerial
  }
}
    `;

/**
 * __useGetStatisticCustomChoiceMeterQuery__
 *
 * To run a query within a React component, call `useGetStatisticCustomChoiceMeterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticCustomChoiceMeterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticCustomChoiceMeterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatisticCustomChoiceMeterQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticCustomChoiceMeterQuery, GetStatisticCustomChoiceMeterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticCustomChoiceMeterQuery, GetStatisticCustomChoiceMeterQueryVariables>(GetStatisticCustomChoiceMeterDocument, options);
      }
export function useGetStatisticCustomChoiceMeterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticCustomChoiceMeterQuery, GetStatisticCustomChoiceMeterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticCustomChoiceMeterQuery, GetStatisticCustomChoiceMeterQueryVariables>(GetStatisticCustomChoiceMeterDocument, options);
        }
export type GetStatisticCustomChoiceMeterQueryHookResult = ReturnType<typeof useGetStatisticCustomChoiceMeterQuery>;
export type GetStatisticCustomChoiceMeterLazyQueryHookResult = ReturnType<typeof useGetStatisticCustomChoiceMeterLazyQuery>;
export type GetStatisticCustomChoiceMeterQueryResult = Apollo.QueryResult<GetStatisticCustomChoiceMeterQuery, GetStatisticCustomChoiceMeterQueryVariables>;
export function refetchGetStatisticCustomChoiceMeterQuery(variables?: GetStatisticCustomChoiceMeterQueryVariables) {
      return { query: GetStatisticCustomChoiceMeterDocument, variables: variables }
    }
export const GetStatisticCustomChoiceSiteDocument = gql`
    query GetStatisticCustomChoiceSite {
  GetStatisticCustomChoiceSite {
    AccreditationDocument
    AccreditedDate
    ApprovalDecision
    Company
    Availability
    DateOfMeterChange
    Description
    ExpiryDate
    Group
    Group2
    IstDistributionCompany
    Level
    Location
    Logger
    LoggerModel
    Marks
    Meter
    Model
    ProductionCompany
    Property
    Provider
    QndDistributionCompany
    Size
    Status
    Takeovered
    Transmitter
    UsingLogger
    _id
    AccreditationType
    Approved
  }
}
    `;

/**
 * __useGetStatisticCustomChoiceSiteQuery__
 *
 * To run a query within a React component, call `useGetStatisticCustomChoiceSiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticCustomChoiceSiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticCustomChoiceSiteQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatisticCustomChoiceSiteQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticCustomChoiceSiteQuery, GetStatisticCustomChoiceSiteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticCustomChoiceSiteQuery, GetStatisticCustomChoiceSiteQueryVariables>(GetStatisticCustomChoiceSiteDocument, options);
      }
export function useGetStatisticCustomChoiceSiteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticCustomChoiceSiteQuery, GetStatisticCustomChoiceSiteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticCustomChoiceSiteQuery, GetStatisticCustomChoiceSiteQueryVariables>(GetStatisticCustomChoiceSiteDocument, options);
        }
export type GetStatisticCustomChoiceSiteQueryHookResult = ReturnType<typeof useGetStatisticCustomChoiceSiteQuery>;
export type GetStatisticCustomChoiceSiteLazyQueryHookResult = ReturnType<typeof useGetStatisticCustomChoiceSiteLazyQuery>;
export type GetStatisticCustomChoiceSiteQueryResult = Apollo.QueryResult<GetStatisticCustomChoiceSiteQuery, GetStatisticCustomChoiceSiteQueryVariables>;
export function refetchGetStatisticCustomChoiceSiteQuery(variables?: GetStatisticCustomChoiceSiteQueryVariables) {
      return { query: GetStatisticCustomChoiceSiteDocument, variables: variables }
    }
export const GetStatisticCustomChoiceTransmitterDocument = gql`
    query GetStatisticCustomChoiceTransmitter {
  GetStatisticCustomChoiceTransmitter {
    Description
    InitialIndex
    Installed
    Location
    Marks
    Model
    Provider
    ReceiptDate
    Serial
    SiteCompany
    SiteId
    SiteStatus
    Size
    Status
  }
}
    `;

/**
 * __useGetStatisticCustomChoiceTransmitterQuery__
 *
 * To run a query within a React component, call `useGetStatisticCustomChoiceTransmitterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticCustomChoiceTransmitterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticCustomChoiceTransmitterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatisticCustomChoiceTransmitterQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticCustomChoiceTransmitterQuery, GetStatisticCustomChoiceTransmitterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticCustomChoiceTransmitterQuery, GetStatisticCustomChoiceTransmitterQueryVariables>(GetStatisticCustomChoiceTransmitterDocument, options);
      }
export function useGetStatisticCustomChoiceTransmitterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticCustomChoiceTransmitterQuery, GetStatisticCustomChoiceTransmitterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticCustomChoiceTransmitterQuery, GetStatisticCustomChoiceTransmitterQueryVariables>(GetStatisticCustomChoiceTransmitterDocument, options);
        }
export type GetStatisticCustomChoiceTransmitterQueryHookResult = ReturnType<typeof useGetStatisticCustomChoiceTransmitterQuery>;
export type GetStatisticCustomChoiceTransmitterLazyQueryHookResult = ReturnType<typeof useGetStatisticCustomChoiceTransmitterLazyQuery>;
export type GetStatisticCustomChoiceTransmitterQueryResult = Apollo.QueryResult<GetStatisticCustomChoiceTransmitterQuery, GetStatisticCustomChoiceTransmitterQueryVariables>;
export function refetchGetStatisticCustomChoiceTransmitterQuery(variables?: GetStatisticCustomChoiceTransmitterQueryVariables) {
      return { query: GetStatisticCustomChoiceTransmitterDocument, variables: variables }
    }
export const GetStatisticHistoryLoggerAndLoggerBySiteIdDocument = gql`
    query GetStatisticHistoryLoggerAndLoggerBySiteId($siteid: String) {
  GetStatisticHistoryLoggerAndLoggerBySiteId(siteid: $siteid) {
    DateChanged
    Description
    NewMarks
    NewIndex
    NewModel
    NewProvider
    NewSerial
    OldMarks
    OldIndex
    OldProvider
    OldModel
    OldSerial
    STT
  }
}
    `;

/**
 * __useGetStatisticHistoryLoggerAndLoggerBySiteIdQuery__
 *
 * To run a query within a React component, call `useGetStatisticHistoryLoggerAndLoggerBySiteIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticHistoryLoggerAndLoggerBySiteIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticHistoryLoggerAndLoggerBySiteIdQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *   },
 * });
 */
export function useGetStatisticHistoryLoggerAndLoggerBySiteIdQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticHistoryLoggerAndLoggerBySiteIdQuery, GetStatisticHistoryLoggerAndLoggerBySiteIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticHistoryLoggerAndLoggerBySiteIdQuery, GetStatisticHistoryLoggerAndLoggerBySiteIdQueryVariables>(GetStatisticHistoryLoggerAndLoggerBySiteIdDocument, options);
      }
export function useGetStatisticHistoryLoggerAndLoggerBySiteIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticHistoryLoggerAndLoggerBySiteIdQuery, GetStatisticHistoryLoggerAndLoggerBySiteIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticHistoryLoggerAndLoggerBySiteIdQuery, GetStatisticHistoryLoggerAndLoggerBySiteIdQueryVariables>(GetStatisticHistoryLoggerAndLoggerBySiteIdDocument, options);
        }
export type GetStatisticHistoryLoggerAndLoggerBySiteIdQueryHookResult = ReturnType<typeof useGetStatisticHistoryLoggerAndLoggerBySiteIdQuery>;
export type GetStatisticHistoryLoggerAndLoggerBySiteIdLazyQueryHookResult = ReturnType<typeof useGetStatisticHistoryLoggerAndLoggerBySiteIdLazyQuery>;
export type GetStatisticHistoryLoggerAndLoggerBySiteIdQueryResult = Apollo.QueryResult<GetStatisticHistoryLoggerAndLoggerBySiteIdQuery, GetStatisticHistoryLoggerAndLoggerBySiteIdQueryVariables>;
export function refetchGetStatisticHistoryLoggerAndLoggerBySiteIdQuery(variables?: GetStatisticHistoryLoggerAndLoggerBySiteIdQueryVariables) {
      return { query: GetStatisticHistoryLoggerAndLoggerBySiteIdDocument, variables: variables }
    }
export const GetStatisticHistoryMeterAndMeterBySiteIdDocument = gql`
    query GetStatisticHistoryMeterAndMeterBySiteId($siteid: String) {
  GetStatisticHistoryMeterAndMeterBySiteId(siteid: $siteid) {
    AccreditationDocument
    DateChanged
    Description
    NewIndex
    NewMarks
    NewModel
    NewProvider
    NewSerial
    NewSize
    OldIndex
    OldMarks
    OldModel
    OldProvider
    OldSerial
    OldSize
    STT
  }
}
    `;

/**
 * __useGetStatisticHistoryMeterAndMeterBySiteIdQuery__
 *
 * To run a query within a React component, call `useGetStatisticHistoryMeterAndMeterBySiteIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticHistoryMeterAndMeterBySiteIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticHistoryMeterAndMeterBySiteIdQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *   },
 * });
 */
export function useGetStatisticHistoryMeterAndMeterBySiteIdQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticHistoryMeterAndMeterBySiteIdQuery, GetStatisticHistoryMeterAndMeterBySiteIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticHistoryMeterAndMeterBySiteIdQuery, GetStatisticHistoryMeterAndMeterBySiteIdQueryVariables>(GetStatisticHistoryMeterAndMeterBySiteIdDocument, options);
      }
export function useGetStatisticHistoryMeterAndMeterBySiteIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticHistoryMeterAndMeterBySiteIdQuery, GetStatisticHistoryMeterAndMeterBySiteIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticHistoryMeterAndMeterBySiteIdQuery, GetStatisticHistoryMeterAndMeterBySiteIdQueryVariables>(GetStatisticHistoryMeterAndMeterBySiteIdDocument, options);
        }
export type GetStatisticHistoryMeterAndMeterBySiteIdQueryHookResult = ReturnType<typeof useGetStatisticHistoryMeterAndMeterBySiteIdQuery>;
export type GetStatisticHistoryMeterAndMeterBySiteIdLazyQueryHookResult = ReturnType<typeof useGetStatisticHistoryMeterAndMeterBySiteIdLazyQuery>;
export type GetStatisticHistoryMeterAndMeterBySiteIdQueryResult = Apollo.QueryResult<GetStatisticHistoryMeterAndMeterBySiteIdQuery, GetStatisticHistoryMeterAndMeterBySiteIdQueryVariables>;
export function refetchGetStatisticHistoryMeterAndMeterBySiteIdQuery(variables?: GetStatisticHistoryMeterAndMeterBySiteIdQueryVariables) {
      return { query: GetStatisticHistoryMeterAndMeterBySiteIdDocument, variables: variables }
    }
export const GetStatisticHistoryTransmitterAndTransmitterBySiteIdDocument = gql`
    query GetStatisticHistoryTransmitterAndTransmitterBySiteId($siteid: String) {
  GetStatisticHistoryTransmitterAndTransmitterBySiteId(siteid: $siteid) {
    DateChanged
    Description
    NewIndex
    NewMarks
    NewModel
    NewProvider
    NewSerial
    NewSize
    OldIndex
    OldMarks
    OldModel
    OldProvider
    OldSerial
    OldSize
    STT
  }
}
    `;

/**
 * __useGetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery__
 *
 * To run a query within a React component, call `useGetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *   },
 * });
 */
export function useGetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery, GetStatisticHistoryTransmitterAndTransmitterBySiteIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery, GetStatisticHistoryTransmitterAndTransmitterBySiteIdQueryVariables>(GetStatisticHistoryTransmitterAndTransmitterBySiteIdDocument, options);
      }
export function useGetStatisticHistoryTransmitterAndTransmitterBySiteIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery, GetStatisticHistoryTransmitterAndTransmitterBySiteIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery, GetStatisticHistoryTransmitterAndTransmitterBySiteIdQueryVariables>(GetStatisticHistoryTransmitterAndTransmitterBySiteIdDocument, options);
        }
export type GetStatisticHistoryTransmitterAndTransmitterBySiteIdQueryHookResult = ReturnType<typeof useGetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery>;
export type GetStatisticHistoryTransmitterAndTransmitterBySiteIdLazyQueryHookResult = ReturnType<typeof useGetStatisticHistoryTransmitterAndTransmitterBySiteIdLazyQuery>;
export type GetStatisticHistoryTransmitterAndTransmitterBySiteIdQueryResult = Apollo.QueryResult<GetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery, GetStatisticHistoryTransmitterAndTransmitterBySiteIdQueryVariables>;
export function refetchGetStatisticHistoryTransmitterAndTransmitterBySiteIdQuery(variables?: GetStatisticHistoryTransmitterAndTransmitterBySiteIdQueryVariables) {
      return { query: GetStatisticHistoryTransmitterAndTransmitterBySiteIdDocument, variables: variables }
    }
export const GetStatisticLoggerBatteryChangeDocument = gql`
    query GetStatisticLoggerBatteryChange($date: Date) {
  GetStatisticLoggerBatteryChange(date: $date) {
    AccreditationDocument
    DateOfChange
    DescriptionOfChange
    ExpiryDate
    Id
    Location
    Marks
    Meter
    Size
    Transmitter
  }
}
    `;

/**
 * __useGetStatisticLoggerBatteryChangeQuery__
 *
 * To run a query within a React component, call `useGetStatisticLoggerBatteryChangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticLoggerBatteryChangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticLoggerBatteryChangeQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetStatisticLoggerBatteryChangeQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticLoggerBatteryChangeQuery, GetStatisticLoggerBatteryChangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticLoggerBatteryChangeQuery, GetStatisticLoggerBatteryChangeQueryVariables>(GetStatisticLoggerBatteryChangeDocument, options);
      }
export function useGetStatisticLoggerBatteryChangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticLoggerBatteryChangeQuery, GetStatisticLoggerBatteryChangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticLoggerBatteryChangeQuery, GetStatisticLoggerBatteryChangeQueryVariables>(GetStatisticLoggerBatteryChangeDocument, options);
        }
export type GetStatisticLoggerBatteryChangeQueryHookResult = ReturnType<typeof useGetStatisticLoggerBatteryChangeQuery>;
export type GetStatisticLoggerBatteryChangeLazyQueryHookResult = ReturnType<typeof useGetStatisticLoggerBatteryChangeLazyQuery>;
export type GetStatisticLoggerBatteryChangeQueryResult = Apollo.QueryResult<GetStatisticLoggerBatteryChangeQuery, GetStatisticLoggerBatteryChangeQueryVariables>;
export function refetchGetStatisticLoggerBatteryChangeQuery(variables?: GetStatisticLoggerBatteryChangeQueryVariables) {
      return { query: GetStatisticLoggerBatteryChangeDocument, variables: variables }
    }
export const GetStatisticTransmitterChangeByYearUsingDocument = gql`
    query GetStatisticTransmitterChangeByYearUsing($date: Date, $year: Int) {
  GetStatisticTransmitterChangeByYearUsing(date: $date, year: $year) {
    Company
    DateOfChange
    DescriptionOfChange
    Location
    Marks
    Size
    Status
    _id
  }
}
    `;

/**
 * __useGetStatisticTransmitterChangeByYearUsingQuery__
 *
 * To run a query within a React component, call `useGetStatisticTransmitterChangeByYearUsingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticTransmitterChangeByYearUsingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticTransmitterChangeByYearUsingQuery({
 *   variables: {
 *      date: // value for 'date'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetStatisticTransmitterChangeByYearUsingQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticTransmitterChangeByYearUsingQuery, GetStatisticTransmitterChangeByYearUsingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticTransmitterChangeByYearUsingQuery, GetStatisticTransmitterChangeByYearUsingQueryVariables>(GetStatisticTransmitterChangeByYearUsingDocument, options);
      }
export function useGetStatisticTransmitterChangeByYearUsingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticTransmitterChangeByYearUsingQuery, GetStatisticTransmitterChangeByYearUsingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticTransmitterChangeByYearUsingQuery, GetStatisticTransmitterChangeByYearUsingQueryVariables>(GetStatisticTransmitterChangeByYearUsingDocument, options);
        }
export type GetStatisticTransmitterChangeByYearUsingQueryHookResult = ReturnType<typeof useGetStatisticTransmitterChangeByYearUsingQuery>;
export type GetStatisticTransmitterChangeByYearUsingLazyQueryHookResult = ReturnType<typeof useGetStatisticTransmitterChangeByYearUsingLazyQuery>;
export type GetStatisticTransmitterChangeByYearUsingQueryResult = Apollo.QueryResult<GetStatisticTransmitterChangeByYearUsingQuery, GetStatisticTransmitterChangeByYearUsingQueryVariables>;
export function refetchGetStatisticTransmitterChangeByYearUsingQuery(variables?: GetStatisticTransmitterChangeByYearUsingQueryVariables) {
      return { query: GetStatisticTransmitterChangeByYearUsingDocument, variables: variables }
    }
export const GetStatisticLoggerChangeDocument = gql`
    query GetStatisticLoggerChange($date: Date) {
  GetStatisticLoggerChange(date: $date) {
    Location
    NewLogger
    OldLogger
    _id
    DateOfChange
    DescriptionOfChange
  }
}
    `;

/**
 * __useGetStatisticLoggerChangeQuery__
 *
 * To run a query within a React component, call `useGetStatisticLoggerChangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticLoggerChangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticLoggerChangeQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetStatisticLoggerChangeQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticLoggerChangeQuery, GetStatisticLoggerChangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticLoggerChangeQuery, GetStatisticLoggerChangeQueryVariables>(GetStatisticLoggerChangeDocument, options);
      }
export function useGetStatisticLoggerChangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticLoggerChangeQuery, GetStatisticLoggerChangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticLoggerChangeQuery, GetStatisticLoggerChangeQueryVariables>(GetStatisticLoggerChangeDocument, options);
        }
export type GetStatisticLoggerChangeQueryHookResult = ReturnType<typeof useGetStatisticLoggerChangeQuery>;
export type GetStatisticLoggerChangeLazyQueryHookResult = ReturnType<typeof useGetStatisticLoggerChangeLazyQuery>;
export type GetStatisticLoggerChangeQueryResult = Apollo.QueryResult<GetStatisticLoggerChangeQuery, GetStatisticLoggerChangeQueryVariables>;
export function refetchGetStatisticLoggerChangeQuery(variables?: GetStatisticLoggerChangeQueryVariables) {
      return { query: GetStatisticLoggerChangeDocument, variables: variables }
    }
export const GetStatisticLoggerBatteryChangeByYearUsingDocument = gql`
    query GetStatisticLoggerBatteryChangeByYearUsing($date: Date, $year: Int) {
  GetStatisticLoggerBatteryChangeByYearUsing(date: $date, year: $year) {
    Company
    DateOfChange
    DescriptionOfChange
    Location
    Marks
    Status
    _id
  }
}
    `;

/**
 * __useGetStatisticLoggerBatteryChangeByYearUsingQuery__
 *
 * To run a query within a React component, call `useGetStatisticLoggerBatteryChangeByYearUsingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticLoggerBatteryChangeByYearUsingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticLoggerBatteryChangeByYearUsingQuery({
 *   variables: {
 *      date: // value for 'date'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetStatisticLoggerBatteryChangeByYearUsingQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticLoggerBatteryChangeByYearUsingQuery, GetStatisticLoggerBatteryChangeByYearUsingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticLoggerBatteryChangeByYearUsingQuery, GetStatisticLoggerBatteryChangeByYearUsingQueryVariables>(GetStatisticLoggerBatteryChangeByYearUsingDocument, options);
      }
export function useGetStatisticLoggerBatteryChangeByYearUsingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticLoggerBatteryChangeByYearUsingQuery, GetStatisticLoggerBatteryChangeByYearUsingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticLoggerBatteryChangeByYearUsingQuery, GetStatisticLoggerBatteryChangeByYearUsingQueryVariables>(GetStatisticLoggerBatteryChangeByYearUsingDocument, options);
        }
export type GetStatisticLoggerBatteryChangeByYearUsingQueryHookResult = ReturnType<typeof useGetStatisticLoggerBatteryChangeByYearUsingQuery>;
export type GetStatisticLoggerBatteryChangeByYearUsingLazyQueryHookResult = ReturnType<typeof useGetStatisticLoggerBatteryChangeByYearUsingLazyQuery>;
export type GetStatisticLoggerBatteryChangeByYearUsingQueryResult = Apollo.QueryResult<GetStatisticLoggerBatteryChangeByYearUsingQuery, GetStatisticLoggerBatteryChangeByYearUsingQueryVariables>;
export function refetchGetStatisticLoggerBatteryChangeByYearUsingQuery(variables?: GetStatisticLoggerBatteryChangeByYearUsingQueryVariables) {
      return { query: GetStatisticLoggerBatteryChangeByYearUsingDocument, variables: variables }
    }
export const GetStatisticMarkSizeXnManagerDocument = gql`
    query GetStatisticMarkSizeXNManager {
  GetStatisticMarkSizeXNManager {
    Provider
    Marks {
      Mark
      Models {
        Model
        Sizes {
          Size
          Companies {
            Amount
            Company
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetStatisticMarkSizeXnManagerQuery__
 *
 * To run a query within a React component, call `useGetStatisticMarkSizeXnManagerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticMarkSizeXnManagerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticMarkSizeXnManagerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatisticMarkSizeXnManagerQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticMarkSizeXnManagerQuery, GetStatisticMarkSizeXnManagerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticMarkSizeXnManagerQuery, GetStatisticMarkSizeXnManagerQueryVariables>(GetStatisticMarkSizeXnManagerDocument, options);
      }
export function useGetStatisticMarkSizeXnManagerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticMarkSizeXnManagerQuery, GetStatisticMarkSizeXnManagerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticMarkSizeXnManagerQuery, GetStatisticMarkSizeXnManagerQueryVariables>(GetStatisticMarkSizeXnManagerDocument, options);
        }
export type GetStatisticMarkSizeXnManagerQueryHookResult = ReturnType<typeof useGetStatisticMarkSizeXnManagerQuery>;
export type GetStatisticMarkSizeXnManagerLazyQueryHookResult = ReturnType<typeof useGetStatisticMarkSizeXnManagerLazyQuery>;
export type GetStatisticMarkSizeXnManagerQueryResult = Apollo.QueryResult<GetStatisticMarkSizeXnManagerQuery, GetStatisticMarkSizeXnManagerQueryVariables>;
export function refetchGetStatisticMarkSizeXnManagerQuery(variables?: GetStatisticMarkSizeXnManagerQueryVariables) {
      return { query: GetStatisticMarkSizeXnManagerDocument, variables: variables }
    }
export const GetStatisticMeterChangeDocument = gql`
    query GetStatisticMeterChange($date: Date) {
  GetStatisticMeterChange(date: $date) {
    AccreditationDocument
    DateOfChange
    ExpiryDate
    DescriptionOfChange
    _id
    Level
    Location
    Marks
    Meter
    OldMeter
    OldTran
    Size
    Transmitter
  }
}
    `;

/**
 * __useGetStatisticMeterChangeQuery__
 *
 * To run a query within a React component, call `useGetStatisticMeterChangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticMeterChangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticMeterChangeQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetStatisticMeterChangeQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticMeterChangeQuery, GetStatisticMeterChangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticMeterChangeQuery, GetStatisticMeterChangeQueryVariables>(GetStatisticMeterChangeDocument, options);
      }
export function useGetStatisticMeterChangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticMeterChangeQuery, GetStatisticMeterChangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticMeterChangeQuery, GetStatisticMeterChangeQueryVariables>(GetStatisticMeterChangeDocument, options);
        }
export type GetStatisticMeterChangeQueryHookResult = ReturnType<typeof useGetStatisticMeterChangeQuery>;
export type GetStatisticMeterChangeLazyQueryHookResult = ReturnType<typeof useGetStatisticMeterChangeLazyQuery>;
export type GetStatisticMeterChangeQueryResult = Apollo.QueryResult<GetStatisticMeterChangeQuery, GetStatisticMeterChangeQueryVariables>;
export function refetchGetStatisticMeterChangeQuery(variables?: GetStatisticMeterChangeQueryVariables) {
      return { query: GetStatisticMeterChangeDocument, variables: variables }
    }
export const GetStatisticMeterChangeByYearUsingDocument = gql`
    query GetStatisticMeterChangeByYearUsing($date: Date, $year: Int) {
  GetStatisticMeterChangeByYearUsing(date: $date, year: $year) {
    Company
    DateOfChange
    DescriptionOfChange
    Location
    Marks
    Size
    Status
    _id
    TakeoverDate
  }
}
    `;

/**
 * __useGetStatisticMeterChangeByYearUsingQuery__
 *
 * To run a query within a React component, call `useGetStatisticMeterChangeByYearUsingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticMeterChangeByYearUsingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticMeterChangeByYearUsingQuery({
 *   variables: {
 *      date: // value for 'date'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetStatisticMeterChangeByYearUsingQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticMeterChangeByYearUsingQuery, GetStatisticMeterChangeByYearUsingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticMeterChangeByYearUsingQuery, GetStatisticMeterChangeByYearUsingQueryVariables>(GetStatisticMeterChangeByYearUsingDocument, options);
      }
export function useGetStatisticMeterChangeByYearUsingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticMeterChangeByYearUsingQuery, GetStatisticMeterChangeByYearUsingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticMeterChangeByYearUsingQuery, GetStatisticMeterChangeByYearUsingQueryVariables>(GetStatisticMeterChangeByYearUsingDocument, options);
        }
export type GetStatisticMeterChangeByYearUsingQueryHookResult = ReturnType<typeof useGetStatisticMeterChangeByYearUsingQuery>;
export type GetStatisticMeterChangeByYearUsingLazyQueryHookResult = ReturnType<typeof useGetStatisticMeterChangeByYearUsingLazyQuery>;
export type GetStatisticMeterChangeByYearUsingQueryResult = Apollo.QueryResult<GetStatisticMeterChangeByYearUsingQuery, GetStatisticMeterChangeByYearUsingQueryVariables>;
export function refetchGetStatisticMeterChangeByYearUsingQuery(variables?: GetStatisticMeterChangeByYearUsingQueryVariables) {
      return { query: GetStatisticMeterChangeByYearUsingDocument, variables: variables }
    }
export const GetStatisticSiteXnManagerDocument = gql`
    query GetStatisticSiteXNManager {
  GetStatisticSiteXNManager {
    Availability
    Company
    Description
    Level
    Location
    Marks
    STT
    SiteId
    Size
    Status
    UsingLogger
  }
}
    `;

/**
 * __useGetStatisticSiteXnManagerQuery__
 *
 * To run a query within a React component, call `useGetStatisticSiteXnManagerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticSiteXnManagerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticSiteXnManagerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatisticSiteXnManagerQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticSiteXnManagerQuery, GetStatisticSiteXnManagerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticSiteXnManagerQuery, GetStatisticSiteXnManagerQueryVariables>(GetStatisticSiteXnManagerDocument, options);
      }
export function useGetStatisticSiteXnManagerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticSiteXnManagerQuery, GetStatisticSiteXnManagerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticSiteXnManagerQuery, GetStatisticSiteXnManagerQueryVariables>(GetStatisticSiteXnManagerDocument, options);
        }
export type GetStatisticSiteXnManagerQueryHookResult = ReturnType<typeof useGetStatisticSiteXnManagerQuery>;
export type GetStatisticSiteXnManagerLazyQueryHookResult = ReturnType<typeof useGetStatisticSiteXnManagerLazyQuery>;
export type GetStatisticSiteXnManagerQueryResult = Apollo.QueryResult<GetStatisticSiteXnManagerQuery, GetStatisticSiteXnManagerQueryVariables>;
export function refetchGetStatisticSiteXnManagerQuery(variables?: GetStatisticSiteXnManagerQueryVariables) {
      return { query: GetStatisticSiteXnManagerDocument, variables: variables }
    }
export const GetStatisticTransmitterChangeDocument = gql`
    query GetStatisticTransmitterChange($date: Date) {
  GetStatisticTransmitterChange(date: $date) {
    AccreditationDocument
    DateOfChange
    DescriptionOfChange
    ExpiryDate
    Location
    Marks
    Meter
    Model
    OldMeter
    OldTran
    Size
    Transmitter
    _id
  }
}
    `;

/**
 * __useGetStatisticTransmitterChangeQuery__
 *
 * To run a query within a React component, call `useGetStatisticTransmitterChangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticTransmitterChangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticTransmitterChangeQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetStatisticTransmitterChangeQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticTransmitterChangeQuery, GetStatisticTransmitterChangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticTransmitterChangeQuery, GetStatisticTransmitterChangeQueryVariables>(GetStatisticTransmitterChangeDocument, options);
      }
export function useGetStatisticTransmitterChangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticTransmitterChangeQuery, GetStatisticTransmitterChangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticTransmitterChangeQuery, GetStatisticTransmitterChangeQueryVariables>(GetStatisticTransmitterChangeDocument, options);
        }
export type GetStatisticTransmitterChangeQueryHookResult = ReturnType<typeof useGetStatisticTransmitterChangeQuery>;
export type GetStatisticTransmitterChangeLazyQueryHookResult = ReturnType<typeof useGetStatisticTransmitterChangeLazyQuery>;
export type GetStatisticTransmitterChangeQueryResult = Apollo.QueryResult<GetStatisticTransmitterChangeQuery, GetStatisticTransmitterChangeQueryVariables>;
export function refetchGetStatisticTransmitterChangeQuery(variables?: GetStatisticTransmitterChangeQueryVariables) {
      return { query: GetStatisticTransmitterChangeDocument, variables: variables }
    }
export const GetStatisticTransmitterBatteryChangeDocument = gql`
    query GetStatisticTransmitterBatteryChange($date: Date) {
  GetStatisticTransmitterBatteryChange(date: $date) {
    AccreditationDocument
    DateOfChange
    DescriptionOfChange
    ExpiryDate
    Id
    Location
    Marks
    Meter
    Size
    Transmitter
  }
}
    `;

/**
 * __useGetStatisticTransmitterBatteryChangeQuery__
 *
 * To run a query within a React component, call `useGetStatisticTransmitterBatteryChangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticTransmitterBatteryChangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticTransmitterBatteryChangeQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetStatisticTransmitterBatteryChangeQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticTransmitterBatteryChangeQuery, GetStatisticTransmitterBatteryChangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticTransmitterBatteryChangeQuery, GetStatisticTransmitterBatteryChangeQueryVariables>(GetStatisticTransmitterBatteryChangeDocument, options);
      }
export function useGetStatisticTransmitterBatteryChangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticTransmitterBatteryChangeQuery, GetStatisticTransmitterBatteryChangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticTransmitterBatteryChangeQuery, GetStatisticTransmitterBatteryChangeQueryVariables>(GetStatisticTransmitterBatteryChangeDocument, options);
        }
export type GetStatisticTransmitterBatteryChangeQueryHookResult = ReturnType<typeof useGetStatisticTransmitterBatteryChangeQuery>;
export type GetStatisticTransmitterBatteryChangeLazyQueryHookResult = ReturnType<typeof useGetStatisticTransmitterBatteryChangeLazyQuery>;
export type GetStatisticTransmitterBatteryChangeQueryResult = Apollo.QueryResult<GetStatisticTransmitterBatteryChangeQuery, GetStatisticTransmitterBatteryChangeQueryVariables>;
export function refetchGetStatisticTransmitterBatteryChangeQuery(variables?: GetStatisticTransmitterBatteryChangeQueryVariables) {
      return { query: GetStatisticTransmitterBatteryChangeDocument, variables: variables }
    }
export const GetStatisticLoggerChangeByYearUsingDocument = gql`
    query GetStatisticLoggerChangeByYearUsing($date: Date, $year: Int) {
  GetStatisticLoggerChangeByYearUsing(date: $date, year: $year) {
    Company
    DateOfChange
    DescriptionOfChange
    Location
    Marks
    Status
    _id
  }
}
    `;

/**
 * __useGetStatisticLoggerChangeByYearUsingQuery__
 *
 * To run a query within a React component, call `useGetStatisticLoggerChangeByYearUsingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticLoggerChangeByYearUsingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticLoggerChangeByYearUsingQuery({
 *   variables: {
 *      date: // value for 'date'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetStatisticLoggerChangeByYearUsingQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticLoggerChangeByYearUsingQuery, GetStatisticLoggerChangeByYearUsingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticLoggerChangeByYearUsingQuery, GetStatisticLoggerChangeByYearUsingQueryVariables>(GetStatisticLoggerChangeByYearUsingDocument, options);
      }
export function useGetStatisticLoggerChangeByYearUsingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticLoggerChangeByYearUsingQuery, GetStatisticLoggerChangeByYearUsingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticLoggerChangeByYearUsingQuery, GetStatisticLoggerChangeByYearUsingQueryVariables>(GetStatisticLoggerChangeByYearUsingDocument, options);
        }
export type GetStatisticLoggerChangeByYearUsingQueryHookResult = ReturnType<typeof useGetStatisticLoggerChangeByYearUsingQuery>;
export type GetStatisticLoggerChangeByYearUsingLazyQueryHookResult = ReturnType<typeof useGetStatisticLoggerChangeByYearUsingLazyQuery>;
export type GetStatisticLoggerChangeByYearUsingQueryResult = Apollo.QueryResult<GetStatisticLoggerChangeByYearUsingQuery, GetStatisticLoggerChangeByYearUsingQueryVariables>;
export function refetchGetStatisticLoggerChangeByYearUsingQuery(variables?: GetStatisticLoggerChangeByYearUsingQueryVariables) {
      return { query: GetStatisticLoggerChangeByYearUsingDocument, variables: variables }
    }
export const GetStatisticTransmitterBatteryChangeByYearUsingDocument = gql`
    query GetStatisticTransmitterBatteryChangeByYearUsing($date: Date, $year: Int) {
  GetStatisticTransmitterBatteryChangeByYearUsing(date: $date, year: $year) {
    Company
    DateOfChange
    DescriptionOfChange
    Location
    Marks
    Size
    _id
    Status
  }
}
    `;

/**
 * __useGetStatisticTransmitterBatteryChangeByYearUsingQuery__
 *
 * To run a query within a React component, call `useGetStatisticTransmitterBatteryChangeByYearUsingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticTransmitterBatteryChangeByYearUsingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticTransmitterBatteryChangeByYearUsingQuery({
 *   variables: {
 *      date: // value for 'date'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetStatisticTransmitterBatteryChangeByYearUsingQuery(baseOptions?: Apollo.QueryHookOptions<GetStatisticTransmitterBatteryChangeByYearUsingQuery, GetStatisticTransmitterBatteryChangeByYearUsingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticTransmitterBatteryChangeByYearUsingQuery, GetStatisticTransmitterBatteryChangeByYearUsingQueryVariables>(GetStatisticTransmitterBatteryChangeByYearUsingDocument, options);
      }
export function useGetStatisticTransmitterBatteryChangeByYearUsingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticTransmitterBatteryChangeByYearUsingQuery, GetStatisticTransmitterBatteryChangeByYearUsingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticTransmitterBatteryChangeByYearUsingQuery, GetStatisticTransmitterBatteryChangeByYearUsingQueryVariables>(GetStatisticTransmitterBatteryChangeByYearUsingDocument, options);
        }
export type GetStatisticTransmitterBatteryChangeByYearUsingQueryHookResult = ReturnType<typeof useGetStatisticTransmitterBatteryChangeByYearUsingQuery>;
export type GetStatisticTransmitterBatteryChangeByYearUsingLazyQueryHookResult = ReturnType<typeof useGetStatisticTransmitterBatteryChangeByYearUsingLazyQuery>;
export type GetStatisticTransmitterBatteryChangeByYearUsingQueryResult = Apollo.QueryResult<GetStatisticTransmitterBatteryChangeByYearUsingQuery, GetStatisticTransmitterBatteryChangeByYearUsingQueryVariables>;
export function refetchGetStatisticTransmitterBatteryChangeByYearUsingQuery(variables?: GetStatisticTransmitterBatteryChangeByYearUsingQueryVariables) {
      return { query: GetStatisticTransmitterBatteryChangeByYearUsingDocument, variables: variables }
    }
export const InsertCoverDocument = gql`
    mutation InsertCover($cover: SiteCoverInsertInput) {
  InsertCover(cover: $cover)
}
    `;
export type InsertCoverMutationFn = Apollo.MutationFunction<InsertCoverMutation, InsertCoverMutationVariables>;

/**
 * __useInsertCoverMutation__
 *
 * To run a mutation, you first call `useInsertCoverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCoverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCoverMutation, { data, loading, error }] = useInsertCoverMutation({
 *   variables: {
 *      cover: // value for 'cover'
 *   },
 * });
 */
export function useInsertCoverMutation(baseOptions?: Apollo.MutationHookOptions<InsertCoverMutation, InsertCoverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertCoverMutation, InsertCoverMutationVariables>(InsertCoverDocument, options);
      }
export type InsertCoverMutationHookResult = ReturnType<typeof useInsertCoverMutation>;
export type InsertCoverMutationResult = Apollo.MutationResult<InsertCoverMutation>;
export type InsertCoverMutationOptions = Apollo.BaseMutationOptions<InsertCoverMutation, InsertCoverMutationVariables>;
export const InsertDataManualDocument = gql`
    mutation InsertDataManual($dataManual: DataManualInsertInput) {
  InsertDataManual(dataManual: $dataManual)
}
    `;
export type InsertDataManualMutationFn = Apollo.MutationFunction<InsertDataManualMutation, InsertDataManualMutationVariables>;

/**
 * __useInsertDataManualMutation__
 *
 * To run a mutation, you first call `useInsertDataManualMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertDataManualMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertDataManualMutation, { data, loading, error }] = useInsertDataManualMutation({
 *   variables: {
 *      dataManual: // value for 'dataManual'
 *   },
 * });
 */
export function useInsertDataManualMutation(baseOptions?: Apollo.MutationHookOptions<InsertDataManualMutation, InsertDataManualMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertDataManualMutation, InsertDataManualMutationVariables>(InsertDataManualDocument, options);
      }
export type InsertDataManualMutationHookResult = ReturnType<typeof useInsertDataManualMutation>;
export type InsertDataManualMutationResult = Apollo.MutationResult<InsertDataManualMutation>;
export type InsertDataManualMutationOptions = Apollo.BaseMutationOptions<InsertDataManualMutation, InsertDataManualMutationVariables>;
export const InsertLoggerDocument = gql`
    mutation InsertLogger($logger: DeviceLoggerInsertInput) {
  InsertLogger(logger: $logger)
}
    `;
export type InsertLoggerMutationFn = Apollo.MutationFunction<InsertLoggerMutation, InsertLoggerMutationVariables>;

/**
 * __useInsertLoggerMutation__
 *
 * To run a mutation, you first call `useInsertLoggerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertLoggerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertLoggerMutation, { data, loading, error }] = useInsertLoggerMutation({
 *   variables: {
 *      logger: // value for 'logger'
 *   },
 * });
 */
export function useInsertLoggerMutation(baseOptions?: Apollo.MutationHookOptions<InsertLoggerMutation, InsertLoggerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertLoggerMutation, InsertLoggerMutationVariables>(InsertLoggerDocument, options);
      }
export type InsertLoggerMutationHookResult = ReturnType<typeof useInsertLoggerMutation>;
export type InsertLoggerMutationResult = Apollo.MutationResult<InsertLoggerMutation>;
export type InsertLoggerMutationOptions = Apollo.BaseMutationOptions<InsertLoggerMutation, InsertLoggerMutationVariables>;
export const InsertMeterDocument = gql`
    mutation InsertMeter($meter: DeviceMeterInsertInput) {
  InsertMeter(meter: $meter)
}
    `;
export type InsertMeterMutationFn = Apollo.MutationFunction<InsertMeterMutation, InsertMeterMutationVariables>;

/**
 * __useInsertMeterMutation__
 *
 * To run a mutation, you first call `useInsertMeterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertMeterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertMeterMutation, { data, loading, error }] = useInsertMeterMutation({
 *   variables: {
 *      meter: // value for 'meter'
 *   },
 * });
 */
export function useInsertMeterMutation(baseOptions?: Apollo.MutationHookOptions<InsertMeterMutation, InsertMeterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertMeterMutation, InsertMeterMutationVariables>(InsertMeterDocument, options);
      }
export type InsertMeterMutationHookResult = ReturnType<typeof useInsertMeterMutation>;
export type InsertMeterMutationResult = Apollo.MutationResult<InsertMeterMutation>;
export type InsertMeterMutationOptions = Apollo.BaseMutationOptions<InsertMeterMutation, InsertMeterMutationVariables>;
export const InsertDeviceSiteConfigDocument = gql`
    mutation InsertDeviceSiteConfig($siteConfig: DeviceSiteConfigInsertInput) {
  InsertDeviceSiteConfig(siteConfig: $siteConfig)
}
    `;
export type InsertDeviceSiteConfigMutationFn = Apollo.MutationFunction<InsertDeviceSiteConfigMutation, InsertDeviceSiteConfigMutationVariables>;

/**
 * __useInsertDeviceSiteConfigMutation__
 *
 * To run a mutation, you first call `useInsertDeviceSiteConfigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertDeviceSiteConfigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertDeviceSiteConfigMutation, { data, loading, error }] = useInsertDeviceSiteConfigMutation({
 *   variables: {
 *      siteConfig: // value for 'siteConfig'
 *   },
 * });
 */
export function useInsertDeviceSiteConfigMutation(baseOptions?: Apollo.MutationHookOptions<InsertDeviceSiteConfigMutation, InsertDeviceSiteConfigMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertDeviceSiteConfigMutation, InsertDeviceSiteConfigMutationVariables>(InsertDeviceSiteConfigDocument, options);
      }
export type InsertDeviceSiteConfigMutationHookResult = ReturnType<typeof useInsertDeviceSiteConfigMutation>;
export type InsertDeviceSiteConfigMutationResult = Apollo.MutationResult<InsertDeviceSiteConfigMutation>;
export type InsertDeviceSiteConfigMutationOptions = Apollo.BaseMutationOptions<InsertDeviceSiteConfigMutation, InsertDeviceSiteConfigMutationVariables>;
export const InsertTransmitterDocument = gql`
    mutation InsertTransmitter($transmitter: DeviceTransmitterInsertInput) {
  InsertTransmitter(transmitter: $transmitter)
}
    `;
export type InsertTransmitterMutationFn = Apollo.MutationFunction<InsertTransmitterMutation, InsertTransmitterMutationVariables>;

/**
 * __useInsertTransmitterMutation__
 *
 * To run a mutation, you first call `useInsertTransmitterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTransmitterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTransmitterMutation, { data, loading, error }] = useInsertTransmitterMutation({
 *   variables: {
 *      transmitter: // value for 'transmitter'
 *   },
 * });
 */
export function useInsertTransmitterMutation(baseOptions?: Apollo.MutationHookOptions<InsertTransmitterMutation, InsertTransmitterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertTransmitterMutation, InsertTransmitterMutationVariables>(InsertTransmitterDocument, options);
      }
export type InsertTransmitterMutationHookResult = ReturnType<typeof useInsertTransmitterMutation>;
export type InsertTransmitterMutationResult = Apollo.MutationResult<InsertTransmitterMutation>;
export type InsertTransmitterMutationOptions = Apollo.BaseMutationOptions<InsertTransmitterMutation, InsertTransmitterMutationVariables>;
export const InsertHistorySiteLoggerDocument = gql`
    mutation InsertHistorySiteLogger($history: HistorySiteLoggerInsertInput) {
  InsertHistorySiteLogger(history: $history)
}
    `;
export type InsertHistorySiteLoggerMutationFn = Apollo.MutationFunction<InsertHistorySiteLoggerMutation, InsertHistorySiteLoggerMutationVariables>;

/**
 * __useInsertHistorySiteLoggerMutation__
 *
 * To run a mutation, you first call `useInsertHistorySiteLoggerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertHistorySiteLoggerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertHistorySiteLoggerMutation, { data, loading, error }] = useInsertHistorySiteLoggerMutation({
 *   variables: {
 *      history: // value for 'history'
 *   },
 * });
 */
export function useInsertHistorySiteLoggerMutation(baseOptions?: Apollo.MutationHookOptions<InsertHistorySiteLoggerMutation, InsertHistorySiteLoggerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertHistorySiteLoggerMutation, InsertHistorySiteLoggerMutationVariables>(InsertHistorySiteLoggerDocument, options);
      }
export type InsertHistorySiteLoggerMutationHookResult = ReturnType<typeof useInsertHistorySiteLoggerMutation>;
export type InsertHistorySiteLoggerMutationResult = Apollo.MutationResult<InsertHistorySiteLoggerMutation>;
export type InsertHistorySiteLoggerMutationOptions = Apollo.BaseMutationOptions<InsertHistorySiteLoggerMutation, InsertHistorySiteLoggerMutationVariables>;
export const InsertHistorySiteMeterDocument = gql`
    mutation InsertHistorySiteMeter($history: HistorySiteMeterInsertInput) {
  InsertHistorySiteMeter(history: $history)
}
    `;
export type InsertHistorySiteMeterMutationFn = Apollo.MutationFunction<InsertHistorySiteMeterMutation, InsertHistorySiteMeterMutationVariables>;

/**
 * __useInsertHistorySiteMeterMutation__
 *
 * To run a mutation, you first call `useInsertHistorySiteMeterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertHistorySiteMeterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertHistorySiteMeterMutation, { data, loading, error }] = useInsertHistorySiteMeterMutation({
 *   variables: {
 *      history: // value for 'history'
 *   },
 * });
 */
export function useInsertHistorySiteMeterMutation(baseOptions?: Apollo.MutationHookOptions<InsertHistorySiteMeterMutation, InsertHistorySiteMeterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertHistorySiteMeterMutation, InsertHistorySiteMeterMutationVariables>(InsertHistorySiteMeterDocument, options);
      }
export type InsertHistorySiteMeterMutationHookResult = ReturnType<typeof useInsertHistorySiteMeterMutation>;
export type InsertHistorySiteMeterMutationResult = Apollo.MutationResult<InsertHistorySiteMeterMutation>;
export type InsertHistorySiteMeterMutationOptions = Apollo.BaseMutationOptions<InsertHistorySiteMeterMutation, InsertHistorySiteMeterMutationVariables>;
export const InsertHistorySiteTransmitterDocument = gql`
    mutation InsertHistorySiteTransmitter($history: HistorySiteTransmitterInsertInput) {
  InsertHistorySiteTransmitter(history: $history)
}
    `;
export type InsertHistorySiteTransmitterMutationFn = Apollo.MutationFunction<InsertHistorySiteTransmitterMutation, InsertHistorySiteTransmitterMutationVariables>;

/**
 * __useInsertHistorySiteTransmitterMutation__
 *
 * To run a mutation, you first call `useInsertHistorySiteTransmitterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertHistorySiteTransmitterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertHistorySiteTransmitterMutation, { data, loading, error }] = useInsertHistorySiteTransmitterMutation({
 *   variables: {
 *      history: // value for 'history'
 *   },
 * });
 */
export function useInsertHistorySiteTransmitterMutation(baseOptions?: Apollo.MutationHookOptions<InsertHistorySiteTransmitterMutation, InsertHistorySiteTransmitterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertHistorySiteTransmitterMutation, InsertHistorySiteTransmitterMutationVariables>(InsertHistorySiteTransmitterDocument, options);
      }
export type InsertHistorySiteTransmitterMutationHookResult = ReturnType<typeof useInsertHistorySiteTransmitterMutation>;
export type InsertHistorySiteTransmitterMutationResult = Apollo.MutationResult<InsertHistorySiteTransmitterMutation>;
export type InsertHistorySiteTransmitterMutationOptions = Apollo.BaseMutationOptions<InsertHistorySiteTransmitterMutation, InsertHistorySiteTransmitterMutationVariables>;
export const InsertPreciousDocument = gql`
    mutation InsertPrecious($precious: PreciousInput) {
  InsertPrecious(precious: $precious) {
    idReturn
  }
}
    `;
export type InsertPreciousMutationFn = Apollo.MutationFunction<InsertPreciousMutation, InsertPreciousMutationVariables>;

/**
 * __useInsertPreciousMutation__
 *
 * To run a mutation, you first call `useInsertPreciousMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPreciousMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPreciousMutation, { data, loading, error }] = useInsertPreciousMutation({
 *   variables: {
 *      precious: // value for 'precious'
 *   },
 * });
 */
export function useInsertPreciousMutation(baseOptions?: Apollo.MutationHookOptions<InsertPreciousMutation, InsertPreciousMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPreciousMutation, InsertPreciousMutationVariables>(InsertPreciousDocument, options);
      }
export type InsertPreciousMutationHookResult = ReturnType<typeof useInsertPreciousMutation>;
export type InsertPreciousMutationResult = Apollo.MutationResult<InsertPreciousMutation>;
export type InsertPreciousMutationOptions = Apollo.BaseMutationOptions<InsertPreciousMutation, InsertPreciousMutationVariables>;
export const InsertSiteDocument = gql`
    mutation InsertSite($site: SiteInput) {
  InsertSite(site: $site)
}
    `;
export type InsertSiteMutationFn = Apollo.MutationFunction<InsertSiteMutation, InsertSiteMutationVariables>;

/**
 * __useInsertSiteMutation__
 *
 * To run a mutation, you first call `useInsertSiteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSiteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSiteMutation, { data, loading, error }] = useInsertSiteMutation({
 *   variables: {
 *      site: // value for 'site'
 *   },
 * });
 */
export function useInsertSiteMutation(baseOptions?: Apollo.MutationHookOptions<InsertSiteMutation, InsertSiteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertSiteMutation, InsertSiteMutationVariables>(InsertSiteDocument, options);
      }
export type InsertSiteMutationHookResult = ReturnType<typeof useInsertSiteMutation>;
export type InsertSiteMutationResult = Apollo.MutationResult<InsertSiteMutation>;
export type InsertSiteMutationOptions = Apollo.BaseMutationOptions<InsertSiteMutation, InsertSiteMutationVariables>;
export const InsertUserDocument = gql`
    mutation InsertUser($user: UserInsertInput) {
  InsertUser(user: $user)
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, options);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const QuantityDayCompanyDocument = gql`
    query QuantityDayCompany($company: String!, $start: String!, $end: String!) {
  QuantityDayCompany(company: $company, start: $start, end: $end) {
    Address
    Company
    Display
    IstDistributionCompany
    ListQuantity {
      IsEnoughData
      TimeStamp
      Value
    }
    Location
    Marks
    MeterDirection
    OldId
    QndDistributionCompany
    SiteId
    Size
  }
}
    `;

/**
 * __useQuantityDayCompanyQuery__
 *
 * To run a query within a React component, call `useQuantityDayCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuantityDayCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityDayCompanyQuery({
 *   variables: {
 *      company: // value for 'company'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityDayCompanyQuery(baseOptions: Apollo.QueryHookOptions<QuantityDayCompanyQuery, QuantityDayCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityDayCompanyQuery, QuantityDayCompanyQueryVariables>(QuantityDayCompanyDocument, options);
      }
export function useQuantityDayCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityDayCompanyQuery, QuantityDayCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityDayCompanyQuery, QuantityDayCompanyQueryVariables>(QuantityDayCompanyDocument, options);
        }
export type QuantityDayCompanyQueryHookResult = ReturnType<typeof useQuantityDayCompanyQuery>;
export type QuantityDayCompanyLazyQueryHookResult = ReturnType<typeof useQuantityDayCompanyLazyQuery>;
export type QuantityDayCompanyQueryResult = Apollo.QueryResult<QuantityDayCompanyQuery, QuantityDayCompanyQueryVariables>;
export function refetchQuantityDayCompanyQuery(variables: QuantityDayCompanyQueryVariables) {
      return { query: QuantityDayCompanyDocument, variables: variables }
    }
export const QuantityDayWaterSupplyDocument = gql`
    query QuantityDayWaterSupply($company: String!, $start: String!, $end: String!) {
  QuantityDayWaterSupply(company: $company, start: $start, end: $end) {
    Address
    Company
    IstDistributionCompany
    ListQuantity {
      IsEnoughData
      TimeStamp
      Value
    }
    Display
    Location
    Marks
    OldId
    MeterDirection
    QndDistributionCompany
    SiteId
    Size
    IstDoNotCalculateReverse
    QndDoNotCalculateReverse
  }
}
    `;

/**
 * __useQuantityDayWaterSupplyQuery__
 *
 * To run a query within a React component, call `useQuantityDayWaterSupplyQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuantityDayWaterSupplyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityDayWaterSupplyQuery({
 *   variables: {
 *      company: // value for 'company'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityDayWaterSupplyQuery(baseOptions: Apollo.QueryHookOptions<QuantityDayWaterSupplyQuery, QuantityDayWaterSupplyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityDayWaterSupplyQuery, QuantityDayWaterSupplyQueryVariables>(QuantityDayWaterSupplyDocument, options);
      }
export function useQuantityDayWaterSupplyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityDayWaterSupplyQuery, QuantityDayWaterSupplyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityDayWaterSupplyQuery, QuantityDayWaterSupplyQueryVariables>(QuantityDayWaterSupplyDocument, options);
        }
export type QuantityDayWaterSupplyQueryHookResult = ReturnType<typeof useQuantityDayWaterSupplyQuery>;
export type QuantityDayWaterSupplyLazyQueryHookResult = ReturnType<typeof useQuantityDayWaterSupplyLazyQuery>;
export type QuantityDayWaterSupplyQueryResult = Apollo.QueryResult<QuantityDayWaterSupplyQuery, QuantityDayWaterSupplyQueryVariables>;
export function refetchQuantityDayWaterSupplyQuery(variables: QuantityDayWaterSupplyQueryVariables) {
      return { query: QuantityDayWaterSupplyDocument, variables: variables }
    }
export const QuantityLoggerByTimeStampDocument = gql`
    query QuantityLoggerByTimeStamp($siteid: String!, $company: String!, $start: String!, $end: String!) {
  QuantityLoggerByTimeStamp(
    siteid: $siteid
    company: $company
    start: $start
    end: $end
  ) {
    SiteId
    Location
    Marks
    Size
    MeterDirection
    IstDistributionCompany
    QndDistributionCompany
    OldId
    Company
    Address
    Display
    IstDoNotCalculateReverse
    QndDoNotCalculateReverse
    ListQuantity {
      TimeStamp
      Value
      IsEnoughData
    }
  }
}
    `;

/**
 * __useQuantityLoggerByTimeStampQuery__
 *
 * To run a query within a React component, call `useQuantityLoggerByTimeStampQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuantityLoggerByTimeStampQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityLoggerByTimeStampQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *      company: // value for 'company'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityLoggerByTimeStampQuery(baseOptions: Apollo.QueryHookOptions<QuantityLoggerByTimeStampQuery, QuantityLoggerByTimeStampQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityLoggerByTimeStampQuery, QuantityLoggerByTimeStampQueryVariables>(QuantityLoggerByTimeStampDocument, options);
      }
export function useQuantityLoggerByTimeStampLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityLoggerByTimeStampQuery, QuantityLoggerByTimeStampQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityLoggerByTimeStampQuery, QuantityLoggerByTimeStampQueryVariables>(QuantityLoggerByTimeStampDocument, options);
        }
export type QuantityLoggerByTimeStampQueryHookResult = ReturnType<typeof useQuantityLoggerByTimeStampQuery>;
export type QuantityLoggerByTimeStampLazyQueryHookResult = ReturnType<typeof useQuantityLoggerByTimeStampLazyQuery>;
export type QuantityLoggerByTimeStampQueryResult = Apollo.QueryResult<QuantityLoggerByTimeStampQuery, QuantityLoggerByTimeStampQueryVariables>;
export function refetchQuantityLoggerByTimeStampQuery(variables: QuantityLoggerByTimeStampQueryVariables) {
      return { query: QuantityLoggerByTimeStampDocument, variables: variables }
    }
export const QuantityLoggerDayDocument = gql`
    query QuantityLoggerDay($siteid: String!, $company: String!, $start: String!, $end: String!) {
  QuantityLoggerDay(siteid: $siteid, company: $company, start: $start, end: $end)
}
    `;

/**
 * __useQuantityLoggerDayQuery__
 *
 * To run a query within a React component, call `useQuantityLoggerDayQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuantityLoggerDayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityLoggerDayQuery({
 *   variables: {
 *      siteid: // value for 'siteid'
 *      company: // value for 'company'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityLoggerDayQuery(baseOptions: Apollo.QueryHookOptions<QuantityLoggerDayQuery, QuantityLoggerDayQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityLoggerDayQuery, QuantityLoggerDayQueryVariables>(QuantityLoggerDayDocument, options);
      }
export function useQuantityLoggerDayLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityLoggerDayQuery, QuantityLoggerDayQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityLoggerDayQuery, QuantityLoggerDayQueryVariables>(QuantityLoggerDayDocument, options);
        }
export type QuantityLoggerDayQueryHookResult = ReturnType<typeof useQuantityLoggerDayQuery>;
export type QuantityLoggerDayLazyQueryHookResult = ReturnType<typeof useQuantityLoggerDayLazyQuery>;
export type QuantityLoggerDayQueryResult = Apollo.QueryResult<QuantityLoggerDayQuery, QuantityLoggerDayQueryVariables>;
export function refetchQuantityLoggerDayQuery(variables: QuantityLoggerDayQueryVariables) {
      return { query: QuantityLoggerDayDocument, variables: variables }
    }
export const QuantityLoggerDayWaterSupplyDocument = gql`
    query QuantityLoggerDayWaterSupply($company: String!, $start: String!, $end: String!) {
  QuantityLoggerDayWaterSupply(company: $company, start: $start, end: $end) {
    Address
    Company
    Display
    IstDistributionCompany
    IstDoNotCalculateReverse
    Location
    Marks
    MeterDirection
    QndDistributionCompany
    QndDoNotCalculateReverse
    Size
    SiteId
    OldId
    ListQuantity {
      IsEnoughData
      TimeStamp
      Value
    }
  }
}
    `;

/**
 * __useQuantityLoggerDayWaterSupplyQuery__
 *
 * To run a query within a React component, call `useQuantityLoggerDayWaterSupplyQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuantityLoggerDayWaterSupplyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuantityLoggerDayWaterSupplyQuery({
 *   variables: {
 *      company: // value for 'company'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useQuantityLoggerDayWaterSupplyQuery(baseOptions: Apollo.QueryHookOptions<QuantityLoggerDayWaterSupplyQuery, QuantityLoggerDayWaterSupplyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuantityLoggerDayWaterSupplyQuery, QuantityLoggerDayWaterSupplyQueryVariables>(QuantityLoggerDayWaterSupplyDocument, options);
      }
export function useQuantityLoggerDayWaterSupplyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuantityLoggerDayWaterSupplyQuery, QuantityLoggerDayWaterSupplyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuantityLoggerDayWaterSupplyQuery, QuantityLoggerDayWaterSupplyQueryVariables>(QuantityLoggerDayWaterSupplyDocument, options);
        }
export type QuantityLoggerDayWaterSupplyQueryHookResult = ReturnType<typeof useQuantityLoggerDayWaterSupplyQuery>;
export type QuantityLoggerDayWaterSupplyLazyQueryHookResult = ReturnType<typeof useQuantityLoggerDayWaterSupplyLazyQuery>;
export type QuantityLoggerDayWaterSupplyQueryResult = Apollo.QueryResult<QuantityLoggerDayWaterSupplyQuery, QuantityLoggerDayWaterSupplyQueryVariables>;
export function refetchQuantityLoggerDayWaterSupplyQuery(variables: QuantityLoggerDayWaterSupplyQueryVariables) {
      return { query: QuantityLoggerDayWaterSupplyDocument, variables: variables }
    }
export const UpdateActiveUserDocument = gql`
    mutation UpdateActiveUser($user: UpdateActiveUserInput) {
  UpdateActiveUser(user: $user)
}
    `;
export type UpdateActiveUserMutationFn = Apollo.MutationFunction<UpdateActiveUserMutation, UpdateActiveUserMutationVariables>;

/**
 * __useUpdateActiveUserMutation__
 *
 * To run a mutation, you first call `useUpdateActiveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateActiveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateActiveUserMutation, { data, loading, error }] = useUpdateActiveUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateActiveUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateActiveUserMutation, UpdateActiveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateActiveUserMutation, UpdateActiveUserMutationVariables>(UpdateActiveUserDocument, options);
      }
export type UpdateActiveUserMutationHookResult = ReturnType<typeof useUpdateActiveUserMutation>;
export type UpdateActiveUserMutationResult = Apollo.MutationResult<UpdateActiveUserMutation>;
export type UpdateActiveUserMutationOptions = Apollo.BaseMutationOptions<UpdateActiveUserMutation, UpdateActiveUserMutationVariables>;
export const UpdateCoverDocument = gql`
    mutation UpdateCover($cover: SiteCoverUpdateInput) {
  UpdateCover(cover: $cover)
}
    `;
export type UpdateCoverMutationFn = Apollo.MutationFunction<UpdateCoverMutation, UpdateCoverMutationVariables>;

/**
 * __useUpdateCoverMutation__
 *
 * To run a mutation, you first call `useUpdateCoverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCoverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCoverMutation, { data, loading, error }] = useUpdateCoverMutation({
 *   variables: {
 *      cover: // value for 'cover'
 *   },
 * });
 */
export function useUpdateCoverMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCoverMutation, UpdateCoverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCoverMutation, UpdateCoverMutationVariables>(UpdateCoverDocument, options);
      }
export type UpdateCoverMutationHookResult = ReturnType<typeof useUpdateCoverMutation>;
export type UpdateCoverMutationResult = Apollo.MutationResult<UpdateCoverMutation>;
export type UpdateCoverMutationOptions = Apollo.BaseMutationOptions<UpdateCoverMutation, UpdateCoverMutationVariables>;
export const UpdateDataManualDocument = gql`
    mutation UpdateDataManual($dataManual: DataManualUpdateInput) {
  UpdateDataManual(dataManual: $dataManual)
}
    `;
export type UpdateDataManualMutationFn = Apollo.MutationFunction<UpdateDataManualMutation, UpdateDataManualMutationVariables>;

/**
 * __useUpdateDataManualMutation__
 *
 * To run a mutation, you first call `useUpdateDataManualMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDataManualMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDataManualMutation, { data, loading, error }] = useUpdateDataManualMutation({
 *   variables: {
 *      dataManual: // value for 'dataManual'
 *   },
 * });
 */
export function useUpdateDataManualMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDataManualMutation, UpdateDataManualMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDataManualMutation, UpdateDataManualMutationVariables>(UpdateDataManualDocument, options);
      }
export type UpdateDataManualMutationHookResult = ReturnType<typeof useUpdateDataManualMutation>;
export type UpdateDataManualMutationResult = Apollo.MutationResult<UpdateDataManualMutation>;
export type UpdateDataManualMutationOptions = Apollo.BaseMutationOptions<UpdateDataManualMutation, UpdateDataManualMutationVariables>;
export const UpdateDeviceChannelConfigDocument = gql`
    mutation UpdateDeviceChannelConfig($channel: ChannelInput) {
  UpdateDeviceChannelConfig(channel: $channel)
}
    `;
export type UpdateDeviceChannelConfigMutationFn = Apollo.MutationFunction<UpdateDeviceChannelConfigMutation, UpdateDeviceChannelConfigMutationVariables>;

/**
 * __useUpdateDeviceChannelConfigMutation__
 *
 * To run a mutation, you first call `useUpdateDeviceChannelConfigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeviceChannelConfigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeviceChannelConfigMutation, { data, loading, error }] = useUpdateDeviceChannelConfigMutation({
 *   variables: {
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useUpdateDeviceChannelConfigMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeviceChannelConfigMutation, UpdateDeviceChannelConfigMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeviceChannelConfigMutation, UpdateDeviceChannelConfigMutationVariables>(UpdateDeviceChannelConfigDocument, options);
      }
export type UpdateDeviceChannelConfigMutationHookResult = ReturnType<typeof useUpdateDeviceChannelConfigMutation>;
export type UpdateDeviceChannelConfigMutationResult = Apollo.MutationResult<UpdateDeviceChannelConfigMutation>;
export type UpdateDeviceChannelConfigMutationOptions = Apollo.BaseMutationOptions<UpdateDeviceChannelConfigMutation, UpdateDeviceChannelConfigMutationVariables>;
export const UpdateLoggerDocument = gql`
    mutation UpdateLogger($logger: DeviceLoggerUpdateInput) {
  UpdateLogger(logger: $logger)
}
    `;
export type UpdateLoggerMutationFn = Apollo.MutationFunction<UpdateLoggerMutation, UpdateLoggerMutationVariables>;

/**
 * __useUpdateLoggerMutation__
 *
 * To run a mutation, you first call `useUpdateLoggerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLoggerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLoggerMutation, { data, loading, error }] = useUpdateLoggerMutation({
 *   variables: {
 *      logger: // value for 'logger'
 *   },
 * });
 */
export function useUpdateLoggerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLoggerMutation, UpdateLoggerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLoggerMutation, UpdateLoggerMutationVariables>(UpdateLoggerDocument, options);
      }
export type UpdateLoggerMutationHookResult = ReturnType<typeof useUpdateLoggerMutation>;
export type UpdateLoggerMutationResult = Apollo.MutationResult<UpdateLoggerMutation>;
export type UpdateLoggerMutationOptions = Apollo.BaseMutationOptions<UpdateLoggerMutation, UpdateLoggerMutationVariables>;
export const UpdateLoggerInstallDocument = gql`
    mutation UpdateLoggerInstall($logger: DeviceLoggerInstallUpdateInput) {
  UpdateLoggerInstall(logger: $logger)
}
    `;
export type UpdateLoggerInstallMutationFn = Apollo.MutationFunction<UpdateLoggerInstallMutation, UpdateLoggerInstallMutationVariables>;

/**
 * __useUpdateLoggerInstallMutation__
 *
 * To run a mutation, you first call `useUpdateLoggerInstallMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLoggerInstallMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLoggerInstallMutation, { data, loading, error }] = useUpdateLoggerInstallMutation({
 *   variables: {
 *      logger: // value for 'logger'
 *   },
 * });
 */
export function useUpdateLoggerInstallMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLoggerInstallMutation, UpdateLoggerInstallMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLoggerInstallMutation, UpdateLoggerInstallMutationVariables>(UpdateLoggerInstallDocument, options);
      }
export type UpdateLoggerInstallMutationHookResult = ReturnType<typeof useUpdateLoggerInstallMutation>;
export type UpdateLoggerInstallMutationResult = Apollo.MutationResult<UpdateLoggerInstallMutation>;
export type UpdateLoggerInstallMutationOptions = Apollo.BaseMutationOptions<UpdateLoggerInstallMutation, UpdateLoggerInstallMutationVariables>;
export const UpdateMeterDocument = gql`
    mutation UpdateMeter($meter: DeviceMeterUpdateInput) {
  UpdateMeter(meter: $meter)
}
    `;
export type UpdateMeterMutationFn = Apollo.MutationFunction<UpdateMeterMutation, UpdateMeterMutationVariables>;

/**
 * __useUpdateMeterMutation__
 *
 * To run a mutation, you first call `useUpdateMeterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeterMutation, { data, loading, error }] = useUpdateMeterMutation({
 *   variables: {
 *      meter: // value for 'meter'
 *   },
 * });
 */
export function useUpdateMeterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeterMutation, UpdateMeterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeterMutation, UpdateMeterMutationVariables>(UpdateMeterDocument, options);
      }
export type UpdateMeterMutationHookResult = ReturnType<typeof useUpdateMeterMutation>;
export type UpdateMeterMutationResult = Apollo.MutationResult<UpdateMeterMutation>;
export type UpdateMeterMutationOptions = Apollo.BaseMutationOptions<UpdateMeterMutation, UpdateMeterMutationVariables>;
export const UpdateDeviceSiteConfigDocument = gql`
    mutation UpdateDeviceSiteConfig($siteConfig: DeviceSiteConfigUpdateInput) {
  UpdateDeviceSiteConfig(siteConfig: $siteConfig)
}
    `;
export type UpdateDeviceSiteConfigMutationFn = Apollo.MutationFunction<UpdateDeviceSiteConfigMutation, UpdateDeviceSiteConfigMutationVariables>;

/**
 * __useUpdateDeviceSiteConfigMutation__
 *
 * To run a mutation, you first call `useUpdateDeviceSiteConfigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeviceSiteConfigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeviceSiteConfigMutation, { data, loading, error }] = useUpdateDeviceSiteConfigMutation({
 *   variables: {
 *      siteConfig: // value for 'siteConfig'
 *   },
 * });
 */
export function useUpdateDeviceSiteConfigMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeviceSiteConfigMutation, UpdateDeviceSiteConfigMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeviceSiteConfigMutation, UpdateDeviceSiteConfigMutationVariables>(UpdateDeviceSiteConfigDocument, options);
      }
export type UpdateDeviceSiteConfigMutationHookResult = ReturnType<typeof useUpdateDeviceSiteConfigMutation>;
export type UpdateDeviceSiteConfigMutationResult = Apollo.MutationResult<UpdateDeviceSiteConfigMutation>;
export type UpdateDeviceSiteConfigMutationOptions = Apollo.BaseMutationOptions<UpdateDeviceSiteConfigMutation, UpdateDeviceSiteConfigMutationVariables>;
export const UpdateTransmitterDocument = gql`
    mutation UpdateTransmitter($transmitter: DeviceTransmitterUpdateInput) {
  UpdateTransmitter(transmitter: $transmitter)
}
    `;
export type UpdateTransmitterMutationFn = Apollo.MutationFunction<UpdateTransmitterMutation, UpdateTransmitterMutationVariables>;

/**
 * __useUpdateTransmitterMutation__
 *
 * To run a mutation, you first call `useUpdateTransmitterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransmitterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransmitterMutation, { data, loading, error }] = useUpdateTransmitterMutation({
 *   variables: {
 *      transmitter: // value for 'transmitter'
 *   },
 * });
 */
export function useUpdateTransmitterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransmitterMutation, UpdateTransmitterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransmitterMutation, UpdateTransmitterMutationVariables>(UpdateTransmitterDocument, options);
      }
export type UpdateTransmitterMutationHookResult = ReturnType<typeof useUpdateTransmitterMutation>;
export type UpdateTransmitterMutationResult = Apollo.MutationResult<UpdateTransmitterMutation>;
export type UpdateTransmitterMutationOptions = Apollo.BaseMutationOptions<UpdateTransmitterMutation, UpdateTransmitterMutationVariables>;
export const UpdateHistorySiteLoggerDocument = gql`
    mutation UpdateHistorySiteLogger($history: HistorySiteLoggerUpdateInput) {
  UpdateHistorySiteLogger(history: $history)
}
    `;
export type UpdateHistorySiteLoggerMutationFn = Apollo.MutationFunction<UpdateHistorySiteLoggerMutation, UpdateHistorySiteLoggerMutationVariables>;

/**
 * __useUpdateHistorySiteLoggerMutation__
 *
 * To run a mutation, you first call `useUpdateHistorySiteLoggerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHistorySiteLoggerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHistorySiteLoggerMutation, { data, loading, error }] = useUpdateHistorySiteLoggerMutation({
 *   variables: {
 *      history: // value for 'history'
 *   },
 * });
 */
export function useUpdateHistorySiteLoggerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHistorySiteLoggerMutation, UpdateHistorySiteLoggerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHistorySiteLoggerMutation, UpdateHistorySiteLoggerMutationVariables>(UpdateHistorySiteLoggerDocument, options);
      }
export type UpdateHistorySiteLoggerMutationHookResult = ReturnType<typeof useUpdateHistorySiteLoggerMutation>;
export type UpdateHistorySiteLoggerMutationResult = Apollo.MutationResult<UpdateHistorySiteLoggerMutation>;
export type UpdateHistorySiteLoggerMutationOptions = Apollo.BaseMutationOptions<UpdateHistorySiteLoggerMutation, UpdateHistorySiteLoggerMutationVariables>;
export const UpdateHistorySiteMeterDocument = gql`
    mutation UpdateHistorySiteMeter($history: HistorySiteMeterUpdateInput) {
  UpdateHistorySiteMeter(history: $history)
}
    `;
export type UpdateHistorySiteMeterMutationFn = Apollo.MutationFunction<UpdateHistorySiteMeterMutation, UpdateHistorySiteMeterMutationVariables>;

/**
 * __useUpdateHistorySiteMeterMutation__
 *
 * To run a mutation, you first call `useUpdateHistorySiteMeterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHistorySiteMeterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHistorySiteMeterMutation, { data, loading, error }] = useUpdateHistorySiteMeterMutation({
 *   variables: {
 *      history: // value for 'history'
 *   },
 * });
 */
export function useUpdateHistorySiteMeterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHistorySiteMeterMutation, UpdateHistorySiteMeterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHistorySiteMeterMutation, UpdateHistorySiteMeterMutationVariables>(UpdateHistorySiteMeterDocument, options);
      }
export type UpdateHistorySiteMeterMutationHookResult = ReturnType<typeof useUpdateHistorySiteMeterMutation>;
export type UpdateHistorySiteMeterMutationResult = Apollo.MutationResult<UpdateHistorySiteMeterMutation>;
export type UpdateHistorySiteMeterMutationOptions = Apollo.BaseMutationOptions<UpdateHistorySiteMeterMutation, UpdateHistorySiteMeterMutationVariables>;
export const UpdateHistorySiteTransmitterDocument = gql`
    mutation UpdateHistorySiteTransmitter($history: HistorySiteTransmitterUpdateInput) {
  UpdateHistorySiteTransmitter(history: $history)
}
    `;
export type UpdateHistorySiteTransmitterMutationFn = Apollo.MutationFunction<UpdateHistorySiteTransmitterMutation, UpdateHistorySiteTransmitterMutationVariables>;

/**
 * __useUpdateHistorySiteTransmitterMutation__
 *
 * To run a mutation, you first call `useUpdateHistorySiteTransmitterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHistorySiteTransmitterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHistorySiteTransmitterMutation, { data, loading, error }] = useUpdateHistorySiteTransmitterMutation({
 *   variables: {
 *      history: // value for 'history'
 *   },
 * });
 */
export function useUpdateHistorySiteTransmitterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHistorySiteTransmitterMutation, UpdateHistorySiteTransmitterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHistorySiteTransmitterMutation, UpdateHistorySiteTransmitterMutationVariables>(UpdateHistorySiteTransmitterDocument, options);
      }
export type UpdateHistorySiteTransmitterMutationHookResult = ReturnType<typeof useUpdateHistorySiteTransmitterMutation>;
export type UpdateHistorySiteTransmitterMutationResult = Apollo.MutationResult<UpdateHistorySiteTransmitterMutation>;
export type UpdateHistorySiteTransmitterMutationOptions = Apollo.BaseMutationOptions<UpdateHistorySiteTransmitterMutation, UpdateHistorySiteTransmitterMutationVariables>;
export const UpdateMeterInstallDocument = gql`
    mutation UpdateMeterInstall($meter: DeviceMeterInstallUpdateInput) {
  UpdateMeterInstall(meter: $meter)
}
    `;
export type UpdateMeterInstallMutationFn = Apollo.MutationFunction<UpdateMeterInstallMutation, UpdateMeterInstallMutationVariables>;

/**
 * __useUpdateMeterInstallMutation__
 *
 * To run a mutation, you first call `useUpdateMeterInstallMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeterInstallMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeterInstallMutation, { data, loading, error }] = useUpdateMeterInstallMutation({
 *   variables: {
 *      meter: // value for 'meter'
 *   },
 * });
 */
export function useUpdateMeterInstallMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeterInstallMutation, UpdateMeterInstallMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeterInstallMutation, UpdateMeterInstallMutationVariables>(UpdateMeterInstallDocument, options);
      }
export type UpdateMeterInstallMutationHookResult = ReturnType<typeof useUpdateMeterInstallMutation>;
export type UpdateMeterInstallMutationResult = Apollo.MutationResult<UpdateMeterInstallMutation>;
export type UpdateMeterInstallMutationOptions = Apollo.BaseMutationOptions<UpdateMeterInstallMutation, UpdateMeterInstallMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($user: UserUpdatePasswordInput) {
  UpdatePassword(user: $user)
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdatePreciousDocument = gql`
    mutation UpdatePrecious($precious: PreciousUpdateInput) {
  UpdatePrecious(precious: $precious) {
    idReturn
  }
}
    `;
export type UpdatePreciousMutationFn = Apollo.MutationFunction<UpdatePreciousMutation, UpdatePreciousMutationVariables>;

/**
 * __useUpdatePreciousMutation__
 *
 * To run a mutation, you first call `useUpdatePreciousMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePreciousMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePreciousMutation, { data, loading, error }] = useUpdatePreciousMutation({
 *   variables: {
 *      precious: // value for 'precious'
 *   },
 * });
 */
export function useUpdatePreciousMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePreciousMutation, UpdatePreciousMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePreciousMutation, UpdatePreciousMutationVariables>(UpdatePreciousDocument, options);
      }
export type UpdatePreciousMutationHookResult = ReturnType<typeof useUpdatePreciousMutation>;
export type UpdatePreciousMutationResult = Apollo.MutationResult<UpdatePreciousMutation>;
export type UpdatePreciousMutationOptions = Apollo.BaseMutationOptions<UpdatePreciousMutation, UpdatePreciousMutationVariables>;
export const UpdateSiteDocument = gql`
    mutation UpdateSite($site: SiteInput) {
  UpdateSite(site: $site)
}
    `;
export type UpdateSiteMutationFn = Apollo.MutationFunction<UpdateSiteMutation, UpdateSiteMutationVariables>;

/**
 * __useUpdateSiteMutation__
 *
 * To run a mutation, you first call `useUpdateSiteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSiteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSiteMutation, { data, loading, error }] = useUpdateSiteMutation({
 *   variables: {
 *      site: // value for 'site'
 *   },
 * });
 */
export function useUpdateSiteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSiteMutation, UpdateSiteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSiteMutation, UpdateSiteMutationVariables>(UpdateSiteDocument, options);
      }
export type UpdateSiteMutationHookResult = ReturnType<typeof useUpdateSiteMutation>;
export type UpdateSiteMutationResult = Apollo.MutationResult<UpdateSiteMutation>;
export type UpdateSiteMutationOptions = Apollo.BaseMutationOptions<UpdateSiteMutation, UpdateSiteMutationVariables>;
export const UpdateSiteLoggerDateChangeDocument = gql`
    mutation UpdateSiteLoggerDateChange($site: SiteLoggerDateChangeUpdateInput) {
  UpdateSiteLoggerDateChange(site: $site)
}
    `;
export type UpdateSiteLoggerDateChangeMutationFn = Apollo.MutationFunction<UpdateSiteLoggerDateChangeMutation, UpdateSiteLoggerDateChangeMutationVariables>;

/**
 * __useUpdateSiteLoggerDateChangeMutation__
 *
 * To run a mutation, you first call `useUpdateSiteLoggerDateChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSiteLoggerDateChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSiteLoggerDateChangeMutation, { data, loading, error }] = useUpdateSiteLoggerDateChangeMutation({
 *   variables: {
 *      site: // value for 'site'
 *   },
 * });
 */
export function useUpdateSiteLoggerDateChangeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSiteLoggerDateChangeMutation, UpdateSiteLoggerDateChangeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSiteLoggerDateChangeMutation, UpdateSiteLoggerDateChangeMutationVariables>(UpdateSiteLoggerDateChangeDocument, options);
      }
export type UpdateSiteLoggerDateChangeMutationHookResult = ReturnType<typeof useUpdateSiteLoggerDateChangeMutation>;
export type UpdateSiteLoggerDateChangeMutationResult = Apollo.MutationResult<UpdateSiteLoggerDateChangeMutation>;
export type UpdateSiteLoggerDateChangeMutationOptions = Apollo.BaseMutationOptions<UpdateSiteLoggerDateChangeMutation, UpdateSiteLoggerDateChangeMutationVariables>;
export const UpdateSiteMeterDateChangeDocument = gql`
    mutation UpdateSiteMeterDateChange($site: SiteMeterDateChangeUpdateInput) {
  UpdateSiteMeterDateChange(site: $site)
}
    `;
export type UpdateSiteMeterDateChangeMutationFn = Apollo.MutationFunction<UpdateSiteMeterDateChangeMutation, UpdateSiteMeterDateChangeMutationVariables>;

/**
 * __useUpdateSiteMeterDateChangeMutation__
 *
 * To run a mutation, you first call `useUpdateSiteMeterDateChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSiteMeterDateChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSiteMeterDateChangeMutation, { data, loading, error }] = useUpdateSiteMeterDateChangeMutation({
 *   variables: {
 *      site: // value for 'site'
 *   },
 * });
 */
export function useUpdateSiteMeterDateChangeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSiteMeterDateChangeMutation, UpdateSiteMeterDateChangeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSiteMeterDateChangeMutation, UpdateSiteMeterDateChangeMutationVariables>(UpdateSiteMeterDateChangeDocument, options);
      }
export type UpdateSiteMeterDateChangeMutationHookResult = ReturnType<typeof useUpdateSiteMeterDateChangeMutation>;
export type UpdateSiteMeterDateChangeMutationResult = Apollo.MutationResult<UpdateSiteMeterDateChangeMutation>;
export type UpdateSiteMeterDateChangeMutationOptions = Apollo.BaseMutationOptions<UpdateSiteMeterDateChangeMutation, UpdateSiteMeterDateChangeMutationVariables>;
export const UpdateSiteTransmitterDateChangeDocument = gql`
    mutation UpdateSiteTransmitterDateChange($site: SiteTransmitterDateChangeUpdateInput) {
  UpdateSiteTransmitterDateChange(site: $site)
}
    `;
export type UpdateSiteTransmitterDateChangeMutationFn = Apollo.MutationFunction<UpdateSiteTransmitterDateChangeMutation, UpdateSiteTransmitterDateChangeMutationVariables>;

/**
 * __useUpdateSiteTransmitterDateChangeMutation__
 *
 * To run a mutation, you first call `useUpdateSiteTransmitterDateChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSiteTransmitterDateChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSiteTransmitterDateChangeMutation, { data, loading, error }] = useUpdateSiteTransmitterDateChangeMutation({
 *   variables: {
 *      site: // value for 'site'
 *   },
 * });
 */
export function useUpdateSiteTransmitterDateChangeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSiteTransmitterDateChangeMutation, UpdateSiteTransmitterDateChangeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSiteTransmitterDateChangeMutation, UpdateSiteTransmitterDateChangeMutationVariables>(UpdateSiteTransmitterDateChangeDocument, options);
      }
export type UpdateSiteTransmitterDateChangeMutationHookResult = ReturnType<typeof useUpdateSiteTransmitterDateChangeMutation>;
export type UpdateSiteTransmitterDateChangeMutationResult = Apollo.MutationResult<UpdateSiteTransmitterDateChangeMutation>;
export type UpdateSiteTransmitterDateChangeMutationOptions = Apollo.BaseMutationOptions<UpdateSiteTransmitterDateChangeMutation, UpdateSiteTransmitterDateChangeMutationVariables>;
export const UpdateTransmitterInstallDocument = gql`
    mutation UpdateTransmitterInstall($transmitter: DeviceTransmitterInstallUpdateInput) {
  UpdateTransmitterInstall(transmitter: $transmitter)
}
    `;
export type UpdateTransmitterInstallMutationFn = Apollo.MutationFunction<UpdateTransmitterInstallMutation, UpdateTransmitterInstallMutationVariables>;

/**
 * __useUpdateTransmitterInstallMutation__
 *
 * To run a mutation, you first call `useUpdateTransmitterInstallMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransmitterInstallMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransmitterInstallMutation, { data, loading, error }] = useUpdateTransmitterInstallMutation({
 *   variables: {
 *      transmitter: // value for 'transmitter'
 *   },
 * });
 */
export function useUpdateTransmitterInstallMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransmitterInstallMutation, UpdateTransmitterInstallMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransmitterInstallMutation, UpdateTransmitterInstallMutationVariables>(UpdateTransmitterInstallDocument, options);
      }
export type UpdateTransmitterInstallMutationHookResult = ReturnType<typeof useUpdateTransmitterInstallMutation>;
export type UpdateTransmitterInstallMutationResult = Apollo.MutationResult<UpdateTransmitterInstallMutation>;
export type UpdateTransmitterInstallMutationOptions = Apollo.BaseMutationOptions<UpdateTransmitterInstallMutation, UpdateTransmitterInstallMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($user: UserUpdateInput) {
  UpdateUser(user: $user)
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const VerifyPasswordDocument = gql`
    query VerifyPassword($uid: String, $pwd: String) {
  VerifyPassword(Uid: $uid, Pwd: $pwd)
}
    `;

/**
 * __useVerifyPasswordQuery__
 *
 * To run a query within a React component, call `useVerifyPasswordQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyPasswordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyPasswordQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *      pwd: // value for 'pwd'
 *   },
 * });
 */
export function useVerifyPasswordQuery(baseOptions?: Apollo.QueryHookOptions<VerifyPasswordQuery, VerifyPasswordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyPasswordQuery, VerifyPasswordQueryVariables>(VerifyPasswordDocument, options);
      }
export function useVerifyPasswordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyPasswordQuery, VerifyPasswordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyPasswordQuery, VerifyPasswordQueryVariables>(VerifyPasswordDocument, options);
        }
export type VerifyPasswordQueryHookResult = ReturnType<typeof useVerifyPasswordQuery>;
export type VerifyPasswordLazyQueryHookResult = ReturnType<typeof useVerifyPasswordLazyQuery>;
export type VerifyPasswordQueryResult = Apollo.QueryResult<VerifyPasswordQuery, VerifyPasswordQueryVariables>;
export function refetchVerifyPasswordQuery(variables?: VerifyPasswordQueryVariables) {
      return { query: VerifyPasswordDocument, variables: variables }
    }