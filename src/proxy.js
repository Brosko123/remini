"use strict";import e from"lodash";import randomMobileUA from './ua.js'import i from"got";import a from"./shouldCompress.js";import c from"./redirect.js";import d from"./compress.js";import p from"./copyHeaders.js";import{CookieJar as r}from"tough-cookie";const f=new r;const{pick:l}=e;export default async function proxy(t,s){const e=t.headers["x-forwarded-for"]||t.ip;if(["127.0.0.1","::1"].includes(e)){return c(t,s)}try{const n={headers:{...l(t.headers,["cookie","dnt","referer","range"]),"user-agent":randomMobileUA()},maxRedirects:4,followRedirect:false,https:{rejectUnauthorized:false},cookieJar:f,timeout:{response:6600},decompress:true};let o=await i.stream(t.params.url,n);o.on("response",e=>{if(e.statusCode>=400)return c(t,s);if(e.statusCode>=300&&e.headers.location)return c(t,s);p(e,s);s.setHeader("content-encoding","identity");s.setHeader("Access-Control-Allow-Origin","*");s.setHeader("Cross-Origin-Resource-Policy","cross-origin");s.setHeader("Cross-Origin-Embedder-Policy","unsafe-none");t.params.originType=e.headers["content-type"]||"";t.params.originSize=e.headers["content-length"]||"0";o.on("error",()=>t.socket.destroy());if(a(t)){return d(t,s,o)}else{s.setHeader("x-proxy-bypass",1);for(const r of["accept-ranges","content-type","content-length","content-range"]){if(r in e.headers)s.setHeader(r,e.headers[r])}return o.pipe(s)}})}catch(r){if(r.code==="ERR_INVALID_URL"){return s.status(400).send("Invalid URL")}c(t,s);console.error(r)}}
