import { FloatingWhatsApp } from "react-floating-whatsapp";
import logoGoshow from "../assets/logo.png";

export function WhatsappButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="+5555991605214"
      accountName="Goshow"
      placeholder="Deixe sua mensagem"
      chatboxClassName="w-6"
      statusMessage={"Disponível"}
      avatar={logoGoshow}
      allowClickAway={true}
      messageDelay={2}
      notificationDelay={1}
      chatMessage={
        `Seja bem vindo em nossa página ` + `\nPodemos ajudar em algo?`
      }
    />
  );
}
