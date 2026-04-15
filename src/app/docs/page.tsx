"use client";

import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";
import { API_BASE_URL } from "@/lib/constants";

export default function DocsPage() {
  return (
    <div className="scalar-container">
      <ApiReferenceReact
        configuration={{
          url: `${API_BASE_URL}/api/openapi.json`,
          theme: "kepler",
          darkMode: false,
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
