/**
 * Created by irahavoi on 7/10/2015.
 */
window.onload = function(){
    console.log('Let\'s load some data...');
    d3.csv("data/cities.csv", function(data){
        console.log(data)
    });
    d3.json("data/tweets.json", function(data){
        console.log(data);
    });

    console.log('D3 Sorting capabilities:');
    var nums = [5, 88, 3, 25, 26, 99, 1, 0, 200];

    var min = d3.min(nums, function (el) {
        return el;
    });
    var max = d3.max(nums, function (el) {
        return el;
    });
    var mean = d3.mean(nums, function (el) {
        return el;
    });

    console.log('Min: ' + min);
    console.log('Max: ' + max);
    console.log('Mean: ' + mean);

}
