import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideBar, { ISideBar } from './SideBar';
import { mockSideBarProps } from './SideBar.mocks';

export default {
  title: 'templates/SideBar',
  component: SideBar,
  argTypes: {},
} as ComponentMeta<typeof SideBar>;

// # 컴포넌트 정의
const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Base = Template.bind({});

// props 적용
Base.args = {
  ...mockSideBarProps.base,
} as ISideBar;
