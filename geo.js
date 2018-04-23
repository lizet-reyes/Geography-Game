Plotly.d3.csv('geo.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

 var data = [{
              type: 'choropleth',
              locationmode: 'USA-states',
              locations: unpack(rows, 'code'),
              z: unpack(rows, 'number'),
              text: unpack(rows, 'state'),
              zmin: 0,
              zmax: 49,
              colorscale: [
                [0, 'rgb(72, 244, 66)'], [0.2, 'rgb(196, 101, 43)'],
                [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
              ],
        colorbar: {

              thickness: 2
          },
            marker: {
              line:{
                color: 'rgb(176,196,222)',
                width: 2
              }
            }
          }];

console.log(data.locations);
  var layout = {

          geo:{
            scope: 'usa',
            showlakes: true,
            lakecolor: 'rgb(176,196,222)'
          }
      };
      Plotly.plot(myDiv, data, layout, {showLink: false});
  });

var button = document.getElementById("submitState");
button.addEventListener("click", () => {
    document.getElementById('solutions').textContent = submitState()
});

function submitState() {
    var US = document.getElementById('U.S.').value;

    if (US = z ){
     changeElementClass("solutions", "correct");
    return US;
}
}
function changeElementClass(id, cssclass) {
    var el = document.getElementById(id);
    el.className = cssclass;
}
