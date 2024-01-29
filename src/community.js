import { AgGridReact } from 'ag-grid-react';
import React from 'react';
import { Tabs } from 'antd';
import DeltaBlameData from './deltablame';
import { CopyBlock } from 'react-code-blocks';
import HudiBlameData from './hudiblame';
import IcebergBlameData from './icebergblame';
import { Alert } from 'antd';
import dedent from 'dedent';
import Contribution from './contribution';



function employed(params) {
  if (params.value == "yes") return "💰";
  return ""  
}

function columns(vendor) {
  return [
    { field: "Contributor", cellStyle: {textAlign: "left" }},
    { field: "Lines", headerName: "Lines Contributed", cellStyle: {textAlign: "right"}},
    { field: "Percent of Total", headerName: "% of All Lines", cellStyle: {textAlign: "right"}},
    { field: "Running Total", headerName: "Running Total", cellStyle: {textAlign: "right"}},
    { field: vendor, cellStyle: {textAlign: "center"}, cellRenderer: employed, tooltipField: vendor},
  ];
}

const gridOptions = {
  domLayout: 'autoHeight',
  autoSizeStrategy: {
    type: 'fitCellContents',


  },
}

function blameBody(data, employed, command) {
  return (
    <div>
      <h3>Blame Command</h3>
      <CopyBlock language='bash' wrapLongLines={true} text={dedent(command)} />
      <h3>Core Code Written by Contributor</h3>
      <div className="ag-theme-quartz" >
        <AgGridReact rowData={data} columnDefs={columns(employed)} gridOptions={gridOptions} defaultColDef={{ sortable: false }} />
      </div>
    </div>
  );
}

const vendorControl = [
  {
    "Format": "Delta Lake",
    "Sponsor": 30,
    "Community": 0,
    "Primary Vendor Control": "100%"
  },
  {
    "Format": "Hudi",
    "Sponsor": 5,
    "Community": 22,
    "Primary Vendor Control": "19%"
  },
  {
    "Format": "Iceberg",
    "Sponsor": 4,
    "Community": 7,
    "Primary Vendor Control": "36%"
  },
 ];

const items = [
  {
    key: '1',
    label: 'Vendor Influence and Control',
    children: (
      <div>
        <p>The data below show the number of contributors that are employed by the primary vendor behind the table format. Note this evlauation considers all contributors who have contributed at least 1% of total code to the underlying project.</p>
        <div className="ag-theme-quartz" >
          <AgGridReact rowData={vendorControl} columnDefs={[
            { field: "Format", headerName: "Format"},
            { field: "Sponsor", headerName: "Primary Vendor Contributors", cellStyle: {textAlign: "right"}},
            { field: "Community", headerName: "Community", cellStyle: {textAlign: "right"}},
            { field: "Primary Vendor Control", headerName: "Primary Vendor Control", cellStyle: {textAlign: "right"}},
          ]} gridOptions={gridOptions} defaultColDef={{ sortable: false }} />
        </div>
        
        
      </div>
    ),
  },
  {
    key: '2',
    label: 'Bus Factor',
    children:(
      <div className="ag-theme-quartz" >
        <AgGridReact rowData={[
            {
              "Core Code Coverage": "50%",
              "Iceberg": 2,
              "Delta Lake": 9,
              "Hudi": 11
            },
            {
              "Core Code Coverage": "75%",
              "Iceberg": 7,
              "Delta Lake": 23,
              "Hudi": 23
            },
            {
              "Core Code Coverage": "90%",
              "Iceberg": 23,
              "Delta Lake": 41,
              "Hudi": 42
            }
          ]} columnDefs={[
          { field: "Core Code Coverage", headerName: "% of Code", cellStyle: {textAlign: "right" }},
          { field: "Delta Lake", headerName: "Delta Lake", cellStyle: {textAlign: "right"}},
          { field: "Hudi", headerName: "Hudi", cellStyle: {textAlign: "right"}},
          { field: "Iceberg", headerName: "Iceberg", cellStyle: {textAlign: "right"}},
        ]} gridOptions={gridOptions} defaultColDef={{ sortable: false }} />
      </div>
    ),
  },
  {
    key: '3',
    label: 'Contribution Curves',
    children: <Contribution />, 
  },  
  {
    key: '4',
    label: 'Delta Lake Details',
    children: blameBody(DeltaBlameData, "Databricks Employed", 
    `
    git clone git@github.com:delta-io/delta.git
    cd delta
    git ls-tree -r -z --name-only HEAD -- spark/src/main/* | sed 's/^/.\//' | xargs -0 -n1 git blame --line-porcelain HEAD | grep -ae "^author-mail "|sort|uniq -c|sort -nr`)
  },
  {
    key: '5',
    label: 'Hudi Details',
    children: blameBody(HudiBlameData, "Onehouse Employed", `
      git clone git@github.com:apache/hudi.git
      cd hudi
      git ls-tree -r -z --name-only HEAD -- hudi-common/src/main* hudi-client/hudi-client-common/src/main/* hudi-client/hudi-spark-client/src/main/* | sed 's/^/.\//' | xargs -0 -n1 git blame --line-porcelain HEAD | grep -ae "^author-mail "|sort|uniq -c|sort -nr
          `),
  },
  {
    key: '6',
    label: 'Iceberg Details',
    children: blameBody(IcebergBlameData, "Tabular Employed", `
      git clone git@github.com:apache/iceberg.git
      cd iceberg
      git ls-tree -r -z --name-only HEAD -- core/src/main/* | sed 's/^/.\//' | xargs -0 -n1 git blame --line-porcelain HEAD | grep -ae "^author-mail "|sort|uniq -c|sort -nr`
    ),
  },
];


const Community = () => {
  return (
    <Tabs defaultActiveKey="1" items={items} />
  )
}

export default Community;




