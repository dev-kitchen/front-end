import "dotenv/config";

export default {
  expo: {
    name: "devKitchen",
    slug: "devKitchen",
    scheme: "devkitchen",
    extra: {
      API_URL: process.env.API_URL ?? "http://localhost:3000/api/",
    },
  },
};
