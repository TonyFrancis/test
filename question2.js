let requests = [
    {requestId: 'poiax',  startedAt: 1489744808, ttl: 8},
    {requestId: 'kdfhd',  startedAt: 1489744803, ttl: 3},
    {requestId: 'uqwyet', startedAt: 1489744806, ttl: 12},
    {requestId: 'qewaz',  startedAt: 1489744810, ttl: 1}
]

// Finding Starting Point.
const minStartTime = Math.min.apply(null, requests.map(request => request.startedAt));
// Finding Ending Point.
const maxEndTime = Math.max.apply(null, requests.map(request => request.startedAt + request.ttl));

/*
 cumulativeTtl is difference between MaxEndPoint and minStartTime.
*/
const cumulativeTtl = maxEndTime - minStartTime;
console.log(cumulativeTtl);
