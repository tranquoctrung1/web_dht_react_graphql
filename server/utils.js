module.exports.CalculateSpcaeDay = (start, end) => {
    let difference = end.getTime() - start.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
};

module.exports.UpdateAmountSize = (data, meter, site) => {
    if (data.length > 0 && site._id !== '') {
        const findProvider = data.find((el) => el.Provider === meter.Provider);
        if (findProvider !== undefined) {
            const findMark = findProvider.Marks.find(
                (el) => el.Mark === meter.Marks,
            );

            if (findMark !== undefined) {
                const findModel = findMark.Models.find(
                    (el) => el.Model === meter.Model,
                );

                if (findModel !== undefined) {
                    const findSize = findModel.Sizes.find(
                        (el) => el.Size === meter.Size,
                    );

                    if (findSize !== undefined) {
                        const t = site._id[0] + site._id[1];

                        const findCompany = findSize.Companies.find(
                            (el) => el.Company === t,
                        );

                        if (findCompany !== undefined) {
                            findCompany.Amount += 1;
                            findSize.Companies[0].Amount += 1;

                            const findTotalSize = findModel.Sizes[
                                findModel.Sizes.length - 1
                            ].Companies.find((el) => el.Company === t);
                            if (findTotalSize !== undefined) {
                                findTotalSize.Amount += 1;
                                findModel.Sizes[
                                    findModel.Sizes.length - 1
                                ].Companies[0].Amount += 1;
                            }
                        }
                    }
                }
            }
        }
    }
};

module.exports.CreateListCompanyForStatisticMarkSize = (listSites) => {
    // find list companies
    const listCompanies = [];

    for (const site of listSites) {
        if (site._id !== null && site._id !== undefined && site._id !== '') {
            const t = site._id[0] + site._id[1];
            const find = listCompanies.find((el) => el === t);
            if (find === undefined) {
                listCompanies.push(t);
            }
        }
    }

    const listInitSizeCompanies = [];

    for (const c of listCompanies) {
        const obj = {
            Company: c,
            Amount: 0,
        };

        listInitSizeCompanies.push(obj);
    }

    return listInitSizeCompanies;
};
