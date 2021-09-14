import { StyledDataCard, StyledIcon } from './styles';
interface DataCardProps {
  data?: string;
  classname?: string;
}

export const DataCard = (props: DataCardProps): JSX.Element => {
  return (
    <StyledDataCard className="p-d-flex p-flex-row p-ai-center p-jc-start">
      <StyledIcon className="pi pi-clock" />
      <p className="pdata">{props.data}</p>
    </StyledDataCard>
  );
};
