import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Heimdall",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="title" content="Heimdall" />
      <meta
        property="description"
        content="🔥 Painless OAuth 2.0 Server for CodeIgniter 4."
      />

      <meta property="twitter:title" content="Heimdall" />
      <meta
        property="twitter:description"
        content="🔥 Painless OAuth 2.0 Server for CodeIgniter 4."
      />

      <meta property="og:title" content="Heimdall" />
      <meta
        property="og:description"
        content="🔥 Painless OAuth 2.0 Server for CodeIgniter 4."
      />

      <meta property="og:url" content="https://heimdall.lazuardy.tech" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  ),
  logo: (
    <>
      <span>🤺 Heimdall</span>
    </>
  ),
  footer: {
    component: (
      <div className="footer">
        <div className="footer-content-left">
          <span>
            written with ❤️ by{" "}
            <b>
              <a href="https://nextra.site" target="_blank">
                nextra
              </a>
            </b>
          </span>
        </div>
        <div className="footer-content-right">
          <span>
            copyright {new Date().getFullYear()}
            {", "}
            <b>
              <a href="https://about.lazuardy.tech" target="_blank">
                @ezralazuardy
              </a>
            </b>
          </span>
        </div>
      </div>
    ),
  },
  sidebar: {
    toggleButton: true,
  },
  project: {
    link: "https://github.com/ezralazuardy/heimdall",
  },
  docsRepositoryBase: "https://github.com/ezralazuardy/heimdall-docs",
};

export default config;
