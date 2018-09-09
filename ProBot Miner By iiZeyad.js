var ServerID = "488461281809006604"; //اي دي السيرفر
var ChannelID = "488461281809006608";// اي دي الروم

/*	
 
Codes server - !.Zeyad' , ♚Roýale#5555


                                                                                                            
                                                                                                            
  ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______ 
 /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/ 
                                                                                                            
                                                                                                            

		
__________              __________        __   
\______   \_______  ____\______   \ _____/  |_ 
 |     ___/\_  __ \/  _ \|    |  _//  _ \   __\
 |    |     |  | \(  <_> )    |   (  <_> )  |  
 |____|     |__|   \____/|______  /\____/|__|  
                                \/             

_________                    .___.__  __          
\_   ___ \_______   ____   __| _/|__|/  |_  ______
/    \  \/\_  __ \_/ __ \ / __ | |  \   __\/  ___/
\     \____|  | \/\  ___// /_/ | |  ||  |  \___ \ 
 \______  /|__|    \___  >____ | |__||__| /____  >
        \/             \/     \/               \/ 
Codes server - !.Zeyad' , ♚Roýale#5555


   _____  .__                     
  /     \ |__| ____   ___________ 
 /  \ /  \|  |/    \_/ __ \_  __ \
/    Y    \  |   |  \  ___/|  | \/
\____|__  /__|___|  /\___  >__|   
        \/        \/     \/       


*/
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);
// Codes server - !.Zeyad' , ♚Roýale#5555


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Zeyad,Royale','\n','ProBot credits miner is ready!'));// Codes Server` - iiZeyad , Roýale"1.5k 🍷#1111

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));// Codes server - !.Zeyad' , ♚Roýale#5555


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , ♚Roýale#5555


    });
}

var timer = setTimeout(timerFunc, 1000);

client.login("WzQ3OTU5NzQ5NDkwNTYwMjA1OCwiMTk2LjcwLjE1LjEwMSJd.DncTtQ.QV--sExf1dwnK_dSJ5SOqPfSl1Q");