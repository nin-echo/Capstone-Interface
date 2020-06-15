// XMLHttpRequest in promise format
function makeRequest(method, url, success, error) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.responseType = "arraybuffer";
  
    httpRequest.open(method, url);
    httpRequest.onload = function () {
        success(httpRequest.response);
    };
    httpRequest.onerror = function () {
        error(httpRequest.response);
    };
    httpRequest.send();
  }
  
  // read the raw data and convert it to a XLSX workbook
  function convertDataToWorkbook(data) {
    /* convert data to binary string */
    var data = new Uint8Array(data);
    var arr = new Array();
  
    for (var i = 0; i !== data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
    }
  
    var bstr = arr.join("");
  
    return XLSX.read(bstr, {type: "binary"});
    
  }

  var container = document.getElementById('handSheet');
  function displaySheet(workbook) {
    // our data is in the first sheet
    var firstSheetName = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[firstSheetName];

    var table = XLSX.utils.sheet_to_json(worksheet, {header: 'A', raw: true, defval: ' ', range: 1})
    
    console.log(table[0])

    var hot = new Handsontable(container, {
        data: table,
        rowHeaders: false,
        colHeaders: ['', 'Area', 'Gender', 'Dimension', 'Scores A', 'Scores B', 'Comment', 'Index', 'Similar Words', 'Length'],
        bindRowsWithHeaders: 'strict',
        filters: true,
        dropdownMenu: true,
        columnSorting: true,
        readOnly: true,
        licenseKey: 'non-commercial-and-evaluation'
      });
}
  

  function importExcel() {
    makeRequest('GET',
        'https://raw.githubusercontent.com/nin-echo/Capstone-Text-Analysis/nin-echo-patch-1/flexibility%2Cflexible.xlsx',
        // success
        function (data) {
            console.log(data)
            var workbook = convertDataToWorkbook(data);

            displaySheet(workbook);
            scrollToBottom();
        },
        // error
        function (error) {
            throw error;
        }
    );
  }
