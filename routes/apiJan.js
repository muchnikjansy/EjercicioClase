var express = require('express');
var router = express.Router();

function api_router(db){
  router.post('/registro',function(req,res,next){
    var datos = db.collection("nombres");

    var query = {
      nombre : req.body.nombre,
      edad : req.body.edad,
      fecha : req.body.fecha,
      sexo : req.body.sexo
    };
  // console.log(query)

  datos.update(query,{"$inc":{"contador":1}},{"upsert":true},function(err ,md ,status){
    res.status(200).json({"documento":md});
  });
  });
  return router;
}
module.exports = api_router;
