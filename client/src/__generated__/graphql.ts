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
  GetAllSiteAndChannel?: Maybe<Array<SiteAndChannel>>;
  GetAllSites: Array<Maybe<Site>>;
  GetChannelByLoggerId?: Maybe<Array<Maybe<Channel>>>;
  GetCompanies?: Maybe<Array<Company>>;
  GetDataLoggerByLastRecord?: Maybe<Array<DataLogger>>;
  GetDataLoggerByTimeStamp?: Maybe<Array<DataLogger>>;
  GetSiteByWaterSupply: Array<Site>;
  QuantityDayCompany: Array<QuantityDayCompany>;
  QuantityDayWaterSupply: Array<QuantityDayWaterSupply>;
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

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', GetCompanies?: Array<{ __typename?: 'Company', Company?: string | null, Description?: string | null, Production?: number | null }> | null };

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

export type GetSiteByWaterSupplyQueryVariables = Exact<{
  company: Scalars['String'];
}>;


export type GetSiteByWaterSupplyQuery = { __typename?: 'Query', GetSiteByWaterSupply: Array<{ __typename?: 'Site', _id: string, OldId?: string | null, Location?: string | null, Logger?: string | null, Company?: string | null, Description?: string | null, MeterDirection?: string | null, ProductionCompany?: string | null, IsDistributionCompany?: string | null, QndDistributionCompany?: string | null, IstDoNotCalculateReverse?: boolean | null, QndDoNotCalculateReverse?: boolean | null, Address?: string | null }> };

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