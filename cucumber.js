module.exports = {
    default: {
        paths: ["features/**/*.feature"],

        requireModule: ["ts-node/register"],

        require: [
            "step-definitions/**/*.ts",
            "supports/**/*.ts"
        ],

        format: ["progress"]
    }
};