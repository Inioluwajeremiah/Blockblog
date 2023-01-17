const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe ("BlockBlog",  () => {

  const load_fixtures = async () => {
    const BlockBlog = await ethers.getContractFactory("BlockBlog");
    const blockBlog = await BlockBlog.deploy();
    const [userAccount] = await ethers.getSigners()

    return {BlockBlog, blockBlog, userAccount}
  }

  describe ("check Posts", () => {
    
    it ("Create Post", async () => {
      const {blockBlog, userAccount} = await loadFixture(load_fixtures);

      console.log("user account", userAccount.address);
      await (expect(blockBlog.createPost("author 1", "title1", "cat1", "subcat1", "content1", "imagehsh1"))).
      to.emit(blockBlog, "PostCreated").withArgs(1, "author 1", "title1", "cat1", "subcat1", "content1", userAccount.address, "imagehsh1");

      expect(await blockBlog.blogCounter()).to.equal(1);

      const blockpost = await blockBlog.blogPosts(1)

      expect( blockpost.id).to.equal(1)
      expect(blockpost.authorsName).to.equal("author 1")
      expect(blockpost.postTitle).to.equal("title1")
      expect(blockpost.postCategory).to.equal("cat1")
      expect(blockpost.postSubcategory).to.equal("subcat1")
      expect(blockpost.content).to.equal("content1")
      expect(blockpost.imageHash).to.equal("imagehsh1")
      expect(blockpost.author).to.equal(userAccount.address)
    })

    it ("Test for post input validation", async () => {
      const {blockBlog, userAccount} = await loadFixture(load_fixtures);

      await (expect(blockBlog.createPost("", "title1", "cat1", "subcat1", "content1", "imagehsh1"))).
      to.be.revertedWith("Author's name is empty")
      await (expect(blockBlog.createPost("author", "", "cat", "subcat1", "content1", "imagehsh1"))).
      to.be.revertedWith("Post title is empty")
      await (expect(blockBlog.createPost("author", "title", "", "subcat1", "content1", "imagehsh1"))).
      to.be.revertedWith("Post category  is empty")
      await (expect(blockBlog.createPost("author", "title1", "cat1", "", "content1", "imagehsh1"))).
      to.be.revertedWith("Post subcategory is empty")
      await (expect(blockBlog.createPost("author", "title1", "cat1", "subcat1", "", "imagehsh1"))).
      to.be.revertedWith("Content  is empty")
      await (expect(blockBlog.createPost("author", "title1", "cat1", "subcat1", "content1", ""))).
      to.be.revertedWith("No hashed image uri")

      console.log(await blockBlog.blogCounter());

    })
  })

  describe("Test for article Interactions", () => {

    it( "Like", async () => {
      const {blockBlog, userAccount} = await loadFixture(load_fixtures);

      await blockBlog.Like(1)
      // const post = blockBlog.blogCounter(1)
      expect((await blockBlog.blogPosts(1)).likes).to.equal(1)
      
    })

  })
 
})