// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('white');

var win1 = Ti.UI.createWindow({
  backgroundImage: 'back.png',
  exitOnClose: true,
  fullscreen: true,
  layout: 'absolute',
  title: 'Question 20'
});

var label = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:30},
  text: 'Question 20',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 20, left: 10,
  width: 'auto', height: 'auto'
});


 var label1 = Ti.UI.createLabel({
  color: 'white',
  font:{fontFamily:'Helvetica Neue',fontWeight:'bold',fontSize:28},
  text: 'How do you rate our tutorial?',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 70, left: 10,
  width: 'auto', height: 'auto'
});

var firstOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'Excellent',
	color:'white',
    height:150,
    top:140,
    align:'center',
    width:450,
    
});  

var secondOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: '10/10',
	color:'white',
    height:150,
    top:295,
    align:'center',
    width:450,
    
});  

var thirdOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'A+',
	color:'white',
    height:150,
    top:460,
    align:'center',
    width:450,
    
});  

var fourthOption = Ti.UI.createButton({    
    backgroundImage:'button.png', 
    title: 'All the above',
	color:'white',
    height:150,
    top:615,
    align:'center',
    width:450,
    
});  
fourthOption.addEventListener('click', function(){alertDialogg.show();});
secondOption.addEventListener('click', function(){alertDialog.show();});
firstOption.addEventListener('click', function(){alertDialog.show();});
thirdOption.addEventListener('click', function(){alertDialog.show();});

var alertDialog = Titanium.UI.createAlertDialog({
title: 'hmmmmmmmm',
message: 'close enough, try again.',
buttonNames: ['OK']
});

var alertDialogg = Titanium.UI.createAlertDialog({
title: 'Thanks',
message: 'Hope you enjoyed, gear up and start developing apps on titanium.',
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
win1.add(scrollView);
win1.open();


