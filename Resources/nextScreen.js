// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('white');

var win1 = Ti.UI.createWindow({
  backgroundImage: 'back.png',
  exitOnClose: true,
  fullscreen: true,
  layout: 'absolute',
  title: 'First Question'
});

var label = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:30},
  text: 'Question 1',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 20, left: 10,
  width: 'auto', height: 'auto'
});


 var label1 = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:28},
  text: 'Titanium applications are largely built in?',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 70, left: 10,
  width: 'auto', height: 'auto'
});

var firstOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'Java',
	color: 'white',
    height:150,
    top:140,
    align:'center',
    width:450,
    
});  

var secondOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'C++',
	color: 'white',
    height:150,
    top:295,
    align:'center',
    width:450,
    
});  

var thirdOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'Python',
	color: 'white',
    height:150,
    top:460,
    align:'center',
    width:450,
    
});  

var fourthOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'javaScript',
	color: 'white',
    height:150,
    top:615,
    align:'center',
    width:450,
    
});  

var backButton = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'back',
	color: 'white',
    height:150,
    top:770,
    align:'center',
    width:450,
    
}); 

fourthOption.addEventListener('click', function(e){
    Ti.API.info("Button was clicked");
 
    newWin = Titanium.UI.createWindow({
        url:"secondQ.js",
        title: 'Second Question',
    });
    newWin.open();
	win1.close();
     });

backButton.addEventListener('click', function(e){
    Ti.API.info("Button was clicked");
 
    newWin = Titanium.UI.createWindow({
        url:"app.js",
        title: 'Quiz',
    });
    newWin.open();
	win1.close();
     });

secondOption.addEventListener('click', function(){alertDialog.show();});
thirdOption.addEventListener('click', function(){alertDialog.show();});
firstOption.addEventListener('click', function(){alertDialog.show();});

var alertDialog = Titanium.UI.createAlertDialog({
title: 'Awwwwwwwwwww',
message: 'You gotta pay attention buddy, its wrong try again.',
buttonNames: ['OK']
});

var scrollView = Ti.UI.createScrollView({
contentWidth: 'auto',
contentHeight: 'auto',
showVerticalScrollIndicator: true,
});


scrollView.add(label);
scrollView.add(label1);
scrollView.add(firstOption);
scrollView.add(secondOption);
scrollView.add(thirdOption);
scrollView.add(fourthOption);
scrollView.add(backButton);
win1.add(scrollView);
win1.open();


