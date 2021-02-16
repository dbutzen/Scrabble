﻿<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication1._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="wrapper">
        <div class="game">
            <div class="game-board">
                <table  class="game-board">
                    <tr><td id="a1" class="tw board-tile unused">TW</td>    <td id="a2" class="board-tile unused"></td>         <td id="a3" class="board-tile unused"></td>     <td id="a4" class="d1 board-tile unused">DL</td><td id="a5" class="board-tile unused"></td>     <td id="a6" class="board-tile unused"></td>     <td id="a7" class="board-tile unused"></td>     <td id="a8" class="tw board-tile unused">DL</td>    <td id="a9" class="board-tile unused"></td>     <td id="a10" class="board-tile unused"></td>        <td id="a11" class="board-tile unused"></td>        <td id="a12" class="d1 board-tile unused">DL</td>   <td id="a13" class="board-tile unused"></td>        <td id="a14" class="board-tile unused"></td>        <td id="a15" class="tw board-tile unused">TW</td></tr>
                    <tr><td id="b1" class="board-tile unused"></td>         <td id="b2" class="dw board-tile unused">DW</td>    <td id="b3" class="board-tile unused"></td>     <td id="b4" class="board-tile unused"></td>     <td id="b5" class="board-tile unused"></td>     <td id="b6" class="t1 board-tile unused">TL</td><td id="b7" class="board-tile unused"></td>     <td id="b8" class="board-tile unused"></td>         <td id="b9" class="board-tile unused"></td>     <td id="b10" class="t1 board-tile unused">TL</td>   <td id="b11" class="board-tile unused"></td>        <td id="b12" class="board-tile unused"></td>        <td id="b13" class="board-tile unused"></td>        <td id="b14" class="dw board-tile unused">DW</td>   <td id="b15" class="board-tile unused"></td></tr>
                    <tr><td id="c1" class="board-tile unused"></td>         <td id="c2" class="board-tile unused"></td>         <td id="c3" class="dw board-tile unused">DW</td><td id="c4" class="board-tile unused"></td>     <td id="c5" class="board-tile unused"></td>     <td id="c6" class="board-tile unused"></td>     <td id="c7" class="d1 board-tile unused">DL</td><td id="c8" class="board-tile unused"></td>         <td id="c9" class="d1 board-tile unused">DL</td><td id="c10" class="board-tile unused"></td>        <td id="c11" class="board-tile unused"></td>        <td id="c12" class="board-tile unused"></td>        <td id="c13" class="dw board-tile unused">DW</td>   <td id="c14" class="board-tile unused"></td>        <td id="c15" class="board-tile unused"></td></tr>
                    <tr><td id="d1" class="d1 board-tile unused">DL</td>    <td id="d2" class="board-tile unused"></td>         <td id="d3" class="board-tile unused"></td>     <td id="d4" class="dw board-tile unused">DW</td><td id="d5" class="board-tile unused"></td>     <td id="d6" class="board-tile unused"></td>     <td id="d7" class="board-tile unused"></td>     <td id="d8" class="d1 board-tile unused">DL</td>    <td id="d9" class="board-tile unused"></td>     <td id="d10" class="board-tile unused"></td>        <td id="d11" class="board-tile unused"></td>        <td id="d12" class="dw board-tile unused">DW</td>   <td id="d13" class="board-tile unused"></td>        <td id="d14" class="board-tile unused"></td>        <td id="d15" class="d1 board-tile unused">DL</td></tr>
                    <tr><td id="e1" class="board-tile unused"></td>         <td id="e2" class="board-tile unused"></td>         <td id="e3" class="board-tile unused"></td>     <td id="e4" class="board-tile unused"></td>     <td id="e5" class="dw board-tile unused">DW</td><td id="e6" class="board-tile unused"></td>     <td id="e7" class="board-tile unused"></td>     <td id="e8" class="board-tile unused"></td>         <td id="e9" class="board-tile unused"></td>     <td id="e10" class="board-tile unused"></td>        <td id="e11" class="dw board-tile unused">DW</td>   <td id="e12" class="board-tile unused"></td>        <td id="e13" class="board-tile unused"></td>        <td id="e14" class="board-tile unused"></td>        <td id="e15" class="board-tile unused"></td></tr>
                    <tr><td id="f1" class="board-tile unused"></td>         <td id="f2" class="t1 board-tile unused">TL</td>    <td id="f3" class="board-tile unused"></td>     <td id="f4" class="board-tile unused"></td>     <td id="f5" class="board-tile unused"></td>     <td id="f6" class="t1 board-tile unused">TL</td><td id="f7" class="board-tile unused"></td>     <td id="f8" class="board-tile unused"></td>         <td id="f9" class="board-tile unused"></td>     <td id="f10" class="t1 board-tile unused">TL</td>   <td id="f11" class="board-tile unused"></td>        <td id="f12" class="board-tile unused"></td>        <td id="f13" class="board-tile unused"></td>        <td id="f14" class="t1 board-tile unused">TL</td>   <td id="f15" class="board-tile unused"></td></tr>
                    <tr><td id="g1" class="board-tile unused"></td>         <td id="g2" class="board-tile unused"></td>         <td id="g3" class="d1 board-tile unused">DL</td><td id="g4" class="board-tile unused"></td>     <td id="g5" class="board-tile unused"></td>     <td id="g6" class="board-tile unused"></td>     <td id="g7" class="d1 board-tile unused">DL</td><td id="g8" class="board-tile unused"></td>         <td id="g9" class="d1 board-tile unused">DL</td><td id="g10" class="board-tile unused"></td>        <td id="g11" class="board-tile unused"></td>        <td id="g12" class="board-tile unused"></td>        <td id="g13" class="d1 board-tile unused">DL</td>   <td id="g14" class="board-tile unused"></td>        <td id="g15" class="board-tile unused"></td></tr>
                    <tr><td id="h1" class="baord-tile unused tw">TW</td>    <td id="h2" class="board-tile unused"></td>         <td id="h3" class="board-tile unused"></td>     <td id="h4" class="d1 board-tile unused">DL</td><td id="h5" class="board-tile unused"></td>     <td id="h6" class="board-tile unused"></td>     <td id="h7" class="board-tile unused"></td>     <td id="h8" class="start board-tile unused">DW</td> <td id="h9" class="board-tile unused"></td>     <td id="h10" class="board-tile unused"></td>        <td id="h11" class="board-tile unused"></td>        <td id="h12" class="d1 board-tile unused">DL</td>   <td id="h13" class="board-tile unused"></td>        <td id="h14" class="board-tile unused"></td>        <td id="h15" class="tw board-tile unused">TW</td></tr>
                    <tr><td id="i1" class="board-tile unused"></td>         <td id="i2" class="board-tile unused"></td>         <td id="i3" class="d1 board-tile unused">DL</td><td id="i4" class="board-tile unused"></td>     <td id="i5" class="board-tile unused"></td>     <td id="i6" class="board-tile unused"></td>     <td id="i7" class="d1 board-tile unused">DL</td><td id="i8" class="board-tile unused"></td>         <td id="i9" class="d1 board-tile unused">DL</td><td id="i10" class="board-tile unused"></td>        <td id="i11" class="board-tile unused"></td>        <td id="i12" class="board-tile unused"></td>        <td id="i13" class="d1 board-tile unused">DL</td>   <td id="i14" class="board-tile unused"></td>        <td id="i15" class="board-tile unused"></td></tr>
                    <tr><td id="j1" class="board-tile unused"></td>         <td id="j2" class="t1 board-tile unused">TL</td>    <td id="j3" class="board-tile unused"></td>     <td id="j4" class="board-tile unused"></td>     <td id="j5" class="board-tile unused"></td>     <td id="j6" class="t1 board-tile unused">TL</td><td id="j7" class="board-tile unused"></td>     <td id="j8" class="board-tile unused"></td>         <td id="j9" class="board-tile unused"></td>     <td id="j10" class="t1 board-tile unused">TL</td>   <td id="j11" class="board-tile unused"></td>        <td id="j12" class="board-tile unused"></td>        <td id="j13" class="board-tile unused"></td>        <td id="j14" class="t1 board-tile unused">TL</td>   <td id="j15" class="board-tile unused"></td></tr>
                    <tr><td id="k1" class="board-tile unused"></td>         <td id="k2" class="board-tile unused"></td>         <td id="k3" class="board-tile unused"></td>     <td id="k4" class="board-tile unused"></td>     <td id="k5" class="dw board-tile unused">DW</td><td id="k6" class="board-tile unused"></td>     <td id="k7" class="board-tile unused"></td>     <td id="k8" class="board-tile unused"></td>         <td id="k9" class="board-tile unused"></td>     <td id="k10" class="board-tile unused"></td>        <td id="k11" class="dw board-tile unused">DW</td>   <td id="k12" class="board-tile unused"></td>        <td id="k13" class="board-tile unused"></td>        <td id="k14" class="board-tile unused"></td>        <td id="k15" class="board-tile unused"></td></tr>
                    <tr><td id="l1" class="d1 board-tile unused">DL</td>    <td id="l2" class="board-tile unused"></td>         <td id="l3" class="board-tile unused"></td>     <td id="l4" class="dw board-tile unused">DW</td><td id="l5" class="board-tile unused"></td>     <td id="l6" class="board-tile unused"></td>     <td id="l7" class="board-tile unused"></td>     <td id="l8" class="d1 board-tile unused">DL</td>    <td id="l9" class="board-tile unused"></td>     <td id="l10" class="board-tile unused"></td>        <td id="l11" class="board-tile unused"></td>        <td id="l12" class="dw board-tile unused">DW</td>   <td id="l13" class="board-tile unused"></td>        <td id="l14" class="board-tile unused"></td>        <td id="l15" class="d1 board-tile unused">DL</td></tr>
                    <tr><td id="m1" class="board-tile unused"></td>         <td id="m2" class="board-tile unused"></td>         <td id="m3" class="dw board-tile unused">DW</td><td id="m4" class="board-tile unused"></td>     <td id="m5" class="board-tile unused"></td>     <td id="m6" class="board-tile unused"></td>     <td id="m7" class="d1 board-tile unused">DL</td><td id="m8" class="board-tile unused"></td>         <td id="m9" class="d1 board-tile unused">DL</td><td id="m10" class="board-tile unused"></td>        <td id="m11" class="board-tile unused"></td>        <td id="m12" class="board-tile unused"></td>        <td id="m13" class="dw board-tile unused">DW</td>   <td id="m14" class="board-tile unused"></td>        <td id="m15" class="board-tile unused"></td></tr>
                    <tr><td id="n1" class="board-tile unused"></td>         <td id="n2" class="dw board-tile unused">DW</td>    <td id="n3" class="board-tile unused"></td>     <td id="n4" class="board-tile unused"></td>     <td id="n5" class="board-tile unused"></td>     <td id="n6" class="t1 board-tile unused">TL</td><td id="n7" class="board-tile unused"></td>     <td id="n8" class="board-tile unused"></td>         <td id="n9" class="board-tile unused"></td>     <td id="n10" class="t1 board-tile unused">TL</td>   <td id="n11" class="board-tile unused"></td>        <td id="n12" class="board-tile unused"></td>        <td id="n13" class="board-tile unused"></td>        <td id="n14" class="dw board-tile unused">DW</td>   <td id="n15" class="board-tile unused"></td></tr>
                    <tr><td id="o1" class="tw board-tile unused">TW</td>    <td id="o2" class="board-tile unused"></td>         <td id="o3" class="board-tile unused"></td>     <td id="o4" class="d1 board-tile unused">DL</td><td id="o5" class="board-tile unused"></td>     <td id="o6" class="board-tile unused"></td>     <td id="o7" class="board-tile unused"></td>     <td id="o8" class="tw board-tile unused">TW</td>    <td id="o9" class="board-tile unused"></td>     <td id="o10" class="board-tile unused"></td>        <td id="o11" class="board-tile unused"></td>        <td id="o12" class="d1 board-tile unused">DL</td>   <td id="o13" class="board-tile unused"></td>        <td id="o14" class="board-tile unused"></td>        <td id="o15" class="tw board-tile unused">TW</td></tr>
                </table>
            </div>
        </div>
    </div>
    <asp:Button ID="btnSubmit" runat="server" CssClass="btn btn-primary btn-md ml-3" Text="Submit" OnClick="btnSubmit_Click" />
    <asp:Button ID="btnPass" runat="server" CssClass="btn btn-primary btn-md ml-3" Text="Pass" OnClick="btnPass_Click" />
    <div class="score-board">
        <table  id="score-board" class="score-board">
            <tr><th class="r1">Player</th><th class="r1">Score</th></tr>
            <tr><td class="r1">Peter</td> <td class="r1">1000</td></tr>
            <tr><td class="r1">Lois</td><td class="r1">900</td></tr>
        </table>
    </div>
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
    <asp:Button ID="btnChallenge" runat="server" CssClass="btn btn-primary btn-md ml-3" Text="Challenge" OnClick="btnChallenge_Click"/>
        

</asp:Content>
