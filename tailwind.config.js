/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue"
];
export const theme = {
  extend: {
    backgroundImage: {
      /* headers */
      "frontpage": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/LandingPage1.webp')",
      "footerbar": "linear-gradient(180deg,#4cbedb 0%,rgba(41,196,169,0) 100%),url('/assets/img/Karup-Presse-33.jpg')",
      "solcellepage": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#0077af 100%),url('/assets/img/solcellerForside.jpeg')",
      "chargingStansPage": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#0077af 100%),url('/assets/img/ChargingStans/Forside.webp');",
      "erhvervpage": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/Karup-Presse-33.jpg')",
      "sonnenpage": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#0077af 100%),url('/assets/img/battery_bank/SonnenWall_Battery.webp')",
      "support": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/support/supportForside.jpg')",
      "about": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/about/bg-House-with-panels.jpg')",



      /* Blog */
      "ventilation": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/Ventilation.webp')",
      "8800": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/8800-Viborg.webp')",
      "4793": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/4793-Bogo.webp')",
      "8585": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/8585-Glesborg.jpg')",
      "mono": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/Monocrystalin_Solceller.webp')",
      "graph": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/graph.png')",
      "livingroom": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/living-room.png')",
      "bank&suncell": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/battery_bank/Bank&Suncell.webp')",
      "garagepanels": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/garage-with-panels.jpg')",
      "cellfarm": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/suncell-farm.webp')",
      "rasmus": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/rasmus.webp')",
      "moneyvalue": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/value-of-money.jpeg')",
      "suez": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/suez.webp')",
      "space": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/space-station-solar.jpg')",
      "growatt": "linear-gradient(180deg,rgba(58,52,226,0) 0%,#4cbedb 100%),url('/assets/img/blogs/Growatt-Background.jpg')",

      /* Parallax */
      "frontpageParallax1": "url('/assets/img/LandingPage2.webp')",
      "frontpageParallax2": "url('/assets/img/LandingPage3.webp')",
      "solcellersonpowerParallax": "url('/assets/img/solcellerForside.jpeg')",
      "huaweiBatteryBankParallax1": "url('/assets/img/battery_bank/bg_Sun2k_Luna2k.webp')",
      "sonnenBatteryBankParallax1": "url('/assets/img/battery_bank/bg_Sonnen.webp')",
      "ladeStanderParallax1": "url('/assets/img/ChargingStans/ChargingStansS1.jpeg')",
      "erhvervsAnlaegParallax1": "url('/assets/img/erhvervsanlaeg/erhvervsanlaegS2.jpg')",
      "PriceCalculator1": "url('/assets/img/Prisbergner/PrisbergnerDSC09075-1-1-scaled.webp')",

      /* divider */
      "dividerlightblue": "url('/assets/svg/divider-pic.svg')",
      "dividerlightblueFooter": "url('/assets/svg/devider-pic-footer.svg')",
      "dividerDarkBlue": "url('/assets/svg/divider-pic-dark-blue.svg')"
    },
    screens: {
      'xs': '400px'
    },
    colors: {
      "primary": "#2c95c9"
    }
  },
};
export const plugins = [];
