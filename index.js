

module.exports = {

    authy: async (last) => {

        let stuff = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'
        let st = stuff.split('')
        let f = []
        let sf = ''
        for (i = 0; i < 4; i++) {
            sf = ((Math.random() * st.length) + 1)
            sf = Math.round(sf)
            sf = st[sf]
            f.push(sf)
        }
        last = f.join('');
        return last;
        
        
       // const readline = require('readline');

//     function askQuestion(query) {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     return new Promise(resolve => rl.question(query, ans => {
//         rl.close();
//         if(ans === last) return console.log('Verification proccess complete');
//         console.log('Verification proccess is not complete')
//     }))
// }


//     const ans = askQuestion(`Please type this for verification: ${last}\n`);

    
    }
}