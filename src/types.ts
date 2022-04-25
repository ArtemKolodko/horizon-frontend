export enum NetworkType {
  ETH = 'ETH',
  ONE = 'ONE'
}

export const NetworkName = {
  [NetworkType.ETH]: 'Ethereum',
  [NetworkType.ONE]: 'Harmony',
}

export enum TokenType {
  erc20 = 'erc20',
  erc721 = 'erc721',
  erc1155 = 'erc1155'
}

export type BridgeToken = {
  symbol: string
  name: string
  type: TokenType
  originAddress: string
  mappingAddress: string
}
