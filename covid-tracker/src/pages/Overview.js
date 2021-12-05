import React from "react";
import "../App.css";

function Overview() {
  return (
    <div>
      Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
        <p>
            Most people who fall sick with COVID-19 will experience mild to
            moderate symptoms and recover without special treatment.
        </p> 
        <p>HOW IT SPREADS</p>
          <p>
            The virus that causes COVID-19 is mainly transmitted through
            droplets generated when an infected person coughs, sneezes, or
            exhales. These droplets are too heavy to hang in the air, and
            quickly fall on floors or surfaces.
          </p>
          <p>
            You can be infected by breathing in the virus if you are within
            close proximity of someone who has COVID-19, or by touching a
            contaminated surface and then your eyes, nose or mouth.
          </p>
          <p>
            <div class = "box-header"> WHAT IS COVID-19?</div>
            <div class="box-body"><iframe width="560" height="315" src="https://www.youtube.com/embed/D9tTi-CDjDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </p>

    </div>

  );
}

export default Overview;

