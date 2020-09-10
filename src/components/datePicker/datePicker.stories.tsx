import { action } from "@storybook/addon-actions";
import { number, text } from "@storybook/addon-knobs";
import React from "react";
import { DatePicker } from "./index";

export const knobsDatePicker = () => (
	<div style={{ height: "500px" }}>
		<DatePicker
			callback={action("callback")}
			delay={number("delay", 200)}
			initDate={text("initDate", "")}
		></DatePicker>
	</div>