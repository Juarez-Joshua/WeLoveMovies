const {listMovies, listShowingMovies} = require("./movies.service")

async function list(req,res,_next){
    const {is_showing} = req.query;
    if(is_showing === "true"){
        const data = await listShowingMovies();
        console.log(data.length)
        res.send({data})
    }else{
        const data = await listMovies();
        res.send({data})
    }
}

module.exports = {
    list,
}