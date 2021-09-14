import { FC } from 'react';
import { Wrapper } from './styles';

export const GenericTemplate: FC<GenericTemplateProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

type GenericTemplateProps = {
  children: JSX.Element[] | JSX.Element | string;
};
