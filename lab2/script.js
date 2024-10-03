(function () {
    let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (let i = 0; i < names.length; i++) {
        let firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

    // Додатковий спосіб селекції: кількість голосних в імені
    console.log("\n--- Custom selection based on number of vowels ---\n");

    for (let i = 0; i < names.length; i++) {
        let vowelCount = countVowels(names[i]);

        if (vowelCount >= 3) {
            helloSpeaker.speak(names[i]);
            console.log(`${names[i]}'s vowel count: ${vowelCount} (More vowels)`);
        } else {
            byeSpeaker.speak(names[i]);
            console.log(`${names[i]}'s vowel count: ${vowelCount}`);
        }
    }
    
    function countVowels(name) {
        let vowels = 'aeiou';
        let count = 0;

        for (let i = 0; i < name.length; i++) {
            if (vowels.indexOf(name[i].toLowerCase()) !== -1) count++;
        }

        return count;
    }
})();
