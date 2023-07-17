import { useState } from "react";
import Chart from "react-apexcharts";


function chart({element}) {
    const [state, setState] = useState({
        options: {
          colors: ["#8b5cf6", "#FF9800"],
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: ["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          },
        },
        series: [
         
          {
            name: "New Members",
            data: [3, 60, 35, 80, 49, 70, 20, 81],
          },
        ],
      });
  return (
    <div>
       <Chart
            options={state.options}
            series={state.series}
            type={element}
            width="480"
            height="180"
          />
    </div>
  )
}

export default chart
