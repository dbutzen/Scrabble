BEGIN
	--------------------Game-1-------------------------Player-1---------------------
	DECLARE @UserId int;
	SELECT @UserId = Id FROM tblUser WHERE FirstName = 'Keir';
	
	DECLARE @GameId int;
	SELECT @GameId = Id FROM tblGame WHERE Name = 'Wolf';
	
	INSERT INTO tblUserGame (Id, GameId, UserId, IsWinner, PlayerScore)
	VALUES
	(1, @GameId, @UserId, 0, 10)
	--------------------Game-1-------------------------Player-2---------------------
	SELECT @UserId = Id FROM tblUser WHERE FirstName = 'Andrew';

	SELECT @GameId = Id FROM tblGame WHERE Name = 'Wolf';

	INSERT INTO tblUserGame (Id, GameId, UserId, IsWinner, PlayerScore)
	VALUES
	(2, @GameId, @UserId, 1, 50)
	--------------------Game-1-------------------------Player-3---------------------
	SELECT @UserId = Id FROM tblUser WHERE FirstName = 'Spencer';

	SELECT @GameId = Id FROM tblGame WHERE Name = 'Wolf';

	INSERT INTO tblUserGame (Id, GameId, UserId, IsWinner, PlayerScore)
	VALUES
	(3, @GameId, @UserId, 1, 25)
	--------------------Game-1-------------------------Player-4---------------------
	SELECT @UserId = Id FROM tblUser WHERE FirstName = 'Daniel';

	SELECT @GameId = Id FROM tblGame WHERE Name = 'Wolf';

	INSERT INTO tblUserGame (Id, GameId, UserId, IsWinner, PlayerScore)
	VALUES
	(4, @GameId, @UserId, 1, 35)

END