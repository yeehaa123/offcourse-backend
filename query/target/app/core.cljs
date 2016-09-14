(ns app.core
  (:require [cljs.nodejs :as node]))

(def AWS (node/require "aws-sdk"))

(node/enable-util-print!)

(defn ^:export handler [raw-event context cb]
  (cb nil (clj->js {:user-name "yeehaa"})))

(defn -main [] identity)
(set! *main-cli-fn* -main)
