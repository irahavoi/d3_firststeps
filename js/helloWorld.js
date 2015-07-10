/**
 * Created by irahavoi on 7/9/2015.
 */
d3.select("#someDiv").style("border", "5px darkgray dashed");
d3.select("#someDiv").attr("id", "newID");
d3.select("#someCheckbox").property("checked", true);
d3.selectAll("svg").style("background", "black");
d3.selectAll(".body").style("fill", "white");

d3.selectAll(".eye")
    .transition()
    .style("fill", "red")
    .delay(1000);

d3.select(".mouth")
    .transition()
    .attr("r", "20")
    .duration(100)
    .delay(2000);

d3.selectAll(".head")
    .transition()
    .attr("cy", "135")
    .duration(100)
    .delay(3000);

d3.selectAll(".head")
    .transition()
    .attr("cx", "250")
    .duration(100)
    .delay(3100);

d3.selectAll(".head")
    .transition()
    .attr("cx", "255")
    .duration(100)
    .delay(3200);

d3.selectAll(".head")
    .transition()
    .attr("cx", "250")
    .duration(100)
    .delay(3300);

d3.selectAll(".eye")
    .transition()
    .attr("cy", "100")
    .duration(300)
    .delay(3100);

d3.selectAll(".eye")
    .transition()
    .attr("cy", "130")
    .duration(300)
    .delay(3400);

d3.select("#newID")
    .transition()
    .style("background", "red")
    .duration(1000)
    .delay(3400);


d3.selectAll(".head")
    .transition()
    .attr("class", "tentative body")
    .duration(500)
    .delay(2000);