# icforge

## ICForge
ICForge is a no-code platform that allows users to easily deploy and manage token standard smart contracts on the Internet Computer. This project leverages the Motoko programming language for smart contract development.

## Features
- **Easy Deployment**: Deploy smart contracts on the Internet Computer blockchain without writing code.
- **TokeDeployment:** Users can configure and deploy supported token standard smart contracts without writing code.
- **Canister Management:** ICForge automatically creates and manages canisters for users, allowing them to control and interact with their deployed smart contracts.
- **User-friendly Interface:** A simple and intuitive web interface for users to input configurations and manage their token contracts.


## Works Done So Far

So far, we have successfully implemented the following functionalities:

- Implemented a user-friendly interface for configuring and deploying smart contracts.
- Supported deployment of smart contracts compliant with DIP20 and ERC20 token standards.
- Ledger Canister for users to fund their canu¥ister and withdraw their funds.

## Future Plans

#Features
- **Developer Documentation**: Comprehensive developer documentation available for integration and making calls to smart contracts.
- **Multiple Payment Options**: Users can fund smart contract deployments and transactions using ICP_ledger, ckbtc, or cketh.
- **Marketplace**: A marketplace for buying, selling, or swapping ownership of canisters.

In the future, we plan to:

- Integrate the frontend with the backend.
- Expand token standard support to include more standards for greater interoperability.
- Integrate multiple payment options including ICP_ledger, ckbtc, and cketh for funding smart contract deployments(backend only).
- Developed a marketplace where users can buy, sell, or swap ownership of canisters.
- Enhance developer documentation and tools for easier integration and development.
- Implement additional features such as governance mechanisms for managing smart contracts.
- Improve user experience and scalability to accommodate growing demand.

## Issues and Hurdles

While we strive to deliver a seamless user experience, we anticipate encountering some challenges, including:
Internal:
-  Teamates not active and responsive.
- Teamate opting out last minute and not delivering

Technical:
- Ensuring security and robustness of smart contracts deployed on the platform.
- AccountIdentifier and Account types issues with the ledgers..
- Addressing potential interoperability challenges when integrating with other blockchain networks, the ckBTC and ckETH.


## Tasks

## Frontend Routes
- Dashboar `/dashboard`
- Wallet `/wallet`
- Carnisters `/carniters`
- Transactions `/transactions`
# Frontend
- Set up the basic structure of the user interface.
- Implement a form for users tauthentication like II.
- set up API requests to interact with the backend.
- Create a React component for users to deploy token contracts.
- Include state management for capturing user input.
- Canister Funding Component
- Implement the logic to create a canister and add the user as a controller.
- Handle errors and provide appropriate feedback to users.
- Design and implement a user interface for managing deployed smart contracts (optional).

# Backend
- Set up the Motoko backend project structure.
- Choose and implement a supported token standard for smart contracts.
- Create an endpoint for handling user requests to deploy token contracts.
- Validate and process user input.
- Develop an endpoint to handle the funding of canisters with cycles.
- Ensure proper validation and error handling.
- Implement the logic to create a canister and add the user as a controller.
- Integrate with the Internet Computer canisters.
- Create an endpoint for managing deployed smart contracts (optional).
- Implement comprehensive error handling throughout the backend.
- Set up logging to track important events.
- Write detailed documentation for the backend API, including input parameters and response formats.
- Develop unit tests and integration tests for each backend endpoint.
- Conduct a security audit to identify and address any vulnerabilities.
