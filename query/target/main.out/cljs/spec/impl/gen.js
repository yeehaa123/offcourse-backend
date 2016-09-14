// Compiled by ClojureScript 1.9.89 {:target :nodejs}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7701__auto__,writer__7702__auto__,opt__7703__auto__){
return cljs.core._write.call(null,writer__7702__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12600 = arguments.length;
var i__8233__auto___12601 = (0);
while(true){
if((i__8233__auto___12601 < len__8232__auto___12600)){
args__8239__auto__.push((arguments[i__8233__auto___12601]));

var G__12602 = (i__8233__auto___12601 + (1));
i__8233__auto___12601 = G__12602;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12599){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12599));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12604 = arguments.length;
var i__8233__auto___12605 = (0);
while(true){
if((i__8233__auto___12605 < len__8232__auto___12604)){
args__8239__auto__.push((arguments[i__8233__auto___12605]));

var G__12606 = (i__8233__auto___12605 + (1));
i__8233__auto___12605 = G__12606;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12603){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12603));
});

var g_QMARK__12607 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12608 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12607){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12607))
,null));
var mkg_12609 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12607,g_12608){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12607,g_12608))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12607,g_12608,mkg_12609){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12607).call(null,x);
});})(g_QMARK__12607,g_12608,mkg_12609))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12607,g_12608,mkg_12609){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12609).call(null,gfn);
});})(g_QMARK__12607,g_12608,mkg_12609))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12607,g_12608,mkg_12609){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12608).call(null,generator);
});})(g_QMARK__12607,g_12608,mkg_12609))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12571__auto___12627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__12571__auto___12627){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12628 = arguments.length;
var i__8233__auto___12629 = (0);
while(true){
if((i__8233__auto___12629 < len__8232__auto___12628)){
args__8239__auto__.push((arguments[i__8233__auto___12629]));

var G__12630 = (i__8233__auto___12629 + (1));
i__8233__auto___12629 = G__12630;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12627))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12627),args);
});})(g__12571__auto___12627))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__12571__auto___12627){
return (function (seq12610){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12610));
});})(g__12571__auto___12627))
;


var g__12571__auto___12631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__12571__auto___12631){
return (function cljs$spec$impl$gen$list(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12632 = arguments.length;
var i__8233__auto___12633 = (0);
while(true){
if((i__8233__auto___12633 < len__8232__auto___12632)){
args__8239__auto__.push((arguments[i__8233__auto___12633]));

var G__12634 = (i__8233__auto___12633 + (1));
i__8233__auto___12633 = G__12634;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12631))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12631){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12631),args);
});})(g__12571__auto___12631))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__12571__auto___12631){
return (function (seq12611){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12611));
});})(g__12571__auto___12631))
;


var g__12571__auto___12635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__12571__auto___12635){
return (function cljs$spec$impl$gen$map(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12636 = arguments.length;
var i__8233__auto___12637 = (0);
while(true){
if((i__8233__auto___12637 < len__8232__auto___12636)){
args__8239__auto__.push((arguments[i__8233__auto___12637]));

var G__12638 = (i__8233__auto___12637 + (1));
i__8233__auto___12637 = G__12638;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12635))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12635){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12635),args);
});})(g__12571__auto___12635))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__12571__auto___12635){
return (function (seq12612){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12612));
});})(g__12571__auto___12635))
;


var g__12571__auto___12639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__12571__auto___12639){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12640 = arguments.length;
var i__8233__auto___12641 = (0);
while(true){
if((i__8233__auto___12641 < len__8232__auto___12640)){
args__8239__auto__.push((arguments[i__8233__auto___12641]));

var G__12642 = (i__8233__auto___12641 + (1));
i__8233__auto___12641 = G__12642;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12639))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12639){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12639),args);
});})(g__12571__auto___12639))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__12571__auto___12639){
return (function (seq12613){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12613));
});})(g__12571__auto___12639))
;


var g__12571__auto___12643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__12571__auto___12643){
return (function cljs$spec$impl$gen$set(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12644 = arguments.length;
var i__8233__auto___12645 = (0);
while(true){
if((i__8233__auto___12645 < len__8232__auto___12644)){
args__8239__auto__.push((arguments[i__8233__auto___12645]));

var G__12646 = (i__8233__auto___12645 + (1));
i__8233__auto___12645 = G__12646;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12643))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12643){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12643),args);
});})(g__12571__auto___12643))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__12571__auto___12643){
return (function (seq12614){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12614));
});})(g__12571__auto___12643))
;


var g__12571__auto___12647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__12571__auto___12647){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12648 = arguments.length;
var i__8233__auto___12649 = (0);
while(true){
if((i__8233__auto___12649 < len__8232__auto___12648)){
args__8239__auto__.push((arguments[i__8233__auto___12649]));

var G__12650 = (i__8233__auto___12649 + (1));
i__8233__auto___12649 = G__12650;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12647))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12647){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12647),args);
});})(g__12571__auto___12647))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__12571__auto___12647){
return (function (seq12615){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12615));
});})(g__12571__auto___12647))
;


var g__12571__auto___12651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__12571__auto___12651){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12652 = arguments.length;
var i__8233__auto___12653 = (0);
while(true){
if((i__8233__auto___12653 < len__8232__auto___12652)){
args__8239__auto__.push((arguments[i__8233__auto___12653]));

var G__12654 = (i__8233__auto___12653 + (1));
i__8233__auto___12653 = G__12654;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12651))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12651){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12651),args);
});})(g__12571__auto___12651))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__12571__auto___12651){
return (function (seq12616){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12616));
});})(g__12571__auto___12651))
;


var g__12571__auto___12655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__12571__auto___12655){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12656 = arguments.length;
var i__8233__auto___12657 = (0);
while(true){
if((i__8233__auto___12657 < len__8232__auto___12656)){
args__8239__auto__.push((arguments[i__8233__auto___12657]));

var G__12658 = (i__8233__auto___12657 + (1));
i__8233__auto___12657 = G__12658;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12655))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12655){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12655),args);
});})(g__12571__auto___12655))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__12571__auto___12655){
return (function (seq12617){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12617));
});})(g__12571__auto___12655))
;


var g__12571__auto___12659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__12571__auto___12659){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12660 = arguments.length;
var i__8233__auto___12661 = (0);
while(true){
if((i__8233__auto___12661 < len__8232__auto___12660)){
args__8239__auto__.push((arguments[i__8233__auto___12661]));

var G__12662 = (i__8233__auto___12661 + (1));
i__8233__auto___12661 = G__12662;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12659))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12659){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12659),args);
});})(g__12571__auto___12659))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__12571__auto___12659){
return (function (seq12618){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12618));
});})(g__12571__auto___12659))
;


var g__12571__auto___12663 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__12571__auto___12663){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12664 = arguments.length;
var i__8233__auto___12665 = (0);
while(true){
if((i__8233__auto___12665 < len__8232__auto___12664)){
args__8239__auto__.push((arguments[i__8233__auto___12665]));

var G__12666 = (i__8233__auto___12665 + (1));
i__8233__auto___12665 = G__12666;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12663))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12663){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12663),args);
});})(g__12571__auto___12663))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__12571__auto___12663){
return (function (seq12619){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12619));
});})(g__12571__auto___12663))
;


var g__12571__auto___12667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__12571__auto___12667){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12668 = arguments.length;
var i__8233__auto___12669 = (0);
while(true){
if((i__8233__auto___12669 < len__8232__auto___12668)){
args__8239__auto__.push((arguments[i__8233__auto___12669]));

var G__12670 = (i__8233__auto___12669 + (1));
i__8233__auto___12669 = G__12670;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12667))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12667){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12667),args);
});})(g__12571__auto___12667))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__12571__auto___12667){
return (function (seq12620){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12620));
});})(g__12571__auto___12667))
;


var g__12571__auto___12671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__12571__auto___12671){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12672 = arguments.length;
var i__8233__auto___12673 = (0);
while(true){
if((i__8233__auto___12673 < len__8232__auto___12672)){
args__8239__auto__.push((arguments[i__8233__auto___12673]));

var G__12674 = (i__8233__auto___12673 + (1));
i__8233__auto___12673 = G__12674;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12671))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12671){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12671),args);
});})(g__12571__auto___12671))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__12571__auto___12671){
return (function (seq12621){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12621));
});})(g__12571__auto___12671))
;


var g__12571__auto___12675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__12571__auto___12675){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12676 = arguments.length;
var i__8233__auto___12677 = (0);
while(true){
if((i__8233__auto___12677 < len__8232__auto___12676)){
args__8239__auto__.push((arguments[i__8233__auto___12677]));

var G__12678 = (i__8233__auto___12677 + (1));
i__8233__auto___12677 = G__12678;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12675))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12675){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12675),args);
});})(g__12571__auto___12675))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__12571__auto___12675){
return (function (seq12622){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12622));
});})(g__12571__auto___12675))
;


var g__12571__auto___12679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__12571__auto___12679){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12680 = arguments.length;
var i__8233__auto___12681 = (0);
while(true){
if((i__8233__auto___12681 < len__8232__auto___12680)){
args__8239__auto__.push((arguments[i__8233__auto___12681]));

var G__12682 = (i__8233__auto___12681 + (1));
i__8233__auto___12681 = G__12682;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12679))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12679){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12679),args);
});})(g__12571__auto___12679))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__12571__auto___12679){
return (function (seq12623){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12623));
});})(g__12571__auto___12679))
;


var g__12571__auto___12683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__12571__auto___12683){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12684 = arguments.length;
var i__8233__auto___12685 = (0);
while(true){
if((i__8233__auto___12685 < len__8232__auto___12684)){
args__8239__auto__.push((arguments[i__8233__auto___12685]));

var G__12686 = (i__8233__auto___12685 + (1));
i__8233__auto___12685 = G__12686;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12683))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12683){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12683),args);
});})(g__12571__auto___12683))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__12571__auto___12683){
return (function (seq12624){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12624));
});})(g__12571__auto___12683))
;


var g__12571__auto___12687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__12571__auto___12687){
return (function cljs$spec$impl$gen$return(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12688 = arguments.length;
var i__8233__auto___12689 = (0);
while(true){
if((i__8233__auto___12689 < len__8232__auto___12688)){
args__8239__auto__.push((arguments[i__8233__auto___12689]));

var G__12690 = (i__8233__auto___12689 + (1));
i__8233__auto___12689 = G__12690;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12687))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12687){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12687),args);
});})(g__12571__auto___12687))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__12571__auto___12687){
return (function (seq12625){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12625));
});})(g__12571__auto___12687))
;


var g__12571__auto___12691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__12571__auto___12691){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12692 = arguments.length;
var i__8233__auto___12693 = (0);
while(true){
if((i__8233__auto___12693 < len__8232__auto___12692)){
args__8239__auto__.push((arguments[i__8233__auto___12693]));

var G__12694 = (i__8233__auto___12693 + (1));
i__8233__auto___12693 = G__12694;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12571__auto___12691))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12571__auto___12691){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12571__auto___12691),args);
});})(g__12571__auto___12691))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12571__auto___12691){
return (function (seq12626){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12626));
});})(g__12571__auto___12691))
;

var g__12584__auto___12716 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__12584__auto___12716){
return (function cljs$spec$impl$gen$any(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12717 = arguments.length;
var i__8233__auto___12718 = (0);
while(true){
if((i__8233__auto___12718 < len__8232__auto___12717)){
args__8239__auto__.push((arguments[i__8233__auto___12718]));

var G__12719 = (i__8233__auto___12718 + (1));
i__8233__auto___12718 = G__12719;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12716))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12716){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12716);
});})(g__12584__auto___12716))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__12584__auto___12716){
return (function (seq12695){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12695));
});})(g__12584__auto___12716))
;


var g__12584__auto___12720 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__12584__auto___12720){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12721 = arguments.length;
var i__8233__auto___12722 = (0);
while(true){
if((i__8233__auto___12722 < len__8232__auto___12721)){
args__8239__auto__.push((arguments[i__8233__auto___12722]));

var G__12723 = (i__8233__auto___12722 + (1));
i__8233__auto___12722 = G__12723;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12720))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12720){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12720);
});})(g__12584__auto___12720))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__12584__auto___12720){
return (function (seq12696){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12696));
});})(g__12584__auto___12720))
;


var g__12584__auto___12724 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__12584__auto___12724){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12725 = arguments.length;
var i__8233__auto___12726 = (0);
while(true){
if((i__8233__auto___12726 < len__8232__auto___12725)){
args__8239__auto__.push((arguments[i__8233__auto___12726]));

var G__12727 = (i__8233__auto___12726 + (1));
i__8233__auto___12726 = G__12727;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12724))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12724){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12724);
});})(g__12584__auto___12724))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__12584__auto___12724){
return (function (seq12697){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12697));
});})(g__12584__auto___12724))
;


var g__12584__auto___12728 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__12584__auto___12728){
return (function cljs$spec$impl$gen$char(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12729 = arguments.length;
var i__8233__auto___12730 = (0);
while(true){
if((i__8233__auto___12730 < len__8232__auto___12729)){
args__8239__auto__.push((arguments[i__8233__auto___12730]));

var G__12731 = (i__8233__auto___12730 + (1));
i__8233__auto___12730 = G__12731;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12728))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12728){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12728);
});})(g__12584__auto___12728))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__12584__auto___12728){
return (function (seq12698){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12698));
});})(g__12584__auto___12728))
;


var g__12584__auto___12732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__12584__auto___12732){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12733 = arguments.length;
var i__8233__auto___12734 = (0);
while(true){
if((i__8233__auto___12734 < len__8232__auto___12733)){
args__8239__auto__.push((arguments[i__8233__auto___12734]));

var G__12735 = (i__8233__auto___12734 + (1));
i__8233__auto___12734 = G__12735;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12732))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12732){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12732);
});})(g__12584__auto___12732))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__12584__auto___12732){
return (function (seq12699){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12699));
});})(g__12584__auto___12732))
;


var g__12584__auto___12736 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__12584__auto___12736){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12737 = arguments.length;
var i__8233__auto___12738 = (0);
while(true){
if((i__8233__auto___12738 < len__8232__auto___12737)){
args__8239__auto__.push((arguments[i__8233__auto___12738]));

var G__12739 = (i__8233__auto___12738 + (1));
i__8233__auto___12738 = G__12739;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12736))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12736){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12736);
});})(g__12584__auto___12736))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__12584__auto___12736){
return (function (seq12700){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12700));
});})(g__12584__auto___12736))
;


var g__12584__auto___12740 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__12584__auto___12740){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12741 = arguments.length;
var i__8233__auto___12742 = (0);
while(true){
if((i__8233__auto___12742 < len__8232__auto___12741)){
args__8239__auto__.push((arguments[i__8233__auto___12742]));

var G__12743 = (i__8233__auto___12742 + (1));
i__8233__auto___12742 = G__12743;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12740))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12740){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12740);
});})(g__12584__auto___12740))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__12584__auto___12740){
return (function (seq12701){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12701));
});})(g__12584__auto___12740))
;


var g__12584__auto___12744 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__12584__auto___12744){
return (function cljs$spec$impl$gen$double(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12745 = arguments.length;
var i__8233__auto___12746 = (0);
while(true){
if((i__8233__auto___12746 < len__8232__auto___12745)){
args__8239__auto__.push((arguments[i__8233__auto___12746]));

var G__12747 = (i__8233__auto___12746 + (1));
i__8233__auto___12746 = G__12747;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12744))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12744){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12744);
});})(g__12584__auto___12744))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__12584__auto___12744){
return (function (seq12702){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12702));
});})(g__12584__auto___12744))
;


var g__12584__auto___12748 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__12584__auto___12748){
return (function cljs$spec$impl$gen$int(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12749 = arguments.length;
var i__8233__auto___12750 = (0);
while(true){
if((i__8233__auto___12750 < len__8232__auto___12749)){
args__8239__auto__.push((arguments[i__8233__auto___12750]));

var G__12751 = (i__8233__auto___12750 + (1));
i__8233__auto___12750 = G__12751;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12748))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12748){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12748);
});})(g__12584__auto___12748))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__12584__auto___12748){
return (function (seq12703){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12703));
});})(g__12584__auto___12748))
;


var g__12584__auto___12752 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__12584__auto___12752){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12753 = arguments.length;
var i__8233__auto___12754 = (0);
while(true){
if((i__8233__auto___12754 < len__8232__auto___12753)){
args__8239__auto__.push((arguments[i__8233__auto___12754]));

var G__12755 = (i__8233__auto___12754 + (1));
i__8233__auto___12754 = G__12755;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12752))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12752){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12752);
});})(g__12584__auto___12752))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__12584__auto___12752){
return (function (seq12704){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12704));
});})(g__12584__auto___12752))
;


var g__12584__auto___12756 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__12584__auto___12756){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12757 = arguments.length;
var i__8233__auto___12758 = (0);
while(true){
if((i__8233__auto___12758 < len__8232__auto___12757)){
args__8239__auto__.push((arguments[i__8233__auto___12758]));

var G__12759 = (i__8233__auto___12758 + (1));
i__8233__auto___12758 = G__12759;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12756))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12756){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12756);
});})(g__12584__auto___12756))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__12584__auto___12756){
return (function (seq12705){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12705));
});})(g__12584__auto___12756))
;


var g__12584__auto___12760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__12584__auto___12760){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12761 = arguments.length;
var i__8233__auto___12762 = (0);
while(true){
if((i__8233__auto___12762 < len__8232__auto___12761)){
args__8239__auto__.push((arguments[i__8233__auto___12762]));

var G__12763 = (i__8233__auto___12762 + (1));
i__8233__auto___12762 = G__12763;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12760))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12760){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12760);
});})(g__12584__auto___12760))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__12584__auto___12760){
return (function (seq12706){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12706));
});})(g__12584__auto___12760))
;


var g__12584__auto___12764 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__12584__auto___12764){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12765 = arguments.length;
var i__8233__auto___12766 = (0);
while(true){
if((i__8233__auto___12766 < len__8232__auto___12765)){
args__8239__auto__.push((arguments[i__8233__auto___12766]));

var G__12767 = (i__8233__auto___12766 + (1));
i__8233__auto___12766 = G__12767;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12764))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12764){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12764);
});})(g__12584__auto___12764))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__12584__auto___12764){
return (function (seq12707){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12707));
});})(g__12584__auto___12764))
;


var g__12584__auto___12768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__12584__auto___12768){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12769 = arguments.length;
var i__8233__auto___12770 = (0);
while(true){
if((i__8233__auto___12770 < len__8232__auto___12769)){
args__8239__auto__.push((arguments[i__8233__auto___12770]));

var G__12771 = (i__8233__auto___12770 + (1));
i__8233__auto___12770 = G__12771;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12768))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12768){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12768);
});})(g__12584__auto___12768))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__12584__auto___12768){
return (function (seq12708){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12708));
});})(g__12584__auto___12768))
;


var g__12584__auto___12772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__12584__auto___12772){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12773 = arguments.length;
var i__8233__auto___12774 = (0);
while(true){
if((i__8233__auto___12774 < len__8232__auto___12773)){
args__8239__auto__.push((arguments[i__8233__auto___12774]));

var G__12775 = (i__8233__auto___12774 + (1));
i__8233__auto___12774 = G__12775;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12772))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12772){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12772);
});})(g__12584__auto___12772))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__12584__auto___12772){
return (function (seq12709){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12709));
});})(g__12584__auto___12772))
;


var g__12584__auto___12776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__12584__auto___12776){
return (function cljs$spec$impl$gen$string(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12777 = arguments.length;
var i__8233__auto___12778 = (0);
while(true){
if((i__8233__auto___12778 < len__8232__auto___12777)){
args__8239__auto__.push((arguments[i__8233__auto___12778]));

var G__12779 = (i__8233__auto___12778 + (1));
i__8233__auto___12778 = G__12779;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12776))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12776){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12776);
});})(g__12584__auto___12776))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__12584__auto___12776){
return (function (seq12710){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12710));
});})(g__12584__auto___12776))
;


var g__12584__auto___12780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__12584__auto___12780){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12781 = arguments.length;
var i__8233__auto___12782 = (0);
while(true){
if((i__8233__auto___12782 < len__8232__auto___12781)){
args__8239__auto__.push((arguments[i__8233__auto___12782]));

var G__12783 = (i__8233__auto___12782 + (1));
i__8233__auto___12782 = G__12783;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12780))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12780){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12780);
});})(g__12584__auto___12780))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__12584__auto___12780){
return (function (seq12711){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12711));
});})(g__12584__auto___12780))
;


var g__12584__auto___12784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__12584__auto___12784){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12785 = arguments.length;
var i__8233__auto___12786 = (0);
while(true){
if((i__8233__auto___12786 < len__8232__auto___12785)){
args__8239__auto__.push((arguments[i__8233__auto___12786]));

var G__12787 = (i__8233__auto___12786 + (1));
i__8233__auto___12786 = G__12787;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12784))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12784){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12784);
});})(g__12584__auto___12784))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__12584__auto___12784){
return (function (seq12712){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12712));
});})(g__12584__auto___12784))
;


var g__12584__auto___12788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__12584__auto___12788){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12789 = arguments.length;
var i__8233__auto___12790 = (0);
while(true){
if((i__8233__auto___12790 < len__8232__auto___12789)){
args__8239__auto__.push((arguments[i__8233__auto___12790]));

var G__12791 = (i__8233__auto___12790 + (1));
i__8233__auto___12790 = G__12791;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12788))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12788){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12788);
});})(g__12584__auto___12788))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__12584__auto___12788){
return (function (seq12713){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12713));
});})(g__12584__auto___12788))
;


var g__12584__auto___12792 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__12584__auto___12792){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12793 = arguments.length;
var i__8233__auto___12794 = (0);
while(true){
if((i__8233__auto___12794 < len__8232__auto___12793)){
args__8239__auto__.push((arguments[i__8233__auto___12794]));

var G__12795 = (i__8233__auto___12794 + (1));
i__8233__auto___12794 = G__12795;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12792))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12792){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12792);
});})(g__12584__auto___12792))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__12584__auto___12792){
return (function (seq12714){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12714));
});})(g__12584__auto___12792))
;


var g__12584__auto___12796 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__12584__auto___12796){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12797 = arguments.length;
var i__8233__auto___12798 = (0);
while(true){
if((i__8233__auto___12798 < len__8232__auto___12797)){
args__8239__auto__.push((arguments[i__8233__auto___12798]));

var G__12799 = (i__8233__auto___12798 + (1));
i__8233__auto___12798 = G__12799;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});})(g__12584__auto___12796))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12796){
return (function (args){
return cljs.core.deref.call(null,g__12584__auto___12796);
});})(g__12584__auto___12796))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__12584__auto___12796){
return (function (seq12715){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12715));
});})(g__12584__auto___12796))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8239__auto__ = [];
var len__8232__auto___12802 = arguments.length;
var i__8233__auto___12803 = (0);
while(true){
if((i__8233__auto___12803 < len__8232__auto___12802)){
args__8239__auto__.push((arguments[i__8233__auto___12803]));

var G__12804 = (i__8233__auto___12803 + (1));
i__8233__auto___12803 = G__12804;
continue;
} else {
}
break;
}

var argseq__8240__auto__ = ((((0) < args__8239__auto__.length))?(new cljs.core.IndexedSeq(args__8239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8240__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12800_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12800_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12801){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12801));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__12805_SHARP_){
return (new Date(p1__12805_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});
