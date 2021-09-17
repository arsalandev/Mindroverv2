import React from "react";
// import { PieChart, Pie, Tooltip } from "recharts";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./css/metricresult.css";
import Data from "./Data/mindRoverSingleData.json";
import { Doughnut } from "react-chartjs-2";
import singleData from './Data/mindRoverSingleData.json';

const MetricResults = (props) => {

  const metricsRecieved = props.onlyMetrics;
  console.log("From metrics result", metricsRecieved)

  const data = {
    labels: ["Cpu Usage", "Memory Usage"],
    datasets: [
      {
        data: [
          Data[0].graph_performance_data["CPU USAGE"],
          Data[0].graph_performance_data["MEMORY USAGE"],
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    options: {
      //responsive: false,
      //maintainAspectRaio: false,
    },
  };

  return (
    <>
      <Container fluid>
        <Card className="metrics-card">
          <Card.Body>
            <Row>
              <Col xxl={12}>
                <Card.Title>Metrices Result</Card.Title>
                <hr />
              </Col>
              <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
                <Card.Text>{Data[0].nlpresult}</Card.Text>
              </Col>
              <Col xxl={5} xl={5} lg={5} md={12} sm={12}>
                <div className="chart1">
                  <Doughnut
                    options={config}
                    data={data}
                    options={{ responsive: true, maintainAspectRaio: false }}
                  />
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
