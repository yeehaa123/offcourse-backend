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
app.core.to_event = (function app$core$to_event(p__14982){
var map__14985 = p__14982;
var map__14985__$1 = ((((!((map__14985 == null)))?((((map__14985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14985):map__14985);
var event_type = cljs.core.get.call(null,map__14985__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var payload = cljs.core.get.call(null,map__14985__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,event_type),payload], null);
});
app.core.resource = (function app$core$resource(url){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),"Lorem Ipsum bla bla bla",new cljs.core.Keyword(null,"resource-url","resource-url",188207959),url], null);
});
app.core.handler = (function app$core$handler(raw_event,context,cb){
var vec__14991 = app.core.to_event.call(null,app.core.create_api_event.call(null,raw_event));
var event_type = cljs.core.nth.call(null,vec__14991,(0),null);
var query = cljs.core.nth.call(null,vec__14991,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(query))){
return cb.call(null,null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-found","not-found",-629079980),query], null)));
} else {
return cb.call(null,null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"found","found",-584700170),cljs.core.map.call(null,((function (vec__14991,event_type,query){
return (function (p1__14987_SHARP_){
return app.core.resource.call(null,p1__14987_SHARP_);
});})(vec__14991,event_type,query))
,new cljs.core.Keyword(null,"urls","urls",-190753757).cljs$core$IFn$_invoke$arity$1(query))], null)));
}
});
goog.exportSymbol('app.core.handler', app.core.handler);
app.core._main = (function app$core$_main(){
return cljs.core.identity;
});
cljs.core._STAR_main_cli_fn_STAR_ = app.core._main;
