CREATE TABLE [dbo].[tblUser]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [FirstName] VARCHAR(MAX) NOT NULL, 
    [LastName] VARCHAR(MAX) NOT NULL, 
    [Password] VARCHAR(MAX) NOT NULL, 
    [Email] VARCHAR(MAX) NOT NULL, 
    [UserName] VARCHAR(MAX) NOT NULL, 
    [Score] INT NOT NULL, 
    [UserCreationDate] DATETIME NOT NULL, 
    [Wins] INT NOT NULL, 
    [Losses] INT NOT NULL
)
