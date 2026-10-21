export interface MasterCatalogEntry {
  id: string;
  name: string;
  family: 'EVM' | 'UTXO' | 'MOVE' | 'COSMOS_IBC' | 'SVM' | 'SUBSTRATE' | 'NEAR' | 'DISTINCT_L1';
  tier: 'L1' | 'L2' | 'L3' | 'Sidechain' | 'Appchain';
  chainId: string | number;
  nativeToken: string;
}

// Full Institutional Master Catalog Index
export const MASTER_BLOCKCHAIN_CATALOG: MasterCatalogEntry[] = [
  // --- EVM L1s & Independent Chains ---
  { id: 'ETH', name: 'Ethereum Mainnet', family: 'EVM', tier: 'L1', chainId: 1, nativeToken: 'ETH' },
  { id: 'BSC', name: 'BNB Smart Chain', family: 'EVM', tier: 'L1', chainId: 56, nativeToken: 'BNB' },
  { id: 'AVAX', name: 'Avalanche C-Chain', family: 'EVM', tier: 'L1', chainId: 43114, nativeToken: 'AVAX' },
  { id: 'POLYGON', name: 'Polygon PoS', family: 'EVM', tier: 'Sidechain', chainId: 137, nativeToken: 'POL' },
  { id: 'GNOSIS', name: 'Gnosis Chain', family: 'EVM', tier: 'L1', chainId: 100, nativeToken: 'xDAI' },
  { id: 'SONIC', name: 'Sonic (Fantom)', family: 'EVM', tier: 'L1', chainId: 146, nativeToken: 'S' },
  { id: 'BERA', name: 'Berachain', family: 'EVM', tier: 'L1', chainId: 80094, nativeToken: 'BERA' },
  { id: 'MONAD', name: 'Monad', family: 'EVM', tier: 'L1', chainId: 143, nativeToken: 'MON' },
  { id: 'KAIA', name: 'Kaia Network', family: 'EVM', tier: 'L1', chainId: 8217, nativeToken: 'KAIA' },
  { id: 'CRONOS', name: 'Cronos EVM', family: 'EVM', tier: 'L1', chainId: 25, nativeToken: 'CRO' },
  { id: 'FTM', name: 'Fantom Opera', family: 'EVM', tier: 'L1', chainId: 250, nativeToken: 'FTM' },
  { id: 'CELO', name: 'Celo', family: 'EVM', tier: 'L1', chainId: 42220, nativeToken: 'CELO' },
  { id: 'GLMR', name: 'Moonbeam', family: 'EVM', tier: 'L1', chainId: 1284, nativeToken: 'GLMR' },
  { id: 'MOVR', name: 'Moonriver', family: 'EVM', tier: 'L1', chainId: 1285, nativeToken: 'MOVR' },
  { id: 'ASTR', name: 'Astar Network', family: 'EVM', tier: 'L1', chainId: 592, nativeToken: 'ASTR' },
  { id: 'KAVA', name: 'Kava EVM', family: 'EVM', tier: 'L1', chainId: 2222, nativeToken: 'KAVA' },
  { id: 'ROSE', name: 'Oasis Sapphire', family: 'EVM', tier: 'L1', chainId: 23294, nativeToken: 'ROSE' },
  { id: 'TLOS', name: 'Telos EVM', family: 'EVM', tier: 'L1', chainId: 40, nativeToken: 'TLOS' },
  { id: 'SYS', name: 'Syscoin NEVM', family: 'EVM', tier: 'L1', chainId: 57, nativeToken: 'SYS' },
  { id: 'XDC', name: 'XDC Network', family: 'EVM', tier: 'L1', chainId: 50, nativeToken: 'XDC' },
  { id: 'CORE', name: 'Core DAO', family: 'EVM', tier: 'L1', chainId: 1116, nativeToken: 'CORE' },
  { id: 'FLR', name: 'Flare Network', family: 'EVM', tier: 'L1', chainId: 14, nativeToken: 'FLR' },
  { id: 'SGB', name: 'Songbird', family: 'EVM', tier: 'L1', chainId: 19, nativeToken: 'SGB' },

  // --- EVM L2 Rollups ---
  { id: 'BASE', name: 'Base', family: 'EVM', tier: 'L2', chainId: 8453, nativeToken: 'ETH' },
  { id: 'ARB', name: 'Arbitrum One', family: 'EVM', tier: 'L2', chainId: 42161, nativeToken: 'ETH' },
  { id: 'NOVA', name: 'Arbitrum Nova', family: 'EVM', tier: 'L2', chainId: 42170, nativeToken: 'ETH' },
  { id: 'OP', name: 'OP Mainnet', family: 'EVM', tier: 'L2', chainId: 10, nativeToken: 'ETH' },
  { id: 'BLAST', name: 'Blast', family: 'EVM', tier: 'L2', chainId: 81457, nativeToken: 'ETH' },
  { id: 'ZKSYNC', name: 'zkSync Era', family: 'EVM', tier: 'L2', chainId: 324, nativeToken: 'ETH' },
  { id: 'LINEA', name: 'Linea', family: 'EVM', tier: 'L2', chainId: 59144, nativeToken: 'ETH' },
  { id: 'SCROLL', name: 'Scroll', family: 'EVM', tier: 'L2', chainId: 534352, nativeToken: 'ETH' },
  { id: 'MANTLE', name: 'Mantle', family: 'EVM', tier: 'L2', chainId: 5000, nativeToken: 'MNT' },
  { id: 'WORLD', name: 'World Chain', family: 'EVM', tier: 'L2', chainId: 480, nativeToken: 'ETH' },
  { id: 'ABSTRACT', name: 'Abstract', family: 'EVM', tier: 'L2', chainId: 2741, nativeToken: 'ETH' },
  { id: 'HYPE_EVM', name: 'HyperEVM', family: 'EVM', tier: 'L2', chainId: 999, nativeToken: 'HYPE' },
  { id: 'MANTA', name: 'Manta Pacific', family: 'EVM', tier: 'L2', chainId: 169, nativeToken: 'ETH' },
  { id: 'METIS', name: 'Metis Andromeda', family: 'EVM', tier: 'L2', chainId: 1088, nativeToken: 'METIS' },
  { id: 'MODE', name: 'Mode Network', family: 'EVM', tier: 'L2', chainId: 34443, nativeToken: 'ETH' },
  { id: 'TAIKO', name: 'Taiko', family: 'EVM', tier: 'L2', chainId: 167000, nativeToken: 'ETH' },
  { id: 'POL_ZKEVM', name: 'Polygon zkEVM', family: 'EVM', tier: 'L2', chainId: 1101, nativeToken: 'ETH' },
  { id: 'ZORA', name: 'Zora Network', family: 'EVM', tier: 'L2', chainId: 7777777, nativeToken: 'ETH' },
  { id: 'LYRA', name: 'Lyra Chain', family: 'EVM', tier: 'L2', chainId: 957, nativeToken: 'ETH' },

  // --- EVM L3 Appchains ---
  { id: 'DEGEN', name: 'Degen Chain', family: 'EVM', tier: 'L3', chainId: 666666666, nativeToken: 'DEGEN' },
  { id: 'XAI', name: 'Xai Orbit', family: 'EVM', tier: 'L3', chainId: 660279, nativeToken: 'XAI' },
  { id: 'APE', name: 'ApeChain', family: 'EVM', tier: 'L3', chainId: 33139, nativeToken: 'APE' },
  { id: 'SANKO', name: 'Sanko Dream Machine', family: 'EVM', tier: 'L3', chainId: 1996, nativeToken: 'DMT' },
  { id: 'FRAME', name: 'Frame L3', family: 'EVM', tier: 'L3', chainId: 6841, nativeToken: 'ETH' },

  // --- UTXO Family ---
  { id: 'BTC', name: 'Bitcoin', family: 'UTXO', tier: 'L1', chainId: 'btc-mainnet', nativeToken: 'BTC' },
  { id: 'LTC', name: 'Litecoin', family: 'UTXO', tier: 'L1', chainId: 'ltc-mainnet', nativeToken: 'LTC' },
  { id: 'DOGE', name: 'Dogecoin', family: 'UTXO', tier: 'L1', chainId: 'doge-mainnet', nativeToken: 'DOGE' },
  { id: 'BCH', name: 'Bitcoin Cash', family: 'UTXO', tier: 'L1', chainId: 'bch-mainnet', nativeToken: 'BCH' },
  { id: 'ADA', name: 'Cardano', family: 'UTXO', tier: 'L1', chainId: 'ada-mainnet', nativeToken: 'ADA' },
  { id: 'KAS', name: 'Kaspa', family: 'UTXO', tier: 'L1', chainId: 'kaspa-mainnet', nativeToken: 'KAS' },
  { id: 'RVN', name: 'Ravencoin', family: 'UTXO', tier: 'L1', chainId: 'rvn-mainnet', nativeToken: 'RVN' },
  { id: 'DASH', name: 'Dash', family: 'UTXO', tier: 'L1', chainId: 'dash-mainnet', nativeToken: 'DASH' },
  { id: 'ZEC', name: 'Zcash', family: 'UTXO', tier: 'L1', chainId: 'zec-mainnet', nativeToken: 'ZEC' },
  { id: 'RSK', name: 'Rootstock (RSK)', family: 'UTXO', tier: 'Sidechain', chainId: 30, nativeToken: 'RBTC' },
  { id: 'STX', name: 'Stacks L2', family: 'UTXO', tier: 'L2', chainId: 'stx-mainnet', nativeToken: 'STX' },
  { id: 'LIQUID', name: 'Liquid Network', family: 'UTXO', tier: 'L2', chainId: 'liquid-mainnet', nativeToken: 'L-BTC' },
  { id: 'MERLIN', name: 'Merlin Chain', family: 'UTXO', tier: 'L2', chainId: 4200, nativeToken: 'BTC' },
  { id: 'BSQ', name: 'B² Network', family: 'UTXO', tier: 'L2', chainId: 223, nativeToken: 'BTC' },
  { id: 'BB', name: 'BounceBit', family: 'UTXO', tier: 'L2', chainId: 6001, nativeToken: 'BB' },

  // --- Move VM Family ---
  { id: 'SUI', name: 'Sui', family: 'MOVE', tier: 'L1', chainId: 'sui-mainnet', nativeToken: 'SUI' },
  { id: 'APT', name: 'Aptos', family: 'MOVE', tier: 'L1', chainId: 'aptos-mainnet', nativeToken: 'APT' },

  // --- Cosmos SDK & IBC Family ---
  { id: 'ATOM', name: 'Cosmos Hub', family: 'COSMOS_IBC', tier: 'L1', chainId: 'cosmoshub-4', nativeToken: 'ATOM' },
  { id: 'OSMO', name: 'Osmosis', family: 'COSMOS_IBC', tier: 'L1', chainId: 'osmosis-1', nativeToken: 'OSMO' },
  { id: 'INJ', name: 'Injective', family: 'COSMOS_IBC', tier: 'L1', chainId: 'injective-1', nativeToken: 'INJ' },
  { id: 'TIA', name: 'Celestia', family: 'COSMOS_IBC', tier: 'L1', chainId: 'celestia', nativeToken: 'TIA' },
  { id: 'SEI', name: 'Sei Network', family: 'COSMOS_IBC', tier: 'L1', chainId: 'sev-1', nativeToken: 'SEI' },
  { id: 'NOBLE', name: 'Noble (USDC)', family: 'COSMOS_IBC', tier: 'Appchain', chainId: 'noble-1', nativeToken: 'USDC' },
  { id: 'AKT', name: 'Akash Network', family: 'COSMOS_IBC', tier: 'L1', chainId: 'akashnet-2', nativeToken: 'AKT' },
  { id: 'STARS', name: 'Stargaze', family: 'COSMOS_IBC', tier: 'Appchain', chainId: 'stargaze-1', nativeToken: 'STARS' },
  { id: 'AXL', name: 'Axelar', family: 'COSMOS_IBC', tier: 'L1', chainId: 'axelar-dojo-1', nativeToken: 'AXL' },
  { id: 'KUJI', name: 'Kujira', family: 'COSMOS_IBC', tier: 'L1', chainId: 'kaiyo-1', nativeToken: 'KUJI' },
  { id: 'DYM', name: 'Dymension Hub', family: 'COSMOS_IBC', tier: 'L1', chainId: 'dymension_1100-1', nativeToken: 'DYM' },
  { id: 'SCRT', name: 'Secret Network', family: 'COSMOS_IBC', tier: 'L1', chainId: 'secret-4', nativeToken: 'SCRT' },
  { id: 'EVMOS', name: 'Evmos', family: 'COSMOS_IBC', tier: 'L1', chainId: 'evmos_9001-2', nativeToken: 'EVMOS' },
  { id: 'JUNO', name: 'Juno', family: 'COSMOS_IBC', tier: 'L1', chainId: 'juno-1', nativeToken: 'JUNO' },
  { id: 'XPRT', name: 'Persistence One', family: 'COSMOS_IBC', tier: 'L1', chainId: 'core-1', nativeToken: 'XPRT' },
  { id: 'DVPN', name: 'Sentinel', family: 'COSMOS_IBC', tier: 'L1', chainId: 'sentinelhub-2', nativeToken: 'DVPN' },
  { id: 'SOMM', name: 'Sommelier', family: 'COSMOS_IBC', tier: 'Appchain', chainId: 'sommelier-3', nativeToken: 'SOMM' },
  { id: 'MARS', name: 'Mars Protocol', family: 'COSMOS_IBC', tier: 'Appchain', chainId: 'mars-1', nativeToken: 'MARS' },
  { id: 'BLD', name: 'Agoric', family: 'COSMOS_IBC', tier: 'L1', chainId: 'agoric-3', nativeToken: 'BLD' },
  { id: 'BBN', name: 'Babylon Staking', family: 'COSMOS_IBC', tier: 'L1', chainId: 'bbn-1', nativeToken: 'BBN' },
  { id: 'ARCH', name: 'Archway', family: 'COSMOS_IBC', tier: 'L1', chainId: 'archway-1', nativeToken: 'ARCH' },

  // --- Solana SVM Family ---
  { id: 'SOL', name: 'Solana', family: 'SVM', tier: 'L1', chainId: 'solana-mainnet', nativeToken: 'SOL' },
  { id: 'SOON', name: 'SOON (SVM L2)', family: 'SVM', tier: 'L2', chainId: 'soon-mainnet', nativeToken: 'SOON' },
  { id: 'ECLIPSE', name: 'Eclipse (SVM on ETH)', family: 'SVM', tier: 'L2', chainId: 92863, nativeToken: 'ETH' },

  // --- Polkadot Substrate Family ---
  { id: 'DOT', name: 'Polkadot', family: 'SUBSTRATE', tier: 'L1', chainId: 'polkadot-mainnet', nativeToken: 'DOT' },
  { id: 'KSM', name: 'Kusama', family: 'SUBSTRATE', tier: 'L1', chainId: 'kusama-mainnet', nativeToken: 'KSM' },
  { id: 'CFG', name: 'Centrifuge', family: 'SUBSTRATE', tier: 'L1', chainId: 'centrifuge-mainnet', nativeToken: 'CFG' },
  { id: 'PHA', name: 'Phala Network', family: 'SUBSTRATE', tier: 'L1', chainId: 'phala-mainnet', nativeToken: 'PHA' },
  { id: 'INTR', name: 'Interlay', family: 'SUBSTRATE', tier: 'L1', chainId: 'interlay-mainnet', nativeToken: 'INTR' },

  // --- Near Ecosystem ---
  { id: 'NEAR', name: 'Near Protocol', family: 'NEAR', tier: 'L1', chainId: 'near-mainnet', nativeToken: 'NEAR' },
  { id: 'AURORA', name: 'Aurora', family: 'NEAR', tier: 'L2', chainId: 1313161554, nativeToken: 'ETH' },

  // --- Distinct L1 Families ---
  { id: 'XRP', name: 'XRP Ledger', family: 'DISTINCT_L1', tier: 'L1', chainId: 'xrpl-mainnet', nativeToken: 'XRP' },
  { id: 'TRX', name: 'TRON', family: 'DISTINCT_L1', tier: 'L1', chainId: 'tron-mainnet', nativeToken: 'TRX' },
  { id: 'TON', name: 'The Open Network', family: 'DISTINCT_L1', tier: 'L1', chainId: 'ton-mainnet', nativeToken: 'TON' },
  { id: 'XLM', name: 'Stellar', family: 'DISTINCT_L1', tier: 'L1', chainId: 'stellar-mainnet', nativeToken: 'XLM' },
  { id: 'ALGO', name: 'Algorand', family: 'DISTINCT_L1', tier: 'L1', chainId: 'algorand-mainnet', nativeToken: 'ALGO' },
  { id: 'HBAR', name: 'Hedera Hashgraph', family: 'DISTINCT_L1', tier: 'L1', chainId: 'hedera-mainnet', nativeToken: 'HBAR' },
  { id: 'XTZ', name: 'Tezos', family: 'DISTINCT_L1', tier: 'L1', chainId: 'tezos-mainnet', nativeToken: 'XTZ' },
  { id: 'CSPR', name: 'Casper', family: 'DISTINCT_L1', tier: 'L1', chainId: 'casper-mainnet', nativeToken: 'CSPR' }
];
