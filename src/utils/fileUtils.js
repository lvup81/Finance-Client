const studentDetails = process.env.REACT_APP_UPLOAD_STUDENT_DETAILS;
const feeDetails = process.env.REACT_APP_UPLOAD_STUDENT_FEE;
const hostelFeeDetails="/upload/student/hostelfee";
const loanDetails = process.env.REACT_APP_UPLOAD_STUDENT_LOAN;
const schDetails = process.env.REACT_APP_UPLOAD_STUDENT_SCH;

const fileUtils = {
  typeOfFile(typeOfExcel) {
    if (typeOfExcel === "studentDetails") return studentDetails;
    else if (typeOfExcel === "tutionFee") return feeDetails;
    else if (typeOfExcel === "scholarShip") return schDetails;
    else if(typeOfExcel === "hostelFee") return hostelFeeDetails;
    else return loanDetails;
  },
};

export default fileUtils;
