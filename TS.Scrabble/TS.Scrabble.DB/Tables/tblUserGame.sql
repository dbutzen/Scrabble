CREATE TABLE [dbo].[tblUserGame]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [GameId] INT NOT NULL, 
    [UserId] INT NOT NULL, 
    [IsWinner] BIT NOT NULL, 
    [PlayerScore] INT NOT NULL, 
    CONSTRAINT [FK_tblUserGame_tblGame] FOREIGN KEY ([GameId]) REFERENCES [tblGame]([Id]), 
    CONSTRAINT [FK_tblUserGame_tblUser] FOREIGN KEY ([UserId]) REFERENCES [tblUser]([Id])
)
