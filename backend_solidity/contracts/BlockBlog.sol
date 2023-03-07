 // SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;

contract BlockBlog {

    address payable public immutable contractOwnerAccount;
    uint public blogCounter;
    uint public profileCount;

    // create a constructor
    constructor () {
        contractOwnerAccount = payable(msg.sender);
    }
    
    // create struct for each article
    struct Post {
        uint id;
        address payable authors_address;
        string publication_metadata;
    }
//    create post event for each publication
    event PostCreated(
        uint indexed id,
        address authors_address,
        string publication_metadata
    );

    // create struct for profile
    struct Profile {
        uint profileId;
        address payable profile_address;
        string profile_metadata;
    }

    // create event for author's profile 
    event ProfileEvent (
        uint indexed profileId,
        address authors_address,
        string profile_metadata
    );

    // create event for buymecoffe
    event BuyMeCoffeeEvent(address authors_address, uint charged_amount, uint tipamount);

    // create mapping for the publication
    mapping (uint => Post) public blogPosts;
    // mapping for profile
    mapping (address => Profile) public profiles;


    // function to create post
    function createPost(string memory _metadata) public{  
        //increment posts
        blogCounter++;
        // require post metadata
        require(bytes(_metadata).length > 0, "metadata is required");
        //require valid author's address
        require(msg.sender!=address(0), "No valid address");
        // save posts
        blogPosts[blogCounter] = Post(blogCounter, payable(msg.sender), _metadata);
        //emit event 
        emit PostCreated(blogCounter, payable(msg.sender), _metadata );
    }

    function CreateProfile (string memory _metadata) public {
        profileCount += 1;

        // require profile metadata 
        require(bytes(_metadata).length > 0, "metadata is required");
        //require valid author location address
        require(msg.sender!=address(0), "A valid address is required");
        // save profile
        profiles[msg.sender] = Profile(profileCount, payable(msg.sender), _metadata);
        emit ProfileEvent (profileCount, payable(msg.sender), _metadata);
    }

    function BuyMeCoffee(address payable authors_address, uint amount ) public payable {

        //require valid author location address
        require(msg.sender!=address(0), "A valid address is required");
        // require profile metadata 
        require(amount > 0, "Amount must be greater than 0");
        
        // ctreate charge fee based on a 1% charge
        uint charge_fee = amount * 1/100;
        // transfer amount due to author and charged fee to the blog owner (contractOwnerAccount)
        uint tip_amount = amount - charge_fee;
        authors_address.transfer(tip_amount);
        contractOwnerAccount.transfer(charge_fee); 

        emit BuyMeCoffeeEvent(authors_address, charge_fee, tip_amount);
    }
}