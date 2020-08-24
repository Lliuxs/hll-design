import React, {
	PropsWithChildren,
	ButtonHTMLAttributes,
} from "react";
import styled from "styled-components";

const MyButton = styled.button({
	color: 'red'
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}


export function Button(props: PropsWithChildren< ButtonProps>) {
	const { children, ...rest } = props;
	return <MyButton {...rest} >{children}</MyButton>
}