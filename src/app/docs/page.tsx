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
          hiddenClients: {
            // Show only: Shell (curl), Node.js, Python
            // Hide everything else entirely
            c: true,
            clojure: true,
            csharp: true,
            dart: true,
            fsharp: true,
            go: true,
            http: true,
            java: true,
            js: true,
            kotlin: true,
            objc: true,
            ocaml: true,
            php: true,
            powershell: true,
            r: true,
            ruby: true,
            rust: true,
            swift: true,
            // Keep these visible (false = show all sub-clients)
            shell: false,
            node: false,
            python: false,
          },
        }}
      />
    </div>
  );
}
