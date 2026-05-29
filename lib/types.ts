export  interface dataType {
    imei: string;
    phone_model: string;
    ownerName: string;
    status: string;
    stolenDate: string;
    reportedDate: string;
    stolenFrom: {
        place: string;
        area: string;
        city: string;
    }
}