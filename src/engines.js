import { AgGridReact } from 'ag-grid-react';
import React from 'react';
import { Alert, Tabs } from 'antd';

const engineSupportData =[
  { engine: "Athena", 
    iceberg: {
      doc: "https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg.html", direct: "r", hms: "r", unity: "r", arctic: "r", glue: "r", tabular: "r", summary: "r"
    },
    delta: {
      doc: "https://docs.aws.amazon.com/athena/latest/ug/querying-delta-lake.html", glue: "r", summary: "r"
    }, 
    hudi: {
      doc: "https://docs.aws.amazon.com/athena/latest/ug/querying-hudi.html", direct: "r", glue: "r", summary: "r"
    }
  },
  { engine: "BigQuery", 
    iceberg: {
      doc: "https://cloud.google.com/bigquery/docs/iceberg-tables", biglake: "rw", tabular:"r^", summary: "rw"
    },
    delta: {
      doc: "https://cloud.google.com/blog/products/data-analytics/bigquery-manifest-file-support-for-open-table-format-queries", 
      summary: "r",
      direct: 'r^', 
    },
    hudi: {
      doc: "https://hudi.apache.org/docs/gcp_bigquery/", direct: "r", hms: "r", glue: "r^", summary: "r"
    }
  },
  { 
    engine: "Databricks SQL", 
    iceberg: {
      doc: "https://docs.databricks.com/en/delta/uniform.html", unity: "w^", summary: "w"
    },
    delta: {
      hms: "rw", dunity: "rw", donelake: "rw", summary: "rw"
    },
    hudi: {

    }
  },
  { 
    engine: "Dremio", 
    iceberg: {
      doc: "https://docs.dremio.com/current/sonar/query-manage/data-formats/apache-iceberg/", 
      summary: "rw",
      hms: "r", 
      nessie: "rw", 
      arctic: "rw", 
      glue: "r",  
      tabular: "r^", 
    },
    delta: {
      doc: "https://docs.dremio.com/current/sonar/query-manage/data-formats/delta-lake/", hms: "r", unity: "r", glue: "r", summary: "r"
    }
  },
  { 
    engine: "DuckDB", 
    iceberg: {
      doc: "https://duckdb.org/docs/extensions/iceberg.html", drect: "r^", summary: "r"
    },
    delta: {
      doc: "https://github.com/duckdb/duckdb/discussions/4463"
    }
  },

  { 
    engine: "Flink", 
    iceberg: {
      doc: "https://iceberg.apache.org/docs/latest/flink/", dynamo: "rw", hms: "rw", jdbc: "rw", nessie: "rw", biglake: "rw", unity: "r", arctic: "rw", glue: "rw", snowflake:"r", tabular:"rw", summary: "rw"
    },
    delta: {
      doc: "https://docs.delta.io/latest/flink-integration.html", hms: "w", unity: "w", glue: "w", onelake:"w", summary: "w"
    },
    hudi: {
      doc: "https://hudi.apache.org/docs/flink-quick-start-guide/", hms: "rw", glue: "rw", summary: "rw"
    }
  },
  { 
    engine: "PrestoDB", 
    iceberg: {
      doc: "https://prestodb.io/docs/0.278/connector/iceberg.html", unity: "r", arctic: "rw", summary: "rw"
    },
    delta: {
      doc: "https://prestodb.io/docs/0.278/connector/deltalake.html", hms: "r", unity: "r", glue: "r", onelake: "r", summary: "r"
    },
    hudi: {
      doc: "https://prestodb.io/docs/0.278/connector/hudi.html", hms: "r", glue: "r", summary: "r"
    },
  },

  { 
    engine: "Redshift", 
    iceberg: {
      doc: "https://docs.aws.amazon.com/redshift/latest/dg/querying-iceberg.html", unity: "r", tabular: "r^", summary: "r"
    },
    delta: {
      doc: "https://docs.delta.io/latest/redshift-spectrum-integration.html", direct: "r^", summary: "r"
    },
    hudi:{
      doc: "https://hudi.apache.org/docs/0.10.0/query_engine_setup#redshift-spectrum", hglue: "r", summary: "r"
    }
  },

  { 
    engine: "Snowflake", 
    iceberg: {
      doc: "https://docs.snowflake.com/en/user-guide/tables-iceberg", direct: "r", glue: "r", snowflake: "rw^", tabular: "r", summary: "rw"
    },
    delta: {
      doc: "https://docs.delta.io/latest/snowflake-integration.html", direct: "r^", summary: "r"
    },
    hudi: {
    }
  },
  { 
    engine: "Spark", 
    iceberg: {
      doc: "https://iceberg.apache.org/spark-quickstart/", dynamo: "rw", hms: "rw", jdbc: "rw", nessie: "rw", biglake: "rw", unity: "r", arctic: "rw", glue: "rw", snowflake: "r", tabular: "rw", summary: "rw"
    },
    delta: {
      doc: "https://docs.delta.io/latest/quick-start.html#set-up-apache-spark-with-delta-lake", direct: "rw", hms: "rw", unity: "rw", glue: "rw", onelake: "rw", summary: "rw"
    },
    hudi: { 
      doc: "https://hudi.apache.org/docs/quick-start-guide/",
      direct: "rw^", hms: "rw", glue: "rw", summary: "rw"
    }

  },
  { 
    engine: "Trino", 
    iceberg: {
      doc: "https://trino.io/docs/current/connector/iceberg.html", dynamo: "rw", hms: "rw", jdbc: "rw", biglake: "rw", unity: "r", arctic: "rw", glue: "rw", snowflake: "r", tabular: "rw", summary: "rw"
    },
    delta: {
      doc: "https://trino.io/docs/current/connector/delta-lake.html", direct: "r", hms: "rw", unity: "rw", glue: "rw", summary: "rw"
    }, 
    hudi: {
      doc: "https://trino.io/docs/current/connector/hudi.html", direct: "r", hms: "r", glue: "r", summary: "r"
    }
    
  },
];

function linkRenderer(params) {
  if (params.value === undefined) return null;
  return <a href={params.value} target="_blank" rel="noopener noreferrer">docs</a>;
}

const engine= [
  { field: "engine", headerName: "", pinned: "left"},
]

const summary= [
  { field: "delta.summary", headerName: "Delta Lake"},
  { field: "hudi.summary", headerName: "Hudi"},
  { field: "iceberg.summary", headerName: "Iceberg"},
]
const iceberg= [
    {field: "iceberg.doc", headerName: "Docs", cellRenderer: linkRenderer},
    {field: "iceberg.direct", headerName: "Direct Read"},
    {field: "Self-managed & OSS", marryChildren: true, children: [
      {field: "iceberg.dynamo", headerName: "DynamoDB", tooltipField:"idynamonotes"},
      {field: "iceberg.hms", headerName: "HMS"},
      {field: "iceberg.jdbc", headerName: "JDBC"},
      {field: "iceberg.nessie", headerName: "Project Nessie"}
    ]},
    {field: "Commercial", marryChildren: true, children: [
      {field: "iceberg.biglake", headerName: "BigLake"},
      {field: "iceberg.unity", headerName: "Unity"},
      {field: "iceberg.arctic", headerName: "Arctic"},
      {field: "iceberg.glue", headerName: "Glue"},
      {field: "iceberg.snowflake", headerName: "Snowflake"},
      {field: "iceberg.tabular", headerName: "Tabular"}
    ]},    
];

const delta= [
    {field: "delta.doc", headerName: "Docs", cellRenderer: linkRenderer},
    {field: "delta.direct", headerName: "Direct Read"},
    {field: "delta.hms", headerName: "HMS"},
    {field: "delta.unity", headerName:"Unity"},
    {field: "delta.glue", headerName: "Glue"},
];

const hudi=[
  {field: "hudi.doc", headerName: "Docs", cellRenderer: linkRenderer},
  {field: "hudi.direct", headerName: "Direct Read"},
  {field: "hudi.hms", headerName: "HMS + ZK"},
  {field: "hudi.glue", headerName: "Glue + ZK"},
]
function onGridReady(params) {
  params.api.sizeColumnsToFit();
}

const gridOptions = {
  headerHeight: 160,
  groupHeaderHeight: 30,
  domLayout: 'autoHeight',
  autoSizeStrategy: {
    type: 'fitCellContents',
  },
}


function grid(format) {
  return (
    <div className="ag-theme-quartz engine-support" >
    <AgGridReact rowData={engineSupportData} columnDefs={engine.concat(format)} gridOptions={gridOptions} onGridReady={onGridReady} defaultColDef={{ sortable: false, cellStyle: {textAlign:'center'} }} />
    <p></p>
    <Alert message="^ = Access is done through metadata translation, synchronization or similar pattern. Often, the supported patterns are fairly limited in these situations." type="info" showIcon />
    </div>    
  );
}

const items = [
  {
    key: '1',
    label: 'Overview',
    children: grid(summary),
  },
  {
    key: '2',
    label: 'Delta Lake Catalogs',
    children: grid(delta),
  },
  {
    key: '3',
    label: 'Hudi Catalogs',
    children: grid(hudi),
  },

  {
    key: '4',
    label: 'Iceberg Catalogs',
    children: grid(iceberg),
  },
];


const EngineSupport = () => {
  return (
    <Tabs defaultActiveKey="1" items={items} />
  )
}

export default EngineSupport;