(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(17),r=c.n(s),i=(c(24),c(25),c(8)),j=c.n(i),l=c(10),h=c(11),m=c(6),o=(c(27),c(0)),d=function(e){var t=e.teamName,c=e.match,a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return console.log("Raj",s),c?Object(o.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)(m.b,{to:n,children:[Object(o.jsx)("span",{className:"vs",children:" vs"}),Object(o.jsx)("h1",{children:a})]}),Object(o.jsx)("h2",{className:"match-date",children:c.date}),Object(o.jsxs)("h3",{className:"match-venue",children:[" at ",c.venue]}),Object(o.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(o.jsxs)("div",{className:"additional-detais",children:[Object(o.jsx)("h3",{children:"First Innings"}),Object(o.jsx)("p",{children:c.team1}),Object(o.jsx)("h3",{children:"Second Innings"}),Object(o.jsx)("p",{children:c.team2}),Object(o.jsx)("h3",{children:"Man of the match"}),Object(o.jsx)("p",{children:c.playerOfMatch}),Object(o.jsx)("h3",{children:"Umpires"}),Object(o.jsxs)("p",{children:[c.umpire1,",",c.umpire2]})]})]}):null},u=function(e){var t=e.teamName,c=e.match,a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return c?Object(o.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(o.jsxs)(m.b,{to:n,children:[Object(o.jsx)("span",{children:"vs"}),Object(o.jsx)("p",{children:a})]}),Object(o.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}):null},b=c(2),O=(c(37),c(19)),x=function(){var e=Object(a.useState)({matches:[]}),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(b.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c.teamName?Object(o.jsxs)("div",{className:"TeamPage",children:[Object(o.jsx)("div",{className:"team-name-section",children:Object(o.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(o.jsxs)("div",{className:"win-loss-section",children:["Wins/Losses",Object(o.jsx)(O.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:"#a34d5d"},{title:"Wins",value:c.totalWins,color:"#4da375"}]})]}),Object(o.jsxs)("div",{className:"match-detail-section",children:[Object(o.jsx)("h3",{children:"Latest Matches"}),Object(o.jsx)(d,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e,t){return Object(o.jsx)(u,{teamName:c.teamName,match:e},t)})),Object(o.jsx)("div",{className:"more-link",children:Object(o.jsx)("a",{href:"#",children:"More >"})})]}):Object(o.jsx)("h1",{children:"Team Not Found!"})},f=(c(38),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(o.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),p=(c(39),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(b.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(r,"/matches/?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(o.jsxs)("div",{className:"MatchPage",children:[Object(o.jsxs)("div",{className:"year-selector",children:[Object(o.jsx)("h3",{children:" Select Year "}),Object(o.jsx)(f,{teamName:r})]}),Object(o.jsx)("div",{children:c.map((function(e){return Object(o.jsx)(d,{teamName:r,match:e},e.id)}))})]})}),v=(c(40),c(41),function(e){var t=e.teamName;return Object(o.jsx)("div",{className:"TeamTile",children:Object(o.jsx)("h1",{children:Object(o.jsx)(m.b,{to:"teams/".concat(t),children:t})})})}),N=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/teams/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.jsxs)("div",{className:"HomePage",children:[Object(o.jsx)("div",{className:"header-section",children:Object(o.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(o.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(o.jsx)(v,{teamName:e.teamName},e.teamName)}))})]})};var g=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(m.a,{children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/teams/:teamName/matches/:year",children:Object(o.jsx)(p,{})}),Object(o.jsx)(b.a,{path:"/teams/:teamName",children:Object(o.jsx)(x,{})}),Object(o.jsx)(b.a,{path:"/",children:Object(o.jsx)(N,{})})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),w()}},[[42,1,2]]]);
//# sourceMappingURL=main.16c63fb2.chunk.js.map