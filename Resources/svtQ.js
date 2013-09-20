// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('white');

var win1 = Ti.UI.createWindow({
  backgroundImage: 'back.png',
  exitOnClose: true,
  fullscreen: true,
  layout: 'absolute',
  title: 'Question 17'
});

var label = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:30},
  text: 'Question 17',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 20, left: 10,
  width: 'auto', height: 'auto'
});


 var label1 = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:28},
  text: 'On iPhone & Android, what is the extension of the database saved on the phone?',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 70, left: 10,
  width: 'auto', height: 'auto'
});

var firstOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'Both have a .sqlite file in the phone memory',
	color: 'white',
    height:100,
    top:250,
    align:'center',
    width:450,
    
});  

var secondOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: '.sqlite on the iPhone and .db on the Android',
	color: 'white',
    height:100,
    top:350,
    align:'center',
    width:450,
    
});  

var thirdOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: '.sql on the iPhone and no extension on the Android',
	color: 'white',
    height:100,
    top:460,
    align:'center',
    width:450,
    
});  

var fourthOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'No database is installed on the device.',
	color: 'white',
    height:100,
    top:560,
    align:'center',
    width:450,
    
}); 

var backButton = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'back',
	color: 'white',
    height:100,
    top:660,
    align:'center',
    width:450,
    
}); 

thirdOption.addEventListener('click', function(e){
    Ti.API.info("Button was clicked");
 
    newWin = Titanium.UI.createWindow({
        url:"egtQ.js",
        title: 'Question 18',
    });
    newWin.open();
	win1.close
});

backButton.addEventListener('click', function(e){
    Ti.API.info("Button was clicked");
 
    newWin = Titanium.UI.createWindow({
        url:"sixtQ.js",
        title: 'Question 16',
    });
    newWin.open();
	win1.close();
     });

firstOption.addEventListener('click', function(){alertDialog.show();});
secondOption.addEventListener('click', function(){alertDialog.show();});
fourthOption.addEventListener('click', function(){alertDialog.show();});

var alertDialog = Titanium.UI.createAlertDialog({
title: 'Baaaaaaaaad',
message: 'Looks like you were concentrating, its wrong try again.',
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


