import { Menu } from "semantic-ui-react";
import { useRouter } from "next/dist/client/router";

export default function Gnb() {
  const router = useRouter();
  let activeItem;
  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router === "/about") {
    activeItem = "about";
  } else if (router === "/admin") {
    activeItem = "admin";
  }

  function go_link(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={go_link} />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={go_link}
      />
      <Menu.Item
        name="contact Us"
        active={activeItem === "contact"}
        onClick={() => {
          router.push("/contact");
        }}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={() => {
          router.push("/admin");
        }}
      />
    </Menu>
  );
}
