import React from "react";

import {Footer, SelectMenu} from "../../components";
import signUpFooterLinks from "../../data/signUpFooterLinks.json";
import langaugeOptions from "../../data/languageOptions.json";

function FooterContainer() {
  return (
    <Footer className="sign-up">
      <Footer.Section>
        Questions? Call
        <Footer.CustomLink>1-844-542-4813</Footer.CustomLink>
      </Footer.Section>
      <Footer.Section>
        <Footer.SubSection>
          {signUpFooterLinks.map((item) => (
            <Footer.CustomLink key={item.id}>{item.text}</Footer.CustomLink>
          ))}
        </Footer.SubSection>
      </Footer.Section>
      <Footer.Section>
        <SelectMenu optionList={langaugeOptions} className='sign-up'/>
      </Footer.Section>
      <Footer.Section>
        <Footer.CustomLink >
          Netflix Canada
        </Footer.CustomLink>
      </Footer.Section>
    </Footer>
  );
}

export default FooterContainer;
