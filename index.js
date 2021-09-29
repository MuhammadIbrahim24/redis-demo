import Redis from 'ioredis';
import Hashes from './hashes';
import Strings from './strings';
import Lists from './lists';
import Sets from './sets';
import SortedSets from './sortedSets';

async function main() {
    const redis = new Redis({"password": "redis"});

    console.log("===Strings===");
    await Strings(redis);

    console.log("===Hashes===");
    await Hashes(redis);

    console.log('===Lists===');
    await Lists(redis);

    console.log('===Sets===');
    await Sets(redis);

    console.log('===Sorted Sets===');
    await SortedSets(redis);
} 

main();