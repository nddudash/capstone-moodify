(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{104:function(e,n,t){},106:function(e,n,t){},109:function(e,n,t){},110:function(e,n,t){},117:function(e,n,t){},118:function(e,n,t){"use strict";t.r(n);var c=t(0),o=t.n(c),r=t(35),s=t.n(r),a=t(23),i=(t(104),t(105),t.p,t(10)),l=(t(106),t(88)),d=t(77),u="",j="";"localhost:3000"===window.location.host?(j="30bda40009804cc0b810a094d8653182",u="http://localhost:3000/capstonegroup7/"):(j="7a4ffd2d4afc4f4d876826b6d369ab66",u="https://sarahedwards715.github.io/capstonegroup7/");var p={user:{username:""},accessToken:"",accessExpiresIn:null,authUrl:"https://accounts.spotify.com/authorize?client_id="+j+"&redirect_uri="+encodeURIComponent(u)+"&response_type=token&state=standUpLazerous",moodsArray:[]},h="LOGOUT",b="SET_ACCESS_TOKEN",f="SET_ACCESS_EXPIRES_IN",m="SET_MOODS",O=Object(l.a)(Object(d.devtools)(Object(d.redux)((function(e,n){switch(n.type){case"LOGIN":return{user:n.payload};case h:return{user:{},accessToken:"",accessExpiresIn:null};case"GET_ACCESS_TOKEN":return{};case b:return{accessToken:n.payload};case f:return{accessExpiresIn:n.payload};case m:return{moodsArray:n.payload};default:return e}}),p))),x=t(2);var v=function(e){var n=O((function(e){return e.accessToken})),t=(O((function(e){return e.accessExpiresIn})),O((function(e){return e.authUrl}))),o=O((function(e){return e.dispatch}));return Object(c.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,n){if(n){var t=n.split("=");e[t[0]]=decodeURIComponent(t[1])}return e}),{});console.log("Hash:",e);var n=e.access_token;n&&(console.log(n),o({type:b,payload:n}));var t=e.expires_in;t&&(console.log(t),o({type:f,payload:t})),window.location.hash=""}),[]),Object(x.jsxs)("div",{children:["Hello From Landing!",!n&&Object(x.jsx)("a",{className:"authBtn",href:t,children:"Authorize With Spotify"})]})},g=t(132),y="https://api.spotify.com/v1/",C=(t(109),t(110),t(134));var E=function(e){return Object(x.jsx)(C.a,{className:"moodCard",children:Object(x.jsx)(C.a.Content,{children:Object(x.jsx)(C.a.Header,{children:Object(x.jsx)(a.b,{to:"/browse/".concat(e.mood),children:e.mood})})})})};var T=function(e){var n=O((function(e){return e.moodsArray}));return Object(x.jsxs)("div",{className:"moodsListWrapper",children:["Hello from Moodslist",Object(x.jsx)(C.a.Group,{textAlign:"center",className:"moodsContainer",children:n.map((function(e,n){return Object(x.jsx)(E,{mood:e},n)}))})]})};var A=function(e){var n=O((function(e){return e.accessToken})),t=O((function(e){return e.moodsArray})),o=O((function(e){return e.dispatch}));return Object(c.useEffect)((function(){n&&function(e){return fetch(y+"recommendations/available-genre-seeds",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){return e.json()}))}(n).then((function(e){console.log(e),o({type:m,payload:e.genres})}))}),[]),Object(x.jsxs)("div",{className:"browseWrapper",children:[Object(x.jsx)("p",{children:"Hello From Browse"}),0!==(null===t||void 0===t?void 0:t.length)?Object(x.jsx)(T,{}):Object(x.jsx)(g.a,{size:"big",children:" Loading... "})]})};var w=function(e){return Object(x.jsxs)("div",{children:["Hello From Playlist",e.match.params.playlistId]})};var I=function(e){return Object(x.jsx)("div",{children:"404! Page Not Found"})},S=t(65),_=t(133),k=t(135);var H=function(e){console.log(e.song);var n=e.song,t=n.name,c=n.album,o=n.artists,r=n.duration_ms;return n.popularity,n.id,Object(x.jsxs)(_.a.Row,{children:[Object(x.jsx)(_.a.Cell,{children:Object(x.jsx)(k.a,{children:"Add to Playlist"})}),Object(x.jsx)(_.a.Cell,{children:t}),Object(x.jsx)(_.a.Cell,{children:o[0].name}),Object(x.jsx)(_.a.Cell,{children:c.name}),Object(x.jsx)(_.a.Cell,{children:r})]})};var N=function(e){return Object(x.jsx)("div",{className:"songListWrapper",children:Object(x.jsxs)(_.a,{children:[Object(x.jsx)(_.a.Header,{children:Object(x.jsxs)(_.a.Row,{children:[Object(x.jsx)(_.a.HeaderCell,{children:"Add"}),Object(x.jsx)(_.a.HeaderCell,{children:"Track"}),Object(x.jsx)(_.a.HeaderCell,{children:"Artist"}),Object(x.jsx)(_.a.HeaderCell,{children:"Album"}),Object(x.jsx)(_.a.HeaderCell,{children:"Time"})]})}),Object(x.jsx)(_.a.Body,{children:e.songs.map((function(e){return Object(x.jsx)(H,{song:e},e.id)}))})]})})};var L=function(e){var n=Object(c.useState)([]),t=Object(S.a)(n,2),o=t[0],r=t[1],s=O((function(e){return e.accessToken}));return Object(c.useEffect)((function(){(function(e,n){var t=y+"recommendations?limit="+encodeURIComponent(arguments.length>2&&void 0!==arguments[2]?arguments[2]:10)+"&seed_artists="+encodeURIComponent(",")+"&seed_genres="+encodeURIComponent(n)+"&seed_tracks="+encodeURIComponent(",");return fetch(t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){return e.json()}))})(s,e.match.params.mood).then((function(e){console.log(e),r(e.tracks)}))}),[]),Object(c.useEffect)((function(){console.log(o)}),[o]),Object(x.jsxs)("div",{children:["Hello from Mood!",e.match.params.mood,Object(x.jsx)(N,{songs:o})]})};t(117);var U=function(e){var n=O((function(e){return e.accessToken})),t=(O((function(e){return e.user})),O((function(e){return e.dispatch})));return Object(x.jsxs)("div",{className:"navigationWrapper",children:[Object(x.jsx)(a.b,{to:"/",children:"Landing"}),n&&Object(x.jsx)(a.b,{to:"/browse",children:"Browse"}),n&&Object(x.jsx)(a.b,{to:"/playlist/somePlaylist",children:"Some Playlist"}),n&&Object(x.jsx)(a.b,{to:"/",onClick:function(e){t({type:h})},children:"Logout"})]})};var F=function(){var e=O((function(e){return e.accessToken})),n=O((function(e){return e.accessExpiresIn}));return Object(x.jsxs)("div",{className:"App",children:["Hello From App Wrapper",Object(x.jsx)(U,{}),e?Object(x.jsx)("p",{children:e}):Object(x.jsx)("p",{children:"You Are Not Authorized! Login with Spotify!"}),n&&Object(x.jsx)("p",{children:n}),Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/",component:v}),Object(x.jsx)(i.a,{exact:!0,path:"/browse",component:A}),Object(x.jsx)(i.a,{path:"/browse/:mood",component:L}),Object(x.jsx)(i.a,{exact:!0,path:"/playlist/:playlistId",component:w}),Object(x.jsx)(i.a,{path:"*",component:I})]})]})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,137)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),o(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(a.a,{basename:"/capstonegroup7",children:Object(x.jsx)(F,{})})}),document.getElementById("root")),R()}},[[118,1,2]]]);
//# sourceMappingURL=main.494fbbde.chunk.js.map