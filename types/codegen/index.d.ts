/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.13.4.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import * as _1 from "./Hub.client";
import * as _3 from "./Nft.client";
export declare namespace contracts {
    const Hub: {
        HubQueryClient: typeof _1.HubQueryClient;
        HubClient: typeof _1.HubClient;
    };
    const Nft: {
        NftQueryClient: typeof _3.NftQueryClient;
        NftClient: typeof _3.NftClient;
    };
}