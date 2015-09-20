(defproject bizspec "0.1.0-SNAPSHOT"
  :description "A tool for writing high level designs"
  :url "none"
  :min-lein-version "2.0.0"
  :dependencies 
  [[org.clojure/clojure "1.8.0-alpha4"]
   [org.clojure/core.async "0.1.346.0-17112a-alpha"]
   [compojure "1.4.0"]
   [ring "1.3.2"]
   [hiccup "1.0.5"]
   [com.cemerick/friend "0.2.1"]
   ;;ClojureScript deps
   [org.clojure/clojurescript "0.0-3308"]
   [hiccups "0.3.0"]]
  :plugins [[lein-ring "0.8.13"]
            [lein-cljsbuild "1.0.4"]]
  :ring {:handler bizspec.handler/app}
  :ssl? true
  :port 8000
  :ssl-port 8001
  :resources-path "resources/"

  :cljsbuild {
              :builds [{
                                        ; The path to the top-level ClojureScript source directory:
                        :source-paths ["src-cljs"]
                                        ; The standard ClojureScript compiler options:
                                        ; (See the ClojureScript compiler documentation for details.)
                        :compiler {
                                   :output-to "resources/public/main.js"  ; default: target/cljsbuild-main.js
                                   :output-dir "resources"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}}]}
  
  :profiles {
             :dev 
             {:dependencies 
              [[javax.servlet/servlet-api "2.5"]
               [ring-mock "0.1.5"]
               [com.cemerick/piggieback "0.2.1"]
               [org.clojure/tools.nrepl "0.2.10"]]
              :plugins [[lein-cljsbuild "1.0.5"]]
              :src-paths ["src" "dev"]
              :repl-options {:nrepl-middleare [cemerick.piggieback/wrap-cljs-repl]}}})
