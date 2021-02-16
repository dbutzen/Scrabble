<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="WebApplication1.Home" %>

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
            <h4>Login Or Create An Account To Play:</h4>
        </div>
    </div>

    <div class="form-row ml-2 mt-2">
        <div class="control-label col-md-2">
            <asp:Label ID="Label3"
                runat="server"
                Text="Username:"></asp:Label>
        </div>
        <div class="control-label col-md-3">
            <asp:TextBox ID="txtUsername"
                runat="server"
                CssClass="form-control"></asp:TextBox>
        </div>
    </div>

    <div class="form-row ml-2 mt-2">
        <div class="control-label col-md-2">
            <asp:Label ID="Label2"
                runat="server"
                Text="Password:"></asp:Label>
        </div>
        <div class="control-label col-md-3">
            <asp:TextBox ID="txtPassword"
                runat="server"
                CssClass="form-control"></asp:TextBox>
        </div>
    </div>

    <div class="form-group ml-5 mt-2">
        <asp:Button ID="btnLogin" runat="server" CssClass="btn btn-primary btn-md ml-3" Text="Login" OnClick="btnLogin_Click" />
        <asp:Button ID="btnCreate" runat="server" CssClass="btn btn-primary btn-md ml-3" Text="Create Account" OnClick="btnCreate_Click" />
    </div>
    <div class="Background">
    </div>

</asp:Content>
