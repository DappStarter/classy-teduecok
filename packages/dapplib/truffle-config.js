require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name riot night modify grace bread suspect ghost'; 
let testAccounts = [
"0xb7af4e2842cb05c6aea6e750e1a07c4e6e9f83bb123fd4d1c11c69d95e888ee1",
"0x5d6ab9cdaf3f731e79b79beb1259546d50547d65972df73ac95847b7062c6579",
"0x6f13a14165e141eb7c75db733dbfdd6e4aeae082e22ff01df11c7a7745ab4053",
"0x527f41f07072024cbd56c9b0b00eb872076e6f0755de723157021868d1e73c8f",
"0x9ab3563bb9c24c475020369525a32cf6539a49d2775e2e34e18c388ecbd241dd",
"0x79b2d9c457dd79429f9431a7365bc7b88cb0da7a77cd83583119288100e74aef",
"0xe4a89478b43744b1de814016ce1768a25fcd66b4de8f80e1d9287dbb123ff6e8",
"0x8d48a3f33b438d503e7a42a0c65ef9dda685ea69b4cae865451e20b950b261c3",
"0xa2ccf84e3e49a041d73fa591eef05c19c883d17db3c7b88d7240b54880d99bfe",
"0x484b21f87124cd387841f62d3d3e634a4149a38943d1e59bb16e0f57c6055b87"
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
