// Compiled by ClojureScript 1.9.89 {:target :nodejs}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__7762__auto__ = (((spec == null))?null:spec);
var m__7763__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__7762__auto__)]);
if(!((m__7763__auto__ == null))){
return m__7763__auto__.call(null,spec,x);
} else {
var m__7763__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__7763__auto____$1 == null))){
return m__7763__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__7762__auto__ = (((spec == null))?null:spec);
var m__7763__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__7762__auto__)]);
if(!((m__7763__auto__ == null))){
return m__7763__auto__.call(null,spec,y);
} else {
var m__7763__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__7763__auto____$1 == null))){
return m__7763__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__7762__auto__ = (((spec == null))?null:spec);
var m__7763__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__7762__auto__)]);
if(!((m__7763__auto__ == null))){
return m__7763__auto__.call(null,spec,path,via,in$,x);
} else {
var m__7763__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__7763__auto____$1 == null))){
return m__7763__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__7762__auto__ = (((spec == null))?null:spec);
var m__7763__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__7762__auto__)]);
if(!((m__7763__auto__ == null))){
return m__7763__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__7763__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__7763__auto____$1 == null))){
return m__7763__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__7762__auto__ = (((spec == null))?null:spec);
var m__7763__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__7762__auto__)]);
if(!((m__7763__auto__ == null))){
return m__7763__auto__.call(null,spec,gfn);
} else {
var m__7763__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__7763__auto____$1 == null))){
return m__7763__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__7762__auto__ = (((spec == null))?null:spec);
var m__7763__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__7762__auto__)]);
if(!((m__7763__auto__ == null))){
return m__7763__auto__.call(null,spec);
} else {
var m__7763__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__7763__auto____$1 == null))){
return m__7763__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__13123 = cljs.core.get.call(null,reg,spec);
spec = G__13123;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__7049__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__7037__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__7037__auto__){
return x;
} else {
return and__7037__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__7037__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__7037__auto__)){
return x;
} else {
return and__7037__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__7049__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
var or__7049__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__7049__auto____$1)){
return or__7049__auto____$1;
} else {
var or__7049__auto____$2 = (function (){var and__7037__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__7037__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__7037__auto__;
}
})();
if(cljs.core.truth_(or__7049__auto____$2)){
return or__7049__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__7049__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__7049__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__7037__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__7037__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__7037__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__7037__auto__ = (form instanceof cljs.core.Symbol);
if(and__7037__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__7037__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6503__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__6503__auto__)){
var probs = temp__6503__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__8133__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13174_13220 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13175_13221 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13174_13220,_STAR_print_fn_STAR_13175_13221,sb__8133__auto__){
return (function (x__8134__auto__){
return sb__8133__auto__.append(x__8134__auto__);
});})(_STAR_print_newline_STAR_13174_13220,_STAR_print_fn_STAR_13175_13221,sb__8133__auto__))
;

try{var seq__13176_13222 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__13177_13223 = null;
var count__13178_13224 = (0);
var i__13179_13225 = (0);
while(true){
if((i__13179_13225 < count__13178_13224)){
var vec__13180_13226 = cljs.core._nth.call(null,chunk__13177_13223,i__13179_13225);
var path_13227 = cljs.core.nth.call(null,vec__13180_13226,(0),null);
var map__13183_13228 = cljs.core.nth.call(null,vec__13180_13226,(1),null);
var map__13183_13229__$1 = ((((!((map__13183_13228 == null)))?((((map__13183_13228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13183_13228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13183_13228):map__13183_13228);
var prob_13230 = map__13183_13229__$1;
var pred_13231 = cljs.core.get.call(null,map__13183_13229__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_13232 = cljs.core.get.call(null,map__13183_13229__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_13233 = cljs.core.get.call(null,map__13183_13229__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_13234 = cljs.core.get.call(null,map__13183_13229__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_13235 = cljs.core.get.call(null,map__13183_13229__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_13235)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_13235),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_13232);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_13234)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_13234)));
}

if(cljs.core.empty_QMARK_.call(null,path_13227)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_13227));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_13231);

if(cljs.core.truth_(reason_13233)){
cljs.core.print.call(null,", ",reason_13233);
} else {
}

var seq__13185_13236 = cljs.core.seq.call(null,prob_13230);
var chunk__13186_13237 = null;
var count__13187_13238 = (0);
var i__13188_13239 = (0);
while(true){
if((i__13188_13239 < count__13187_13238)){
var vec__13189_13240 = cljs.core._nth.call(null,chunk__13186_13237,i__13188_13239);
var k_13241 = cljs.core.nth.call(null,vec__13189_13240,(0),null);
var v_13242 = cljs.core.nth.call(null,vec__13189_13240,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_13241))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_13241)," ");

cljs.core.pr.call(null,v_13242);
}

var G__13243 = seq__13185_13236;
var G__13244 = chunk__13186_13237;
var G__13245 = count__13187_13238;
var G__13246 = (i__13188_13239 + (1));
seq__13185_13236 = G__13243;
chunk__13186_13237 = G__13244;
count__13187_13238 = G__13245;
i__13188_13239 = G__13246;
continue;
} else {
var temp__6503__auto___13247 = cljs.core.seq.call(null,seq__13185_13236);
if(temp__6503__auto___13247){
var seq__13185_13248__$1 = temp__6503__auto___13247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13185_13248__$1)){
var c__7952__auto___13249 = cljs.core.chunk_first.call(null,seq__13185_13248__$1);
var G__13250 = cljs.core.chunk_rest.call(null,seq__13185_13248__$1);
var G__13251 = c__7952__auto___13249;
var G__13252 = cljs.core.count.call(null,c__7952__auto___13249);
var G__13253 = (0);
seq__13185_13236 = G__13250;
chunk__13186_13237 = G__13251;
count__13187_13238 = G__13252;
i__13188_13239 = G__13253;
continue;
} else {
var vec__13192_13254 = cljs.core.first.call(null,seq__13185_13248__$1);
var k_13255 = cljs.core.nth.call(null,vec__13192_13254,(0),null);
var v_13256 = cljs.core.nth.call(null,vec__13192_13254,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_13255))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_13255)," ");

cljs.core.pr.call(null,v_13256);
}

var G__13257 = cljs.core.next.call(null,seq__13185_13248__$1);
var G__13258 = null;
var G__13259 = (0);
var G__13260 = (0);
seq__13185_13236 = G__13257;
chunk__13186_13237 = G__13258;
count__13187_13238 = G__13259;
i__13188_13239 = G__13260;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__13261 = seq__13176_13222;
var G__13262 = chunk__13177_13223;
var G__13263 = count__13178_13224;
var G__13264 = (i__13179_13225 + (1));
seq__13176_13222 = G__13261;
chunk__13177_13223 = G__13262;
count__13178_13224 = G__13263;
i__13179_13225 = G__13264;
continue;
} else {
var temp__6503__auto___13265 = cljs.core.seq.call(null,seq__13176_13222);
if(temp__6503__auto___13265){
var seq__13176_13266__$1 = temp__6503__auto___13265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13176_13266__$1)){
var c__7952__auto___13267 = cljs.core.chunk_first.call(null,seq__13176_13266__$1);
var G__13268 = cljs.core.chunk_rest.call(null,seq__13176_13266__$1);
var G__13269 = c__7952__auto___13267;
var G__13270 = cljs.core.count.call(null,c__7952__auto___13267);
var G__13271 = (0);
seq__13176_13222 = G__13268;
chunk__13177_13223 = G__13269;
count__13178_13224 = G__13270;
i__13179_13225 = G__13271;
continue;
} else {
var vec__13195_13272 = cljs.core.first.call(null,seq__13176_13266__$1);
var path_13273 = cljs.core.nth.call(null,vec__13195_13272,(0),null);
var map__13198_13274 = cljs.core.nth.call(null,vec__13195_13272,(1),null);
var map__13198_13275__$1 = ((((!((map__13198_13274 == null)))?((((map__13198_13274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13198_13274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13198_13274):map__13198_13274);
var prob_13276 = map__13198_13275__$1;
var pred_13277 = cljs.core.get.call(null,map__13198_13275__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_13278 = cljs.core.get.call(null,map__13198_13275__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_13279 = cljs.core.get.call(null,map__13198_13275__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_13280 = cljs.core.get.call(null,map__13198_13275__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_13281 = cljs.core.get.call(null,map__13198_13275__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_13281)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_13281),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_13278);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_13280)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_13280)));
}

if(cljs.core.empty_QMARK_.call(null,path_13273)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_13273));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_13277);

if(cljs.core.truth_(reason_13279)){
cljs.core.print.call(null,", ",reason_13279);
} else {
}

var seq__13200_13282 = cljs.core.seq.call(null,prob_13276);
var chunk__13201_13283 = null;
var count__13202_13284 = (0);
var i__13203_13285 = (0);
while(true){
if((i__13203_13285 < count__13202_13284)){
var vec__13204_13286 = cljs.core._nth.call(null,chunk__13201_13283,i__13203_13285);
var k_13287 = cljs.core.nth.call(null,vec__13204_13286,(0),null);
var v_13288 = cljs.core.nth.call(null,vec__13204_13286,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_13287))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_13287)," ");

cljs.core.pr.call(null,v_13288);
}

var G__13289 = seq__13200_13282;
var G__13290 = chunk__13201_13283;
var G__13291 = count__13202_13284;
var G__13292 = (i__13203_13285 + (1));
seq__13200_13282 = G__13289;
chunk__13201_13283 = G__13290;
count__13202_13284 = G__13291;
i__13203_13285 = G__13292;
continue;
} else {
var temp__6503__auto___13293__$1 = cljs.core.seq.call(null,seq__13200_13282);
if(temp__6503__auto___13293__$1){
var seq__13200_13294__$1 = temp__6503__auto___13293__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13200_13294__$1)){
var c__7952__auto___13295 = cljs.core.chunk_first.call(null,seq__13200_13294__$1);
var G__13296 = cljs.core.chunk_rest.call(null,seq__13200_13294__$1);
var G__13297 = c__7952__auto___13295;
var G__13298 = cljs.core.count.call(null,c__7952__auto___13295);
var G__13299 = (0);
seq__13200_13282 = G__13296;
chunk__13201_13283 = G__13297;
count__13202_13284 = G__13298;
i__13203_13285 = G__13299;
continue;
} else {
var vec__13207_13300 = cljs.core.first.call(null,seq__13200_13294__$1);
var k_13301 = cljs.core.nth.call(null,vec__13207_13300,(0),null);
var v_13302 = cljs.core.nth.call(null,vec__13207_13300,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_13301))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_13301)," ");

cljs.core.pr.call(null,v_13302);
}

var G__13303 = cljs.core.next.call(null,seq__13200_13294__$1);
var G__13304 = null;
var G__13305 = (0);
var G__13306 = (0);
seq__13200_13282 = G__13303;
chunk__13201_13283 = G__13304;
count__13202_13284 = G__13305;
i__13203_13285 = G__13306;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__13307 = cljs.core.next.call(null,seq__13176_13266__$1);
var G__13308 = null;
var G__13309 = (0);
var G__13310 = (0);
seq__13176_13222 = G__13307;
chunk__13177_13223 = G__13308;
count__13178_13224 = G__13309;
i__13179_13225 = G__13310;
continue;
}
} else {
}
}
break;
}

var seq__13210_13311 = cljs.core.seq.call(null,ed);
var chunk__13211_13312 = null;
var count__13212_13313 = (0);
var i__13213_13314 = (0);
while(true){
if((i__13213_13314 < count__13212_13313)){
var vec__13214_13315 = cljs.core._nth.call(null,chunk__13211_13312,i__13213_13314);
var k_13316 = cljs.core.nth.call(null,vec__13214_13315,(0),null);
var v_13317 = cljs.core.nth.call(null,vec__13214_13315,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_13316))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_13316)," ");

cljs.core.pr.call(null,v_13317);

cljs.core.newline.call(null);
}

var G__13318 = seq__13210_13311;
var G__13319 = chunk__13211_13312;
var G__13320 = count__13212_13313;
var G__13321 = (i__13213_13314 + (1));
seq__13210_13311 = G__13318;
chunk__13211_13312 = G__13319;
count__13212_13313 = G__13320;
i__13213_13314 = G__13321;
continue;
} else {
var temp__6503__auto___13322 = cljs.core.seq.call(null,seq__13210_13311);
if(temp__6503__auto___13322){
var seq__13210_13323__$1 = temp__6503__auto___13322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13210_13323__$1)){
var c__7952__auto___13324 = cljs.core.chunk_first.call(null,seq__13210_13323__$1);
var G__13325 = cljs.core.chunk_rest.call(null,seq__13210_13323__$1);
var G__13326 = c__7952__auto___13324;
var G__13327 = cljs.core.count.call(null,c__7952__auto___13324);
var G__13328 = (0);
seq__13210_13311 = G__13325;
chunk__13211_13312 = G__13326;
count__13212_13313 = G__13327;
i__13213_13314 = G__13328;
continue;
} else {
var vec__13217_13329 = cljs.core.first.call(null,seq__13210_13323__$1);
var k_13330 = cljs.core.nth.call(null,vec__13217_13329,(0),null);
var v_13331 = cljs.core.nth.call(null,vec__13217_13329,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_13330))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_13330)," ");

cljs.core.pr.call(null,v_13331);

cljs.core.newline.call(null);
}

var G__13332 = cljs.core.next.call(null,seq__13210_13323__$1);
var G__13333 = null;
var G__13334 = (0);
var G__13335 = (0);
seq__13210_13311 = G__13332;
chunk__13211_13312 = G__13333;
count__13212_13313 = G__13334;
i__13213_13314 = G__13335;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13175_13221;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13174_13220;
}
return [cljs.core.str(sb__8133__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__8133__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13338_13340 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13339_13341 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13338_13340,_STAR_print_fn_STAR_13339_13341,sb__8133__auto__){
return (function (x__8134__auto__){
return sb__8133__auto__.append(x__8134__auto__);
});})(_STAR_print_newline_STAR_13338_13340,_STAR_print_fn_STAR_13339_13341,sb__8133__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13339_13341;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13338_13340;
}
return [cljs.core.str(sb__8133__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = (function (){var or__7049__auto__ = cljs.core.get.call(null,overrides,spec);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return spec;
}
})();
var spec__$2 = cljs.spec.specize.call(null,spec__$1);
var temp__6501__auto__ = (function (){var or__7049__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$2,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6501__auto__)){
var g = temp__6501__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__6501__auto__,spec__$1,spec__$2){
return (function (p1__13342_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$2,p1__13342_SHARP_);
});})(g,temp__6501__auto__,spec__$1,spec__$2))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to
 *   generators. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args13343 = [];
var len__8232__auto___13346 = arguments.length;
var i__8233__auto___13347 = (0);
while(true){
if((i__8233__auto___13347 < len__8232__auto___13346)){
args13343.push((arguments[i__8233__auto___13347]));

var G__13348 = (i__8233__auto___13347 + (1));
i__8233__auto___13347 = G__13348;
continue;
} else {
}
break;
}

var G__13345 = args13343.length;
switch (G__13345) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13343.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__7037__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__7037__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__7037__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__7049__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
var or__7049__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__7049__auto____$1)){
return or__7049__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.fn_spec_QMARK_ = (function cljs$spec$fn_spec_QMARK_(m){
var or__7049__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),conformed)){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw cljs.core.ex_info.call(null,[cljs.core.str("Call to "),cljs.core.str(cljs.core.pr_str.call(null,v__$1)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__8133__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13356_13362 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13357_13363 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13356_13362,_STAR_print_fn_STAR_13357_13363,sb__8133__auto__,ed,conformed){
return (function (x__8134__auto__){
return sb__8133__auto__.append(x__8134__auto__);
});})(_STAR_print_newline_STAR_13356_13362,_STAR_print_fn_STAR_13357_13363,sb__8133__auto__,ed,conformed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13357_13363;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13356_13362;
}
return [cljs.core.str(sb__8133__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__13358 = ((function (conform_BANG_){
return (function() { 
var G__13364__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_13359 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_13360 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_13360;
}}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_13359;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__13364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13365__i = 0, G__13365__a = new Array(arguments.length -  0);
while (G__13365__i < G__13365__a.length) {G__13365__a[G__13365__i] = arguments[G__13365__i + 0]; ++G__13365__i;}
  args = new cljs.core.IndexedSeq(G__13365__a,0);
} 
return G__13364__delegate.call(this,args);};
G__13364.cljs$lang$maxFixedArity = 0;
G__13364.cljs$lang$applyTo = (function (arglist__13366){
var args = cljs.core.seq(arglist__13366);
return G__13364__delegate(args);
});
G__13364.cljs$core$IFn$_invoke$arity$variadic = G__13364__delegate;
return G__13364;
})()
;})(conform_BANG_))
;
if(!((f instanceof cljs.core.MultiFn))){
var G__13361 = G__13358;
goog.object.extend(G__13361,f);

return G__13361;
} else {
return G__13358;
}
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__6503__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6503__auto__)){
var arg_spec = temp__6503__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__8133__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13369_13371 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13370_13372 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13369_13371,_STAR_print_fn_STAR_13370_13372,sb__8133__auto__,ed,arg_spec,temp__6503__auto__,specs){
return (function (x__8134__auto__){
return sb__8133__auto__.append(x__8134__auto__);
});})(_STAR_print_newline_STAR_13369_13371,_STAR_print_fn_STAR_13370_13372,sb__8133__auto__,ed,arg_spec,temp__6503__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13370_13372;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13369_13371;
}
return [cljs.core.str(sb__8133__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.no_fn_spec = (function cljs$spec$no_fn_spec(v,specs){
return cljs.core.ex_info.call(null,[cljs.core.str("Fn at "),cljs.core.str(cljs.core.pr_str.call(null,v)),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"specs","specs",1426570741),specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var spec = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(cljs.spec.fn_spec_QMARK_.call(null,spec))){
var map__13375 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
var map__13375__$1 = ((((!((map__13375 == null)))?((((map__13375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13375):map__13375);
var raw = cljs.core.get.call(null,map__13375__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__13375__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn.call(null,v,current);
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),current,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_spec.call(null,v,spec);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__6503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
if(cljs.core.truth_(temp__6503__auto__)){
var map__13379 = temp__6503__auto__;
var map__13379__$1 = ((((!((map__13379 == null)))?((((map__13379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13379):map__13379);
var raw = cljs.core.get.call(null,map__13379__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__13379__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.dissoc,v);

return raw;
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__7049__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args13381 = [];
var len__8232__auto___13384 = arguments.length;
var i__8233__auto___13385 = (0);
while(true){
if((i__8233__auto___13385 < len__8232__auto___13384)){
args13381.push((arguments[i__8233__auto___13385]));

var G__13386 = (i__8233__auto___13385 + (1));
i__8233__auto___13385 = G__13386;
continue;
} else {
}
break;
}

var G__13383 = args13381.length;
switch (G__13383) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13381.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6501__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__6501__auto__)){
var spec = temp__6501__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args13388 = [];
var len__8232__auto___13391 = arguments.length;
var i__8233__auto___13392 = (0);
while(true){
if((i__8233__auto___13392 < len__8232__auto___13391)){
args13388.push((arguments[i__8233__auto___13392]));

var G__13393 = (i__8233__auto___13392 + (1));
i__8233__auto___13392 = G__13393;
continue;
} else {
}
break;
}

var G__13390 = args13388.length;
switch (G__13390) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13388.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__13397){
var map__13428 = p__13397;
var map__13428__$1 = ((((!((map__13428 == null)))?((((map__13428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13428):map__13428);
var argm = map__13428__$1;
var opt = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__13428__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__13395_SHARP_){
var or__7049__auto__ = k__GT_s.call(null,p1__13395_SHARP_);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return p1__13395_SHARP_;
}
});})(keys_pred,k__GT_s,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec13430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13430 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__13428,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,p__13397,k__GT_s,pred_forms,meta13431){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.map__13428 = map__13428;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.p__13397 = p__13397;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta13431 = meta13431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_13432,meta13431__$1){
var self__ = this;
var _13432__$1 = this;
return (new cljs.spec.t_cljs$spec13430(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.map__13428,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.p__13397,self__.k__GT_s,self__.pred_forms,meta13431__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_13432){
var self__ = this;
var _13432__$1 = this;
return self__.meta13431;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13430.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13430.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__13436 = cljs.core.keys.call(null,m);
var vec__13437 = G__13436;
var seq__13438 = cljs.core.seq.call(null,vec__13437);
var first__13439 = cljs.core.first.call(null,seq__13438);
var seq__13438__$1 = cljs.core.next.call(null,seq__13438);
var k = first__13439;
var ks = seq__13438__$1;
var keys = vec__13437;
var ret__$1 = ret;
var G__13436__$1 = G__13436;
while(true){
var ret__$2 = ret__$1;
var vec__13440 = G__13436__$1;
var seq__13441 = cljs.core.seq.call(null,vec__13440);
var first__13442 = cljs.core.first.call(null,seq__13441);
var seq__13441__$1 = cljs.core.next.call(null,seq__13441);
var k__$1 = first__13442;
var ks__$1 = seq__13441__$1;
var keys__$1 = vec__13440;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__13458 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__13459 = ks__$1;
ret__$1 = G__13458;
G__13436__$1 = G__13459;
continue;
}
} else {
var G__13460 = ret__$2;
var G__13461 = ks__$1;
ret__$1 = G__13460;
G__13436__$1 = G__13461;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13430.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__13446 = cljs.core.keys.call(null,m);
var vec__13447 = G__13446;
var seq__13448 = cljs.core.seq.call(null,vec__13447);
var first__13449 = cljs.core.first.call(null,seq__13448);
var seq__13448__$1 = cljs.core.next.call(null,seq__13448);
var k = first__13449;
var ks = seq__13448__$1;
var keys = vec__13447;
var ret__$1 = ret;
var G__13446__$1 = G__13446;
while(true){
var ret__$2 = ret__$1;
var vec__13450 = G__13446__$1;
var seq__13451 = cljs.core.seq.call(null,vec__13450);
var first__13452 = cljs.core.first.call(null,seq__13451);
var seq__13451__$1 = cljs.core.next.call(null,seq__13451);
var k__$1 = first__13452;
var ks__$1 = seq__13451__$1;
var keys__$1 = vec__13450;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__13462 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__13463 = ks__$1;
ret__$1 = G__13462;
G__13446__$1 = G__13463;
continue;
} else {
var G__13464 = ret__$2;
var G__13465 = ks__$1;
ret__$1 = G__13464;
G__13446__$1 = G__13465;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13430.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.merge,(function (){var temp__6503__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6503__auto__){
var probs = temp__6503__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vec.call(null,probs),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__13453){
var vec__13454 = p__13453;
var k = cljs.core.nth.call(null,vec__13454,(0),null);
var v = cljs.core.nth.call(null,vec__13454,(1),null);
if(cljs.core.truth_((function (){var or__7049__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13430.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__13396_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__13396_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13430.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13430.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__13457 = cljs.core.PersistentVector.EMPTY;
var G__13457__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__13457,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__13457);
var G__13457__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__13457__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__13457__$1);
var G__13457__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__13457__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__13457__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__13457__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__13457__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13430.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"map__13428","map__13428",130521774,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"p__13397","p__13397",-315295586,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta13431","meta13431",1022855735,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13430.cljs$lang$type = true;

cljs.spec.t_cljs$spec13430.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13430";

cljs.spec.t_cljs$spec13430.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__7701__auto__,writer__7702__auto__,opt__7703__auto__){
return cljs.core._write.call(null,writer__7702__auto__,"cljs.spec/t_cljs$spec13430");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec13430 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec13430(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__13428__$2,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,p__13397__$1,k__GT_s__$1,pred_forms__$1,meta13431){
return (new cljs.spec.t_cljs$spec13430(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__13428__$2,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,p__13397__$1,k__GT_s__$1,pred_forms__$1,meta13431));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13428,map__13428__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec13430(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__13428__$1,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,p__13397,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args13466 = [];
var len__8232__auto___13474 = arguments.length;
var i__8233__auto___13475 = (0);
while(true){
if((i__8233__auto___13475 < len__8232__auto___13474)){
args13466.push((arguments[i__8233__auto___13475]));

var G__13476 = (i__8233__auto___13475 + (1));
i__8233__auto___13475 = G__13476;
continue;
} else {
}
break;
}

var G__13468 = args13466.length;
switch (G__13468) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13466.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__13469 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__13469,gfn);
} else {
return G__13469;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__13470 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__13470,gfn);
} else {
return G__13470;
}
} else {
if(typeof cljs.spec.t_cljs$spec13471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13471 = (function (form,pred,gfn,cpred_QMARK_,unc,meta13472){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta13472 = meta13472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13473,meta13472__$1){
var self__ = this;
var _13473__$1 = this;
return (new cljs.spec.t_cljs$spec13471(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta13472__$1));
});

cljs.spec.t_cljs$spec13471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13473){
var self__ = this;
var _13473__$1 = this;
return self__.meta13472;
});

cljs.spec.t_cljs$spec13471.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13471.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec13471.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec13471.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec13471.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec13471.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec13471.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec13471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta13472","meta13472",1817465537,null)], null);
});

cljs.spec.t_cljs$spec13471.cljs$lang$type = true;

cljs.spec.t_cljs$spec13471.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13471";

cljs.spec.t_cljs$spec13471.cljs$lang$ctorPrWriter = (function (this__7701__auto__,writer__7702__auto__,opt__7703__auto__){
return cljs.core._write.call(null,writer__7702__auto__,"cljs.spec/t_cljs$spec13471");
});

cljs.spec.__GT_t_cljs$spec13471 = (function cljs$spec$__GT_t_cljs$spec13471(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta13472){
return (new cljs.spec.t_cljs$spec13471(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta13472));
});

}

return (new cljs.spec.t_cljs$spec13471(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args13483 = [];
var len__8232__auto___13497 = arguments.length;
var i__8233__auto___13498 = (0);
while(true){
if((i__8233__auto___13498 < len__8232__auto___13497)){
args13483.push((arguments[i__8233__auto___13498]));

var G__13499 = (i__8233__auto___13498 + (1));
i__8233__auto___13498 = G__13499;
continue;
} else {
}
break;
}

var G__13485 = args13483.length;
switch (G__13485) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13483.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__13478_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__7037__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__13478_SHARP_));
if(and__7037__auto__){
return mm.call(null,p1__13478_SHARP_);
} else {
return and__7037__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__13479_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__13479_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__13480_SHARP_,p2__13481_SHARP_){
return cljs.core.assoc.call(null,p1__13480_SHARP_,retag,p2__13481_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec13486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13486 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta13487){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta13487 = meta13487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_13488,meta13487__$1){
var self__ = this;
var _13488__$1 = this;
return (new cljs.spec.t_cljs$spec13486(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta13487__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_13488){
var self__ = this;
var _13488__$1 = this;
return self__.meta13487;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13486.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13486.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13486.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13486.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13486.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__13489){
var vec__13490 = p__13489;
var k = cljs.core.nth.call(null,vec__13490,(0),null);
var f = cljs.core.nth.call(null,vec__13490,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__13490,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__13490,k,f,___$1,id,predx,dval,tag){
return (function (p1__13482_SHARP_){
return self__.tag.call(null,p1__13482_SHARP_,k);
});})(rmap__$1,p,vec__13490,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__7975__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__7975__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto____$1);
})(),x__7975__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__13490,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__13493){
var vec__13494 = p__13493;
var k = cljs.core.nth.call(null,vec__13494,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13486.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13486.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__7975__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13486.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta13487","meta13487",1645451474,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13486.cljs$lang$type = true;

cljs.spec.t_cljs$spec13486.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13486";

cljs.spec.t_cljs$spec13486.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__7701__auto__,writer__7702__auto__,opt__7703__auto__){
return cljs.core._write.call(null,writer__7702__auto__,"cljs.spec/t_cljs$spec13486");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec13486 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec13486(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta13487){
return (new cljs.spec.t_cljs$spec13486(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta13487));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec13486(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args13501 = [];
var len__8232__auto___13507 = arguments.length;
var i__8233__auto___13508 = (0);
while(true){
if((i__8233__auto___13508 < len__8232__auto___13507)){
args13501.push((arguments[i__8233__auto___13508]));

var G__13509 = (i__8233__auto___13508 + (1));
i__8233__auto___13508 = G__13509;
continue;
} else {
}
break;
}

var G__13503 = args13501.length;
switch (G__13503) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13501.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec13504 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13504 = (function (forms,preds,gfn,meta13505){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta13505 = meta13505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13506,meta13505__$1){
var self__ = this;
var _13506__$1 = this;
return (new cljs.spec.t_cljs$spec13504(self__.forms,self__.preds,self__.gfn,meta13505__$1));
});

cljs.spec.t_cljs$spec13504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13506){
var self__ = this;
var _13506__$1 = this;
return self__.meta13505;
});

cljs.spec.t_cljs$spec13504.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13504.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__13511 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__13512 = (i + (1));
ret = G__13511;
i = G__13512;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec13504.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__13513 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__13514 = (i + (1));
ret = G__13513;
i = G__13514;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec13504.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__7975__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})(),(function (){var x__7975__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec13504.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec13504.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec13504.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec13504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta13505","meta13505",-2048206242,null)], null);
});

cljs.spec.t_cljs$spec13504.cljs$lang$type = true;

cljs.spec.t_cljs$spec13504.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13504";

cljs.spec.t_cljs$spec13504.cljs$lang$ctorPrWriter = (function (this__7701__auto__,writer__7702__auto__,opt__7703__auto__){
return cljs.core._write.call(null,writer__7702__auto__,"cljs.spec/t_cljs$spec13504");
});

cljs.spec.__GT_t_cljs$spec13504 = (function cljs$spec$__GT_t_cljs$spec13504(forms__$1,preds__$1,gfn__$1,meta13505){
return (new cljs.spec.t_cljs$spec13504(forms__$1,preds__$1,gfn__$1,meta13505));
});

}

return (new cljs.spec.t_cljs$spec13504(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x13516 = v;
x13516.cljs$core$IMapEntry$ = true;

x13516.cljs$core$IMapEntry$_key$arity$1 = ((function (x13516){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x13516))
;

x13516.cljs$core$IMapEntry$_val$arity$1 = ((function (x13516){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x13516))
;

return x13516;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__13531 = (i + (1));
i = G__13531;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec13524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13524 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta13525){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta13525 = meta13525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_13526,meta13525__$1){
var self__ = this;
var _13526__$1 = this;
return (new cljs.spec.t_cljs$spec13524(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta13525__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_13526){
var self__ = this;
var _13526__$1 = this;
return self__.meta13525;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13524.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13524.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13524.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__13527){
var self__ = this;
var vec__13528 = p__13527;
var k = cljs.core.nth.call(null,vec__13528,(0),null);
var x = cljs.core.nth.call(null,vec__13528,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13524.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13524.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13524.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13524.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13524.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta13525","meta13525",-820679973,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13524.cljs$lang$type = true;

cljs.spec.t_cljs$spec13524.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13524";

cljs.spec.t_cljs$spec13524.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__7701__auto__,writer__7702__auto__,opt__7703__auto__){
return cljs.core._write.call(null,writer__7702__auto__,"cljs.spec/t_cljs$spec13524");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec13524 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec13524(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta13525){
return (new cljs.spec.t_cljs$spec13524(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta13525));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec13524(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__13558 = preds;
var vec__13560 = G__13558;
var seq__13561 = cljs.core.seq.call(null,vec__13560);
var first__13562 = cljs.core.first.call(null,seq__13561);
var seq__13561__$1 = cljs.core.next.call(null,seq__13561);
var pred = first__13562;
var preds__$1 = seq__13561__$1;
var G__13559 = forms;
var vec__13563 = G__13559;
var seq__13564 = cljs.core.seq.call(null,vec__13563);
var first__13565 = cljs.core.first.call(null,seq__13564);
var seq__13564__$1 = cljs.core.next.call(null,seq__13564);
var form = first__13565;
var forms__$1 = seq__13564__$1;
var ret__$1 = ret;
var G__13558__$1 = G__13558;
var G__13559__$1 = G__13559;
while(true){
var ret__$2 = ret__$1;
var vec__13566 = G__13558__$1;
var seq__13567 = cljs.core.seq.call(null,vec__13566);
var first__13568 = cljs.core.first.call(null,seq__13567);
var seq__13567__$1 = cljs.core.next.call(null,seq__13567);
var pred__$1 = first__13568;
var preds__$2 = seq__13567__$1;
var vec__13569 = G__13559__$1;
var seq__13570 = cljs.core.seq.call(null,vec__13569);
var first__13571 = cljs.core.first.call(null,seq__13570);
var seq__13570__$1 = cljs.core.next.call(null,seq__13570);
var form__$1 = first__13571;
var forms__$2 = seq__13570__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__13572 = nret;
var G__13573 = preds__$2;
var G__13574 = forms__$2;
ret__$1 = G__13572;
G__13558__$1 = G__13573;
G__13559__$1 = G__13574;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__13601 = forms;
var vec__13603 = G__13601;
var seq__13604 = cljs.core.seq.call(null,vec__13603);
var first__13605 = cljs.core.first.call(null,seq__13604);
var seq__13604__$1 = cljs.core.next.call(null,seq__13604);
var form = first__13605;
var forms__$1 = seq__13604__$1;
var G__13602 = preds;
var vec__13606 = G__13602;
var seq__13607 = cljs.core.seq.call(null,vec__13606);
var first__13608 = cljs.core.first.call(null,seq__13607);
var seq__13607__$1 = cljs.core.next.call(null,seq__13607);
var pred = first__13608;
var preds__$1 = seq__13607__$1;
var ret__$1 = ret;
var G__13601__$1 = G__13601;
var G__13602__$1 = G__13602;
while(true){
var ret__$2 = ret__$1;
var vec__13609 = G__13601__$1;
var seq__13610 = cljs.core.seq.call(null,vec__13609);
var first__13611 = cljs.core.first.call(null,seq__13610);
var seq__13610__$1 = cljs.core.next.call(null,seq__13610);
var form__$1 = first__13611;
var forms__$2 = seq__13610__$1;
var vec__13612 = G__13602__$1;
var seq__13613 = cljs.core.seq.call(null,vec__13612);
var first__13614 = cljs.core.first.call(null,seq__13613);
var seq__13613__$1 = cljs.core.next.call(null,seq__13613);
var pred__$1 = first__13614;
var preds__$2 = seq__13613__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__13615 = nret;
var G__13616 = forms__$2;
var G__13617 = preds__$2;
ret__$1 = G__13615;
G__13601__$1 = G__13616;
G__13602__$1 = G__13617;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec13623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13623 = (function (and_spec_impl,forms,preds,gfn,meta13624){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta13624 = meta13624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13625,meta13624__$1){
var self__ = this;
var _13625__$1 = this;
return (new cljs.spec.t_cljs$spec13623(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta13624__$1));
});

cljs.spec.t_cljs$spec13623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13625){
var self__ = this;
var _13625__$1 = this;
return self__.meta13624;
});

cljs.spec.t_cljs$spec13623.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13623.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec13623.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__13619_SHARP_,p2__13618_SHARP_){
return cljs.spec.unform.call(null,p2__13618_SHARP_,p1__13619_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec13623.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec13623.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec13623.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec13623.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec13623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta13624","meta13624",1343736036,null)], null);
});

cljs.spec.t_cljs$spec13623.cljs$lang$type = true;

cljs.spec.t_cljs$spec13623.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13623";

cljs.spec.t_cljs$spec13623.cljs$lang$ctorPrWriter = (function (this__7701__auto__,writer__7702__auto__,opt__7703__auto__){
return cljs.core._write.call(null,writer__7702__auto__,"cljs.spec/t_cljs$spec13623");
});

cljs.spec.__GT_t_cljs$spec13623 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec13623(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta13624){
return (new cljs.spec.t_cljs$spec13623(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta13624));
});

}

return (new cljs.spec.t_cljs$spec13623(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args13628 = [];
var len__8232__auto___13637 = arguments.length;
var i__8233__auto___13638 = (0);
while(true){
if((i__8233__auto___13638 < len__8232__auto___13637)){
args13628.push((arguments[i__8233__auto___13638]));

var G__13639 = (i__8233__auto___13638 + (1));
i__8233__auto___13638 = G__13639;
continue;
} else {
}
break;
}

var G__13630 = args13628.length;
switch (G__13630) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13628.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__13631,gfn){
var map__13632 = p__13631;
var map__13632__$1 = ((((!((map__13632 == null)))?((((map__13632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13632):map__13632);
var opts = map__13632__$1;
var count = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var max_count = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var min_count = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var distinct = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var gen_max = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var gen_into = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"gen-into","gen-into",-1047890542),cljs.core.PersistentVector.EMPTY);
var kfn = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var check_QMARK_ = ((function (map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__13626_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__13626_SHARP_);
});})(map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;
var kfn__$1 = (function (){var or__7049__auto__ = kfn;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return ((function (or__7049__auto__,check_QMARK_,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
return i;
});
;})(or__7049__auto__,check_QMARK_,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
}
})();
if(typeof cljs.spec.t_cljs$spec13634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13634 = (function (form,max_count,check_QMARK_,map__13632,gfn,gen_max,pred,distinct,kfn,gen_into,count,min_count,opts,p__13631,meta13635){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.map__13632 = map__13632;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.distinct = distinct;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.p__13631 = p__13631;
this.meta13635 = meta13635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_13636,meta13635__$1){
var self__ = this;
var _13636__$1 = this;
return (new cljs.spec.t_cljs$spec13634(self__.form,self__.max_count,self__.check_QMARK_,self__.map__13632,self__.gfn,self__.gen_max,self__.pred,self__.distinct,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.p__13631,meta13635__$1));
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_13636){
var self__ = this;
var _13636__$1 = this;
return self__.meta13635;
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13634.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13634.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__7049__auto__ = !(cljs.core.seqable_QMARK_.call(null,x));
if(or__7049__auto__){
return or__7049__auto__;
} else {
var or__7049__auto____$1 = (function (){var and__7037__auto__ = self__.distinct;
if(cljs.core.truth_(and__7037__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__7037__auto__;
}
})();
if(cljs.core.truth_(or__7049__auto____$1)){
return or__7049__auto____$1;
} else {
var or__7049__auto____$2 = (function (){var and__7037__auto__ = self__.count;
if(cljs.core.truth_(and__7037__auto__)){
return cljs.core.not_EQ_.call(null,self__.count,cljs.core.bounded_count.call(null,(self__.count + (1)),x));
} else {
return and__7037__auto__;
}
})();
if(cljs.core.truth_(or__7049__auto____$2)){
return or__7049__auto____$2;
} else {
var and__7037__auto__ = (function (){var or__7049__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__7049__auto____$3)){
return or__7049__auto____$3;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__7037__auto__)){
return !((((function (){var or__7049__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__7049__auto____$3)){
return or__7049__auto____$3;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__7049__auto____$3 = self__.max_count;
if(cljs.core.truth_(or__7049__auto____$3)){
return or__7049__auto____$3;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__7037__auto__;
}
}
}
}
})())){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__7382__auto__ = (1);
var y__7383__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__7382__auto__ > y__7383__auto__) ? x__7382__auto__ : y__7383__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__13641 = (i + step);
i = G__13641;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__7049__auto__ = (function (){var and__7037__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__7037__auto__){
return x;
} else {
return and__7037__auto__;
}
})();
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13634.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13634.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.seqable_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__7037__auto__ = self__.distinct;
if(cljs.core.truth_(and__7037__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__7037__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__7037__auto__ = self__.count;
if(cljs.core.truth_(and__7037__auto__)){
return cljs.core.not_EQ_.call(null,self__.count,cljs.core.bounded_count.call(null,self__.count,x));
} else {
return and__7037__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__7975__auto__ = self__.count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})(),(function (){var x__7975__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","%","cljs.spec/%",-1625123498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__7037__auto__ = (function (){var or__7049__auto__ = self__.min_count;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__7037__auto__)){
return !((((function (){var or__7049__auto__ = self__.min_count;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__7049__auto__ = self__.max_count;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__7037__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__7975__auto__ = (function (){var or__7049__auto__ = self__.min_count;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})(),(function (){var x__7975__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","%","cljs.spec/%",-1625123498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})(),(function (){var x__7975__auto__ = (function (){var or__7049__auto__ = self__.max_count;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.take.call(null,cljs.spec._STAR_coll_error_limit_STAR_,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (___$1,check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(___$1,check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,cljs.core.range.call(null),x))));

}
}
}
}
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13634.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var init = cljs.core.empty.call(null,self__.gen_into);
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.fmap.call(null,((function (init,pgen,___$1,check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__13627_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__13627_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__13627_SHARP_);
}
});})(init,pgen,___$1,check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__7049__auto__ = self__.min_count;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__7049__auto__ = self__.max_count;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
var x__7382__auto__ = self__.gen_max;
var y__7383__auto__ = ((2) * (function (){var or__7049__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__7049__auto____$1)){
return or__7049__auto____$1;
} else {
return (0);
}
})());
return ((x__7382__auto__ > y__7383__auto__) ? x__7382__auto__ : y__7383__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__7049__auto__ = self__.min_count;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__7049__auto__ = self__.min_count;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return (0);
}
})(),(function (){var or__7049__auto__ = self__.max_count;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
var x__7382__auto__ = self__.gen_max;
var y__7383__auto__ = ((2) * (function (){var or__7049__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__7049__auto____$1)){
return or__7049__auto____$1;
} else {
return (0);
}
})());
return ((x__7382__auto__ > y__7383__auto__) ? x__7382__auto__ : y__7383__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
}
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13634.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13634.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__7975__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13634.getBasis = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"map__13632","map__13632",1250736425,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"p__13631","p__13631",-113332449,null),new cljs.core.Symbol(null,"meta13635","meta13635",1011405036,null)], null);
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13634.cljs$lang$type = true;

cljs.spec.t_cljs$spec13634.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13634";

cljs.spec.t_cljs$spec13634.cljs$lang$ctorPrWriter = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (this__7701__auto__,writer__7702__auto__,opt__7703__auto__){
return cljs.core._write.call(null,writer__7702__auto__,"cljs.spec/t_cljs$spec13634");
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.__GT_t_cljs$spec13634 = ((function (check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function cljs$spec$__GT_t_cljs$spec13634(form__$1,max_count__$1,check_QMARK___$1,map__13632__$2,gfn__$1,gen_max__$1,pred__$1,distinct__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,p__13631__$1,meta13635){
return (new cljs.spec.t_cljs$spec13634(form__$1,max_count__$1,check_QMARK___$1,map__13632__$2,gfn__$1,gen_max__$1,pred__$1,distinct__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,p__13631__$1,meta13635));
});})(check_QMARK_,kfn__$1,map__13632,map__13632__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

}

return (new cljs.spec.t_cljs$spec13634(form,max_count,check_QMARK_,map__13632__$1,gfn,gen_max,pred,distinct,kfn__$1,gen_into,count,min_count,opts,p__13631,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__13642){
var map__13645 = p__13642;
var map__13645__$1 = ((((!((map__13645 == null)))?((((map__13645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13645):map__13645);
var op = cljs.core.get.call(null,map__13645__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__13647){
var map__13659 = p__13647;
var map__13659__$1 = ((((!((map__13659 == null)))?((((map__13659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13659):map__13659);
var vec__13660 = cljs.core.get.call(null,map__13659__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__13661 = cljs.core.seq.call(null,vec__13660);
var first__13662 = cljs.core.first.call(null,seq__13661);
var seq__13661__$1 = cljs.core.next.call(null,seq__13661);
var p1 = first__13662;
var pr = seq__13661__$1;
var ps = vec__13660;
var vec__13663 = cljs.core.get.call(null,map__13659__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__13664 = cljs.core.seq.call(null,vec__13663);
var first__13665 = cljs.core.first.call(null,seq__13664);
var seq__13664__$1 = cljs.core.next.call(null,seq__13664);
var k1 = first__13665;
var kr = seq__13664__$1;
var ks = vec__13663;
var vec__13666 = cljs.core.get.call(null,map__13659__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__13667 = cljs.core.seq.call(null,vec__13666);
var first__13668 = cljs.core.first.call(null,seq__13667);
var seq__13667__$1 = cljs.core.next.call(null,seq__13667);
var f1 = first__13668;
var fr = seq__13667__$1;
var forms = vec__13666;
var ret = cljs.core.get.call(null,map__13659__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__13659__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__8239__auto__ = [];
var len__8232__auto___13671 = arguments.length;
var i__8233__auto___13672 = (0);
while(true){
if((i__8233__auto___13672 < len__8232__auto___13671)){
args__8239__auto__.push((arguments[i__8233__auto___13672]));

var G__13673 = (i__8233__auto___13672 + (1));
i__8233__auto___13672 = G__13673;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq13670){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13670));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7975__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})(),(function (){var x__7975__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__7975__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__7049__auto__ = ks;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__13674_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__13674_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__7049__auto__ = cljs.core.seq.call(null,ks);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__7049__auto__ = cljs.core.seq.call(null,forms);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__13675_SHARP_){
return cljs.core.nth.call(null,p1__13675_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__13685 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__13688 = cljs.core.nth.call(null,vec__13685,(0),null);
var seq__13689 = cljs.core.seq.call(null,vec__13688);
var first__13690 = cljs.core.first.call(null,seq__13689);
var seq__13689__$1 = cljs.core.next.call(null,seq__13689);
var p1 = first__13690;
var pr = seq__13689__$1;
var ps__$1 = vec__13688;
var vec__13691 = cljs.core.nth.call(null,vec__13685,(1),null);
var k1 = cljs.core.nth.call(null,vec__13691,(0),null);
var ks__$1 = vec__13691;
var forms__$1 = cljs.core.nth.call(null,vec__13685,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__8239__auto__ = [];
var len__8232__auto___13695 = arguments.length;
var i__8233__auto___13696 = (0);
while(true){
if((i__8233__auto___13696 < len__8232__auto___13695)){
args__8239__auto__.push((arguments[i__8233__auto___13696]));

var G__13697 = (i__8233__auto___13696 + (1));
i__8233__auto___13696 = G__13697;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq13694){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13694));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__7037__auto__ = p1;
if(cljs.core.truth_(and__7037__auto__)){
return p2;
} else {
return and__7037__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__7049__auto__ = p1;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__7049__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__7049__auto__){
return or__7049__auto__;
} else {
var or__7049__auto____$1 = (function (){var and__7037__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__7037__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__7037__auto__;
}
})();
if(cljs.core.truth_(or__7049__auto____$1)){
return or__7049__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__13701 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__13701__$1 = ((((!((map__13701 == null)))?((((map__13701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13701):map__13701);
var p__$1 = map__13701__$1;
var op = cljs.core.get.call(null,map__13701__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__13701__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__13701__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__13701__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__13701__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__13703 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__13703)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__13703)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__13703)){
var and__7037__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__7037__auto__)){
var or__7049__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__7037__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__13703)){
var or__7049__auto__ = (p1 === p2);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__13703)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__13703)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__13722 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__13722__$1 = ((((!((map__13722 == null)))?((((map__13722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13722):map__13722);
var p__$1 = map__13722__$1;
var vec__13723 = cljs.core.get.call(null,map__13722__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__13724 = cljs.core.seq.call(null,vec__13723);
var first__13725 = cljs.core.first.call(null,seq__13724);
var seq__13724__$1 = cljs.core.next.call(null,seq__13724);
var p0 = first__13725;
var pr = seq__13724__$1;
var ps = vec__13723;
var vec__13726 = cljs.core.get.call(null,map__13722__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__13726,(0),null);
var ks = vec__13726;
var op = cljs.core.get.call(null,map__13722__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__13722__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__13722__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__13722__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__13730 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__13730)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__13730)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__13730)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__13730)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__13730)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__13730)){
var vec__13731 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__13734 = cljs.core.nth.call(null,vec__13731,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__13734,(0),null);
var vec__13737 = cljs.core.nth.call(null,vec__13731,(1),null);
var k0 = cljs.core.nth.call(null,vec__13737,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__13756 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__13756__$1 = ((((!((map__13756 == null)))?((((map__13756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13756):map__13756);
var p__$1 = map__13756__$1;
var vec__13757 = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__13758 = cljs.core.seq.call(null,vec__13757);
var first__13759 = cljs.core.first.call(null,seq__13758);
var seq__13758__$1 = cljs.core.next.call(null,seq__13758);
var p0 = first__13759;
var pr = seq__13758__$1;
var ps = vec__13757;
var vec__13760 = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__13760,(0),null);
var ks = vec__13760;
var op = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__13756__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__13764 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__13764)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__13764)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__13764)){
var px = cljs.core.reduce.call(null,((function (G__13764,map__13756,map__13756__$1,p__$1,vec__13757,seq__13758,first__13759,seq__13758__$1,p0,pr,ps,vec__13760,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__13741_SHARP_,p2__13740_SHARP_){
return cljs.spec.unform.call(null,p2__13740_SHARP_,p1__13741_SHARP_);
});})(G__13764,map__13756,map__13756__$1,p__$1,vec__13757,seq__13758,first__13759,seq__13758__$1,p0,pr,ps,vec__13760,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__13764)){
return cljs.core.mapcat.call(null,((function (G__13764,map__13756,map__13756__$1,p__$1,vec__13757,seq__13758,first__13759,seq__13758__$1,p0,pr,ps,vec__13760,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__13742_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__13742_SHARP_);
});})(G__13764,map__13756,map__13756__$1,p__$1,vec__13757,seq__13758,first__13759,seq__13758__$1,p0,pr,ps,vec__13760,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__13764)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__13764,map__13756,map__13756__$1,p__$1,vec__13757,seq__13758,first__13759,seq__13758__$1,p0,pr,ps,vec__13760,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__13743_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__13743_SHARP_);
});})(G__13764,map__13756,map__13756__$1,p__$1,vec__13757,seq__13758,first__13759,seq__13758__$1,p0,pr,ps,vec__13760,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__13764,map__13756,map__13756__$1,p__$1,vec__13757,seq__13758,first__13759,seq__13758__$1,p0,pr,ps,vec__13760,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__13764,map__13756,map__13756__$1,p__$1,vec__13757,seq__13758,first__13759,seq__13758__$1,p0,pr,ps,vec__13760,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__13764)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__13765 = x;
var k__$1 = cljs.core.nth.call(null,vec__13765,(0),null);
var v = cljs.core.nth.call(null,vec__13765,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__13771 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__13771__$1 = ((((!((map__13771 == null)))?((((map__13771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13771):map__13771);
var p__$1 = map__13771__$1;
var op = cljs.core.get.call(null,map__13771__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__13771__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__13771__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__13771,map__13771__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__13771,map__13771__$1,p__$1,op,ps,splice))
;
var G__13773 = op;
if(cljs.core._EQ_.call(null,null,G__13773)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__13773)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__13773)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__13773)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__13773)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__13773)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__13784 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__13784__$1 = ((((!((map__13784 == null)))?((((map__13784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13784):map__13784);
var p__$1 = map__13784__$1;
var vec__13785 = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__13786 = cljs.core.seq.call(null,vec__13785);
var first__13787 = cljs.core.first.call(null,seq__13786);
var seq__13786__$1 = cljs.core.next.call(null,seq__13786);
var p0 = first__13787;
var pr = seq__13786__$1;
var ps = vec__13785;
var vec__13788 = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__13789 = cljs.core.seq.call(null,vec__13788);
var first__13790 = cljs.core.first.call(null,seq__13789);
var seq__13789__$1 = cljs.core.next.call(null,seq__13789);
var k0 = first__13790;
var kr = seq__13789__$1;
var ks = vec__13788;
var op = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__13792 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__13792)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__13792)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__13792)){
var temp__6503__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6503__auto__)){
var p1__$1 = temp__6503__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__13792)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__13792)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__13792,map__13784,map__13784__$1,p__$1,vec__13785,seq__13786,first__13787,seq__13786__$1,p0,pr,ps,vec__13788,seq__13789,first__13790,seq__13789__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__13774_SHARP_){
return cljs$spec$deriv.call(null,p1__13774_SHARP_,x);
});})(G__13792,map__13784,map__13784__$1,p__$1,vec__13785,seq__13786,first__13787,seq__13786__$1,p0,pr,ps,vec__13788,seq__13789,first__13790,seq__13789__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__13792)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__13796 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__13796__$1 = ((((!((map__13796 == null)))?((((map__13796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13796):map__13796);
var p__$1 = map__13796__$1;
var op = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__13798 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__13798)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__13798)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__13798)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__13798)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__7975__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__7049__auto__ = cljs.core.seq.call(null,ks);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),(function (){var or__7049__auto__ = cljs.core.seq.call(null,forms);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__13798)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__7975__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__13798)){
var x__7975__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__7975__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto____$1);
})(),x__7975__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__13812 = input;
var x = cljs.core.nth.call(null,vec__13812,(0),null);
var input__$1 = vec__13812;
var map__13815 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__13815__$1 = ((((!((map__13815 == null)))?((((map__13815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13815):map__13815);
var p__$1 = map__13815__$1;
var op = cljs.core.get.call(null,map__13815__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__13815__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__13815__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__13815__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__13815__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__13815__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__13815__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__13812,x,input__$1,map__13815,map__13815__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
});})(vec__13812,x,input__$1,map__13815,map__13815__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__13817 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__13817)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__13817)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__13817)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6501__auto__)){
var p1__$1 = temp__6501__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__13817)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__7049__auto__ = cljs.core.seq.call(null,ks);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__7049__auto__ = cljs.core.seq.call(null,forms);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__13818 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__13817,vec__13812,x,input__$1,map__13815,map__13815__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__13821){
var vec__13822 = p__13821;
var p__$2 = cljs.core.nth.call(null,vec__13822,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__13817,vec__13812,x,input__$1,map__13815,map__13815__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__13818,(0),null);
var k = cljs.core.nth.call(null,vec__13818,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__13818,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__7049__auto__ = form__$1;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__13817)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (G__13817,vec__13812,x,input__$1,map__13815,map__13815__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__7049__auto__ = form__$1;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__13817,vec__13812,x,input__$1,map__13815,map__13815__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__7049__auto__ = cljs.core.seq.call(null,ks);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__7049__auto__ = cljs.core.seq.call(null,forms);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__13817)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__13831 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__13831__$1 = ((((!((map__13831 == null)))?((((map__13831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13831):map__13831);
var p__$1 = map__13831__$1;
var op = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ret = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var id = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__13831,map__13831__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__13831,map__13831__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__7037__auto__ = rmap__$1;
if(cljs.core.truth_(and__7037__auto__)){
var and__7037__auto____$1 = id;
if(cljs.core.truth_(and__7037__auto____$1)){
var and__7037__auto____$2 = k;
if(cljs.core.truth_(and__7037__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__7037__auto____$2;
}
} else {
return and__7037__auto____$1;
}
} else {
return and__7037__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__13831,map__13831__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__7049__auto__ = f__$1;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return p__$2;
}
})());
});})(map__13831,map__13831__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__7049__auto__ = f__$1;
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__13831,map__13831__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__7049__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__7049__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__7049__auto__){
return or__7049__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__13831,map__13831__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__7049__auto__ = (function (){var temp__6503__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
var G__13834 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__13834)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__13834)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__13835 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__13835)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__13835)){
var temp__6503__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__13835)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__13835)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__13835)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__13835)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__6503__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__6503__auto__,G__13835,or__7049__auto__,map__13831,map__13831__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__13825_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13825_SHARP_);
});})(g,temp__6503__auto__,G__13835,or__7049__auto__,map__13831,map__13831__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__13836){
while(true){
var vec__13840 = p__13836;
var seq__13841 = cljs.core.seq.call(null,vec__13840);
var first__13842 = cljs.core.first.call(null,seq__13841);
var seq__13841__$1 = cljs.core.next.call(null,seq__13841);
var x = first__13842;
var xs = seq__13841__$1;
var data = vec__13840;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__6501__auto__)){
var dp = temp__6501__auto__;
var G__13843 = dp;
var G__13844 = xs;
p = G__13843;
p__13836 = G__13844;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__13858 = input;
var vec__13859 = G__13858;
var seq__13860 = cljs.core.seq.call(null,vec__13859);
var first__13861 = cljs.core.first.call(null,seq__13860);
var seq__13860__$1 = cljs.core.next.call(null,seq__13860);
var x = first__13861;
var xs = seq__13860__$1;
var data = vec__13859;
var i = (0);
var p__$1 = p;
var G__13858__$1 = G__13858;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__13862 = G__13858__$1;
var seq__13863 = cljs.core.seq.call(null,vec__13862);
var first__13864 = cljs.core.first.call(null,seq__13863);
var seq__13863__$1 = cljs.core.next.call(null,seq__13863);
var x__$1 = first__13864;
var xs__$1 = seq__13863__$1;
var data__$1 = vec__13862;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var dp = temp__6501__auto__;
var G__13865 = dp;
var G__13866 = xs__$1;
var G__13867 = (i__$2 + (1));
p__$1 = G__13865;
G__13858__$1 = G__13866;
i__$1 = G__13867;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
} else {
var or__7049__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec13871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13871 = (function (regex_spec_impl,re,gfn,meta13872){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta13872 = meta13872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13873,meta13872__$1){
var self__ = this;
var _13873__$1 = this;
return (new cljs.spec.t_cljs$spec13871(self__.regex_spec_impl,self__.re,self__.gfn,meta13872__$1));
});

cljs.spec.t_cljs$spec13871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13873){
var self__ = this;
var _13873__$1 = this;
return self__.meta13872;
});

cljs.spec.t_cljs$spec13871.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13871.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec13871.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec13871.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec13871.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec13871.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec13871.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec13871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta13872","meta13872",-532605500,null)], null);
});

cljs.spec.t_cljs$spec13871.cljs$lang$type = true;

cljs.spec.t_cljs$spec13871.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13871";

cljs.spec.t_cljs$spec13871.cljs$lang$ctorPrWriter = (function (this__7701__auto__,writer__7702__auto__,opt__7703__auto__){
return cljs.core._write.call(null,writer__7702__auto__,"cljs.spec/t_cljs$spec13871");
});

cljs.spec.__GT_t_cljs$spec13871 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec13871(regex_spec_impl__$1,re__$1,gfn__$1,meta13872){
return (new cljs.spec.t_cljs$spec13871(regex_spec_impl__$1,re__$1,gfn__$1,meta13872));
});

}

return (new cljs.spec.t_cljs$spec13871(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__7037__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__7037__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__7037__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__13874_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__13874_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__6501__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6501__auto__)){
var vec__13878 = temp__6501__auto__;
var smallest = cljs.core.nth.call(null,vec__13878,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec13887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec13887 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta13888){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta13888 = meta13888;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_13889,meta13888__$1){
var self__ = this;
var _13889__$1 = this;
return (new cljs.spec.t_cljs$spec13887(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta13888__$1));
});})(specs))
;

cljs.spec.t_cljs$spec13887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_13889){
var self__ = this;
var _13889__$1 = this;
return self__.meta13888;
});})(specs))
;

cljs.spec.t_cljs$spec13887.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec13887.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec13887.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13887.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec13887.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec13887.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e13890){if((e13890 instanceof Error)){
var t = e13890;
return t;
} else {
throw e13890;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec13887.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$4,specs){
return (function() { 
var G__13893__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__8133__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13891_13894 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13892_13895 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13891_13894,_STAR_print_fn_STAR_13892_13895,sb__8133__auto__,___$4,specs){
return (function (x__8134__auto__){
return sb__8133__auto__.append(x__8134__auto__);
});})(_STAR_print_newline_STAR_13891_13894,_STAR_print_fn_STAR_13892_13895,sb__8133__auto__,___$4,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13892_13895;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13891_13894;
}
return [cljs.core.str(sb__8133__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec));
};
var G__13893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13896__i = 0, G__13896__a = new Array(arguments.length -  0);
while (G__13896__i < G__13896__a.length) {G__13896__a[G__13896__i] = arguments[G__13896__i + 0]; ++G__13896__i;}
  args = new cljs.core.IndexedSeq(G__13896__a,0);
} 
return G__13893__delegate.call(this,args);};
G__13893.cljs$lang$maxFixedArity = 0;
G__13893.cljs$lang$applyTo = (function (arglist__13897){
var args = cljs.core.seq(arglist__13897);
return G__13893__delegate(args);
});
G__13893.cljs$core$IFn$_invoke$arity$variadic = G__13893__delegate;
return G__13893;
})()
;})(___$4,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec13887.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec13887.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__7975__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__7975__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__7975__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7975__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec13887.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta13888","meta13888",984466345,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec13887.cljs$lang$type = true;

cljs.spec.t_cljs$spec13887.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13887";

cljs.spec.t_cljs$spec13887.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__7701__auto__,writer__7702__auto__,opt__7703__auto__){
return cljs.core._write.call(null,writer__7702__auto__,"cljs.spec/t_cljs$spec13887");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec13887 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec13887(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta13888){
return (new cljs.spec.t_cljs$spec13887(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta13888));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec13887(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","any","cljs.spec/any",1039429974),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol("cljs.spec.impl.gen","any","cljs.spec.impl.gen/any",-1450752257,null)),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13898#","p1__13898#",1348900549,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__13898#","p1__13898#",1348900549,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__13898#","p1__13898#",1348900549,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13899#","p1__13899#",5231460,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__13899#","p1__13899#",5231460,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13898#","p1__13898#",1348900549,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__13898#","p1__13898#",1348900549,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__13898#","p1__13898#",1348900549,null)))),(function (p1__13898_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__13898_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__13898_SHARP_));
}),null,true,(function (p1__13899_SHARP_){
return cljs.core.map.call(null,(function (p__13900){
var vec__13901 = p__13900;
var k = cljs.core.nth.call(null,vec__13901,(0),null);
var v = cljs.core.nth.call(null,vec__13901,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__13899_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args13905 = [];
var len__8232__auto___13908 = arguments.length;
var i__8233__auto___13909 = (0);
while(true){
if((i__8233__auto___13909 < len__8232__auto___13908)){
args13905.push((arguments[i__8233__auto___13909]));

var G__13910 = (i__8233__auto___13909 + (1));
i__8233__auto___13909 = G__13910;
continue;
} else {
}
break;
}

var G__13907 = args13905.length;
switch (G__13907) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13905.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__13904_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13904_SHARP_,cljs.spec.conform.call(null,spec,p1__13904_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__13912_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__13912_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_.call(null,coll)) && (cljs.core.every_QMARK_.call(null,check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty.call(null,init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (init){
return (function (p1__13913_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__13913_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__13913_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.call(null,cljs.spec.gen.call(null,pred)));
});
;})(init))
});
/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__7037__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__7037__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__7037__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__7037__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__7037__auto__)){
return val.lessThan(end);
} else {
return and__7037__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__7037__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__7037__auto__)){
return val.lessThan(end);
} else {
return and__7037__auto__;
}
} else {
return false;

}
}
}
});
