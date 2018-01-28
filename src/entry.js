/**
 * entry.js
 * Copied from https://github.com/fedspendingtransparency/usaspending-website
 * This is the main entry point for Webpack, which will follow a series of imports and requires
 * to determine which assets are used by the app.
 */

import React from 'react';

// require all the static files
require.context('./fonts', true);
require.context('./img', true);
require.context('./data', true);

// require the CSS
require('./css/main.scss');

// require the main JS file
require('./js/app.js');
