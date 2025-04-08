"use client";

import React from "react";
import { Button, Flex, Text, SmartLink, Column, Row } from "@/once-ui/components";
import { social } from "@/once-ui/resources/config";


const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      paddingX="m"
      paddingY="m"
      horizontal="space-between"
      vertical="center"
      style={{
        borderTop: "1px solid var(--brand-border-strong)",
      }}
    >
      <Text variant="body-default-s" onBackground="neutral-strong">
        <Text onBackground="neutral-weak">© 2025 / </Text>
        <SmartLink
            style={{ marginLeft: "-0.125rem" }}
            href="https://reyhanadr.com"
          >
          <Text paddingX="2">Valuble /</Text>
          </SmartLink>
        <Text onBackground="neutral-weak">
          Developed with{" "}
          <SmartLink
            style={{ marginLeft: "-0.125rem" }}
            href="https://github.com/once-ui-system/nextjs-starter"
          >
            Once UI (Next JS)
          </SmartLink>
        </Text>
      </Text>
      <Flex gap="xs" mobileDirection="row" tabletDirection="column" >
        <Button
          href={social.github}
          prefixIcon="github"
          size="m"
          variant="tertiary"
        >
        </Button>
        <Button
          href={social.linkedin}
          prefixIcon="FaLinkedin"
          size="m"
          variant="tertiary"
        >
        </Button>
      </Flex>
    </Flex>
  );
};

Footer.displayName = "Footer";
export { Footer };
