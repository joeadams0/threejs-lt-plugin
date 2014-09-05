if(!lt.util.load.provided_QMARK_('lt.plugins.threejs')) {
goog.provide('lt.plugins.threejs');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.util.load');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.plugins.threejs.plugin_dir = lt.objs.plugins.find_plugin.call(null,"threejs");
lt.plugins.threejs.threejs_path = lt.objs.files.join.call(null,lt.plugins.threejs.plugin_dir,"vendor/three.js");
lt.plugins.threejs.renderer = cljs.core.atom.call(null,null);
lt.util.load.js.call(null,lt.plugins.threejs.threejs_path,new cljs.core.Keyword(null,"sync","sync",1017449997));
lt.plugins.threejs.get_renderer = (function get_renderer(){return cljs.core.deref.call(null,lt.plugins.threejs.renderer);
});
lt.plugins.threejs.set_renderer = (function set_renderer(r){return cljs.core.reset_BANG_.call(null,lt.plugins.threejs.renderer,r);
});
lt.plugins.threejs.create_threejs = (function create_threejs(){var Renderer = THREE.WebGLRenderer;lt.plugins.threejs.set_renderer.call(null,(new Renderer()));
lt.plugins.threejs.get_renderer.call(null).setSize("300","300");
return lt.plugins.threejs.get_renderer.call(null).domElement;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.threejs","threejs.tab","lt.plugins.threejs/threejs.tab",769779641),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threejs.tab","threejs.tab",2388153344)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.threejs","on-close-destroy","lt.plugins.threejs/on-close-destroy",4144674088),new cljs.core.Keyword("lt.plugins.threejs","on-show","lt.plugins.threejs/on-show",3230811804)], null),new cljs.core.Keyword(null,"name","name",1017277949),"threejs",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.threejs.create_threejs.call(null);
}));
lt.plugins.threejs.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___7898 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___7898))
{var ts_7899 = temp__4092__auto___7898;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_7899))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_7899);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.threejs","on-close-destroy","lt.plugins.threejs/on-close-destroy",4144674088),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.threejs.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.threejs.__BEH__on_show = (function __BEH__on_show(this$){var parent = lt.plugins.threejs.get_renderer.call(null).domElement.parentNode;return lt.plugins.threejs.get_renderer.call(null).setSize(lt.util.dom.width.call(null,parent),lt.util.dom.height.call(null,parent));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.threejs","on-show","lt.plugins.threejs/on-show",3230811804),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.threejs.__BEH__on_show,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.threejs","open-threejs","lt.plugins.threejs/open-threejs",2003789683),new cljs.core.Keyword(null,"desc","desc",1016984067),"ThreeJS: Create Tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.threejs","threejs.tab","lt.plugins.threejs/threejs.tab",769779641)));
})], null));
}

//# sourceMappingURL=threejs_compiled.js.map