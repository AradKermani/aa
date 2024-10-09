 "use client"
import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../../components/loading"; 

const Header = dynamic(() => import("../../components/Header"), {
  suspense: true,
});
const Footer = dynamic(() => import("../../components/Footer"), {
  suspense: true,
});
const AboutUsHeroSection = dynamic(
  () => import("../../components/about-us/AboutUsHeroSection"),
  {
    suspense: true,
  }
);
const AboutServices = dynamic(
  () => import("../../components/about-us/AboutServices"),
  {
    suspense: true,
  }
);
const AboutUsSectoin = dynamic(
  () => import("../../components/about-us/AboutusSection"),
  {
    suspense: true,
  }
);
const Mission = dynamic(() => import("../../components/about-us/Mission"), {
  suspense: true,
});
const Vision = dynamic(() => import("../../components/about-us/Vision"), {
  suspense: true,
});
const CoreValues = dynamic(
  () => import("../../components/about-us/CoreValues"),
  {
    suspense: true,
  }
);
const CompanyCollaborations = dynamic(
  () => import("../../components/about-us/CompanyCollaborations"),
  {
    suspense: true,
  }
);

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className="aboutUs">
        <Header />
        <AboutUsHeroSection />
        <AboutServices />
        <AboutUsSectoin />
        <Mission />
        <Vision />
        <CoreValues />
        <CompanyCollaborations />
        <Footer />
      </div>
    </Suspense>
  );
};

export default AboutUs;
