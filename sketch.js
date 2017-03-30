var osc1 = new Tone.Oscillator();
var now = Tone.now();
var playvol= -10;
var volumebuffer = 3;

var play1 = new Tone.Player({"url":"basstabla.wav", "volume": playvol}).toMaster();
var play2 = new Tone.Player({"url":"chinamma.mp3", "volume": playvol}).toMaster();
var play3 = new Tone.Player({"url":"daunda.mp3", "volume": playvol}).toMaster();
var play4 = new Tone.Player({"url":"jiyajale.mp3", "volume": -12}).toMaster();
var play5 = new Tone.Player({"url":"tring.mp3", "volume": playvol}).toMaster();
var play6 = new Tone.Player({"url":"madari.mp3", "volume": playvol}).toMaster();
var play7 = new Tone.Player({"url":"sanidha.mp3", "volume": -6}).toMaster();
var play8 = new Tone.Player({"url":"madarisound.mp3", "volume": playvol}).toMaster();
var play9 = new Tone.Player({"url":"ooohooh.mp3", "volume": playvol}).toMaster();
var play10 = new Tone.Player({"url":"oohaah.mp3", "volume": playvol}).toMaster();

var players = [];
players.push(play1);
players.push(play2);
players.push(play3);
players.push(play4);
players.push(play5);
players.push(play6);
players.push(play7);
players.push(play8);
players.push(play9);
players.push(play10);

var random = Math.floor(Math.random());
// var nextRandom = Math.floor(Math.random() * players.length);


//button.mousepressed(stopeffects);

function stopeffects(){
	for(var i =0;i<10;i++)
	players[i].stop();
}

var autoFilter = new Tone.AutoFilter("4n").toMaster().start();
var autoPanner = new Tone.AutoPanner("4n").toMaster().start();
var feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toMaster(); //thisisgood
var freeverb = new Tone.Freeverb().toMaster(); //thisisgood
freeverb.dampening.value = 1000;

var reverb = new Tone.JCReverb(0.4).connect(Tone.Master);
var delay = new Tone.FeedbackDelay(0.5); 

var phaser = new Tone.Phaser({
	"frequency" : 15, 
	"octaves" : 5, 
	"baseFrequency" : 1000
}).toMaster();

var pingPong = new Tone.PingPongDelay("4n", 0.2).toMaster();
var tremolo = new Tone.Tremolo(9, 0.75).toMaster().start();
//var oscillator = new Tone.Oscillator().start();
var crusher = new Tone.BitCrusher(4).toMaster();
var cheby = new Tone.Chebyshev(101);
var chorus = new Tone.Chorus(4, 2.5, 0.5);

var effects = [];
effects.push(autoFilter);
effects.push(autoPanner);
effects.push(feedbackDelay);
effects.push(freeverb);
effects.push(reverb);
effects.push(phaser);
effects.push(pingPong);
effects.push(tremolo);
effects.push(cheby);
effects.push(chorus);

//synth = new Tone.MonoSynth().connect(cheby);
//var synth = new Tone.MonoSynth().connect(crusher);
// var player1 = new Tone.Player({"url":"Man Mandira.mp3", "volume": player1vol}).toMaster();
// var player2 = new Tone.Player({"url":"pinga.mp3", "volume": player2vol}).toMaster();
//  player1.autostart = true;
//  player2.autostart = true;

// player1.connect(tremolo).toMaster();

//gest.options.debug(true);
gest.start();
			
			
			gest.options.subscribeWithCallback(function(gesture) {

				if (gesture.left) {
					console.log("left");
					var nextRandom = Math.floor(Math.random() * players.length);
					players[nextRandom].start();					
				} 

				if (gesture.right) {
					var nextRandom = Math.floor(Math.random() * players.length);
					players[nextRandom].start();
					console.log("right");
				} 
				if  (gesture.up) {
					var nextRandom = Math.floor(Math.random() * players.length);
					players[nextRandom].connect(effects[nextRandom]).toMaster();
					console.log("up");
				} 
				if  (gesture.down) {
					var nextRandom = Math.floor(Math.random() * players.length);
					players[nextRandom].connect(effects[nextRandom]).toMaster();
					console.log("down");
					
				}  
				if(gesture.error){
				console.log("error");} 
			});

// function playerCallback(time){
	
// 	player1.loop = true;
// 	player2.loop = true;
	
// }

//Tone.Transport.schedule(playerCallback, now);

//Tone.Transport.schedule(playerCallback, 1)
//Tone.Transport.schedule(playerCallback, 2)

// Tone.Buffer.on('load', function(){
// 	now = Tone.now()
// 	Tone.player.start(now);
//   	Tone.Transport.start()//stop("+1.5").start("+4")
// })	

// var playbackRate = 1;
// player1.playbackRate = playbackRate	;

