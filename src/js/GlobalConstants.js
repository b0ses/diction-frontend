/**
 * GlobalConstants.js
 * Copied from https://github.com/fedspendingtransparency/usaspending-website
 */

// use the correct GlobalConstants file based on the current environment

let isDev = true;
if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
    isDev = false;
}

const kGlobalConstants = isDev ?
    require('../../GlobalConstants_dev').default : require('../../GlobalConstants_prod').default;

export default kGlobalConstants;
