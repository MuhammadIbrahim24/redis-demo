async function Hashes(redis)  {
    //set hash
    await redis.hmset('user:120', 'name', 'Ali', 'age', '30', 'city', 'Lahore');
    let result = await redis.hgetall('user:120');
    console.log(result);

    //get single field from hash
    result = await redis.hget('user:120', 'name');
    console.log(result);

    //get multiple fields from hash
    result = await redis.hmget('user:120', 'name', 'age')
    console.log(result);

    //increment value of a field
    await redis.hincrby('user:120', 'age', 7);
    result = await redis.hget('user:120', 'age');
    console.log(result);
}

export default Hashes;