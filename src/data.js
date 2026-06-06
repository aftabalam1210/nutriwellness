/* Central Data Management File */

export const recipes = [
    {
        id: 1,
        title: "Moong Paneer Salad",
        isVeg: true,
        image: "/assets/moongdal.png",
        time: "15 min",
        cal: "470 kcal",
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
                    "30g Moong Dal (soaked overnight / boiled)",
                    "1 small Onion",
                    "1 medium Tomato",
                    "1/2 medium / 1 small Cucumber",
                    "60g Paneer",
                    "Coriander leaves",
                    "30g Bajra Puffs / Rice puffs"
                ]
            },
            {
                section: "For Dressing",
                items: [
                    "60ml Hung Curd",
                    "2 cloves Garlic",
                    "1/2 tsp Red Chilli Powder",
                    "1/2 tsp Coriander Powder",
                    "1/2 tsp Black Pepper",
                    "1/2 tsp Cumin Powder"
                ]
            }
        ],
        instructions: [
            "Soak the moong dal overnight or boil until tender but firm.",
            "In a large mixing bowl, combine the moong dal, chopped onion, tomato, cucumber, paneer, and puffs.",
            "For the dressing: In a blender, combine hung curd, garlic, red chilli powder, coriander powder, black pepper, and cumin powder. Blend until smooth.",
            "Pour the blended dressing over the salad mixture.",
            "Toss well to ensure everything is evenly coated.",
            "Garnish with fresh coriander leaves and serve immediately."
        ]
    },
    {
        id: 2,
        title: "Chickpea Salad",
        isVeg: true,
        image: "/assets/Chickpea salad.png",
        time: "10 min",
        cal: "316 kcal",
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
                    "1 medium Cucumber, sliced",
                    "30g Boiled Chickpeas",
                    "1 tsp Red Chilli Powder",
                    "1 tsp Black Pepper Powder",
                    "1 tsp Rock Salt / Iodised Salt"
                ]
            },
            {
                section: "For Dressing",
                items: [
                    "60ml Hung Curd",
                    "2 cloves Garlic",
                    "1/2 tsp Red Chilli Powder"
                ]
            }
        ],
        instructions: [
            "Slice the cucumber into desired shapes.",
            "In a pan, take a small bowl of boiled chickpeas.",
            "Add 1 tsp red chilli powder, 1 tsp black pepper, and 1 tsp salt to the chickpeas and mix well (sauté lightly if desired).",
            "For the dressing: In a blender, combine hung curd, garlic, and 1/2 tsp red chilli powder. Blend until smooth.",
            "Pour the blended dressing over the seasoned chickpeas.",
            "Mix everything well.",
            "Garnish with fresh coriander leaves.",
            "Serve immediately."
        ]
    },
    //{
    //     id: 3,
    //     title: "Herb Grilled Chicken Bowl",
    //     isVeg: false,
    //     // Using a high quality grilled chicken bowl image
    //     image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    //     time: "25 min",
    //     cal: "420 kcal",
    //     category: "Dinner",
    //     url: "#",
    //     description: "Tender grilled chicken breast seasoned with aromatic herbs, served alongside roasted vegetables and a side of light lemon-herb vinaigrette.",
    //     nutrition: {
    //         energy: "420.0 kcal",
    //         carbohydrates: "12.0 g",
    //         protein: "38.0 g",
    //         fat: "10.0 g",
    //         calcium: "60.0 mg"
    //     },
    //     ingredients: [
    //         {
    //             section: "For the base",
    //             items: [
    //                 "150g Chicken Breast, skinless",
    //                 "1/2 cup Broccoli florets",
    //                 "1/2 cup Bell peppers, sliced",
    //                 "1 tsp Olive oil",
    //                 "Mixed herbs (Oregano, Thyme)"
    //             ]
    //         },
    //         {
    //             section: "For Marinade",
    //             items: [
    //                 "1 tbsp Lemon juice",
    //                 "1 clove Garlic, minced",
    //                 "1/2 tsp Black pepper",
    //                 "1/2 tsp Salt"
    //             ]
    //         }
    //     ],
    //     instructions: [
    //         "Clean and score the chicken breast, then marinate with lemon juice, garlic, mixed herbs, salt, and pepper for 15 minutes.",
    //         "Heat olive oil in a grill pan over medium heat.",
    //         "Grill the chicken for 6-7 minutes on each side until fully cooked and juices run clear.",
    //         "In the same pan, toss broccoli and bell peppers, sautéing for 3-4 minutes until tender-crisp.",
    //         "Slice the grilled chicken and serve in a bowl alongside the sautéed vegetables.",
    //         "Drizzle with remaining lemon juice and serve warm."
    //     ]
    //}
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
