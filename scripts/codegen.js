/* eslint-disable no-console */
import { join } from "path";
import codegen from "@cosmwasm/ts-codegen";
import { sync as rimraf } from "rimraf";

const contractDir = join(__dirname, "../badges/contracts");
const outPath = join(__dirname, "../src/codegen");
rimraf(outPath);

codegen({
  contracts: [
    {
      name: "hub",
      dir: join(contractDir, "hub"),
    },
    {
      name: "nft",
      dir: join(contractDir, "nft"),
    },
  ],
  outPath,
  options: {
    bundle: {
      bundleFile: "index.ts",
      scope: "contracts",
    },
    types: {
      enabled: true,
    },
    client: {
      enabled: true,
    },
    reactQuery: {
      enabled: true,
      optionalClient: true,
      version: "v4",
      mutations: true,
      queryKeys: true,
    },
    recoil: {
      enabled: false,
    },
    messageComposer: {
      enabled: false,
    },
  },
})
  .then(() => {
    console.log("✨ all done!");
  })
  .catch((e) => {
    console.error(e);
  });
