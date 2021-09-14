import React, { FC } from 'react';
import { Avatar } from 'primereact/avatar';
import placeHolder from '../../../assets/images/placeholderAvatar.png';

interface AvatarProps {
  url: string;
  className?: string;
}

export const AvatarUser: FC<AvatarProps> = ({ url, className }) => (
  <Avatar
    image={url}
    className={className}
    size="large"
    shape="circle"
    onImageError={(event) => {
      (event.target as HTMLImageElement).src = placeHolder;
    }}
  />
);
