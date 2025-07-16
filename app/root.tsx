import type { Route } from "./+types/root";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import GenericError from "~/components/GenericError";
import NotFound from "~/components/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Global SEO */}
        <title>IAC Patrons Foundation – Greening India</title>
        <meta
          name="description"
          content="Join us in building a greener India through tree plantation, environmental education, and community action."
        />
        <meta
          name="keywords"
          content="tree plantation, green NGO, India, sustainability, reforestation, eco-education"
        />
        <meta name="author" content="IAC Patrons Foundation" />

        {/* ✅ Open Graph (for social sharing) */}
        <meta property="og:title" content="IAC Patrons Foundation" />
        <meta
          property="og:description"
          content="Empowering communities to restore ecological balance through trees and education."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://iacpf.vercel.app" />

        {/* ✅ Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IAC Patrons Foundation" />
        <meta
          name="twitter:description"
          content="Planting trees, educating youth, and building a greener future."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* ✅ Canonical */}
        <link rel="canonical" href="https://iacpf.vercel.app" />
        <link rel="manifest" href="/manifest.json" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />

        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <main className="pt-16 px-4 container mx-auto">
          <NotFound />
        </main>
      );
    }

    return (
      <main className="pt-16 px-4 container mx-auto">
        <GenericError
          message={error.statusText || "An unexpected error occurred."}
        />
      </main>
    );
  }

  return (
    <main className="pt-16 px-4 container mx-auto">
      <GenericError
        message={(error as Error)?.message}
        stack={import.meta.env.DEV ? (error as Error)?.stack : undefined}
      />
    </main>
  );
}

// export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
//   let message = "Oops!";
//   let details = "An unexpected error occurred.";
//   let stack: string | undefined;

//   if (isRouteErrorResponse(error)) {
//     message = error.status === 404 ? "404" : "Error";
//     details =
//       error.status === 404
//         ? "The requested page could not be found."
//         : error.statusText || details;
//   } else if (import.meta.env.DEV && error && error instanceof Error) {
//     details = error.message;
//     stack = error.stack;
//   }

//   return (
//     <main className="pt-16 p-4 container mx-auto">
//       <h1>{message}</h1>
//       <p>{details}</p>
//       {stack && (
//         <pre className="w-full p-4 overflow-x-auto">
//           <code>{stack}</code>
//         </pre>
//       )}
//     </main>
//   );
// }
