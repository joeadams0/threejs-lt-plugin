#ThreeJS LightTable Plugin
A LightTable plugin designed to create an instance of a ThreeJS WebGLRenderer in a new tab. You can then render and manipulate ThreeJS scenes right in LightTable! 

####How to use
1. Install the *threejs* plugin with the plugin manager.
2. Create a new tab by hitting `ctrl+Space` and typing *'ThreeJS: Create Tab'* and pressing `Enter`. You will see a new tab with a blank ThreeJS renderer open up.
3. Finally, you can get access by:
```clojurescript
(ns threejs.example
  (:require [lt.plugins.threejs :as threejs]))
(threejs/get-renderer) => Returns renderer instance
```