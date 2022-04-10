import { ComponentMeta, ComponentStory } from '@storybook/react';
import Primary, { IPrimary } from './Primary';
import { mockPrimaryProps } from './Primary.mocks';

export default {
  title: 'templates/Primary',
  component: Primary,
  argTypes: {},
} as ComponentMeta<typeof Primary>;

// # 컴포넌트 정의
const Template: ComponentStory<typeof Primary> = (args) => (
  <Primary {...args} />
);

export const Base = Template.bind({});

// props 적용
Base.args = {
  ...mockPrimaryProps.base,
} as IPrimary;
