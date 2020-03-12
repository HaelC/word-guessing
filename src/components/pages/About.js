import React from "react";
import { Table } from "reactstrap";

function About() {
  return (
    <div className="row">
      <div className="col-12">
        <h1>How to Play</h1>
        <p>
          The goal of the game is to require the player to correctly guess a
          password from a list of same length words. Before the game starts, you
          can select a difficulty level (very easy, easy, average, hard, very
          hard). Here is the relationship among word length, word number and
          level of difficulty.
        </p>
        <Table>
          <thead>
            <tr>
              <th>Difficult</th>
              <th>Word Length</th>
              <th>Word Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Very easy</th>
              <td>4-5</td>
              <td>5-6</td>
            </tr>
            <tr>
              <th>Easy</th>
              <td>6-7</td>
              <td>7-8</td>
            </tr>
            <tr>
              <th>Average</th>
              <td>8-10</td>
              <td>9-11</td>
            </tr>
            <tr>
              <th>Hard</th>
              <td>11-13</td>
              <td>12-13</td>
            </tr>
            <tr>
              <th>Very hard</th>
              <td>14-15</td>
              <td>14-15</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default About;
