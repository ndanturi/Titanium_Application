// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('white');

var win1 = Ti.UI.createWindow({
  backgroundImage: 'back.png',
  exitOnClose: true,
  fullscreen: true,
  layout: 'absolute',
  title: 'Question 7'
});

var label = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:30},
  text: 'Question 7',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 20, left: 10,
  width: 'auto', height: 'auto'
});


 var label1 = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:28},
  text: 'What does the second argument stand for?\nTi.App.addEventListener("toppings",openToppings);',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 70, left: 10,
  width: 'auto', height: 'auto'
});

var firstOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'Function name',
	color: 'white',
    height:100,
    top:260,
    align:'center',
    width:450,
    
});  

var secondOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'Event handler',
	color: 'white',
    height:100,
    top:360,
    align:'center',
    width:450,
    
});  

var thirdOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'Open Window',
	color: 'white',
    height:100,
    top:460,
    align:'center',
    width:450,
    
});  

var fourthOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'Fired event',
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

firstOption.addEventListener('click', function(e){
    Ti.API.info("Button was clicked");
 
    newWin = Titanium.UI.createWindow({
        url:"eightQ.js",
        title: 'Question 8',
    });
    newWin.open();
	win1.close();
});

backButton.addEventListener('click', function(e){
    Ti.API.info("Button was clicked");
 
    newWin = Titanium.UI.createWindow({
        url:"sixthQ.js",
        title: 'Sixth Question',
    });
    newWin.open();
	win1.close();
     });

secondOption.addEventListener('click', function(){alertDialog.show();});
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


