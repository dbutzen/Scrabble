<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication1._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div class="score-board">
        <table  id="score-board">
            <tr><th id="r1">Player</th><th id="r1">Score</th></tr>
            <tr><td id="r1">Peter</td> <td id="r1">1000</td></tr>
            <tr><td id="r1">Lois</td><td id="r1">900</td></tr>
        </table>
    </div>
    <div class="wrapper">
  <div class="game">
      <div class="game-board">
    <table  class="game-board">
        <tr><td id="tw">A1</td><td>A2</td><td>A3</td><td id="d1">A4</td><td>A5</td><td>A6</td><td>A7</td><td id="tw">A8</td><td>A9</td><td>A10</td><td>A11</td><td id="d1">A12</td><td>A13</td><td>A14</td><td id="tw">A15</td></tr>
        <tr><td>B1</td><td id="dw">B2</td><td>B3</td><td>B4</td><td>B5</td><td id="t1">B6</td><td>B7</td><td>B8</td><td>B9</td><td id="t1">B10</td><td>B11</td><td>B12</td><td>B13</td><td id=dw>B14</td><td>B15</td></tr>
        <tr><td>C1</td><td>C2</td><td id="dw">C3</td><td>C4</td><td>C5</td><td>C6</td><td id="d1">C7</td><td>C8</td><td id="d1">C9</td><td>C10</td><td>C11</td><td>C12</td><td id="dw">C13</td><td>C14</td><td>C15</td></tr>
        <tr><td id="d1">D1</td><td>D2</td><td>D3</td><td id="dw">D4</td><td>D5</td><td>D6</td><td>D7</td><td id="d1">D8</td><td>D9</td><td>D10</td><td>D11</td><td id="dw">D12</td><td>D13</td><td>D14</td><td id="d1">D15</td></tr>
        <tr><td>E1</td><td>E2</td><td>E3</td><td>E4</td><td id="dw">E5</td><td>E6</td><td>E7</td><td>E8</td><td>E9</td><td>E10</td><td id="dw">E11</td><td>E12</td><td>E13</td><td>E14</td><td>E15</td></tr>
        <tr><td>F1</td><td id="t1">F2</td><td>F3</td><td>F4</td><td>F5</td><td id="t1">F6</td><td>F7</td><td>F8</td><td>F9</td><td id="t1">F10</td><td>F11</td><td>F12</td><td>F13</td><td id="t1">F14</td><td>F15</td></tr>
        <tr><td>G1</td><td>G2</td><td id="d1">G3</td><td>G4</td><td>G5</td><td>G6</td><td id="d1">G7</td><td>G8</td><td id="d1">G9</td><td>G10</td><td>G11</td><td>G12</td><td id="d1">G13</td><td>G14</td><td>G15</td></tr>
        <tr><td id="tw">H1</td><td>H2</td><td>H3</td><td id="d1">H4</td><td>H5</td><td>H6</td><td>H7</td><td id="start">H8</td><td>H9</td><td>H10</td><td>H11</td><td id="d1">H12</td><td>H13</td><td>H14</td><td id="tw">H15</td></tr>
        <tr><td>I1</td><td>I2</td><td id="d1">I3</td><td>I4</td><td>I5</td><td>I6</td><td id="d1">I7</td><td>I8</td><td id="d1">I9</td><td>I10</td><td>I11</td><td>I12</td><td id="d1">I13</td><td>I14</td><td>I15</td></tr>
        <tr><td>J1</td><td id="t1">J2</td><td>J3</td><td>J4</td><td>J5</td><td id="t1">J6</td><td>J7</td><td>J8</td><td>J9</td><td id="t1">J10</td><td>J11</td><td>J12</td><td>J13</td><td id="t1">J14</td><td>J15</td></tr>
        <tr><td>K1</td><td>K2</td><td>K3</td><td>K4</td><td id="dw">K5</td><td>K6</td><td>K7</td><td>K8</td><td>K9</td><td>K10</td><td id="dw">K11</td><td>K12</td><td>K13</td><td>K14</td><td>K15</td></tr>
        <tr><td id="d1">L1</td><td>L2</td><td>L3</td><td id="dw">L4</td><td>L5</td><td>L6</td><td>L7</td><td id="d1">L8</td><td>L9</td><td>L10</td><td>L11</td><td id="dw">L12</td><td>L13</td><td>L14</td><td id="d1">L15</td></tr>
        <tr><td>M1</td><td>M2</td><td id="dw">M3</td><td>M4</td><td>M5</td><td>M6</td><td id="d1">M7</td><td>M8</td><td id="d1">M9</td><td>M10</td><td>M11</td><td>M12</td><td id="dw">M13</td><td>M14</td><td>M15</td></tr>
        <tr><td>N1</td><td id="dw">N2</td><td>N3</td><td>N4</td><td>N5</td><td id="t1">N6</td><td>N7</td><td>N8</td><td>N9</td><td id="t1">N10</td><td>N11</td><td>N12</td><td>N13</td><td id="dw">N14</td><td>N15</td></tr>
        <tr><td id="tw">O1</td><td>O2</td><td>O3</td><td id="d1">O4</td><td>O5</td><td>O6</td><td>O7</td><td id="tw">O8</td><td>O9</td><td>O10</td><td>O11</td><td id="d1">O12</td><td>O13</td><td>O14</td><td id="tw">O15</td></tr>
    </table>
      </div>
      </div>
        </div>
    <asp:Button ID="btnSubmit" runat="server" CssClass="btn btn-primary btn-md ml-3" Text="Submit" OnClick="btnSubmit_Click"/>
    <asp:Button ID="btnPass" runat="server" CssClass="btn btn-primary btn-md ml-3" Text="Pass" OnClick="btnPass_Click"/>
    <div id="tray-container">    
        <asp:Image ID="image1" runat="server" ImageUrl="~/Images/Scrabble-Tray.png" />
        <div class="Letter1">L1</div>
        <div class="Letter2">L2</div>
        <div class="Letter3">L3</div>
        <div class="Letter4">L4</div>
        <div class="Letter5">L5</div>
        <div class="Letter6">L6</div>
        <div class="Letter7">L7</div>
    </div>
        

</asp:Content>
