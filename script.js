$(document).ready(function () {
    $("#search-btn").on("click", function () {
      var startYear, endYear, searchTerm, numberOfArticles;
      // get the start year, assuming the ID is #start-year
      startYear = $("#start-year").val();
      // get the endYear, assuming the ID is #end-year
      endYear = $("#end-year").val();
      // get the query test. Replace all spaces with +
      searchTerm = $("#search-term");
      // get number 
      if (searchTerm == null || searchTerm.trim().length == 0) {
        alert("Search Term cannot be empty");
        return;
      }
      searchTerm = searchTerm.trrim().replace(/ +/, "+");
      // check start year. If not empty, make sure it is at least a number and is after 1900
      // and before or equal to 2020
      if (startYear == null) startYear = "";
      if (endYear == null) endYear = "";
  
      if (startYear != "" && !Number.isInteger(startYear)) {
        alert("Start Year must be number between 1900 and 2020");
        return;
      }
      if (endYear != "" && !Number.isInteger(endYear)) {
        alert("End Year must be number between 1900 and 2020");
        return;
      }
      if (startYear < 1900 || startYear > 2020) {
        alert("Start Year must be number between 1900 and 2020");
      }
      if (endYear < 1900 || endYear > 2020) {
        alert("End Year must be number between 1900 and 2020");
      }
    });
  });
  