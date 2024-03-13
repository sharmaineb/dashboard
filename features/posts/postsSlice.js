import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
    {
        id: '1',
        title: 'Saltburn',
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: '2',
        title: 'Barbie',
        content: "Beautiful.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
    },
    {
        id: '3',
        title: 'The Matrix',
        content: "Mind-blowing action and concept.",
        date: sub(new Date(), { hours: 1 }).toISOString(),
    },
    {
        id: '4',
        title: 'Pulp Fiction',
        content: "Classic masterpiece with unforgettable dialogues.",
        date: sub(new Date(), { days: 1 }).toISOString(),
    },
    {
        id: '5',
        title: 'The Shawshank Redemption',
        content: "Absolutely stunning storytelling.",
        date: sub(new Date(), { days: 2 }).toISOString(),
    },
    {
        id: '6',
        title: 'Inception',
        content: "Mind-bending visuals and plot twists.",
        date: sub(new Date(), { days: 3 }).toISOString(),
    },
    {
        id: '7',
        title: 'The Godfather',
        content: "A cinematic masterpiece.",
        date: sub(new Date(), { days: 4 }).toISOString(),
    },
    {
        id: '8',
        title: 'Interstellar',
        content: "Stunning visuals, great soundtrack, intriguing story.",
        date: sub(new Date(), { days: 5 }).toISOString(),
    },
    {
        id: '9',
        title: 'If Beale Street Could Talk',
        content: "Director Barry Jenkins delivers a poignant and visually stunning adaptation of James Baldwin's novel, 'If Beale Street Could Talk,' weaving together themes of love, injustice, and resilience with masterful storytelling and breathtaking cinematography.",
        date: sub(new Date(), { days: 6 }).toISOString(),
    },
    {
        id: '10',
        title: '10 Things I Hate About You',
        content: "Classic rom-com with a Shakespearean twist.",
        date: sub(new Date(), { days: 7 }).toISOString(),
    },
    {
        id: '11',
        title: 'How to Lose a Guy in 10 Days',
        content: "A romantic comedy about a magazine writer who tries to lose a guy in 10 days as an assignment, but ends up falling for him.",
        date: sub(new Date(), { days: 9 }).toISOString(),
    },
    {
        id: '12',
        title: 'The Princess Diaries',
        content: "A charming coming-of-age story about a teenager who discovers she's a princess and must learn to navigate royal life.",
        date: sub(new Date(), { days: 10 }).toISOString(),
    },
    {
        id: '13',
        title: 'Get Out',
        content: "A gripping horror thriller that explores race relations in America through a unique and chilling story.",
        date: sub(new Date(), { days: 11 }).toISOString(),
    },
    {
        id: '14',
        title: 'Minari',
        content: "A touching drama about a Korean immigrant family trying to achieve the American Dream by starting a farm in rural Arkansas.",
        date: sub(new Date(), { days: 12 }).toISOString(),
    },
    {
        id: '15',
        title: 'Four Sisters and a Wedding',
        content: "A heartwarming Filipino family comedy about four sisters who reunite for their youngest brother's wedding.",
        date: sub(new Date(), { days: 13 }).toISOString(),
    },
    {
        id: '16',
        title: 'The Apartment',
        content: "A romantic comedy-drama about a man who lends his apartment to his bosses for their extramarital affairs, only to fall in love with the elevator operator.",
        date: sub(new Date(), { days: 8 }).toISOString(),
    },
    {
        id: '17',
        title: 'Before Sunrise',
        content: "A romantic drama about two strangers who meet on a train in Europe and spend an unforgettable night together exploring Vienna.",
        date: sub(new Date(), { days: 14 }).toISOString(),
    },
    {
        id: '18',
        title: 'In the Mood for Love',
        content: "A visually stunning romantic drama set in 1960s Hong Kong, where two neighbors form a deep bond after suspecting their spouses of infidelity.",
        date: sub(new Date(), { days: 15 }).toISOString(),
    },
    {
        id: '19',
        title: "She's the Man",
        content: "A hilarious romantic comedy about a girl who disguises herself as her twin brother to play on the boys' soccer team.",
        date: sub(new Date(), { days: 16 }).toISOString(),
    },
    {
        id: '20',
        title: 'Parasite',
        content: "A thriller about class struggle and family dynamics, directed by Bong Joon-ho.",
        date: sub(new Date(), { days: 17 }).toISOString(),
    },
    {
        id: '21',
        title: 'Past Lives',
        content: "Been crying for three days now.",
        date: sub(new Date(), { days: 15 }).toISOString(),
    },
    {
        id: '22',
        title: 'The Princess Bride',
        content: "A timeless fantasy adventure filled with romance, humor, and unforgettable characters.",
        date: sub(new Date(), { days: 16 }).toISOString(),
    },
    {
        id: '23',
        title: 'Pirates of the Caribbean',
        content: "An epic swashbuckling journey with Captain Jack Sparrow and his crew, filled with action, humor, and supernatural elements.",
        date: sub(new Date(), { days: 17 }).toISOString(),
    },
    {
        id: '24',
        title: 'The Truman Show',
        content: "A thought-provoking satire exploring the nature of reality and the media's influence on society.",
        date: sub(new Date(), { days: 18 }).toISOString(),
    },
    {
        id: '25',
        title: 'Everything Everywhere All at Once',
        content: "A mind-bending journey through multiple dimensions, blending action, comedy, and existential drama.",
        date: sub(new Date(), { days: 19 }).toISOString(),
    },
    {
        id: '26',
        title: 'Punch-Drunk Love',
        content: "A quirky romantic comedy-drama featuring Adam Sandler in a refreshingly different role, exploring themes of love, loneliness, and redemption.",
        date: sub(new Date(), { days: 20 }).toISOString(),
    },
    {
        id: '27',
        title: 'Amélie',
        content: "A charming French film following the whimsical adventures of a shy waitress as she spreads joy and love in Paris.",
        date: sub(new Date(), { days: 21 }).toISOString(),
    },
    {
        id: '28',
        title: 'Moonlight',
        content: "An emotionally resonant drama exploring identity, sexuality, and the human experience through the life of a young black man in Miami.",
        date: sub(new Date(), { days: 22 }).toISOString(),
    },
    {
        id: '29',
        title: 'Rust and Bone',
        content: "A powerful drama depicting the transformative journey of two individuals navigating love, loss, and personal redemption.",
        date: sub(new Date(), { days: 23 }).toISOString(),
    },
    {
        id: '30',
        title: 'The Holiday',
        content: "A heartwarming romantic comedy about two women who exchange homes for the holidays and find unexpected love and adventure.",
        date: sub(new Date(), { days: 24 }).toISOString(),
    },
    {
        id: '31',
        title: 'When Harry Met Sally',
        content: "A classic romantic comedy exploring the complexities of friendship and love over the years.",
        date: sub(new Date(), { days: 25 }).toISOString(),
    },
    {
        id: '32',
        title: 'Spirited Away',
        content: "An enchanting animated masterpiece from Studio Ghibli, filled with magic, adventure, and heartwarming themes.",
        date: sub(new Date(), { days: 26 }).toISOString(),
    },
    {
        id: '33',
        title: 'Eternal Sunshine of the Spotless Mind',
        content: "A unique and thought-provoking romantic sci-fi film exploring love, memory, and the complexities of human relationships.",
        date: sub(new Date(), { days: 27 }).toISOString(),
    },
    {
        id: '34',
        title: 'Step Up',
        content: "A dynamic dance film showcasing impressive choreography and featuring themes of passion, determination, and self-expression.",
        date: sub(new Date(), { days: 28 }).toISOString(),
    },
    {
        id: '35',
        title: 'Yi Yi',
        content: "A beautifully crafted Taiwanese drama offering a poignant and insightful exploration of family, life, and existentialism.",
        date: sub(new Date(), { days: 29 }).toISOString(),
    },
    {
        id: '36',
        title: 'RRR',
        content: "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
        date: sub(new Date(), { days: 30 }).toISOString(),
    },
    {
        id: '37',
        title: 'Portrait of a Lady on Fire',
        content: "A visually stunning and emotionally resonant French historical drama exploring love, desire, and the constraints of society.",
        date: sub(new Date(), { days: 31 }).toISOString(),
    },
    {
        id: '38',
        title: 'Notting Hill',
        content: "A charming romantic comedy about the unlikely love story between a bookstore owner and a famous actress in the vibrant neighborhood of Notting Hill, London.",
        date: sub(new Date(), { days: 32 }).toISOString(),
    },
    {
        id: '39',
        title: 'A.I. Artificial Intelligence',
        content: "A thought-provoking sci-fi drama exploring themes of humanity, artificial intelligence, and the quest for love and acceptance.",
        date: sub(new Date(), { days: 33 }).toISOString(),
    },
    {
        id: '40',
        title: 'Your Name',
        content: "A breathtaking anime film that weaves together romance, fantasy, and drama in a captivating story of love transcending time and space.",
        date: sub(new Date(), { days: 34 }).toISOString(),
    },
    {
        id: '41',
        title: 'Castle in the Sky',
        content: "A magical adventure from Studio Ghibli featuring stunning animation, memorable characters, and a captivating tale of friendship and courage.",
        date: sub(new Date(), { days: 35 }).toISOString(),
    },
    {
        id: '42',
        title: 'Spider-Man: Into the Spider-Verse',
        content: "After being bitten by a radioactive spider, Brooklyn teen Miles Morales gains spider-like powers, becoming Spider-Man. Upon encountering Peter Parker, Miles learns he's not alone, as multiple Spider-People join forces to stop the villainous Kingpin from wreaking havoc across dimensions.",
        date: sub(new Date(), { days: 36 }).toISOString(),
    },
    {
        id: '43',
        title: 'Do the Right Thing',
        content: "Spike Lee's powerful film explores racial tensions in a Brooklyn neighborhood on the hottest day of the summer.",
        date: sub(new Date(), { days: 14 }).toISOString(),
    },
    {
        id: '44',
        title: 'Blindspotting',
        content: "A thought-provoking drama that examines race, class, and gentrification in modern-day Oakland.",
        date: sub(new Date(), { days: 15 }).toISOString(),
    },
    {
        id: '45',
        title: 'Hidden Figures',
        content: "The inspiring true story of three African-American female mathematicians who played crucial roles at NASA during the Space Race.",
        date: sub(new Date(), { days: 16 }).toISOString(),
    },
    {
        id: '46',
        title: 'Creed',
        content: "A spin-off from the Rocky film series, Creed follows Adonis Johnson, the son of Apollo Creed, as he trains to become a professional boxer under Rocky Balboa's guidance.",
        date: sub(new Date(), { days: 17 }).toISOString(),
    },
    {
        id: '47',
        title: 'Fight Club',
        content: "An edgy and thought-provoking film about disillusionment and societal norms, starring Edward Norton and Brad Pitt.",
        date: sub(new Date(), { days: 18 }).toISOString(),
    },
    {
        id: '48',
        title: 'Little Women',
        content: "A timeless adaptation of Louisa May Alcott's classic novel, exploring the lives and struggles of the March sisters during the Civil War era.",
        date: sub(new Date(), { days: 19 }).toISOString(),
    },
    {
        id: '49',
        title: 'Lady Bird',
        content: "A heartfelt coming-of-age story about a teenage girl navigating friendships, family, and her future dreams in Sacramento, California.",
        date: sub(new Date(), { days: 20 }).toISOString(),
    },
    {
        id: '50',
        title: 'Pride & Prejudice',
        content: "A beautiful adaptation of Jane Austen's classic novel, showcasing the romance between Elizabeth Bennet and Mr. Darcy in 19th century England.",
        date: sub(new Date(), { days: 21 }).toISOString(),
    },
    {
        id: '51',
        title: 'Fantastic Mr. Fox',
        content: "Wes Anderson's delightful stop-motion animation film based on Roald Dahl's beloved children's book, featuring the adventures of a clever fox.",
        date: sub(new Date(), { days: 22 }).toISOString(),
    },
    {
        id: '52',
        title: "Howl's Moving Castle",
        content: "A magical and enchanting animated film directed by Hayao Miyazaki, following the journey of a young woman transformed into an old lady and her encounters with a mysterious wizard.",
        date: sub(new Date(), { days: 23 }).toISOString(),
    },
    {
        id: '53',
        title: 'Scott Pilgrim vs. the World',
        content: "An action-packed and visually stunning film about a slacker musician who must defeat his girlfriend's seven evil exes in order to win her heart.",
        date: sub(new Date(), { days: 24 }).toISOString(),
    },
    {
        id: '54',
        title: 'Scream',
        content: "A classic horror film that satirizes the genre while delivering thrills and suspense, directed by Wes Craven.",
        date: sub(new Date(), { days: 25 }).toISOString(),
    },
    {
        id: '55',
        title: 'The Empire Strikes Back',
        content: "The iconic sequel to Star Wars, continuing the epic saga as the Rebel Alliance faces off against the evil Galactic Empire.",
        date: sub(new Date(), { days: 26 }).toISOString(),
    },
    {
        id: '56',
        title: 'Aftersun',
        content: "Sophie fondly recalls a holiday with her father Calum at a fading resort, reflecting on their bond as she grapples with her evolving understanding of him beyond fatherhood. Through her recollections, Sophie navigates the complexities of their relationship, seeking to reconcile her memories of the man she knew with the realities of his life.",
        date: sub(new Date(), { days: 27 }).toISOString(),
    },
    {
        id: '57',
        title: 'Arrival',
        content: "A captivating sci-fi film that explores language, communication, and the nature of time when mysterious extraterrestrial spacecraft arrive on Earth.",
        date: sub(new Date(), { days: 28 }).toISOString(),
    },
    {
        id: '58',
        title: 'Gone Girl',
        content: "A gripping psychological thriller based on the novel by Gillian Flynn, revolving around the mysterious disappearance of a woman and the media frenzy that follows.",
        date: sub(new Date(), { days: 29 }).toISOString(),
    },
    {
        id: '59',
        title: 'Blade Runner',
        content: "Ridley Scott's visually stunning sci-fi noir film set in a dystopian future, exploring themes of identity, humanity, and artificial intelligence.",
        date: sub(new Date(), { days: 30 }).toISOString(),
    },
    {
        id: '60',
        title: 'Mamma Mia!',
        content: "A joyful musical featuring the music of ABBA, set on a Greek island and centered around a bride-to-be trying to discover the identity of her father.",
        date: sub(new Date(), { days: 31 }).toISOString(),
    },
    {
        id: '61',
        title: 'La Haine',
        content: "A gritty French drama following three friends from immigrant families as they navigate life in the impoverished suburbs of Paris.",
        date: sub(new Date(), { days: 32 }).toISOString(),
    },
    {
        id: '62',
        title: 'Princess Mononoke',
        content: "A breathtaking animated epic from Studio Ghibli, exploring the conflict between industrialization and nature in a fantastical world.",
        date: sub(new Date(), { days: 33 }).toISOString(),
    },
    {
        id: '63',
        title: 'Jurassic Park',
        content: "Steven Spielberg's groundbreaking adventure film about a theme park populated by genetically engineered dinosaurs, based on Michael Crichton's novel.",
        date: sub(new Date(), { days: 34 }).toISOString(),
    },
    {
        id: '64',
        title: 'Godzilla',
        content: "A thrilling monster film featuring the iconic giant lizard, Godzilla, wreaking havoc on Tokyo as humanity struggles to survive.",
        date: sub(new Date(), { days: 35 }).toISOString(),
    },
    {
        id: '65',
        title: 'City of God',
        content: "A Brazilian crime drama that chronicles the lives of residents in the favelas of Rio de Janeiro, focusing on two young men on diverging paths.",
        date: sub(new Date(), { days: 36 }).toISOString(),
    },
    {
        id: '66',
        title: 'Titanic',
        content: "James Cameron's epic romance and disaster film about the ill-fated maiden voyage of the RMS Titanic, starring Leonardo DiCaprio and Kate Winslet.",
        date: sub(new Date(), { days: 37 }).toISOString(),
    },
    {
        id: '67',
        title: 'Mad Max: Fury Road',
        content: "In a post-apocalyptic wasteland, the tyrant Immortan Joe enslaves survivors in the Citadel. Imperator Furiosa leads Joe's wives in a daring escape, teaming up with loner Max Rockatansky. Together, they embark on a high-speed chase through the Wasteland, pursued by Joe and his henchmen.",
        date: sub(new Date(), { days: 38 }).toISOString(),
    },
    {
        id: '68',
        title: 'Baby Driver',
        content: "Baby, who has a love for music, is the expert getaway driver for heist planner Doc. Using carefully curated soundtracks, Baby helps Doc's crew, including Buddy and Darling, execute their bank robberies smoothly. However, Baby dreams of leaving the criminal life behind after one final job to be with diner waitress Debora, but the path to freedom proves to be fraught with challenges.",
        date: sub(new Date(), { days: 39 }).toISOString(),

    },
    {
        id: '69',
        title: 'The Wolf of Wall Street',
        content: "Martin Scorsese's dark comedy biopic about the rise and fall of Jordan Belfort, a wealthy stockbroker convicted of fraud and corruption.",
        date: sub(new Date(), { days: 40 }).toISOString(),
    },
    {
        id: '70',
        title: 'The Princess and the Frog',
        content: "Disney's charming animated musical retelling of the classic fairy tale set in New Orleans, featuring a hardworking waitress turned frog and a handsome prince.",
        date: sub(new Date(), { days: 41 }).toISOString(),
    },
    {
        id: '71',
        title: 'Mulan',
        content: "Disney's animated adventure about a young Chinese woman who disguises herself as a man to take her father's place in the army and defend her country from invaders.",
        date: sub(new Date(), { days: 42 }).toISOString(), 
    },
    {
        id: '72',
        title: 'Raya and the Last Dragon',
        content: "A visually stunning animated fantasy film set in the fictional kingdom of Kumandra, following a young warrior on a quest to find the last dragon and save her world.",
        date: sub(new Date(), { days: 43 }).toISOString(),
    },
    {
        id: '73',
        title: 'The Holdovers',
        content: "A thought-provoking drama directed by Alexander Payne, exploring themes of nostalgia, regret, and the passage of time through the lens of a group of old friends reuniting after many years.",
        date: sub(new Date(), { days: 45 }).toISOString(),
    },
    {
        id: '74',
        title: 'Society of the Snow',
        content: "In 1972, a Uruguayan flight crashes in the remote heart of the Andes, forcing survivors to become each other's best hope.",
        date: sub(new Date(), { days: 46 }).toISOString(),
    },
    
               
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                    }
                }
            }
        },
    }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;