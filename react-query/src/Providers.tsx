import React, { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";
import queryClient from "./services/queryClient";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
