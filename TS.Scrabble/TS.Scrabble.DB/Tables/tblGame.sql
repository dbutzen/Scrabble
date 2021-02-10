CREATE TABLE [dbo].[tblGame]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Name] VARCHAR(MAX) NOT NULL, 
    [Password] VARCHAR(MAX) NOT NULL, 
    [DatePlayed] DATETIME NOT NULL, 
    [GameState] VARCHAR(MAX) NOT NULL
)
