var networkImages = {
    mtn: 'mtn.png',
    glo: 'glo.png',
    airtel: 'airtel.jpeg',
    '9mobile': '9mobile.webp',
};

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      checkNetwork();
    }
  });
function checkNetwork() {
 

    var phoneNumber = document.getElementById('phoneNumber').value;
    console.log(phoneNumber);
    if (
        phoneNumber.startsWith('+234703') ||
        phoneNumber.startsWith('0703') ||
        phoneNumber.startsWith('+234706') ||
        phoneNumber.startsWith('0706') ||
        phoneNumber.startsWith('+234803') ||
        phoneNumber.startsWith('0803') ||
        phoneNumber.startsWith('+234806') ||
        phoneNumber.startsWith('0806') ||
        phoneNumber.startsWith('+234813') ||
        phoneNumber.startsWith('0813') ||
        phoneNumber.startsWith('+234816') ||
        phoneNumber.startsWith('0816') ||
        phoneNumber.startsWith('+234810') ||
        phoneNumber.startsWith('0810') ||
        phoneNumber.startsWith('+234814') ||
        phoneNumber.startsWith('0814') ||
        phoneNumber.startsWith('+234817') ||
        phoneNumber.startsWith('0817') ||
        phoneNumber.startsWith('+234818') ||
        phoneNumber.startsWith('0818') ||
        phoneNumber.startsWith('+234903') ||
        phoneNumber.startsWith('0903') ||
        phoneNumber.startsWith('+234906') ||
        phoneNumber.startsWith('0906')
    ) {
        displayNetworkLogo('mtn');
    } else if (
        phoneNumber.startsWith('+234805') ||
        phoneNumber.startsWith('0805') ||
        phoneNumber.startsWith('+234805') ||
        phoneNumber.startsWith('0805') ||
        phoneNumber.startsWith('+234705') ||
        phoneNumber.startsWith('0705')
    ) {
        displayNetworkLogo('glo');
    } else if (
        phoneNumber.startsWith('+234802') ||
        phoneNumber.startsWith('0802') ||
        phoneNumber.startsWith('+234708') ||
        phoneNumber.startsWith('0708') ||
        phoneNumber.startsWith('+234812') ||
        phoneNumber.startsWith('0812') ||
        phoneNumber.startsWith('+234701') ||
        phoneNumber.startsWith('0701') ||
        phoneNumber.startsWith('+234902') ||
        phoneNumber.startsWith('0902')
    ) {
        displayNetworkLogo('airtel');
    } else if (
        phoneNumber.startsWith('+234809') ||
        phoneNumber.startsWith('0809') ||
        phoneNumber.startsWith('+234909') ||
        phoneNumber.startsWith('0909') ||
        phoneNumber.startsWith('+234819') ||
        phoneNumber.startsWith('0819') ||
        phoneNumber.startsWith('+234811') ||
        phoneNumber.startsWith('0811') ||
        phoneNumber.startsWith('+234908') ||
        phoneNumber.startsWith('0908')
    ) {
        displayNetworkLogo('9mobile');
    } else {
        
        alert('Invalid Nigerian phone number. Please enter a valid number.');
    }
    
}

  

function displayNetworkLogo(network) {
    var networkImage = document.getElementById("networkImage");
    networkImage.src = networkImages[network];
    document.getElementById('networkLogo').style.display = 'block';
}
