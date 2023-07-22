const { ObjectId } = require('mongodb');
const ConnectDB = require('../db/connect');

const PreciousCollection = 't_Precious';

module.exports.Precious = class Precious {
    constructor(
        Company,
        CompanyName,
        Start,
        End,
        Period,
        CreateAt,
        UsernameCreated,
        Location,
        Index,
        LockValve,
        SubtractWaterB1,
        SubtractWaterB2,
        WaterCustomer,
    ) {
        this.Company = Company;
        this.CompanyName = CompanyName;
        this.Start = Start;
        this.End = End;
        this.Period = Period;
        this.CreateAt = CreateAt;
        this.UsernameCreated = UsernameCreated;
        this.Location = Location;
        this.Index = Index;
        this.LockValve = LockValve;
        this.SubtractWaterB1 = SubtractWaterB1;
        this.SubtractWaterB2 = SubtractWaterB2;
        this.WaterCutomer = WaterCustomer;
    }
};

module.exports.GetAllPrecious = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(PreciousCollection);

    let result = await collection.find({}).sort({ End: -1 }).toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetPreciousByCompany = async (company) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(PreciousCollection);

    let result = await collection
        .find({ Company: company })
        .sort({ End: -1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (precious) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(PreciousCollection);

    result = await collection.insertOne(precious);

    result = result.insertedId;

    Connect.disconnect();

    return { idReturn: result };
};

module.exports.Delete = async (precious) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(PreciousCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(precious._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (precious) => {
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(PreciousCollection);

        precious._id = new ObjectId(precious._id);

        let result = await collection.deleteMany({
            _id: precious._id,
        });

        result = await collection.insertOne(precious);

        Connect.disconnect();

        return result.insertedId;
    } catch (err) {
        console.log(err);
    }
};
