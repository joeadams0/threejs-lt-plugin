(ns lt.plugins.threejs
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.util.load :as load]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def plugin-dir (plugins/find-plugin "threejs"))

(def threejs-path (files/join plugin-dir "vendor/three.js"))

(def renderer (atom nil))


 (load/js threejs-path :sync)

(defn get-renderer []
  @renderer)
(defn set-renderer [r]
  (reset! renderer r))

; Create ThreeJs
(defn create-threejs []
  (let [Renderer (.-WebGLRenderer js/THREE)]
    (set-renderer (new Renderer))
    (.setSize (get-renderer) "300" "300")
    (.-domElement (get-renderer))))

(object/object* ::threejs.tab
                :tags [:threejs.hello]
                :behaviors [::on-close-destroy ::on-show]
                :name "threejs"
                :init (fn [this]
                        (create-threejs)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(behavior ::on-show
          :triggers #{:show}
          :reaction (fn [this]
                      (let [parent (.-parentNode (.-domElement (get-renderer)))]
                        (.setSize (get-renderer) (dom/width parent) (dom/height parent)))))

(cmd/command {:command ::open-threejs
              :desc "ThreeJS: Create Tab"
              :exec (fn []
                      (tabs/add-or-focus! (object/create ::threejs.tab)))})





