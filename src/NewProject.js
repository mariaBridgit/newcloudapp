import "./App.css";
import "./Mantine.css";

import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Group,
  TextInput,
  Textarea,
  Select,
} from "@mantine/core";

export default function NewProjectInfo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="New Project" centered>
        <TextInput
          withAsterisk
          label="Project Name"
          placeholder="Type in your project name"
        />
        <br />

        <Textarea
          withAsterisk
          label="Project Description"
          placeholder="Type your project description"
        />
        <br />
        <Select
          withAsterisk
          label="Team"
          placeholder="Select team"
          data={["Team A", "Team B", "Team C", "Team D"]}
        />
        <br />
        <Select
          withAsterisk
          label="Status"
          placeholder="Select status"
          data={["To-Do", "In-Progress", "Completed"]}
        />
        <br />
        <Group justify="flex-end" mt="md">
          <Button
            type="cancel"
            style={{
              borderColor: "#FF6700",
              color: "#FF6700",
              backgroundColor: "#fff",
              width: "105px",
            }}
          >
            Cancel
          </Button>
          <Button
            type="save"
            style={{ backgroundColor: "#FF6700", width: "105px" }}
          >
            Save
          </Button>
        </Group>
      </Modal>
      <div className="NewProject">
        <Button onClick={open}>+ Project</Button>
      </div>
    </>
  );
}
