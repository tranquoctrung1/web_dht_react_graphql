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

export type Company = {
  __typename?: 'Company';
  Company?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Production?: Maybe<Scalars['Int']>;
};

export type DataLogger = {
  __typename?: 'DataLogger';
  TimeStamp?: Maybe<Scalars['Date']>;
  Value?: Maybe<Scalars['Float']>;
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
  ReceipDate?: Maybe<Scalars['Date']>;
  Serial?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
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
  ReceipDate?: Maybe<Scalars['Date']>;
  Serial?: Maybe<Scalars['String']>;
  SerialTransmitter?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  _id: Scalars['ID'];
};

export type DeviceMeterAccreditationType = {
  __typename?: 'DeviceMeterAccreditationType';
  AccreditationType?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
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
  ReceipDate?: Maybe<Scalars['Date']>;
  Serial?: Maybe<Scalars['String']>;
  Size?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  DeletePrecious?: Maybe<RowModified>;
  InsertPrecious?: Maybe<IdOutput>;
  UpdatePrecious?: Maybe<IdOutput>;
};


export type MutationDeletePreciousArgs = {
  precious?: InputMaybe<PreciousUpdateInput>;
};


export type MutationInsertPreciousArgs = {
  precious?: InputMaybe<PreciousInput>;
};


export type MutationUpdatePreciousArgs = {
  precious?: InputMaybe<PreciousUpdateInput>;
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
  GetAllCoverID?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllDistrict?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllGroup?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllGroup2?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllGroup3?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllGroup4?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllGroup5?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllLevel?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllLogger?: Maybe<Array<Maybe<DeviceLogger>>>;
  GetAllLoggerNotInstall?: Maybe<Array<Maybe<DeviceLogger>>>;
  GetAllMeter?: Maybe<Array<Maybe<DeviceMeter>>>;
  GetAllMeterAccreditationType?: Maybe<Array<Maybe<DeviceMeterAccreditationType>>>;
  GetAllMeterNotInstall?: Maybe<Array<Maybe<DeviceMeter>>>;
  GetAllOldSiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetAllPrecious?: Maybe<Array<Maybe<Precious>>>;
  GetAllSiteAndChannel?: Maybe<Array<SiteAndChannel>>;
  GetAllSiteAvailabilities?: Maybe<Array<Maybe<SiteAvailabilities>>>;
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
  GetAllViewGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetChannelByLoggerId?: Maybe<Array<Maybe<Channel>>>;
  GetCompanies?: Maybe<Array<Company>>;
  GetDataLoggerByLastRecord?: Maybe<Array<DataLogger>>;
  GetDataLoggerByTimeStamp?: Maybe<Array<DataLogger>>;
  GetPreciousByCompany?: Maybe<Array<Maybe<Precious>>>;
  GetSiteByWaterSubtractB2ForTA?: Maybe<Array<Maybe<Site>>>;
  GetSiteByWaterSupply: Array<Site>;
  QuantityDayCompany: Array<QuantityDayCompany>;
  QuantityDayWaterSupply: Array<QuantityDayWaterSupply>;
  QuantityLoggerByTimeStamp: Array<QuantityLoggerByTimeStamp>;
  QuantityLoggerDay: Scalars['Float'];
  QuantityLoggerDayWaterSupply: Array<QuantityLoggerDayWaterSupply>;
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


export type QueryGetPreciousByCompanyArgs = {
  company?: InputMaybe<Scalars['String']>;
};


export type QueryGetSiteByWaterSupplyArgs = {
  company: Scalars['String'];
};


export type QueryQuantityDayCompanyArgs = {
  company: Scalars['String'];
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
  CoverMeterial?: Maybe<Scalars['Int']>;
  CoverNL?: Maybe<Scalars['Int']>;
  CoverW?: Maybe<Scalars['Int']>;
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

export type SiteLevel = {
  __typename?: 'SiteLevel';
  Description?: Maybe<Scalars['String']>;
  Level?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
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

export type UserStaff = {
  __typename?: 'UserStaff';
  FirstName?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
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

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', GetCompanies?: Array<{ __typename?: 'Company', Company?: string | null, Description?: string | null, Production?: number | null }> | null };

export type DeletePreciousMutationVariables = Exact<{
  precious?: InputMaybe<PreciousUpdateInput>;
}>;


export type DeletePreciousMutation = { __typename?: 'Mutation', DeletePrecious?: { __typename?: 'RowModified', nRow?: number | null } | null };

export type GetAllDistrictQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDistrictQuery = { __typename?: 'Query', GetAllDistrict?: Array<string | null> | null };

export type GetAllLoggerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLoggerQuery = { __typename?: 'Query', GetAllLogger?: Array<{ __typename?: 'DeviceLogger', Description?: string | null, Installed?: boolean | null, Marks?: string | null, Model?: string | null, Provider?: string | null, ReceipDate?: any | null, Serial?: string | null, Status?: string | null, _id: string } | null> | null };

export type GetAllLoggerNotInstallQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLoggerNotInstallQuery = { __typename?: 'Query', GetAllLoggerNotInstall?: Array<{ __typename?: 'DeviceLogger', Description?: string | null, Installed?: boolean | null, Marks?: string | null, Model?: string | null, Provider?: string | null, ReceipDate?: any | null, Serial?: string | null, Status?: string | null, _id: string } | null> | null };

export type GetAllMeterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMeterQuery = { __typename?: 'Query', GetAllMeter?: Array<{ __typename?: 'DeviceMeter', AccreditatedDate?: any | null, AccreditationDocument?: string | null, AccreditationType?: string | null, AppovalDate?: any | null, AppovalDecision?: string | null, Approvaled?: any | null, Description?: string | null, ExpiryDate?: any | null, InstallIndex?: number | null, Installed?: boolean | null, Marks?: string | null, Model?: string | null, Nationality?: string | null, Provider?: string | null, ReceipDate?: any | null, Serial?: string | null, SerialTransmitter?: string | null, Size?: number | null, _id: string } | null> | null };

export type GetAllMeterNotInstallQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMeterNotInstallQuery = { __typename?: 'Query', GetAllMeterNotInstall?: Array<{ __typename?: 'DeviceMeter', AccreditatedDate?: any | null, AccreditationDocument?: string | null, AccreditationType?: string | null, AppovalDate?: any | null, AppovalDecision?: string | null, Approvaled?: any | null, Description?: string | null, ExpiryDate?: any | null, InstallIndex?: number | null, Installed?: boolean | null, Marks?: string | null, Model?: string | null, Nationality?: string | null, Provider?: string | null, ReceipDate?: any | null, Serial?: string | null, SerialTransmitter?: string | null, Size?: number | null, _id: string } | null> | null };

export type GetAllOldSiteIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOldSiteIdQuery = { __typename?: 'Query', GetAllOldSiteId?: Array<string | null> | null };

export type GetAllSitesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSitesQuery = { __typename?: 'Query', GetAllSites: Array<{ __typename?: 'Site', Address?: string | null, Availability?: string | null, Status?: string | null, ChangeIndex1?: number | null, ChangeIndex?: number | null, Company?: string | null, CoverID?: string | null, DateOfBatteryChange?: any | null, DateOfLoggerChange?: any | null, DateOfLoggerBatteryChange?: any | null, DateOfMeterChange?: any | null, DateOfTransmitterChange?: any | null, DateOfTransmitterBatteryChange?: any | null, Description?: string | null, DescriptionOfChange?: string | null, Display?: boolean | null, District?: string | null, Group?: string | null, Group2?: string | null, Group3?: string | null, Group4?: string | null, IstDistributionCompany?: string | null, Group5?: string | null, IsErrorBattery?: boolean | null, Latitude?: number | null, Level?: string | null, IstDoNotCalculateReverse?: boolean | null, Location?: string | null, Logger?: string | null, Longitude?: number | null, Meter?: string | null, MeterDirection?: string | null, OldId?: string | null, ProductionCompany?: string | null, Property?: boolean | null, QndDistributionCompany?: string | null, QndDoNotCalculateReverse?: boolean | null, StaffId?: string | null, Takeovered?: boolean | null, TakeoverDate?: any | null, Transmitter?: string | null, UsingLogger?: boolean | null, ViewGroup?: string | null, _id: string } | null> };

export type GetAllSiteAndChannelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteAndChannelQuery = { __typename?: 'Query', GetAllSiteAndChannel?: Array<{ __typename?: 'SiteAndChannel', Address?: string | null, Company?: string | null, Description?: string | null, District?: string | null, Group?: string | null, Group2?: string | null, Group3?: string | null, Group4?: string | null, Group5?: string | null, IsErrorBattery?: boolean | null, Latitude?: number | null, Level?: string | null, Location?: string | null, LoggerId?: string | null, Longitude?: number | null, OldId?: string | null, _id: string, Channels?: Array<{ __typename?: 'Channel', BaseMin?: number | null, BaseLine?: number | null, BaseMax?: number | null, Description?: string | null, DisplayOnGraph?: boolean | null, ForwardFlow?: boolean | null, GroupChannel?: string | null, IndexTimeStamp?: any | null, LastIndex?: number | null, LastTimeStamp?: any | null, LastValue?: number | null, LoggerId?: string | null, Name?: string | null, Pressure1?: boolean | null, Pressure2?: boolean | null, ReverseFlow?: boolean | null, StatusViewAlarm?: boolean | null, Unit?: string | null, _id?: string | null }> | null }> | null };

export type GetAllSiteAvailabilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteAvailabilitiesQuery = { __typename?: 'Query', GetAllSiteAvailabilities?: Array<{ __typename?: 'SiteAvailabilities', Availability?: string | null, Description?: string | null, _id: string } | null> | null };

export type GetAllSiteCoverQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteCoverQuery = { __typename?: 'Query', GetAllSiteCover?: Array<{ __typename?: 'SiteCover', CoverH?: number | null, CoverID?: string | null, CoverL?: number | null, CoverMeterial?: number | null, CoverNL?: number | null, CoverW?: number | null, _id: string } | null> | null };

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


export type GetAllTransmitterQuery = { __typename?: 'Query', GetAllTransmitter?: Array<{ __typename?: 'DeviceTransmitter', AccreditatedDate?: any | null, AccreditationType?: string | null, AccreditationDocument?: string | null, AppovalDate?: any | null, AppovalDecision?: string | null, Approvaled?: any | null, Description?: string | null, InstallIndex?: number | null, ExpiryDate?: any | null, Installed?: boolean | null, Marks?: string | null, MeterSerial?: string | null, ReceipDate?: any | null, Serial?: string | null, Size?: number | null, Status?: string | null, _id: string, Provider?: string | null, Model?: string | null } | null> | null };

export type GetAllTransmitterNotInstallQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTransmitterNotInstallQuery = { __typename?: 'Query', GetAllTransmitterNotInstall?: Array<{ __typename?: 'DeviceTransmitter', AccreditatedDate?: any | null, AccreditationType?: string | null, AccreditationDocument?: string | null, AppovalDate?: any | null, AppovalDecision?: string | null, Approvaled?: any | null, Description?: string | null, InstallIndex?: number | null, ExpiryDate?: any | null, Installed?: boolean | null, Marks?: string | null, MeterSerial?: string | null, ReceipDate?: any | null, Serial?: string | null, Size?: number | null, Status?: string | null, _id: string, Provider?: string | null, Model?: string | null } | null> | null };

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

export type GetAllMeterAccreditationTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMeterAccreditationTypeQuery = { __typename?: 'Query', GetAllMeterAccreditationType?: Array<{ __typename?: 'DeviceMeterAccreditationType', AccreditationType?: string | null, Description?: string | null, _id: string } | null> | null };

export type GetPreciousByCompanyQueryVariables = Exact<{
  company?: InputMaybe<Scalars['String']>;
}>;


export type GetPreciousByCompanyQuery = { __typename?: 'Query', GetPreciousByCompany?: Array<{ __typename?: 'Precious', _id: string, Company: string, Start?: string | null, CompanyName?: string | null, End?: string | null, Period?: string | null, CreateAt?: string | null, UsernameCreated?: string | null, Location?: Array<{ __typename?: 'Location', Location?: string | null, Reason?: string | null, SiteId?: string | null, AverageDate?: Array<Array<string | null> | null> | null, QuantityLogger?: number | null, TotalQuantity?: number | null, PrevTetHoliday?: Array<string | null> | null, NextTetHoliday?: Array<string | null> | null, TenDayPrevTetHoliday?: Array<string | null> | null, KFactory?: number | null, AveragePrevTetHoliday?: number | null, AverageTenDayPrevTetHoliday?: number | null, Periods?: Array<{ __typename?: 'Periods', Period?: string | null, Quantity?: number | null } | null> | null, DateCalclogger?: Array<{ __typename?: 'DateCalclogger', Quantity?: number | null, From?: string | null, To?: string | null, DateRange?: Array<string | null> | null } | null> | null } | null> | null, Index?: Array<{ __typename?: 'Index', SiteId?: string | null, Location?: string | null, PreviousPeriodIndex?: number | null, NextPeriodIndex?: number | null } | null> | null, LockValve?: Array<{ __typename?: 'LockValve', SiteId?: string | null, Location?: string | null } | null> | null, SubtractWaterB1?: Array<{ __typename?: 'SubtractWaterB1', NumberPrecious?: string | null, Content?: string | null, Provider?: string | null, AmountWater?: number | null, Note?: string | null } | null> | null, SubtractWaterB2?: Array<{ __typename?: 'SubtractWaterB2', NumberPrecious?: string | null, Content?: string | null, AmountWater?: number | null, Provider?: string | null, Note?: string | null } | null> | null, WaterCustomer?: Array<{ __typename?: 'WaterCustomer', NumberPrecious?: string | null, DatePublished?: string | null, AmountMeter?: number | null, AmountWater?: number | null, Note?: string | null } | null> | null } | null> | null };

export type GetSiteByWaterSubtractB2ForTaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSiteByWaterSubtractB2ForTaQuery = { __typename?: 'Query', GetSiteByWaterSubtractB2ForTA?: Array<{ __typename?: 'Site', _id: string, Location?: string | null, OldId?: string | null, Latitude?: number | null, Longitude?: number | null, ViewGroup?: string | null, StaffId?: string | null, Meter?: string | null, Transmitter?: string | null, Logger?: string | null, DateOfMeterChange?: any | null, DateOfLoggerChange?: any | null, DateOfTransmitterChange?: any | null, DateOfBatteryChange?: any | null, DateOfTransmitterBatteryChange?: any | null, DateOfLoggerBatteryChange?: any | null, DescriptionOfChange?: string | null, ChangeIndex?: number | null, Level?: string | null, Group?: string | null, Company?: string | null, Takeovered?: boolean | null, TakeoverDate?: any | null, Availability?: string | null, Status?: string | null, Display?: boolean | null, Property?: boolean | null, UsingLogger?: boolean | null, MeterDirection?: string | null, ProductionCompany?: string | null, IstDistributionCompany?: string | null, QndDistributionCompany?: string | null, IstDoNotCalculateReverse?: boolean | null, QndDoNotCalculateReverse?: boolean | null, ChangeIndex1?: number | null, Description?: string | null, Group2?: string | null, Address?: string | null, CoverID?: string | null, Group3?: string | null, Group4?: string | null, Group5?: string | null, District?: string | null, IsErrorBattery?: boolean | null } | null> | null };

export type GetSiteByWaterSupplyQueryVariables = Exact<{
  company: Scalars['String'];
}>;


export type GetSiteByWaterSupplyQuery = { __typename?: 'Query', GetSiteByWaterSupply: Array<{ __typename?: 'Site', _id: string, OldId?: string | null, Location?: string | null, Logger?: string | null, Company?: string | null, Description?: string | null, MeterDirection?: string | null, ProductionCompany?: string | null, IstDistributionCompany?: string | null, QndDistributionCompany?: string | null, IstDoNotCalculateReverse?: boolean | null, QndDoNotCalculateReverse?: boolean | null, Address?: string | null }> };

export type InsertPreciousMutationVariables = Exact<{
  precious?: InputMaybe<PreciousInput>;
}>;


export type InsertPreciousMutation = { __typename?: 'Mutation', InsertPrecious?: { __typename?: 'IdOutput', idReturn?: string | null } | null };

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

export type UpdatePreciousMutationVariables = Exact<{
  precious?: InputMaybe<PreciousUpdateInput>;
}>;


export type UpdatePreciousMutation = { __typename?: 'Mutation', UpdatePrecious?: { __typename?: 'IdOutput', idReturn?: string | null } | null };


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
export const GetAllLoggerDocument = gql`
    query GetAllLogger {
  GetAllLogger {
    Description
    Installed
    Marks
    Model
    Provider
    ReceipDate
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
export const GetAllLoggerNotInstallDocument = gql`
    query GetAllLoggerNotInstall {
  GetAllLoggerNotInstall {
    Description
    Installed
    Marks
    Model
    Provider
    ReceipDate
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
    Nationality
    Provider
    ReceipDate
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
    Nationality
    Provider
    ReceipDate
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
    ReceipDate
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
    ReceipDate
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