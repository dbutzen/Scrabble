BEGIN
	INSERT INTO[dbo].tblGame (Id, DatePlayed, Name, Password, GameState)
	VALUES
	(1, GETDATE(), 'Wolf', 'pass', ''),
	(2, GETDATE(), 'Hawk', 'pass', ''),
	(3, GETDATE(), 'Fish', 'pass', ''),
	(4, GETDATE(), 'Horse', 'pass', '')
END