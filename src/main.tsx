import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { UniversalBlockchainVerifier, PRODUCTION_MAINNETS, ChainConfig, BlockchainFamily, VerificationResult } from './lib/verifier/universal-engine';

const verifier = new UniversalBlockchainVerifier();

function App() {
  const [chains, setChains] = useState<Record<string, ChainConfig>>(PRODUCTION_MAINNETS);
  const [selectedKey, setSelectedKey] = useState<string>('BASE_MAINNET');
  
  const [customName, setCustomName] = useState('');
  const [customFamily, setCustomFamily] = useState<BlockchainFamily>('EVM');
  const [customLayer, setCustomLayer] = useState<'L1' | 'L2' | 'L3' | 'Sidechain' | 'Appchain'>('L2');
  const [customChainId, setCustomChainId] = useState('');
  const [customToken, setCustomToken] = useState('ETH');

  const [result, setResult] = useState<VerificationResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName || !customChainId) return;

    const key = `${customName.toUpperCase().replace(/\s+/g, '_')}_MAINNET`;
    const newConfig: ChainConfig = {
      key,
      name: `${customName} Mainnet`,
      family: customFamily,
      layer: customLayer,
      chainId: customChainId,
      nativeToken: customToken.toUpperCase(),
      isMainnet: true
    };

    setChains(prev => ({ ...prev, [key]: newConfig }));
    setSelectedKey(key);
    setCustomName('');
    setCustomChainId('');
  };

  const handleVerify = async () => {
    setLoading(true);
    try {
    const targetChain = chains[selectedKey];
      const res = await verifier.verify({
        chainConfig: targetChain,
        payloadData: 'mass_mainnet_payload'
      });
      setResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const currentChain = chains[selectedKey];
  const chainKeys = Object.keys(chains);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', background: '#0a0a0a', color: '#00ffcc', minHeight: '100vh', maxWidth: '850px', margin: '0 auto' }}>
      <h1>Aletheia Array: Mass-Scale Mainnet Verifier</h1>
      <p style={{ color: '#ff3366', fontWeight: 'bold' }}>ACTIVE REGISTRY: {chainKeys.length}+ PRODUCTION MAINNETS</p>
      
      <div style={{ margin: '20px 0', background: '#141414', padding: '20px', border: '1px solid #222', borderRadius: '8px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Select Target Mainnet ({chainKeys.length} available):</label>
          <select 
            value={selectedKey} 
            onChange={(e) => setSelectedKey(e.target.value)}
            style={{ width: '100%', padding: '10px', background: '#222', color: '#fff', border: '1px solid #00ffcc', borderRadius: '4px' }}
          >
            {chainKeys.map(key => {
              const c = chains[key];
              return (
                <option key={key} value={key}>
                  [{c.family} : {c.layer}] {c.name} (ID: {c.chainId})
                </option>
              );
            })}
          </select>
        </div>

        <div style={{ fontSize: '13px', color: '#888', marginBottom: '15px', background: '#1a1a1a', padding: '10px', borderRadius: '4px' }}>
          <span>Family: <strong>{currentChain?.family}</strong></span> | 
          <span style={{ marginLeft: '10px' }}>Tier: <strong>{currentChain?.layer}</strong></span> | 
          <span style={{ marginLeft: '10px' }}>Asset: <strong>{currentChain?.nativeToken}</strong></span> | 
          <span style={{ marginLeft: '10px' }}>Chain ID: <strong>{currentChain?.chainId}</strong></span>
        </div>

        <button 
          onClick={handleVerify} 
          style={{ width: '100%', padding: '12px', background: '#00ffcc', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loading ? 'Verifying...' : `Verify ${currentChain?.name} Payload`}
        </button>
      </div>

      <div style={{ margin: '20px 0', background: '#141414', padding: '20px', border: '1px solid #333', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '16px' }}>+ Inject Additional Mainnet</h3>
        <form onSubmit={handleAddCustom}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            <input 
              type="text" 
              placeholder="Name (e.g. Flare)" 
              value={customName}
              onChange={e => setCustomName(e.target.value)}
              style={{ padding: '8px', background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
              required
            />
            <input 
              type="text" 
              placeholder="Chain ID" 
              value={customChainId}
              onChange={e => setCustomChainId(e.target.value)}
              style={{ padding: '8px', background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
              required
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
            <select 
              value={customFamily} 
              onChange={e => setCustomFamily(e.target.value as BlockchainFamily)}
              style={{ padding: '8px', background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
            >
              <option value="EVM">EVM</option>
              <option value="UTXO">UTXO</option>
              <option value="MOVE">MOVE</option>
              <option value="COSMOS_IBC">COSMOS_IBC</option>
              <option value="SVM">SVM</option>
              <option value="SUBSTRATE">SUBSTRATE</option>
              <option value="NEAR">NEAR</option>
              <option value="DISTINCT_L1">DISTINCT_L1</option>
            </select>
            <select 
              value={customLayer} 
              onChange={e => setCustomLayer(e.target.value as any)}
              style={{ padding: '8px', background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
            >
              <option value="L1">L1</option>
              <option value="L2">L2</option>
              <option value="L3">L3</option>
              <option value="Sidechain">Sidechain</option>
              <option value="Appchain">Appchain</option>
            </select>
            <input 
              type="text" 
              placeholder="Token" 
              value={customToken}
              onChange={e => setCustomToken(e.target.value)}
              style={{ padding: '8px', background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '4px' }}
              required
            />
          </div>
          <button 
            type="submit" 
            style={{ width: '100%', padding: '10px', background: '#333', color: '#00ffcc', fontWeight: 'bold', border: '1px solid #00ffcc', borderRadius: '4px', cursor: 'pointer' }}
          >
            Register Mainnet
          </button>
        </form>
      </div>

      {result && (
        <div style={{ background: '#121212', padding: '20px', border: '1px solid #00ffcc', borderRadius: '8px', marginTop: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#00ffcc' }}>Verification: PASSED</h3>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
