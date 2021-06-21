import React from "react";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <main>
      {children}

      <style jsx global>{`
        * {
          font-family: IBM Plex Mono, Menlo, Monaco, "Lucida Console",
            "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
            "Courier New", monospace, serif;
          padding: 0;
          margin: 0;
        }
        body {
          margin: 0;
          padding: 25px 50px;
        }
        a {
          color: #22bad9;
        }
        p {
          font-size: 14px;
          line-height: 24px;
        }
        article {
          margin: 0 auto;
          max-width: 650px;
        }
      `}</style>
    </main>
  );
};
