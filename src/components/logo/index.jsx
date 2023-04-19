import React from "react";
import {Body, Image} from './styles/logo'

export default function Logo({size, mediaQuery, ...restProps}) {
    return (
        <Body>
            <Image src='images/logo/netflix-logo.png' size={size} {...restProps} mediaQuery={mediaQuery} />
        </Body>
    )
}