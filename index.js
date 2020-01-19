const tokenUtils = require('./api/token-utils');
const options = require('./utils/options');
const datasets = require('./api/datasets');
const training = require('./api/training');

function getToken(){

    // var options = require('./utils/options');
    console.log(options);
    return tokenUtils.getAccessToken(options.options.accountId, options.options.privateKey);
}

module.exports.getToken = getToken;
module.exports.setup = (options) => {
    require('./utils/options').setup(options);
};
module.exports.getDatasets = async () => {
    return await datasets.getAll();
};
module.exports.getDataset = async (datasetId) => {
    return await datasets.get(datasetId);
};
module.exports.getTrainingStatus = async (modelId) => {
    return await training.getStatus(modelId);
};
module.exports.trainDataSet = async (name, datasetId) => {
    return await training.trainDataset(name, datasetId);
}