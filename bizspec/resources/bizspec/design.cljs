(ns bizspec.design 
  (:require-macros [hiccups.core :as hiccups])
  (:require [hiccups.runtime :as hiccupsrt]))

(enable-console-print!)
(println "Console enabled for debugging")

(println "Defining valid data creation functions")

(defn create-title-list [name]
  {:name name :children {} :type "title-list"})

(println "Defining Atoms")

(def items (atom {[0] (create-title-list "Desired Effects")}))

(def selected-item (atom [0 -1]))

(println "Defining Functions")

(defn create-defblock [name parent-chain]
  [:span {:class "defblock"}
   [:input {:type "text"}]])

(defn keyboard-enter [main]
  (let [active (.-activeElement js/document)]
    (.insertAdjacentHTML active "afterend" (hiccups/html (create-defblock "Boo" "none")))))

(defn move-focus-up [main]
  (println "Move focus up"))

(defn move-focus-down [main]
  (println "Move focus down"))

(defn create-key-handler [main]
  (fn [event] 
    (let [key (.-keyCode event)]
      (if (not (.-shiftKey event))
        (cond
         (= key 13) (keyboard-enter main)   ; Enter
         (= key 38) (move-focus-up main)    ; Up arrow
         (= key 40) (move-focus-down main)  ; Down arrow
         )
        (println (str "down " key)
                 )))))
     
(println "Hooking up html")

(let [main (.getElementById js/document "bizspeccontent")]
  (set! (.-innerHTML main) "Shoes")
  (.appendChild main (.createTextNode js/document "Test 1 2 3"))
  (.insertAdjacentHTML main "beforeend" (hiccups/html (create-defblock "Boo" "none")))
  (set! (.-onkeypress js/document) (create-key-handler [main])))

(println "Hooks complete 2")
