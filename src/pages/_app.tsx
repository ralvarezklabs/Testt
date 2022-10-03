import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ModuleProvider } from "../context/SelectedModuleContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModuleProvider>
      <Component {...pageProps} />
    </ModuleProvider>
  );
}

export default MyApp;
