"use strict";

const fs      = require("fs");
const jwt     = require("jsonwebtoken");

const privateKey = fs.readFileSync("AuthKey_9SLZM9T5F6.p8").toString();
const teamId     = "9SLZM9T5F6";
const keyId      = "9SLZM9T5F6";

const jwtToken = jwt.sign({}, privateKey, {
  algorithm: "ES256",
  expiresIn: "180d",
  issuer: teamId,
  header: {
    alg: "ES256",
    kid: keyId
  }
});

console.log(jwtToken);