
// initial deployment
// export const BlockBlogAddress = '0x6d62AdBC7292e4C74b80B3d379852397Ab46351F'
//  export const BlockNetworkABI =  [
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "id",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "authorsName",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "posTitle",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "postCategory",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "postSubcategory",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "content",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "address",
//         "name": "author",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "imageHash",
//         "type": "string"
//       }
//     ],
//     "name": "PostCreated",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "id",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "content",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "tip",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "address payable",
//         "name": "author",
//         "type": "address"
//       }
//     ],
//     "name": "PostTipped",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_id",
//         "type": "uint256"
//       }
//     ],
//     "name": "Like",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "blogCounter",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "blogPosts",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "id",
//         "type": "uint256"
//       },
//       {
//         "internalType": "string",
//         "name": "authorsName",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "postTitle",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "postCategory",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "postSubcategory",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "content",
//         "type": "string"
//       },
//       {
//         "internalType": "address payable",
//         "name": "author",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "imageHash",
//         "type": "string"
//       },
//       {
//         "internalType": "uint256",
//         "name": "likes",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "postDate",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "authorsname",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "postTitle",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "postCategory",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "postSubcategory",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "content",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "imageHash",
//         "type": "string"
//       }
//     ],
//     "name": "createPost",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "name",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ]

// second deployment
// export const BlockBlogAddress = '0xD6d35C007042B1906286711408Fe73FF3bD33875'
// export const BlockNetworkABI = [
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "uint256",
//         "name": "id",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "authorsName",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "posTitle",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "postCategory",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "postSubcategory",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "content",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "address",
//         "name": "author",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "imageHash",
//         "type": "string"
//       }
//     ],
//     "name": "PostCreated",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "uint256",
//         "name": "profileId",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "profileName",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "profileEmail",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "profileState",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "profileCountry",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "profileLocation",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "profileImageHash",
//         "type": "string"
//       }
//     ],
//     "name": "ProfileEvent",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_profileName",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "_profileEmail",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "_profileCountry",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "_profileState",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "_profileLocation",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "_imageHash",
//         "type": "string"
//       }
//     ],
//     "name": "CreateProfile",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "blogCounter",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "authorsname",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "postTitle",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "postCategory",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "postSubcategory",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "content",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "imageHash",
//         "type": "string"
//       }
//     ],
//     "name": "createPost",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "name",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "profileCount",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ]


// final deployment
// 0xAA2006a80E75e5Fed74B5a08ceA90315A398BdfE
export const BlockBlogAddress = '0xfa293B737AFE715959ab18306D970618a38d5A58'
export const BlockNetworkABI =  [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "authors_address",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "charged_amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tipamount",
        "type": "uint256"
      }
    ],
    "name": "BuyMeCoffeeEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "authors_address",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "publication_metadata",
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
        "indexed": true,
        "internalType": "uint256",
        "name": "profileId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "authors_address",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "profile_metadata",
        "type": "string"
      }
    ],
    "name": "ProfileEvent",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "authors_address",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BuyMeCoffee",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_metadata",
        "type": "string"
      }
    ],
    "name": "CreateProfile",
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
        "internalType": "address payable",
        "name": "authors_address",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "publication_metadata",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractOwnerAccount",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_metadata",
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
    "name": "profileCount",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "profiles",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "profileId",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "profile_address",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "profile_metadata",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]