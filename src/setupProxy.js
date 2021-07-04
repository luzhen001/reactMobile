const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware(
            {
                target: "https://api-hmugo-web.itheima.net/api/public/v1",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/"
                }
            }
        )
    )
}