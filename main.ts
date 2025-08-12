import Vue from "vue";
import Router from "vue-router";
import * as Sentry from "@sentry/vue";

Sentry.init({
  app,
  dsn: "https://e1342180299b21a6e2f0eb98c81ffd8d@o4509250546696192.ingest.de.sentry.io/4509250550104144",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");