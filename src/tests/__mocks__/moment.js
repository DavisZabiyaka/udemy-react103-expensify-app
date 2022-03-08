// This is how to mock up an actual library
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};