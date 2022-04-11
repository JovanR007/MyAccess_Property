const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "myAccessProperty",
    publicPath: "http://localhost:3004/",
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },
        name: "myAccessProperty",
        filename: "remoteEntry.js",
        // For remotes (please adjust)
        // name: "myAccessProperty",
        // filename: "remoteEntry.js",
        exposes: {
            './MyAccessPropertyModule': [
              "./src/styles.css",
              "./src/app/MyAccess-Property/MyAccess-Property.module.ts"
            ]
        },        
        
      

        shared: share({
          "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
