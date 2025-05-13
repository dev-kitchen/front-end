import React from "react";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";
import CalendarCard from "./CalendardCard";

const WebCalendarContainer = styled.View`
  flex: 1;
  background-color: white;
`;

export default function Calendar() {
  const calendarHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
          }
          h2 {
            text-align: center;
            margin: 16px 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            background: #4caf50;
            color: white;
            padding: 10px;
          }
          td {
            padding: 10px;
            text-align: center;
            border: 1px solid #ddd;
          }
        </style>
      </head>
      <body>
        <h2>2025년 5월</h2>
        <table>
          <tr>
            <th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>
          </tr>
          <tr>
            <td></td><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td>
          </tr>
          <tr>
            <td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
          </tr>
          <tr>
            <td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td>
          </tr>
          <tr>
            <td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td>
          </tr>
          <tr>
            <td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return (
    <WebCalendarContainer>
      <CalendarCard>
        <WebView
          originWhitelist={["*"]}
          source={{ html: calendarHtml }}
          style={{ flex: 1,height: 300 }}
          javaScriptEnabled
          domStorageEnabled
        />
      </CalendarCard>
    </WebCalendarContainer>
  );
}
