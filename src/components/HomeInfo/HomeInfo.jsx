import React from "react";
import {
  Container,
  Paragraf,
  Title,
  SubTitle,
  Image,
  List,
  Item,
} from "./HomeInfo.styled";

const HomeInfo = () => {
  return (
    <Container>
      <Title>RENTAL-CARS</Title>
      <SubTitle>About Us</SubTitle>
      <Paragraf>
        The company "Rental-Cars" has been working in the field of car rental
        for more than ten years. Our many years of experience allow us to
        develop and constantly improve our company, introducing the most
        advanced achievements in the car rental market. We pay great attention
        to the quality of service to our customers. The favorable terms and
        offers developed by us allow us to successfully compete with leading
        companies in Ukraine. This is confirmed by our constantly growing
        customer base. Among which there is a large number of not only private
        individuals, but also entrepreneurs, various companies, enterprises and
        organizations. Many clients, having contacted us for the first time,
        come again, recommend to friends and acquaintances, and continue to
        cooperate with us for years, since the first days of the company's
        operation.
      </Paragraf>
      <Image
        src="https://driveforce.ua/assets/uploads/images/content/83626-rent-car.jpg"
        alt="Car with keys"
        width="400"
        height="250"
      />
      <SubTitle>Our car park</SubTitle>
      <Paragraf>
        Our company's fleet also keeps up with the times. We constantly update
        the list of cars and are ready at any time to offer a new and
        comfortable car from an inexpensive economy class to a prestigious SUV
        or VIP sedan. Our company employs real masters of their field who know
        and love their work. They are well versed in cars and will always help
        you choose the best car option for any taste and budget.
      </Paragraf>
      <SubTitle>Our services</SubTitle>
      <List>
        <Item>car rental without a driver;</Item>
        <Item>a car for rent for a short period or a couple of years;</Item>
        <Item>rent a car with a driver inexpensively;</Item>
        <Item>service of business, ceremonial events;</Item>
        <Item>transfer service.</Item>
      </List>
      <Paragraf>
        Megarent offers to organize cheap movement around the city by ordering
        an economy class car, choosing a suitable business or premium class car.
        We also have SUVs. You can easily familiarize yourself with the car
        fleet on the website: megarent.ua. Book a car for the period you need
        simply on the website or by calling the numbers indicated in the
        contacts.
      </Paragraf>
      <Paragraf>
        Among the services that offer cars for rent in Kyiv and throughout
        Ukraine, ours is distinguished by a truly large fleet. Every car, from a
        Bentley to a budget Daewoo, is inspected immediately before each
        departure, has insurance, is fully functional and perfectly clean.
      </Paragraf>
      <Paragraf>
        Another advantage of Megarent is the low cost of rent, the availability
        of resources and opportunities that meet the requirements of our
        customers, and friendly professional managers.
      </Paragraf>
    </Container>
  );
};

export default HomeInfo;
