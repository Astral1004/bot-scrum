import { FC } from 'react';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { CountUsers } from './styles';

interface AvatarGroupProps {
  data?: Array<Record<string, any>>;
  classname?: string;
}

export const AvatarGroupContainer: FC<AvatarGroupProps> = ({ data }) => {
  return (
    <AvatarGroup className="p-ai-center">
      {data?.map((item, index) => {
        if (index < 3) {
          return (
            <Avatar
              key={index}
              image={
                `${process.env.REACT_APP_BASE_API_URL}` +
                '/user/profile-image/' +
                `${item.user.profileImage}`
              }
              shape="circle"
            />
          );
        }
      })}
      {data!.length > 3 && <CountUsers>{`+${data!.length - 3}`}</CountUsers>}
    </AvatarGroup>
  );
};
