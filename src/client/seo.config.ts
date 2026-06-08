export const seoConfig = {
  siteName: "TwAy Engineering Limited",
  description:
    "Engineering, infrastructure, procurement, consultancy, and LPG distribution services across Nigeria.",
  formatTitle(title?: string) {
    return title
      ? `${title} · TwAy Engineering Limited`
      : "TwAy Engineering Limited — Building Infrastructure. Delivering Excellence.";
  }
};
