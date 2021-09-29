async function Lists(redis) {

    //vcreate list
    await redis.rpush('fruits', 'apple', 'banana', 'grapes', 'melon', "peach");
    //get list
    let result = await redis.lrange('fruits', 0, -1);
    console.log(result);

    //add members in list
    await redis.rpush('fruits', 'guava', 'strawberry');
    result = await redis.lrange('fruits', 0, -1);
    console.log(result);

    //add members to the left of list
    await redis.lpush('fruits', 'orange', 'pear');
    result = await redis.lrange('fruits', 0, -1);
    console.log(result);

    //pop member from left side of list
    await redis.lpop('fruits');
    result = await redis.lrange('fruits', 0, -1);
    console.log(result);

    //pop member from right side of list
    await redis.rpop('fruits');
    result = await redis.lrange('fruits', 0, -1);
    console.log(result);

    //trim list
    await redis.ltrim('fruits', 0, 2);
    result = await redis.lrange('fruits', 0, -1);
    console.log(result);
}

export default Lists;