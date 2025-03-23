import React from "react";
import ClientLayout from "./components/shared/ClientLayout";
import "./globals.css";
import ThemeProvider from "./components/theme/ThemeProvider";
import AuthProvider from "@/Auth/AuthProvider";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <html lang="en">
        <body
          cz-shortcut-listen="true"
          className="bg-pattern"
          data-new-gr-c-s-check-loaded="14.1228.0"
          data-gr-ext-installed=""
        >
          <AuthProvider>
            <ThemeProvider>
              <ClientLayout>{children}</ClientLayout>
            </ThemeProvider>
          </AuthProvider>
        </body>
      </html>
    </div>
  );
};

export default layout;
