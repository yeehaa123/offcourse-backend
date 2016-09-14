// Compiled by ClojureScript 1.9.89 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14908__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14909__i = 0, G__14909__a = new Array(arguments.length -  0);
while (G__14909__i < G__14909__a.length) {G__14909__a[G__14909__i] = arguments[G__14909__i + 0]; ++G__14909__i;}
  args = new cljs.core.IndexedSeq(G__14909__a,0);
} 
return G__14908__delegate.call(this,args);};
G__14908.cljs$lang$maxFixedArity = 0;
G__14908.cljs$lang$applyTo = (function (arglist__14910){
var args = cljs.core.seq(arglist__14910);
return G__14908__delegate(args);
});
G__14908.cljs$core$IFn$_invoke$arity$variadic = G__14908__delegate;
return G__14908;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14911__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14912__i = 0, G__14912__a = new Array(arguments.length -  0);
while (G__14912__i < G__14912__a.length) {G__14912__a[G__14912__i] = arguments[G__14912__i + 0]; ++G__14912__i;}
  args = new cljs.core.IndexedSeq(G__14912__a,0);
} 
return G__14911__delegate.call(this,args);};
G__14911.cljs$lang$maxFixedArity = 0;
G__14911.cljs$lang$applyTo = (function (arglist__14913){
var args = cljs.core.seq(arglist__14913);
return G__14911__delegate(args);
});
G__14911.cljs$core$IFn$_invoke$arity$variadic = G__14911__delegate;
return G__14911;
})()
;

return null;
});
