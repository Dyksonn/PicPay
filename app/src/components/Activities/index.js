import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>

        <Actions>
          <Option>
            <OptionLabel>Todas</OptionLabel>
          </Option>
          <Option>
            <OptionLabel>Minhas</OptionLabel>
          </Option>
        </Actions>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@dyksonn</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Dykson Santos</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 1.000,00</Value>

            <Divider />

            <Feather name="lock" color="#FFF" size={14} />
            <Date>há 20 min</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#FFF"
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" size={14} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
