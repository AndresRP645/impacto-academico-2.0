import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import Navigation from "@/components/Navigation";
import Container from "react-bootstrap/Container";


export default function Layout({ title, nav, children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      nProgress.start()
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => nProgress.done());

    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, []);
  return (
    <>
      <Navigation nav={nav} title={title} />
      <Container className="container-fluid p-5">{children}</Container>
    </>
  );
}
