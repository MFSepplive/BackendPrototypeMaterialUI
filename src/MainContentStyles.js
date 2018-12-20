export const styles = theme => ({
    contentWrapper: {
        padding: "90px 30px 30px 90px",
        backgroundColor: "#f4f4f4",
        boxSizing: "border-box",
        height: "100vh"
    },
    title: {
        fontSize: "24px",
        lineHeight: "24px",
        fontWeight: 300,
        fontFamily: "Arial, sans-serif",
        marginBottom: "30px"
    },
    tilesWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row"
    },
    leftTileWrapper: {
        width: "100%",
        maxWidth: "765px",
        marginRight: "30px",
        boxShadow: "0 0 5px 0 rgba(0,0,0,0.15)",
        backgroundColor: "white",
        height: "calc(100vh - 174px)"
    },
    rightTileWrapper: {
        width: "100%",
        maxWidth: "765px",
        boxShadow: "0 0 5px 0 rgba(0,0,0,0.15)",
        backgroundColor: "white",
        height: "calc(100vh - 174px)"
    }
});
