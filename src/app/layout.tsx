import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes"
import { SITE_CONFIG } from "@/config";

const poppins = Poppins({ 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ["latin"],
});

export const metadata = SITE_CONFIG;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    poppins.className
                )}
            >
                <ClerkProvider appearance={{baseTheme: dark}}>
                    {children}
                </ClerkProvider>
            </body>
        </html>
    );
};
