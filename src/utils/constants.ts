export type Community = {
  name: string;
  imgUrl: string;
  color: string;
  ornamentIndex: number;
  description: string;
  social: {
    discord?: number;
    twitter?: number;
  };
};

export const FEATURED_COMMUNITY = [
  {
    name: "Boba Network",
    imgUrl: "boba-network.jpg",
    color: "#E9DA56",
    ornamentIndex: 4,
    social: {
      discord: 17000,
      twitter: undefined,
    },
    description: `Boba Network is a EVM blockchain Layer-2 scaling solution and Hybrid Compute platform We’re delivering a faster, cheaper, and smarter experience for blockchain’s next billion users`,
  },
  {
    name: "Vulcan Blockchain",
    imgUrl: "vulcan-blockchain.png",
    color: "#63C5CF",
    ornamentIndex: 2,
    social: {
      discord: 17000,
      twitter: undefined,
    },
    description: `Forging DeFi. The World's First Blockchain Automatic Revenue Sharing (BARS) Technology.`,
  },
  {
    name: "DeRace",
    imgUrl: "derace.png",
    color: "#487DE5",
    ornamentIndex: 6,
    social: {
      discord: 75000,
      twitter: 175000,
    },
    description: `DeRace is a complete NFT horse racing ecosystem based on blockchain and powered by $DERC token. Race, breed and rent your NFT horses, host races & get rewarded via our sustainable P2E model. See you on the racetrack!`,
  },
  {
    name: "Stader Polygon",
    color: "#BA75E8",
    imgUrl: "stader-polygon.png",
    ornamentIndex: 3,
    social: {
      twitter: 31000,
      discord: 25000,
    },
    description: `The perfect onramp into the world of MATIC Liquid Staking`,
  },
];

export const NEW_COMMUNITY = [
  {
    name: "Lamas Finance",
    imgUrl: "lamas-finance.png",
    color: "#DD8157",
    ornamentIndex: 1,
    social: {
      discord: 11000,
      twitter: 45000,
    },
    description: `Lamas Finance serves as a true-DApp-game hub built on Solana, delivering genuine blockchain gaming experiences while also providing the opportunity to benefit from essential DeFi functions and stunning NFT collections.`,
  },
  {
    name: "Redemption Token",
    imgUrl: "redemption-token.png",
    color: "#DDE6FD",
    ornamentIndex: 7,
    social: {
      discord: 1700,
      twitter: 3800,
    },
    description: `Decentralized Bonds, Staking & Lottery By Redemption DAO`,
  },
  {
    name: "ShieldPad",
    imgUrl: "shieldpad.png",
    color: "#67C790",
    ornamentIndex: 9,
    social: {
      discord: undefined,
      twitter: 7800,
    },
    description: `ShieldPad is your all-in-one solution for launching and managing DeFi projects efficiently on @BuildOnBase`,
  },
  {
    name: "Mirakle",
    color: "#C077A0",
    imgUrl: "mirakle.png",
    ornamentIndex: 10,
    social: {
      twitter: 22000,
      discord: undefined,
    },
    description: `Mirakle is a decentralized exchange platform that offers spot and perpetual futures trading for traders, where they can review their performance with on- chain analytics and trade with one another without giving up control to a third-party custodian.`,
  },
];
