import React from "react";
import {Body, Badge, Text, CustomLink} from "./styles/ad-banner"

export default function AdBanner({children, ...restProps}) {
    return <Body {...restProps}>
        {children}
    </Body>
}

AdBanner.Badge = function AdBannerBadge({children, ...restProps}){
    return <Badge {...restProps}>{children}</Badge>
}

AdBanner.Text = function AdBannerText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

AdBanner.CustomLink = function AdBannerCustomLink({children, ...restProps}){
    return <CustomLink {...restProps}>{children}</CustomLink>
}