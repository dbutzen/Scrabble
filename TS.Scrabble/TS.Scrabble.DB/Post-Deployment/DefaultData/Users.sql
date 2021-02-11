BEGIN
	INSERT INTO[dbo].tblUser (Id, FirstName, LastName, Password, Email,  UserName, Score, UserCreationDate, Wins, Losses)
	VALUES
	(1, 'Keir', 'Dvorachek', 'pass', '200004248@fvtc.edu', 'kdvorachek', 0, GETDATE(), 0, 0),
	(2, 'Spencer', 'Plote', 'pass', 'plote8073@fvtc.edu', 'splote', 0, GETDATE(), 0, 0),
	(3, 'Andrew', 'Linzmeier', 'pass', 'linzmeie0292@fvtc.edu', 'alinzmeier', 0, GETDATE(), 0, 0),
	(4, 'Dan', 'Butzen', 'pass', 'butzen7079@fvtc.edu', 'dbutzen', 0, GETDATE(), 0, 0)
END