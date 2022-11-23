//  stdin    .question(query, callback)    .close()

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let ans = [];

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer)  => {
  ans.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    ans.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      ans.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        ans.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          ans.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            ans.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              ans.push(answer);
    
              console.log(`Thank you for your valuable feedback: My name is ${ans[0]}, and I like to listen to ${ans[2]} when I'm ${ans[1]}. My favourite is ${ans[4]} for ${ans[3]}. My favourite sport is ${ans[5]}. I think my superpower is ${ans[6]}. Thank you!`);
    
              rl.close();
            });
          });
        });
      });
    });
  });
});


