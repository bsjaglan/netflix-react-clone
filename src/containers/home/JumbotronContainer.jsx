import React from "react";
import jumbotronData from "../../data/jumbotronData.json";
import {Jumbotron} from '../../components'

function JumbotronContainer() {
  return (
    <>
      {jumbotronData.map((item) => (
        <Jumbotron key={item.id}>
          <Jumbotron.Item direction={item.direction}>
            <Jumbotron.Section>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Section>

            <Jumbotron.Section>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Section>
          </Jumbotron.Item>
        </Jumbotron>
      ))}
    </>
  );
}

export default JumbotronContainer;
