// Compiled by ClojureScript 0.0-2850 {}
goog.provide('bizspec.design');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hiccups.runtime');
bizspec.design.that_emspace_char = "\u2003";
bizspec.design.gen_emspace = (function gen_emspace(depth){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,depth,bizspec.design.that_emspace_char)))].join('');
});
bizspec.design.templates = new cljs.core.PersistentArrayMap(null, 8, ["Full Template",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Summary/High Level Design",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Desired effects",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mandatory",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["# Consider any Negative Branches to the desired effects themselves and add additional desired effects.","# If there are negative branches to anything within the design, add the desired effect that is being violated.",""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optional",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["# These are cool things that multiply the effectiveness of the design.","# \"Doesn't have defects\" should never go here, as defects prevent the user from using the product.",""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Assumptions",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["# Here are beliefs that led to particular design decisions",""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Intermediate Objectives",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["# This is a good place to describe what you believe to be the best candidate solution to your problem.",""], null)], null),"Design/Detailed Build Design",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Terms",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["# Here would be a good place to flesh out definitions of ideas that nobody is familiar with"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Appearence/Wireframe/Features"], null)], null),"Form",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Form",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What is it bound to?"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What conditions cause refresh?"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Are there any child forms?"], null)], null),"Grid",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Grid",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Where is it?"], null)], null),"Grid Column",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Grid Column",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Caption?","When is it read only?","When does it need to refresh?","What is the valid range of values?"], null)], null),"Web Page",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Web Page",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title?","Url?","Style?","Where can it be accessed from?","Who is allowed to access it?"], null)], null),"Algorithm",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Algorithm",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What is it's related desired effect?"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What is it's name?"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What are the expected performance requirements?"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What is the input datastructure?"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What is the output datastructure?"], null)], null),"Data Structure",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Data Structure",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Field"], null)], null),"Field",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Field",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name","Valid values"], null)], null)], null);
bizspec.design.sample_template = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","Click on the Bullet and pick a template."], null);
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Console enabled for debugging");
cljs.core.println.call(null,"Defining valid data creation functions");
bizspec.design.create_title_list = (function create_title_list(name){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),"title-list"], null);
});
cljs.core.println.call(null,"Defining Atoms");
bizspec.design.items = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),bizspec.design.create_title_list.call(null,"Desired Effects")], true, false));
bizspec.design.selected_item = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
bizspec.design.current_id = cljs.core.atom.call(null,(0));
cljs.core.println.call(null,"Defining Functions for keyboard interations");
bizspec.design.get_element = (function get_element(parent,element_name){
return cljs.core.first.call(null,cljs.core.array_seq.call(null,parent.getElementsByClassName(element_name)));
});
bizspec.design.get_root_active = (function get_root_active(){
return document.activeElement.parentNode;
});
bizspec.design.get_block_depth = (function get_block_depth(element){
return cljs.core.reduce.call(null,(function (agr,new$){
if(cljs.core._EQ_.call(null,new$,bizspec.design.that_emspace_char)){
return (agr + (1));
} else {
return agr;
}
}),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),element.innerHTML));
});
bizspec.design.get_emspace_depth = (function get_emspace_depth(element){
return cljs.core.reduce.call(null,(function (agr,new$){
if(cljs.core._EQ_.call(null,new$,bizspec.design.that_emspace_char)){
return (agr + (1));
} else {
return agr;
}
}),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),element));
});
bizspec.design.get_new_id = (function get_new_id(){
var new_id = cljs.core.deref.call(null,bizspec.design.current_id);
cljs.core.swap_BANG_.call(null,bizspec.design.current_id,cljs.core.inc);

return new_id;
});
bizspec.design.key_focus_block = (function key_focus_block(main,id){
return document.getElementById(id).focus();
});
bizspec.design.create_defblock = (function create_defblock(name,parent_chain,depth){
return bizspec.design.render_defblock.call(null,name,parent_chain,depth,"",cljs.core.keys.call(null,bizspec.design.templates));
});
bizspec.design.make_dropdown = (function make_dropdown(name,items){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown ilinebutton"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-mini dropdown-toggle ilinebutton",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown"], null),name], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",-867384656)], null),cljs.core.map.call(null,(function (p__5940){
var vec__5941 = p__5940;
var namey = cljs.core.nth.call(null,vec__5941,(0),null);
var action = cljs.core.nth.call(null,vec__5941,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),action], null),namey], null)], null);
}),items))], null);
});
bizspec.design.make_button_pairs = (function make_button_pairs(menu_templates,parent_chain){
return cljs.core.map.call(null,(function (template_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template_name,[cljs.core.str("bizspec.design.fire_iline_button('"),cljs.core.str(template_name),cljs.core.str("', '"),cljs.core.str(parent_chain),cljs.core.str("');")].join('')], null);
}),menu_templates);
});
bizspec.design.render_defblock = (function render_defblock(name,parent_chain,depth,content,menu_templates){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("defblock didja depth"),cljs.core.str(depth)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ilinetoken"], null),bizspec.design.gen_emspace.call(null,depth)], null),bizspec.design.make_dropdown.call(null,"\u2022",cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Make Heading",[cljs.core.str("bizospec.design.convert_to_heading('"),cljs.core.str(parent_chain),cljs.core.str("')")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Add Templates ->","#"], null)], null),bizspec.design.make_button_pairs.call(null,menu_templates,parent_chain))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"iline",new cljs.core.Keyword(null,"id","id",-1388402092),parent_chain,new cljs.core.Keyword(null,"cols","cols",-1914801295),(1)], null),content], null)], null);
});
bizspec.design.get_text = (function get_text(block){
return bizspec.design.get_element.call(null,block,"iline").innerHTML;
});
bizspec.design.get_active_element = (function get_active_element(element_name){
var parent = bizspec.design.get_root_active.call(null);
if(cljs.core.truth_(parent)){
return bizspec.design.get_element.call(null,parent,element_name);
} else {
return cljs.core.println.call(null,"parent not found");
}
});
bizspec.design.keyboard_tab_gen = (function keyboard_tab_gen(main,func){
var active = bizspec.design.get_root_active.call(null);
var element = bizspec.design.get_element.call(null,active,"ilinetoken");
var depth = (cljs.core.truth_(active)?bizspec.design.get_block_depth.call(null,active):(0));
var new_depth = func.call(null,depth);
if((new_depth >= (0))){
element.innerHTML = bizspec.design.gen_emspace.call(null,new_depth);

var active_str = clojure.string.replace.call(null,active.className,/depth[0-9]+/,[cljs.core.str("depth"),cljs.core.str(new_depth)].join(''));
cljs.core.println.call(null,active_str);

return active.className = active_str;
} else {
return null;
}
});
bizspec.design.keyboard_tab = (function keyboard_tab(main){
return bizspec.design.keyboard_tab_gen.call(null,main,cljs.core.inc);
});
bizspec.design.keyboard_untab = (function keyboard_untab(main){
return bizspec.design.keyboard_tab_gen.call(null,main,cljs.core.dec);
});
bizspec.design.keyboard_tab11 = (function keyboard_tab11(main){
var active = bizspec.design.get_active_element.call(null,"ilinetoken");
if(cljs.core.truth_(active)){
return active.innerHTML = [cljs.core.str("&emsp;"),cljs.core.str(active.innerHTML)].join('');
} else {
return null;
}
});
bizspec.design.keyboard_enter = (function keyboard_enter(main){
var active = bizspec.design.get_root_active.call(null);
var depth = bizspec.design.get_block_depth.call(null,bizspec.design.get_active_element.call(null,"ilinetoken"));
var id = active.id;
var new_id = bizspec.design.get_new_id.call(null);
var block = [cljs.core.str(hiccups.runtime.render_html.call(null,bizspec.design.create_defblock.call(null,"desu",new_id,depth)))].join('');
cljs.core.println.call(null,depth);

active.insertAdjacentHTML("afterend",block);

cljs.core.swap_BANG_.call(null,bizspec.design.items,cljs.core.assoc,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.cons.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,bizspec.design.items)),block));

return bizspec.design.key_focus_block.call(null,main,new_id);
});
bizspec.design.move_focus_up = (function move_focus_up(main){
var parent = bizspec.design.get_root_active.call(null);
var previous = parent.previousElementSibling;
if(cljs.core.truth_(previous)){
var child = cljs.core.first.call(null,cljs.core.array_seq.call(null,previous.getElementsByClassName("iline")));
if(cljs.core.truth_(child)){
return child.focus();
} else {
return cljs.core.println.call(null,[cljs.core.str("No child focus for "),cljs.core.str(previous),cljs.core.str(" + "),cljs.core.str(child)].join(''));
}
} else {
return cljs.core.println.call(null,[cljs.core.str("Cannot focus on "),cljs.core.str((function (){var or__3813__auto__ = previous;
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
return "null";
}
})())].join(''));
}
});
bizspec.design.keyboard_backspace = (function keyboard_backspace(main){
var or__3813__auto__ = (function (){var parent = bizspec.design.get_root_active.call(null);
var previous = (cljs.core.truth_(parent)?bizspec.design.get_element.call(null,parent.previousElementSibling,"iline"):null);
if(cljs.core.truth_(previous)){
var active = document.activeElement;
var selection_start = active.selectionStart;
var selection_end = active.selectionEnd;
var previous_value = previous.value;
if((cljs.core._EQ_.call(null,selection_start,selection_end)) && (cljs.core._EQ_.call(null,selection_start,(0)))){
previous.value = [cljs.core.str(previous_value),cljs.core.str(active.value)].join('');

previous.focus();

previous.selectionStart = cljs.core.count.call(null,previous_value);

previous.selectionEnd = cljs.core.count.call(null,previous_value);

return parent.parentNode.removeChild(parent);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
return new cljs.core.Keyword(null,"dontPreventDefault","dontPreventDefault",-2091258691);
}
});
bizspec.design.move_focus_down = (function move_focus_down(main){
var parent = bizspec.design.get_root_active.call(null);
var next = parent.nextElementSibling;
if(cljs.core.truth_(next)){
var child = cljs.core.first.call(null,cljs.core.array_seq.call(null,next.getElementsByClassName("iline")));
if(cljs.core.truth_(child)){
return child.focus();
} else {
return cljs.core.println.call(null,[cljs.core.str("No child focus for"),cljs.core.str(next),cljs.core.str(" + "),cljs.core.str(child)].join(''));
}
} else {
return cljs.core.println.call(null,[cljs.core.str("Cannot focus on"),cljs.core.str((function (){var or__3813__auto__ = next;
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
return "null";
}
})())].join(''));
}
});
bizspec.design.handle_press = (function handle_press(key,main,event){
if(cljs.core.truth_(event.shiftKey)){
if(cljs.core._EQ_.call(null,key,(9))){
return bizspec.design.keyboard_untab.call(null,main);
} else {
return new cljs.core.Keyword(null,"dontPreventDefault","dontPreventDefault",-2091258691);

}
} else {
if(cljs.core._EQ_.call(null,key,(9))){
return bizspec.design.keyboard_tab.call(null,main);
} else {
if(cljs.core._EQ_.call(null,key,(13))){
return bizspec.design.keyboard_enter.call(null,main);
} else {
if(cljs.core._EQ_.call(null,key,(38))){
return bizspec.design.move_focus_up.call(null,main);
} else {
if(cljs.core._EQ_.call(null,key,(40))){
return bizspec.design.move_focus_down.call(null,main);
} else {
if(cljs.core._EQ_.call(null,key,(8))){
return bizspec.design.keyboard_backspace.call(null,main);
} else {
return new cljs.core.Keyword(null,"dontPreventDefault","dontPreventDefault",-2091258691);

}
}
}
}
}
}
});
bizspec.design.create_key_handler = (function create_key_handler(main){
return (function (event){
if(!(cljs.core._EQ_.call(null,bizspec.design.handle_press.call(null,event.keyCode,main,event),new cljs.core.Keyword(null,"dontPreventDefault","dontPreventDefault",-2091258691)))){
return event.preventDefault();
} else {
return null;
}
});
});
cljs.core.println.call(null,"Defining Fucntions for templating");
bizspec.design.render_template = (function render_template(template,depth){
if(typeof template === 'string'){
return bizspec.design.render_defblock.call(null,"Boo",bizspec.design.get_new_id.call(null),depth,template,cljs.core.keys.call(null,bizspec.design.templates));
} else {
if(cljs.core.vector_QMARK_.call(null,template)){
return cljs.core.map.call(null,(function (p1__5942_SHARP_){
return render_template.call(null,p1__5942_SHARP_,(depth + (1)));
}),template);
} else {
if(cljs.core.seq.call(null,template)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.println.call(null,[cljs.core.str("unrecognised syntax: "),cljs.core.str(template)].join(''));

}
}
}
});
bizspec.design.turn_node_to_string = (function turn_node_to_string(node){
var depth = bizspec.design.get_block_depth.call(null,node);
var emspaces = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,depth,bizspec.design.that_emspace_char));
var text = bizspec.design.get_text.call(null,node);
return [cljs.core.str(emspaces),cljs.core.str(text),cljs.core.str("\n")].join('');
});
bizspec.design.download = (function download(filename,content){
var pom = document.createElement("a");
var encoded = encodeURIComponent(content);
var full = [cljs.core.str("data:text/plain;charset=utf-8,"),cljs.core.str(encoded)].join('');
var postspec = document.getElementById("postspec");
pom.href = full;

pom.download = filename;

cljs.core.println.call(null,"clicking");

postspec.appendChild(pom);

pom.click();

postspec.removeChild(pom);

return pom;
});
cljs.core.println.call(null,"Defining exported");
bizspec.design.convert_to_heading = (function convert_to_heading(id){
var active = document.getElementById(id).parentNode;
var text = bizspec.design.get_text.call(null,active);
return null;
});
goog.exportSymbol('bizspec.design.convert_to_heading', bizspec.design.convert_to_heading);
bizspec.design.export_spec = (function export_spec(name_source_element_id){
var elements = cljs.core.array_seq.call(null,document.getElementsByClassName("defblock"));
var form = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,bizspec.design.turn_node_to_string,elements));
var field_name = document.getElementById(name_source_element_id).value;
return bizspec.design.download.call(null,(function (){var or__3813__auto__ = field_name;
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
return "spec.txt";
}
})(),form);
});
goog.exportSymbol('bizspec.design.export_spec', bizspec.design.export_spec);
bizspec.design.import_spec = (function import_spec(content){
var main = document.getElementById("bizspeccontent");
var split_content = clojure.string.split_lines.call(null,content);
main.innerHTML = "";

return cljs.core.doall.call(null,(function (){var iter__4569__auto__ = ((function (main,split_content){
return (function iter__5947(s__5948){
return (new cljs.core.LazySeq(null,((function (main,split_content){
return (function (){
var s__5948__$1 = s__5948;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5948__$1);
if(temp__4126__auto__){
var s__5948__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5948__$2)){
var c__4567__auto__ = cljs.core.chunk_first.call(null,s__5948__$2);
var size__4568__auto__ = cljs.core.count.call(null,c__4567__auto__);
var b__5950 = cljs.core.chunk_buffer.call(null,size__4568__auto__);
if((function (){var i__5949 = (0);
while(true){
if((i__5949 < size__4568__auto__)){
var x = cljs.core._nth.call(null,c__4567__auto__,i__5949);
cljs.core.chunk_append.call(null,b__5950,(function (){
cljs.core.println.call(null,x);

var depth = bizspec.design.get_emspace_depth.call(null,x);
var text = clojure.string.replace.call(null,x,bizspec.design.that_emspace_char,"");
var html = [cljs.core.str(hiccups.runtime.render_html.call(null,bizspec.design.render_defblock.call(null,"Boo",bizspec.design.get_new_id.call(null),depth,text,cljs.core.keys.call(null,bizspec.design.templates))))].join('');
return main.insertAdjacentHTML("beforeend",html);
})()
);

var G__5951 = (i__5949 + (1));
i__5949 = G__5951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5950),iter__5947.call(null,cljs.core.chunk_rest.call(null,s__5948__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5950),null);
}
} else {
var x = cljs.core.first.call(null,s__5948__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.println.call(null,x);

var depth = bizspec.design.get_emspace_depth.call(null,x);
var text = clojure.string.replace.call(null,x,bizspec.design.that_emspace_char,"");
var html = [cljs.core.str(hiccups.runtime.render_html.call(null,bizspec.design.render_defblock.call(null,"Boo",bizspec.design.get_new_id.call(null),depth,text,cljs.core.keys.call(null,bizspec.design.templates))))].join('');
return main.insertAdjacentHTML("beforeend",html);
})()
,iter__5947.call(null,cljs.core.rest.call(null,s__5948__$2)));
}
} else {
return null;
}
break;
}
});})(main,split_content))
,null,null));
});})(main,split_content))
;
return iter__4569__auto__.call(null,split_content);
})());
});
goog.exportSymbol('bizspec.design.import_spec', bizspec.design.import_spec);
bizspec.design.fire_iline_button = (function fire_iline_button(name,id){
var relevant_template = cljs.core.get.call(null,bizspec.design.templates,name);
var active = document.getElementById(id).parentNode;
var depth = bizspec.design.get_block_depth.call(null,active);
var assad = cljs.core.println.call(null,[cljs.core.str("depth: "),cljs.core.str(depth)].join(''));
var block = bizspec.design.render_template.call(null,relevant_template,(depth - (1)));
cljs.core.println.call(null,[cljs.core.str(block)].join(''));

return active.insertAdjacentHTML("afterend",[cljs.core.str(hiccups.runtime.render_html.call(null,block))].join(''));
});
goog.exportSymbol('bizspec.design.fire_iline_button', bizspec.design.fire_iline_button);
cljs.core.println.call(null,"Hooking up html");
var main_5956 = document.getElementById("bizspeccontent");
main_5956.innerHTML = "";

cljs.core.doall.call(null,(function (){var iter__4569__auto__ = ((function (main_5956){
return (function iter__5952(s__5953){
return (new cljs.core.LazySeq(null,((function (main_5956){
return (function (){
var s__5953__$1 = s__5953;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5953__$1);
if(temp__4126__auto__){
var s__5953__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5953__$2)){
var c__4567__auto__ = cljs.core.chunk_first.call(null,s__5953__$2);
var size__4568__auto__ = cljs.core.count.call(null,c__4567__auto__);
var b__5955 = cljs.core.chunk_buffer.call(null,size__4568__auto__);
if((function (){var i__5954 = (0);
while(true){
if((i__5954 < size__4568__auto__)){
var x = cljs.core._nth.call(null,c__4567__auto__,i__5954);
cljs.core.chunk_append.call(null,b__5955,(function (){var html = [cljs.core.str(hiccups.runtime.render_html.call(null,x))].join('');
return main_5956.insertAdjacentHTML("beforeend",html);
})());

var G__5957 = (i__5954 + (1));
i__5954 = G__5957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5955),iter__5952.call(null,cljs.core.chunk_rest.call(null,s__5953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5955),null);
}
} else {
var x = cljs.core.first.call(null,s__5953__$2);
return cljs.core.cons.call(null,(function (){var html = [cljs.core.str(hiccups.runtime.render_html.call(null,x))].join('');
return main_5956.insertAdjacentHTML("beforeend",html);
})(),iter__5952.call(null,cljs.core.rest.call(null,s__5953__$2)));
}
} else {
return null;
}
break;
}
});})(main_5956))
,null,null));
});})(main_5956))
;
return iter__4569__auto__.call(null,bizspec.design.render_template.call(null,bizspec.design.sample_template,(-1)));
})());

document.onkeypress = bizspec.design.create_key_handler.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_5956], null));
cljs.core.println.call(null,"Hooks complete. Looks it worked this time hahah.");

//# sourceMappingURL=design.js.map