
import latina from '../src/assets/ima/community/latina.jpg'

export function Community(){
  return (
    <div className="center">

  <div className="card">
    <div className="additional">
      <div className="user-card">
        <div className="level center">
          Level 13
        </div>
        <img src={latina} alt="latina" />
        <div className="points center">
          5,312 Points
        </div>

      </div>
      <div className="more-info">
        <h1>Maria Santa Rosa</h1>
        <div className="coords">
          <span>Mexican</span>
          <span>Joined April 2020</span>
        </div>
        <div className="coords">
          <span>Front-End Developer</span>
          <span>Stockholm, Sweden</span>
        </div>
        {/* <div className="stats">
          <div>
            <div className="title">Awards</div>
            <i className="fa fa-trophy"></i>
            <div className="value">2</div>
          </div>
          <div>
            <div className="title">Matches</div>
            <i className="fa fa-gamepad"></i>
            <div className="value">27</div>
          </div>
          <div>
            <div className="title">Pals</div>
            <i className="fa fa-group"></i>
            <div className="value">123</div>
          </div>
          <div>
            <div className="title">Coffee</div>
            <i className="fa fa-coffee"></i>
            <div className="value infinity">∞</div>
          </div>
        </div> */}
      </div>
    </div>
    <div className="general">
      <h1>Maria Santa Rosa</h1>
      <p>She moved to Sweden with her family from
Mexico. She works as a Vegan Chef in
Stockholm and recently finished a Software
Developer Bootcamp in Techningo and is
pursuing a career in tech.
Maria is struggling to land her first job in Tech
because she doesn’t have a university degree
in Sweden and lacks experience in Software
Development.</p>
      <span className="more">Mouse over the card for more info</span>
    </div>
  </div>

  

</div>
  )
}