const config = {
    server:{
        port: process.env.PORT || 3000
    },
    database: process.env.DATABASE || "mySQL",
}

module.exports= {config}