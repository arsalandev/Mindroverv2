import React from "react";
import Plot from "react-plotly.js";
// import { PieChart, Pie, Tooltip } from "recharts";
import { Row, Col, Container, Card } from "react-bootstrap";
import './css/metricresult.css';
import Data from "./Data/mindRoverSingleData.json";
import { Doughnut } from 'react-chartjs-2';

const MetricResults = () => {
  // const data = [
  //   { name: "Cpu Usage", value: Data[0].graph_performance_data["CPU USAGE"]},
  //   { name: "Memory Usage", value: Data[0].graph_performance_data["MEMORY USAGE"] },

  // ];

  const data = {
    labels: ['Cpu Usage', 'Memory Usage'],
    datasets: [
      {
        data: [Data[0].graph_performance_data["CPU USAGE"],Data[0].graph_performance_data["MEMORY USAGE"]],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      }
    ],
  };

  const config = {
    options: {
      responsive: true,
      maintainAspectRaio: true
    }
  };
  

  return (
    <>
      <Container fluid>
        <Card className="metrics-card">
          {/* <Card.Img variant="top" src="images/dap1.png" /> */}
          <Card.Body>
            <Row>
              <Col xxl={12}>
              <Card.Title>Metrices Result</Card.Title>
              <hr/>
              </Col>
              <Col xxl={7}>
              
                <Card.Text>
              {Data[0].nlpresult}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam quos sequi sint fugit atque! Explicabo natus repudiandae aliquid assumenda commodi odit nostrum officia cupiditate. Aut id quod blanditiis in cum quaerat suscipit, consequuntur odit nesciunt delectus iure ut excepturi veniam! Molestias omnis blanditiis ad nulla facere fuga voluptatum consequatur officiis eos nihil libero ipsum quam accusamus adipisci, rem facilis placeat odio pariatur unde enim? Harum velit fugit esse deleniti quis optio labore dolorum voluptatibus. Necessitatibus ipsum nisi ipsa voluptatibus iste ratione vitae pariatur ducimus. Rem repudiandae neque unde explicabo eos placeat magni esse totam atque necessitatibus, libero aperiam eum rerum facere qui sapiente. Cum quo quia distinctio nisi molestias? Doloremque inventore itaque harum ipsam enim vel aliquam ullam a exercitationem vitae maiores, explicabo dignissimos similique, impedit dicta voluptatem reiciendis voluptatum commodi recusandae, illum nihil minima sit ducimus? Pariatur reprehenderit error suscipit odit, ut earum. Eveniet, voluptate. Et ad autem amet porro sint aliquid odit, tenetur exercitationem itaque neque veniam molestiae laudantium. Enim, praesentium? Explicabo, nisi non autem esse quasi illum doloribus itaque, nihil quia, repellendus repudiandae. Ipsam alias quia iure aliquam tempore dolor corporis, eaque rem at labore dolores recusandae dignissimos maxime accusamus velit perferendis deserunt placeat assumenda voluptatum. */}
                </Card.Text>
              </Col>
              <Col xxl={5} className="d-flex justify-content-center">
                {/* <PieChart width={600} height={600}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    data={Data[0].graph_performance_data["CPU USAGE"],
                    Data[0].graph_performance_data["MEMORY USAGE"]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />

                  <Tooltip />
                </PieChart> */}
                <div className="chart1">
                <Doughnut options={config} data={data} />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default MetricResults;
