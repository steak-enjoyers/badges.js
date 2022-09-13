/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.13.4.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Expiration, AllNftInfoResponse, OwnerOfResponse, AllOperatorsResponse, AllTokensResponse, ApprovalResponse, ApprovalsResponse, CollectionInfoResponse, ContractInfoResponse, Binary, Empty, MinterResponse, NftInfoResponse, NumTokensResponse, TokensResponse } from "./Nft.types";
export interface NftReadOnlyInterface {
    contractAddress: string;
    ownerOf: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<OwnerOfResponse>;
    approval: ({ includeExpired, spender, tokenId, }: {
        includeExpired?: boolean;
        spender: string;
        tokenId: string;
    }) => Promise<ApprovalResponse>;
    approvals: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<ApprovalsResponse>;
    allOperators: ({ includeExpired, limit, owner, startAfter, }: {
        includeExpired?: boolean;
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<AllOperatorsResponse>;
    numTokens: () => Promise<NumTokensResponse>;
    contractInfo: () => Promise<ContractInfoResponse>;
    nftInfo: ({ tokenId }: {
        tokenId: string;
    }) => Promise<NftInfoResponse>;
    allNftInfo: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<AllNftInfoResponse>;
    tokens: ({ limit, owner, startAfter, }: {
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<TokensResponse>;
    allTokens: ({ limit, startAfter, }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<AllTokensResponse>;
    minter: () => Promise<MinterResponse>;
    collectionInfo: () => Promise<CollectionInfoResponse>;
}
export declare class NftQueryClient implements NftReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    ownerOf: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<OwnerOfResponse>;
    approval: ({ includeExpired, spender, tokenId, }: {
        includeExpired?: boolean;
        spender: string;
        tokenId: string;
    }) => Promise<ApprovalResponse>;
    approvals: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<ApprovalsResponse>;
    allOperators: ({ includeExpired, limit, owner, startAfter, }: {
        includeExpired?: boolean;
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<AllOperatorsResponse>;
    numTokens: () => Promise<NumTokensResponse>;
    contractInfo: () => Promise<ContractInfoResponse>;
    nftInfo: ({ tokenId }: {
        tokenId: string;
    }) => Promise<NftInfoResponse>;
    allNftInfo: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<AllNftInfoResponse>;
    tokens: ({ limit, owner, startAfter, }: {
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<TokensResponse>;
    allTokens: ({ limit, startAfter, }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<AllTokensResponse>;
    minter: () => Promise<MinterResponse>;
    collectionInfo: () => Promise<CollectionInfoResponse>;
}
export interface NftInterface extends NftReadOnlyInterface {
    contractAddress: string;
    sender: string;
    ready: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    transferNft: ({ recipient, tokenId, }: {
        recipient: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    sendNft: ({ contract, msg, tokenId, }: {
        contract: string;
        msg: Binary;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    approve: ({ expires, spender, tokenId, }: {
        expires?: Expiration;
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    revoke: ({ spender, tokenId, }: {
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    approveAll: ({ expires, operator, }: {
        expires?: Expiration;
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    revokeAll: ({ operator, }: {
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    mint: ({ extension, owner, tokenId, tokenUri, }: {
        extension?: Empty;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    burn: ({ tokenId, }: {
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class NftClient extends NftQueryClient implements NftInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    ready: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    transferNft: ({ recipient, tokenId, }: {
        recipient: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    sendNft: ({ contract, msg, tokenId, }: {
        contract: string;
        msg: Binary;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    approve: ({ expires, spender, tokenId, }: {
        expires?: Expiration;
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    revoke: ({ spender, tokenId, }: {
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    approveAll: ({ expires, operator, }: {
        expires?: Expiration;
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    revokeAll: ({ operator, }: {
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    mint: ({ extension, owner, tokenId, tokenUri, }: {
        extension?: Empty;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    burn: ({ tokenId, }: {
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
