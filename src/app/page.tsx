"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "../components/loading";

const Header = dynamic(() => import("../components/Header"));
const InstallPWAButton = dynamic(() => import("../components/InstallButton"));
const HeroSection = dynamic(() => import("../components/home/HeroSection"));
const AboutTheCompany = dynamic(() => import("../components/home/AboutTheCompany"));
const CompanyStats = dynamic(() => import("../components/home/CompanyStats"));
const ProjectsIndex = dynamic(() => import("../components/home/ProjectsIndex"));
const IndustryPride = dynamic(() => import("../components/home/IndustryPride"));
const ServiceIndex = dynamic(() => import("../components/home/ServiceIndex"));
const ProjectAndServices = dynamic(() => import("../components/home/ProjectAndServices"));
const ContactUsIndex = dynamic(() => import("../components/home/ContactUsIndex"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Header />
        <InstallPWAButton />
        <HeroSection />
        <AboutTheCompany />
        <CompanyStats />
        <ProjectsIndex />
        <IndustryPride />
        <ServiceIndex />
        <ProjectAndServices />
        <ContactUsIndex />
        <Footer />
      </div>
    </Suspense>
  );
}
