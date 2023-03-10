import { RenderScreenProvider } from "./render-screen";

export function Hooks({ children }) {
  return <RenderScreenProvider>{children}</RenderScreenProvider>;
}
