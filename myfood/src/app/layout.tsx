"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/theme";
import { PropsWithChildren } from "react";
import { Footer, TopBar } from "@/components ";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Stack minHeight="100vh" width={"100%"} position={"relative"}>
              <TopBar />
              <Stack flex={1}>{children}</Stack>
              <Footer />
            </Stack>
          </ThemeProvider>
          <CssBaseline />
          <ToastContainer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
