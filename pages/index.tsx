import { Button, Group, UnstyledButton, Avatar, Text } from "@mantine/core";

export default function IndexPage() {
  return (
    <Group mt={50} position="center">
      <UnstyledButton>
      <Group>
        <Avatar size="xl" color="blue">RY</Avatar>
        <div>
          <Text size="xl">Rodrigo Yoshioka</Text>
          <Text size="xl" color="dimmed">rodrigo.yoshioka@gmail.com</Text>
        </div>
      </Group>
    </UnstyledButton>
    </Group>
  );
}
