export const links = (t: any) => [
  {
    label: t("Home"),
    icon: "HomeIcon",
    href: "/swap",
  },
  {
    label: t("Trade"),
    icon: "TradeIcon",
    items: [
      {
        label: t("Exchange"),
        href: "/swap",
      },
      {
        label: t("Liquidity"),
        href: "/liquidity",
      },
      // {
      //   label: t("Bridge"),
      //   href: "https://defi.swft.pro?sourceFlag=memory",
      // },
    ],
  },
  {
    label: t("NFTs"),
    icon: "GroupsIcon",
    items: [
      {
        label: t("Market"),
        href: "/market",
      },
    ],
  },
  {
    label: t("DAO"),
    icon: "NftIcon",
    href: "/dao",
  },
  // {
  //   label: t("IDO"),
  //   icon: "IfoIcon",
  //   href: "/ido",
  // },
  {
    label: t("Info"),
    icon: "InfoIcon",
    items: [
      {
        label: t("Overview"),
        href: "/overview",
      },
      {
        label: t("Tokens"),
        href: "/tokens",
      },
      {
        label: t("Pairs"),
        href: "/pairs",
      },
      {
        label: t("Accounts"),
        href: "/accounts",
      },
    ],
  },
  {
    label: t("More"),
    icon: "MoreIcon",
    items: [
      {
        label: t("Github"),
        href: "/github",
      },
      {
        label: t("Docs"),
        href: "https://docs.memorylabs.cloud",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/coreDaoSwap_cn",
      },
      {
        label: "简体中文",
        href: "https://t.me/coreDaoSwap_cn",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/CoreDaoSwap?s=09",
  },
];

export const MENU_HEIGHT = 50;
export const MENU_ENTRY_HEIGHT = 48;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
export const TOP_BANNER_HEIGHT = 70;
export const TOP_BANNER_HEIGHT_MOBILE = 84;
