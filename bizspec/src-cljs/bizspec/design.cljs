(ns bizspec.design 
  (:require-macros [hiccups.core :as hiccups])
  (:require [hiccups.runtime :as hiccupsrt]
            [clojure.string :as str]))

(def that-emspace-char " ")
(defn gen-emspace [depth]
  (str (apply str (repeat depth that-emspace-char))))

(def templates 
  {
   "Full Template" 
   ["Summary/High Level Design"
    ["Desired effects"
     ["Mandatory"
      ["# Consider any Negative Branches to the desired effects themselves and add additional desired effects."
       "# If there are negative branches to anything within the design, add the desired effect that is being violated."
       ""]]
     ["Optional"
      ["# These are cool things that multiply the effectiveness of the design."
       "# \"Doesn't have defects\" should never go here, as defects prevent the user from using the product."
       ""]]]
    ["Assumptions"
     ["# Here are beliefs that led to particular design decisions"
      ""]]
    ["Intermediate Objectives"
     ["# This is a good place to describe what you believe to be the best candidate solution to your problem."
      ""]]
    "Design/Detailed Build Design"
    ["Terms"
     ["# Here would be a good place to flesh out definitions of ideas that nobody is familiar with"]]
    ["Appearence/Wireframe/Features"]]
   
   "Form" ["New Form"
           ["Title"]
           ["What is it bound to?"]
           ["What conditions cause refresh?"]
           ["Are there any child forms?"]]
   
   "Grid" ["New Grid"
           ["Where is it?"]]
   
   "Grid Column" ["Grid Column"
                  ["Caption?"
                   "When is it read only?"
                   "When does it need to refresh?"
                   "What is the valid range of values?"]]

   "Web Page" ["Web Page"
               ["Title?"
                "Url?"
                "Style?"
                "Where can it be accessed from?"
                "Who is allowed to access it?"]]

   "Algorithm" ["Algorithm"
                ["What is it's related desired effect?"]
                ["What is it's name?"]
                ["What are the expected performance requirements?"]
                ["What is the input datastructure?"]
                ["What is the output datastructure?"]]

   "Data Structure" ["Data Structure"
                     ["Field"]]

   "Field" ["Field"
            ["Name" "Valid values"]]
   }
)

(def sample-template 
  ["" "Click on the Bullet and pick a template."])

(enable-console-print!)
(println "Console enabled for debugging")
(println "Defining valid data creation functions")

(defn create-title-list [name]
  {:name name :children {} :type "title-list"})

(println "Defining Atoms")

(def items (atom {[0] (create-title-list "Desired Effects")}))
(def selected-item (atom [0 -1]))
(def current-id (atom 0))

(println "Defining Functions for keyboard interations")

(defn get-element [parent element-name]
  (first (array-seq (.getElementsByClassName parent element-name))))

(defn get-root-active []
  (.-parentNode (.-activeElement js/document)))

(defn get-block-depth [element]
  (reduce (fn [agr new]
            (if (= new that-emspace-char) 
              (inc agr) agr)) 
          (into [0] (.-innerHTML element))))

(defn get-emspace-depth [element]
  (reduce (fn [agr new]
            (if (= new that-emspace-char) 
              (inc agr) agr)) 
          (into [0] element)))

(defn get-new-id []
  (let [new-id @current-id]
    (swap! current-id inc)
    new-id))

(defn key-focus-block [main id]
  (.focus (.getElementById js/document id)))

(defn create-defblock [name parent-chain depth]
  (render-defblock name parent-chain depth "" (keys templates)))

(defn make-dropdown [name items]
  [:div {:class "dropdown ilinebutton"}
   [:button {:class "btn btn-mini dropdown-toggle ilinebutton" :type "button" :data-toggle "dropdown"} name]
   (into [:ul.dropdown-menu]
         (map (fn [[namey action]] [:li [:a {:onClick action} namey]]) items))])

(defn make-button-pairs [menu-templates parent-chain]
  (map (fn [template-name] 
         [template-name  
          (str "bizspec.design.fire_iline_button('" template-name "', '" parent-chain "');")
          ]) menu-templates))

(defn render-defblock [name parent-chain depth content menu-templates]
  [:span {:class (str "defblock didja depth" depth)} 
   [:span {:class "ilinetoken"} (gen-emspace depth)] 
   (make-dropdown 
    "•" 
    (into [["Make Heading" (str "bizospec.design.convert_to_heading('"parent-chain"')")] 
           ["Add Templates ->" "#"]] 
          (make-button-pairs menu-templates parent-chain)))
 ;  [:input {:class "iline" :type "text" :id parent-chain :value content}]
   [:textarea {:class "iline" :id parent-chain :cols 1 } content]
   ])

(defn get-text [block]
  (.-innerHTML (get-element block "iline")))

(defn get-active-element [element-name]
  (let [parent (get-root-active)]
    (if parent
      (get-element parent element-name)
      (println "parent not found"))
    ))

(defn keyboard-tab-gen [main func]
  (let [active (get-root-active)
        element (get-element active "ilinetoken")
        depth (if active (get-block-depth active) 0)
        new-depth (func depth)]
    (when (>= new-depth 0) 
      (set! (.-innerHTML element) (gen-emspace new-depth))
      (let [active-str (str/replace (.-className active) #"depth[0-9]+" (str "depth" new-depth))]
        (println active-str)
        (set! (.-className active) active-str)))))

(defn keyboard-tab [main]
  (keyboard-tab-gen main inc))

(defn keyboard-untab [main]
  (keyboard-tab-gen main dec))

(defn keyboard-tab11 [main]
  (let [active (get-active-element "ilinetoken")]
    (when active 
      (set! (.-innerHTML active) (str "&emsp;" (.-innerHTML active))))))


(defn keyboard-enter [main]
  (let [active (get-root-active)
        depth (get-block-depth (get-active-element "ilinetoken"))
        id (.-id active)
        new-id (get-new-id)
        block (hiccups/html (create-defblock "desu" new-id depth))]
    (println depth)
    (.insertAdjacentHTML active "afterend" block)
    (swap! items assoc :nodes (cons (:nodes @items) block))
    (key-focus-block main new-id)))

(defn move-focus-up [main]
  (let [parent (get-root-active)
        previous (.-previousElementSibling parent)]
    (if previous
      (let [child (first (array-seq (.getElementsByClassName previous "iline")))]
        (if child
          (.focus child)
          (println (str "No child focus for " previous " + " child))))
      (println (str "Cannot focus on " (or previous "null"))))))

(defn keyboard-backspace [main]
  (or (let [parent (get-root-active)
            previous (when parent (get-element (.-previousElementSibling parent) "iline"))]
        (when previous
          (let [active (.-activeElement js/document)
                selection-start (.-selectionStart active)
                selection-end (.-selectionEnd active)
                previous-value (.-value previous)]
            (when (and (= selection-start selection-end) 
                       (= selection-start 0))
              (set! (.-value previous) (str previous-value (.-value active)))
              (.focus previous)
              (set! (.-selectionStart previous) (count previous-value))
              (set! (.-selectionEnd previous) (count previous-value))
              (.removeChild (.-parentNode parent) parent)))))
      :dontPreventDefault))

(defn move-focus-down [main]
  (let [parent (get-root-active)
        next (.-nextElementSibling parent)]
    (if next
      (let [child (first (array-seq (.getElementsByClassName next "iline")))]
        (if child
          (.focus child)
          (println (str "No child focus for" next " + " child))))
      (println (str "Cannot focus on" (or next "null"))))))

(defn handle-press [key main event]
  (if (.-shiftKey event)
    (cond 
     (= key 9) (keyboard-untab main)
     :else :dontPreventDefault)
    (cond
     (= key 9) (keyboard-tab main)  ; Tab
     (= key 13) (keyboard-enter main) ; Enter
     (= key 38) (move-focus-up main)  ; Up arrow
     (= key 40) (move-focus-down main) ; Down arrow
     (= key 8) (keyboard-backspace main) ; Down arrow
     :else :dontPreventDefault)))

(defn create-key-handler [main]
  (fn [event] 
    (when (not (= (handle-press (.-keyCode event) main event) :dontPreventDefault))
      (.preventDefault event))))

(println "Defining Fucntions for templating")

(defn render-template [template depth]
  (cond 
   (string? template) (render-defblock "Boo" (get-new-id) depth template (keys templates))
   (vector? template) (map #(render-template % (inc depth)) template)
   (seq template) []
   :else (println (str "unrecognised syntax: " template))))

(defn- turn-node-to-string [node]
  (let [depth (get-block-depth node)
        emspaces (apply str (repeat depth that-emspace-char))
        text (get-text node)]
    (str emspaces text "\n")))

(defn download [filename content]
  (let [pom (.createElement js/document "a")
        encoded (js/encodeURIComponent content)
        full (str "data:text/plain;charset=utf-8," encoded)
        postspec (.getElementById js/document "postspec")]
    (set! (.-href pom) full)
    (set! (.-download pom) filename)
    (println "clicking")
    (.appendChild postspec pom)
    (.click pom)
    (.removeChild postspec pom)
    pom))

(println "Defining exported")

(defn ^:export convert-to-heading [id]
  (let [active (.-parentNode (.getElementById js/document id))
        text (get-text active)]
    
    
    ))

(defn ^:export export-spec [name-source-element-id]
  (let [elements (array-seq (.getElementsByClassName js/document "defblock"))
        form (apply str (map turn-node-to-string elements))
        field-name (.-value (.getElementById js/document name-source-element-id))]
    (download (or field-name "spec.txt") form)))

(defn ^:export import-spec [content] 
  (let [main (.getElementById js/document "bizspeccontent")
        split-content (str/split-lines content)]
    (set! (.-innerHTML main) "")
    (doall (for [x split-content]
             (do
               (println x)
               (let [depth (get-emspace-depth x)
                     text (str/replace x that-emspace-char "")
                     html (hiccups/html (render-defblock "Boo" (get-new-id) depth text (keys templates)))]
                 (.insertAdjacentHTML main "beforeend" html)))))))

(defn ^:export fire-iline-button [name id]
  (let [relevant-template (get templates name)
        active (.-parentNode (.getElementById js/document id))
        depth (get-block-depth active)
        assad (println (str "depth: " depth))
        block (render-template relevant-template (dec depth))]
    (println (str block))
    (.insertAdjacentHTML active "afterend" (hiccups/html block))))
(println "Hooking up html")

(let [main (.getElementById js/document "bizspeccontent")]
  (set! (.-innerHTML main) "")
  (doall (for [x (render-template sample-template -1)]
           (let [html (hiccups/html x)]
             (.insertAdjacentHTML main "beforeend" html))))

  (set! (.-onkeypress js/document) (create-key-handler [main])))

(println "Hooks complete. Looks it worked this time hahah.")
