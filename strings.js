async function Strings(redis) {
    //set key value with expiry
    await redis.set('name', 'mibrahim', 'EX', 5);
    let result = await redis.get('name')
    console.log(result);

    //set key value
    await redis.set('age', 40);

    //increment value by 5
    await redis.incrby('age', 5);
    result = await redis.get('age')
    console.log(result);

    //set multiple keys
    await redis.mset('address', 400, 'city', 'Karachi');

    //get multiple keys
    result = await redis.mget('address', 'city');
    console.log(result);
}

export default Strings;