const path =require("path");
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
        .set("@",resolve("./src"))
        .set("style",resolve("./src/common/style"))
        .set('utils',resolve('./src/common/utils'))
        .set("pages",resolve("./src/pages"))
        .set("components",resolve("./src/components"))
    },
    devServer:{
        port:3000,
        proxy:{
            "/dev":{
                target:"http://ts.365cf.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/dev":""
                }
            },
           
        }
    }
}