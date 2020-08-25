class CDUDataIndexPage {
    static ShowPage1(mcdu) {
        mcdu.clearDisplay()
        mcdu.setTemplate([
            ["DATA INDEX", "1", "2"],
            ["POSITION"],
            ["<MONITOR"],
            ["IRS"],
            ["<MONITOR"],
            ["GPS"],
            ["<MONITOR"],
            [""],
            ["<A/C STATUS"],
            ["CLOSEST", "PRINT"],
            ["<AIRPORTS", "FUNCTION>"],
            ["EQUITIME", "AOC"],
            ["<POINT", "FUNCTION>"]
        ])

        mcdu.onNextPage = () => {
            this.ShowPage2(mcdu)
        }
        mcdu.onPrevPage = () => {
            this.ShowPage2(mcdu)
        }
    }
    static ShowPage2(mcdu) {
        mcdu.clearDisplay()
        mcdu.setTemplate([
            ["DATA INDEX", "2", "2"],
            ["", "PILOTS"],
            ["<WAYPOINTS", "WAYPOINTS>"]
            ["", "PILOTS"],
            ["<NAVAIDS", "NAVAIDS>"],
            ["", "PILOTS"],
            ["<RUNWAYS", "RUNWAYS>"],
            ["", "PILOTS"],
            ["<ROUTES", "ROUTES>"],
            ["ACTIVE F-PLAN", ""],
            ["<WINDS"],
            ["SEC F-PLAN", ""],
            ["<WINDS"]
        ])

        mcdu.onNextPage = () => {
            this.ShowPage1(mcdu)
        }
        mcdu.onPrevPage = () => {
            this.ShowPage1(mcdu)
        }
    }
}
//# sourceMappingURL=A320_Neo_CDU_DataIndexPage.js.map