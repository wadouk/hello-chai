"use strict";
module.exports = function(config) {
  config.set({

    browsers : ["PhantomJS"],
    singleRun : false,
    frameworks : ["mocha"],
    files : [
      "test/index.js"
    ],
    preprocessors : {
      "test/index.js" : ["webpack"]
    },
    reporters : ["dots"],
    webpack : {
      devtool : "inline-source-map",
      module : {
        loaders : [
          {
            test : /\.jsx|\.js$/,
            loader : "babel-loader"
          }
        ]
      },
      node : {
        fs : "empty"
      }
    },
    webpackServer : {
      noInfo : true
    }

  });
};
