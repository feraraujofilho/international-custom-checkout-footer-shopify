import '@shopify/ui-extensions/preact';
import {render} from "preact";
import Extension from "./Extension.jsx";

// [START custom-footer.ext-point]
export default function() {
  render(<Extension />, document.body)
}
// [END custom-footer.ext-point]
