const path = require("path");
const nodeModulesDir = path.join(__dirname, "node_modules");

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
            loader : "babel-loader",
            // Don't forget to exclude node modules
            exclude : [nodeModulesDir]
          }
        ]
      }
    }

  });
};
