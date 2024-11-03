"use strict";export default function copyHeaders(e,t){for(const[o,c]of Object.entries(e.headers)){try{t.setHeader(o,c)}catch(s){console.log(s.message)}}}
