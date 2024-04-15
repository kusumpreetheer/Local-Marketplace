"use client";

interface ClientWrapperProps {
  children: React.ReactNode;
}
export const ClientWrapper = ({ children }: ClientWrapperProps) => {
  return <>{children}</>;
};