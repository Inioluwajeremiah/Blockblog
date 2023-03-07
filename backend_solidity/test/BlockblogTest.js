const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { expect } = require("chai");

// convert ether to wei using the parseEther method
const toWei = (eth) => ethers.utils.parseEther(eth.toString())
// convert wei to ether using the formatEther method
const fromWei = (eth) => ethers.utils.formatEther(eth)
const toBytes = (byt) => ethers.utils.formatBytes32String(byt);
  
  describe ("BlockBlog",  () => {
  
    const load_fixtures = async () => {
    const BlockBlog = await ethers.getContractFactory("BlockBlog");
    const blockBlog = await BlockBlog.deploy();
    const [userAccount, accountTwo, accountThree] = await ethers.getSigners()
  
      return {BlockBlog, blockBlog, userAccount, accountTwo, accountThree}
    }
  
    describe ("check Posts", () => {
      
      it ("Create Post", async () => {
        const {blockBlog, userAccount} = await loadFixture(load_fixtures);
  
        console.log("user account", userAccount.address);
        await (expect(blockBlog.createPost("post meta data"))).
        to.emit(blockBlog, "PostCreated").withArgs(1, userAccount.address, "post meta data");
  
        expect(await blockBlog.blogCounter()).to.equal(1);
  
        const blockpost = await blockBlog.blogPosts(1)
  
        expect( blockpost.id).to.equal(1)
        expect(blockpost.publication_metadata).to.equal("post meta data")
        expect(blockpost.authors_address).to.equal(userAccount.address)
      })
  
      it ("Test for input validation at createPost", async () => {
        const {blockBlog, userAccount} = await loadFixture(load_fixtures);
  
        await (expect(blockBlog.createPost(""))).to.be.revertedWith("metadata is required")

        console.log(await blockBlog.blogCounter());
  
      })
    })

    describe ("Create profile", () => {

      it ("Test for 'Create profile' function ", async () => {
        const {blockBlog, userAccount} = await loadFixture(load_fixtures)

        console.log("user account", userAccount.address)
        await (expect(blockBlog.CreateProfile("profile meta data"))).to.emit(blockBlog, "ProfileEvent").withArgs(1, userAccount.address, "profile meta data")

        expect(await blockBlog.profileCount()).to.equal(1);

        const profiles = await blockBlog.profiles(userAccount.address)

        expect(profiles.profileId).to.equal(1)
        expect(profiles.profile_metadata).to.equal("profile meta data")
        expect(profiles.profile_address).to.equal(userAccount.address)
      })
  
      it ("Test for input validation at create profile", async () => {
        const {blockBlog, userAccount} = await loadFixture(load_fixtures);
  
        await (expect(blockBlog.CreateProfile(""))).to.be.revertedWith("metadata is required")
      })

    })

    describe ("BuyMeCoffee", () => {

      it ("Test for' BuyMeCoffee' function", async () => {
          const {blockBlog, userAccount, accountTwo, accountThree} = await loadFixture(load_fixtures);

          let amount = toWei(0.005)
          let charge_fee = amount * 1 / 100
          let tip_amt = amount - charge_fee

          console.log(amount, charge_fee, tip_amt);
          console.log("account two address =>", accountTwo.address);


          // set accounttwo to buy product and test for emitted values
          await expect(blockBlog.connect(accountTwo).BuyMeCoffee(accountThree.address, amount, {value: amount})).to.emit(blockBlog, "BuyMeCoffeeEvent").withArgs(accountThree.address, charge_fee, tip_amt)
      })

      it ("Test for input validation at  buyme coffee", async () => {
          const {blockBlog, userAccount, accountTwo, accountThree} = await loadFixture(load_fixtures);
  
          await (expect(blockBlog.connect(accountTwo).BuyMeCoffee(accountThree.address, 0))).to.be.revertedWith("Amount must be greater than 0")
      })
    })
  })
