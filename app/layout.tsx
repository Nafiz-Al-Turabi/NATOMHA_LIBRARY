import React from "react";
import ClientLayout from "./components/shared/ClientLayout";
import "./globals.css";
import ThemeProvider from "./components/theme/ThemeProvider";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <html lang="en">
        <body cz-shortcut-listen="true" className="bg-pattern">
          <ThemeProvider>
            <ClientLayout>{children}</ClientLayout>
          </ThemeProvider>
        </body>
      </html>
    </div>
  );
};

export default layout;
