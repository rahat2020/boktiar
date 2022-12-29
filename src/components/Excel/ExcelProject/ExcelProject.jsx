import React from 'react';
import { Link } from 'react-router-dom';
import './ExcelProject.css';

const ExcelProject = () => {
  return (
    <div className='container mt-5'>
      <h2 className="text-center skill-title">❏ Here is my Excel projects ❏</h2>
      <div className="excel_project">
        <iframe width="1050" height="550" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=19D0DB0D32BF1867%21133&authkey=%21AMg1LRaV2vkA37A&em=2&wdAllowInteractivity=False&AllowTyping=True&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&edrtees6=false&resen=false"></iframe>
      </div>
      <div className="excel_project mt-5">
        <iframe width="1050" height="550" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=19D0DB0D32BF1867%21137&authkey=%21ANbyf_7r51zzlx4&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&edrtees6=false&resen=false"></iframe>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Link to='/viewExcelALl'>
          <button className="i-btn">View All</button>
        </Link>
      </div>
    </div>
  )
}

export default ExcelProject