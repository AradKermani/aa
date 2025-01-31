"use client"; 
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // اضافه کردن useRouter
import { FaAngleUp, FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaFacebookF } from "react-icons/lia";
import { PiInstagramLogo } from "react-icons/pi";
import { useCallback, useState } from "react";
import Login from "./login";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter(); // استفاده از useRouter

  const isActive = (path: string) => pathname === path;

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [openLogin, setOpenLogin] = useState(false);

  const handleLoginClick = () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (token) {
      router.push("/dashboard"); // استفاده از router.push به جای window.location.href
    } else {
      setOpenLogin(true);
    }
  };

  return (
    <footer>
      {openLogin && <Login setOpenLogin={setOpenLogin} />}
      <div id="up" onClick={scrollToTop}>
        <span>
          <FaAngleUp />
        </span>
      </div>
      <ul>
        <li className={isActive("/") ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={isActive("/projects") ? "active" : ""}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={isActive("/About") ? "active" : ""}>
          <Link href="/About">About Us</Link>
        </li>
        <li onClick={handleLoginClick}>
          <span>Login For Admin</span>
        </li>
      </ul>
      <div className="social-media">
        <a href="#">
          <PiInstagramLogo />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <GrLinkedinOption />
        </a>
        <a href="#">
          <LiaFacebookF />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
