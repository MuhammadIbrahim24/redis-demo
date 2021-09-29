async function Sets(redis) {

    //create a set
    await redis.sadd('technologies', 'frontend', 'backend', 'integration', 'devops', 'qa');
    let result = await redis.smembers('technologies');
    console.log(result);

    //check if member exists in set
    result = await redis.sismember('technologies', 'implementation');
    console.log(result);

    result = await redis.sismember('technologies', 'integration');
    console.log(result);

    //add sub-category
    await redis.sadd('technologies:backend', 'Java', 'Node.js', 'Python');
    result = await redis.smembers('technologies:backend');
    console.log(result);

    //copy members from one subcategory to another
    await redis.sunionstore('technologies:deployment', 'technologies:backend');
    result = await redis.smembers('technologies:deployment');
    console.log(result);

    //pop element from set
    await redis.spop('technologies:deployment');
    result = await redis.smembers('technologies:deployment');
    console.log(result);

    //get no of elements in set
    result = await redis.scard('technologies');
    console.log(result);
}

export default Sets;