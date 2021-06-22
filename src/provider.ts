import { BaseProvider } from "@ethersproject/providers";

import { Call, all as callAll } from "./call";
import { getEthBalance } from "./calls";

export default class Provider {
  provider?: BaseProvider;
  multicallAddress: string;

  constructor() {
    this.multicallAddress = getAddress(1);
  }

  async init(provider: BaseProvider) {
    this.provider = provider;
    const network = await provider.getNetwork();
    this.multicallAddress = getAddress(network.chainId);
  }

  getEthBalance(address: string) {
    if (!this.provider) {
      console.error("Provider should be initialized before use.");
    }
    return getEthBalance(address, this.multicallAddress);
  }

  async all(calls: Call[], block?: number) {
    if (!this.provider) {
      console.error("Provider should be initialized before use.");
    }
    const provider = this.provider as BaseProvider;
    return await callAll(provider, this.multicallAddress, calls, block);
  }
}

function getAddress(chainId: number): string {
  const addressMap: Record<number, string> = {
    56: "0x41263cba59eb80dc200f3e2544eda4ed6a90e76c",
    97: "0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C",
  };
  const address = addressMap[chainId];
  return address;
}
