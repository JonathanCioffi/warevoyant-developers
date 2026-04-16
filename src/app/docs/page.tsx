"use client";

import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

export default function DocsPage() {
  return (
    <div className="scalar-container">
      <ApiReferenceReact
        configuration={{
          url: "/api/spec",
          theme: "kepler",
          darkMode: true,
          forceDarkModeState: "dark",
          hideDarkModeToggle: true,
          authentication: {
            preferredSecurityScheme: "apiKey",
          },
          hiddenClients: [
            "c",
            "clojure",
            "csharp",
            "dart",
            "http",
            "java",
            "kotlin",
            "objc",
            "ocaml",
            "powershell",
            "r",
            "swift",
          ],
        }}
      />
    </div>
  );
}
