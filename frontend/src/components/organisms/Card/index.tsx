import { FC, useCallback } from 'react';
import { PollNameCard } from '../../atoms/PollNameCard';
import {
  Container,
  Question,
  ShowMoreBtn,
  FooterCard,
  StyledCard
} from './styles';
import { ProgessBarCard } from '../../molecules/ProgessBarCard';
import { DataCard } from '../../molecules/DateCard';
import { DropDownCard } from '../../molecules/DropDownCard';
import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { AvatarGroupContainer } from '../../molecules/AvatarGroup';

interface CardProps {
  nameCard: string;
  formQuestions: any[];
  usersArray?: Array<Record<any, any>>;
  date?: string;
  id: number;
  activeStatus?: boolean;
}

export const Card: FC<CardProps> = ({
  nameCard,
  formQuestions,
  date,
  id,
  activeStatus,
  usersArray
}) => {
  const dateOnCard = moment(date).locale('ru').format('D MMMM YYYY');
  const [showMore, setShowMore] = useState<boolean>(false);
  const toggleShowMore = useCallback(() => setShowMore((prev) => !prev), []);
  const numberOfItems = showMore ? formQuestions.length : 3;

  return (
    <StyledCard className="p-d-flex p-flex-column">
      <DropDownCard id={id} activeStatus={activeStatus} />
      <Container>
        <PollNameCard label={nameCard} />
        {formQuestions.slice(0, numberOfItems).map((item, index) => (
          <Question key={index}>
            {index + 1}. {item.question.description}
          </Question>
        ))}
        {formQuestions.length > 3 && (
          <ShowMoreBtn onClick={toggleShowMore}>
            {showMore ? 'Скрыть' : 'Показать еще'}
          </ShowMoreBtn>
        )}
      </Container>
      <ProgessBarCard value={50} />
      <FooterCard className="p-d-flex p-flex-row p-jc-between">
        <DataCard data={dateOnCard} />
        <AvatarGroupContainer data={usersArray} />
      </FooterCard>
    </StyledCard>
  );
};
