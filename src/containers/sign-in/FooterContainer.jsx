import React from "react";
import {Footer, SelectMenu} from "../../components";
import signInFooterLinks from "../../data/signInFooterLinks.json";
import langaugeOptions from '../../data/languageOptions.json'


function FooterContainer() {
  return (
    <Footer className='sign-in'>
      <Footer.Section>
        Questions? Call<Footer.CustomLink>1-844-542-4813</Footer.CustomLink>
      </Footer.Section>
      <Footer.Section>
        <Footer.SubSection>
          {signInFooterLinks.map((item) => (
            <Footer.CustomLink key={item.id}>{item.text}</Footer.CustomLink>
          ))}
        </Footer.SubSection>
      </Footer.Section>
      <Footer.Section>
        <SelectMenu optionList={langaugeOptions}/>
      </Footer.Section>
      <Footer.Section>
        <Footer.CustomLink style={{textDecoration: "none"}}>
          Netflix Canada
        </Footer.CustomLink>
      </Footer.Section>
    </Footer>
  );
}

export default FooterContainer;
