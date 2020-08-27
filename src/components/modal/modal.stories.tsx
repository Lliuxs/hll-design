import { action } from "@storybook/addon-actions";
import { text, boolean, number } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Modal from ".";
import Button from "../button";

function KnobsModal() {
	const [state, setState] = useState(false);
	const title = text("title", "标题");
	const child = text("children", "hll");
	const confirm = boolean("confirm", true);
	const okText = text("okText", "");
	const cancelText = text("cancelText", "");
	return (
		<div>
			<Modal
				refCallback={action("refcallback")}
				stopScroll={boolean("stopScroll", true)}
				delay={number("delay", 200)}
				closeButton={boolean("closeButton", true)}
				mask={boolean("mask", true)}
				maskClose={boolean("maskClose", true)}
				callback={action("callback")}
				cancelText={cancelText}
				okText={okText}
				confirm={confirm}
				title={title}
				parentSetState={setState}
				visible={state}
			>
				{child}
			</Modal>
			<Button onClick={() => setState(!state)}>toggle</Button>
		</div>
	);
}

export const knobsModal = () => <KnobsModal></KnobsModal>;