const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const ActivityLogCollection = 'ActivityLog';

module.exports.ActivityLog = class ActivityLog {
    constructor(Uid, Role, Action, Page, Target, Detail, CreatedAt) {
        this.Uid = Uid;
        this.Role = Role;
        this.Action = Action;
        this.Page = Page;
        this.Target = Target;
        this.Detail = Detail;
        this.CreatedAt = CreatedAt;
    }
};

const buildFilter = (filter) => {
    let query = {};

    if (filter.Uid !== undefined && filter.Uid !== null && filter.Uid !== '') {
        query.Uid = filter.Uid;
    }

    if (
        filter.Action !== undefined &&
        filter.Action !== null &&
        filter.Action !== ''
    ) {
        query.Action = filter.Action;
    }

    if (
        filter.Page !== undefined &&
        filter.Page !== null &&
        filter.Page !== ''
    ) {
        query.Page = { $regex: filter.Page, $options: 'i' };
    }

    if (
        (filter.dateFrom !== undefined && filter.dateFrom !== null) ||
        (filter.dateTo !== undefined && filter.dateTo !== null)
    ) {
        query.CreatedAt = {};

        if (filter.dateFrom !== undefined && filter.dateFrom !== null) {
            query.CreatedAt.$gte = new Date(filter.dateFrom);
        }

        if (filter.dateTo !== undefined && filter.dateTo !== null) {
            query.CreatedAt.$lte = new Date(filter.dateTo);
        }
    }

    return query;
};

module.exports.Insert = async (log) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(ActivityLogCollection);

    result = await collection.insertOne(log);

    result = result.insertedId;

    return result;
};

module.exports.Find = async (filter) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(ActivityLogCollection);

    let query = buildFilter(filter);

    let skip = filter.skip !== undefined && filter.skip !== null ? filter.skip : 0;
    let limit =
        filter.limit !== undefined && filter.limit !== null ? filter.limit : 50;

    let result = await collection
        .find(query)
        .sort({ CreatedAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray();

    return result;
};

module.exports.Count = async (filter) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(ActivityLogCollection);

    let query = buildFilter(filter);

    let result = await collection.countDocuments(query);

    return result;
};
