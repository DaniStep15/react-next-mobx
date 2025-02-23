module.exports = {
    extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': ['error'],
        'react/react-in-jsx-scope': 'off',
        'no-console': 'warn',
        '@next/next/no-html-link-for-pages': 'off'
    }
}
