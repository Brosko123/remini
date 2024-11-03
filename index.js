#!/usr/bin/env node
"use strict";import r from"express";import s from"./src/params.js";import t from"./src/proxy.js";const o=r();o.get("/",s,t);o.get("/favicon.ico",(r,s)=>s.status(204).end());export default o;
