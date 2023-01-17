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

  describe ("check posts", () => {
    
    it ("Create Post", async () => {
      const {blockBlog, userAccount} = await loadFixture(load_fixtures);

      console.log("user account", userAccount.address);
      await (expect(blockBlog.createPost("author 1", "title1", "cat1", "subcat1", "content1", "imagehsh1"))).
      to.emit(blockBlog, "PostCreated").withArgs(1, "author 1", "title1", "cat1", "subcat1", "content1", userAccount.address, "imagehsh1");

      expect(await blockBlog.blogCounter()).to.equal(1);

    })

  })
 
})