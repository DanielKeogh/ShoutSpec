// Compiled by ClojureScript 0.0-2850 {}
goog.provide('bizspec.design');
goog.require('cljs.core');
goog.require('hiccups.runtime');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Console enabled for debugging");
cljs.core.println.call(null,"Defining valid data creation functions");
bizspec.design.create_title_list = (function create_title_list(name){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),"title-list"], null);
});
cljs.core.println.call(null,"Defining Atoms");
bizspec.design.items = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),bizspec.design.create_title_list.call(null,"Desired Effects")], true, false));
bizspec.design.selected_item = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
cljs.core.println.call(null,"Defining Functions");
bizspec.design.create_defblock = (function create_defblock(name,parent_chain){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"defblock"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null);
});
bizspec.design.keyboard_enter = (function keyboard_enter(main){
var active = document.activeElement;
return active.insertAdjacentHTML("afterend",[cljs.core.str(hiccups.runtime.render_html.call(null,bizspec.design.create_defblock.call(null,"Boo","none")))].join(''));
});
bizspec.design.move_focus_up = (function move_focus_up(main){
return cljs.core.println.call(null,"Move focus up");
});
bizspec.design.move_focus_down = (function move_focus_down(main){
return cljs.core.println.call(null,"Move focus down");
});
bizspec.design.create_key_handler = (function create_key_handler(main){
return (function (event){
var key = event.keyCode;
if(cljs.core.not.call(null,event.shiftKey)){
if(cljs.core._EQ_.call(null,key,(13))){
return bizspec.design.keyboard_enter.call(null,main);
} else {
if(cljs.core._EQ_.call(null,key,(38))){
return bizspec.design.move_focus_up.call(null,main);
} else {
if(cljs.core._EQ_.call(null,key,(40))){
return bizspec.design.move_focus_down.call(null,main);
} else {
return null;
}
}
}
} else {
return cljs.core.println.call(null,[cljs.core.str("down "),cljs.core.str(key)].join(''));
}
});
});
cljs.core.println.call(null,"Hooking up html");
var main_5508 = document.getElementById("bizspeccontent");
main_5508.innerHTML = "Shoes";

main_5508.appendChild(document.createTextNode("Test 1 2 3"));

main_5508.insertAdjacentHTML("beforeend",[cljs.core.str(hiccups.runtime.render_html.call(null,bizspec.design.create_defblock.call(null,"Boo","none")))].join(''));

document.onkeypress = bizspec.design.create_key_handler.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_5508], null));
cljs.core.println.call(null,"Hooks complete 2");

//# sourceMappingURL=design.js.map