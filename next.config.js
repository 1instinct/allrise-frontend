const Module = require("module");
const path = require("path");
const resolveFrom = require("resolve-from");
const Dotenv = require("dotenv-webpack");
const node_modules = path.resolve(__dirname, "node_modules");

const originalRequire = Module.prototype.require;

// The following ensures that there is always only a single (and same)
// copy of React in an app at any given moment.
Module.prototype.require = function (modulePath) {
  // Only redirect resolutions to non-relative and non-absolute modules
  if (
    ["/react/", "/react-dom/", "/react-query/"].some((d) => {
      try {
        return require.resolve(modulePath).includes(d);
      } catch (err) {
        return false;
      }
    })
  ) {
    try {
      modulePath = resolveFrom(node_modules, modulePath);
    } catch (err) {
      //
    }
  }

  return originalRequire.call(this, modulePath);
};
const DEPLOY_ENV =
  process.env.DEPLOY_ENV && process.env.DEPLOY_ENV.toLowerCase();
const DEPLOY_ENV_MAPPING = {
  dev: "development",
  staging: "staging",
  prod: "production"
};
const envFile = path.join(__dirname, `.env.${DEPLOY_ENV_MAPPING[DEPLOY_ENV]}`);
loadEnvVariables();
const isLocalDevEnvironment = !process.env.DEPLOY_ENV;
module.exports = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/.well-known/:file",
        destination: "/api/.well-known/:file",
        permanent: false
      }
    ];
  },
  webpack: (config, { webpack }) => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: envFile,
        systemvars: true
      })
    ];
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react$: resolveFrom(path.resolve("node_modules"), "react"),
        "react-query$": resolveFrom(
          path.resolve("node_modules"),
          "react-query"
        ),
        "react-dom$": resolveFrom(path.resolve("node_modules"), "react-dom")
      }
    };
    return config;
  }
};
function loadEnvVariables() {
  // eslint-disable-next-line global-require
  require("dotenv").config({
    path: envFile
  });
}
