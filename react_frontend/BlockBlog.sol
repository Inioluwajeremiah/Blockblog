 // SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;


contract BlockBlog {
    string public name; 

    uint public blogCounter;
    uint public profileCount;

    // Likes[] likes;

// create struct for each article
    struct Post {
        uint id;
        string authorsName;
        string postTitle;
        string postCategory;
        string postSubcategory;
        string content;
        address payable author;
        string imageHash;
        uint likes;
        uint postDate;
    }

//    create post event
    event PostCreated(
        uint id,
        string authorsName,
        string posTitle,
        string postCategory,
        string postSubcategory,
        string content,
        address author,
        string imageHash
    );
    
    event PostTipped(
        uint id,
        // string posTitle,
        // string postCategory,
        // string postSubcategory,
        string content,
        // uint256 postDate,
        uint tip,
        address payable author
        // string imageHash
    );

    // create struct for profile
    struct Profile {
        uint profileId;
        string profileName;
        string profileEmail;
        string profileState;
        string profileCountry;
        string profileLocation;
        string profileImageHash;
    }

    event ProfileEvent (
        uint profileId,
        string profileName,
        string profileEmail,
        string profileState,
        string profileCountry,
        string profileLocation,
        string profileImageHash
    );

    mapping(uint=>Post) public blogPosts;
    mapping(uint => Profile) public profiles;
 
    function createPost(string memory authorsname, string memory postTitle, string memory postCategory, string memory postSubcategory, string memory content, string memory imageHash) public{
        
        //incrementing posts
        blogCounter++;
        
        // require a valid author's name
        require(bytes(authorsname).length > 0, "Author's name is empty");
        //require valid title
        require(bytes(postTitle).length > 0, "Post title is empty");
        //require valid category
        require(bytes(postCategory).length > 0, "Post category  is empty");
            //require valid sub category
        require(bytes(postSubcategory).length > 0, "Post subcategory is empty");
            //require valid content
        require(bytes(content).length > 0, "Content  is empty");
            //require valid author address
        require(msg.sender!=address(0), "No valid address");
            //require valid image hash from ipfs
        require(bytes(imageHash).length > 0, "No hashed image uri");
        
        // string[] memory likeaddress;
        // likeaddress[0] = '';
        // //adding posts to the list of posts
        //  likeaddress 
        // string [] likeaddress;

        blogPosts[blogCounter] = Post(blogCounter, authorsname, postTitle, postCategory, postSubcategory, content, payable(msg.sender), imageHash, 0, block.timestamp );
        //trigger event 
        emit PostCreated(blogCounter, authorsname, postTitle, postCategory, postSubcategory, content,payable(msg.sender), imageHash );
    }

    // function tipPost(uint idx) public payable{
    //     //validate the id
    //     require(idx>0 && idx<=blogCounter);
    //     // fetch the post based on id and increment the tip amount of the desired author
    //     Post memory _t = blogPosts[idx];
    //     address payable _author = _t.author;
    //     // transfer the amount of paid ether to author
    //     _t.author.transfer(msg.value);
    //     // increment tip amount reflected on website
    //     // _t.tip+= msg.value;
    //     // update the post with incremented tip amount
    //     blogPosts[idx] = _t;
    //     emit PostTipped(idx, _t.content, _t.tip, _author);
    // }

    function Like (uint _id) external {
       
        Post storage post = blogPosts[_id];
        
        // for (uint i=0; i<=post.likeaddress.length; i++) {
        //     // if (post.likeaddress[i] != blockaccount) post.likes += 1;
        //     require(keccak256(bytes(post.likeaddress[i])) != keccak256(abi.encodePacked(msg.sender)), "Address already liked this post");
        //     post.likes += 1;
        // }
        post.likes += 1;
    }

    function CreateProfile (string memory _profileName, string memory _profileEmail, string memory _profileCountry, string memory _profileState,  string memory _profileLocation, string  memory _imageHash) public {
        profileCount += 1;

        profiles[profileCount] = Profile(profileCount, _profileName, _profileEmail, _profileCountry, _profileState, _profileLocation, _imageHash);
        emit ProfileEvent (profileCount, _profileName, _profileEmail, _profileCountry, _profileState, _profileLocation, _imageHash);
    }
}