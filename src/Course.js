import React from "react";

function Course({ image, title, description }) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="My Course" />
          </figure>
        </div>
        <div className="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Course;
