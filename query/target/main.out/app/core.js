// Compiled by ClojureScript 1.9.89 {:target :nodejs}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
app.core.AWS = cljs.nodejs.require.call(null,"aws-sdk");
cljs.nodejs.enable_util_print_BANG_.call(null);
app.core.to_clj = (function app$core$to_clj(js_obj){
return cljs.core.js__GT_clj.call(null,js_obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
app.core.create_api_event = (function app$core$create_api_event(raw_event){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(app.core.to_clj.call(null,raw_event));
});
app.core.to_event = (function app$core$to_event(p__14901){
var map__14904 = p__14901;
var map__14904__$1 = ((((!((map__14904 == null)))?((((map__14904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14904):map__14904);
var event_type = cljs.core.get.call(null,map__14904__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var payload = cljs.core.get.call(null,map__14904__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,event_type),payload], null);
});
app.core.handler = (function app$core$handler(raw_event,context,cb){
var event = app.core.to_event.call(null,app.core.create_api_event.call(null,raw_event));
return cb.call(null,null,cljs.core.clj__GT_js.call(null,event));
});
goog.exportSymbol('app.core.handler', app.core.handler);
app.core._main = (function app$core$_main(){
return cljs.core.identity;
});
cljs.core._STAR_main_cli_fn_STAR_ = app.core._main;
