// Compiled by ClojureScript 1.9.89 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14555){
var map__14580 = p__14555;
var map__14580__$1 = ((((!((map__14580 == null)))?((((map__14580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14580):map__14580);
var m = map__14580__$1;
var n = cljs.core.get.call(null,map__14580__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14582_14604 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14583_14605 = null;
var count__14584_14606 = (0);
var i__14585_14607 = (0);
while(true){
if((i__14585_14607 < count__14584_14606)){
var f_14608 = cljs.core._nth.call(null,chunk__14583_14605,i__14585_14607);
cljs.core.println.call(null,"  ",f_14608);

var G__14609 = seq__14582_14604;
var G__14610 = chunk__14583_14605;
var G__14611 = count__14584_14606;
var G__14612 = (i__14585_14607 + (1));
seq__14582_14604 = G__14609;
chunk__14583_14605 = G__14610;
count__14584_14606 = G__14611;
i__14585_14607 = G__14612;
continue;
} else {
var temp__6503__auto___14613 = cljs.core.seq.call(null,seq__14582_14604);
if(temp__6503__auto___14613){
var seq__14582_14614__$1 = temp__6503__auto___14613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14582_14614__$1)){
var c__7952__auto___14615 = cljs.core.chunk_first.call(null,seq__14582_14614__$1);
var G__14616 = cljs.core.chunk_rest.call(null,seq__14582_14614__$1);
var G__14617 = c__7952__auto___14615;
var G__14618 = cljs.core.count.call(null,c__7952__auto___14615);
var G__14619 = (0);
seq__14582_14604 = G__14616;
chunk__14583_14605 = G__14617;
count__14584_14606 = G__14618;
i__14585_14607 = G__14619;
continue;
} else {
var f_14620 = cljs.core.first.call(null,seq__14582_14614__$1);
cljs.core.println.call(null,"  ",f_14620);

var G__14621 = cljs.core.next.call(null,seq__14582_14614__$1);
var G__14622 = null;
var G__14623 = (0);
var G__14624 = (0);
seq__14582_14604 = G__14621;
chunk__14583_14605 = G__14622;
count__14584_14606 = G__14623;
i__14585_14607 = G__14624;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14625 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7049__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7049__auto__)){
return or__7049__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14625);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14625)))?cljs.core.second.call(null,arglists_14625):arglists_14625));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14586_14626 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14587_14627 = null;
var count__14588_14628 = (0);
var i__14589_14629 = (0);
while(true){
if((i__14589_14629 < count__14588_14628)){
var vec__14590_14630 = cljs.core._nth.call(null,chunk__14587_14627,i__14589_14629);
var name_14631 = cljs.core.nth.call(null,vec__14590_14630,(0),null);
var map__14593_14632 = cljs.core.nth.call(null,vec__14590_14630,(1),null);
var map__14593_14633__$1 = ((((!((map__14593_14632 == null)))?((((map__14593_14632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14593_14632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14593_14632):map__14593_14632);
var doc_14634 = cljs.core.get.call(null,map__14593_14633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14635 = cljs.core.get.call(null,map__14593_14633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14631);

cljs.core.println.call(null," ",arglists_14635);

if(cljs.core.truth_(doc_14634)){
cljs.core.println.call(null," ",doc_14634);
} else {
}

var G__14636 = seq__14586_14626;
var G__14637 = chunk__14587_14627;
var G__14638 = count__14588_14628;
var G__14639 = (i__14589_14629 + (1));
seq__14586_14626 = G__14636;
chunk__14587_14627 = G__14637;
count__14588_14628 = G__14638;
i__14589_14629 = G__14639;
continue;
} else {
var temp__6503__auto___14640 = cljs.core.seq.call(null,seq__14586_14626);
if(temp__6503__auto___14640){
var seq__14586_14641__$1 = temp__6503__auto___14640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14586_14641__$1)){
var c__7952__auto___14642 = cljs.core.chunk_first.call(null,seq__14586_14641__$1);
var G__14643 = cljs.core.chunk_rest.call(null,seq__14586_14641__$1);
var G__14644 = c__7952__auto___14642;
var G__14645 = cljs.core.count.call(null,c__7952__auto___14642);
var G__14646 = (0);
seq__14586_14626 = G__14643;
chunk__14587_14627 = G__14644;
count__14588_14628 = G__14645;
i__14589_14629 = G__14646;
continue;
} else {
var vec__14595_14647 = cljs.core.first.call(null,seq__14586_14641__$1);
var name_14648 = cljs.core.nth.call(null,vec__14595_14647,(0),null);
var map__14598_14649 = cljs.core.nth.call(null,vec__14595_14647,(1),null);
var map__14598_14650__$1 = ((((!((map__14598_14649 == null)))?((((map__14598_14649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14598_14649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14598_14649):map__14598_14649);
var doc_14651 = cljs.core.get.call(null,map__14598_14650__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14652 = cljs.core.get.call(null,map__14598_14650__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14648);

cljs.core.println.call(null," ",arglists_14652);

if(cljs.core.truth_(doc_14651)){
cljs.core.println.call(null," ",doc_14651);
} else {
}

var G__14653 = cljs.core.next.call(null,seq__14586_14641__$1);
var G__14654 = null;
var G__14655 = (0);
var G__14656 = (0);
seq__14586_14626 = G__14653;
chunk__14587_14627 = G__14654;
count__14588_14628 = G__14655;
i__14589_14629 = G__14656;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__14600 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14601 = null;
var count__14602 = (0);
var i__14603 = (0);
while(true){
if((i__14603 < count__14602)){
var role = cljs.core._nth.call(null,chunk__14601,i__14603);
var temp__6503__auto___14657__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___14657__$1)){
var spec_14658 = temp__6503__auto___14657__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_14658));
} else {
}

var G__14659 = seq__14600;
var G__14660 = chunk__14601;
var G__14661 = count__14602;
var G__14662 = (i__14603 + (1));
seq__14600 = G__14659;
chunk__14601 = G__14660;
count__14602 = G__14661;
i__14603 = G__14662;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__14600);
if(temp__6503__auto____$1){
var seq__14600__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14600__$1)){
var c__7952__auto__ = cljs.core.chunk_first.call(null,seq__14600__$1);
var G__14663 = cljs.core.chunk_rest.call(null,seq__14600__$1);
var G__14664 = c__7952__auto__;
var G__14665 = cljs.core.count.call(null,c__7952__auto__);
var G__14666 = (0);
seq__14600 = G__14663;
chunk__14601 = G__14664;
count__14602 = G__14665;
i__14603 = G__14666;
continue;
} else {
var role = cljs.core.first.call(null,seq__14600__$1);
var temp__6503__auto___14667__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___14667__$2)){
var spec_14668 = temp__6503__auto___14667__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_14668));
} else {
}

var G__14669 = cljs.core.next.call(null,seq__14600__$1);
var G__14670 = null;
var G__14671 = (0);
var G__14672 = (0);
seq__14600 = G__14669;
chunk__14601 = G__14670;
count__14602 = G__14671;
i__14603 = G__14672;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
