import React, { useState } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  Switch,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
CardDetails,
CardTitle,
CardInfo,
} from "./styles";

export default function Wallet() {
  const [visible, setVisible] = useState(false);
  return (
    <Wrapper>
      <Header colors={["#52E78c", "#1AB563"]}>
        <HeaderContainer>
          <Title>Saldo PicChau</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>600,00</Bold>
            </Value>

            <EyeButton>
              <Feather name="eye" size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action onPress={() => alert('Quer pagar')}>
              <MaterialCommunityIcons name="cash" size={20} color="#FFF" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#FFF" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch value={visible} onValueChange={setVisible} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>

        <Card>
            <CardDetails>
                <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                <CardInfo>Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não saldo no seu PicChau</CardInfo>
            </CardDetails>
        </Card>
      </PaymentMethods>
    </Wrapper>
  );
}
