/** ============
 * > PARSE EXCEL FILE
 * ============= **/

function parseExcel() {
  return new Promise(res => {

    const fileInput = document.querySelector('[name="excel-file"]');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = ({ target }) => {
      const fileData = new Uint8Array(target.result);
      const workbook = XLSX.read(fileData, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
      
      res(data);
    };

    reader.readAsArrayBuffer(file);

  })
}

/** ============
 * > DOWNLOAD CSV 
 * ============= **/

function generateCsv(areaOfficeRows) {
  const csvRows = [];
  for (let i = 0; i < areaOfficeRows.length; i++) {
    csvRows.push(areaOfficeRows[i].map(a => a[0]));
    csvRows.push(areaOfficeRows[i].map(a => a[1] ? percentage(a[1]) : ''))
  }
  return csvRows.map(row => row.map(item => `"${item}"`).join(',')).join('\n');
}

function downloadCsv(areaOfficeRows) {
  const csv = generateCsv(areaOfficeRows);
  const csvContent = `data:text/csv;charset=utf-8,"${csv}`;

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Formatted Quarterly Report.csv");
  link.click();
}

/** ============
 * > PARSE REPORT 
 * ============= **/

// add percentage if decimal
function percentage(str) {
  const num = Number(str);
  if (isNaN(num)) {
    return str;
  }
  return `${num * 100}%`
}

function deepValues(object) {
  const values = [];
  for (const value of Object.values(object)) {
    if (typeof value === 'object' && !(value instanceof Array)) {
      values.push(...deepValues(value));
    } else {
      values.push(value);
    }
  }
  return values;
}

function parseReport(data) {
  const rawPages = [];
  const values = deepValues(PAGE_FIELD_MAP);

  for (const row of data) {
    const PAGE_STARTER = 'MASSACHUSETTS DEPARTMENT OF CHILDREN & FAMILIES QUARTERLY PROFILE --';
    if (row[0] && row[0].startsWith(PAGE_STARTER)) {
      rawPages.push([row]);
    } else {
      rawPages[rawPages.length - 1].push(row);
    }
  }

  const newRows = rawPages.map(page => {
    return values.map(val => {
      // first row can either be [row, col] coords, or a function
      const firstRow = val[0] instanceof Array
        ? page[val[0][0]][val[0][1]]
        : val[0](page);
      const secondRow = val[1] && page[val[1][0]][val[1][1]]; // second row is never a function
      return [firstRow, secondRow];
    })
  });

  return newRows;
}

/** ============
 * > USER INTERFACE 
 * ============= **/

async function handleFormSubmit(e) {
  e.preventDefault();
  const data = await parseExcel();
  const parsedRows = parseReport(data);
  downloadCsv(parsedRows);
}

document.querySelector('form').onsubmit = handleFormSubmit;