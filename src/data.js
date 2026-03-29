/* Central Data Management File */

export const recipes = [
    {
        id: 1,
        title: "Moong Paneer Salad",
        // Using a generic healthy salad image for placeholder as provided image is document text
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
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
        // Using a generic chickpea salad image
        image: "https://plus.unsplash.com/premium_photo-1673590981815-bdd1a5fceca1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    {
        id: 3,
        title: "Berry Antioxidant Smoothie",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80&w=800",
        time: "5 min",
        cal: "210 kcal",
        category: "Drink",
        url: "#",
        description: "Refresh and recharge with this antioxidant-rich smoothie. A sweet and tangy blend of mixed berries, spinach, and almond milk for a healthy glow.",
        ingredients: [
            "1 cup Mixed Berries (frozen)",
            "1 handful Spinach",
            "1 cup Almond Milk (unsweetened)",
            "1 tbsp Chia Seeds",
            "1 tsp Honey (optional)"
        ],
        instructions: [
            "Add all ingredients to a high-speed blender.",
            "Blend on high until smooth and creamy.",
            "Pour into a glass and top with a few fresh berries if desired.",
            "Serve immediately for best texture."
        ]
    },
    {
        id: 4,
        title: "Grilled Salmon Bowl",
        image: "https://lexiscleankitchen.com/wp-content/uploads/2024/07/grilled-salmon-bowls-3-scaled.jpg",
        time: "35 min",
        cal: "550 kcal",
        category: "Dinner",
        url: "#",
        description: "A heart-healthy dinner featuring omega-3 rich salmon, steamed greens, and brown rice. Simple, filling, and delicious.",
        ingredients: [
            "1 Salmon Fillet (6oz)",
            "1 cup Brown Rice, cooked",
            "1 cup Steamed Broccoli",
            "1 tsp Soy Sauce",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Season salmon fillet with salt, pepper, and a little olive oil.",
            "Grill or pan-sear salmon for 4-5 minutes per side until cooked through.",
            "Arrange a bowl with brown rice and steamed broccoli.",
            "Place salmon on top and drizzle with soy sauce.",
            "Garnish with sesame seeds and serve warm."
        ]
    }
];

export const blogPosts = [
    {
        id: 1,
        title: "Top 10 Superfoods for Immunity",
        excerpt: "Discover the power ingredients that can help boost your immune system naturally this season.",
        date: "Oct 12, 2023",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
        fullContent: [
            "As the seasons change, our immune systems can take a hit. Incorporating the right foods into your diet can make a significant difference in how your body fights off illnesses.",
            "Start with citrus fruits like oranges, grapefruits, and lemons. They are packed with Vitamin C, which is essential for white blood cell production.",
            "Don't overlook garlic and ginger. These potent ingredients have been used for centuries to combat sickness and reduce inflammation.",
            "Finally, adding fermented foods like yogurt or kimchi can improve your gut health, which is surprisingly linked to overall immunity."
        ]
    },
    {
        id: 2,
        title: "Mindful Eating: A Beginner's Guide",
        excerpt: "Learn how to build a better relationship with food by practicing mindfulness during meals.",
        date: "Sep 28, 2023",
        image: "https://images.unsplash.com/photo-1511690656952-34342d5c71df?auto=format&fit=crop&q=80&w=800",
        fullContent: [
            "Mindful eating is not a diet; it's a practice of being fully present during your meals. In our fast-paced world, we often eat while distracted by phones or TV.",
            "To start, try eating without any screens. Focus on the colors, textures, and aromas of your food.",
            "Chew slowly and appreciate each bite. This not only enhances the flavor but also gives your brain time to register fullness signals.",
            "By slowing down, you may find you enjoy your food more and naturally eat in better alignment with your body's needs."
        ]
    },
    {
        id: 3,
        title: "The Truth About Intermittent Fasting",
        excerpt: "Breaking down the science, benefits, and myths surrounding this popular diet trend.",
        date: "Sep 15, 2023",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
        fullContent: [
            "Intermittent fasting (IF) has gained massive popularity, but what exactly is it? Simply put, it's an eating pattern that cycles between periods of fasting and eating.",
            "Common methods include the 16/8 method (fasting for 16 hours, eating for 8) or the 5:2 diet.",
            "Supporters claim it aids in weight loss, improves metabolic health, and even extends lifespan. However, it's not for everyone.",
            "It's crucial to consult with a professional before starting IF, especially for women or those with a history of disordered eating."
        ]
    }
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
        id: 1,
        name: "Sarah Jenkins",
        text: "I've tried so many diets, but this holistic approach was the only thing that stuck. I feel more energetic and balanced than I have in years!",
        role: "Lost 15 lbs",
        image: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=random"
    },
    {
        id: 2,
        name: "Michael Chen",
        text: "The personalized meal plans were a game changer. Not only did I reach my goal weight, but my digestion has never been better.",
        role: "Gut Health Program",
        image: "https://ui-avatars.com/api/?name=Michael+Chen&background=random"
    },
    {
        id: 3,
        name: "Emma Wilson",
        text: "Truly professional guidance. The nutritionist was always available to answer my questions and keep me motivated.",
        role: "Lifestyle Reset",
        image: "https://ui-avatars.com/api/?name=Emma+Wilson&background=random"
    }
];
