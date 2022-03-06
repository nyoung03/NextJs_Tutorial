import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
// import Image from "next/image";

export default function Top() {
  return (
    <div>
      <div style={{ paddingTop: 20, display: "flex" }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/img/skylogo.png"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
        </div>
        <Header as="h1">nyoung</Header>
      </div>
      <Gnb />
    </div>
  );
}
