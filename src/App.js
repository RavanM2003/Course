import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import image1 from "./images/angular.jpg";
import image2 from "./images/bootstrap5.png";
import image3 from "./images/kompleweb.jpg";
import image4 from "./images/ccsharp.png";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const clickButton = () => {
    setValue(value + 1);
  };
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">My Courses</p>
        </div>
        <div className="has-text-centered">
          <button className="button is-info" onClick={clickButton}>
            Add Course
          </button>
          <p>You have {value} Courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={image1}
                title="Angular"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent eu accumsan diam. Nullam venenatis mi nunc, ut cursus velit sagittis eget."
              />
            </div>
            <div className="column">
              <Course
                image={image2}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent eu accumsan diam. Nullam venenatis mi nunc, ut cursus velit sagittis eget."
              />
            </div>
            <div className="column">
              <Course
                image={image3}
                title="Full Stack Web"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent eu accumsan diam. Nullam venenatis mi nunc, ut cursus velit sagittis eget."
              />
            </div>
            <div className="column">
              <Course
                image={image4}
                title="C and C#"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent eu accumsan diam. Nullam venenatis mi nunc, ut cursus velit sagittis eget."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
