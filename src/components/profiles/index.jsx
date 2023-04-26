import React from "react";
import {Body, Title, List, User, Name, ProfileImage, Button} from './styles/profiles'

export default function Profiles({children, ...restProps}){
    return <Body {...restProps}>{children}</Body>
}

Profiles.Title = function ProfilesTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfilesList({children, ...restProps}){
    return <List {...restProps}>{children}</List>
}

Profiles.User = function ProfilesUser({children, ...restProps}){
    return <User {...restProps}>{children}</User>
}

Profiles.Name = function ProfilesName({children, ...restProps}){
    return <Name {...restProps}>{children}</Name>
}

Profiles.ProfileImage = function ProfilesProfileImage({src, ...restProps}){
    return <ProfileImage {...restProps} src={src ? `/images/users/${src}.png` : '/images/icons/loading.gif'} />
}

Profiles.Button = function ProfilesButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}