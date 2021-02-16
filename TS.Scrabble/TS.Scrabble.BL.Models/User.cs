using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TS.Scrabble.BL.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public int Score { get; set; }
        public DateTime CreationDate { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
