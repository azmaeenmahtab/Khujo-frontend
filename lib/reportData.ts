export const getReportDataById = async () => {

    const reportResult = await fetch("http://localhost:5000/reports", {
        method: "GET"
    })
    console.log(reportResult, "users reports");
    return reportResult;
}