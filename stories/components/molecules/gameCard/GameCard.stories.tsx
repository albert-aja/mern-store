import { Meta } from "@storybook/react";
import GameCard, { GameCardProps } from "../../../../components/molecules/game-card";

export default {
  title: "Components/Molecules/GameCard",
  component: GameCard,
} as Meta;

const Template = (args: GameCardProps) => <GameCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  // link: string;
  image: '/img/thumbnail-1.png';
  game: 'GTA V';
  device: 'Mobile';
};