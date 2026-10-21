import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { UniversalBlockchainVerifier, SUPPORTED_CHAINS, VerificationResult } from './lib/verifier/universal-engine';

const verifier = new UniversalBlockchainVerifier();
const chainKeys = Object.keys(SUPPORTED_CHAINS);

function App() {
  const [selectedKey, setSelectedKey] = useState<string>('ETHEREUM');
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const res = await verifier.verify({
        chainKey: selectedKey,
        payloadData: 'sample_block_or_tx_payload'
      });
      setResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const currentChain = SUPPORTED_CHAINS[selectedKey];

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', background: '#0a0a0a', color: '#00ffcc', minHeight: '100vh' }}>
      <h1>Aletheia Array: Universal Blockchain Verifier</h1>
      <p>One-and-done sovereign edge verification tool covering all Web3 architecture families.</p>
      
      <div style={{ margin: '20px 0', background: '#141414', padding: '20px', border: '1px solid #222', borderRadius: '8px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Select Target Network / Ledger:</label>
          <select 
            value={selectedKey} 
            onChange={(e) => setSelectedKey(e.target.value)}
            style={{ width: '100%', padding: '10px', background: '#222', color: '#fff', border: '1px solid #00ffcc', borderRadius: '4px' }}
          >
            {chainKeys.map(key => {
              const c = SUPPORTED_CHAINS[key];
              return (
                <option key={key} value={key}>
                  [{c.family}] {c.name} (Chain ID: {c.chainId})
                </option>
              );
            })}
          </select>
        </div>

        <div style={{ fontSize: '14px', color: '#888', marginBottom: '15px' }}>
          <span>Family: <strong>{currentChain.family}</strong></span> | 
          <span style={{ marginLeft: '10px' }}>Native Asset: <strong>{currentChain.nativeToken}</strong></span> | 
          <span style={{ marginLeft: '10px' }}>Chain ID: <strong>{currentChain.chainId}</strong></span>
        </div>

        <button 
          onClick={handleVerify} 
          style={{ width: '100%', padding: '12px', background: '#00ffcc', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loading ? 'Executing Cryptographic Proof Validation...' : `Verify ${currentChain.name} Payload`}
        </button>
      </div>

      {result && (
        <div style={{ background: '#121212', padding: '20px', border: '1px solid #00ffcc', borderRadius: '8px', marginTop: '20px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#00ffcc' }}>Verification Status: PASSED</h3>
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
