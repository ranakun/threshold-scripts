= Interacting with Threshold Network Contracts on Goerli Network

This repository contains JavaScript scripts to interact with contracts on the Threshold Network, which are deployed on the Goerli Network. The scripts are built using link:https://hardhat.org/[Hardhat] and utilize the link:https://docs.ethers.io/v5/[Ethers.js] library for Ethereum development.

== Prerequisites

Before you begin, ensure you have the following prerequisites:

* Node.js and npm installed
* Git installed
* An Ethereum wallet with Goerli test Ether

== Installation

1. Clone this repository:

[source,bash]
----
git clone https://github.com/ranakun/threshold-scripts.git
cd threshold-scripts
----

2. Install dependencies:

[source,bash]
----
npm install
----

== Setup
 Add the API_KEY and PRIVATE_KEY to the `.env` file in the script directory of the project.

[source]
----
API_KEY=your_api_key_here
PRIVATE_KEY=your_private_key_here
----

Replace `your_api_key_here` and `your_private_key_here` with the actual API key and private key provided in the Notion document.

== Usage

Run the interaction script with the following command:

[source,bash]
----
npx hardhat run scripts/minter.js --network goerli
----

This command will execute the `minter.js` script using the Hardhat framework, connecting to the Goerli Network.

== Troubleshooting

If you encounter any issues or errors, please link:https://github.com/ranakun/threshold-scripts.git/issues[open an issue] on this repository. Provide as much detail as possible to help us assist you effectively.

== License

This project is licensed under the link:LICENSE[MIT License].
