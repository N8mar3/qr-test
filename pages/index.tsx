import type { NextPage } from "next";
import Header from "./components/header";
import { Container } from "@mui/system";
import MiddleBlock from "./components/middleblock"

const Home: NextPage = () => {
  
  return (
    <div>
      <Container maxWidth="sm">
        <Header/>
        <MiddleBlock/>
      </Container>
    </div>
  );
};

export default Home;
