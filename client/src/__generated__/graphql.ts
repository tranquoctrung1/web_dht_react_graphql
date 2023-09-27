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

export type Mutation = {
  __typename?: 'Mutation';
  DeleteDataManual?: Maybe<Scalars['Int']>;
  DeleteDeviceChannelConifg?: Maybe<Scalars['Int']>;
  DeleteDeviceSiteConfig?: Maybe<Scalars['Int']>;
  DeletePrecious?: Maybe<RowModified>;
  DeleteSite?: Maybe<Scalars['Int']>;
  DeleteUser?: Maybe<Scalars['Int']>;
  InsertDataManual?: Maybe<Scalars['String']>;
  InsertDeviceSiteConfig?: Maybe<Scalars['String']>;
  InsertPrecious?: Maybe<IdOutput>;
  InsertSite?: Maybe<Scalars['String']>;
  InsertUser?: Maybe<Scalars['String']>;
  UpdateDataManual?: Maybe<Scalars['Int']>;
  UpdateDeviceChannelConfig?: Maybe<Scalars['String']>;
  UpdateDeviceSiteConfig?: Maybe<Scalars['String']>;
  UpdatePassword?: Maybe<Scalars['Int']>;
  UpdatePrecious?: Maybe<IdOutput>;
  UpdateSite?: Maybe<Scalars['String']>;
  UpdateUser?: Maybe<Scalars['Int']>;
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


export type MutationDeletePreciousArgs = {
  precious?: InputMaybe<PreciousUpdateInput>;
};


export type MutationDeleteSiteArgs = {
  site?: InputMaybe<SiteInput>;
};


export type MutationDeleteUserArgs = {
  user?: InputMaybe<UserUpdateInput>;
};


export type MutationInsertDataManualArgs = {
  dataManual?: InputMaybe<DataManualInsertInput>;
};


export type MutationInsertDeviceSiteConfigArgs = {
  siteConfig?: InputMaybe<DeviceSiteConfigInsertInput>;
};


export type MutationInsertPreciousArgs = {
  precious?: InputMaybe<PreciousInput>;
};


export type MutationInsertSiteArgs = {
  site?: InputMaybe<SiteInput>;
};


export type MutationInsertUserArgs = {
  user?: InputMaybe<UserInsertInput>;
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


export type MutationUpdatePasswordArgs = {
  user?: InputMaybe<UserUpdatePasswordInput>;
};


export type MutationUpdatePreciousArgs = {
  precious?: InputMaybe<PreciousUpdateInput>;
};


export type MutationUpdateSiteArgs = {
  site?: InputMaybe<SiteInput>;
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
  GetAllDataManual?: Maybe<Array<Maybe<DataManual>>>;
  GetAllDeviceChannelConifg?: Maybe<Array<Maybe<Channel>>>;
  GetAllDeviceSiteConfig?: Maybe<Array<Maybe<DeviceSiteConfig>>>;
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
  GetAllRole?: Maybe<Array<Maybe<Role>>>;
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
  GetAllUnit?: Maybe<Array<Maybe<Unit>>>;
  GetAllUser?: Maybe<Array<Maybe<User>>>;
  GetAllViewGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetChannelByLoggerId?: Maybe<Array<Maybe<Channel>>>;
  GetCompanies?: Maybe<Array<Company>>;
  GetDataLoggerByLastRecord?: Maybe<Array<DataLogger>>;
  GetDataLoggerByTimeStamp?: Maybe<Array<DataLogger>>;
  GetDataManualBySiteId?: Maybe<Array<Maybe<DataManual>>>;
  GetDataManualBySiteIdAndTimeStamp?: Maybe<Array<Maybe<DataManual>>>;
  GetPreciousByCompany?: Maybe<Array<Maybe<Precious>>>;
  GetSiteByWaterSubtractB2ForTA?: Maybe<Array<Maybe<Site>>>;
  GetSiteByWaterSupply: Array<Site>;
  GetStatisticSiteXNManager?: Maybe<Array<Maybe<StatisticSiteXnManager>>>;
  LoginAction?: Maybe<Login>;
  QuantityDayCompany: Array<QuantityDayCompany>;
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


export type QueryGetPreciousByCompanyArgs = {
  company?: InputMaybe<Scalars['String']>;
};


export type QueryGetSiteByWaterSupplyArgs = {
  company: Scalars['String'];
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

export type DeleteDataManualMutationVariables = Exact<{
  dataManual?: InputMaybe<DataManualUpdateInput>;
}>;


export type DeleteDataManualMutation = { __typename?: 'Mutation', DeleteDataManual?: number | null };

export type DeleteDeviceChannelConifgMutationVariables = Exact<{
  channel?: InputMaybe<ChannelInput>;
}>;


export type DeleteDeviceChannelConifgMutation = { __typename?: 'Mutation', DeleteDeviceChannelConifg?: number | null };

export type DeleteDeviceSiteConfigMutationVariables = Exact<{
  siteConfig?: InputMaybe<DeviceSiteConfigUpdateInput>;
}>;


export type DeleteDeviceSiteConfigMutation = { __typename?: 'Mutation', DeleteDeviceSiteConfig?: number | null };

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

export type GetAllDeviceChannelConifgQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDeviceChannelConifgQuery = { __typename?: 'Query', GetAllDeviceChannelConifg?: Array<{ __typename?: 'Channel', BaseLine?: number | null, BaseMax?: number | null, BaseMin?: number | null, Description?: string | null, DisplayOnGraph?: boolean | null, ForwardFlow?: boolean | null, GroupChannel?: string | null, IndexTimeStamp?: any | null, LastIndex?: number | null, LastTimeStamp?: any | null, LastValue?: number | null, LoggerId?: string | null, Name?: string | null, Pressure1?: boolean | null, Pressure2?: boolean | null, ReverseFlow?: boolean | null, StatusViewAlarm?: boolean | null, Unit?: string | null, _id?: string | null } | null> | null };

export type GetAllDeviceSiteConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDeviceSiteConfigQuery = { __typename?: 'Query', GetAllDeviceSiteConfig?: Array<{ __typename?: 'DeviceSiteConfig', BeginTime?: any | null, Forward?: number | null, LoggerId?: string | null, Pressure?: number | null, Pressure1?: number | null, Reverse?: number | null, SiteId?: string | null, Tel?: string | null, ZoomInit?: number | null, ZoomOn?: number | null, _id: string } | null> | null };

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

export type GetAllRoleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRoleQuery = { __typename?: 'Query', GetAllRole?: Array<{ __typename?: 'Role', Description?: string | null, Role?: string | null, _id: string } | null> | null };

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

export type GetAllUnitQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUnitQuery = { __typename?: 'Query', GetAllUnit?: Array<{ __typename?: 'Unit', Description?: string | null, Unit?: string | null, _id: string } | null> | null };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', GetAllUser?: Array<{ __typename?: 'User', Active?: boolean | null, Company?: string | null, Ip?: string | null, Language?: string | null, LogCount?: number | null, Pwd?: string | null, Role?: string | null, Salt?: string | null, StaffId?: string | null, TimeStamp?: any | null, Uid?: string | null, Zoom?: number | null, _id: string } | null> | null };

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

export type GetStatisticSiteXnManagerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatisticSiteXnManagerQuery = { __typename?: 'Query', GetStatisticSiteXNManager?: Array<{ __typename?: 'StatisticSiteXNManager', Availability?: string | null, Company?: string | null, Description?: string | null, Level?: string | null, Location?: string | null, Marks?: string | null, STT?: number | null, SiteId?: string | null, Size?: number | null, Status?: string | null, UsingLogger?: boolean | null } | null> | null };

export type InsertDataManualMutationVariables = Exact<{
  dataManual?: InputMaybe<DataManualInsertInput>;
}>;


export type InsertDataManualMutation = { __typename?: 'Mutation', InsertDataManual?: string | null };

export type InsertDeviceSiteConfigMutationVariables = Exact<{
  siteConfig?: InputMaybe<DeviceSiteConfigInsertInput>;
}>;


export type InsertDeviceSiteConfigMutation = { __typename?: 'Mutation', InsertDeviceSiteConfig?: string | null };

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

export type UpdateDataManualMutationVariables = Exact<{
  dataManual?: InputMaybe<DataManualUpdateInput>;
}>;


export type UpdateDataManualMutation = { __typename?: 'Mutation', UpdateDataManual?: number | null };

export type UpdateDeviceChannelConfigMutationVariables = Exact<{
  channel?: InputMaybe<ChannelInput>;
}>;


export type UpdateDeviceChannelConfigMutation = { __typename?: 'Mutation', UpdateDeviceChannelConfig?: string | null };

export type UpdateDeviceSiteConfigMutationVariables = Exact<{
  siteConfig?: InputMaybe<DeviceSiteConfigUpdateInput>;
}>;


export type UpdateDeviceSiteConfigMutation = { __typename?: 'Mutation', UpdateDeviceSiteConfig?: string | null };

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