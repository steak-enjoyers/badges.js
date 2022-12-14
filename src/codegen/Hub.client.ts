/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.13.4.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { MintRule, BadgeResponse, Metadata, Trait, BadgesResponse, Decimal, ConfigResponse, ExecuteMsg, InstantiateMsg, KeyResponse, KeysResponse, OwnerResponse, OwnersResponse, QueryMsg } from "./Hub.types";
export interface HubReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  badge: ({
    id
  }: {
    id: number;
  }) => Promise<BadgeResponse>;
  badges: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }) => Promise<BadgesResponse>;
  key: ({
    id,
    pubkey
  }: {
    id: number;
    pubkey: string;
  }) => Promise<KeyResponse>;
  keys: ({
    id,
    limit,
    startAfter
  }: {
    id: number;
    limit?: number;
    startAfter?: string;
  }) => Promise<KeysResponse>;
  owner: ({
    id,
    user
  }: {
    id: number;
    user: string;
  }) => Promise<OwnerResponse>;
  owners: ({
    id,
    limit,
    startAfter
  }: {
    id: number;
    limit?: number;
    startAfter?: string;
  }) => Promise<OwnersResponse>;
}
export class HubQueryClient implements HubReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.badge = this.badge.bind(this);
    this.badges = this.badges.bind(this);
    this.key = this.key.bind(this);
    this.keys = this.keys.bind(this);
    this.owner = this.owner.bind(this);
    this.owners = this.owners.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  badge = async ({
    id
  }: {
    id: number;
  }): Promise<BadgeResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      badge: {
        id
      }
    });
  };
  badges = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }): Promise<BadgesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      badges: {
        limit,
        start_after: startAfter
      }
    });
  };
  key = async ({
    id,
    pubkey
  }: {
    id: number;
    pubkey: string;
  }): Promise<KeyResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      key: {
        id,
        pubkey
      }
    });
  };
  keys = async ({
    id,
    limit,
    startAfter
  }: {
    id: number;
    limit?: number;
    startAfter?: string;
  }): Promise<KeysResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      keys: {
        id,
        limit,
        start_after: startAfter
      }
    });
  };
  owner = async ({
    id,
    user
  }: {
    id: number;
    user: string;
  }): Promise<OwnerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owner: {
        id,
        user
      }
    });
  };
  owners = async ({
    id,
    limit,
    startAfter
  }: {
    id: number;
    limit?: number;
    startAfter?: string;
  }): Promise<OwnersResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owners: {
        id,
        limit,
        start_after: startAfter
      }
    });
  };
}
export interface HubInterface extends HubReadOnlyInterface {
  contractAddress: string;
  sender: string;
  createBadge: ({
    expiry,
    manager,
    maxSupply,
    metadata,
    rule,
    transferrable
  }: {
    expiry?: number;
    manager: string;
    maxSupply?: number;
    metadata: Metadata;
    rule: MintRule;
    transferrable: boolean;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  editBadge: ({
    id,
    metadata
  }: {
    id: number;
    metadata: Metadata;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  addKeys: ({
    id,
    keys
  }: {
    id: number;
    keys: string[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  purgeKeys: ({
    id,
    limit
  }: {
    id: number;
    limit?: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  purgeOwners: ({
    id,
    limit
  }: {
    id: number;
    limit?: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  mintByMinter: ({
    id,
    owners
  }: {
    id: number;
    owners: string[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  mintByKey: ({
    id,
    owner,
    signature
  }: {
    id: number;
    owner: string;
    signature: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  mintByKeys: ({
    id,
    owner,
    pubkey,
    signature
  }: {
    id: number;
    owner: string;
    pubkey: string;
    signature: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  setNft: ({
    nft
  }: {
    nft: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class HubClient extends HubQueryClient implements HubInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createBadge = this.createBadge.bind(this);
    this.editBadge = this.editBadge.bind(this);
    this.addKeys = this.addKeys.bind(this);
    this.purgeKeys = this.purgeKeys.bind(this);
    this.purgeOwners = this.purgeOwners.bind(this);
    this.mintByMinter = this.mintByMinter.bind(this);
    this.mintByKey = this.mintByKey.bind(this);
    this.mintByKeys = this.mintByKeys.bind(this);
    this.setNft = this.setNft.bind(this);
  }

  createBadge = async ({
    expiry,
    manager,
    maxSupply,
    metadata,
    rule,
    transferrable
  }: {
    expiry?: number;
    manager: string;
    maxSupply?: number;
    metadata: Metadata;
    rule: MintRule;
    transferrable: boolean;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create_badge: {
        expiry,
        manager,
        max_supply: maxSupply,
        metadata,
        rule,
        transferrable
      }
    }, fee, memo, funds);
  };
  editBadge = async ({
    id,
    metadata
  }: {
    id: number;
    metadata: Metadata;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      edit_badge: {
        id,
        metadata
      }
    }, fee, memo, funds);
  };
  addKeys = async ({
    id,
    keys
  }: {
    id: number;
    keys: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_keys: {
        id,
        keys
      }
    }, fee, memo, funds);
  };
  purgeKeys = async ({
    id,
    limit
  }: {
    id: number;
    limit?: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      purge_keys: {
        id,
        limit
      }
    }, fee, memo, funds);
  };
  purgeOwners = async ({
    id,
    limit
  }: {
    id: number;
    limit?: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      purge_owners: {
        id,
        limit
      }
    }, fee, memo, funds);
  };
  mintByMinter = async ({
    id,
    owners
  }: {
    id: number;
    owners: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_by_minter: {
        id,
        owners
      }
    }, fee, memo, funds);
  };
  mintByKey = async ({
    id,
    owner,
    signature
  }: {
    id: number;
    owner: string;
    signature: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_by_key: {
        id,
        owner,
        signature
      }
    }, fee, memo, funds);
  };
  mintByKeys = async ({
    id,
    owner,
    pubkey,
    signature
  }: {
    id: number;
    owner: string;
    pubkey: string;
    signature: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_by_keys: {
        id,
        owner,
        pubkey,
        signature
      }
    }, fee, memo, funds);
  };
  setNft = async ({
    nft
  }: {
    nft: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_nft: {
        nft
      }
    }, fee, memo, funds);
  };
}