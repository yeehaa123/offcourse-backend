(ns app.core
  (:require [cljs.nodejs :as node]))

(def AWS (node/require "aws-sdk"))

(node/enable-util-print!)

(defn to-clj [js-obj]
  (js->clj js-obj :keywordize-keys true))

(defn create-api-event [raw-event]
  (-> raw-event to-clj :body))

(defn to-event [{:keys [event-type payload]}]
  [(keyword event-type) payload])

(defn ^:export handler [raw-event context cb]
  (let [event (-> raw-event create-api-event to-event)]
    (cb nil (clj->js event))))

(defn -main [] identity)
(set! *main-cli-fn* -main)
