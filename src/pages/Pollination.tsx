import { Description } from "../components/Description";
import { Hero } from "../components/Hero";
import { SectionPicture } from "../components/SectionPicture";
import { Statistics } from "../components/Statistics";
import mentoringContent from "../config/mentoring.json";
import { ContentElement } from "../interfaces";

import { Program } from "./Program";


export default function Pollination() {
  const content = mentoringContent;

  return (
    <div className="mu-title">
      <h2 id="about-us-id">Pollination Mentoring Program</h2>
      <br />
      <div className="mu-slider-img">
        {content.structure.mentoring.map((item, index) => {
          if (item.id === "Hero") {
            console.log(item.id);
            return (<Hero key={index} {...item.content}/>);
          } else if (item.id === "Description") {
            return (<Description key={index} {...item.content}/>);
          } else if (item.id === "mentorCall") {
            return (<SectionPicture key={index}  {...item.content}/>);
          } else if (item.id === "program") {
            return (<Program key={index} {...item.content}/>);
          }
        })}
      </div>
    </div>
  );
}
