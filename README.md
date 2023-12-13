# Emerald Typescript SDK

## Installation:
###### With NPM:
`npm install @2112-labs/emerald.js`
###### With Yarn:
`yarn add @2112-labs/emerald.js`

## Setup:
To start interacting with Emerald Protocol, run the following code snippet:
```typescript
import { Connection } from "@solana/web3.js";
const connection = new Connection(RPC_URL);

const emerald = new Emerald(connection);
```
Emerald is general-purpose, low-level class that allows you to interact with all parts of the protocol. However, in production, we recommend using second, higher-level class that allows you to manage and interact with one Community at a time - EmeraldCommunity.

To initialize EmeraldCommunity, run the following code:
```typescript
import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(RPC_URL);
const communityId = 0;
const user = new PublicKey("User Address") 
// User will usually be PublicKey received from Wallet Adapter.

const emeraldCommunity = new EmeraldCommunity(  
    connection,   
    communityId: number,   
    user,   
    admin: new PublicKey("Admin") 
    // Optional, only needed for admin-level interactions.
);
```

## Overwrite default Program ID:
Currently, Emerald Protocol program is deployed under `5Kmi2sHYKD76GySjL9Tkoi64eLwGpiZCW7zUpbpJ8B5m` address on both Solana Devnet and Mainnet-Beta.

However, if you'd like to deploy the program yourself, it is available on [GitHub](https://github.com/2112-Foundation/Emerald).

After you deploy your own version of the program, it is possible to still use official SDK to interact with it. To do that, simply include optional programId argument when initialising Emerald instance:
```typescript
import { Connection } from "@solana/web3.js";
const connection = new Connection(RPC_URL);

const PROGRAM_ID = new PublicKey("<Your Program ID>")

const emerald = new Emerald(
	connection,
	PROGRAM_ID
);
```
Keep in mind that deploying your own version of the program can cause issues in case of major updates. SDK will always support the latest version of the program and we cannot promise backwards compatibility with older versions.

## Initialize new Community:
In our protocol, all Community Pools are identified by an index. To obtain that index, simply run `emerald.getProtocolData()` function and save `totalCommunities` returned from it. It will be the index of the next created community pool. You will need that index for all interactions with your Community in the future. If you're not sure about your Community identifier, our admin panel lets you check that - visit [https://emrld.pro/manage](https://emrld.pro/manage).

To initialize new Community, run the following code:
```typescript
import { PublicKey } from "@solana/web3.js";

const admin = new PublicKey("<Admin Public Key>");
const mint = new PublicKey("<Reward Token Mint>");

const instruction = await emerald.createNewCommunity(
	mint,
	admin
);
```

## Add Collection:
Every existing community needs some whitelisted Collections to be useful. Only NFTs belonging to that Collections will be possible to stake.

Note that Emerald Protocol only supports Metaplex Verified Collection Standard.

To add a collection to an existing community, run this code snippet:
```typescript
import { PublicKey } from "@solana/web3.js";

const id = 0;
const admin = new PublicKey("<Admin Public Key>");
const verifiedCollectionAddress = new PublicKey("<Verified Collection Public Key>");
const verifiedCreator = new PublicKey("<CMID or Verified Creator Public Key>");

const instruction = await emerald.addCollectionToCommunity(
	id,
	admin,
	verifiedCollectionAddress,
	verifiedCreator
);
```
`verifiedCreator` is not required, however it is recommended. It builds additional layer of safety on top of verifying collection address.

Each collection added to the Community has it's own index, which starts from 0. Index is unique on per-community basis, but not globally.

## Add Collection Policy:
For every collection existing in the protocol, there is a corresponding `CollectionPolicy` required. That account stores data like payouts rate, payouts epoch, required interaction frequency, minimum stake time and other properties required by the protocol to run properly.

This is the structure of the data that `CollectionPolicy` holds:
```typescript
{
	rate: BN, 
	// Payout per epoch.
	
	epoch: BN, 
	// Epoch in milliseconds, MINUTE = 60 * 1000
	
	minimumStakeTime: BN, 
	// Minimum stake time required, in milliseconds.
	
	interactionFrequency: BN, 
	// Required user's interaction frequency. 
	
	attenuation: number, 
	// Percentage multiplier used when interaction frequency is not achieved. 
	// 1000=100% and 888=88.8% meaning user will only get 
	// 88.8% of the accrued payouts.
	
	permanentPolicy: boolean, 
	// Specify if the policy can be edited in the future.
	
	timeCapped: BN 
}
```

It's worth noting that one `Collection` might have more than one `CollectionPolicy`. However, when interacting with the protocol, it is required to include information about the selected policy user wants to use with that instruction.

To add a CollectionPolicy, use the following snippet:
```typescript
import { BN } from "@coral-xyz/anchor"; 

const communityId = 0;     
const collectionId = 0;

// Minute in milliseconds.
const MINUTE = 60 * 1000;

const policy: CollectionPolicyArgs = {
	rate: new BN(8), 
	epoch: new BN(MINUTE), 
	minimumStakeTime: new BN(0), 
	interactionFrequency: new BN(0), 
	attenuation: new BN(1000), 
	permanentPolicy: false, 
	timeCapped: new BN(0)
}

const instruction = emerald.addCollectionPolicy(
	communityId,
	collectionId,
	policy
);
```

In the above snippet, `communityId` is unique identifier of your `CommunityPool` and collectionId is unique identifier of your `Community`. Remember that `collectionId` is unique for your `CommunityPool`, but they are not for the protocol as a whole. That's why the first `Collection` you add will have index of 0, even though there are many more Collections existing in the protocol.

## Fund Community Rewards:
To be able to pay rewards to stakers, you'll have to deposit the token to Associated Token Account owned by `CommunityPool`.

To do that, you should use following code snippet:
```typescript
const communityId = 0;
const admin = new PublicKey("<Community Admin>");
const amount = 5_000_000; // Amount of token to deposit.

const instruction = emerald.fundRewards(  
    communityId,  
    admin,  
    amount  
);
```

Before funding the rewards for the first time, make sure `CommunityPool`'s Reward Vault is initialised. To initialise, use the code snippet below:
```typescript
const communityId = 0;
const admin = new PublicKey("<Community Admin>");

const instruction = emerald.initializeRewardVault(  
    communityId,  
    admin,  
);
```

## Lock Community:
Locking `CommunityPool` will make all the remaining vault balance impossible to withdraw. You will be still able to deposit to the vault. This is dangerous operation which can cause lose of funds, so be careful when using it.

To lock the community, run the code snippet below:
```typescript
const communityId = 0;  
const admin = new PublicKey("<Admin Public Key>");

const instruction = emerald.lockCommunity(
	communityId, 
	admin
);
```

## User's Accounts:
To work with the Emerald Protocol, user needs to initialise 3 (3rd one is optional, but recommended) accounts.

The first account is `UserAccount` - initialised only once per user. Stores some basic data like number of communities user belongs to, number of staked NFTs, etc.

The second account is `UserCommunityAccount` - initialised once per every community the user joins. Required to interact with particular `CommunityPool`. Derived from `communityId` and `UserAccount`. Stores data like accumulated rewards, number of NFTs staked in the particular `CommunityPool`, etc.

Third, optional account is simply Associated Token Account for the reward token. Whenever user claims rewards, they will be sent to their ATA - so it must be initialised before user's first claim.

To initialise these 3 accounts, use following methods:

1. `initializeUserGlobalAccount()`,
2. `initializeUserCommunityAccount()`,
3. `createAssociatedTokenAccountInstruction()` from the `@solana/spl-token` library

## User Interactions (Staking, Unstaking, Claiming Rewards):
For this kind of interaction, we highly recommend using EmeraldCommunity class. It requires much less inputs, handles most of the issues under the hood and provides higher-level, simpler abstraction for these instructions.

To stake an NFT using EmeraldCommunity, simply use:
```typescript
emeraldCommunity.stakeNft(
	new PublicKey("NFT Mint")
);
```

Remember, that you can only stake NFTs that are whitelisted in the particular `CommunityPool` (specified in `new EmeraldCommunity()` initialisation). You have to manage filtering on your own. You can use `emeraldCommunity.getCollections()` - this will return all collections supported by the community pool.

To unstake, similarly use:
```typescript
emeraldCommunity.unstakeNft(
	new PublicKey("NFT Mint")
);
```

Same as `stakeNft()` - this function requires that NFT mint you provide is whitelisted and staked in the selected `CommunityPool`. Otherwise - you'll be getting errors.

To claim accrued rewards, use:
```typescript
emeraldCommunity.claimAllRewards();
```

In Emerald Protocol, rewards are accrued on per-NFT basis. Meaning, each staked NFT earns rewards separately (and they can only be claimed separately, as well). However, the SDK iterates over all staked NFTs and generates instruction for all of them at once. As a result of this function, you'll get `TransactionInstruction[]`. You have to handle it by yourself - probably by batching instructions in multiple transactions.

## Handling User-Inputs
Integrate your dApp with Emerald Protocol & handle all user inputs with all-in-one React hook. Install:
###### With NPM:
`npm install @2112-labs/emerald-react`
###### With Yarn:
`yarn add @2112-labs/emerald-react`

To start, put `EmeraldProvider` as a parent of your app. In case you use NextJS, you should put `EmeraldProvider` as a parent over a page inside `_app.tsx` file.
Remember to put `ConnectionProvider` and `WalletProvider` as parents of the `EmeraldProvider`. It is necessary as `EmeraldProvider` constantly utilizes connection to Solana blockchain and requires a connected wallet.

```typescript jsx
import { EmeraldProvider } from "@2112-labs/emerald.js";

function App({ children } : { children: JSX.Element }) {
    const communityId = "<Your Community ID>";
    
    return (
        <EmeraldProvider communityId={communityId}>
            { children }
        <EmeraldProvider />
    );
}
```

After that, you can simply import `useEmerald` hook to any of the children components and utilize the context from there.
```typescript jsx
import { useEmerald } from "@2112-labs/emerald.js";

function SomeComponent() { 

    const {
        userStakedNfts,
        rewards,
        rewardTokenMetadata
    } = useEmerald();
    
    return (
        <div>
            You staked { userStakedNfts.length } NFTs 
            and earned { rewards } ${ rewardTokenMetadata.symbol } Tokens.
        </div>
    );
} 
```