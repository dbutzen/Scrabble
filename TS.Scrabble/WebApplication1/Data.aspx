﻿<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Data.aspx.cs" Inherits="WebApplication1.Data" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div class="Sidebar-Left">
    </div>
    <div class="Sidebar-Right">
    </div>
    <div class="header rounded-top">
        <h3>Welcome To Scrabble!<asp:Image runat="server" ImageUrl="~/Images/Scrabble.png" Height="274px" Width="1094px" />
        </h3>
    </div>
    <asp:Image runat="server" ImageUrl="~/Images/ScrabbleLogo.png.png" />
    
    <div class="form-row ml-2 mt-2">
        <div class="control-label col-md-2">
            <asp:Label ID="Label3"
                runat="server"
                Text="Game Name:"></asp:Label>
        </div>
        <div class="control-label col-md-3">
            <asp:Label ID="lblGameName"
                runat="server"
                CssClass="form-control"></asp:Label>
        </div>
    </div>

    <div class="form-row ml-2 mt-2">
        <div class="control-label col-md-2">
            <asp:Label ID="Label1"
                runat="server"
                Text="Game Pass:"></asp:Label>
        </div>
        <div class="control-label col-md-3">
            <asp:Label ID="lblGamepass"
                runat="server"
                CssClass="form-control"></asp:Label>
        </div>

    </div>
    <div class="form-group ml-5 mt-2">
        <asp:Button ID="btnLoad" runat="server" CssClass="btn btn-primary btn-md ml-3" Text="Login" OnClick="btnLoad_Click" />
    </div>

</asp:Content>
