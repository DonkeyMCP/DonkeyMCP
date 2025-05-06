<p align="center">
  <img src="donkeymcp.png" alt="donkeymcp Logo" width="300"/>
</p>

## 📦 DonkeyMCP – Binance Smart Chain Tool Server (MCP + CLI Ready)

> A plug-and-play MCP tool server to **send BNB**, **transfer BEP-20 tokens**, **deploy tokens**, and **interact with smart contracts** on the **Binance Smart Chain (BSC)** — built for **Claude Desktop**, **AI agents**, and **developers.**

<div align="center">
  <h3>🌐 Official Links</h3>
  <a href="https://donkeymcp.fun/" target="_blank">
    <img src="https://img.shields.io/badge/🌍_Website-donkeymcp.fun-blue?style=for-the-badge" alt="Website" />
  </a>
  &nbsp;&nbsp;
  <a href="https://x.com/DonkeyMCP" target="_blank">
    <img src="https://img.shields.io/badge/𝕏_Twitter-@DonkeyMCP-black?style=for-the-badge" alt="Twitter" />
  </a>
  &nbsp;&nbsp;
  <a href="https://github.com/DonkeyMCP/DonkeyMCP" target="_blank">
    <img src="https://img.shields.io/badge/💻_GitHub-DonkeyMCP/DonkeyMCP-green?style=for-the-badge" alt="GitHub" />
  </a>
</div>

---

### ⚙️ Core Capabilities

- 🔐 Secure token & native transfers via CLI or MCP
- 🧱 Interact with smart contracts (ABI/function-based)
- 🔄 PancakeSwap integration for swaps & liquidity
- ⚙️ Create meme tokens & deploy BEP-20 smart contracts
- 🧠 Native Claude Desktop integration via MCP
- 🔧 CLI-ready, MCP-compliant, developer-friendly
- 🔑 Password-protected private keys

---

## 🛠 Installation & Setup

### 1. Install

```bash
npm install -g donkeymcp
```

### 2. Run the CLI Setup Wizard

```bash
donkeymcp --init
```

You'll be prompted to enter:

- ✅ **BSC Wallet Private Key** _(required)_
- ✅ **Wallet Password** _(required, must be 6 characters)_
- ✅ **Custom RPC URL** _(optional, defaults to:_ `https://bsc-dataseed.binance.org` \*)

---

## 🧠 Claude Desktop Integration

After CLI setup, the tool can **auto-configure itself into Claude Desktop**.

📍 File modified:

```
~/Library/Application Support/Claude/claude_desktop_config.json
```

Claude will detect and run this MCP server with your selected tools.

---

## 🔨 Supported MCP Tools

| Tool Name                  | Description                              |
| -------------------------- | ---------------------------------------- |
| `transferNativeToken`      | Send BNB to a wallet                     |
| `transferBEP20Token`       | Transfer BEP-20 token via symbol/address |
| `pancakeSwap`              | Swap tokens via PancakeSwap              |
| `createFourMeme`           | Create meme token on Four.Meme           |
| `createBEP20Token`         | Deploy a BEP-20 contract                 |
| `getBalance`               | Get token + native balance               |
| `callContractFunction`     | Custom contract calls via ABI            |
| `getWalletInfo`            | Get wallet info for an address           |
| `securityCheck`            | Check token security of BSC tokens       |
| `pancakeAddLiquidity`      | Add liquidity to PancakeSwap             |
| `pancakeMyPosition`        | View your PancakeSwap positions          |
| `pancakeRemovePosition`    | Remove liquidity from PancakeSwap        |
| `sellMemeToken`            | Sell meme token on Four.Meme             |
| ...and more coming soon 🔧 |

---

## 🧪 Development Workflow

### Compile TypeScript:

```bash
npm run build
```

### Start MCP Server:

```bash
npm start
# or
node build/index.js
```

### Re-configure:

```bash
donkeymcp --init
```

---

## 📘 Model Context Protocol (MCP)

This project is built on **Model Context Protocol** – a standard to help agents and models interact with structured tool APIs.

**MCP Benefits**:

- ✅ Structured input/output
- ✅ Claude + OpenAI compatible
- ✅ Secure + serverless-ready

---

## ✅ Roadmap

- [x] CLI Configuration Wizard
- [x] Claude Desktop Integration
- [x] Token Deploy + Transfer
- [ ] Token charting tools (DEXTools, Gecko)
- [ ] Telegram auto-trading agent
- [ ] AI assistant with BSC on-chain brain

---

## 🤝 Contributing

Feel free to fork, PR, or raise issues.
We're building **tool-first, AI-ready infrastructure** for the next wave of Web3 agents. Join us!

---

## 🛡️ License

MIT — Use freely, contribute openly.

---
