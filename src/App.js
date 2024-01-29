/*
 * 2024 Lakehouse Rundown (c) by Jacques Nadeau
 * 
 * 2024 Lakehouse Rundown is licensed under a
 * Creative Commons Attribution-ShareAlike 4.0 International License.
 * 
 * You should have received a copy of the license along with this
 * work. If not, see <http://creativecommons.org/licenses/by-sa/4.0/>. 
 */
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { Card, Space, Flex, Layout } from 'antd';
import EngineSupport from './engines';
import { Tabs } from 'antd';
import License from './license';
import Community from './community';

function linkRenderer(params) {
  if (params.value === undefined) return null;
  return <a href={params.value} target="_blank" rel="noopener noreferrer">Link</a>;
}

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  padding: 20,
  height:100,
};

const contentStyle = {
  minHeight: 120,
  lineHeight: '120px',
  margin: '24px 16px',
};

const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const footerStyle = {
  textAlign: 'center',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  height: '100%',
};

const priorityCols = [
  { field: "Gorilla", headerName: ""},
  { field: "", headerName: "Document Count", children: [
    { field: "Delta Lake"},
    { field: "Hudi"},
    { field: "Iceberg"},

  ]},
  { field: "Horse", headerName: "Implied Preference"},
  { field: "Horse Priority", headerName: "Preference Ratio"},
  { field: "URL", headerName: "Search URL Constraint"},
]

const priorityData = [
  {
    "Gorilla": "AWS Docs",
    "Iceberg": "78,100",
    "Delta Lake": "15,000",
    "Hudi": "12,200",
    "Horse": "Iceberg",
    "Horse Priority": "5.2x",
    "URL": "docs.aws.amazon.com"
  },
  {
    "Gorilla": "Google Cloud",
    "Iceberg": "7,360",
    "Delta Lake": "2,110",
    "Hudi": "2,040",
    "Horse": "Iceberg",
    "Horse Priority": "3.5x",
    "URL": "cloud.google.com"
  },
  {
    "Gorilla": "Azure",
    "Iceberg": "507",
    "Delta Lake": "2,030",
    "Hudi": "3",
    "Horse": "Delta Lake",
    "Horse Priority": "4.0x",
    "URL": "learn.microsoft.com/en-us/azure"
  },
  {
    "Gorilla": "Snowflake",
    "Iceberg": "525",
    "Delta Lake": "202",
    "Hudi": "1",
    "Horse": "Iceberg",
    "Horse Priority": "2.6x",
    "URL": "docs.snowflake.com"
  },
  {
    "Gorilla": "Databricks",
    "Iceberg": "361",
    "Delta Lake": "4,910",
    "Hudi": "3",
    "Horse": "Delta Lake",
    "Horse Priority": "13.6x",
    "URL": "docs.databricks.com"
  }
 ]
 const priorityGridOptions = {
  domLayout: 'autoHeight',
  autoSizeStrategy: {
    type: 'fitCellContents',
  },
}



const App = ({ message }) => (

    <Space direction="vertical" style={{width: '100%', display:'flex'}} >
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Header style={headerStyle}><h1>Lakehouse Format Rundown Backup Data</h1></Header>
          <Content style={contentStyle}>

          <Card title="Introduction" >
            <p>This data forms the basis for the <a href="https://medium.com/@jacques-n/2024-lakehouse-format-rundown-7edd75015428" target="_blank">2024 Lakehouse Format Rundown</a> blog post.</p>
            <p>The content below is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 license</a> within GitHub. Corrections & improvements are welcome.</p>
            <p>Original content was created by the <a href="https://sundeck.io/">Sundeck</a> team in an effort to provide a neutral evaluation to anyone trying to understand what is going on in Lakehouse formats 
            without being distratcted by vendor agendas and obfuscation. We strongly believe in the longterm vision of the fairhouse as described in the blog post linked above.</p>
          </Card>
          <Card title="TL;DR">
          <iframe
            width="315"
            height="560"
            src={`https://www.youtube.com/embed/tBYVaqZ4aQM`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          </Card>

          <Card title="Engine Support Matrix" >
            <p>
              The tables below give an overview of engine support for read and write operations for each table format. The first tab shows a summary of overall support. Subsequent tabs show breakdowns for specific engine/catalog combinations. Information here is (and will always be) a work in progress as tools are constantly changing. If you see a potential improvement, please submit a PR.
            </p>
            <EngineSupport />
          </Card>


          <Card title="Vendor Content Ratio" >
            <p>Numbers below come from manually querying Google constrained to each company's documentation pages and recording the approximate number of results as reported by Google. Analysis was completed approximately in January 2024.</p>
            <div className="ag-theme-quartz" >
              <AgGridReact rowData={priorityData} columnDefs={priorityCols} gridOptions={priorityGridOptions} />
            </div>
          </Card>   

          <Card title="Community Metrics" >
          <p>The analysis below is focused on core code of the project's primary repository. It only includes users who own at least 1% of the code analyzed. Multiple identities may have been manually combined to better represent people. Best effort was made to associate accounts to organizations. In many cases, creation of a project happens in a large B2C and then contributors move out of the organization. In those cases, the work across both time periods are still classified as sponsored due to the fact that the code ownership is the same person, who is now commercially invested in the project.</p>
            <Community />
          </Card>     

          </Content>
          <Footer style={footerStyle}>
            <License />
          </Footer>
        </Layout>
      </Flex>
      

      </Space>
  );




export default App;
