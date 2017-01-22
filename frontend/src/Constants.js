var flavors = {
    production: {BASE_URL: 'http://osk.hebus.net'},
    dev: {BASE_URL: 'http://localhost:8081'},
};

function getFlavor() {
    return flavors['dev']; 
}

var Flavor = getFlavor();

export default Flavor;
