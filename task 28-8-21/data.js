const arr = [
    {
        guardianId: "2",
        modeOfContactId: "2",
        dateTimeOfContact: "3",
    },
    {
        guardianId: "1",
        modeOfContactId: "3",
        dateTimeOfContact: "4",
    },
    {
        guardianId: "5",
        modeOfContactId: "6",
        dateTimeOfContact: "3",
    },
    {
        guardianId: "5",
        modeOfContactId: "6",
        dateTimeOfContact: "3",
    },
];


const findDuplicates = (arr = []) => {
    let map = {};
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (map[arr[i]]) {
            if (map[arr[i]] === 1) {
                res.push(arr[i]);
                // console.log(map[i]);
            }
            map[arr[i]] = map[arr[i]] + 1;
            // console.log(map[arr[i]]);
        } else {
            map[arr[i]] = 1;
            // console.log(map[arr[i]]);
        };
    };
    return res;
};
console.log(findDuplicates(arr));


