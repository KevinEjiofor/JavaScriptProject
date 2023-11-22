

var networkImages = {
    mtn: 'mtn.png',
    glo: 'glo.png',
    airtel: 'airtel.png',
    '9mobile': '9mobile.png',
  };
  function checkNetwork() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    console.log(phoneNumber);
    var networkImage = document.getElementById('networkImage');

    
    if (phoneNumber.startsWith('234703') || phoneNumber.startsWith('0703')) {
        displayNetworkLogo('mtn');
        
    } else if (phoneNumber.startsWith('234705') || phoneNumber.startsWith('0705')) {
        displayNetworkLogo('glo');
    } else if (phoneNumber.startsWith('234802') || phoneNumber.startsWith('0802')) {
        displayNetworkLogo('airtel');
    } else if (phoneNumber.startsWith('234809') || phoneNumber.startsWith('0809')) {
        displayNetworkLogo('9mobile');
    } else {
        alert('Invalid Nigerian phone number. Please enter a valid number.');
    }
}

  
  function displayNetworkLogo(network) {
    var networkImage = document.getElementById('networkImage');
    networkImage.src =  networkImages[network];
    document.getElementById('networkLogo').style.display = 'block';
  }
  