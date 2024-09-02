const config = {
  "*": "prettier --write",
  "*.{ts,tsx,js,mjs,cjs}": "lint --fix",
};

export default config;
