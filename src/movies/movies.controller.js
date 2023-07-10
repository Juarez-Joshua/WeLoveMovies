const {listMovies} = require("./movies.service")

async function list(req,res,_next){
    const data = await listMovies();
    res.send({data})
}

module.exports = {
    list,
}