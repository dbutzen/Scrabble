using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TS.Scrabble.BL.Models;

namespace TS.Scrabble.BL
{
    public static class BagManager
    {
        public static int InitializeTiles(Game game)
        {
            for (int i = 0; i < 9; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'A';
                tile.value = 1;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 2; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'B';
                tile.value = 3;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 2; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'C';
                tile.value = 3;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 4; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'D';
                tile.value = 2;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 12; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'E';
                tile.value = 1;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 2; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'F';
                tile.value = 4;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 3; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'G';
                tile.value = 2;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 2; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'H';
                tile.value = 4;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 9; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'I';
                tile.value = 1;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 1; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'J';
                tile.value = 8;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 1; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'K';
                tile.value = 5;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 4; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'L';
                tile.value = 1;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 2; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'M';
                tile.value = 3;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 6; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'N';
                tile.value = 1;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 8; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'O';
                tile.value = 1;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 2; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'P';
                tile.value = 3;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 1; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'q';
                tile.value = 10;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 6; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'R';
                tile.value = 1;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 4; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'S';
                tile.value = 1;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 6; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'T';
                tile.value = 1;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 4; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'U';
                tile.value = 1;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 2; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'V';
                tile.value = 4;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 2; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'W';
                tile.value = 4;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 1; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'X';
                tile.value = 8;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 2; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'Y';
                tile.value = 4;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 1; i++)
            {
                Tile tile = new Tile();
                tile.letter = 'Z';
                tile.value = 10;
                game.gameBag.tiles.Add(tile);
            }
            for (int i = 0; i < 2; i++)
            {
                Tile tile = new Tile();
                tile.letter = '0';
                tile.value = 0;
                game.gameBag.tiles.Add(tile);
            }
            return 1;
        }
    }
}
