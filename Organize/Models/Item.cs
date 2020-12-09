using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Organize.Models
{
    public class Item
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; }

        private string levelCordination;

        public string LevelCordination
        {
            get { return levelCordination; }
            set { if(value!="Upper" && value!="Lower" && value!="Center") 
                {
                    levelCordination = null;
                }
                else
                {
                    levelCordination = value;
                }
            }
        }


        [ForeignKey("Container")]
        public int ContainerId { get; set; }
        public Container Container { get; set; }


    }
}
