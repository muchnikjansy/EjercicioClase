var express = require('express');
var router = express.Router();

function api_router(db){
  router.post('/carrera',function(req,res,next){
    var datos = db.collection("ubicacion");

    var query = {
      carrera : req.body.select,
     edificio : req.body.edificio
    };
  // console.log(query)

  datos.update(query,{"$inc":{"contador":1}},{"upsert":true},function(err ,md ,status){
    res.status(200).json({"documento":md});
  });
  });
  return router;
}
module.exports = api_router;
