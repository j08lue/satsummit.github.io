"use strict";(self.webpackChunksatsummit_io=self.webpackChunksatsummit_io||[]).push([[9867],{6091:function(e,t,n){n.r(t),n.d(t,{Head:function(){return T},default:function(){return v}});var o=n(4506),r=n(6540),a=n(7437),i=n(5788),d=n(6946),c=n(8340),s=n(6287),l=n(6988),m=n(1856),u=n(8661),p=n(5026),g=n(1460),f=n(4472),E=n(7369),b=n(2046),y=n(8799);function v(e){const{allEvent:t,edition:n}=e.data,u=t.nodes.reduce(((e,t)=>{var r,a;const d=(0,E.y)(t.date),c=(0,i.GP)(d,"yyyy-MM-dd"),s=(0,i.GP)(d,(null==n||null===(r=n.format)||void 0===r?void 0:r.event_time)||"HH:mm"),l=[].concat((0,o.A)((null===(a=e[c])||void 0===a?void 0:a[s])||[]),[t]);return{...e,[c]:{...e[c]||{},[s]:l}}}),{}),v=(0,d.A)({base:"5rem",md:"6rem"});return(0,r.useEffect)((()=>{window.scrollTo(0,0),setTimeout((()=>{var e;null===(e=document.getElementById(location.hash.slice(1)))||void 0===e||e.scrollIntoView()}),g.Z+100)}),[]),r.createElement(p.A,{pageProps:e},r.createElement(a.mL,{styles:{html:{scrollPaddingTop:v}}}),r.createElement(y.WB,{title:"Fringe Events",lead:"Happenings for the SatSummit Community."}),r.createElement(m.d,{py:16},Object.entries(u).map((e=>{let[t,n]=e;return r.createElement(r.Fragment,{key:t},r.createElement(c.D,{size:"2xl",gridColumn:"content-start/content-end",_notFirst:{pt:8},sx:{"& + .agenda-time-group":{".agenda-time, .agenda-events":{border:"none !important",paddingTop:"0 !important"}}}},(0,i.GP)((0,b.zW)(t),"EEEE, LLL dd")),Object.entries(n).map((e=>{let[t,n]=e;return r.createElement(f.r,{key:t,className:"agenda-time-group",direction:"up",triggerOnce:!0,duration:g.Z,gridColumn:"content-start / content-end",_notFirst:{".agenda-time":{borderTop:"8px solid",borderTopColor:"base.200a",paddingTop:8,mt:{base:2,md:0}},".agenda-events":{borderTop:{md:"8px solid"},borderTopColor:{md:"base.200a"},paddingTop:{md:8}}}},r.createElement(m.d,{as:"section",hugGrid:{base:["content-start","content-end"]}},r.createElement(s.az,{as:"header",className:"agenda-time",gridColumn:{base:"content-start/content-end",md:"content-start/content-2",lg:"content-start/content-3"}},r.createElement(c.D,{as:"h3",size:"md"},t)),r.createElement(m.d,{as:"section",className:"agenda-events",hugGrid:{base:["content-start","content-end"],md:["content-2","content-end"],lg:["content-3","content-end"]}},r.createElement(m.d,{as:l._J,listStyleType:"none",hugGrid:{base:["content-start","content-end"],md:["content-2","content-8"],lg:["content-3","content-11"]},display:"flex",flexFlow:"column nowrap",ml:0},n.map((e=>r.createElement(l.ck,{key:e.id,gridColumn:"1/-1",_notFirst:{borderTop:"4px solid",borderTopColor:"base.200a",pt:{base:4,md:8,lg:10}}},r.createElement(g.P,{linkTo:"/fringe/",startingHLevel:4,cId:e.cId,title:e.title,type:e.type,date:e.date,room:e.room,people:e.people}))))))))})))}))))}const T=e=>r.createElement(u.A,{title:"Fringe Events",description:"Happenings for the SatSummit Community.",edition:e.data.edition})},2046:function(e,t,n){n.d(t,{MX:function(){return i},zW:function(){return a}});var o=n(4506),r=n(5788);function a(e){if("string"!=typeof e)return new Date("invalid");const t=e.match(/^([0-9]{4})(?:-([0-9]{1,2}))?$/),n=e.match(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/);if(t||n){const t=new Date(e);if(isNaN(t.getTime()))return t;const n=t.getTimezoneOffset();return t.setTime(t.getTime()+60*n*1e3),t}return new Date(e.replace(/([0-9])(st|nd|rd|th)/g,"$1"))}function i(e){const t=e.reduce(((e,t)=>{const n=t.getFullYear(),r=t.getMonth(),a=e[n]||{},i=a[r]||[];return{...e,[n]:{...a,[r]:[].concat((0,o.A)(i),[t])}}}),{});return Object.entries(t).map((e=>{let[t,n]=e;return`${Object.entries(n).map((e=>{let[,t]=e;const n=t.map((e=>(0,r.GP)(e,"dd"))).join(" & ");return`${(0,r.GP)(t[0],"MMMM")} ${n}`})).join(" & ")}, ${t}`})).join(" & ")}}}]);
//# sourceMappingURL=component---src-templates-fringe-hub-tsx-90839a58a4ffde1accb1.js.map