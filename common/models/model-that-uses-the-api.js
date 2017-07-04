'use strict';

module.exports = function(Modelthatusestheapi) {
  Modelthatusestheapi.getTheStuff = function(shopId, cb) {
    Modelthatusestheapi.app.models.MyRestModel.getStuff()
    .then(result => {
      console.log(result);
      cb(null, result);
    })
  }

  Modelthatusestheapi.remoteMethod (
        'getTheStuff',
        {
          http: {path: '/getthestuff', verb: 'get'},
          accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
          returns: {arg: 'name', type: 'string'}
        }
    );
};
