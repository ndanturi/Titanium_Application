// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('white');

var win1 = Ti.UI.createWindow({
  backgroundImage: 'back.png',
  exitOnClose: true,
  fullscreen: true,
  layout: 'absolute',
  title: 'Question 15'
});

var label = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:30},
  text: 'Question 15',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 20, left: 10,
  width: 'auto', height: 'auto'
});


 var label1 = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:28},
  text: 'What happens when Titanium.Database.open()in invoked and there is no database present on the device?',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 70, left: 10,
  width: 'auto', height: 'auto'
});

var firstOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'An exception is thrown',
	color: 'white',
    height:100,
    top:250,
    align:'center',
    width:450,
    
});  

var secondOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'new database is created automatically',
	color: 'white',
    height:100,
    top:350,
    align:'center',
    width:450,
    
});  

var thirdOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'application look for data sources in the parent directory',
	color: 'white',
    height:100,
    top:450,
    align:'center',
    width:450,
    
});  

var fourthOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'None of the above',
	color: 'white',
    height:100,
    top:550,
    align:'center',
    width:450,
    
}); 

var backButton = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'back',
	color: 'white',
    height:100,
    top:650,
    align:'center',
    width:450,
    
}); 

secondOption.addEventListener('click', function(e){
    Ti.API.info("Button was clicked");
 
    newWin = Titanium.UI.createWindow({
        url:"sixtQ.js",
        title: 'Question 16',
    });
    newWin.open();
	win1.close
});

backButton.addEventListener('click', function(e){
    Ti.API.info("Button was clicked");
 
    newWin = Titanium.UI.createWindow({
        url:"fouQ.js",
        title: 'Question 14',
    });
    newWin.open();
	win1.close();
     });

firstOption.addEventListener('click', function(){alertDialog.show();});
thirdOption.addEventListener('click', function(){alertDialog.show();});
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


