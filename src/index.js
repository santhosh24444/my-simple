import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar image="inmg.JPG" />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.image} alt="sandy img" />
      <p></p>
    </div>
  );
}
function Intro() {
  return (
    <div className="data">
      <h1> SANTHOSH</h1>
      <p>
        I am a gamer used to play a lot of games when im free. I am a full stack
        web developer. I am familar with the many programming languages and
        developed many projects.Now i am currently pursuing B.E Computer science
        and Engineering in KONGU Engineering COLLEGE with a CGPA of 8.63.My long
        term goal is to Become a Game developer in Behavour interactive.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="C" emoji="💪" color="blue" />
      <Skill skill="Java" emoji="💪" color="orange" />
      <Skill skill="Python" emoji="💪" color="yellow" />
      <Skill skill="HTML+CSS" emoji="❤️" color="orangered" />
      <Skill skill="React" emoji="👍" color="orangered" />
      <Skill skill="Node JS" emoji="👍" color="orangered" />
      <Skill skill="MYSQL" emoji="👍" color="orangered" />
      <Skill skill="Mongo DB" emoji="👍" color="orangered" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span> {props.skill}</span>
      <span> {props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
