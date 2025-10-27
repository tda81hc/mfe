(function(t,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("@bosch/react-frok"),require("react-router-dom")):typeof define=="function"&&define.amd?define(["exports","@bosch/react-frok","react-router-dom"],i):(t=typeof globalThis<"u"?globalThis:t||self,i(t.ApicApp={},t["@bosch/react-frok"],t["react-router-dom"]))})(this,(function(t,i,l){"use strict";var u={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function x(){if(c)return n;c=1;var o=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function f(k,e,r){var s=null;if(r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),"key"in e){r={};for(var a in e)a!=="key"&&(r[a]=e[a])}else r=e;return e=r.ref,{$$typeof:o,type:k,key:s,ref:e!==void 0?e:null,props:r}}return n.Fragment=h,n.jsx=f,n.jsxs=f,n}var d;function v(){return d||(d=1,u.exports=x()),u.exports}var p=v();function m(){return p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh",fontSize:"24px"},children:"Hello APIC App"})}async function R(o){o.registerMenu(()=>p.jsx(i.SideNavigationItem,{label:"APIC",value:"apic",icon:"document",link:{as:l.NavLink,to:"/apic",activeClassName:"-selected",exact:!0}}),{type:"general"}),o.registerPage("/apic",m)}t.setup=R,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
