import React from "react";
import ClientLayout from "./components/shared/ClientLayout";
import "./globals.css";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <html lang="en">
        <body cz-shortcut-listen="true">
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </div>
  );
};

export default layout;
