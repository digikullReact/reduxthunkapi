import React from 'react'
import { Line,Bar } from 'react-chartjs-2';
//import faker from 'Faker';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Bar
  )
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 



const CovidData = () => {
    const d={
        "labels": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        "datasets": [
          {
            "label": "Dataset 1",
            "data": [
              767,
              11,
              335,
              243,
              740,
              306,
              610
            ],
            "backgroundColor": "rgba(255, 99, 132, 0.5)"
          },
          {
            "label": "Dataset 2",
            "data": [
              447,
              900,
              50,
              84,
              45,
              412,
              666
            ],
            "backgroundColor": "rgba(53, 162, 235, 0.5)"
          }
        ]
      }

      const options=
      {"responsive":true,"plugins":{"legend":{"position":"top"},"title":{"display":true,"text":"Chart.js Bar Chart"}}} 
  return (
    <div>

<Bar options={options} data={d} />
    </div>
  )
}

export default CovidData