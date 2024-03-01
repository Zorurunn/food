"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/theme";
import { PropsWithChildren, useState } from "react";
import { AuthProvider, DataProvider, Footer, TopBar } from "@/components ";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConfirmationProvider } from "@/components /providers/ConfirmationProvider";
import { BackDropProvider } from "@/components /providers/BackDropProvider";
import { AmountProvider } from "@/components /providers/AmountProvider";
import { OrderDataProvider } from "@/components /providers/OrderDataProvider";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <DataProvider>
                <OrderDataProvider>
                  <ConfirmationProvider>
                    <AmountProvider>
                      <BackDropProvider>
                        <Stack
                          minHeight="100vh"
                          width={"100%"}
                          position={"relative"}
                        >
                          <TopBar />
                          <Stack flex={1}>{children}</Stack>
                          <Footer />
                        </Stack>
                      </BackDropProvider>
                    </AmountProvider>
                  </ConfirmationProvider>
                </OrderDataProvider>
              </DataProvider>
            </AuthProvider>
          </ThemeProvider>
          <CssBaseline />
          <ToastContainer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
