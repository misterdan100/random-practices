import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CreateTodoModal, Footer, Sidebar, Topmenu } from "@/components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const mainFont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo Dan V4 - Next App",
  description: "Practice Todo List App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} relative h-screen`}>

        <Topmenu />

          <div className="flex bg-white pt-16 h-full overflow-hidden">
            {/* apply hidden class by condition */}
            <Sidebar />

            <div
              id="main-content"
              className="h-full w-full bg-gray-50 relative  lg:ml-64 overflow-y-auto"
            >
              <main className="pt-6 px-4 flex-1 ">
                {/* main content */}
                {children}
              </main>

              {/* Footer aqui..... */}
              <Footer />
            </div>
          </div>


        <CreateTodoModal />
        <ToastContainer 
          position="bottom-right"
          autoClose={3000}
        />
        
      </body>
    </html>
  );
}
