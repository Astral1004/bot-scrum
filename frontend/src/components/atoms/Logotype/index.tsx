import { FC } from 'react';
import { LogotypeContainer } from './styles';

interface LogotypeProps {
  label: string;
  className?: string;
}

export const Logotype: FC<LogotypeProps> = ({ className, label }) => {
  return <LogotypeContainer className={className}>{label}</LogotypeContainer>;
};
