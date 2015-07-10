/**
 * Created by irahavoi on 7/10/2015.
 */
function createSoccerViz() {
    d3.csv("data/worldcup.csv", function(data) {
        overallTeamViz(data);


    });

    function overallTeamViz(incomingData) {
        d3.select("svg")
            .append("g")
            .attr("id", "teamsG")
            .attr("transform", "translate(50,300)")
            .selectAll("g")
            .data(incomingData)
            .enter()
            .append("g")
            .attr("class", "overallG")
            .attr("transform",
            function (d,i) {return "translate(" + (i * 50) + ", 0)"}
        );
        var teamG = d3.selectAll("g.overallG");
        teamG
            .append("circle")
            .attr("r", 20)
            .style("fill", "pink")
            .style("stroke", "black")
            .style("stroke-width", "1px");
        teamG
            .append("text")
            .style("text-anchor", "middle")
            .attr("y", 30)
            .style("font-size", "10px")
            .text(function(d) {return d.team;});


        var dataKeys = d3.keys(incomingData[0]).filter(function(el) {
            return el != "team" && el != "region";
        });
        d3.select("#controls").selectAll("button.teams")
            .data(dataKeys).enter()
            .append("button")
            .on("click", buttonClick)
            .html(function(d) {return d;});

        //Note that d3's event handler accept data associated with the target dom element, not the element itself! use this if you want to access the target element.
        function buttonClick(datapoint) {
            var maxValue = d3.max(incomingData, function(d) {
                return parseFloat(d[datapoint]);
            });
            var radiusScale = d3.scale.linear()
                .domain([ 0, maxValue ]).range([ 2, 20 ]);
            d3.selectAll("g.overallG").select("circle")
                .attr("r", function(d) {
                    return radiusScale(d[datapoint]);
                });
        };
    }


}

