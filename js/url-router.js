document.addEventListener('click', (e)=>{
    const {target} = e;

    if(!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    urlRoute();
})

const urlRoutes = {
    404: {
        template: "/pages/404.html",
        title: "",
        description: ""
    },
    "/" : {
        template: "/pages/dashboard.html",
        title: "",
        description: ""
    }, 

    "/keteranganSampah" : {
        template: "/pages/keteranganSampah.html",
        title: "",
        description: ""
    }, 

    "/sampahMasuk" : {
        template: "/pages/sampahMasuk.html",
        title: "",
        description: ""
    }, 

    "/jualSampah" : {
        template: "/pages/jualSampah.html",
        title: "",
        description: ""
    }, 

    "/riwayatPenjualan" : {
        template: "/pages/riwayatPenjualan.html",
        title: "",
        description: ""
    }, 

}

const urlRoute = (event) =>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href)
    urlLocationHandler();
}

const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if(location.length == 0) {
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("main").innerHTML = html;
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();