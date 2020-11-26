import React from 'react';
import Layout from '@theme/Layout';
import siteList from './siteList.js';
import './siteList.css'
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

const data = siteList;

function renderTableHeader() {
  let header = Object.keys(data[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}

function Td({ children, to }) {
  // Conditionally wrapping content into a link
  const ContentTag = to ? Link : 'div';

  return (
    <td>
      <ContentTag to={to}>{children}</ContentTag>
    </td>
  );
}

function renderTableData() {
  return data.map((data, index) => {
     const { id, websiteName, outcomeUrl, ip, flavor, openPorts, os, infrastructure, provisioning, containerEngine } = data //destructuring
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{websiteName}</td>
           <Td to={outcomeUrl}>{outcomeUrl}</Td>
           <td>{ip}</td>
           <td>{flavor}</td>
           <td>{openPorts}</td>
           <td>{os}</td>
           <td>{infrastructure}</td>
           <td>{provisioning}</td>
           <td>{containerEngine}</td>           
        </tr>
     )
  })
}

// function proxyDocumentation() {
  
//   return (
//     <div>
//       <h1 id='title'>Production Websites</h1>
//       <table id='glasswall'>
//           <tbody>
//             <tr>
//               {renderTableHeader()}
//             </tr>
//             {renderTableData()}
//           </tbody>
//       </table>
//     </div>
//   );
// }
function proxyDocumentation() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout

      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <Ticker mode="smoth" height = "100">
        {({ index }) => (
            <>
                <h4>PRODUCT LAUNCH: Rebuild API, a cloud-hosted service that allows organisations to safely and securely import files and documents. FIND OUT MORE.</h4>
            </>
        )}
      </Ticker> */}
      <main>
        <div>
          <h1 id='title'>Production Websites</h1>
          <table id='glasswall'>
              <tbody>
                <tr>
                  {renderTableHeader()}
                </tr>
                {renderTableData()}
              </tbody>
          </table>
        </div>
      </main>
    </Layout>
    );
}

export default proxyDocumentation;