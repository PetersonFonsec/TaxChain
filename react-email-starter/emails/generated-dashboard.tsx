import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface GeneratedDashboardProps {
  link: string;
}

export const GeneretedDashboard = ({ link }: GeneratedDashboardProps) => (
  <Html>
    <Head />
    <Preview>Seu Dashboard Unico foi gerado!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Text style={title}>Seu Dashboard Unico foi gerado!</Text>
          
          <Text style={paragraph}>
            Seu Dashboard Unico foi gerado! acesse o link abaixo para visualizar
            a uma pagina unica feita especialmente para você.
          </Text>

          <Button style={button} href={link}>
            Acesse a sua pagina!
          </Button>

          <Text style={paragraph}>
            Lembrando, sua pagina ficara disponivel durante apenas 3 dias,
            depois sera apagada por conta de custos de armazenamento na cloud.
          </Text>

          <Hr style={hr} />

          <Text style={paragraph}>Feito com 💛 por um dev curioso.</Text>

          <Hr style={hr} />

          <Text style={footer}>
            © 2024 Peterson F. Simião. Todos os direitos reservados.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default GeneretedDashboard;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "24px 0",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#fff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "8px"
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const title = {
  color: "#000000",
  fontSize: "24px",
  lineHeight: "36px",
  textAlign: "left" as const,
  fontWeight: "bold"
};

const paragraph = {
  color: "#000000",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const button = {
  backgroundColor: "#F0B90B",
  borderRadius: "8px",
  color: "#000000",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  maxWidth: "100%",
  padding: "14px 32px",
  margin: "0 auto",
  cursor: "pointer"
};

const footer = {
  color: "#000000",
  fontSize: "12px",
  lineHeight: "16px",
};
