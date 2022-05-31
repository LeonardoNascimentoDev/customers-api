var AWS = require('aws-sdk');
AWS.config.update({ region: 'REGION' });


module.exports = class S3 {
    s3 = new AWS.S3();

    constructor() {
        this.s3 = new AWS.S3({ region: process.env.REGION });
    }

    async putObject(params) {
        return this.s3.putObject(params).promise();
    }

    async getObject(params) {
        return this.s3.getObject(params).promise();
    }

    async getSignedUrl(params) {
        return this.s3.getSignedUrl('getObject', params);
    }
};