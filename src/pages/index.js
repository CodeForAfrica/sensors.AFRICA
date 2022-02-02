import React from "react";

import DocumentHead from "@/sensorsafrica/components/DocumentHead";
import { URLS } from "@/sensorsafrica/components/DocumentHead/PageHeads";
import Footer from "@/sensorsafrica/components/Footer";
import Hero from "@/sensorsafrica/components/Landing/Hero";

function Home() {
  return (
    <>
      <DocumentHead url={URLS.HOME} />
      <Hero />
      <Footer />
    </>
  );
}

export default Home;
