/* Central Data Management File */

export const recipes = [
    {
        id: 1,
        title: "Moong Paneer Salad",
        isVeg: true,
        image: "/assets/moongdal.png",
        time: "15 min",
        cal: "469.7 kcal",
        category: "Lunch",
        url: "#",
        description: "A nutrient-packed, high-protein salad featuring sprouted moong dal, fresh paneer, and crunchy vegetables, dressed in a zesty spiced hung curd blend.",
        nutrition: {
            energy: "469.7 kcal",
            carbohydrates: "64 g",
            protein: "25.5 g",
            fat: "15 g",
            calcium: "425 mg"
        },
        ingredients: [
            {
                section: "For the base",
                items: [
                    "Moong dal: 60 gram soaked overnight / boiled",
                    "Onion: 1 small (45 g)",
                    "Tomato: 1 medium (60g)",
                    "Cucumber: 1/2 medium / 1 small",
                    "Paneer: 60 gram",
                    "Coriander leaves",
                    "Bajra Puffs/Rice puffs: 15 gram"
                ]
            },
            {
                section: "For Dressing",
                items: [
                    "Hung curd: 60 mL curd",
                    "Garlic: 2 cloves",
                    "Red chilli powder: 1/2 tsp",
                    "Coriander: 1/2 tsp",
                    "Black Pepper: 1/2tsp",
                    "Cumin powder: 1/2 tsp"
                ]
            }
        ],
        instructions: [
            "Take a bowl",
            "Add boiled/overnight soaked moong dal",
            "Add onion, tomato, cucumber, paneer, Puffed Rice as per the quantity mentioned",
            "Take blender and add, Hung Curd, Garlic, Red chilli powder, Coriander powder, Black pepper, and cumin powder",
            "Blend it well",
            "Add the blended mixture to the bowl",
            "Mix it well",
            "Garnish it with Coriander leaves"
        ]
    },
    {
        id: 2,
        title: "Chickpea Salad",
        isVeg: true,
        image: "/assets/Chickpea salad.png",
        time: "10 min",
        cal: "316.5 kcal",
        category: "Lunch",
        url: "#",
        description: "A refreshing, protein-rich salad mixing boiled chickpeas with crunchy cucumber and a tangy hung curd dressing. Perfect for a quick, healthy meal.",
        nutrition: {
            energy: "316.5 kcal",
            carbohydrates: "24.3 g",
            protein: "8.2 g",
            fat: "3.3 g",
            calcium: "148.2 mg"
        },
        ingredients: [
            {
                section: "For the base",
                items: [
                    "Cucumber: 1 medium",
                    "Chickpea: 50 grams",
                    "Red Chilli Powder: 1 tsp",
                    "Black pepper powder: 1 tsp",
                    "Rock salt/Iodised Salt: 1tsp"
                ]
            },
            {
                section: "For Dressing",
                items: [
                    "Hung curd: 60 mL curd",
                    "Garlic: 2 cloves",
                    "Red chilli powder: 1/2 tsp"
                ]
            }
        ],
        instructions: [
            "Take a cucumber and slice it.",
            "In a pan, take 1 small bowl boiled chickpeas",
            "Add 1tsp red chilli powder, 1 tsp black pepper, 1 tsp rock salt/iodised salt to the pan and mix well",
            "Take blender and add Hung Curd, Garlic, Red chilli powder",
            "Add the blended mixture on top of the sautéed chickpeas",
            "Mix it well",
            "Garnish it with Coriander leaves",
            "Serve."
        ]
    },
    {
        id: 3,
        title: "Soya Bowl Salad",
        isVeg: true,
        image: "/assets/soya.jpeg",
        time: "15 min",
        cal: "214.4 kcal",
        category: "Snacks",
        url: "#",
        description: "A low-calorie, high-protein snack combining protein-rich sautéed soya chunks with fresh lettuce and a garlic-yogurt dressing.",
        nutrition: {
            energy: "214.4 kcal",
            carbohydrates: "13.01 g",
            protein: "16.3 g",
            fat: "9.5 g",
            calcium: "325.5 mg"
        },
        ingredients: [
            {
                section: "For the base",
                items: [
                    "Lettuce: 100 grams",
                    "Sautéed Soya Chunks: 25 grams",
                    "Oil: 1 tsp / 5 mL",
                    "Rock salt/Iodised Salt: 1tsp",
                    "Onion: 1 small / 45 grams",
                    "Spices (don’t over do)"
                ]
            },
            {
                section: "For Dressing",
                items: [
                    "Hung curd: 80 mL curd",
                    "Garlic: 2 cloves",
                    "Red Chilli powder: 1tsp",
                    "Salt to taste"
                ]
            }
        ],
        instructions: [
            "Take a pan, sauté the soya chunks in oil, add spices to it and stir.",
            "Take lettuce in a bowl, add sautéed soya chunks along with onion.",
            "Take blender and add Hung Curd, Garlic, Red chilli powder and salt with little water.",
            "Add the blended mixture on top of the bowl of lettuce and soya chunks.",
            "Mix it well.",
            "Serve."
        ]
    },
    {
        id: 4,
        title: "Makhana Salad",
        isVeg: true,
        image: "/assets/Makhana.jpeg",
        time: "10 min",
        cal: "306 kcal",
        category: "Snacks",
        url: "#",
        description: "A crunchy, satisfying snack made with ghee-roasted makhana and peanuts, mixed with colorful grated carrots, beetroot, and cucumber.",
        nutrition: {
            energy: "306 kcal",
            carbohydrates: "34.25 g",
            protein: "11.9 g",
            fat: "11.9 g",
            calcium: "52.7 mg",
            fibre: "5.6 g"
        },
        ingredients: [
            {
                section: "Ingredients",
                items: [
                    "Roasted Makhana/Foxnut: 30 grams",
                    "Raw roasted peanut: 2 tbsp",
                    "Tomato: 30 g",
                    "Cucumber: 30 g",
                    "Grated Carrot: 30 grams",
                    "Grated Beetroot: 30 grams",
                    "Cumin Powder: 1tsp",
                    "Iodised Salt: 1tsp",
                    "Ghee: 1 tsp ~ 5 g"
                ]
            }
        ],
        instructions: [
            "Take a pan, add ghee and roast the makhana and peanuts.",
            "Grate Carrot.",
            "Grate Beetroot.",
            "Chop tomato.",
            "Chop Cucumber.",
            "Take a bowl, add all ingredients and mix it well.",
            "Serve."
        ]
    },
    {
        id: 5,
        title: "Quinoa Salad",
        isVeg: true,
        image: "/assets/Quinoa.jpeg",
        time: "20 min",
        cal: "348.6 kcal",
        category: "Snacks",
        url: "#",
        description: "A fiber-rich quinoa and moong dal salad with grated carrots and boiled beetroot, tossed in a simple olive oil and roasted peanut dressing.",
        nutrition: {
            energy: "348.6 kcal",
            carbohydrates: "21.51 g",
            protein: "9.1 g",
            fat: "20.9 g",
            calcium: "75.1 mg",
            fibre: "6.01 g"
        },
        ingredients: [
            {
                section: "For the Base",
                items: [
                    "Boiled Quinoa: 15 g",
                    "Moong dal boiled: 15 g",
                    "Beetroot boiled: 30 g",
                    "Carrot: 30 g",
                    "Onion: 30 g"
                ]
            },
            {
                section: "For the Dressing",
                items: [
                    "Olive Oil / Oil: 1 tbsp",
                    "Raw roasted peanut: 1 tbsp",
                    "Salt: 1 tsp"
                ]
            }
        ],
        instructions: [
            "Soak moong dal for 1-2 hrs in enough water.",
            "Boil the Quinoa.",
            "Slice the carrot, chop the beetroot, and chop the onion.",
            "Now in a large bowl add the chopped and sliced veggies with cooked quinoa and moong dal.",
            "Top it with dressing and mix well.",
            "Serve."
        ]
    },
    {
        id: 6,
        title: "Beetroot Salad",
        isVeg: true,
        image: "/assets/Beetroot.jpeg",
        time: "15 min",
        cal: "168.3 kcal",
        category: "Snacks",
        url: "#",
        description: "A creamy and colorful yogurt-based beetroot salad finished with a warm cumin and hing tempering.",
        nutrition: {
            energy: "168.3 kcal",
            carbohydrates: "12.09 g",
            protein: "10.9 g",
            fat: "7.9 g",
            calcium: "216.1 mg"
        },
        ingredients: [
            {
                section: "For the Base",
                items: [
                    "Grated Beetroot: 50 g",
                    "Yogurt/Curd: 200 g",
                    "Crushed peanuts: 15 g",
                    "Salt: 1 tsp",
                    "Black pepper: 1 tsp",
                    "Oil: 1tsp",
                    "Cumin powder: 1 tsp",
                    "Hing: 1 pinch"
                ]
            }
        ],
        instructions: [
            "In a mixing bowl, combine the grated beetroot, yogurt/curd, crushed peanuts, salt, and black pepper.",
            "Mix well to combine these ingredients.",
            "Take a pan, heat oil and add cumin seed, and hing. Let them crackle for few seconds.",
            "Pour the tempering over the mixture of beetroot and mix well."
        ]
    },
    {
        id: 7,
        title: "Khakra Salad",
        isVeg: true,
        image: "/assets/Khakra salad.jpeg",
        time: "15 min",
        cal: "565.54 kcal",
        category: "Snacks",
        url: "#",
        description: "An innovative snack combining crunchy broken khakra with boiled sprouts, yogurt, roasted peanuts, and freshly blended coriander chutney.",
        nutrition: {
            energy: "565.54 kcal",
            carbohydrates: "78.3 grams",
            protein: "24.72 g",
            fat: "9.49 g",
            calcium: "382.56 mg"
        },
        ingredients: [
            {
                section: "Ingredients",
                items: [
                    "2 Khakra (take two roti)",
                    "Boiled sprouts: 50 g",
                    "Yogurt/curd: 200 g",
                    "Roasted peanut/groundnut: 10 pieces/1 tablespoon",
                    "Onion: Small half",
                    "Coriander: 5-6 leaves",
                    "Rock salt: 1 tsp",
                    "Red chilli powder: 1tsp",
                    "Cumin powder: 1 tsp"
                ]
            }
        ],
        instructions: [
            "Break the Khakra into small pieces.",
            "Add boiled sprouts.",
            "Whisk the yogurt/curd with some water to make it thinner and pour it over the Khakra and sprouts.",
            "To it add roasted peanut/groundnut.",
            "Add chopped onion, rock salt, red chilli powder and cumin powder and mix it.",
            "Mix well to combine these ingredients.",
            "For coriander chutney: Take a blender and put coriander leaves to it and pour some water to it and blend it.",
            "Add this coriander chutney to the bowl."
        ]
    },
    {
        id: 8,
        title: "Black Chickpea Salad",
        isVeg: true,
        image: "/assets/Blackchickpea.jpeg",
        time: "15 min",
        cal: "572.5 kcal",
        category: "Snacks",
        url: "#",
        description: "A powerhouse snack packed with black chana, boiled sprouts, roasted nuts, seeds, and an aromatic mint-yogurt dressing.",
        nutrition: {
            energy: "572.5 kcal",
            carbohydrates: "61.1 grams",
            protein: "35.8 grams",
            fat: "15.4 grams",
            calcium: "360.68 mg"
        },
        ingredients: [
            {
                section: "For Salad",
                items: [
                    "Black Chana: 45 g",
                    "Boiled sprouts: 50 g",
                    "Capsicum: 2 fistful",
                    "Cucumber: 2 fistful",
                    "Tomato: 1 fistful",
                    "Onion: 1 fistful",
                    "Cashew: 5 pieces",
                    "Almond: 5 pieces",
                    "Makhana: 2 fistful",
                    "Pumpkin seed: 10 g",
                    "Sunflower seed: 10 g"
                ]
            },
            {
                section: "For Dressing",
                items: [
                    "Yogurt/hung curd: 60 g",
                    "Garlic: 2 cloves",
                    "Mint leaves: 4-5 leaves",
                    "Chilli flakes",
                    "Salt: 1 tsp"
                ]
            }
        ],
        instructions: [
            "Take a bowl, add to it cooked black Chana, boiled sprouts, roasted cashew, roasted almond, roasted makhana, roasted pumpkin seed, and roasted sunflower seed.",
            "Take a blender, add Yogurt/hung curd along with mint leaves, chilli flakes, salt, and garlic.",
            "Blend it well and add the creamy dressing to the bowl."
        ]
    },
    {
        id: 9,
        title: "Horse Gram Salad",
        isVeg: true,
        image: "/assets/Horsegram.jpeg",
        time: "20 min",
        cal: "296.04 kcal",
        category: "Snacks",
        url: "#",
        description: "A clinical nutrition favorite combining paneer, boiled horse gram, cabbage, and other fresh veggies in a custom mint-lemon-yogurt dressing.",
        nutrition: {
            energy: "296.04 kcal",
            carbohydrates: "29.66 grams",
            protein: "17.33 grams",
            fat: "9.38 grams",
            calcium: "440.83 mg"
        },
        ingredients: [
            {
                section: "For Salad",
                items: [
                    "Paneer: 50 grams",
                    "Boiled horse gram: 30 grams",
                    "Capsicum: 2 fistful",
                    "Cucumber: 2 fistful",
                    "Tomato: 1 fistful",
                    "Onion: 1 fistful",
                    "Purple/green cabbage: 60 grams"
                ]
            },
            {
                section: "For Dressing",
                items: [
                    "Mint leaves: 7-8 strands",
                    "Garlic: 4 cloves",
                    "Chilli: 1 tsp",
                    "Curd: 3 tbsp / 45 mL",
                    "Black pepper: 1 tsp",
                    "Lemon juice: 1 tbsp",
                    "Salt: 1 tsp"
                ]
            }
        ],
        instructions: [
            "Take a bowl, add to it paneer, capsicum, cucumber, tomato, onion, cabbage, and boiled horse gram.",
            "Take a blender, add mint leaves, garlic, chilli, curd, black pepper, lemon juice, and salt.",
            "Blend it well and add the creamy dressing to the bowl.",
            "Mix it well and enjoy."
        ]
    },
    {
        id: 10,
        title: "Moong Beet Salad",
        isVeg: true,
        image: "/assets/Moongbeet.jpeg",
        time: "15 min",
        cal: "218.9 kcal",
        category: "Snacks",
        url: "#",
        description: "A superfood salad combining moong dal, quinoa, and boiled beetroot with a zesty garlic-mint yogurt dressing.",
        nutrition: {
            energy: "218.9 kcal",
            carbohydrates: "34.02 grams",
            protein: "10.53 grams",
            fat: "3.07 grams",
            calcium: "150.22 mg"
        },
        ingredients: [
            {
                section: "For Salad",
                items: [
                    "Moong dal boiled: 20 grams",
                    "Beetroot boiled: 1/2 piece",
                    "Quinoa boiled: 20 grams",
                    "Carrot / cucumber sliced: 1 small piece",
                    "Onion: 1 small piece"
                ]
            },
            {
                section: "For Dressing",
                items: [
                    "Mint leaves: 7-8 strands",
                    "Garlic: 4 cloves",
                    "Chilli: 1 tsp",
                    "Curd: 3 tbsp",
                    "Black pepper: 1 tsp",
                    "Lemon juice: 1 tbsp",
                    "Salt: 1 tsp"
                ]
            }
        ],
        instructions: [
            "Take a bowl, add to it boiled moong dal, boiled quinoa, sliced boiled beetroot, sliced carrot/cucumber, and chopped onion.",
            "Take a blender, add mint leaves, garlic, chilli, curd, black pepper, lemon juice, and salt.",
            "Blend it well and add the creamy dressing to the bowl.",
            "Mix it well and enjoy."
        ]
    }
];

export const blogPosts = [
    // {
    //     id: 1,
    //     title: "Top 10 Superfoods for Immunity",
    //     excerpt: "Discover the power ingredients that can help boost your immune system naturally this season.",
    //     date: "Oct 12, 2023",
    //     image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    //     fullContent: [
    //         "As the seasons change, our immune systems can take a hit. Incorporating the right foods into your diet can make a significant difference in how your body fights off illnesses.",
    //         "Start with citrus fruits like oranges, grapefruits, and lemons. They are packed with Vitamin C, which is essential for white blood cell production.",
    //         "Don't overlook garlic and ginger. These potent ingredients have been used for centuries to combat sickness and reduce inflammation.",
    //         "Finally, adding fermented foods like yogurt or kimchi can improve your gut health, which is surprisingly linked to overall immunity."
    //     ]
    // },
    // {
    //     id: 2,
    //     title: "Mindful Eating: A Beginner's Guide",
    //     excerpt: "Learn how to build a better relationship with food by practicing mindfulness during meals.",
    //     date: "Sep 28, 2023",
    //     image: "https://images.unsplash.com/photo-1511690656952-34342d5c71df?auto=format&fit=crop&q=80&w=800",
    //     fullContent: [
    //         "Mindful eating is not a diet; it's a practice of being fully present during your meals. In our fast-paced world, we often eat while distracted by phones or TV.",
    //         "To start, try eating without any screens. Focus on the colors, textures, and aromas of your food.",
    //         "Chew slowly and appreciate each bite. This not only enhances the flavor but also gives your brain time to register fullness signals.",
    //         "By slowing down, you may find you enjoy your food more and naturally eat in better alignment with your body's needs."
    //     ]
    // },
    // {
    //     id: 3,
    //     title: "The Truth About Intermittent Fasting",
    //     excerpt: "Breaking down the science, benefits, and myths surrounding this popular diet trend.",
    //     date: "Sep 15, 2023",
    //     image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    //     fullContent: [
    //         "Intermittent fasting (IF) has gained massive popularity, but what exactly is it? Simply put, it's an eating pattern that cycles between periods of fasting and eating.",
    //         "Common methods include the 16/8 method (fasting for 16 hours, eating for 8) or the 5:2 diet.",
    //         "Supporters claim it aids in weight loss, improves metabolic health, and even extends lifespan. However, it's not for everyone.",
    //         "It's crucial to consult with a professional before starting IF, especially for women or those with a history of disordered eating."
    //     ]
    // }
];

export const testimonials = [
    {
        id: 4,
        name: "Umesh",
        text: "My health was in very bad condition before I met Shreya. I was suffering from fatty liver, high uric acid, sugar problem, high cholesterol , increased weight, and BP problems. But after meeting her and following her guidance, my health improved a lot. My FibroScan score came down from 17 to 11, and my BP started staying completely normal and uric acid almost came to normal my weight reduced all in just 1 month. Now I am feeling much healthier and better than before. Thank you so much, Shreya, for your support and guidance.",
        role: "Liver Health & Weight Loss",
        image: "https://ui-avatars.com/api/?name=Umesh&background=random"
    },
    {
        id: 5,
        name: "Keshav",
        text: "It has been a little hectic to follow through with the diet plan but it has proven to be quite effective. And having a change in the diet actually made me understand where I am missing out on my nutrition. I was concerned about my weight gain, bloating and sluggishness during the day. Following the diet suggest by Shreya really helped me with those problems. I especially liked the regular follow ups since, in a way, they held me accountable for my choices without being judged.",
        role: "Weight Loss",
        image: "https://ui-avatars.com/api/?name=Keshav&background=random"
    },
    // {
    //     id: 1,
    //     name: "Sarah Jenkins",
    //     text: "I've tried so many diets, but this holistic approach was the only thing that stuck. I feel more energetic and balanced than I have in years!",
    //     role: "Lost 15 lbs",
    //     image: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=random"
    // },
    // {
    //     id: 2,
    //     name: "Michael Chen",
    //     text: "The personalized meal plans were a game changer. Not only did I reach my goal weight, but my digestion has never been better.",
    //     role: "Gut Health Program",
    //     image: "https://ui-avatars.com/api/?name=Michael+Chen&background=random"
    // },
    // {
    //     id: 3,
    //     name: "Emma Wilson",
    //     text: "Truly professional guidance. The nutritionist was always available to answer my questions and keep me motivated.",
    //     role: "Lifestyle Reset",
    //     image: "https://ui-avatars.com/api/?name=Emma+Wilson&background=random"
    // }
];

export const solvedCases = [
    {
        patientName: "Umesh",
        tagline: "Hepatic Fibrosis & Grade III Obesity Reversal",
        role: "Liver Health & Weight Loss",
        quote: "My health was in very bad condition before I met Shreya. I was suffering from fatty liver, high uric acid, sugar problem, high cholesterol, increased weight, and BP problems. But after meeting her and following her guidance, my health improved a lot. My FibroScan score came down from 17 to 11, and my BP started staying completely normal and uric acid almost came to normal, my weight reduced, all in just 1 month. Now I am feeling much healthier and better than before. Thank you so much, Shreya, for your support and guidance.",
        easyWords: "Umesh came to us with an erratic food schedule and daily consumption of outside food. He was diagnosed with severe hepatic fibrosis (fatty liver), Grade III obesity, pre-diabetes, hyperuricemia, and hypertension. He opted for our 1-month nutrition and lifestyle management plan, following which the positive improvements were observed. Considering the progress, he was advised to continue with our 3-month plan for sustained improvement and better long-term health outcomes.",
        parameters: [
            { name: "Liver Stiffness (FibroScan)", before: "17.5 kPa", after: "11.2 kPa", status: "Significant Reversal" },
            { name: "Blood Pressure", before: "150/110 mmHg", after: "120/80 mmHg", status: "Healthy Range" },
            { name: "Body Weight", before: "86 kg", after: "83.1 kg", status: "-2.9 kg (30 Days)" },
            { name: "Uric Acid", before: "8.3 mg/dL", after: "7.4 mg/dL", status: "Healthy Range" },
            { name: "SGPT (Liver Enzyme)", before: "416 U/L", after: "357 U/L", status: "Decreasing" },
            { name: "SGOT (Liver Enzyme)", before: "132 U/L", after: "118 U/L", status: "Decreasing" }
        ]
    },
    {
        patientName: "Keshav",
        tagline: "Pre-Diabetes & Digestive Health Recovery",
        role: "Digestive Health & Energy Reset",
        quote: "Having a change in the diet actually made me understand where I am missing out on my nutrition. I was concerned about my weight gain, bloating and sluggishness during the day. Following the diet suggested by Shreya really helped me with those problems. I especially liked the regular follow ups since, in a way, they held me accountable for my choices without being judged.",
        easyWords: "Keshav came to us with complaints of bloating, gastric discomfort, acidity, low energy levels, sluggishness, weight gain, and pre-diabetes. He opted for our 1-month nutrition and lifestyle management plan, following which significant improvements were observed. Along with improved blood sugar levels, he also experienced better digestion, reduced bloating and acidity, improved energy levels, and overall well-being.",
        parameters: [
            { name: "Fasting Blood Glucose", before: "102 mg/dL", after: "86 mg/dL", status: "Normal Range" },
            { name: "Post Prandial Blood Glucose", before: "121 mg/dL", after: "88 mg/dL", status: "Normal Range" },
            { name: "Digestion & Bloating", before: "Severe Acidity/Bloating", after: "Fully Resolved", status: "Comfortable" },
            { name: "Energy Levels & Vitality", before: "Low / Sluggish", after: "Vibrant / High", status: "Restored" }
        ]
    },
    // {
    //     patientName: "Anoop",
    //     tagline: "Prediabetes & Cholesterol Management",
    //     role: "Insulin Sensitivity & Lipids",
    //     quote: "I had tried multiple crash diets but always gained the weight back. Shreya's science-based, holistic approach was eye-opening. Not only did I manage to reverse my prediabetic HbA1c levels, but my cholesterol is finally in the green. I eat fully, feel satisfied, and have more energy than ever before.",
    //     easyWords: "Anoop presented with chronic insulin resistance (prediabetes) and hyperlipidemia. He was trapped in a cycle of crash diets. We designed a low-glycemic index, high-fiber clinical diet that stabilized blood sugar, optimized lipid levels, and stimulated long-term insulin sensitivity without restrictive calorie counting.",
    //     parameters: [
    //         { name: "HbA1c (Blood Sugar)", before: "6.4% (Prediabetic)", after: "5.5% (Healthy)", status: "Prediabetes Reversed" },
    //         { name: "Total Cholesterol", before: "240 mg/dL", after: "190 mg/dL", status: "Optimal Range" },
    //         { name: "Triglycerides", before: "195 mg/dL", after: "140 mg/dL", status: "Healthy Range" },
    //         { name: "Body Weight", before: "78 kg", after: "71 kg", status: "-7 kg Reached" }
    //     ]
    // }
];
