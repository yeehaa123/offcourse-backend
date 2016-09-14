// Compiled by ClojureScript 1.9.89 {:target :nodejs}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
app.core.AWS = cljs.nodejs.require.call(null,"aws-sdk");
cljs.nodejs.enable_util_print_BANG_.call(null);
app.core.handler = (function app$core$handler(raw_event,context,cb){
return cb.call(null,null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-name","user-name",1302913545),"yeehaa"], null)));
});
goog.exportSymbol('app.core.handler', app.core.handler);
app.core._main = (function app$core$_main(){
return cljs.core.identity;
});
cljs.core._STAR_main_cli_fn_STAR_ = app.core._main;
