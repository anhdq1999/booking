import React, { useState } from "react";
import Header2 from "../../Layout/Header2";
import Footer from "../../Layout/Footer";
import { Link } from "react-router-dom";
import { TabContent, TabPane } from "reactstrap";
import classnames from "classnames";


function AdminHome(props) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Header2 />

      <div className="listing-details-nav">
        <div className="container">
          <ul className="listing-nav nav justify-content-center">
            <li>
              <Link className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}><i className="la la-home"></i><span>Dash Board</span>
              </Link>
            </li>
            <li>
              <Link className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}><i className="la la-file-text"></i><span>Manager</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>


      <div className="section-full listing-details-content">
        <div className="container">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              This is DashBoard
            </TabPane>
            <TabPane tabId="2">
              <Link data-toggle="modal" to={"/admin/users-manager"} className="site-button"> USER-MANAGER
              </Link>
              <Link data-toggle="modal" to={"/admin/users-manager"} className="site-button"> BLOG-MANAGER
              </Link>
              <Link data-toggle="modal" to={"/admin/users-manager"} className="site-button"> ADS-MANAGER
              </Link>
            </TabPane>
          </TabContent>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminHome;