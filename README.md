# Alētheia Array: Independent Blockchain Verifier

Sovereign, edge-native React/Vite dashboard and localized cryptographic verification interface. Designed to execute within POSIX-compliant Termux containers with zero hardcoded cloud dependencies or third-party routing telemetry.

---

## 🎯 Architecture & Purpose

The **Independent Blockchain Verifier** acts as a sovereign edge interface into the Alētheia telemetry mesh. It allows local auditability, proof verification, and observation inspection without exposing internal keys or relying on centralized RPC gateways.

* **Client Engine**: React + Vite (Rolldown bundler) targeting high-throughput local execution.
* **Universal AI Provider**: Local/Edge AI abstraction (`UniversalAIClient`) compatible with OpenAI-compliant endpoints (e.g., Ollama, local models).
* **Isolation Model**: Zero Trust execution boundary scoped entirely to POSIX-compliant Termux filesystem trees (`~/aletheia-verifier`).

---

## 🚀 Quick Start

### Prerequisites
* Node.js (v18+)
* npm or pnpm

### Installation & Run

```bash
# Clone the sovereign repository
git clone [https://github.com/Okwaho24/Aletheia_Array_Independent_Blockchain_Verifier.git](https://github.com/Okwaho24/Aletheia_Array_Independent_Blockchain_Verifier.git)
cd Aletheia_Array_Independent_Blockchain_Verifier

# Install clean local dependencies
npm install

# Start development server
npm run dev
