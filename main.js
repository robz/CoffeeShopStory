(function main() {
    'use strict';
    
    createStoryTeller({
        storyElementID: "storyframe",
        defaultCharacter: "John",
        characters: {
            John: {
                name: "John",
                alias: "some young man",
                known: false,
                stories: [
                    "John holds the door open for #Angela, and then steps into the coffee shop. <br/><br/>He immediately takes note of #Julia reading a book in a comfortable chair near the far wall.",

                    "Pretending to ignore her, he gets in line, takes out his phone, and checks his texts.",

                    "John has received one text from #Steven, sent about a minute ago: <em>running late. be there in 5</em>.<br/><br/>He hears someone ordering a chai latte with a triple shot of espresso. He steps forward in line, looking up briefly to see #Sara walking away from the counter.<br/><br/>Watching the far wall out the corner of his eye, he replies to the text.",

                    '"Soy mocha for %Angela!" shouts #Monica.',

                    "John steps up to the counter ready to order, but he's glued to his phone. He fires another couple texts to #Steven as he waits for #Monica come take his order.",

                    "\"What can I get you?\" The barista startles John. He looks up, but only to glance at her name tag: <em>%Monica.</em><br/><br/>\"Uh--I think I'll just have a coffee, please,\" he responds, and hands her a credit card. \"And you can keep a tab open.\"<br/><br/>He turns, and to his surprise, finds #Julia standing behind him. She looks terrified. \"You poisoned me with a book once,\" she says coldly. \"I'll never forgive you for that.\"<br/><br/>For the first time in a very long time, he smiles."
                ]
            },

            Julia: {
                name: "Julia",
                alias: "the girl",
                known: false,
                stories: [
                    "wat",
                    
                    "Julia looks up from her book, noticing #John walk into the coffee shop. She recongizes him, but can't remember his name, nor remember where she met him. <em>Well, this is awkward.</em> She goes back to her book and tries very hard to ignore him.",
                    
                    "For a moment, Julia concentrates on her book. She's very near the end:<br/><br/>\"You cannot change to me, Dorian,\" said Lord Henry. \"You and I will always be friends.\"<br/><br/>\"Yet you poisoned me with a book once,\" Dorian replied. \"I should not forgive that...\"",
                    
                    '"Soy mocha for %Angela!" shouts #Monica.',
                    
                    "Julia looks over at the man by the counter, then quickly back at her book, avoiding the terrible chance of making eye contact. She then notices someone, a college student from the looks of all the textbooks on her table, talking in her sleep.<br/><br/>Julia snaps the book closed. <em>That's it, this is too weird. I have to go say something to him, whoever he is.</em><br/><br/>\"Chai latte with a triple shot of espresso on the bar!!!\" screams #Monica, out of breath.",
                    
                    "Julia stands up bravely, and walks to the counter. His back facing her, she almost loses her nerve and goes back to her chair. He turns around and sees her just in time. She panics. Without thinking, she blurts out the passage that she had just been reading.<br/><br/>He smiles. All of a sudden, she remembers everything."
                ]
            },

            Angela: {
                name: "Angela",
                alias: "an elderly woman",
                known: false,
                stories: [
                    "wat",
                    
                    "Angela smiles at #John who held the door for her, but he isn't paying any attention to her--he seems to be too distracted by #Julia sitting in the back of the cafe. Angela rolls her eyes and walks to the outdoor seating area.<br/><br/>She passes a table where #Chadwick and #Sammy are playing chess. The man winks at her, sucking at a cigar. She shudders. <em>How dreadful!<em/>",
                    
                    "Pinching her nose to avoid breathing in the smoke, Angela walks to her table under a large umbrella and sits down. She opens a newspaper to the 'I-Saw-You' section, where anonymous people send in short descriptions of strangers that they see, but don't properly meet. Angela absolutely adores this section. Something about knowing people's private thoughts makes the world seem so much more interesting.",
                    
                    "Angela hears #Monica call her name from inside the cafe. <em>That was fast!</em> Just before rising from her table she sees a particularly interesting I-Saw-You post, and pauses to read it:<br><br/>\"I was able to catch the 6 because you held the door. You looked beat, it appeared you were on your way home from work. I was standing against the door, you facing me wearing a nice brown coat. We both reached for the pole and our hands touched. We rode one stop to 42nd (my stop), as I was leaving I sneezed and even though you didn't know me you blessed me and it was wonderful. I hope to find you. -%Sara\"",
                    
                    "<em>How lovely</em>, Angela thinks. <em>How... exquisite!</em> She stares off into space, thinking of youthfulness, and how there always seems to be a tragedy behind all beautiful things.",

                    "Still in a somewhat-sentimental state, Angela gets up from the table and begins walking back into the cafe to pick up her drink, pinching her nose. As she walks past the chess match, the old man is staring at the board in awe, his cigar almost falling from his hand. \"That's checkmate, Mr. Chadwick!\" announces #Sammy sitting across from him."
                ]
            },
            
            Steven: {
                name: "Steven",
                alias: "a friend",
                known: false,
                stories: [
                    "wat",

                    "wat",

                    "wat",

                    "Steven is sitting lethargically on the couch in his apartment. Work seems to take everything out of him these days. His phone vibrates, but he doesn't notice it. His eyes droop. He's supposed to go meet John. He should get up and drive to that coffee shop. He should...<br/><br/>Steven suddenly remembers how comfortable the cushions on his couch are. He leans against them for a moment, and then immediately falls back asleep.",

                    "It's a very strange dream.<br/><br/>Steven is in the coffee shop where he was supposed to meet John. In fact, John is right there! He's standing in line about to order something. Steven's gaze wanders, and he begins to notice something strange about the reflective surfaces around the shop. They... glimmer. He sees a flash of something on a fogged-up window pane.<br/><br/>On impulse, he takes out his phone and tries to turn it on. It won't start.<br/><br/>Suddenly, a beautiful, vaguely familiar woman is peering up at him from the screen. She smiles and says something to him. Asks him a question.<br/><br/>He responds assertively: \"Hello. I'm Steven.\"<br/><br/>Then, as quickly as she had appeared, the woman was gone. Steven's phone vibrates twice.",

                    "Steven wakes up, clutching his phone. He had received three texts from John. He reads the first: <em>she's here.</em><br/><br/>\"Whoa,\" he says to his empty apartment, thinking in his drousy state that this must be some kind of sign. He gets up from the couch, grabs his coat, and rushes for the door, forgetting his phone. Whoever this person was, he had to find her.<br/><br/>Of course, if Steven had looked at the other texts, he probably would have been knocked out of his sleepy, superstitious stupor. The second read: <em>%Julia, i mean. shes here. reading that book i lent her.</em><br/><br/>And the third: <em>steven i dont think she even remembers me</em>"
                ]
            },
            
            Sara: {
                name: "Sara",
                alias: "a very sleep-deprived college student",
                known: false,
                stories: [
                    "wat",
                    
                    "wat",
                    
                    "wat",
                    
                    "Sara walks back to her table noticing every minute detail around her, thinking of each as a novelity. As she sits down she wonders what she'll be doing in 10 years, and then considers the state of the human race for a brief moment. She smiles for no reason at all, and then rests her head on the stack of textbooks crowding her table. She'll just close her eyes for a second, only until her drink is ready...<br/><br/>She falls asleep and begins to dream about the man from the train.",

                    "It's a very strange dream.<br/><br/>Sara is in the coffee shop where she fell asleep, but her body is gone. For some odd reason, she can only see from the perspective of objects that have reflective surfaces. From the shiny cover of a paper-back Picture of Dorian Gray, she spots #John step up to the counter to order something. The foggy window to the outdoor seating area yields a view of an elderly woman staring off into space, deeply engrossed in her own mind. From a plastic chess piece, she watches #Sammy sneak a furtive look underneath the table.<br/><br/>Then, as she swirls around a cup of water from the inside of an ice cube, she sees the man from the train. He's sitting in the chair where she fell asleep, looking perplexed.<br/><br/>As she watches him (upside-down, since she's still inside the ice cube), he takes out his phone and stares at the dark screen. Apparently, it won't turn on.<br/><br/>She moves onto the surface of the phone and stares at him longingly. He jumps. He can see her!<br/><br/>She smiles nervously up at him from his phone and says, \"Hi!\" He just gawks at her. \"Um... my name is Sara! What's yours?\"<br/><br/>There's an awkward pause. Finally, he musters a response: \"Uh. Hi. My name... uh I'm %Steven?\"<br/><br/>\"Chai latte with a triple shot of espresso on the bar!!!\" screams #Monica, out of breath.",
                    
                    "Sara jumps awake, staring wildly around her. Slowly, she relaxes, and gets up to grab her drink. <em>No</em>, she thinks to herself as she takes the chai latte from the bar, <em>That couldn't be his name. It was just a dream.</em><br/><br/>She sighs deeply and goes back to studying."
                ]
            },
            
            Monica: {
                name: "Monica",
                alias: "one of the baristas",
                known: false,
                stories: [
                    "wat",

                    "wat",

                    "wat",
                    
                    "wat",
                    
                    "<em>Poor kids</em>, thinks Monica. <em>Always working so hard, for so little.</em> She whips up #Sara's requested poison and then calls it out, returning to the counter to take the next customer's order.",
                    
                    "The next person to order is #John, fumbling with his phone.<br/><br/>\"What can I get you?\"<br/><br/>\"Uh--I think I'll just have a coffee, thanks\" he responds, and hands her a credit card. \"And you can keep a tab open.\"<br/><br/>As Monica takes the his card, she looks at his first name: %John. She writes it onto a piece of paper to keep track of his tab, then turns around to fill a cup of coffee for him."
                ]
            },
            
            Chadwick: {
                name: "Chadwick",
                alias: "old man",
                known: false,
                stories: [
                    "wat",

                    "wat",

                    "Chadwick TODO 1",
                    
                    "Chadwick TODO 2",
                    
                    "Chadwick TODO 3",
                    
                    "Chadwick TODO 4"
                ]
            },
            
            Sammy: {
                name: "Sammy",
                alias: "a young boy",
                known: false,
                stories: [
                    "wat",

                    "wat",

                    "wat",
                    
                    "Sammy TODO 1",
                    
                    "Sammy TODO 2",
                    
                    "Sammy TODO 3"
                ]
            }
        }
    });
}());