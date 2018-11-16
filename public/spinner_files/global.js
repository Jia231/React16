(function() { var req = {"global":true,"csrfToken":"vIBYgnKa-rKGOgl-V8RvKTVgbCWcj5gdly-8","production":true,"ip":"157.191.175.50"};
if(req.user && req.user.key) window.userkey = req.user.key;
if(window._backend_) { angular.module("backend").factory("global",["context",function(context){
  var own={}.hasOwnProperty,key;
  for (key in req) if (own.call(req, key)) context[key] = req[key];
  return req;
}]); }else{
  angular.module("backend",[]).factory("global",[function(){return req;}]);
}})()