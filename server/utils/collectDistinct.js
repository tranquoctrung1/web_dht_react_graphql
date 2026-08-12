// Collect distinct values of one field, preserving first-seen document order.
// Mirrors the historical `result.find((el) => el === value)` loop exactly:
// Array.prototype.find cannot distinguish a found `undefined` from a miss, so
// `undefined` values were never deduplicated — keep that behavior.
module.exports.collectDistinct = (docs, field) => {
    const seen = new Set();
    const result = [];

    for (const doc of docs) {
        const value = doc[field];

        if (value === undefined || !seen.has(value)) {
            seen.add(value);
            result.push(value);
        }
    }

    return result;
};
