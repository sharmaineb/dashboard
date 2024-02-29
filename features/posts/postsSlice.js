import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
    {
        id: '1',
        title: 'Saltburn',
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 7,
            wow: 5,
            heart: 6,
            thumbsDown: 2,
            coffee: 8
        }
    },
    {
        id: '2',
        title: 'Barbie',
        content: "Beautiful.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 0,
            wow: 3,
            heart: 7,
            thumbsDown: 0,
            coffee: 4
        }
    },
    {
        id: '3',
        title: 'The Matrix',
        content: "Mind-blowing action and concept.",
        date: sub(new Date(), { hours: 1 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 10,
            wow: 5,
            heart: 8,
            thumbsDown: 2,
            coffee: 0
        }
    },
    {
        id: '4',
        title: 'Pulp Fiction',
        content: "Classic masterpiece with unforgettable dialogues.",
        date: sub(new Date(), { days: 1 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 15,
            wow: 7,
            heart: 12,
            thumbsDown: 1,
            coffee: 5
        }
    },
    {
        id: '5',
        title: 'The Shawshank Redemption',
        content: "Absolutely stunning storytelling.",
        date: sub(new Date(), { days: 2 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 20,
            wow: 10,
            heart: 18,
            thumbsDown: 0,
            coffee: 0
        }
    },
    {
        id: '6',
        title: 'Inception',
        content: "Mind-bending visuals and plot twists.",
        date: sub(new Date(), { days: 3 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 25,
            wow: 15,
            heart: 22,
            thumbsDown: 3,
            coffee: 1
        }
    },
    {
        id: '7',
        title: 'The Godfather',
        content: "A cinematic masterpiece.",
        date: sub(new Date(), { days: 4 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 30,
            wow: 20,
            heart: 25,
            thumbsDown: 2,
            coffee: 0
        }
    },
    {
        id: '8',
        title: 'Interstellar',
        content: "Stunning visuals, great soundtrack, intriguing story.",
        date: sub(new Date(), { days: 5 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 25,
            wow: 18,
            heart: 20,
            thumbsDown: 1,
            coffee: 6
        }
    },
    {
        id: '9',
        title: 'If Beale Street Could Talk',
        content: "Director Barry Jenkins delivers a poignant and visually stunning adaptation of James Baldwin's novel, 'If Beale Street Could Talk,' weaving together themes of love, injustice, and resilience with masterful storytelling and breathtaking cinematography.",
        date: sub(new Date(), { days: 6 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 28,
            wow: 15,
            heart: 26,
            thumbsDown: 0,
            coffee: 5
        }
    },
    {
        id: '10',
        title: '10 Things I Hate About You',
        content: "Classic rom-com with a Shakespearean twist.",
        date: sub(new Date(), { days: 7 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 35,
            wow: 22,
            heart: 30,
            thumbsDown: 3,
            coffee: 4
        }
    },
    {
        id: '11',
        title: 'How to Lose a Guy in 10 Days',
        content: "A romantic comedy about a magazine writer who tries to lose a guy in 10 days as an assignment, but ends up falling for him.",
        date: sub(new Date(), { days: 9 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 38,
            wow: 20,
            heart: 30,
            thumbsDown: 1,
            coffee: 0
        }
    },
    {
        id: '12',
        title: 'The Princess Diaries',
        content: "A charming coming-of-age story about a teenager who discovers she's a princess and must learn to navigate royal life.",
        date: sub(new Date(), { days: 10 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 42,
            wow: 28,
            heart: 35,
            thumbsDown: 2,
            coffee: 0
        }
    },
    {
        id: '13',
        title: 'Get Out',
        content: "A gripping horror thriller that explores race relations in America through a unique and chilling story.",
        date: sub(new Date(), { days: 11 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 45,
            wow: 30,
            heart: 40,
            thumbsDown: 3,
            coffee: 3
        }
    },
    {
        id: '14',
        title: 'Minari',
        content: "A touching drama about a Korean immigrant family trying to achieve the American Dream by starting a farm in rural Arkansas.",
        date: sub(new Date(), { days: 12 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 48,
            wow: 35,
            heart: 45,
            thumbsDown: 2,
            coffee: 3
        }
    },
    {
        id: '15',
        title: 'Four Sisters and a Wedding',
        content: "A heartwarming Filipino family comedy about four sisters who reunite for their youngest brother's wedding.",
        date: sub(new Date(), { days: 13 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 50,
            wow: 40,
            heart: 50,
            thumbsDown: 2,
            coffee: 2
        }
    },
    {
        id: '16',
        title: 'The Apartment',
        content: "A romantic comedy-drama about a man who lends his apartment to his bosses for their extramarital affairs, only to fall in love with the elevator operator.",
        date: sub(new Date(), { days: 8 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 50,
            wow: 35,
            heart: 45,
            thumbsDown: 4,
            coffee: 3
        }
    },
    {
        id: '17',
        title: 'Before Sunrise',
        content: "A romantic drama about two strangers who meet on a train in Europe and spend an unforgettable night together exploring Vienna.",
        date: sub(new Date(), { days: 14 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 40,
            wow: 30,
            heart: 35,
            thumbsDown: 2,
            coffee: 3
        }
    },
    {
        id: '18',
        title: 'In the Mood for Love',
        content: "A visually stunning romantic drama set in 1960s Hong Kong, where two neighbors form a deep bond after suspecting their spouses of infidelity.",
        date: sub(new Date(), { days: 15 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 45,
            wow: 40,
            heart: 40,
            thumbsDown: 3,
            coffee: 7
        }
    },
    {
        id: '19',
        title: "She's the Man",
        content: "A hilarious romantic comedy about a girl who disguises herself as her twin brother to play on the boys' soccer team.",
        date: sub(new Date(), { days: 16 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 50,
            wow: 35,
            heart: 45,
            thumbsDown: 1,
            coffee: 1
        }
    },
    {
        id: '20',
        title: 'Parasite',
        content: "A thriller about class struggle and family dynamics, directed by Bong Joon-ho.",
        date: sub(new Date(), { days: 17 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 55,
            wow: 50,
            heart: 45,
            thumbsDown: 3,
            coffee: 0
        }
    },
    {
        id: '21',
        title: 'Past Lives',
        content: "Been crying for three days now.",
        date: sub(new Date(), { days: 15 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 12,
            wow: 7,
            heart: 10,
            thumbsDown: 1,
            coffee: 10
        }
    },
    {
        id: '22',
        title: 'The Princess Bride',
        content: "A timeless fantasy adventure filled with romance, humor, and unforgettable characters.",
        date: sub(new Date(), { days: 16 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 15,
            wow: 10,
            heart: 12,
            thumbsDown: 2,
            coffee: 0
        }
    },
    {
        id: '23',
        title: 'Pirates of the Caribbean',
        content: "An epic swashbuckling journey with Captain Jack Sparrow and his crew, filled with action, humor, and supernatural elements.",
        date: sub(new Date(), { days: 17 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 18,
            wow: 12,
            heart: 15,
            thumbsDown: 3,
            coffee: 0
        }
    },
    {
        id: '24',
        title: 'The Truman Show',
        content: "A thought-provoking satire exploring the nature of reality and the media's influence on society.",
        date: sub(new Date(), { days: 18 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 20,
            wow: 15,
            heart: 18,
            thumbsDown: 4,
            coffee: 0
        }
    },
    {
        id: '25',
        title: 'Everything Everywhere All at Once',
        content: "A mind-bending journey through multiple dimensions, blending action, comedy, and existential drama.",
        date: sub(new Date(), { days: 19 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 22,
            wow: 18,
            heart: 20,
            thumbsDown: 5,
            coffee: 4
        }
    },
    {
        id: '26',
        title: 'Punch-Drunk Love',
        content: "A quirky romantic comedy-drama featuring Adam Sandler in a refreshingly different role, exploring themes of love, loneliness, and redemption.",
        date: sub(new Date(), { days: 20 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 25,
            wow: 20,
            heart: 22,
            thumbsDown: 6,
            coffee: 9
        }
    },
    {
        id: '27',
        title: 'Amélie',
        content: "A charming French film following the whimsical adventures of a shy waitress as she spreads joy and love in Paris.",
        date: sub(new Date(), { days: 21 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 28,
            wow: 22,
            heart: 25,
            thumbsDown: 7,
            coffee: 0
        }
    },
    {
        id: '28',
        title: 'Moonlight',
        content: "An emotionally resonant drama exploring identity, sexuality, and the human experience through the life of a young black man in Miami.",
        date: sub(new Date(), { days: 22 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 30,
            wow: 25,
            heart: 28,
            thumbsDown: 0,
            coffee: 5
        }
    },
    {
        id: '29',
        title: 'Rust and Bone',
        content: "A powerful drama depicting the transformative journey of two individuals navigating love, loss, and personal redemption.",
        date: sub(new Date(), { days: 23 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 32,
            wow: 28,
            heart: 30,
            thumbsDown: 9,
            coffee: 2
        }
    },
    {
        id: '30',
        title: 'The Holiday',
        content: "A heartwarming romantic comedy about two women who exchange homes for the holidays and find unexpected love and adventure.",
        date: sub(new Date(), { days: 24 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 35,
            wow: 30,
            heart: 32,
            thumbsDown: 10,
            coffee: 3
        }
    },
    {
        id: '31',
        title: 'When Harry Met Sally',
        content: "A classic romantic comedy exploring the complexities of friendship and love over the years.",
        date: sub(new Date(), { days: 25 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 38,
            wow: 35,
            heart: 40,
            thumbsDown: 11,
            coffee: 0
        }
    },
    {
        id: '32',
        title: 'Spirited Away',
        content: "An enchanting animated masterpiece from Studio Ghibli, filled with magic, adventure, and heartwarming themes.",
        date: sub(new Date(), { days: 26 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 40,
            wow: 38,
            heart: 42,
            thumbsDown: 12,
            coffee: 0
        }
    },
    {
        id: '33',
        title: 'Eternal Sunshine of the Spotless Mind',
        content: "A unique and thought-provoking romantic sci-fi film exploring love, memory, and the complexities of human relationships.",
        date: sub(new Date(), { days: 27 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 45,
            wow: 40,
            heart: 48,
            thumbsDown: 13,
            coffee: 0
        }
    },
    {
        id: '34',
        title: 'Step Up',
        content: "A dynamic dance film showcasing impressive choreography and featuring themes of passion, determination, and self-expression.",
        date: sub(new Date(), { days: 28 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 50,
            wow: 42,
            heart: 50,
            thumbsDown: 14,
            coffee: 0
        }
    },
    {
        id: '35',
        title: 'Yi Yi',
        content: "A beautifully crafted Taiwanese drama offering a poignant and insightful exploration of family, life, and existentialism.",
        date: sub(new Date(), { days: 29 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 48,
            wow: 45,
            heart: 48,
            thumbsDown: 0,
            coffee: 0
        }
    },
    {
        id: '36',
        title: 'RRR',
        content: "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
        date: sub(new Date(), { days: 30 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 50,
            wow: 48,
            heart: 50,
            thumbsDown: 0,
            coffee: 8
        }
    },
    {
        id: '37',
        title: 'Portrait of a Lady on Fire',
        content: "A visually stunning and emotionally resonant French historical drama exploring love, desire, and the constraints of society.",
        date: sub(new Date(), { days: 31 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 48,
            wow: 45,
            heart: 48,
            thumbsDown: 0,
            coffee: 6
        }
    },
    {
        id: '38',
        title: 'Notting Hill',
        content: "A charming romantic comedy about the unlikely love story between a bookstore owner and a famous actress in the vibrant neighborhood of Notting Hill, London.",
        date: sub(new Date(), { days: 32 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 45,
            wow: 42,
            heart: 45,
            thumbsDown: 18,
            coffee: 2
        }
    },
    {
        id: '39',
        title: 'A.I. Artificial Intelligence',
        content: "A thought-provoking sci-fi drama exploring themes of humanity, artificial intelligence, and the quest for love and acceptance.",
        date: sub(new Date(), { days: 33 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 42,
            wow: 40,
            heart: 42,
            thumbsDown: 19,
            coffee: 1
        }
    },
    {
        id: '40',
        title: 'Your Name',
        content: "A breathtaking anime film that weaves together romance, fantasy, and drama in a captivating story of love transcending time and space.",
        date: sub(new Date(), { days: 34 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 40,
            wow: 38,
            heart: 40,
            thumbsDown: 20,
            coffee: 6
        }
    },
    {
        id: '41',
        title: 'Castle in the Sky',
        content: "A magical adventure from Studio Ghibli featuring stunning animation, memorable characters, and a captivating tale of friendship and courage.",
        date: sub(new Date(), { days: 35 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 38,
            wow: 35,
            heart: 38,
            thumbsDown: 21,
            coffee: 2
        }
    },
    {
        id: '42',
        title: 'Spider-Man: Into the Spider-Verse',
        content: "After being bitten by a radioactive spider, Brooklyn teen Miles Morales gains spider-like powers, becoming Spider-Man. Upon encountering Peter Parker, Miles learns he's not alone, as multiple Spider-People join forces to stop the villainous Kingpin from wreaking havoc across dimensions.",
        date: sub(new Date(), { days: 36 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 40,
            wow: 38,
            heart: 40,
            thumbsDown: 0,
            coffee: 4
        }
    },
    {
        id: '43',
        title: 'Do the Right Thing',
        content: "Spike Lee's powerful film explores racial tensions in a Brooklyn neighborhood on the hottest day of the summer.",
        date: sub(new Date(), { days: 14 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 55,
            wow: 30,
            heart: 40,
            thumbsDown: 3,
            coffee: 0
        }
    },
    {
        id: '44',
        title: 'Blindspotting',
        content: "A thought-provoking drama that examines race, class, and gentrification in modern-day Oakland.",
        date: sub(new Date(), { days: 15 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 58,
            wow: 35,
            heart: 42,
            thumbsDown: 2,
            coffee: 10
        }
    },
    {
        id: '45',
        title: 'Hidden Figures',
        content: "The inspiring true story of three African-American female mathematicians who played crucial roles at NASA during the Space Race.",
        date: sub(new Date(), { days: 16 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 60,
            wow: 40,
            heart: 45,
            thumbsDown: 2,
            coffee: 21
        }
    },
    {
        id: '46',
        title: 'Creed',
        content: "A spin-off from the Rocky film series, Creed follows Adonis Johnson, the son of Apollo Creed, as he trains to become a professional boxer under Rocky Balboa's guidance.",
        date: sub(new Date(), { days: 17 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 62,
            wow: 42,
            heart: 48,
            thumbsDown: 3,
            coffee: 9
        }
    },
    {
        id: '47',
        title: 'Fight Club',
        content: "An edgy and thought-provoking film about disillusionment and societal norms, starring Edward Norton and Brad Pitt.",
        date: sub(new Date(), { days: 18 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 65,
            wow: 45,
            heart: 50,
            thumbsDown: 4,
            coffee: 0
        }
    },
    {
        id: '48',
        title: 'Little Women',
        content: "A timeless adaptation of Louisa May Alcott's classic novel, exploring the lives and struggles of the March sisters during the Civil War era.",
        date: sub(new Date(), { days: 19 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 68,
            wow: 50,
            heart: 55,
            thumbsDown: 3,
            coffee: 8
        }
    },
    {
        id: '49',
        title: 'Lady Bird',
        content: "A heartfelt coming-of-age story about a teenage girl navigating friendships, family, and her future dreams in Sacramento, California.",
        date: sub(new Date(), { days: 20 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 70,
            wow: 52,
            heart: 58,
            thumbsDown: 2,
            coffee: 0
        }
    },
    {
        id: '50',
        title: 'Pride & Prejudice',
        content: "A beautiful adaptation of Jane Austen's classic novel, showcasing the romance between Elizabeth Bennet and Mr. Darcy in 19th century England.",
        date: sub(new Date(), { days: 21 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 72,
            wow: 55,
            heart: 60,
            thumbsDown: 4,
            coffee: 0
        }
    },
    {
        id: '51',
        title: 'Fantastic Mr. Fox',
        content: "Wes Anderson's delightful stop-motion animation film based on Roald Dahl's beloved children's book, featuring the adventures of a clever fox.",
        date: sub(new Date(), { days: 22 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 75,
            wow: 58,
            heart: 62,
            thumbsDown: 3,
            coffee: 0
        }
    },
    {
        id: '52',
        title: "Howl's Moving Castle",
        content: "A magical and enchanting animated film directed by Hayao Miyazaki, following the journey of a young woman transformed into an old lady and her encounters with a mysterious wizard.",
        date: sub(new Date(), { days: 23 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 78,
            wow: 60,
            heart: 65,
            thumbsDown: 2,
            coffee: 1
        }
    },
    {
        id: '53',
        title: 'Scott Pilgrim vs. the World',
        content: "An action-packed and visually stunning film about a slacker musician who must defeat his girlfriend's seven evil exes in order to win her heart.",
        date: sub(new Date(), { days: 24 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 80,
            wow: 62,
            heart: 68,
            thumbsDown: 3,
            coffee: 1
        }
    },
    {
        id: '54',
        title: 'Scream',
        content: "A classic horror film that satirizes the genre while delivering thrills and suspense, directed by Wes Craven.",
        date: sub(new Date(), { days: 25 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 82,
            wow: 65,
            heart: 70,
            thumbsDown: 2,
            coffee: 2
        }
    },
    {
        id: '55',
        title: 'The Empire Strikes Back',
        content: "The iconic sequel to Star Wars, continuing the epic saga as the Rebel Alliance faces off against the evil Galactic Empire.",
        date: sub(new Date(), { days: 26 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 85,
            wow: 68,
            heart: 72,
            thumbsDown: 3,
            coffee: 20
        }
    },
    {
        id: '56',
        title: 'Aftersun',
        content: "Sophie fondly recalls a holiday with her father Calum at a fading resort, reflecting on their bond as she grapples with her evolving understanding of him beyond fatherhood. Through her recollections, Sophie navigates the complexities of their relationship, seeking to reconcile her memories of the man she knew with the realities of his life.",
        date: sub(new Date(), { days: 27 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 88,
            wow: 70,
            heart: 75,
            thumbsDown: 2,
            coffee: 20
        }
    },
    {
        id: '57',
        title: 'Arrival',
        content: "A captivating sci-fi film that explores language, communication, and the nature of time when mysterious extraterrestrial spacecraft arrive on Earth.",
        date: sub(new Date(), { days: 28 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 90,
            wow: 72,
            heart: 78,
            thumbsDown: 3,
            coffee: 10
        }
    },
    {
        id: '58',
        title: 'Gone Girl',
        content: "A gripping psychological thriller based on the novel by Gillian Flynn, revolving around the mysterious disappearance of a woman and the media frenzy that follows.",
        date: sub(new Date(), { days: 29 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 92,
            wow: 75,
            heart: 80,
            thumbsDown: 2,
            coffee: 10
        }
    },
    {
        id: '59',
        title: 'Blade Runner',
        content: "Ridley Scott's visually stunning sci-fi noir film set in a dystopian future, exploring themes of identity, humanity, and artificial intelligence.",
        date: sub(new Date(), { days: 30 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 95,
            wow: 78,
            heart: 82,
            thumbsDown: 3,
            coffee: 9
        }
    },
    {
        id: '60',
        title: 'Mamma Mia!',
        content: "A joyful musical featuring the music of ABBA, set on a Greek island and centered around a bride-to-be trying to discover the identity of her father.",
        date: sub(new Date(), { days: 31 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 98,
            wow: 80,
            heart: 85,
            thumbsDown: 2,
            coffee: 8
        }
    },
    {
        id: '61',
        title: 'La Haine',
        content: "A gritty French drama following three friends from immigrant families as they navigate life in the impoverished suburbs of Paris.",
        date: sub(new Date(), { days: 32 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 100,
            wow: 82,
            heart: 88,
            thumbsDown: 3,
            coffee: 2
        }
    },
    {
        id: '62',
        title: 'Princess Mononoke',
        content: "A breathtaking animated epic from Studio Ghibli, exploring the conflict between industrialization and nature in a fantastical world.",
        date: sub(new Date(), { days: 33 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 102,
            wow: 85,
            heart: 90,
            thumbsDown: 2,
            coffee: 7
        }
    },
    {
        id: '63',
        title: 'Jurassic Park',
        content: "Steven Spielberg's groundbreaking adventure film about a theme park populated by genetically engineered dinosaurs, based on Michael Crichton's novel.",
        date: sub(new Date(), { days: 34 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 105,
            wow: 88,
            heart: 92,
            thumbsDown: 3,
            coffee: 3
        }
    },
    {
        id: '64',
        title: 'Godzilla',
        content: "A thrilling monster film featuring the iconic giant lizard, Godzilla, wreaking havoc on Tokyo as humanity struggles to survive.",
        date: sub(new Date(), { days: 35 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 108,
            wow: 90,
            heart: 95,
            thumbsDown: 2,
            coffee: 6
        }
    },
    {
        id: '65',
        title: 'City of God',
        content: "A Brazilian crime drama that chronicles the lives of residents in the favelas of Rio de Janeiro, focusing on two young men on diverging paths.",
        date: sub(new Date(), { days: 36 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 110,
            wow: 92,
            heart: 98,
            thumbsDown: 3,
            coffee: 2
        }
    },
    {
        id: '66',
        title: 'Titanic',
        content: "James Cameron's epic romance and disaster film about the ill-fated maiden voyage of the RMS Titanic, starring Leonardo DiCaprio and Kate Winslet.",
        date: sub(new Date(), { days: 37 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 112,
            wow: 95,
            heart: 100,
            thumbsDown: 2,
            coffee: 6
        }
    },
    {
        id: '67',
        title: 'Mad Max: Fury Road',
        content: "In a post-apocalyptic wasteland, the tyrant Immortan Joe enslaves survivors in the Citadel. Imperator Furiosa leads Joe's wives in a daring escape, teaming up with loner Max Rockatansky. Together, they embark on a high-speed chase through the Wasteland, pursued by Joe and his henchmen.",
        date: sub(new Date(), { days: 38 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 115,
            wow: 98,
            heart: 102,
            thumbsDown: 3,
            coffee: 5
        }
    },
    {
        id: '68',
        title: 'Baby Driver',
        content: "Baby, who has a love for music, is the expert getaway driver for heist planner Doc. Using carefully curated soundtracks, Baby helps Doc's crew, including Buddy and Darling, execute their bank robberies smoothly. However, Baby dreams of leaving the criminal life behind after one final job to be with diner waitress Debora, but the path to freedom proves to be fraught with challenges.",
        date: sub(new Date(), { days: 39 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 118,
            wow: 100,
            heart: 105,
            thumbsDown: 2,
            coffee: 10
        }
    },
    {
        id: '69',
        title: 'The Wolf of Wall Street',
        content: "Martin Scorsese's dark comedy biopic about the rise and fall of Jordan Belfort, a wealthy stockbroker convicted of fraud and corruption.",
        date: sub(new Date(), { days: 40 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 120,
            wow: 102,
            heart: 108,
            thumbsDown: 3,
            coffee: 10
        }
    },
    {
        id: '70',
        title: 'The Princess and the Frog',
        content: "Disney's charming animated musical retelling of the classic fairy tale set in New Orleans, featuring a hardworking waitress turned frog and a handsome prince.",
        date: sub(new Date(), { days: 41 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 122,
            wow: 105,
            heart: 110,
            thumbsDown: 2,
            coffee: 30
        }
    },
    {
        id: '71',
        title: 'Mulan',
        content: "Disney's animated adventure about a young Chinese woman who disguises herself as a man to take her father's place in the army and defend her country from invaders.",
        date: sub(new Date(), { days: 42 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 125,
            wow: 108,
            heart: 112,
            thumbsDown: 3,
            coffee: 30
        }
    },
    {
        id: '72',
        title: 'Raya and the Last Dragon',
        content: "A visually stunning animated fantasy film set in the fictional kingdom of Kumandra, following a young warrior on a quest to find the last dragon and save her world.",
        date: sub(new Date(), { days: 43 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 128,
            wow: 110,
            heart: 115,
            thumbsDown: 2,
            coffee: 20
        }
    },
    {
        id: '73',
        title: 'The Holdovers',
        content: "A thought-provoking drama directed by Alexander Payne, exploring themes of nostalgia, regret, and the passage of time through the lens of a group of old friends reuniting after many years.",
        date: sub(new Date(), { days: 45 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 132,
            wow: 115,
            heart: 120,
            thumbsDown: 2,
            coffee: 10
        }
    },
    {
        id: '74',
        title: 'Society of the Snow',
        content: "In 1972, a Uruguayan flight crashes in the remote heart of the Andes, forcing survivors to become each other's best hope.",
        date: sub(new Date(), { days: 46 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 46,
            wow: 57,
            heart: 62,
            thumbsDown: 2,
            coffee: 10
        }
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
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            thumbsDown: 0,
                            coffee: 2
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;