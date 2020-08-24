import React from "react";
import { Button } from "./index";
import { action } from "@storybook/addon-actions";

export default {
	title: "Button",
	component: Button,
};

export const Text = () => (
	<Button onClick={action("clicked")}>Hello Button</Button>
)

export const Emoji = () => (
	<Button onClick={action("clicked")}>hello storybook</Button>
);