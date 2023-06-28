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
  DateCalclogger?: Maybe<Array<Maybe<DateCalclogger>>>;
  Location?: Maybe<Scalars['String']>;
  Periods?: Maybe<Array<Maybe<Periods>>>;
  QuantityLogger?: Maybe<Scalars['Float']>;
  SiteId?: Maybe<Scalars['String']>;
  TotalQuantity?: Maybe<Scalars['Float']>;
};

export type LocationInput = {
  AverageDate?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
  DateCalclogger?: InputMaybe<Array<InputMaybe<DateCalcloggerInput>>>;
  Location?: InputMaybe<Scalars['String']>;
  Periods?: InputMaybe<Array<InputMaybe<PeriodsInput>>>;
  QuantityLogger?: InputMaybe<Scalars['Float']>;
  SiteId?: InputMaybe<Scalars['String']>;
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
  GetAllPrecious?: Maybe<Array<Maybe<Precious>>>;
  GetAllSiteAndChannel?: Maybe<Array<SiteAndChannel>>;
  GetAllSites: Array<Maybe<Site>>;
  GetChannelByLoggerId?: Maybe<Array<Maybe<Channel>>>;
  GetCompanies?: Maybe<Array<Company>>;
  GetDataLoggerByLastRecord?: Maybe<Array<DataLogger>>;
  GetDataLoggerByTimeStamp?: Maybe<Array<DataLogger>>;
  GetPreciousByCompany?: Maybe<Array<Maybe<Precious>>>;
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
  end: Scalars['String'];
  siteid: Scalars['String'];
  start: Scalars['String'];
};


export type QueryQuantityLoggerDayArgs = {
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
  DateOfBatteyChange?: Maybe<Scalars['Date']>;
  DateOfLoggerBatteryChange?: Maybe<Scalars['Date']>;
  DateOfLoggerChange?: Maybe<Scalars['Date']>;
  DateOfMeterChange?: Maybe<Scalars['Date']>;
  DateOfTransmitterBatteryChgange?: Maybe<Scalars['Date']>;
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
  IsDistributionCompany?: Maybe<Scalars['String']>;
  IsErrorBattery?: Maybe<Scalars['Boolean']>;
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

export type GetAllSitesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSitesQuery = { __typename?: 'Query', GetAllSites: Array<{ __typename?: 'Site', Address?: string | null, Availability?: string | null, ChangeIndex1?: number | null, ChangeIndex?: number | null, Company?: string | null, CoverID?: string | null, DateOfBatteyChange?: any | null, DateOfLoggerChange?: any | null, DateOfLoggerBatteryChange?: any | null, DateOfMeterChange?: any | null, DateOfTransmitterChange?: any | null, DateOfTransmitterBatteryChgange?: any | null, Description?: string | null, DescriptionOfChange?: string | null, Display?: boolean | null, District?: string | null, Group?: string | null, Group2?: string | null, Group3?: string | null, Group4?: string | null, IsDistributionCompany?: string | null, Group5?: string | null, IsErrorBattery?: boolean | null, Latitude?: number | null, Level?: string | null, IstDoNotCalculateReverse?: boolean | null, Location?: string | null, Logger?: string | null, Longitude?: number | null, Meter?: string | null, MeterDirection?: string | null, OldId?: string | null, ProductionCompany?: string | null, Property?: boolean | null, QndDistributionCompany?: string | null, QndDoNotCalculateReverse?: boolean | null, StaffId?: string | null, Takeovered?: boolean | null, TakeoverDate?: any | null, Transmitter?: string | null, UsingLogger?: boolean | null, ViewGroup?: string | null, _id: string } | null> };

export type GetAllSiteAndChannelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSiteAndChannelQuery = { __typename?: 'Query', GetAllSiteAndChannel?: Array<{ __typename?: 'SiteAndChannel', Address?: string | null, Company?: string | null, Description?: string | null, District?: string | null, Group?: string | null, Group2?: string | null, Group3?: string | null, Group4?: string | null, Group5?: string | null, IsErrorBattery?: boolean | null, Latitude?: number | null, Level?: string | null, Location?: string | null, LoggerId?: string | null, Longitude?: number | null, OldId?: string | null, _id: string, Channels?: Array<{ __typename?: 'Channel', BaseMin?: number | null, BaseLine?: number | null, BaseMax?: number | null, Description?: string | null, DisplayOnGraph?: boolean | null, ForwardFlow?: boolean | null, GroupChannel?: string | null, IndexTimeStamp?: any | null, LastIndex?: number | null, LastTimeStamp?: any | null, LastValue?: number | null, LoggerId?: string | null, Name?: string | null, Pressure1?: boolean | null, Pressure2?: boolean | null, ReverseFlow?: boolean | null, StatusViewAlarm?: boolean | null, Unit?: string | null, _id?: string | null }> | null }> | null };

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

export type GetPreciousByCompanyQueryVariables = Exact<{
  company?: InputMaybe<Scalars['String']>;
}>;


export type GetPreciousByCompanyQuery = { __typename?: 'Query', GetPreciousByCompany?: Array<{ __typename?: 'Precious', _id: string, Company: string, Start?: string | null, CompanyName?: string | null, End?: string | null, Period?: string | null, CreateAt?: string | null, UsernameCreated?: string | null, Location?: Array<{ __typename?: 'Location', Location?: string | null, SiteId?: string | null, AverageDate?: Array<Array<string | null> | null> | null, QuantityLogger?: number | null, TotalQuantity?: number | null, Periods?: Array<{ __typename?: 'Periods', Period?: string | null, Quantity?: number | null } | null> | null, DateCalclogger?: Array<{ __typename?: 'DateCalclogger', Quantity?: number | null, From?: string | null, To?: string | null, DateRange?: Array<string | null> | null } | null> | null } | null> | null, Index?: Array<{ __typename?: 'Index', SiteId?: string | null, Location?: string | null, PreviousPeriodIndex?: number | null, NextPeriodIndex?: number | null } | null> | null, LockValve?: Array<{ __typename?: 'LockValve', SiteId?: string | null, Location?: string | null } | null> | null, SubtractWaterB1?: Array<{ __typename?: 'SubtractWaterB1', NumberPrecious?: string | null, Content?: string | null, Provider?: string | null, AmountWater?: number | null, Note?: string | null } | null> | null, SubtractWaterB2?: Array<{ __typename?: 'SubtractWaterB2', NumberPrecious?: string | null, Content?: string | null, AmountWater?: number | null, Provider?: string | null, Note?: string | null } | null> | null, WaterCustomer?: Array<{ __typename?: 'WaterCustomer', NumberPrecious?: string | null, DatePublished?: string | null, AmountMeter?: number | null, AmountWater?: number | null, Note?: string | null } | null> | null } | null> | null };

export type GetSiteByWaterSupplyQueryVariables = Exact<{
  company: Scalars['String'];
}>;


export type GetSiteByWaterSupplyQuery = { __typename?: 'Query', GetSiteByWaterSupply: Array<{ __typename?: 'Site', _id: string, OldId?: string | null, Location?: string | null, Logger?: string | null, Company?: string | null, Description?: string | null, MeterDirection?: string | null, ProductionCompany?: string | null, IsDistributionCompany?: string | null, QndDistributionCompany?: string | null, IstDoNotCalculateReverse?: boolean | null, QndDoNotCalculateReverse?: boolean | null, Address?: string | null }> };

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
  start: Scalars['String'];
  end: Scalars['String'];
}>;


export type QuantityLoggerByTimeStampQuery = { __typename?: 'Query', QuantityLoggerByTimeStamp: Array<{ __typename?: 'QuantityLoggerByTimeStamp', SiteId: string, Location?: string | null, Marks?: string | null, Size?: number | null, MeterDirection?: string | null, IstDistributionCompany?: string | null, QndDistributionCompany?: string | null, OldId?: string | null, Company?: string | null, Address?: string | null, Display?: boolean | null, IstDoNotCalculateReverse?: number | null, QndDoNotCalculateReverse?: number | null, ListQuantity?: Array<{ __typename?: 'Quantity', TimeStamp?: any | null, Value?: number | null, IsEnoughData?: boolean | null } | null> | null }> };

export type QuantityLoggerDayQueryVariables = Exact<{
  siteid: Scalars['String'];
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
export const GetAllSitesDocument = gql`
    query GetAllSites {
  GetAllSites {
    Address
    Availability
    ChangeIndex1
    ChangeIndex
    Company
    CoverID
    DateOfBatteyChange
    DateOfLoggerChange
    DateOfLoggerBatteryChange
    DateOfMeterChange
    DateOfTransmitterChange
    DateOfTransmitterBatteryChgange
    Description
    DescriptionOfChange
    Display
    District
    Group
    Group2
    Group3
    Group4
    IsDistributionCompany
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
    IsDistributionCompany
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
    query QuantityLoggerByTimeStamp($siteid: String!, $start: String!, $end: String!) {
  QuantityLoggerByTimeStamp(siteid: $siteid, start: $start, end: $end) {
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
    query QuantityLoggerDay($siteid: String!, $start: String!, $end: String!) {
  QuantityLoggerDay(siteid: $siteid, start: $start, end: $end)
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