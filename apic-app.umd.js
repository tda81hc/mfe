(function(r,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("@bosch/react-frok"),require("react-router-dom"),require("react")):typeof define=="function"&&define.amd?define(["exports","@bosch/react-frok","react-router-dom","react"],i):(r=typeof globalThis<"u"?globalThis:r||self,i(r.ApicApp={},r["@bosch/react-frok"],r["react-router-dom"]))})(this,(function(r,i,x){"use strict";var s={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function l(){if(c)return o;c=1;var n=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function f(k,e,t){var a=null;if(t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),"key"in e){t={};for(var d in e)d!=="key"&&(t[d]=e[d])}else t=e;return e=t.ref,{$$typeof:n,type:k,key:a,ref:e!==void 0?e:null,props:t}}return o.Fragment=h,o.jsx=f,o.jsxs=f,o}var p;function m(){return p||(p=1,s.exports=l()),s.exports}var u=m();function v({shell:n}){return u.jsx("div",{style:{display:"flex",padding:"2rem",gap:"2rem"},children:u.jsx(n.Extension,{name:"dashboard"})})}async function R(n){n.registerMenu(()=>u.jsx(i.SideNavigationItem,{label:"Home",value:"home",icon:"home",link:{as:x.NavLink,to:"/test",activeClassName:"-selected",exact:!0}}),{type:"general"}),n.registerPage("/test",v)}r.setup=R,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
