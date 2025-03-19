import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify"; // Import ToastContainer from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Courier BD App",
  description: "Courier application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* The ToastContainer should be here to render toasts */}
        <ToastContainer
          position="top-right" // Optional: You can adjust the position of the toast
          autoClose={5000} // Optional: Toast will auto-close after 5 seconds
          hideProgressBar={false} // Optional: Show or hide progress bar
          newestOnTop={false} // Optional: Toasts will stack bottom-to-top
          closeOnClick // Optional: Close toast on click
          pauseOnHover // Optional: Pause toast on hover
        />
        {children}
      </body>
    </html>
  );
}
