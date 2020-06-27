module.exports = {
    extends: ['prettier'],
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error'
    }
}
