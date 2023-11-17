import "./App.scss";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Workspace from "./components/pages/Workspace/Workspace";
import Tiles from "./components/pages/Tiles/Tiles";
import Report from "./components/pages/Report/Report";
import { getAllReports, isTokenExpired, login } from "./utils";

const Dashboard = () => <h1>Dashboard</h1>;
const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;

function App( ) {
  const [inactive, setInactive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedWorkspace, setSelWorkspace] = useState(
    "6cceba03-8d48-4e74-a924-fd93b2b03656"
  );
  const [allReportsData, setAllReportsData] = useState([]);
  const [selId, setSelId] = useState(-1);

  if (isTokenExpired()) {
    login();
  }

  useEffect(() => {
    let ans = getAllReports(selectedWorkspace).then((data) => {
      setAllReportsData([data?.value]);
      return data;
    });

  }, [selectedWorkspace]);

  console.log("from app workspace", allReportsData)
  return (
    // <MsalProvider instance={msalInstance}>
      <div className="App">
        <Router>
          <SideMenu
            onCollapse={(inactive) => {
              console.log(inactive);
              setInactive(inactive);
            }}
            handleToggle={(isChecked) => {
              setIsChecked(!isChecked);
            }}
            workspaceId={selectedWorkspace}
            allReportsData={allReportsData}
          />

          <div
            className={`container ${inactive ? "inactive" : ""}`}
            style={{ backgroundColor: `${isChecked ? "#f4f9f4" : "#666"}` }}
          >
            {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
          
            <Route
              exact={true}
              path="/"
              component={(props) => (
                <Workspace
                  handleSelectedWorkspace={(workspace, selId) => {
                    setSelWorkspace(workspace, selId);
                    setSelId(selId);
                  }}
                  selId={selId}
                />
              )}
            />
            <Route exact={true} path="/dashboard" component={Dashboard} />
            {allReportsData && (
            <>
            <Route exact={true} path="/report/*" component={(props) => (
                <Report
                 {...props}
                 allReportsData={allReportsData}
                 inactive={inactive}
                />
              )} />
            <Route exact={true} path="/report" component={(props) => (
                <Report
                 {...props}
                 allReportsData={allReportsData}
                 inactive={inactive}
                />
              )}  />
            </>
            )}
            
            <Route exact={true} path="/tiles" component={Tiles} />

            {/* {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to} component={menu.name}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))} */}

            {/* <Switch>
            <Route exact path={"/"}>
              <Dashboard />
            </Route>
            <Route exact path={"/content"}>
              <Content />
            </Route>
            <Route path={"/content/courses"}>
              <Courses />
            </Route>
            <Route path={"/content/videos"}>
              <Videos />
            </Route>
            <Route path={"/design"}>
              <Design />
            </Route>
            <Route exact path={"/content-2"}>
              <Content2 />
            </Route>
            <Route path={"/content-2/courses"}>
              <Courses2 />
            </Route>
            <Route path={"/content-2/videos"}>
              <Videos2 />
            </Route>
            <Route path={"/design-2"}>
              <Design2 />
            </Route>
          </Switch> */}
          </div>
        </Router>
      </div>
    // </MsalProvider>
  );
}

export default App;
