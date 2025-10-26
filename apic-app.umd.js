(function(t,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("@bosch/react-frok"),require("react-router-dom")):typeof define=="function"&&define.amd?define(["exports","@bosch/react-frok","react-router-dom"],i):(t=typeof globalThis<"u"?globalThis:t||self,i(t.ApicApp={},t["@bosch/react-frok"],t["react-router-dom"]))})(this,(function(t,i,x){"use strict";var s={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function l(){if(c)return o;c=1;var n=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function f(k,e,r){var a=null;if(r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),"key"in e){r={};for(var d in e)d!=="key"&&(r[d]=e[d])}else r=e;return e=r.ref,{$$typeof:n,type:k,key:a,ref:e!==void 0?e:null,props:r}}return o.Fragment=h,o.jsx=f,o.jsxs=f,o}var p;function m(){return p||(p=1,s.exports=l()),s.exports}var u=m();function v({shell:n}){return u.jsx("div",{style:{display:"flex",padding:"2rem",gap:"2rem"},children:u.jsx(n.Extension,{name:"dashboard"})})}async function R(n){n.registerMenu(()=>u.jsx(i.SideNavigationItem,{label:"Home",value:"home",icon:"home",link:{as:x.NavLink,to:"/test",activeClassName:"-selected",exact:!0}}),{type:"general"}),n.registerPage("/test",v)}t.setup=R,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
