const baseURL = "valuble.xyz";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "light", // dark | light
  neutral: "custom", // sand | gray | slate
  brand: "custom", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "custom", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast | inverse
  solidStyle: "plastic", // flat | plastic
  border: "conservative", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "Valuble - A Growing Crypto Community",
  description:
    "Join Valuble, a vibrant crypto community where airdrop hunter, investors, and traders, share insights, and explore the latest trends in blockchain, DeFi, NFTs, and Web3. Stay updated and grow with the crypto world.",
};

// default open graph data
const og = {
  title: "Valuble - A Growing Crypto Community",
  description: "Join Valuble, a vibrant crypto community where airdrop hunter, investors, and traders, share insights, and explore the latest trends in blockchain, DeFi, NFTs, and Web3. Stay updated and grow with the crypto world.",
  type: "website",
  image: "/images/cover.jpg"
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "Valuble",
  description: "Join Valuble, a vibrant crypto community where airdrop hunter, investors, and traders, share insights, and explore the latest trends in blockchain, DeFi, NFTs, and Web3. Stay updated and grow with the crypto world.",
  email: "",
};

// social links
const social = {
  linkedin: "https://www.linkedin.com/company/valuble",
  github: "https://github.com/valublexyz",
};

export { baseURL, style, meta, og, schema, social };
