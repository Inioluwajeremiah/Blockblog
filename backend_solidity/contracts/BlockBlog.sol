 // SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;


contract BlockBlog {
    string public name; 

    uint public blogCounter = 0;

    mapping(uint=>Post) public blogPosts;

    struct Post {
        uint id;
        string authorsName;
        string postTitle;
        string postCategory;
        string postSubcategory;
        string content;
        address payable author;
        string imageHash;
    }

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

    // constructor() public {
    //     name = "Post Created";
    // }

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
        require(msg.sender!=address(0));
            //require valid image hash from ipfs
        require(bytes(imageHash).length > 0, "No hashed image uri");
        
      

        //adding posts to the list of posts
        blogPosts[blogCounter] = Post(blogCounter, authorsname, postTitle, postCategory, postSubcategory, content, payable(msg.sender), imageHash );
        //trigger event
        emit PostCreated(blogCounter, authorsname, postTitle, postCategory, postSubcategory, content,payable(msg.sender), imageHash );
    }

    function getPosts() public view returns (Post[] memory) {

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
}