async function SortedSets(redis) {
    //create a sorted set
    await redis.zadd('students', 25, 'Ali', 32, 'Ahmed', 20, 'Abbas', 45, 'Waqas');

    let result = await redis.zrangebyscore('students', '-inf', 2000, 'withscores');
    console.log(result);
}

export default SortedSets;