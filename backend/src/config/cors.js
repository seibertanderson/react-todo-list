/** middleware */
module.exports = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'GET, PUT, OPTIONS, POST, PATCH, DELETE');
    res.header('Access-Control-Allow-Origin', 'Origin, X-Request-With, Content-Type, Accept');
    next();
}