var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import Prism from "prismjs";
import React from "react";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import { color } from "../shared/styles";
// 使用require是避免被treeShaking
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-json");
require("prismjs/components/prism-css");
var HighlightBlock = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t.token.cdata,\n\t.token.comment,\n\t.token.doctype,\n\t.token.prolog {\n\t\tcolor: #708090;\n\t}\n\t.token.punctuation {\n\t\tcolor: #999;\n\t}\n\t.namespace {\n\t\topacity: 0.7;\n\t}\n\t.token.boolean,\n\t.token.constant,\n\t.token.deleted,\n\t.token.number,\n\t.token.property,\n\t.token.symbol,\n\t.token.tag {\n\t\tcolor: #905;\n\t}\n\t.token.attr-name,\n\t.token.builtin,\n\t.token.char,\n\t.token.inserted,\n\t.token.selector,\n\t.token.string {\n\t\tcolor: #690;\n\t}\n\t.language-css .token.string,\n\t.style .token.string,\n\t.token.entity,\n\t.token.operator,\n\t.token.url {\n\t\tcolor: #a67f59;\n\t\tbackground: hsla(0, 0%, 100%, 0.5);\n\t}\n\t.token.atrule,\n\t.token.attr-value,\n\t.token.keyword {\n\t\tcolor: #07a;\n\t}\n\t.token.class-name,\n\t.token.function {\n\t\tcolor: #dd4a68;\n\t}\n\t.token.important,\n\t.token.regex,\n\t.token.variable {\n\t\tcolor: #e90;\n\t}\n\t.token.bold,\n\t.token.important {\n\t\tfont-weight: 700;\n\t}\n\t.token.italic {\n\t\tfont-style: italic;\n\t}\n\t.token.entity {\n\t\tcursor: help;\n\t}\n\n\tcode,\n\tpre {\n\t\tcolor: ", ";\n\t}\n\n\tcode {\n\t\twhite-space: pre;\n\t}\n\n\tpre {\n\t\tpadding: 11px 1rem;\n\t\tmargin: 1rem 0;\n\t\tbackground: ", ";\n\t\toverflow: auto;\n\t}\n\n\t.language-bash .token.operator,\n\t.language-bash .token.function,\n\t.language-bash .token.builtin {\n\t\tcolor: ", ";\n\t\tbackground: none;\n\t}\n"], ["\n\t.token.cdata,\n\t.token.comment,\n\t.token.doctype,\n\t.token.prolog {\n\t\tcolor: #708090;\n\t}\n\t.token.punctuation {\n\t\tcolor: #999;\n\t}\n\t.namespace {\n\t\topacity: 0.7;\n\t}\n\t.token.boolean,\n\t.token.constant,\n\t.token.deleted,\n\t.token.number,\n\t.token.property,\n\t.token.symbol,\n\t.token.tag {\n\t\tcolor: #905;\n\t}\n\t.token.attr-name,\n\t.token.builtin,\n\t.token.char,\n\t.token.inserted,\n\t.token.selector,\n\t.token.string {\n\t\tcolor: #690;\n\t}\n\t.language-css .token.string,\n\t.style .token.string,\n\t.token.entity,\n\t.token.operator,\n\t.token.url {\n\t\tcolor: #a67f59;\n\t\tbackground: hsla(0, 0%, 100%, 0.5);\n\t}\n\t.token.atrule,\n\t.token.attr-value,\n\t.token.keyword {\n\t\tcolor: #07a;\n\t}\n\t.token.class-name,\n\t.token.function {\n\t\tcolor: #dd4a68;\n\t}\n\t.token.important,\n\t.token.regex,\n\t.token.variable {\n\t\tcolor: #e90;\n\t}\n\t.token.bold,\n\t.token.important {\n\t\tfont-weight: 700;\n\t}\n\t.token.italic {\n\t\tfont-style: italic;\n\t}\n\t.token.entity {\n\t\tcursor: help;\n\t}\n\n\tcode,\n\tpre {\n\t\tcolor: ", ";\n\t}\n\n\tcode {\n\t\twhite-space: pre;\n\t}\n\n\tpre {\n\t\tpadding: 11px 1rem;\n\t\tmargin: 1rem 0;\n\t\tbackground: ", ";\n\t\toverflow: auto;\n\t}\n\n\t.language-bash .token.operator,\n\t.language-bash .token.function,\n\t.language-bash .token.builtin {\n\t\tcolor: ", ";\n\t\tbackground: none;\n\t}\n"])), color.darkest, color.lighter, color.darkest);
var htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};
var reUnescapedHtml = /[&<>"']/g;
var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escape(string) {
    return string && reHasUnescapedHtml.test(string)
        ? string.replace(reUnescapedHtml, function (chr) { return htmlEscapes[chr]; })
        : string || "";
}
export function Highlight(props) {
    var nodeRef = useRef(null);
    var children = props.children, language = props.language;
    var codeBlock = (React.createElement("div", { dangerouslySetInnerHTML: { __html: escape(children + "") } }));
    useEffect(function () {
        if (nodeRef.current) {
            Prism.highlightAllUnder(nodeRef.current);
        }
    }, [nodeRef]);
    return (React.createElement(HighlightBlock, { ref: nodeRef },
        React.createElement("pre", { className: "language-" + language },
            React.createElement("code", { className: "language-" + language }, codeBlock))));
}
var templateObject_1;
