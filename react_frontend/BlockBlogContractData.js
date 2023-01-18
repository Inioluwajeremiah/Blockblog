export const BlockNetworkABI =  [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "authorsName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "posTitle",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "postCategory",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "postSubcategory",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "content",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "author",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "imageHash",
        "type": "string"
      }
    ],
    "name": "PostCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "content",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tip",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "author",
        "type": "address"
      }
    ],
    "name": "PostTipped",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "Like",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "blogCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "blogPosts",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "authorsName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "postTitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "postCategory",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "postSubcategory",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "content",
        "type": "string"
      },
      {
        "internalType": "address payable",
        "name": "author",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "imageHash",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "postDate",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "authorsname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "postTitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "postCategory",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "postSubcategory",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "content",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "imageHash",
        "type": "string"
      }
    ],
    "name": "createPost",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
export const BlockBlogAddress = '0x6d62AdBC7292e4C74b80B3d379852397Ab46351F'
// '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
// '0x6d62AdBC7292e4C74b80B3d379852397Ab46351F'
// '0x7af97E14d2b4c7D02F51e09FEfF5525495B00dA8'
// '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
//  "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// '0x8802635AD934D592815DDc8EB0fC262940a97d2F';