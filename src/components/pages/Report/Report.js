import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { reportsDataDummy } from "../../../datasets/reports";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import "../../../App.scss";
const Report = (props) => {
  const {
    name,
    subMenus,
    iconClassName,
    onClick,
    to,
    exact,
    allReportsData,
    inactive,
  } = props;
  const [expand, setExpand] = useState(false);
  const [selReport, setSelectedReport] = useState(allReportsData?.[0]);
  let test = allReportsData?.[0]?.find((item) => {
    console.log("items", item);
    // return item.name === props.location.pathname.replace("/report/", "").replace("%20"," ")
  });

  console.log("test reports", allReportsData);
  useEffect(() => {
    // allReportsData
  }, [allReportsData]);
  let selectedReport =
    test == null
      ? allReportsData?.[0]
      : allReportsData?.find(
          (item) =>
            item.name === props.location.pathname.replace("/report/", "")
        );
  console.log(
    "props report",
    selectedReport,
    props.location.pathname.replace("/report/", "")
  );
  // setSelectedReport(selectedReport);
  useEffect(() => {
    //   let selectedReport = test == null
    //   ? reportsDataDummy?.value[0]
    //   : allReportsData?.find(
    //       (item) => item.name === props.location.pathname.replace("/report/", "")
    //     );
    // console.log(
    //   "props report",
    //   selectedReport,
    //   props.location.pathname.replace("/report/", "")
    // );
    //   setSelectedReport(selectedReport);
    let test2 = allReportsData[0].find(
      (item) =>
        item?.name ===
        props.location.pathname.replace("/report/", "").replace("%20", " ")
    );

    setSelectedReport(test2)

    console.log(
      "check from useEffect",
      allReportsData?.[0]?.find(
        (item) =>
          item?.name ===
          props.location.pathname.replace("/report/", "").replace("%20", " ")
      ),
      props.location.pathname
    );
  }, [props.location.pathname]);

  useEffect(() => {
    console.log("check updated", selReport);
  }, [inactive]);
  return (
    <>
      <h1>{selReport?.name}</h1>
      {selReport?.id && (
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: selReport?.id,
            embedUrl: selReport?.embedUrl,
            accessToken: `${sessionStorage.getItem("embed_token")}`,
            tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event.detail);
                },
              ],
              ["visualClicked", () => console.log("visual clicked")],
              ["pageChanged", (event) => console.log(event)],
            ])
          }
          cssClassName={"embed-container"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      )}
    </>
  );
};

export default Report;
