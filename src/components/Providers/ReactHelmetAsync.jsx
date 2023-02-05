import { HelmetProvider } from "react-helmet-async";

export function ReactHelmetAsync({ children }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
