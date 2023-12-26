//import { bookid } from "../Front-end/admin/admin.js"
export let bookscard = JSON.parse(localStorage.getItem("books"));
if (!bookscard) {
  bookscard = [
    {
      id: 1,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/07/9781421597133-768x1152.jpg",
      altImage: "The Promised Neverland 2",
      categori: "E-Manga",
      BookName: "The Promised Neverland 2",
      desc: "The children of the Grace Field House orphanage have their happy lives upended when they find out they’re being raised to be fed to demons. Can they escape their fate before it’s too late?",
      author: "Kaiu Shirai",
      publisher: "Simon & Schuster UK",
      SKU: 9781421597133,
      priceCents: 48000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 2,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/06/9781974710027.jpg",
      altImage: "Jujutsu Kaisen, Vol. 1",
      categori: "E-Manga",
      BookName: "Jujutsu Kaisen, Vol. 1",
      desc: "Although Yuji Itadori looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Research Club. One day, the club manages to get their hands on a sealed cursed object. Little do they know the terror they’ll unleash when they break the seal",
      author: "Gege Akutami",
      publisher: "VIZ Media",
      SKU: 9781974710027,
      priceCents: 48000,
      inStock: 5,
      sold: 0,
    },
    {
      id: 3,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/06/9781974713325.jpg",
      altImage: "Naruto: Sasuke’s Story – Star",
      categori: "E-Manga",
      BookName: "Naruto: Sasuke’s Story – Star",
      desc: "A new series of prose novels, straight from the worldwide Naruto franchise. Naruto’s allies and enemies take center stage in these fast-paced adventures, with each volume focusing on a particular clan mate, ally, team…or villain.",
      author: "Jun Esaka",
      publisher: "Simon & Schuster UK",
      SKU: 9781974713325,
      priceCents: 48000,
      inStock: 5,
      sold: 0,
    },
    {
      id: 4,
      image:
        "https://diwanegypt.com/wp-content/uploads/2021/10/9781974714698.jpg",
      altImage: "Persona 5, Vol. 3",
      categori: "E-Manga",
      BookName: "Persona 5, Vol. 3",
      desc: "After successfully changing Kamoshida’s heart, Akira and his friends decide to continue operating as the Phantom Thieves. Not long after, they meet famous Japanese artist Ichiryusai Madarame and his student Yusuke Kitagawa. The Phantom Thieves hear rumors that Madarame might be up to some shady stuff. Ann accepts Yusuke’s request to model for him in the hopes that she can get some information out of him, but Yusuke refuses to hear it! Will the Phantom Thieves be able to expose Madarame’s crimes? And what is the startling truth about Yusuke’s past?",
      author: "Hisato Murasaki",
      publisher: "VIZ LLC",
      SKU: 9781974714698,
      priceCents: 48000,
      inStock: 5,
      sold: 0,
    },
    {
      id: 5,
      image:
        "https://diwanegypt.com/wp-content/uploads/2021/01/9780099523994.jpg",
      altImage: "Persepolis I and II",
      categori: "E-Manga",
      BookName: "Persepolis I and II",
      desc: "Marjane Satrapi’s Persepolis is an exemplary autobiographical graphic novel, in the tradition of Art Spiegelman’s classic Maus. Set in Iran during the Islamic Revolution, it follows the young Satrapi, six-year-old daughter of two committed and well-to-do Marxists. As she grows up, she witnesses first-hand the effects that the revolution and the war with Iraq have on her home, family and school.",
      author: "Marjane Satrapi",
      publisher: "Random House UK",
      SKU: 9780099523994,
      priceCents: 66000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 6,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/05/9780593356098-scaled.jpg",
      altImage: "Lore Olympus",
      categori: "E-Graphic Novels &Comics",
      BookName: "Lore Olympus",
      desc: "All of Olympus—and the Underworld—are talking about the God of the Dead and the sprightly daughter of Demeter. But despite the rumors of their romance, Hades and Persephone have plenty to navigate on their own.",
      author: "Rachel Smythe",
      publisher: "Penguin Random House USA",
      SKU: 9780593356098,
      priceCents: 105000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 7,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/07/9781481438261.jpg",
      altImage: "Long Way Down",
      categori: "E-Graphic Novels &Comics",
      BookName: "Long Way Down",
      desc: "Or, you can call it a gun. That’s what fifteen-year-old Will has shoved in the back waistband of his jeans. See, his brother Shawn was just murdered. And Will knows the rules. No crying. No snitching. Revenge. That’s where Will’s now heading, with that gun shoved in the back waistband of his jeans, the gun that was his brother’s gun. He gets on the elevator, seventh floor, stoked. He knows who he’s after. Or does he?",
      author: "Jason Reynolds",
      publisher: "Simon & Schuster Usa",
      SKU: 9781481438261,
      priceCents: 65000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 8,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/03/9781779507242.jpg",
      altImage: "Justice League Unlimited 1",
      categori: "E-Graphic Novels &Comics",
      BookName: "Justice League Unlimited 1",
      desc: "The Justice League has the best-of-the-best heroes trained for the top of their game–together they can tackle an evil that comes into their world. In this thrilling collection, our heroes jet off into the future where they team up with the Legion of Super-Heroes to try to defeat Kilgore! But the future problems have seeds that were planted in the past. Will the Flash be fast enough to return to his own era and stop his Justice League teammates from dooming the world?",
      author: "Various",
      publisher: "Random House US",
      SKU: 9781779507242,
      priceCents: 55000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 9,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/03/9781779502421.jpg",
      altImage: "Year of the Villain 1",
      categori: "E-Graphic Novels &Comics",
      BookName: "Year of the Villain 1",
      desc: "DC’s “Year of the Villain” leaps into its final phase as the ultimate battle between Lex Luthor and the Batman Who Laughs rages! On one side are the super-powered “Apex” Lex’s forces of injustice-Captain Cold, Oracle, Solomon Grundy, Black Manta, and Lobo-and on the other are the Batman Who Laughs’ Infected, corrupted versions of heroes Supergirl, Shazam, Blue Beetle, Donna Troy, Hawkman, and Commissioner Gordon! But where does The Joker fit in? It’s a final showdown between two of DC’s most iconic villains, all to curry the favor of Perpetua. Whoever wins will take over the Multiverse alongside her! Collects Year of the Villain: Hell Arisen #1-4, plus DC’s Year of the Villain #1 and more!",
      author: "James Tynion IV",
      publisher: "Random House US",
      SKU: 9781779502421,
      priceCents: 85000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 10,
      image:
        "https://diwanegypt.com/wp-content/uploads/2020/09/9781529105100-1-scaled.jpg",
      altImage: "Boy, The Mole, The Fox and The Hourse",
      categori: "E-Graphic Novels &Comics",
      BookName: "Boy, The Mole, The Fox and The Hourse",
      desc: "(2019) The Sunday Times Bestseller and New York Times Bestseller. A book of hope for uncertain times. ‘Feeling a little blue? Meet the new Winnie the Pooh.’ The Daily Mail ‘A wonderful work of art and a wonderful window into the human heart’ Richard Curtis Enter the world of Charlie’s four unlikely friends, discover their story and their most important life lessons. The conversations of the boy, the mole, the fox and the horse have been shared thousands of times online, recreated in school art classes, hung on hospital walls and turned into tattoos. In Charlie’s first book, you will find his most-loved illustrations and some new ones too.",
      author: "Charlie Mackesy",
      publisher: "Random House UK",
      SKU: 9781529105100,
      priceCents: 102000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 11,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9781649031631.jpg",
      altImage: "The Nubian Pharoas of Egypt: Their Lives and Afterlives",
      categori: "E-Egypt Essentials",
      BookName: "The Nubian Pharoas of Egypt: Their Lives and Afterlives",
      desc: "description",
      author: "Aidan Dodson",
      publisher: "Auc",
      SKU: 9781649031631,
      priceCents: 75000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 12,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/10/9783836584234.jpg",
      altImage: "King Tut: The Journey through the Underworld",
      categori: "E-Egypt Essentials",
      BookName: "King Tut: The Journey through the Underworld",
      desc: "description",
      author: "Sandro Vannini",
      publisher: "Taschen",
      SKU: 9783836584234,
      priceCents: 150000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 13,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/10/9783836520546.jpg",
      altImage: "Egypt: People, Gods, Pharaohs",
      categori: "E-Egypt Essentials",
      BookName: "Egypt: People, Gods, Pharaohs",
      desc: "description",
      author: "Rose Marie Hagen",
      publisher: "Taschen",
      SKU: 9783836520546,
      priceCents: 180000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 14,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/10/9781649031754.jpg",
      altImage: "Descendants of a Lesser God: Regional Power in Old and Middle",
      categori: "E-Egypt Essentials",
      BookName: "Descendants of a Lesser God: Regional Power in Old and Middle",
      desc: "description",
      author: "Alejandro jimenez serrano",
      publisher: "Auc",
      SKU: 9781649031754,
      priceCents: 100000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 15,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/08/9781649032188.jpg",
      altImage: "A Gift of Geology",
      categori: "E-Egypt Essentials",
      BookName: "A Gift of Geology",
      desc: "description",
      author: "Colin D.Reader",
      publisher: "Auc",
      SKU: 9781649032188,
      priceCents: 50000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 16,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/08/9781649031853.jpg",
      altImage: "Ramesses",
      categori: "E-Egypt Essentials",
      BookName: "Ramesses",
      desc: "description",
      author: "Susanna Thomas",
      publisher: "Auc",
      SKU: 9781649031853,
      priceCents: 50000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 17,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/08/9781649031617.jpg",
      altImage: "Tutankhamun",
      categori: "E-Egypt Essentials",
      BookName: "Tutankhamun",
      desc: "description",
      author: "Aidan Dodson",
      SKU: 9781649031617,
      priceCents: 75000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 18,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/05/9782724707663.jpg",
      altImage: "Cairo in Chicago",
      categori: "E-Egypt Essentials",
      BookName: "Cairo in Chicago",
      desc: "description",
      author: "Istvan Ormos",
      publisher: "Institut Francais D'Archeologi",
      SKU: 9782724707663,
      priceCents: 241900,
      inStock: 10,
      sold: 0,
    },
    {
      id: 19,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/05/9789774161216.jpg",
      altImage: "Secrets From The Sand",
      categori: "E-Egypt Essentials",
      BookName: "Secrets From The Sand",
      desc: "description",
      author: "Zahi A.Hawass",
      publisher: "American University Press",
      SKU: 9789774161216,
      priceCents: 50000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 20,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/05/9789774249006.jpg",
      altImage: "Re-Envisioning Egypt, 1919-195",
      categori: "E-Egypt Essentials",
      BookName: "Re-Envisioning Egypt, 1919-195",
      desc: "description",
      author: "Arthur Goldschmidt Jr",
      publisher: "American University Press",
      SKU: 9789774249006,
      priceCents: 40000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 21,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/06/9781474619301.jpg",
      altImage: "The Diet Myth",
      categori: "E-Diets & Nutrition",
      BookName: "The Diet Myth",
      desc: "Drawing on the latest science and his own pioneering research, Professor Tim Spector demystifies the common misconceptions about fat, calories, vitamins and nutrients. Only by understanding what makes our own personal microbes tick can we overcome the confusion of modern nutrition, and achieve a healthy gut and a healthy body.",
      author: "Tim spector",
      publisher: "Hachette Uk Distribution",
      SKU: 9781474619301,
      priceCents: 54000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 22,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/05/9781780725239.jpg",
      altImage: "Glucose Revolution",
      categori: "E-Diets & Nutrition",
      BookName: "Glucose Revolution",
      desc: "Dietary science is on the move. For decades, people were wrongly focused on reducing fat and calories, whereas we now know that the real trouble-makers are the foods that deregulate our blood sugar levels. By the end of this book, you’ll be aware of how food impacts your biology. You’ll know which breakfast choices may be causing your cravings, in which order you should eat the food on your plate, what not to do on an empty stomach, which foods lead to mood swings, and how to avoid being sleepy at 3pm. You’ll evolve the way you eat, take control of your health, and your life will flourish.",
      author: "Jessie Inchauspe",
      publisher: "Short Books",
      SKU: 9781780725239,
      priceCents: 102000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 23,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/05/9781982182380.jpg",
      altImage: "Foodwise: A Fresh Approach to",
      categori: "E-Diets & Nutrition",
      BookName: "Foodwise: A Fresh Approach to",
      desc: "Foodwise is a reset for the mind, body, and soul. Created by board-certified nutritionist and trained chef Mia Rigden, this book will help you discover the best foods and routines for your body, establish healthy new habits you love, and restore your ability to eat intuitively for radiant health—all it takes is twenty-one days. Foodwise also shares sought-after recipes and nutrition tips for anyone looking to improve their health or well-being—whether that’s to lose weight, reduce stress, improve mood or focus, boost energy, or simply feel better.",
      author: "Mia Rigden",
      publisher: "Simon & Schuster Usa",
      SKU: 9781982182380,
      priceCents: 150000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 24,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/05/9781401952556.jpg",
      altImage: "Bright Line Eating",
      categori: "E-Diets & Nutrition",
      BookName: "Bright Line Eating",
      desc: "Bright Line Eating (BLE) is a simple approach designed to reverse that process. By working with four “”Bright Lines””—clear, unambiguous, boundaries—Susan Peirce Thompson shows us how to heal our brain and shift it into a mode where it is ready to shed pounds, release cravings, and stop sabotaging our weight loss goals.Best of all, it is a program that understands that willpower cannot be relied on, and sets us up to be successful anyway.",
      author: "Susan Peirce Thompson",
      publisher: "Penguin Random House USA",
      SKU: 9781401952556,
      priceCents: 90000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 25,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/07/9781473681309.jpg",
      altImage: "Food: WTF Should I Eat?",
      categori: "E-Diets & Nutrition",
      BookName: "Food: WTF Should I Eat?",
      desc: "Did you know that porridge isn’t actually a healthy way to start the day? That perhaps you should be eating a Mediterranean diet? And that milk doesn’t build bones, and eggs aren’t the devil? In WTF Should I eat? – Dr Hyman looks at every food group and explains what we’ve gotten wrong, revealing which foods nurture our health and which pose a threat. He also explains the crucial role food plays in functional medicine and how food systems and policies affect our environmental and personal health.",
      author: "Mark Hyman",
      publisher: "Hodder and Stoughton",
      SKU: 9781473681309,
      priceCents: 66000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 26,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/06/9781526602800.jpg",
      altImage: "Eat Better Forever",
      categori: "E-Diets & Nutrition",
      BookName: "Eat Better Forever",
      desc: "In this ground-breaking book, instead of promising a gimmicky single-fix solution to the challenge of healthy eating, Hugh extracts the knowledge, advice and healthy habits, from cutting edge research into the obesity crisis, to produce 7 simple strategies that will transform your diet and your health. Starting with the blissfully simple message that we all need to Go Whole, he leads us away from the industrial junk and processed foods that are doing so many of us so much harm and returns us to the real foods that nurture us and keep us well.",
      author: "Hugh Fearnley-Whittingstall",
      publisher: "Bloomsbury Publishing PLC",
      SKU: 9781526602800,
      priceCents: 156000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 27,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/03/9786009967154.jpg",
      altImage: "Choose Health this Ramadan",
      categori: "E-Diets & Nutrition",
      BookName: "Choose Health this Ramadan",
      desc: "description",
      author: "Nouran Gamal",
      publisher: "Self-Publishing",
      SKU: 9786009967154,
      priceCents: 15000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 28,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/01/9780241254707.jpg",
      altImage: "Neal’s Yard Remedies Eat Beaut",
      categori: "E-Diets & Nutrition",
      BookName: "Neal’s Yard Remedies Eat Beaut",
      desc: "Discover how to enhance your outer beauty from the inside by eating the most beneficial natural foods. Target the face, body, hair, and teeth with over 100 recipes selected by the experts to help you look and feel beautiful. Build your own clean beauty plan based on the results you want to see, and discover the wonderful effects that beauty foods can have on everything from fragile hair and oily skin, to cellulite and bruises.",
      author: "Susan Curtis & Tipper Lewis",
      publisher: "DK",
      SKU: 9780241254707,
      priceCents: 104500,
      inStock: 10,
      sold: 0,
    },
    {
      id: 29,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/01/9780241313626.jpg",
      altImage: "Eat Better Live Longer",
      categori: "E-Diets & Nutrition",
      BookName: "Eat Better Live Longer",
      desc: "A four-week eating plan, with over 110 nutrient-packed recipes, helps you learn to make smarter choices about foods that can reduce your risk of certain diseases and lessen the effects of others. Use this new-found knowledge in tandem with details on how each part of your body changes as you age and which nutrients you need to support all-round health, helping you live a longer, happier life.",
      author: "Sarah Brewer",
      publisher: "DK",
      SKU: 9780241313626,
      priceCents: 102000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 30,
      image:
        "https://diwanegypt.com/wp-content/uploads/2020/12/9781473631168.jpg",
      altImage: "Eat Fat Get Thin",
      categori: "E-Diets & Nutrition",
      BookName: "Eat Fat Get Thin",
      desc: "As ‘Pegan Plan’ creator and author Dr Mark Hyman explains in Eat Fat Get Thin, a growing body of research is revealing the immense health and weight-loss benefits of a high-fat diet rich in eggs, nuts, oils, avocados, coconut oil, and other delicious superfoods. That’s right – as it turns out, the key to losing weight, increasing overall energy, and achieving optimum wellness is eating more fat, not less. Dr Hyman debunks some of our most persistent fat-phobic myths and clearly explains the science behind fat’s health benefits. In addition to learning why fat is good and which fats are best, you’ll learn how to apply that knowledge to your day-to-day life. With easy-to-follow advice, simple and flavourful recipes, shopping lists, and more, Eat Fat Get Thin will help you lose weight and stay healthy for life.",
      author: "Mark Hyman",
      publisher: "Hodder & Stoughton",
      SKU: 9781473631168,
      priceCents: 66000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 31,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/11/9780241989678.jpg",
      altImage: "How the World Really Works",
      categori: "E-Science & Technology",
      BookName: "How the World Really Works",
      desc: "We have never had so much information at our fingertips and yet most of us don’t know how the world really works. This book explains seven of the most fundamental realities governing our survival and prosperity. From energy and food production, through our material world and its globalization, to risks, our environment and its future, How the World Really Works offers a much-needed reality check – because before we can tackle problems effectively, we must understand the facts.",
      author: "Vaclav Smil",
      publisher: "Penguin UK`",
      SKU: 9780241989678,
      priceCents: 66000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 32,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/06/9781784708276.jpg",
      altImage: "Entangled Life",
      categori: "E-Science & Technology",
      BookName: "Entangled Life",
      desc: "When we think of fungi, we likely think of mushrooms. But mushrooms are only fruiting bodies, analogous to apples on a tree. Most fungi live out of sight, yet make up a massively diverse kingdom of organisms that supports and sustains nearly all living systems. Fungi provide a key to understanding the planet on which we live, and the ways we think, feel, and behave.  In Entangled Life, the brilliant young biologist Merlin Sheldrake shows us the world from a fungal point of view, providing an exhilarating change of perspective. Sheldrake’s vivid exploration takes us from yeast to psychedelics, to the fungi that range for miles underground and are the largest organisms on the planet, to those that link plants together in complex networks known as the “Wood Wide Web,” to those that infiltrate and manipulate insect bodies with devastating precision.",
      author: "Merlin Sheldrake",
      publisher: "Penguin UK",
      SKU: 9781784708276,
      priceCents: 78000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 33,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/02/9781787333765.jpg",
      altImage: "Sapiens A Graphic History Vol",
      categori: "E-Science & Technology",
      BookName: "Sapiens A Graphic History Vol",
      desc: "In The Pillars of Civilization, Yuval Noah Harari and his companions including Prof. Saraswati and Dr. Fiction travel the length and breadth of human history to investigate how the Agricultural Revolution changed society forever. Discover how wheat took over the world, how war, famine, disease and inequality became a part of the human condition, and why we might only have ourselves to blame. A radical, witty and colourful retelling of the story of humankind, adapted from Yuval Noah Harari’s Sapiens: A Brief History of Humankind, Volume 2 can be read as a standalone or as a follow-up to Volume 1, The Birth of Humankind.",
      author: "Yuval Noah Harari",
      publisher: "Random House UK",
      SKU: 9781787333765,
      priceCents: 114000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 34,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/02/9781787332812.jpg",
      altImage: "Sapiens A Graphic History Vol",
      categori: "E-Science & Technology",
      BookName: "Sapiens A Graphic History Vol",
      desc: "In this first volume of the adaptation of his ground-breaking book, renowned historian Yuval Harari tells the story of humankind’s creation and evolution, exploring the ways in which biology and history have defined us and enhanced our understanding of what it means to be “”human””. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens challenges us to reconsider accepted beliefs, connect past developments with contemporary concerns, and view specific events within the context of larger ideas.",
      author: "Yuval Noah Harari",
      publisher: "Random House UK",
      SKU: 9781787332812,
      priceCents: 120000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 35,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/01/9781409350156.jpg",
      altImage: "Science Book",
      categori: "E-Science & Technology",
      BookName: "Science Book",
      desc: "(2014) Part of the popular Big Ideas series, The Science Book explores the history of science, how scientists have sought to explain our incredible universe and how amazing scientific discoveries have been made. Discover how Galileo worked out his scientific theories of motion and inertia, why Copernicus’s ideas were contentious and what the discovery of DNA meant. All the big scientific ideas and discoveries are brought to life with quirky graphics, pithy quotes and step-by-step ‘mind maps’, plus every area of science is covered, including astronomy, biology, chemistry, geology, maths and physics. You’ll be brought up-to-date on scientific ideas from black holes to genetic engineering with eye-catching artworks showing how the ideas of key scientists have impacted our understanding of the world.",
      author: "N/A",
      publisher: "Penguin UK",
      SKU: 9781409350156,
      priceCents: 120000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 36,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/01/9781784296148.jpg",
      altImage: "50 Science Ideas You Really Ne",
      categori: "E-Science & Technology",
      BookName: "50 Science Ideas You Really Ne",
      desc: "(2016) 50 Science Ideas You Really Need to Know is your guide to the biggest questions and deepest concepts from across the whole of science. What was the Big Bang? How did life on Earth arise? What does quantum mechanics tell us about the universe? Is true artificial intelligence possible? And does life exist on other planets? Moving from the basics of atoms and molecules, Newton’s laws of physics and the building blocks of life to the cutting edge of nanotechnology, Einstein’s theories of relativity and cloning, this book makes the many worlds of science accessible and illuminating. Featuring fifty concise, insightful and illustrated essays covering physics and astronomy, Earth and life sciences, chemistry and materials, psychology and computing, and exploring the ways they connect with each other and impact on our lives, 50 Science Ideas You Really Need to Know is the ideal introduction to the questions which fascinate us all",
      author: "Gail Dixon & Paul Parsons",
      publisher: "Quercus Publishing",
      SKU: 9781784296148,
      priceCents: 78000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 37,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/01/9781786344205.jpg",
      altImage: "Scientist and the Forger",
      categori: "E-Science & Technology",
      BookName: "Scientist and the Forger",
      desc: "(2018) There is a richness in details from a selection of cases, and the author is a good story?teller. The book has an important educational role in the professional authentication of art the book includes a discussion of the most pressing problems today and indicates a possible future development. ? Prof Bengt Norden, Royal Swedish Academy of Sciences. This is a book that explores both chemistry and chicanery, the pleasures and pitfalls of collecting, and perhaps most interestingly, the psychology of lying, self-deception, and discovery… Whatever the reader’s involvement or perspective on recent events and controversies, the stories recounted here so artfully, along with the scientific techniques explained with such clarity and care, together make for a terrific read. – Professor Robert Switzer, The American University in Cairo",
      author: "Jehane Ragai",
      publisher: "World Scientific Europe",
      SKU: 9781786344205,
      priceCents: 66000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 38,
      image:
        "https://diwanegypt.com/wp-content/uploads/2021/11/9780143127536.jpg",
      altImage: "How Not to Be Wrong",
      categori: "E-Science & Technology",
      BookName: "How Not to Be Wrong",
      desc: "(2015) The maths we learn in school can seem like an abstract set of rules, laid down by the ancients and not to be questioned. In fact, Jordan Ellenberg shows us, maths touches on everything we do, and a little mathematical knowledge reveals the hidden structures that lie beneath the world’s messy and chaotic surface. In How Not to be Wrong, Ellenberg explores the mathematician’s method of analyzing life, from the everyday to the cosmic, showing us which numbers to defend, which ones to ignore, and when to change the equation entirely. Along the way, he explains calculus in a single page, describes Gِdel’s theorem using only one-syllable words, and reveals how early you actually need to get to the airport.",
      author: "Jordan Ellenberg",
      publisher: "Penguin USA",
      SKU: 9780143127536,
      priceCents: 72500,
      inStock: 10,
      sold: 0,
    },
    {
      id: 39,
      image:
        "https://diwanegypt.com/wp-content/uploads/2021/10/9781848549562.jpg",
      altImage: "What If",
      categori: "E-Science & Technology",
      BookName: "What If",
      desc: "(2018) From the creator of the wildly popular xkcd.com, hilarious and informative answers to important questions you probably never thought to ask. Millions visit xkcd.com each week to read Randall Munroe’s iconic webcomic. Fans ask him a lot of strange questions: How fast can you hit a speed bump, driving, and live? When (if ever) did the sun go down on the British Empire? When will Facebook contain more profiles of dead people than living? How many humans would a T Rex rampaging through New York need to eat a day?",
      author: "Randall Munroe",
      publisher: "John Murray",
      SKU: 9781848549562,
      priceCents: 66000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 40,
      image:
        "https://diwanegypt.com/wp-content/uploads/2021/03/9789779071091.jpg",
      altImage: "Virtual Smart Codes",
      categori: "E-Science & Technology",
      BookName: "Virtual Smart Codes",
      desc: "Virtual Smart codes is a simplified and user-friendly overview of a complex relationship between modern technology and how we interact with it. Inspired by social observations and legal principles, it questions the sustainability of its ethical and regulatory foundations.",
      author: "Ziad El Hefnawy",
      publisher: "Self-Publishing",
      SKU: 9789779071091,
      priceCents: 10000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 41,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9782724709216.jpg",
      altImage: "Costumes of Egypt: The Lost Legacies, I",
      categori: "E-Fashion",
      BookName: "Costumes of Egypt: The Lost Legacies, I",
      desc: "Costumes of Egypt: The Lost legacies sums up decades of Shahira Mehrez’s research: it is a four-volume work recording and tracing the origin of hitherto undocumented ways of dressing and jewelry of Egyptian women, most of which have today become obsolete. The costumes surveyed in this first volume establish the fact that irrespective of distant geographic locations, beyond religious and ethnic diversity, and throughout thousands of years of history and successive civilizations, Nubians, Nile Valley peasants, Bedouins and oasis dwellers, both Christian and Muslim, were heirs to the same legacy. Old and new emblems were melted into one tradition, defining a multifaceted but harmonious Egyptian identity.This tradition provides undeniable and tangible proof of the unity of the country and bears witness to the fact that throughout history these various communities were the different parts of a multicultural and pluralistic nation.",
      author: "Shahira Mehrez",
      publisher: "Institut Francais D'Archeologi",
      SKU: 9782724709216,
      priceCents: 241900,
      inStock: 10,
      sold: 0,
    },
    {
      id: 42,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9798888140338.jpg",
      altImage: "Fashion Upcycling: The DIY Guide to Sewing, Mending, and Sus",
      categori: "E-Fashion",
      BookName: "Fashion Upcycling: The DIY Guide to Sewing, Mending, and Sus",
      desc: "description",
      author: "Ysabel Hilado",
      publisher: "Rocky Nook",
      SKU: 9798888140338,
      priceCents: 135000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 43,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9781510713499.jpg",
      altImage: "The Capsule Wardrobe: 1,000 Outfits from 30 Pieces",
      categori: "E-Fashion",
      BookName: "The Capsule Wardrobe: 1,000 Outfits from 30 Pieces",
      desc: "N/A",
      author: "Wendy Mak",
      publisher: "Skyhorse Publishing",
      SKU: 9781510713499,
      priceCents: 100000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 44,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9780847868544.jpg",
      altImage: "Jewels That Made History: 101 Stones, Myths, and Legends",
      categori: "E-Fashion",
      BookName: "Jewels That Made History: 101 Stones, Myths, and Legends",
      desc: "N/A",
      author: "Stellene Volandes",
      publisher: "Rizzoli",
      SKU: 9780847868544,
      priceCents: 225000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 45,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9780847864089.jpg",
      altImage: "The Style of Movement: Fashion & Dance",
      categori: "E-Fashion",
      BookName: "The Style of Movement: Fashion & Dance",
      desc: "N/A",
      author: "Ken Browar",
      publisher: "Rizzoli",
      SKU: 9780847864089,
      priceCents: 425000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 46,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9780847846078.jpg",
      altImage: "Versace",
      categori: "E-Fashion",
      BookName: "Versace",
      desc: "description",
      author: "Donatella Versace",
      publisher: "Rizzoli",
      SKU: 9780847846078,
      priceCents: 500000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 47,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9780847843497.jpg",
      altImage: "Halston: Inventing American Fashion",
      categori: "E-Fashion",
      BookName: "Halston: Inventing American Fashion",
      desc: "N/A",
      author: "Lesley Frowick",
      publisher: "Rizzoli",
      SKU: 9780847843497,
      priceCents: 375000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 48,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9780847841851.jpg",
      altImage: "Dior Glamour (1952-1962)",
      categori: "E-Fashion",
      BookName: "Dior Glamour (1952-1962)",
      desc: "N/A",
      author: "Natasha Fraser-Cavassoni",
      publisher: "Rizzoli",
      SKU: 9780847841851,
      priceCents: 625000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 49,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9780847838028.jpg",
      altImage: "Dior: Couture",
      categori: "E-Fashion",
      BookName: "Dior: Couture",
      desc: "N/A",
      author: "Patrick Demarchelier",
      publisher: "Rizzoli",
      SKU: 9780847838028,
      priceCents: 625000,
      inStock: 10,
      sold: 0,
    },
    {
      id: 50,
      image:
        "https://diwanegypt.com/wp-content/uploads/2023/12/9780847831722.jpg",
      altImage: "Valentino: Themes and Variations",
      categori: "E-Fashion",
      BookName: "Valentino: Themes and Variations",
      desc: "N/A",
      author: "Pamela Golbin",
      publisher: "Rizzoli",
      SKU: 9780847831722,
      priceCents: 400000,
      inStock: 10,
      sold: 0,
    },
  ];
}

export function saveBooksToStorage() {
  localStorage.setItem("books", JSON.stringify(bookscard));
}

export function deleteBookFromDatabase() {
  const button = document.querySelector(".js-delete-from-database-button");
  button.addEventListener("click", () => {
    const bookid = document.querySelector(".js-delete-from-database").value;
    console.log(bookid);
    const newBooksCard = [];
    bookscard.forEach((book) => {
      if (bookid != book.id) {
        newBooksCard.push(book);
      }
    });
    bookscard = newBooksCard;
    console.log(bookscard);
  });
}

export function addInStockQuantity() {
  const button = document.querySelector(".js-add-quantity-button");
  button.addEventListener("click", () => {
    const bookid = document.querySelector(".js-book-id-add-to-stock").value;
    console.log(bookid);
    const quantity = Number(document.querySelector(".js-add-quantity").value);
    bookscard.forEach((book) => {
      if (bookid == book.id) {
        book.inStock += quantity;
        saveBooksToStorage();
        console.log(bookscard);
      }
    });
  });
}

export function reduceInStockQuantity() {
  const button = document.querySelector(".js-take-from-stock-button");
  button.addEventListener("click", () => {
    const bookid = document.querySelector(".js-book-id-take-from-stock").value;
    console.log(bookid);
    const quantity = Number(
      document.querySelector(".js-reduce-quantity").value
    );
    bookscard.forEach((book) => {
      if (bookid == book.id) {
        book.inStock -= quantity;
        saveBooksToStorage();
        console.log(bookscard);
      }
    });
  });
}

export function addBook() {
  const newBook = {};
  const button = document.querySelector(".js-add-book-button");
  button.addEventListener("click", () => {
    const bookid = Number(document.querySelector(".js-book-id-add-book").value);
    const bookImage = document.querySelector(".js-image-path-add-book").value;
    const altImage = document.querySelector(".js-alt-image-add-book").value;
    const bookCategory = document.querySelector(
      ".js-book-category-add-book"
    ).value;
    const bookName = document.querySelector(".js-book-name-add-book").value;
    const bookDescribtion = document.querySelector(
      ".js-book-describtion-add-book"
    ).value;
    const bookAthor = document.querySelector(".js-athor-add-book").value;
    const bookPublischer = document.querySelector(
      ".js-publisher-add-book"
    ).value;
    const bookPrice = Number(
      document.querySelector(".js-price-add-book").value
    );
    const inStock = Number(
      document.querySelector(".js-in-stock-add-book").value
    );
    newBook.id = bookid;
    newBook.image = bookImage;
    newBook.altImage = altImage;
    newBook.categori = bookCategory;
    newBook.BookName = bookName;
    newBook.desc = bookDescribtion;
    newBook.author = bookAthor;
    newBook.publisher = bookPublischer;
    newBook.priceCents = bookPrice;
    newBook.inStock = inStock;
    newBook.sold = 0;
    bookscard.push(newBook);
    saveBooksToStorage();
    console.log(bookscard);
  });
}
