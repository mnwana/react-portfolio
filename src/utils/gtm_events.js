import { useGTMDispatch } from "@elgorditosalsero/react-gtm-hook";

export function handleNavClick(navTitle) {
  const sendDataToGTM = useGTMDispatch();
  sendDataToGTM({ event: "nav_bar_click", value: "navTitle" });
}
