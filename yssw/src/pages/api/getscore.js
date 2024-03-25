import { google } from "googleapis";
import keys from "../../yssw-417906-cced10e7d312.json"

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

const sheets = google.sheets({ version: "v4", auth: client });


export default async function getsheet(req, res) {
    const searchStudentID = req.query.searchStudentID;
    console.log("search studentID:", searchStudentID)

    try {
        const sheetResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: "13q7D_cADhW1ZK3K_eoiXR21HLiOX9mCHHdiUrICg7sg",
            range: "工作表1!A2:G100"
        });
        const values = sheetResponse.data.values;
        //console.log(values);
        const title = values[0];
        const studentData = values.find(row => row[1] === searchStudentID);
        if (studentData) {
            console.log("Find student Data:", studentData);

            res.status(200).json(
                {
                    success: true,
                    data: {
                        title: title.slice(3),
                        studentData: studentData.slice(3)
                    }
                });
        } else {
            //console.log("[ERROR] Not find");
            res.status(200).json(
                {
                    success: false,
                    data: null
                });
        }
    } catch (error) {
        console.error("[ERROR] ", error);
        res.status(503).json(
            {
                success: false,
                data: null
            });
    }
}