function sba(arr){
    let lo=-1;
    let hi=arr.length;

    //  while(lo+0.1<hi) id decimal point needed
    while(lo+1<hi){
        let mid = Math.floor(lo+(hi-lo)/2);
        if(check(mid)===1){
            hi=mid;
        }else{
            lo=mid
        }
    }

    // print lo or high with some condition

    // if(lo===-1) no 0 exist
    // else print lo

    // if(hi===n) no 1 exist
    // else print hi
}