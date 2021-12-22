import ReactMarkdown from "react-markdown";
import { ContentElement } from "../interfaces";

export function Hero({title, call, text}: ContentElement) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div id="mu-hero">

      <div className="mu-hero-title">
        <h4 >{title}</h4>
      </div>
      <h3>{call}</h3>
      <ReactMarkdown>
        {text}
      </ReactMarkdown>
    </div>
  );
}
