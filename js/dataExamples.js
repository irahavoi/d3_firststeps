/**
 * Created by irahavoi on 7/10/2015.
 */
window.onload = function(){
    console.log('Let\'s load some data...');
    d3.csv("data/cities.csv", function(data){
        d3.select("body").selectAll("div.cities")
            .data(data)//dom elements are automatically binded to the corresponding data item. yay!
            .enter()// enter fires every time when the next data item does not have a corresponding dom element:
            //when there are fewer data items than dom elements, use exit()
            .append("div")
            .attr("class", "cities")
            .html(function(dataItem, i){
                return dataItem.label + ", " + dataItem.population;
            });
        console.log(data)
    });
    d3.json("data/tweets.json", function(data){
        console.log(data);
    });



}
