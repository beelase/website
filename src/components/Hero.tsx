import heroImg from "../assets/images/mentoring/mentoring.jpg";

type HeroProps = {
  title: string;
  header: string;
  call: string;
  heroText: string;
};



export function Hero({ title, header, call, heroText }: HeroProps) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div id="#mu-mentoring">
      <div className="mu-title">
        <h6 id="mentoring-id">{title}</h6>
      </div>
      <h4>{header}</h4>
      <h2>{call}</h2>
      <p>{heroText}</p>
    </div>
  );
}
