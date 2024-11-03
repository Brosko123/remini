#!/usr/bin/env node
"use strict";import helmet from "helmet";import express from"express";import pp from"./pp.js";import po from"./po.js";const PORT=process.env.PORT||8080;const app=express();app.use(helmet());app.disable('x-powered-by');app.get("/",pp,po);app.get("/favicon.ico",(req,res)=>res.status(204).end());app.listen(PORT,()=>console.log(`Listening on ${PORT}`));
