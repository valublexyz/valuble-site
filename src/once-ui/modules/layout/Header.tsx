"use client";

import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Logo,
  NavIcon,
  ToggleButton,
  UserMenu,
  Option,
  Text,
  Line,
  Row,
} from "@/once-ui/components";
import { Sidebar } from "@/once-ui/modules/layout/Sidebar";
import { useRouter, usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname() ?? "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Menyimpan status scroll

  // Detect scrolling and update state accordingly
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change state if scrolled beyond 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <Flex
      as="header"
      fillWidth
      paddingX="m"
      height="56"
      vertical="center"
      horizontal="center"
      background="surface"
      zIndex={10}
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease",
        borderBottom: "1px solid var(--neutral-border-strong)",
      }}
    >
      <Flex fillWidth hide="s" gap="12" vertical="center" horizontal="center">
        <Logo iconSrc="/trademark/logoValuble.svg" wordmark={false} /> 
        <Text variant="heading-default-s" align="start">Valuble</Text>
      </Flex>
      <Flex show="s" gap="4" vertical="center">
        {/* <NavIcon onClick={toggleMenu} /> */}
        <Logo iconSrc="/trademark/logoValuble.svg" wordmark={false} />
        <Text variant="heading-default-s" align="start">Valuble</Text>

      </Flex>
      {/* Menu */}
      {/* <Flex fillWidth vertical="center" horizontal="space-between">
        <Flex fillWidth>
          <Flex hide="s" fillWidth gap="4" paddingX="m" vertical="center">
            <ToggleButton selected={pathname === "/"} href={`/`} label="Dashboard" />
            <ToggleButton selected={pathname.startsWith("/gallery")} href={`/gallery`} label="Recovery Tools" />
            <ToggleButton selected={pathname.startsWith("/faucet")} href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia" label="About Us" />
          </Flex>
        </Flex>

        <Flex vertical="center" gap="8">
          <Button id="mintNFT" size="m" variant="primary" weight="strong" arrowIcon label="Mint NFT" href={`/mintNFT`} />
        </Flex>
      </Flex> */}
      {/* Show Side Bar for Mobile Device */}
      {isMenuOpen && (
        <Flex
          direction="column"
          gap="8"
          padding="m"
          fillWidth
          maxWidth={20}
          position="absolute"
          marginLeft="0"
          marginRight="0"
          zIndex={10}
          style={{
            left: "0px",
            minWidth: "100%",
            position: "absolute",
            top: "50px",
          }}
        >
          <Sidebar></Sidebar>
        </Flex>
      )}
    </Flex>
  );
};

Header.displayName = "Header";
export { Header };
