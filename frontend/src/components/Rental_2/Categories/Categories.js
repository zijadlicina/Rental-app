import React from "react";;

function Categories() {
  return (
    <div className="categories">
      <ul>
        <li>
          <a className="active" href="#">
            All
          </a>
        </li>
        <li>
          <a href="#">Bikes</a>
        </li>
        <li>
          <a href="#">Scooter</a>
        </li>
        <li>
          <a href="#">E-Bikes</a>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
