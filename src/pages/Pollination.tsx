import { Hero } from "../components/Hero";
import mentoringContent from "../config/mentoring.json";

type HeroProps = {
  title: string;
  header: string;
  call: string;
  heroText: string;
};

type MentoringProps = {
  hero: Array<HeroProps>;
  decription: string;
  mentorCall: string;
  statistics: Array<string>;
};

type Props = {
  structure: Array<MentoringProps>;
};

// const pollinationContent: Props = mentoringContent;

export default function Pollination() {
 
      return (
        <div className="container">
          <Hero title="title" header="header" call="call to action" heroText="text" />
          <div className="row"> asdkaölksdjaölkdjasdj </div>
        </div>
      );
  
}
