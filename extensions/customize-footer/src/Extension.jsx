export default function Extension() {
  const {storefrontUrl} = shopify.shop;

  // [START custom-footer.render]
  return (
    <s-grid
      alignItems="center"
      gridTemplateColumns="1fr auto"
      accessibilityRole="navigation"
    >
      <s-stack
        direction="inline"
        gap="small-400"
        alignItems="center"
        accessibilityRole="ordered-list"
      >
        <s-stack
          direction="inline"
          accessibilityRole="list-item"
          alignItems="center"
          gap="small-400"
        >
          <s-link href={storefrontUrl}>Home</s-link>
          <s-icon type="chevron-right" size="small-200" />
        </s-stack>
        <s-stack
          direction="inline"
          accessibilityRole="list-item"
          alignItems="center"
          gap="small-400"
        >
          <s-link href={new URL("/collections", storefrontUrl).href}>
            Shop
          </s-link>
          <s-icon type="chevron-right" size="small-200" />
        </s-stack>
        <s-stack direction="inline" accessibilityRole="list-item">
          <s-text color="subdued">Checkout</s-text>
        </s-stack>
      </s-stack>

      <s-stack
        direction="inline"
        gap="small-200"
        alignItems="end"
        accessibilityRole="ordered-list"
      >
        <s-box accessibilityRole="list-item">
          <s-link href={new URL("/sizing", storefrontUrl).href}>Sizing</s-link>
        </s-box>
        <s-box accessibilityRole="list-item">
          <s-link href={new URL("/terms", storefrontUrl).href}>Terms</s-link>
        </s-box>
        <s-box accessibilityRole="list-item">
          <s-link href={new URL("/privacy", storefrontUrl).href}>
            Privacy
          </s-link>
        </s-box>
        <s-box accessibilityRole="list-item">
          <s-link href={new URL("/faq", storefrontUrl).href}>FAQ</s-link>
        </s-box>
        <s-box accessibilityRole="list-item">
          <s-link href={new URL("/accessibility", storefrontUrl).href}>
            Accessibility
          </s-link>
        </s-box>
      </s-stack>
    </s-grid>
  );
  // [END custom-footer.render]
}
