export const styles = theme => ({
    wrapper: {
        position: "relative",
        height: "100%"
    },
    header: {
        width: "100%",
        height: "60px",
        backgroundColor: "white",
        boxSizing: "border-box",
        boxShadow: "0 0 5px 0 rgba(0,0,0,0.15)"
    },
    tab: {
        minHeight: "61px"
    },
    contentWrapper: {
        position: "relative",
        padding: "17px 20px 19px 20px"
    },
    buttonWrapper: {
        position: "absolute",
        height: "60px",
        backgroundColor: "#057CB4",
        width: "100%",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 0 5px 0 rgba(0,0,0,0.35)"
    },
    shortCutsWrapper: {
        position: "absolute",
        right: "50px",
        bottom: "15px"
    },
    shortCut: {
        height: "30px",
        width: "60px",
        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2), 0 0 10px 0 rgba(0,0,0,0.15)",
        backgroundColor: "#005C93",
        lineHeight: "10px",
        fontSize: "11px"
    }
});
