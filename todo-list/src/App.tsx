import { ChakraProvider, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import LandingLayout from "./components/Layouts/LandingLayout";
import Content from "./components/Sections/Content";
import Navbar from "./components/Sections/Navbar";

function App() {
  return (
    <ChakraProvider>
      <LandingLayout>
        <Grid templateColumns={"1fr 5fr"} width="100%">
          <Navbar />
          <Content>
            <Outlet />
          </Content>
        </Grid>
      </LandingLayout>
    </ChakraProvider>
  );
}

export default App;
