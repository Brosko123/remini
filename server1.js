#!/usr/bin/env node
"use strict";import s from"express";import o from"./src/params.js";import r from"./src/proxy.js";const t=process.env.PORT||8080;const e=s();e.get("/",o,r);e.get("/favicon.ico",(s,o)=>o.status(204).end());e.listen(t,()=>console.log(`Listening on ${t}`));
