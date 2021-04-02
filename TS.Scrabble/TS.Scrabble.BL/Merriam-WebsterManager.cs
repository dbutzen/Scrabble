using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json;
using TS.Scrabble.BL.Models;


//This is the connection to and from the Merriam-Webster API
namespace TS.Scrabble.BL
{
    public class Merriam_WebsterManager
    {


        private const string APIKey = "96117da3-8cb7-4b5b-b29c-a89712b2ce8f";
        private const string resourceURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";// + word + "?" + APIKey;


        public static string Definition(string word)
        {
            //This is the formated URL being sent to Meriam-Webster for the JSON GET
            string requestURL = resourceURL + word + "?key=" + APIKey;

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(requestURL);
            request.Method = "GET";

            try
            {
                using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
                {
                    if (response.StatusCode != HttpStatusCode.OK)
                    {
                        throw new Exception(String.Format("Server error (HTTP {0}: {1}).", response.StatusCode, response.StatusDescription));
                    }
                    else
                    {
                        //Reading the JSON GET Method
                        using (StreamReader oSR = new StreamReader(response.GetResponseStream()))
                        using (JsonDocument doc = JsonDocument.Parse(oSR.ReadToEnd()))
                        {
                            JsonElement root = doc.RootElement;
                            if (root.GetArrayLength() == 0)
                            {
                                return "Word not found.";
                            }
                            else
                            {
                                var definitionJson = root[0];
                                try
                                {
                                    return definitionJson.GetProperty("shortdef").ToString();
                                }
                                catch
                                {
                                    return "Word not found.";
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("MerriamWebster API Error: " + ex.Message.ToString());
                return null;
            }
        }
    }
}
