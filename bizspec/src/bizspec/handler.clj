(ns bizspec.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.params :as params]
            [hiccup.page :as hpage]))

;; Pages

(defn home []
  (hpage/html5 [:head
                [:title "bizSpec"]
                [:meta {:charset "utf-8"}]
                [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
                [:meta {:name "description" :content ""}]
                [:meta {:name "author" :content ""}]
                [:link {:rel "stylesheet" :type "text/css" :href "style.css"}]
                [:link {:rel "stylesheet" :type "text/css" :href "bootstrap.min.css"}]]
               
               [:body
                [:nav {:class "navbar navbar-inverse navbar-fixed-top"}
                 [:div {:class "container"}
                  [:button {:class "navbar-toggle collapsed" :data-toggle "collapse" :data-target "#navbar"
                            :aria-expanded "false" :aria-controls "navbar"}
                   [:span {:class "sr-only"} "Toggle navigation"]
                   [:span {:class "icon-bar"}]
                   [:span {:class "icon-bar"}]
                   [:span {:class "icon-bar"}]]
                  [:div {:class "navbar-header"}
                   [:a {:class "navbar-brand" :href "#"} "ShoutSpec"]]
                  [:div {:id "navbar" :class "collapse navbar-collapse"}
                   [:ul {:class "nav navbar-nav"}
                    [:li {:class "active"} [:a {:href "#"} "Home"]]]]]]]

                [:div.container
                 [:p "Welcome to ShoutSpec. This is a tool for quickly generating specifications to common templates."]
                 [:p "Use the bullet menu to add templates to your specification."]
                 [:hr]
                 [:div#bizspeccontent]
                 [:hr]
                 [:div#postspec
                  [:h4 "Import File"] 
                  [:input {:type "file" 
                           :id "importfl" 
                           :data-classButton "btn btn-primary" 
                           :data-input "false" 
                           :data-buttonText "Import File"}]
                  [:h4 "Export File"]
                  [:button {:onClick "bizspec.design.export_spec('exportFileName');"} "Export"]
                  [:input {:type "text" :id "exportFileName"}]
                  ]
                 (hpage/include-js "/goog/base.js")
                 (hpage/include-js "/main.js")
                 [:script {:type "text/javascript" :src "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"}] 
                 [:script {:type "text/javascript" :src "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"}]
                [:script {:type "text/javascript"} "goog.require(\"bizspec.design\");"]
                 [:script
                  "document.getElementById('importfl').addEventListener('change', readFile, false);

   function readFile (evt) {
       var files = evt.target.files;
       var file = files[0];           
       var reader = new FileReader();
       reader.onload = function() {
         console.log(this.result);            
         bizspec.design.import_spec(this.result);
       }
       reader.readAsText(file);
    }"]]))

;; Routes

(defroutes app-routes
  (GET "/" [] (home))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (params/wrap-params app-routes))

