(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26ae79aa"],{"78bc":function(e,t,n){},c192:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calendar-month"},[n("div",{staticClass:"calendar-month-header"},[n("CalendarMonthYearSelected"),n("CalendarMonthSelector")],1),n("CalendarHeader"),n("ol",{staticClass:"days-grid"},e._l(e.days,(function(e){return n("CalendarMonthDay",{key:e.date,attrs:{day:e}})})),1),e._v(" "+e._s(e.offline())+" ")],1)},r=[],d=n("2909"),s=(n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),function(){return n.e("chunk-e27be1cc").then(n.bind(null,"c75c"))}),c=function(){return n.e("chunk-70d7b266").then(n.bind(null,"1396"))},i=function(){return n.e("chunk-2d0c1d87").then(n.bind(null,"487d"))},o=function(){return Promise.all([n.e("chunk-7f9fb8e0"),n.e("chunk-07e06f8e")]).then(n.bind(null,"1048"))},l={name:"CalendarMonth",components:{CalendarHeader:s,CalendarMonthDay:c,CalendarMonthYearSelected:i,CalendarMonthSelector:o},data:function(){return{}},created:function(){this.$store.dispatch("LoadCalendarWithReminder"),this.$route.params&&this.$route.params.text&&(this.$toast.success(this.$route.params.text),this.$route.params.text=null)},computed:{selectedDate:function(){return this.$store.getters.dateSelected},days:function(){if(this.$store.getters.forceUpdate){var e=this.$store.getters.getCalendarAndSelectedDate,t=e.calendar,n=e.reminders;return t.map((function(e){e.reminders=n.filter((function(t){return t.date==e.date}))})),Object(d["a"])(t)}}},methods:{offline:function(){this.$store.getters.offline&&(this.$store.dispatch("setOffline"),this.$toast.error("Offline version"))}},watch:{}},u=l,h=(n("d197"),n("2877")),f=Object(h["a"])(u,a,r,!1,null,"274eda7c",null);t["default"]=f.exports},d197:function(e,t,n){"use strict";n("78bc")}}]);
//# sourceMappingURL=chunk-26ae79aa.279d5b2c.js.map