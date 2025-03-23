"use client";

import { Flex, Icon, ToggleButton, Text } from "@/once-ui/components";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname() ?? "";

  return (
    <Flex
      // data-theme="dark"
      fillWidth
      fillHeight
      paddingX="12"
      paddingY="24"
      gap="2"
      background="surface"
      role="sidebar"
      border="neutral-medium"
      borderStyle="solid"
      radius="m-4"
      vertical="start"
      horizontal="start"
      direction="column"
      flex={1}
    >
      {/* <Flex fillWidth gap="4" direction="column">
        <Text
          variant="body-default-xs"
          onBackground="neutral-strong"
          marginBottom="8"
          marginLeft="16"
        >
          Menu
        </Text>
        <ToggleButton
          fillWidth
          justifyContent="flex-start"
          href={`/`}
          selected={pathname.includes("/home")}
        >
          <Flex
            padding="4"
            horizontal="center"
            gap="12"
            textVariant="label-default-s"
          >
            <Icon
              name="PiHouseDuotone"
              onBackground="neutral-strong"
              size="xs"
            />
            Home
          </Flex>
        </ToggleButton>
        <ToggleButton
          fillWidth
          justifyContent="flex-start"
          href={`/gallery`}
          selected={pathname.includes("/gallery")}
        >
          <Flex
            padding="4"
            horizontal="center"
            gap="12"
            textVariant="label-default-s"
          >
            <Icon name="GrGallery" onBackground="neutral-strong" size="xs" />
            Gallery
          </Flex>
        </ToggleButton>
        <ToggleButton
          fillWidth
          justifyContent="flex-start"
          href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
          selected={pathname.includes("/faucet")}
        >
          <Flex
            padding="4"
            horizontal="center"
            gap="12"
            textVariant="label-default-s"
          >
            <Icon name="FaFaucet" onBackground="neutral-strong" size="xs" />
            Faucet
          </Flex>
        </ToggleButton>
      </Flex> */}
    </Flex>
  );
};

Sidebar.displayName = "Sidebar";
export { Sidebar };
