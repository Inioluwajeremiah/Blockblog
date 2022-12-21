
export const BlockNetworkABI = [
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
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
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
          "internalType": "uint256",
          "name": "postDate",
          "type": "uint256"
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
      "inputs": [],
      "name": "Counter",
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
          "internalType": "uint256",
          "name": "postDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tip",
          "type": "uint256"
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
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
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
      "name": "getPosts",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
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
              "internalType": "uint256",
              "name": "postDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tip",
              "type": "uint256"
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
            }
          ],
          "internalType": "struct BlockNetwork.Post[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
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
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idx",
          "type": "uint256"
        }
      ],
      "name": "tipPost",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ];
export const BlockBlogAddress = 'to 0x723146f6ec351740B12EF0A42e09ae63a43B31fe';