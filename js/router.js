// #region Global-Variable-Declarations
let pageUrls = {
    home: '/index.html',
    Services:'/index.html?Services'
}
// #endregion

// #region OnStartUp-Function
function OnStartUp(params) {
    popStateHandler();
}
OnStartUp();
// #endregion

// #region Navlinks-Routing
document.querySelector('#service-link').addEventListener('click', (event) => {
    let stateObj = {
        page: 'services'
    }
    document.title = 'Services';
    history.pushState(stateObj, "services", "?Services");
    RenderServicesPage();
});
// #endregion

// #region View-Renderers
function RenderHomePage(params) {
    document.querySelector('main').innerHTML =
    `<div class="content-header">
            Welcome To the Home Page
    </div>
    <div class="text-box">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque illum totam, neque ullam excepturi esse, pariatur est placeat unde blanditiis, vel veniam corrupti odit eveniet accusantium obcaecati! Ex voluptatum voluptas eius, culpa voluptate cumque molestias, dignissimos obcaecati amet ipsum sint. Maxime, beatae quia cupiditate repellat cumque inventore id laboriosam nam ratione numquam modi nemo earum fugiat, voluptatibus non sunt facere.
    </div>`;
}
function RenderServicesPage(params) {
    document.querySelector('main').innerHTML =
        `<div class="content-header">
                Welcome To the Service Page
        </div>
        <div class="text-box">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque illum totam, neque ullam excepturi esse, pariatur est placeat unde blanditiis, vel veniam corrupti odit eveniet accusantium obcaecati! Ex voluptatum voluptas eius, culpa voluptate cumque molestias, dignissimos obcaecati amet ipsum sint. Maxime, beatae quia cupiditate repellat cumque inventore id laboriosam nam ratione numquam modi nemo earum fugiat, voluptatibus non sunt facere.
        </div>`;
}

// #endregion

// #region OnPopState-Handler
function popStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];

    if (loc === pageUrls.Services){
       RenderServicesPage();
    }
    if(loc === pageUrls.home){
        RenderHomePage();
    }
}
window.onpopstate = popStateHandler;
// #endregion
