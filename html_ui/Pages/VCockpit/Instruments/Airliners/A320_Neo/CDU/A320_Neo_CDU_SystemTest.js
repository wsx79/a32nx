class CDUTestingPage {
    static Init(mcdu) {
        setTimeout(() => {
            this.testElement = this.querySelector("#SystemTesting")
            this.mainElement = this.querySelector("#Mainframe")
            this.testElement.setAttribute("visibility", "hidden");
            this.mainElement.setAttribute("visibility", "visible");
            CPUIdentPage.ShowPage(mcdu)
        }, 20000);
    }
}