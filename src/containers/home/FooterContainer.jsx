import React from "react";
import {Footer} from "../../components";
import {homeFooterLinks} from "../../data/footerData";

function FooterContainer() {
  return (
    <Footer>
      <Footer.Section>
        Questions? Call
        <Footer.CustomLink style={{fontSize: "16px"}}>
          1-844-542-4813
        </Footer.CustomLink>
      </Footer.Section>

      <Footer.Section>
        <Footer.SubSection>
          {homeFooterLinks.map((item) => (
            <Footer.CustomLink key={item.id}>{item.text}</Footer.CustomLink>
          ))}
        </Footer.SubSection>
      </Footer.Section>
      <Footer.Section>
        Language
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
