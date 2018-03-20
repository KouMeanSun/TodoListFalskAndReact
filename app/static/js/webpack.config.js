const path = require('path')

module.exports = {
    entry : path.join(__dirname,'./index.js'),
    // entry:"./src/index.js",
    output : {
        filename : "bundle.js",
        path : path.join(__dirname,'./build')

    },
    module : {
        rules:[
            {
                test:/\.js$/,
                loader:'jsx-loader'
            }
        ]
    }
}