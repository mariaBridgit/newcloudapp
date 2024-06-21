import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "./Header";
import Page from "./Page";

export default function App() {
  return (
    <MantineProvider>
      <Header />
      <Page />
    </MantineProvider>
  );
}
