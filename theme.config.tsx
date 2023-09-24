import { React, useState, useEffect } from 'react'
import { useTheme, DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Image from "next/image";
import lightLogotype from "./public/images/logos/lightLogotype.png";
import darkLogotype from "./public/images/logos/darkLogotype.png";
import Link from "next/link";
import { useRouter } from "next/router";

const useDark = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
    return () => {
      false;
    };
  }, [resolvedTheme]);
  return isDark;
};

const config: DocsThemeConfig = {
  primaryHue: 43,
  primarySaturation: 30,
  project: {
    link: "https://github.com/phenomine/phenomine",
  },
  docsRepositoryBase: 'https://github.com/phenomine/phenomine',
  footer: {
    text: (
      <div>
        <div>
          <small>
            © {new Date().getFullYear()} The Phenomine Framework. Powered by { " " }
            <a href="https://spentura.com" target="_blank">
              Spentura
            </a>
            .
          </small>
        </div>
        <div style={{ marginTop: "5px" }}>
          <small>
            Code highlighting provided by { " " }
            <a href="https://shiki.matsu.io" target="_blank">
              Shiki
            </a>.
          </small>
        </div>
      </div>    
    )
  },
  toc: {
    extraContent: () => {
      return (
        <Link className='nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50' target="_blank" href="https://github.com/phenomine/phenomine">
          Support Phenomine →
        </Link>
      );
    },
    float: true,
    backToTop: true
  },
  feedback: { content: "Give us feedback →", labels: "feedback" },
  navigation: { next: true, prev: true },
  darkMode: true,
  editLink: {
    text: "Edit this page on GitHub →",
  },
  logo: () => {
    const isDark = useDark();
    return (
      <>
        <Image
          src={isDark ? darkLogotype : lightLogotype}
          width="120"
          alt="Phenomine"
          style={{ marginRight: "10px" }}
        />
        <span style={{ fontWeight: "600" }}></span>
      </>
    );
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – The Phenomine Framework",
      };
    }
    return { titleTemplate: "Phenomine is a Simple, Fast, and Powerful PHP Framework" };
  },
  head: () => {
    const { title, ...meta } = useConfig().frontMatter;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#37474f" />
        <meta property="og:site_name" content="Phenomine Docs" />
        <meta name="og:title" content="Phenomine Docs" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon/favicon-32x32.png"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="#37474f" />
        <meta name="apple-mobile-web-app-title" content="Phenomine" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/favicon.png"
        />
        <meta name="msapplication-TileColor" content="#37474f" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="keywords"
          content="phenomine, framework, php, phenomine php framework"
        />
        <meta
          property="description"
          content={
            meta.description ||
            "Phenomine is a simple, fast, and powerful PHP framework. It's provides a development framework that makes common tasks such as authentication, routing, sessions and caching much easier to implement."
          }
        />
      </>
    );
  },
}

export default config
