module.exports = function(config) {
  config.set({

    browsers : ["PhantomJS"],
    singleRun : true,
    frameworks : ["mocha"],
    files : [
      "test/index.js"
    ],
    preprocessors : {
      "test/index.js" : ["webpack"]
    },
    reporters : ["dots"],
    webpack : {
      module : {
        loaders : [
          {
            test : /\.js$/,
            loader : "babel-loader"
          }
        ]
      }
    }

  });
};
