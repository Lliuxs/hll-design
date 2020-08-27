import { boolean, color, number, text } from "@storybook/addon-knobs";
import React from "react";
import { Progress } from ".";
import { Icon } from "../icon";

export const knobsProgress = () => (
	<Progress
		count={number("count", 50, { range: true, min: 0, max: 100, step: 1 })}
		countNumber={boolean("countNumber", true)}
		height={number("height", 8)}
		circle={boolean("circle", false)}
		size={number("size", 100)}
		primary={color("primary", "#FF4785")}
		secondary={color("secondary", "#FFAE00")}
		bottomColor={color("bottomColor", "#DDDDDD")}
		flashColor={color("flashColor", "#FFFFFF")}
		progressText={text("progressText", "")}
	></Progress>
);

export const progressText = () => (
	<Progress count={11} progressText={"hll"}></Progress>
);

export const changeColor = () => (
	<Progress
		count={20}
		primary="blue"
		secondary="yellow"
		bottomColor="brown"
	></Progress>
);

export const withIcon = () => (
	<Progress
		count={11}
		progressText={
			<span>
				<Icon icon="admin"></Icon>
			</span>
		}
	></Progress>
);