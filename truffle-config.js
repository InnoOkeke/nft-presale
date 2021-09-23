require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");


module.exports = {
    networks:  {
        development: {
            host:       "127.0.0.1",
            port:       7545,
            network_id: "*",
        },
        bsctestnet:  {
            provider:        function () {
                return new HDWalletProvider(process.env.BRIDGE_MNEMONIC, "https://data-seed-prebsc-2-s1.binance.org:8545/");
            },
            network_id:      97,
            skipDryRun:      true,
            pollingInterval: 60000,
        },
        ethrinkeby:  {
            provider:        function () {
                return new HDWalletProvider(process.env.BRIDGE_MNEMONIC, `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`);
            },
            network_id:      4,
            skipDryRun:      true,
            pollingInterval: 60000,
        },
        bscmainnet:  {
            provider:        function () {
                return new HDWalletProvider(process.env.BRIDGE_MNEMONIC, "https://bsc-dataseed.binance.org/");
            },
            network_id:      56,
            skipDryRun:      true,
            pollingInterval: 60000,
        },
    },
    mocha:     {
        useColors:       true,
        timeout:         10 * 1000,
        slow:            10 * 1000,
        reporter:        "mochawesome",
        reporterOptions: {
            overwrite:      true,
            inline:         true,
            cdn:            true,
            json:           false,
            reportDir:      "doc",
            reportTitle:    "bridge-contract",
            reportFilename: "bridge-contract",
        },
    },
    compilers: {
        solc: {
            version:  "0.8.4",
            settings: {
                optimizer: {
                    enabled: true,
                    runs:    200,
                },
            },
        },
    },
    plugins:   ["solidity-coverage"],
};