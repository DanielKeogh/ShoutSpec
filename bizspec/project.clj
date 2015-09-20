(defproject bizspec "0.1.0-SNAPSHOT"
  :description "A tool for writing high level designs"
  :url "none"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.3.1"]
                 [ring "1.3.2"]
                 [hiccup "1.0.5"]
                 [com.cemerick/friend "0.2.1"]
                 ;;ClojureScript deps
                 [org.clojure/clojurescript "0.0-2850"]
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
                                   :output-dir "resources/public"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}}]}
  
  :profiles {
             :dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}})
