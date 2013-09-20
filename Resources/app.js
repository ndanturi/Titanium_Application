// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('white');

var win = Ti.UI.createWindow({
  backgroundImage: 'back.png',
  exitOnClose: true,
  fullscreen: true,
  layout: 'vertical',
  title: 'Quiz'
});

var label = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:30},
  text: 'CST594 - Mobile Computing',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 50, left: 10,	
  width: 'auto', height: 'auto'
});

var label1 = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:30},
  text: 'Ready to test your knowledge?',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 70, left: 10,	
  width: 'auto', height: 'auto'
});

var label2 = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontSize:28},
  text: 'In this friendly quiz, you will be\npresented with 20 questions.\nAll The Best!!!',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 100, left: 10,	
  width: 'auto', height: 'auto'
}); 

var startQuiz = Ti.UI.createButton({
    
    backgroundImage:'main.png', 
	height:100,
    top:140,
    align:'center',
    width:450,
    
});  

startQuiz.addEventListener('click', function(e){
    //Ti.API.info("Start Quiz Button was clicked");
 
    newWin = Titanium.UI.createWindow({
        url:"nextScreen.js",
        title: 'First Question',
    });
    newWin.open();
     
});

win.add(label);
win.add(label1);
win.add(label2);
win.add(startQuiz);
win.open();

