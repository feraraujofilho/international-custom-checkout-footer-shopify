# International Custom Footer Checkout Extension

This project is an **expansion** of Shopify's [custom footer checkout extension example](https://github.com/Shopify/example-checkout--custom-footer--preact) that adds **dynamic, market-aware functionality**.

## What's Different?

This enhanced version uses Shopify's localization APIs to automatically update footer content based on the customer's delivery country or market context. When a customer changes their shipping address during checkout, the footer links and content automatically update to reflect their location.

### Key Features

- **Dynamic Market Detection**: Uses `useLocalizationCountry()` and `useLocalizationMarket()` hooks
- **Auto-updating Content**: Footer automatically re-renders when delivery address changes
- **Country-Specific Links**: Different footer links for US, Germany (DE), and default markets
- **Preact Implementation**: Built with Preact for optimal performance

## Original Project

This project is based on Shopify's example app that uses [checkout UI extensions](https://shopify.dev/docs/api/checkout-ui-extensions) to build a custom footer using Polaris web components.

For the original tutorial, see: [Build a custom footer checkout extension](https://shopify.dev/docs/apps/checkout/header-footer/customize-footer)

## Running this app

To run this app locally, clone the repository, and then follow Shopify's [Work on an existing app](https://shopify.dev/docs/apps/tools/cli/existing) tutorial to install the project dependencies and preview the app.

### Prerequisites

- Node.js 16 or higher
- Shopify CLI
- A Shopify development store

### Installation

```bash
npm install
shopify app dev
```

## Implementation Details

The key implementation is in `/extensions/customize-footer/src/Extension.jsx`:

- Uses `useLocalizationCountry()` to detect the customer's country
- Dynamically generates footer links based on country code
- Automatically re-renders when shipping address changes

## Contributing

This is a personal example project expanding on Shopify's official example. Feel free to fork and adapt for your own use cases.
