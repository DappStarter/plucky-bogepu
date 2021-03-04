require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name raise rural uncover idea praise army gather'; 
let testAccounts = [
"0xab196af831cb5ed43e716b0b361e9312a479b0be292f07247e575d91982602bd",
"0x6693b0bf2dbeab688fa0f62f32b06f984ee01a6944592f5f56f333c60341aa84",
"0x97fd0498af92bfa1820acb15fb8b4299af2218cae8f4373899b9c274d3ff080e",
"0xa35bd11393ab3989ba18b9465c749a68974e7ff77eb7ef743d216c977dc733c7",
"0xedb52c897d02eeec01d44e62e6e81a09598b6a2c40b33e25d5534b0e22d34d97",
"0xecd4f3e5d6a6622c2e9e4635b5cf18aee2a3ba40195d612a6630b57c9f3be619",
"0x958b2a09c076075fc20dbb8cb3bc4646818615e60f864f66bedd4ac3818dbce4",
"0xab0431397a6e952f44c66f6e9c2cc822d7ac4fbb417151d7ca9343dad2d7aba4",
"0xad3d2025845ee0a5041c388fe1241310ca90ed1638f35b880c9e258ee20345d2",
"0xb60df7d8b00c09003b6ef17fcd6a050d23292d4fca9d0cad3d45dc6c7aaf4729"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
