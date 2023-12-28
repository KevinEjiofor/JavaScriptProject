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

    if (phoneNumber.length == 11 || phoneNumber.length == 14) {
        var networkRegex = /^(?:(\+234[789]\d{2})|(0[789]\d{2}))/;
        var match = phoneNumber.match(networkRegex);

        
        if (match && (match[1] || match[2])) {
            var networkPrefix = match[1] ? match[1] : `0${match[2]}`;
            displayNetworkLogo(getNetworkForPrefix(networkPrefix));
        } else {
            alert('Invalid Nigerian phone number. Please enter a valid number.');
        }
    } else {
        alert('Kindly enter a valid number.');
    }
}


    function getNetworkForPrefix(prefix) {
  
        var networkMappings = {
            '+234703': 'mtn',
            '+234706': 'mtn',
            '+234803': 'mtn',
            '+234806': 'mtn',
            '+234813': 'mtn',
            '+234816': 'mtn',
            '+234810': 'mtn',
            '+234814': 'mtn',
            '+234817': 'mtn',
            '+234818': 'mtn',
            '+234903': 'mtn',
            '+234906': 'mtn',
            '0703': 'mtn',  
            '0706': 'mtn',
            '0803': 'mtn',
            '0806': 'mtn',
            '0813': 'mtn',
            '0816': 'mtn',
            '0810': 'mtn',
            '0814': 'mtn',
            '0817': 'mtn',
            '0818': 'mtn',
            '0903': 'mtn',
            '0906': 'mtn',
    
            '0805': 'glo',
            '0705': 'glo',
            '+234805': 'glo',
            '+234705': 'glo',
    
            '+234802': 'airtel',
            '+234708': 'airtel',
            '+234812': 'airtel',
            '+234701': 'airtel',
            '+234902': 'airtel',
            '0802': 'airtel',
            '0708': 'airtel',
            '0812': 'airtel',
            '0701': 'airtel',
            '0902': 'airtel',
    
            '0809': '9mobile',
            '0909': '9mobile',
            '0819': '9mobile',
            '0811': '9mobile',
            '0908': '9mobile',
            '+234809': '9mobile',
            '+234909': '9mobile',
            '+234819': '9mobile',
            '+234811': '9mobile',
            '+234908': '9mobile',
        };
    
        return networkMappings[prefix] || 'unknown';
    }
 
    


function displayNetworkLogo(network) {
    var networkImage = document.getElementById('networkImage');
    networkImage.src = networkImages[network];
    document.getElementById('networkLogo').style.display = 'block';
}