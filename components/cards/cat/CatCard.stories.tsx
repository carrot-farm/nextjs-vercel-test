import { ComponentMeta, ComponentStory } from '@storybook/react';
import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

export default {
  title: 'templates/CatCard',
  component: CatCard,
  argTypes: {},
} as ComponentMeta<typeof CatCard>;

// # 컴포넌트 정의
const Template: ComponentStory<typeof CatCard> = (args) => (
  <CatCard {...args} />
);

export const Base = Template.bind({});

// props 적용
Base.args = {
  ...mockCatCardProps.base,
} as ICatCard;
