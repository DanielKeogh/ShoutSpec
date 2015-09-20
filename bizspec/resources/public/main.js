goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../../cljs/core.js", ['cljs.core'], ['goog.string.StringBuffer', 'goog.array', 'goog.object', 'goog.string']);
goog.addDependency("../../clojure/string.js", ['clojure.string'], ['cljs.core', 'goog.string.StringBuffer', 'goog.string']);
goog.addDependency("../../hiccups/runtime.js", ['hiccups.runtime'], ['cljs.core', 'clojure.string']);
goog.addDependency("../bizspec/design.js", ['bizspec.design'], ['hiccups.runtime', 'cljs.core', 'clojure.string']);