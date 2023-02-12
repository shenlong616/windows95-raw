import { Helmet, HelmetProvider } from "react-helmet-async";

export function HeadTag() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Helmet>
    </HelmetProvider>
  );
}
