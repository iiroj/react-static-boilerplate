// Allow importing TypeScript into the webpack config itself
require("@babel/register")({
  extensions: [".js", ".ts", ".tsx"]
});

module.exports = require("./webpack.config.ts");
