import React from "react";
import {useNavigate} from "react-router-dom";

import {Body, Image} from "./styles/logo";
import {ROUTES} from "../../constants/routes";

export default function Logo({size, mediaQuery, ...restProps}) {
  const navigate = useNavigate();

  return (
    <Image
      src="images/logo/netflix-logo.png"
      size={size}
      {...restProps}
      onClick={() => navigate(ROUTES.HOME)}
      mediaQuery={mediaQuery}
    />
  );
}
