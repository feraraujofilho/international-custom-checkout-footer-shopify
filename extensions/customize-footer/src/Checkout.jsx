import '@shopify/ui-extensions/preact';
import {render} from "preact";
import Extension from "./Extension.jsx";

export default function() {
  render(<Extension />, document.body)
}
