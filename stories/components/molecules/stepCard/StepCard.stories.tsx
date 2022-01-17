import { Meta } from "@storybook/react";
import StepCard, { stepCardProps } from "../../../../components/molecules/step-card";

export default {
  title: "Components/Molecules/StepCard",
  component: StepCard,
} as Meta;

const Template = (args: stepCardProps) => <StepCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: "step1";
  title: '1. Start';
  desc1: 'Pilih salah satu game';
  desc2: 'yang ingin kamu top up';
};