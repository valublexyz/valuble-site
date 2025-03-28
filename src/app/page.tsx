"use client";

import React, { useState } from "react";

import {
  Heading,
  Text,
  Icon,
  InlineCode,
  Line,
  Background,
  Column,
  Flex
} from "@/once-ui/components";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";
import { Header } from "@/once-ui/modules/layout/Header";
import { Footer } from "@/once-ui/modules/layout/Footer";


export default function Home() {
  return (
    <Column fillWidth paddingY="m" paddingX="m" horizontal="center" flex={1}>
      <Header></Header>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        marginTop="m"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
          border="neutral-alpha-weak"
          borderWidth={2}
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
                A Growing Crypto
              <Text onBackground="brand-medium" marginLeft="8">
               Community
              </Text>
            </InlineCode>
            <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
              Coming Soon ...
            </Heading>
            <Column horizontal="center" paddingTop="64" fillWidth gap="24">
              <Line maxWidth={4} marginBottom="16" background="neutral-alpha-medium" />
            </Column>
          </Column>
        </Column>
        {/* Content Page Here */}
      </Column>
      <Flex fillWidth marginTop="xl">
        <Footer></Footer>
      </Flex>
    </Column>
  );
}