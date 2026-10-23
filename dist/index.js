"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=t(function(w,v){
var p=require('@stdlib/stats-strided-dvarianceyc/dist').ndarray,x=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,a,i,f){return x(p(e,r,a,i,f))}v.exports=j
});var d=t(function(z,n){
var m=require('@stdlib/strided-base-stride2offset/dist'),l=s();function R(e,r,a,i){return l(e,r,a,i,m(e,i))}n.exports=R
});var y=t(function(A,c){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),E=s();_(q,"ndarray",E);c.exports=q
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),u,o=b(O(__dirname,"./native.js"));g(o)?u=h:u=o;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
