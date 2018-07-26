const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider (
  'kangaroo rate arctic vendor cliff rate tonight release goddess despair south light',
  'https://rinkeby.infura.io/v3/c18327ec75324ec68d6b1edfd8f26edc'
)

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Deploy the contract', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: ['Hey there!'] })
  .send({ gas: '3000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();
