import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { UniversalBlockchainVerifier, BlockchainFamily, VerificationResult } from './lib/verifier/universal-engine';

const verifier = new UniversalBlockchainVerifier();
const FAMILIES: BlockchainFamily[] = ['UTXO', 'EVM', 'PARALLEL_EXECUTION', 'APPCHAIN', 'DAG', 'ZK_ROLLUP'];

function App() {
  const [selectedFamily, setSelectedFamily] = useState<BlockchainFamily>('EVM');
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const res = await verifier.verify({
        family: selectedFamily,
        chainId: '1',
        blockHeaderOrTxPayload: 'sample_payload_data'
      });
      setResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', background: '#121212', color: '#00ffcc', minHeight: '100vh' }}>
      <h1>Aletheia Array: Universal Blockchain Verifier</h1>
      <p>Sovereign multi-family execution and cryptographic proof verification engine.</p>
      
      <div style={{ margin: '20px 0' }}>
        <label>Select Blockchain Family: </label>
        <select 
          value={selectedFamily} 
          onChange={(e) => setSelectedFamily(e.target.value as BlockchainFamily)}
          style={{ padding: '8px', background: '#222', color: '#fff', border: '1px solid #00ffcc' }}
        >
          {FAMILIES.map(fam => (
            <option key={fam} value={fam}>{fam}</option>
          ))}
        </select>
        <button 
          onClick={handleVerify} 
          style={{ marginLeft: '10px', padding: '8px 16px', background: '#00ffcc', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
        >
          {loading ? 'Verifying...' : 'Verify Payload'}
        </button>
      </div>

      {result && (
        <div style={{ background: '#1e1e1e', padding: '15px', border: '1px solid #333', marginTop: '20px' }}>
          <h3>Verification Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
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
