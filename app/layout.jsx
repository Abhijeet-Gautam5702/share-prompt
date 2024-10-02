import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import "@/styles/globals.css";

// Metadata of the Next-app (NextJS provides two different types of metadata- dynamic and static metadata)
export const metadata = {
  title: "Share Prompts",
  description: "Discover and share AI prompts",
};

// Sets the overall layout of the app
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
