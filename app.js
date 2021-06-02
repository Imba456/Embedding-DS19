console.log("hello from DS19 in the console as well");

let viz;

// to do list, select container, set options, specify URL

const vizContainer = document.getElementById("vizContainer");
const vizUrl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
const vizOptions = {
  device: "desktop",
};

function initViz() {
  viz = new tableau.Viz(vizContainer, vizUrl, vizOptions);
}

document.addEventListener("DOMContentLoaded", initViz);

//Export pdf Button
//Button element in your html
//Link the button to the JS
//create the tableau function
//add a listener to carry out the function when clicking the button

const exportPdf = document.getElementById("exportPdf");
function loadPdf() {
  viz.showExportPDFDialog();
  console.log("PDF export window loaded");
}
exportPdf.addEventListener("click", loadPdf);

//Export PPT
const exportPpt = document.getElementById("exportPpt");
function loadPpt() {
  viz.showExportPowerPointDialog();
  console.log("PPT export window loaded");
}
exportPpt.addEventListener("click", loadPpt);
