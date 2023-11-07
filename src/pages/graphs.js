"use client";
import { useEffect, useState } from "react";
import { AgChartsReact } from 'ag-charts-react';
import Layout from "@/components/Layout";
import {
  Container,
  Row,
  Card,
  Col,
  Button,
  Image,
  Table,
} from "react-bootstrap";

export default function Graphs() {
  const [docente, setDocente] = useState([]);
  const [estudiantil, setEstudiantil] = useState([]);
  const [optionsD, setOptionsD] = useState({
    theme: {
      overrides: {
        column: {
          axes: {
            category: {
              groupPaddingInner: 0,
            },
          },
        },
      },
    },
    title: {
      text: "Apple's revenue by product category",
    },
    subtitle: {
      text: 'in billion U.S. dollars',
    },
    data: docente,
    series: [
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P1',
        yName: 'respuesta_1',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P2',
        yName: 'respuesta_2',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P3',
        yName: 'respuesta_3',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P4',
        yName: 'respuesta_4',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P5',
        yName: 'respuesta_5',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P6',
        yName: 'respuesta_6',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P7',
        yName: 'respuesta_7',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P8',
        yName: 'respuesta_8',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P9',
        yName: 'respuesta_9',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P10',
        yName: 'respuesta_10',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P11',
        yName: 'respuesta_11',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P12',
        yName: 'respuesta_12',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P13',
        yName: 'respuesta_13',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P14',
        yName: 'respuesta_14',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P15',
        yName: 'respuesta_15',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P16',
        yName: 'respuesta_16',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P17',
        yName: 'respuesta_17',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P18',
        yName: 'respuesta_18',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P19',
        yName: 'respuesta_19',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P20',
        yName: 'respuesta_20',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P21',
        yName: 'respuesta_21',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P22',
        yName: 'respuesta_22',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P23',
        yName: 'respuesta_23',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P24',
        yName: 'respuesta_24',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P25',
        yName: 'respuesta_25',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P26',
        yName: 'respuesta_26',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P27',
        yName: 'respuesta_27',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P28',
        yName: 'respuesta_28',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P29',
        yName: 'respuesta_29',
      },
      {
        type: 'column',
        xKey: 'quarter',
        yKey: 'P30',
        yName: 'respuesta_30',
      },
    ],
  });

  useEffect(() => {
    fetch("/api/info/docente")
      .then((res) => res.json())
      .then((data) => {
        setDocente(data);
      });
    fetch("/api/info/estudiantil")
      .then((res) => res.json())
      .then((data) => {
        setEstudiantil(data);
      });
  }, []);

  return (
    <>
      <Layout
        nav="login"
        title="Encuesta Impacto Academico"
        className="mx-auto text-center"
      > 
      <h3 className="mx-auto text-center">Gráficas</h3>
        <Container className="mx-auto text-center">
          <Row>
            <Col md="12" className="mx-auto text-center">
              <Card>
                <Card.Header>Desempeño Docente</Card.Header>
                <Card.Body>
                <AgChartsReact options={optionsD} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
