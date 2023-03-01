var insert = function(intervals, newInterval) {
let n = intervals.length;
    let ans = []
    for (let i = 0; i < n; i++) {
        let interval = intervals[i];
        if (newInterval[1] < interval[0]) {
            ans.push(newInterval);

            for (let j = i; j < n; j++) {
                ans.push(intervals[j]);
            }
            return ans;
        }
        
        else if (newInterval[0] > interval[1]) {
            ans.push(interval);
        }
        else {
            newInterval[0] = Math.min(interval[0], newInterval[0]);
            newInterval[1] = Math.max(interval[1], newInterval[1]);
        }
    }
    ans.push(newInterval);
    return ans;
}