const { SHA3 } = require('sha3');

exports.handler = async function (event, context) {
    try {
        const body = JSON.parse(event["body"]);
        const rows = body.data;
        const output = new Map();

        const ptrs = [];
        const hashedPtrMap = new Map();

        for(let i=0; i<rows.length; i++) {
            const row = rows[i];
            const ptr = String(row[1]);
            ptrs.push(ptr);

            const hash = new SHA3(256);
            hash.update(ptr);
            hashedPtrMap.set(hash.digest('base64url'), row);
            output.set(row[0], false);
        }

        const token = await getToken();
        const results = await list(ptrs, token);

        for(let i=0; i<results.length; i++){
            const result = results[i];
            const hashedPtr = result.ptr.replace("=","");
            const row = hashedPtrMap.get(hashedPtr)
            if(row != null){
                output.set(row[0], true)
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                data: [...output]
            })
        };
    } catch (error) {
        return {
            status: 200
        }
    }
};

async function getToken(){
    const url = 'https://mytiki.com/api/authorize?grant_type=client_credentials&scope=index&client_id=de4c3c64-e5d9-4b72-bcd7-a0bac2b3e9ab&client_secret=NECkbvZLfDJL1Z3NoPHnxABBOb0utlOqGGpDrgqzXBM';
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    const rsp = await fetch(url, options);
    const json = await rsp.json();
    return json.access_token;
}

async function list(ptrs, token){
    const url = 'https://mytiki.com/api/license/list?maxResults=100';
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ptrs: ptrs })
    };

    const rsp = await fetch(url, options);
    const json = await rsp.json();
    return json.results;
}
