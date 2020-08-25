import React from "react";
import { Avatar, AvatarSize } from "./index";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export default {
	title: "Avatar",
	component: Avatar,
	decorators: [withKnobs],
};

type AvatarSizeType = keyof typeof AvatarSize;

export const knobsAvatar = () => (
	<Avatar
		size={select<AvatarSizeType>(
			"size",
			Object.keys(AvatarSize) as AvatarSizeType[],
			"medium"
		)}
		username={text("username", "hll")}
		src={text(
			"src",
			"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2961031371,4261013831&fm=26&gp=0.jpg"
		)}
		isLoading={boolean("isLoading", false)}
	/>
);

export const large = () => (
	<div>
		<Avatar isLoading size="large" />
		<Avatar size="large" username="hll" />
		<Avatar
			size="large"
			username="hll"
			src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2961031371,4261013831&fm=26&gp=0.jpg"
		/>
	</div>
);

export const medium = () => (
	<div>
		<Avatar isLoading />
		<Avatar username="中文" />
		<Avatar
			username="hll"
			src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2961031371,4261013831&fm=26&gp=0.jpg"
		/>
	</div>
);

export const small = () => (
	<div>
		<Avatar isLoading size="small" />
		<Avatar size="small" username="hll" />
		<Avatar
			size="small"
			username="hll"
			src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2961031371,4261013831&fm=26&gp=0.jpg"
		/>
	</div>
);

export const tiny = () => (
	<div>
		<Avatar isLoading size="tiny" />
		<Avatar size="tiny" username="hll" />
		<Avatar
			size="tiny"
			username="hll"
			src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2961031371,4261013831&fm=26&gp=0.jpg"
		/>
	</div>
);