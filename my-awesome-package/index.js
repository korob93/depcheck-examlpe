const { PI } = require('my-awesome-package/constants');

module.exports = {
    computeArea(r){
        return PI * Math.pow(r, 2)
    }
};